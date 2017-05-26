var Doctor = require('./../js/doctor.js').doctorModule;


var displayAllInfo = function(medicalIssue, doctors) {
    doctors.forEach(function(doctor) {
    $('.output').append(`<li id="doctor-click"> <a href="doctor.html">${doctor.title}</a> </li>`);
    $('#doctor-click').click(function(){
      var doctor = new Doctor();
      doctor.getDoctorInfo(doctor.id);
    });
  });
};





$(document).ready(function(){
  var doctor = new Doctor();
  $('#doctor-list').click(function(){
    var medicalIssue = $('#issue').val();
    doctor.getAllDoctors(medicalIssue, displayAllInfo);
  });
});

exports.doctorModule = Doctor;
