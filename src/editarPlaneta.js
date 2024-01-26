const AWS = require("aws-sdk");
const TableName = process.env.TABLE_PLANETAS;

const actualizarPlaneta = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;
    const {nombre, periodo_rotacion, periodo_orbital, diametro, clima, gravedad, terreno} = JSON.parse(event.body);

    await dynamodb.update({
        TableName: TableName,
        Key: {id},
        UpdateExpression: 'set nombre = :nombre, periodo_rotacion = :periodo_rotacion, periodo_orbital = :periodo_orbital, diametro = :diametro, clima = :clima, gravedad = :gravedad, terreno = :terreno',
        ExpressionAttributeValues: {
            ':nombre': nombre,
            ':periodo_rotacion': periodo_rotacion,
            ':periodo_orbital': periodo_orbital,
            ':diametro': diametro,
            ':clima': clima,
            ':gravedad': gravedad,
            ':terreno': terreno,
        },
        ReturnValues: "ALL_NEW",
    }).promise();

    return{
        status: 200,
        body: JSON.stringify({ message: "actualizado ok" }),
    };
};

module.exports = {
    actualizarPlaneta,
};