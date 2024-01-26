const { mappingDataPlanetas } = require("../helpers/mappingDataPlanetas");
const { formatResponse } = require("../helpers/response");
const { swapiGetDataPlanetas } = require("../services/swapiGetDataPlanetas");
const AWS = require("aws-sdk");
const moment = require("moment");
const {v4} = require("uuid");
const TableName = process.env.TABLE_PLANETAS

const getDataPlanetas = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {page} = event.queryStringParameters || {page:1}

    const result = await swapiGetDataPlanetas(page);
    const response = mappingDataPlanetas(result.data.results);

    for(let valores of response)
    {
        console.info(valores);
        await dynamodb.put({
            TableName: TableName,
            Item: {
                id: v4(),
                nombre: valores.nombre,
                periodo_rotacion: valores.periodo_rotacion,
                periodo_orbital: valores.periodo_orbital,
                diametro: valores.diametro,
                clima: valores.clima,
                gravedad: valores.gravedad,
                terreno: valores.terreno,
                superficie_agua: valores.superficie_agua,
                poblacion: valores.poblacion,
                residentes: valores.residentes,
                peliculas: valores.peliculas,
                creado: valores.creado,
                editado: valores.editado,
                url: valores.url,
                fecha_creacion: moment.utc().format()
            }
        }).promise();
    }

    return (formatResponse(200, response));
}

module.exports = {
    getDataPlanetas
}