import mongoose from "mongoose";

const Materia = new mongoose.Schema({
    //CREAMOS LOS ATRBIUTOS DE LA DB 
    nameSubject: { 
        type: String,
        require:true,
        trim:true
    },
    descriptionSubject: {
        type: String,
        require:true,
        trim:true
    }
})

export default mongoose.model('Materia',Materia);