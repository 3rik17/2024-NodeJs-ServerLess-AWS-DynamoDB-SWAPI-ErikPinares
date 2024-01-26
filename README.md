# NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares

Repositorio sobre el uso de StarWars API desde AWS con NodeJs (Framework ServerLess), almacenamiento en DynamoDB y Documentacion de API con Swagger UI Express

![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/Swagger_local.png)

## API Referencia de uso

### Paso 1.  Importar los items de SWAPI hacia la BD DynamoDB, al hacer el llamado del EndPoint obtendra los datos de la SWAPI y los alojara ya transformado al español en la tabla correspondiente

```http
  GET /importarPlanetas
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/importarPlanetas

```http
  GET /importarPersonas
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/importarPersonas


![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/importar_data.png)


### Paso 2.  Obtener los datos para ello llamar a los EndPoint que realizaran las consultas a DynamoDB y obtendra el JSON

Para ello adjunto la coleccion en Postman para que puedan probar la funcionalidad de cada EndPoint  - [Descargar Aqui](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/ErikPinaresRojas_EndPoints_RetoTecnico.postman_collection.json)



```http
  GET /listarPlanetas
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listarPlanetas

```http
  GET /listarPersonas
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listarPersonas


![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/Listado_enSwagger.png)


### Paso 3.  Realizar las solicitudes para Agregar, Editar o Eliminar

#### 3.1.  Agregar registros a la Tabla Planetas
```http
  POST /agregarPlaneta
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/agregarPlaneta

#### Trama a enviar de ejemplo
```json
{
	"nombre": "Tatooine 222",
	"periodo_rotacion": "222",
	"periodo_orbital": "22222",
	"diametro": "22222",
	"clima": "arid",
	"gravedad": "1 standard",
	"terreno": "desert",
	"superficie_agua": "1",
	"poblacion": "200000",
	"residentes": [
	"https://swapi.dev/api/people/1/",
	"https://swapi.dev/api/people/2/",
	"https://swapi.dev/api/people/4/",
	"https://swapi.dev/api/people/6/",
	"https://swapi.dev/api/people/7/",
	"https://swapi.dev/api/people/8/",
	"https://swapi.dev/api/people/9/",
	"https://swapi.dev/api/people/11/",
	"https://swapi.dev/api/people/43/",
	"https://swapi.dev/api/people/62/"
	],
	"peliculas": [
	"https://swapi.dev/api/films/1/",
	"https://swapi.dev/api/films/3/",
	"https://swapi.dev/api/films/4/",
	"https://swapi.dev/api/films/5/",
	"https://swapi.dev/api/films/6/"
	],
	"creado": "2014-12-09T13:50:49.641000Z",
	"editado": "2014-12-20T20:58:18.411000Z",
	"url": "https://swapi.dev/api/planets/1/"
}
```


| Parameter | Type     | 
| :-------- | :------- | 
| `nombre` | `string` | 
| `periodo_rotacion` | `string` |
| `periodo_orbital` | `string` | 
| `diametro` | `string` | 
| `clima` | `string` | 
| `gravedad` | `string` | 
| `terreno` | `string` |
| `superficie_agua` | `string` |
| `poblacion` | `string` |
| `residentes` | `array` |
| `peliculas` | `array` |
| `creado` | `string` |
| `editado` | `string` |
| `url` | `string` |

![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/insertar_planeta.png)



#### 3.2.  Agregar registros a la Tabla Personas
```http
  POST /agregarPersona
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/agregarPersona

#### Trama a enviar de ejemplo
```json
{
	"nombre": "Luke 222",
	"talla": "222",
	"peso": "22",
	"cabello_color": "blond2",
	"piel_color": "fair2",
	"ojos_color": "blue2",
	"año_nacimiento": "19BBY",
	"genero": "male",
	"planeta_natal": "https://swapi.dev/api/planets/1/",
	"peliculas": [
	"https://swapi.dev/api/films/1/",
	"https://swapi.dev/api/films/2/",
	"https://swapi.dev/api/films/3/",
	"https://swapi.dev/api/films/6/"
	],
	"especies": [],
	"vehiculos": [
	"https://swapi.dev/api/vehicles/14/",
	"https://swapi.dev/api/vehicles/30/"
	],
	"naves_estelares": [
	"https://swapi.dev/api/starships/12/",
	"https://swapi.dev/api/starships/22/"
	],
	"creado": "2014-12-09T13:50:51.644000Z",
	"editado": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}
```

| Parameter | Type     | 
| :-------- | :------- | 
| `nombre` | `string` | 
| `talla` | `string` |
| `peso` | `string` | 
| `cabello_color` | `string` | 
| `piel_color` | `string` | 
| `ojos_color` | `string` | 
| `año_nacimiento` | `string` |
| `genero` | `string` |
| `planeta_natal` | `string` |
| `peliculas` | `array` |
| `especies` | `array` |
| `vehiculos` | `array` |
| `naves_estelares` | `array` |
| `creado` | `string` |
| `editado` | `string` |
| `url` | `string` |



#### 3.3.  Seleccionar un registro a la Tabla Planetas
```http
  GET /listaPlaneta/${id}
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listaPlaneta/a824da4f-e0f3-493e-8730-c04d32d5d9a6

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a seleccionar |

![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/listar.png)



#### 3.4.  Seleccionar un registro a la Tabla Personas
```http
  GET /listaPersona/${id}
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/listaPersona/10b49fcc-f2a5-4f0c-a364-40f05dccd4ea

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a seleccionar |


#### 3.5.  Actualizar un registro a la Tabla Planetas
```http
  PUT /editarPlaneta/${id}
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/editarPlaneta/189ae501-6a63-4499-b053-41f5b4ea7fee

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a seleccionar |

#### Trama a enviar de ejemplo
```json
{
	"nombre": "Tatooine 33333",
	"periodo_rotacion": "33333",
	"periodo_orbital": "33333",
	"diametro": "33333",
	"clima": "arid",
	"gravedad": "1 standard",
	"terreno": "desert"
}
```

![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/actualizar.png)



#### 3.6.  Actualizar un registro a la Tabla Personas
```http
  PUT /editarPersona/${id}
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/editarPersona/63bfa3be-503a-44c3-baeb-43d7db4fad7f

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a seleccionar |

#### Trama a enviar de ejemplo
```json
{
	"nombre": "Luke 3333",
	"talla": "3333",
	"peso": "333",
	"cabello_color": "blond333",
	"piel_color": "fair3",
	"ojos_color": "blue3"
}
```


#### 3.7.  Eliminar un registro a la Tabla Planetas
```http
  DELETE /eliminarPlaneta/${id}
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/eliminarPlaneta/189ae501-6a63-4499-b053-41f5b4ea7fee

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a seleccionar |

![imagen](https://raw.githubusercontent.com/3rik17/2024-NodeJs-ServerLess-AWS-DynamoDB-SWAPI-ErikPinares/main/src/images/eliminar.png)



#### 3.8.  Eliminar un registro a la Tabla Personas
```http
  DELETE /eliminarPersona/${id}
```
https://j8aup83wn7.execute-api.us-east-1.amazonaws.com/eliminarPersona/63bfa3be-503a-44c3-baeb-43d7db4fad7f

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item a seleccionar |






#
#### Gracias por leer.
