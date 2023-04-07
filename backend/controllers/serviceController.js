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

         res.status(201).json({response, msg: "service criado com sucesesso!"});

    } catch (error) {
        console.log(error)
        
    }
},

getAll:async (req, res) => {
try {
    const Services = await serviceModel.find()
     res.json(Services);
    
} catch (error) {
    console.log(error)
    
}

},

get: async(req, res) =>{
    try {
        const id = req.params.id;
        const service = await serviceModel.findById(id);
            if(!service){
                res.status(404).json({ msg:"Serviço não encontrado" });
                return;
            }
            res.json(service);
    } catch (error) {
        res.status(404).json({ msg:"Id Não Existe e muito longo" });  
    }
},
 delete:async(req, res) => {
    try {
        const id = req.params.id;
        const service = await serviceModel.findById(id);
        if(!service){
            res.status(404).json({ msg:"Serviço não encontrado" });
            return;
        }

        const deledService = await serviceModel.findByIdAndDelete(id);
        res.status(200).json({deledService, msg:"Serviço excluido com sucesso"});

    } catch (error) {
        res.status(404).json({msg:"digitou errado"})
        
    }
 },
 update: async(req, res) => {
    try {
        const id = req.params.id;
        const Service ={
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            image:req.body.image,
        };
        const updatedservice = await serviceModel.findByIdAndUpdate(id, Service);

        if(!updatedservice){
            res.status(404).json({ msg:"Serviço not found"});
            return;
        }
    
        res.status(200).json({Service, msg:"Actualizado com sucesso"})
    } catch (error) {
        res.status(404).json({ msg:"Servico não encontrado"}); 
    }
 }

};

module.exports = serviceController;