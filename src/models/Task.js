import {Schema,model} from 'mongoose'

const usuarioSchema = new Schema({
  ID: Number,
  Usuario: {
    type:String,
    unique : true
    },
  Contrasenia : String,
  Nombre : String,
  Apellido: String,
  Localidad: String,
  Edad : Number,
  Email: {
    type:String,
    },
  FechaAlta: Date,
  TarjetaBancaria: String,
  Nacionalidad: String,
  Monedas: Number
},{
    versionKey:false
});



export default model('Usuario',usuarioSchema)