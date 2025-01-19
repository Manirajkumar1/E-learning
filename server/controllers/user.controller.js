import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js";

export const register = async(req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exist with this email"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            success:true,
            message:"Account created successfully"
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"failed to register"
        })
    }
}

// login controller

export const login = async(req, res) => {
    try {
        const {email, password,} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:falsse,
                message:"All fields are required"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            })
        }

        generateToken(res,user, `welcome back ${user.name}`);
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"failed to login"
        })
    }
}

export const logout = async (_, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            message:"Logged out",
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"failed to register"
        })
    }
}

export const getUserProfile = async(req, res) => {
    try {
        const userId = req.id;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({
                message:"Profile not found",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            user
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            success:false,
            message:"failed to load user"
        })
    }
}

export const updateProfile = async (req, res) => {
    try {
      const userId = req.id;
      const { name } = req.body;
      const profilePhoto = req.file;
  
      if (!profilePhoto) {
        return res.status(400).json({
          success: false,
          message: "Profile photo is required",
        });
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      // If a previous photo exists, delete it from Cloudinary
      if (user.photoUrl) {
        const publicId = user.photoUrl.split("/").pop().split(".")[0];
        await deleteMediaFromCloudinary(publicId);
      }
  
      // Upload the new photo
      const cloudResponse = await uploadMedia(profilePhoto.path);
      const photoUrl = cloudResponse.secure_url;
  
      // Prepare updated data
      const updatedData = { name, photoUrl };
  
      // Update the user profile
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedData,
        { new: true }
      ).select("-password");
  
      return res.status(200).json({
        success: true,
        user: updatedUser,
        message: "Profile updated successfully",
      });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({
        success: false,
        message: "Failed to update profile",
      });
    }
  };
  