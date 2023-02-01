const moongooose = require ('mongoose')

const Schema = moongose.schema

const protuductSchema = Schema({
    name : String,
    size : Number,
    unitaryprice: Number,
    imgUrl : String,
    description : String
    
}, {
    timestamps: true
})

module.exports= mongooose.model('products',protuductSchema)