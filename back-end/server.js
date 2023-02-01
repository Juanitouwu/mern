require('dotenv').config()

const app = require('./app')
const connectdb = require('.db/mongodb')
const { appConfig, db } = require('./config')

async function initApp (appConfig,dbconfig){
    try{
        await connectdb(dbconfig)
        app.listen(appConfig.port, ()=> console.log(`listen on ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
    }
