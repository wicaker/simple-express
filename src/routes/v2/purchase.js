require('module-alias/register');
const { response } = require('@helpers');
const { purchaseProductService } = require('@services/v2');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.post(
    '/',
    [
      body('product_id'),
        // .withMessage('Product cannot be empty'),
      body('paymentType')
        // .withMessage('Payment Type cannot be empty')
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json(response(false, errors.array()));
      }
      purchaseProductService.create(req, res);
    }
  );

  module.exports = router;