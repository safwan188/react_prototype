const express = require('express');
const controller = require('../controllers/customerController');
const authJwt = require('../middlewares/authJwt');

const router = express.Router();

router.get('/', [authJwt.verifyToken], controller.getAllCustomers);
router.get('/:id', [authJwt.verifyToken], controller.getCustomerById);
router.post('/', [authJwt.verifyToken], controller.createCustomer);
router.put('/:id', [authJwt.verifyToken], controller.updateCustomer);
router.delete('/:id', [authJwt.verifyToken], controller.deleteCustomer);

module.exports = router;
