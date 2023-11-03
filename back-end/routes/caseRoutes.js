const express = require('express');
const controller = require('../controllers/caseController');
const authJwt = require('../middlewares/authJwt');


const router = express.Router();

router.get('/', [authJwt.verifyToken], controller.getAllCases);
router.get('/:id', [authJwt.verifyToken], controller.getCaseById);
router.post('/', [authJwt.verifyToken], controller.createCase);
router.put('/:id', [authJwt.verifyToken], controller.updateCase);
router.delete('/:id', [authJwt.verifyToken], controller.deleteCase);

module.exports = router;
