require("module-alias/register");
const { response } = require('@helpers')
const express = require("express");
const router = express.Router();

router.post("/findnumber", async (req, res) => {
    const number = req.body.number
    const find = req.body.find
    
    var regex = new RegExp( find, 'g' );
    const result = number.match(regex);
    
    if (result){
        res.status(200).json(response(true, 'Data matches'))
    } else {
        res.status(400).json(response(false, 'Data not match'))
    }
})

module.exports = router;