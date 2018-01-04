/*jslint node: true */
'use strict';

var garageModel = require ('../models/garage');

module.exports = {
  garages: garages, getGarage, updateGarage
};

/* return a list of garages (garage objects) */
function garages(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  if (req.swagger.params && req.swagger.params.garageId) {
    var garageId = req.swagger.params.garageId.value;
    var garageData = garageModel.getGarageById(garageId);

    res.json(garageData);
  } else {
    var garages = garageModel.getAllGarages();
    res.json(garages);
  }
};
  
/* return a list of garages (garage objects) */
function getGarage(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  if (req.swagger.params && req.swagger.params.garageId) {
    var garageId = req.swagger.params.garageId.value;
    var garageData = garageModel.getGarageById(garageId);
    console.log('door id was: ', garageId);
    /*
    if (garageData != None) {
      console.log("door id was found");
    } 
    */
    res.json(garageData);
  }
};
  
/* return a list of garages (garage objects) */
function updateGarage(req, res) {
  //var body = JSON.parse(req.body);
  //var garageId = body['garageId'];
  var garageId = req.swagger.params.garageId.value;
  console.log('door id is: ', garageId);
  var garageData = garageModel.getGarageById(garageId);
  
  var desiredState = req.body.desiredState
  console.log('door desired state is: ', desiredState);
  //res.status= 201;
  /*
  res.status(200).json({
          status: 'success',
          message: 'Updated garage'
        });
  */
  res.json(garageData);
  /*
  if (garageData != None) {
    res.statusCode = 201;
    console.log("door id was found");
  } else {
    res.statusCode = 404;
  }
  */
};
