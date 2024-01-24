import mongoose from "mongoose";

const Alumno = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    }
    ,
    edad:{
        type:String,
        require:true,
        trim:true
    }
})

export default mongoose.model('Alumno',Alumno);