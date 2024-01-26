const formatResponse = (status, data) =>{
    if(Array.isArray(data)){
    return ({
        status,
        body: [{
            total: data.length,
            data
        }
        ]
    })
    }
    else{
        return({
            status,
            body: [data]
        })
    }
}

module.exports = {
    formatResponse
}