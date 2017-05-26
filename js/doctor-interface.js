var Doctor = require('./../js/doctor.js').doctorModule;

var displayFirst = function(medicalIssue, displayFirst) {
  $('.showDoctor').text("The humidity in " + medicalIssue + " is " + displayFirst);
}


$(document).ready(function() {
  var DoctorObject = new Doctor();
  $('#doctor-list').click(function() {
    var issue = $('#issue').val();
    $('#issue').val("");
    DoctorObject.getDoctor(displayFirst, displayLast);
  });
});
