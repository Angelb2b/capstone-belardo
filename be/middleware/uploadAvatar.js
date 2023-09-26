const cloudinary = require ('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const multer = require ('multer')

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const storageAvatar = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'avatars', //nome
        format: async(req, file) => "jpg",
        public_id: (req, file) => file.name
    }
})

const avatar = multer({
    storage: storageAvatar
})

module.exports = avatar

