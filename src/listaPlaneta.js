const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PLANETAS;

const obtenerPlaneta = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.get({
        TableName: TableName,
        Key: {
            id: id
        }
    }).promise();

    const planeta = result.Item;

    return{
        status: 200,
        body: { planeta },
    };
};

module.exports = {
    obtenerPlaneta,
};