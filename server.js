const express = require('express');  // primero se hace la constante de express porque requerimos express en este trabajo
const {faker} = require('@faker-js/faker'); // lo mismo para faker porque lo requerimos

const app = express();

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.telefono = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.address.street(),
            ciudad: faker.address.city(),
            estado: faker.address.state(),
            cp: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    let nuevoUsuario = new Usuario();
    res.json(nuevoUsuario);
});

app.get("/api/companies/new", (req, res) => {
    let nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
});

app.get("/api/user/company", (req, res) => {
    let nuevoUsuario = new Usuario();
    let nuevaEmpresa = new Empresa();
    res.json([nuevoUsuario, nuevaEmpresa]);
});


app.listen(8000, () => console.log("Server corriendeichon")); // inicializador de nuestro servidor! super importante 