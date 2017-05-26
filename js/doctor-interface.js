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
