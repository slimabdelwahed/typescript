const mongoose=require("mongoose");
const config=require('config');
const connectDB=()=>{
  mongoose.connect(config.get("MONGOURI"),{useUnifiedTopology:true}) 
  .then(()=>console.log("mongoose Connected"))
  .catch(()=>console.log("erreur DB")) 
};

module.exports=connectDB