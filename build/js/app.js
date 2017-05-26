(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "81a8192ea8aefbc9eb73bbfd7639c587";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Doctor = function() {
};


Doctor.prototype.getAllDoctors = function(medicalIssue, displayAllInfo) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=+ "${medicalIssue}"&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=${apiKey}`).then(function(result){
  displayAllInfo(medicalIssue, result);
  console.log(displayAllInfo);
  }).fail(function(error) {
    $('.output').text(error.responseJSON.message);
  });
};



exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;


var displayAllInfo = function(medicalIssue, doctorsInfo) {
    // doctors.forEach(function(doctor) {
    // var lastName = data.profile.last_name;
    $('.showDoctor').text("These doctors that treat " + medicalIssue + " are " + doctorsInfo);
  //   $('#doctor-click').click(function(){
  //     var doctor = new Doctor();
  //     doctor.getDoctorInfo(doctor.last_name);
  //   });
  // });
};




$(document).ready(function(){
  var doctor = new Doctor();
  $('#doctor-list').click(function(){
    var medicalIssue = $('#issue').val();
    doctor.getAllDoctors(medicalIssue, displayAllInfo);
  });
});

},{"./../js/doctor.js":2}]},{},[3]);
