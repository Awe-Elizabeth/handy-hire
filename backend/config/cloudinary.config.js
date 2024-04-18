const {v2} = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config()
          
v2.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});

exports.uploadImage = async (data, id) => {

   dataUri = "data:image/jpeg;base64," + data
     return v2.uploader.upload( dataUri, {
        public_id: id
     },
     function(error, result){
         if(error){
            console.log(error)
            return error;
         }else{
            // console.log(result);
            return result;
         } 
     }
);
}