'use strict';

const {v4} = require("uuid");
const AWS = require("aws-sdk");
const moment = require("moment");
const TableName = process.env.TABLE_PERSONAS

const crearPersona = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { nombre, talla, peso, cabello_color, piel_color, ojos_color, año_nacimiento, genero, planeta_natal, peliculas, especies, vehiculos, naves_estelares, creado, editado, url } = JSON.parse(event.body);
    const fecha_creacion = moment.utc().format();
    const id = v4();

    const nuevaPersona = {
        id,
        nombre,
        talla,
        peso,
        cabello_color,
        piel_color,
        ojos_color,
        año_nacimiento,
        genero,
        planeta_natal,
        peliculas,
        especies,
        vehiculos,
        naves_estelares,
        creado,
        editado,
        url,
        fecha_creacion,
    };

    await dynamodb.put({
        TableName,
        Item: nuevaPersona
    }).promise();

    return{
        status: 200,
        body: JSON.stringify(nuevaPersona)
    };

};

module.exports = {
    crearPersona,
};