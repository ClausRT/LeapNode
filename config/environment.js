//Set the variable environments for development and get the variable from environment in production
module.exports = {
    'development': {
        'port': 3000,
        'address': "localhost",
        'host': "localhost"
    },
    'production': {
        'port': process.env.PORT,
        'address': process.env.ADDRESS,
        'host': process.env.HOST
    }
}