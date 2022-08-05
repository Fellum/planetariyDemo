const validator = require("express-validator");
const body = validator.body;
const validationResult = validator.validationResult;
const Order = require('../models/order');

var order = require('../models/order');

// Display list of all orders.
exports.order_list = async function(req, res) {
    const orders = await Order.find({});
    res.render('order_list', {
        order_list: orders
    });
};

// Display detail page for a specific order.
exports.order_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: order detail: ' + req.params.id);
};

// Display order create form on GET.
exports.order_create_get = function(req, res) {
    res.render("order_form", { title: "Create Order" });
};

// Handle order create on POST.
exports.order_create_post = [
    // Validate and sanitize the name field.
    body("short_desc", "Order name required").trim().isLength({ min: 1 }).escape(),
  
    // Process request after validation and sanitization.
    async (req, res, next) => {
      // Extract the validation errors from a request.
        const errors = validationResult(req);
  
        // Create a genre object with escaped and trimmed data.
        const order = new Order({ short_desc: req.body.short_desc, desc: req.body.description });
        
    
        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render("order_form", {
            title: "Create Order",
            order,
            errors: errors.array(),
            });
            return;
        }
        await order.save();
        res.render('order_create_success', { id: order._id });
    },
];

// Display order delete form on GET.
exports.order_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: order delete GET');
};

// Handle order delete on POST.
exports.order_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: order delete POST');
};

// Display order update form on GET.
exports.order_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: order update GET');
};

// Handle order update on POST.
exports.order_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: order update POST');
};
