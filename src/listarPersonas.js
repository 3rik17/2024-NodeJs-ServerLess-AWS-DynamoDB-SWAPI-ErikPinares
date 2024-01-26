const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PERSONAS;

const obtenerPersonas = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: TableName,
    }).promise();

    const personas = result.Items;

    return{
        status: 200,
        body: { personas },
    };
};

module.exports = {
    obtenerPersonas,
};