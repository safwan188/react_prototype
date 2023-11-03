const express = require('express');
const controller = require('../controllers/subcontractorController');
const authJwt = require('../middlewares/authJwt');

const router = express.Router();

router.get('/', [authJwt.verifyToken], controller.getAllSubcontractors);
router.get('/:id', [authJwt.verifyToken], controller.getSubcontractorById);
router.post('/', [authJwt.verifyToken], controller.createSubcontractor);
router.put('/:id', [authJwt.verifyToken], controller.updateSubcontractor);
router.delete('/:id', [authJwt.verifyToken,], controller.deleteSubcontractor);

module.exports = router;
