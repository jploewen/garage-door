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
  // json(garageData) casues a "Error: Response validation failed: void does not allow a value" to get returned.  Guessing becasue the schema is not expecting a reponse body 
  //res.json(garageData);
  
  // status(201) casues a 502 to get returned to the calling application even though the prior log msgs appear as expected
  ///res.status(201);
  /*
  if (garageData != None) {
    res.statusCode = 201;
    console.log("door id was found");
  } else {
    res.statusCode = 404;
  }
  */
  
  //Lets try no ressponse.  Failed with 502 as well
  // Try this format based on artilce https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6
  res.statusCode = 201;
};
