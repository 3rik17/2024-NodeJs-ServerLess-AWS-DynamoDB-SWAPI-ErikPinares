const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PERSONAS;

const quitarPersona = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.delete({
        TableName: TableName,
        Key: {
            id: id
        }
    }).promise();

    const persona = result.Item;

    return{
        status: 200,
        body: { message: "Persona eliminado." },
    };
};

module.exports = {
    quitarPersona,
};