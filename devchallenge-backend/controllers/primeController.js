const express = require('express')
const prime = require('../module/getPrimeNumbers') 

const getMedianLimit = (req, res) => {
    
var data = ''
var status = false

let primeArr = []
let medianArr = []


 if (req.body.limit !== null)
 {  
  var limit = parseInt(req.body.limit)
  if (!isNaN(limit)) {
      if (limit <= 1)
      {
        data = "Error: the number entered must be greater than one." 
      }
      else {
        // Get our prime numbers first in an array
        medianArr = prime(limit) 

        // return data
        data = "The median number of the prime number array is " + medianArr.toString()
        status = true
      }
    }
    else {
        data = "Error: the data entered is not a valid number."
    }
 }
 else
 {
    data = "Error: no number was entered."
 }

  
 return res.json({data: data, status: status, statusCode: res.statusCode}) 
};

module.exports = {getMedianLimit};