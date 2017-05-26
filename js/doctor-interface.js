var Doctor = require('./../js/doctor.js').doctorModule;

var displayFirst = function(medicalIssue, displayFirst) {
  $('.showDoctor').text("The humidity in " + medicalIssue + " is " + displayFirst);
}
//


$(document).ready(function() {
  var doctor = new Doctor();
  $("#condition-form").submit(function(e){
    e.preventDefault();
    condition = $('#condition').val();
    doctor.getDoctor(condition, displayFirst);
  });
});
