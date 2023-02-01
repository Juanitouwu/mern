const config = {
    appConfig:{
        port: process.env.APP_PORT
    },
    db:{
        port: process.env.APP_PORT,
        host: process.env.APP_HOST,
        dbname: process.env.APP_DB_NAME

    }
}

module.exports=config