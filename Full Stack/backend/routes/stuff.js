const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');


router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, stuffCtrl.createMobile);
router.get('/:id', auth, stuffCtrl.getOneMobile);
router.put('/:id', auth, stuffCtrl.modifyMobile);
router.delete('/:id', auth, stuffCtrl.deleteMobile);

module.exports = router;