import mongoose from "mongoose";

const Tarea = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    }
})

export default mongoose.model('Tarea', Tarea);