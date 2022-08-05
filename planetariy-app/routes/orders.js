var express = require('express');
const { order_create_post, order_create_get, order_list } = require('../controllers/orderController');
var router = express.Router();

/* GET orders listing. */
router.get('/create', order_create_get);
router.get('/list', order_list);

router.post('/create', order_create_post);

module.exports = router;
