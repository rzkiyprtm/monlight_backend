const transactionsRepo = require("../repository/transaction")
const resHelper = require("../helper/sendResponse")

const transactionController = {

  get: async (req, res) => {
    try {
      const response = await transactionsRepo.getAllTransaction(req.query, req.body);
      res.status(200).json({
        result: response.rows,
      });
    } catch (error) {
      res.status(500).json({
        msg: error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const response = await transactionsRepo.getTransaction(
        req.userPayload.id,
        req.query
      );
      return resHelper.success(res, response.status, response);
    } catch (error) {
      console.log(error);
      return resHelper.error(res, error.status, error);
    }
  },

  post: async (req, res) => {
  try {
    const response = await transactionsRepo.postTransaction(
      req.body,
      req.userPayload.id
    );
    res.status(201).json({ msg: "Transaction Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
},

  patch: async (req, res) => {
    try {
      transactionsRepo.editTransaction(req.body, req.params)
      res.status(200).json({ msg: "Update Success!"})
    } catch (err) {
      res.status(500).json({ msg: "Internal Server Error" });
    }
  },

  clear: async (req, res) => {
    try {
      const result = transactionsRepo.clearTransaction(req.params)
      res.status(200).json({
        message: "Delete Data Successfully!",
        result: result.rows,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
    }
};

module.exports = transactionController;
