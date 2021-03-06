/*jslint node: true */
'use strict';

module.exports = {
  getGarageById: getGarageById,
  getAllGarages: getAllGarages,
};

/* return a single Garage object */
function getGarageById(garageId) {
  var foundApp = {};
  for (var i = 0; i < GARAGES.length; i++) {
    if (GARAGES[i].id == garageId) {
      foundApp = GARAGES[i];
    }
  }

  return foundApp;
}

function getAllGarages() {
  return GARAGES;
}

// sample data
var GARAGES = [{
  id: 6212,
  name: 'Garage door',
  lastUpdated: '2017-12-27T21:48:00',
  desiredState: 'closed',
  desiredStateTimeStart: '22:00:00',
  desiredStateTimeEnd: '23:45:00',
}, {
  id: 6213,
  name: 'Main door home',
  lastUpdated: '2016-07-10T17:48:00',
  desiredState: 'closed',
  status: 'open',
}, {
  id: 6214,
  name: 'Main door home',
  lastUpdated: '2016-07-10T17:48:00',
  desiredState: 'closed',
  status: 'closed',
}, {
  id: 6216,
  name: 'Main door home',
  lastUpdated: '2016-07-10T17:48:00',
  desiredState: 'open',
  status: 'closed', 
}];
