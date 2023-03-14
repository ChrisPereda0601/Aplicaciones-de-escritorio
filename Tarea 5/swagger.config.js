module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "API Title",
            "description": "",
            "version": "1.0.0",
            "servers": ['http://localhost:' + 3000]
        }
    },
    apis: ['src/rutas/*.js']
}