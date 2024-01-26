const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PLANETAS;

const quitarPlaneta = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.delete({
        TableName: TableName,
        Key: {
            id: id
        }
    }).promise();

    const planeta = result.Item;

    return{
        status: 200,
        body: { message: "Planeta eliminado." },
    };
};

module.exports = {
    quitarPlaneta,
};