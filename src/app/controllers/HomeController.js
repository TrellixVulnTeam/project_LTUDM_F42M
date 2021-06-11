const Product = require('../models/ProductModel')
const { multipleMongooseToObject } = require('../../util/mongoose.js')


class HomesController {
    async index(req, res, next) {
        const product = await Product.find({ categoryName: "Mon an noi bat" })

        res.render('home', { layout: 'main.hbs', product: multipleMongooseToObject(product) })
    }

    notFound(req, res, next) {
        res.render('404notfound', { layout: false })
    }

}

module.exports = new HomesController();
