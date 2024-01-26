'use strict';

const {v4} = require("uuid");
const AWS = require("aws-sdk");
const moment = require("moment");
const TableName = process.env.TABLE_PLANETAS

const crearPlaneta = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { nombre, periodo_rotacion, periodo_orbital, diametro, clima, gravedad, terreno, superficie_agua, poblacion, residentes, peliculas, creado, editado, url } = JSON.parse(event.body);
    const fecha_creacion = moment.utc().format();
    const id = v4();

    const nuevoPlaneta = {
        id,
        nombre,
        periodo_rotacion,
        periodo_orbital,
        diametro,
        clima,
        gravedad,
        terreno,
        superficie_agua,
        poblacion,
        residentes,
        peliculas,
        creado,
        editado,
        url,
        fecha_creacion,
    };

    await dynamodb.put({
        TableName,
        Item: nuevoPlaneta
    }).promise();

    return{
        status: 200,
        body: JSON.stringify(nuevoPlaneta)
    };
};

module.exports = {
    crearPlaneta,
};