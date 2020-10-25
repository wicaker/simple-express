const userService = require('./users/users.service.js');
const accessTokenService = require('./access-tokens/access.tokens.service.js');
const purchaseProductService = require('./purchase_product/product.purchase.service')

module.exports = {
    userService,
    accessTokenService,
    purchaseProductService
}