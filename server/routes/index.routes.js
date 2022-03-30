const router = require("express").Router();

router.use('/gallery', require ('./gallery.routes'))

module.exports = router;
