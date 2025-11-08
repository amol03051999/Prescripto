import {v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () =>{

    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_NAME,
         api_:process.env.CLOUDINARY_NAME,
        cloud_name:process.env.CLOUDINARY_NAME,
    })
}