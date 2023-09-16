var express = require("express");
// const { isAuthenticated } = require("../middlewares/jwt");
const {
  getAllCustomer,
  createCustomer,
  getCustomerByPhoneNumber
} = require("../controllers/CustomerController");

var router = express.Router();

router.get("/", getAllCustomer);
router.get("/customerByPhoneNumber", getCustomerByPhoneNumber);
router.post("/create", createCustomer);

module.exports = router;
