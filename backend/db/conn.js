const mongoose = require("mongoose")

async function main(){

try {
    //CFitGvLdOS2XYUob


await mongoose.connect(
    `mongodb+srv://armandoK:CFitGvLdOS2XYUob@cluster0.axsveel.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conectado ao Banco");

} catch (error) {
    
    console.log(`Erro:${error}`)
}
}

module.exports = main
//everything is ok.
//mongodb+srv://armandoK:<password>@cluster0.axsveel.mongodb.net/?retryWrites=true&w=majority
//    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.BD_PWD}@cluster0.axsveel.mongodb.net/${bdname}?retryWrites=true&w=majority`
