const moment = require("moment");

const mappingDataPlanetas = (responseSwapi) =>{
    return responseSwapi.map(pnt=>{
        return {
            nombre: pnt.name || "",
            periodo_rotacion: pnt.rotation_period || "",
            periodo_orbital: pnt.orbital_period || "",
            diametro: pnt.diameter || "",
            clima: pnt.climate || "",
            gravedad: pnt.gravity || "",
            terreno: pnt.terrain || "",
            superficie_agua: pnt.surface_water || "",
            poblacion: pnt.population || "",
            residentes: pnt.residents || [],
            peliculas: pnt.films || [],
            creado: pnt.created || "",
            editado: pnt.edited || "",
            url: pnt.url || "",
            fecha_creacion: moment.utc().format()
        }
    })
}

module.exports = {
    mappingDataPlanetas
}