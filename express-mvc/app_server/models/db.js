let mongoose = require("mongoose");
let dbuRI = "mongodb://localhost:27017/pawII-si5c";

mongoose.connect(dbuRI, {
    useNewUrlparser: true
});
mongoose.connection.on("connected", () =>{
    console.log("Connected to MongoDB");
});
mongoose.connection.on("erorr", (erorr) =>{
    console.log("Connection Erorr :" + erorr);
});
mongoose.connection.on("disconnected", () =>{
    console.log("Connection from MongoDB");
});