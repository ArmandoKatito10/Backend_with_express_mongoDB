const {Service: serviceModel } =require("../models/Services");

const serviceController={
     
create: async(req, res) => {
    try {

        const Service ={
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.body.image,
        };
        
        const response = await serviceModel.create(Service);

         res.status(201).json({response, mes: "service criado com sucesesso!"});

    } catch (error) {
        console.log(error)
        
    }
}


};

module.exports = serviceController;