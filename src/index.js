const express = require("express");
const app = express();
const PORT = 9000;
const path = require("path");
const axios = require("axios")
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node SWAPI-Dynamodb API',
            version: '1.0.0',
        },
    },
    apis: [`${__dirname}/index.js`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
console.log(swaggerDocs);

/**
 * @openapi
 * /importarPlanetas:
 *   get:
 *     tags:
 *       - Planetas
 *     summary: Importar Planetas
 *     description: Primer paso es obtener la data desde el SWAPI hacia la Tabla Planetas de la BD DynamoDB, para ello ejecutar este EndPoint
 *     responses:
 *       200:
 *         description: Retorna un json de la data importada en español, en este caso 10 nodos de la primera pagina del API SWAPI.
 *
 * /importarPersonas:
 *   get:
  *     tags:
 *       - Personas
 *     summary: Importar Personas
 *     description : Primer paso es obtener la data desde el SWAPI hacia la Tabla Personas de la BD DynamoDB, para ello ejecutar este EndPoint
 *     responses:
 *       200:
 *         description: Retorna un json de la data importada en español, en este caso 10 nodos de la primera pagina del API SWAPI.
 *
 * /listarPlanetas:
 *   get:
  *     tags:
 *       - Planetas
 *     summary: Listar todos los Planetas
 *     description : Este EndPoint Lista todos los Planetas de la Tabla Planetas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de la data Planetas.
 *
 * /listarPersonas:
 *   get:
  *     tags:
 *       - Personas
 *     summary: Listar todas las Personas
 *     description : Este EndPoint Lista todas las Personas de la Tabla Personas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de la data Personas.
 *
 * /agregarPlaneta:
 *   post:
 *     tags:
 *       - Planetas
 *     summary: Agrega un Planeta
 *     description: Agrega un Planeta a la Tabla Planetas de la BD DynamoDB, para ello se solicita los siguientes datos
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Planeta'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna un json de la data ingresada.
 *
 * /agregarPersona:
 *   post:
 *     tags:
 *       - Personas
 *     summary: Agrega una Persona
 *     description: Agrega una Persona a la Tabla Personas de la BD DynamoDB, para ello se solicita los siguientes datos
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *       required: true
 *     responses:
 *       200:
 *         description: Retorna un json de la data ingresada.
 *
 * /listaPlaneta/{id}:
 *   get:
 *     tags:
 *       - Planetas
 *     summary: Lista un Planeta
 *     description : Este EndPoint Lista un Planeta por ID de la Tabla Planetas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de la data Planetas.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Busca en la tabla Planeta por su ID
 *         required: true
 *         schema:
 *           type: string
 *
 * /listaPersona/{id}:
 *   get:
 *     tags:
 *       - Personas
 *     summary: Lista una Persona
 *     description : Este EndPoint Lista una Persona por ID de la Tabla Personas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de la data Personas.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Busca en la tabla Personas por su ID
 *         required: true
 *         schema:
 *           type: string
 *
 * /editarPlaneta/{id}:
 *   post:
 *     tags:
 *       - Planetas
 *     summary: Editar un Planeta por su ID
 *     description : Este EndPoint Edita un Planeta por ID de la Tabla Planetas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de la data Planetas.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: nombre
 *         in: query
 *         description: nombre de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: periodo_rotacion
 *         in: query
 *         description: periodo rotacion de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: periodo_orbital
 *         in: query
 *         description: periodo orbital de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: diametro
 *         in: query
 *         description: diametro de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: clima
 *         in: query
 *         description: clima de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: gravedad
 *         in: query
 *         description: gravedad de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *       - name: terreno
 *         in: query
 *         description: terreno de un Planeta
 *         required: true
 *         schema:
 *           type: string
 *
 * /editarPersona/{id}:
 *   post:
 *     tags:
 *       - Personas
 *     summary: Editar una Persona por su ID
 *     description : Este EndPoint Edita una Persona por ID de la Tabla Personas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de la data Personas.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de una Persona
 *         required: true
 *         schema:
 *           type: string
 *       - name: nombre
 *         in: query
 *         description: nombre de una Persona
 *         required: true
 *         schema:
 *           type: string
 *       - name: talla
 *         in: query
 *         description: talla de una Persona
 *         required: true
 *         schema:
 *           type: string
 *       - name: peso
 *         in: query
 *         description: peso de una Persona
 *         required: true
 *         schema:
 *           type: string
 *       - name: cabello_color
 *         in: query
 *         description: cabello color de una Persona
 *         required: true
 *         schema:
 *           type: string
 *       - name: piel_color
 *         in: query
 *         description: piel color de una Persona
 *         required: true
 *         schema:
 *           type: string
 *       - name: ojos_color
 *         in: query
 *         description: ojos color de una Persona
 *         required: true
 *         schema:
 *           type: string
 *
 * /eliminarPlaneta/{id}:
 *   delete:
 *     tags:
 *       - Planetas
 *     summary: Elimina un Planeta
 *     description : Este EndPoint Elimina un Planeta por ID de la Tabla Planetas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de respuesta.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Busca en la tabla Planeta por su ID y Elimina
 *         required: true
 *         schema:
 *           type: string
 *
 * /eliminarPersona/{id}:
 *   delete:
 *     tags:
 *       - Personas
 *     summary: Elimina una Persona
 *     description : Este EndPoint Elimina una Persona por ID de la Tabla Personas de DynamoDB
 *     responses:
 *       200:
 *         description: Retorna un json de respuesta.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Busca en la tabla Personas por su ID y Elimina
 *         required: true
 *         schema:
 *           type: string
 *
 * components:
 *   schemas:
 *     Planeta:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: Tatooine
 *         periodo_rotacion:
 *           type: string
 *           example: 222
 *         periodo_orbital:
 *           type: string
 *           example: 222
 *         diametro:
 *           type: string
 *           example: 22222
 *         clima:
 *           type: string
 *           example: arid
 *         gravedad:
 *           type: string
 *           example: 1 standard
 *         terreno:
 *           type: string
 *           example: desert
 *         superficie_agua:
 *           type: string
 *           example: 1
 *         poblacion:
 *           type: string
 *           example: 200000
 *         residentes:
 *           type: string
 *           example: []
 *         peliculas:
 *           type: string
 *           example: []
 *         creado:
 *           type: string
 *           example: 2014-12-09T13:50:49.641000Z
 *         editado:
 *           type: string
 *           example: 2014-12-20T20:58:18.411000Z
 *         url:
 *           type: string
 *           example: https://swapi.dev/api/planets/1/
 *       xml:
 *         name: planeta
 *     Persona:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: Luke 222
 *         talla:
 *           type: string
 *           example: 222
 *         peso:
 *           type: string
 *           example: 22
 *         cabello_color:
 *           type: string
 *           example: blond2
 *         piel_color:
 *           type: string
 *           example: fair2
 *         ojos_color:
 *           type: string
 *           example: blue2
 *         año_nacimiento:
 *           type: string
 *           example: 19BBY
 *         genero:
 *           type: string
 *           example: male
 *         planeta_natal:
 *           type: string
 *           example: https://swapi.dev/api/planets/1/
 *         peliculas:
 *           type: string
 *           example: []
 *         especies:
 *           type: string
 *           example: []
 *         vehiculos:
 *           type: string
 *           example: []
 *         naves_estelares:
 *           type: string
 *           example: []
 *         creado:
 *           type: string
 *           example: 2014-12-09T13:50:51.644000Z
 *         editado:
 *           type: string
 *           example: 2014-12-09T13:50:51.644000Z
 *         url:
 *           type: string
 *           example: https://swapi.dev/api/people/1/
 *       xml:
 *         name: persona
 */
app.get('/', (req, res) => {
    res.send('Por favor ir a: <a href="http://localhost:9000/api-docs/">http://localhost:9000/api-docs/</a>');
});

app.get('/importarPlanetas', async (req, res) => {
    try {
        const result = await axios.get('https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/importarPlanetas');
        const json = await JSON.parse(JSON.stringify(result.data));
        res.status(200).send(json);
    } catch(ex) {
        console.log(ex);
        res.status(500).send(ex.message);
    }
});

app.get('/importarPersonas', async (req, res) => {
    try {
        const result = await axios.get('https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/importarPersonas');
        const json = await JSON.parse(JSON.stringify(result.data));
        res.status(200).send(json);
    } catch(ex) {
        console.log(ex);
        res.status(500).send(ex.message);
    }
});

app.get('/listarPlanetas', async (req, res) => {
    try {
        const result = await axios.get('https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listarPlanetas');
        const json = await JSON.parse(JSON.stringify(result.data));
        res.status(200).send(json);
    } catch(ex) {
        console.log(ex);
        res.status(500).send(ex.message);
    }
});

app.get('/listarPersonas', async (req, res) => {
    try {
        const result = await axios.get('https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listarPersonas');
        const json = await JSON.parse(JSON.stringify(result.data));
        res.status(200).send(json);
    } catch(ex) {
        console.log(ex);
        res.status(500).send(ex.message);
    }
});

app.use(express.json());
app.post('/agregarPlaneta', async (req, res, next) => {
  try {
      const result = await axios.post('https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/agregarPlaneta', req.body);
      res.status(200).send(req.body);
  } catch(ex) {
      console.log(ex);
      res.status(500).send(ex.message);
  }
});

app.post('/agregarPersona', async (req, res, next) => {
  try {
      const result = await axios.post('https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/agregarPersona', req.body);
      res.status(200).send(req.body);
  } catch(ex) {
      console.log(ex);
      res.status(500).send(ex.message);
  }
});

app.get('/listaPlaneta/(:id)', async (req, res) => {
  try {
      const result = await axios.get(`https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listaPlaneta/${req.params.id}`);
      const json = await JSON.parse(JSON.stringify(result.data));
      res.status(200).send(json);
  } catch(ex) {
      console.log(ex);
      res.status(500).send(ex.message);
  }
});

app.get('/listaPersona/(:id)', async (req, res) => {
  try {
      const result = await axios.get(`https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listaPersona/${req.params.id}`);
      const json = await JSON.parse(JSON.stringify(result.data));
      res.status(200).send(json);
  } catch(ex) {
      console.log(ex);
      res.status(500).send(ex.message);
  }
});

app.post('/editarPlaneta/(:id)', async (req, res, next) => {
  //console.log(req.query)
  try {
    //console.log(req.params.id)
    const result = await axios.put(`https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/editarPlaneta/${req.params.id}`, req.query);
    //console.log(result.data.body)
    res.status(200).send(result.data.body);
} catch(ex) {
    console.log(ex);
    res.status(500).send(ex.message);
}
});

app.post('/editarPersona/(:id)', async (req, res, next) => {
  //console.log(req.query)
  try {
    //console.log(req.params.id)
    const result = await axios.put(`https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/editarPersona/${req.params.id}`, req.query);
    //console.log(result.data.body)
    res.status(200).send(result.data.body);
} catch(ex) {
    console.log(ex);
    res.status(500).send(ex.message);
}
});

app.delete('/eliminarPlaneta/(:id)', async (req, res) => {
  try {
      const result = await axios.delete(`https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/eliminarPlaneta/${req.params.id}`);
      const json = await JSON.parse(JSON.stringify(result.data));
      res.status(200).send(json);
  } catch(ex) {
      console.log(ex);
      res.status(500).send(ex.message);
  }
});

app.delete('/eliminarPersona/(:id)', async (req, res) => {
  try {
      const result = await axios.delete(`https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/eliminarPersona/${req.params.id}`);
      const json = await JSON.parse(JSON.stringify(result.data));
      res.status(200).send(json);
  } catch(ex) {
      console.log(ex);
      res.status(500).send(ex.message);
  }
});

app.listen(PORT, (error) =>{
        if(!error){
            console.log("Server is Successfully Running, and App is listening on port "+ PORT);
        }
        else{
            console.log("Error occurred, server can't start", error);
        }
    }
);
