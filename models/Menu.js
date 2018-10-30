const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Brownies 12 porciones 250$
// Alfajores de Maicena 80 la doc
// De chocolate 160
//  Tartas ricota , frutas / frutilla
// Coco con d de leche 200
// Pasta frola 170, copitos de dulce bañada en chocolate blanco o negro 200
// Torta mousse  de frutillas 300
// Chocotorta chica 450/ grande 800
// Bombas / profiteroles . Con / crema pastelera , dulce de leche . Crema  y chocolate 160 la doc
// Pan dulce especial con frutos secos 160 medio kilo
// Banana split/ chocolate / frutos secos 100
// Budines inglés limón / naranja. Vainilla 80
// Budín marmolado de naranja y chocolate. Chips de chocolate , nuez  y limón 100

const MenuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = MenuItem = mongoose.model('menu', MenuItemSchema)
