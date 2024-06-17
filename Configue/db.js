 


            const url ="mongodb+srv://pradumyadav17:pradum431@cluster0.wfcnawr.mongodb.net/E-commerce?retryWrites=true&w=majority";
           // const url ="mongodb+srv://pradumyadav020:XxMKZrJVaNVx0pwN@cluster0.64g71ok.mongodb.net/Dashboard?retryWrites=true&w=majority&appName=Cluster0";
            const mongoose= require("mongoose")


            async  function connection() {
                try{

                    await mongoose.connect(url)
                    console.log("Data Base Connected")
                }
                catch(err){
                    console.log("This is wrong",err)
                }
            }

            module.exports =connection