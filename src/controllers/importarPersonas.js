const { mappingDataPersonas } = require("../helpers/mappingDataPersonas");
const { formatResponse } = require("../helpers/response");
const { swapiGetDataPersonas } = require("../services/swapiGetDataPersonas");

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const moment = require("moment");
const {v4} = require("uuid");
const TableName = 'PersonasTable';

const getDataPersonas = async (event) => {

    //const dynamodb = DynamoDBDocument.from(new DynamoDB());

    const {page} = event.queryStringParameters || {page:1}

    const result = await swapiGetDataPersonas(page);
    const response = mappingDataPersonas(result.data.results);

     console.info(TableName);
  
    for(let valores of response)
    {
        console.info(valores);
        await docClient.send(
            new PutCommand({
                TableName: TableName,
                Item: {
                    id: v4(),
                    nombre: valores.nombre,
                    talla: valores.talla,
                    peso: valores.peso,
                    cabello_color: valores.cabello_color,
                    piel_color: valores.piel_color,
                    ojos_color: valores.ojos_color,
                    año_nacimiento: valores.año_nacimiento,
                    genero: valores.genero,
                    planeta_natal: valores.planeta_natal,
                    peliculas: valores.peliculas,
                    especies: valores.especies,
                    vehiculos: valores.vehiculos,
                    naves_estelares: valores.naves_estelares,
                    creado: valores.creado,
                    editado: valores.editado,
                    url: valores.url,
                    fecha_creacion: moment.utc().format()
                }
            })
        );
    }

    return (formatResponse(200, response));
}

module.exports = {
    getDataPersonas
}