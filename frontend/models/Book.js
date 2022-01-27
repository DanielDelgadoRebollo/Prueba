class Usuario {
  constructor(usuario, contrasenia, nombre, apellidos, edad, localizacion, email, sexo, trabajo, tarjetaBancaria, nacionalidad, fechaAlta) {
    id++;
    this.usuario = usuario;
    this.contrasenia = contrasenia;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.localizacion = localizacion;
    this.email = email;
    this.sexo = sexo;
    this.trabajo = trabajo;
    this.tarjetaBancaria = tarjetaBancaria;
    this.nacionalidad = nacionalidad;
    this.fechaAlta = fechaAlta;
  }
}

export default Usuario;
