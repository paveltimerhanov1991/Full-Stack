const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');


const stuffCtrl = require('../controllers/mobile');


router.get('/',  stuffCtrl.getAllMobile);
router.post('/', auth,  stuffCtrl.createMobile);
router.get('/:id',  stuffCtrl.getOneMobile);
router.put('/:id', auth,  stuffCtrl.modifyMobile);
router.delete('/:id', auth, stuffCtrl.deleteMobile);

module.exports = router;