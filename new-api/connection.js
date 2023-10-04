const mongoose=require("mongoose");
const connect = mongoose.connect(
    "mongodb+srv://admin123:sharvani02@cluster0.hflqq1r.mongodb.net/?retryWrites=true&w=majority",
    
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,

    });

    connect
    .then(()=> {
        console.log("MongoDB Connection Succeeded");

    })

    .catch((err)=> {
        console.log("Error in DB Connection: "+err);

    });

    module.exports = connect;


    
