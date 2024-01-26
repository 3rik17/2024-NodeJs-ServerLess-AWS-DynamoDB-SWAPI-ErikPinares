const moment = require("moment");

const mappingDataPersonas = (responseSwapi) =>{
    return responseSwapi.map(per=>{
        return {
            nombre: per.name || "",
            talla: per.height || "",
            peso: per.mass || "",
            cabello_color: per.hair_color || "",
            piel_color: per.skin_color || "",
            ojos_color: per.eye_color || "",
            año_nacimiento: per.birth_year || "",
            genero: per.gender || "",
            planeta_natal: per.homeworld || "",
            peliculas: per.films || [],
            especies: per.species || [],
            vehiculos: per.vehicles || [],
            naves_estelares: per.starships || [],
            creado: per.created || "",
            editado: per.edited || "",
            url: per.url || "",
            fecha_creacion: moment.utc().format()
        }
    })
}

module.exports = {
    mappingDataPersonas
}