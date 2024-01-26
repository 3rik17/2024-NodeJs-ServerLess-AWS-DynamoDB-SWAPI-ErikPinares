const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PERSONAS;

const obtenerPersona = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.get({
        TableName: TableName,
        Key: {
            id: id
        }
    }).promise();

    const persona = result.Item;

    return{
        status: 200,
        body: { persona },
    };
};

module.exports = {
    obtenerPersona,
};