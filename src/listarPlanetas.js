const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PLANETAS;

const obtenerPlanetas = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: TableName,
    }).promise();

    const planetas = result.Items;

    return{
        status: 200,
        body: { planetas },
    };
};

module.exports = {
    obtenerPlanetas,
};