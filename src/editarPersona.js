const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PERSONAS;

const actualizarPersona = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const {nombre, talla, peso, cabello_color, piel_color, ojos_color} = JSON.parse(event.body);

    await dynamodb.update({
        TableName: TableName,
        Key: {id},
        UpdateExpression: 'set nombre = :nombre, talla = :talla, peso = :peso, cabello_color = :cabello_color, piel_color = :piel_color, ojos_color = :ojos_color',
        ExpressionAttributeValues: {
            ':nombre': nombre,
            ':talla': talla,
            ':peso': peso,
            ':cabello_color': cabello_color,
            ':piel_color': piel_color,
            ':ojos_color': ojos_color,
        },
        ReturnValues: "ALL_NEW",
    }).promise();

    return{
        status: 200,
        body: JSON.stringify({ message: "actualizado ok" }),
    };
};

module.exports = {
    actualizarPersona,
};