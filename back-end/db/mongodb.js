const mongoose = require('mongoose')


mongoose.connection.on('open',()=>console.log('db connect'))
async function connectdb ({ host, port , dbname}){
    const uri = `mongodb://${host}:${port}:${dbname}`
    mongoose.connect(uri, { useNerUrlParser:true })
}
module.exports = connectdb