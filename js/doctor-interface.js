var Doctor = require('./../js/doctor.js').doctorModule;


var displayAllInfo = function(medicalIssue, doctorsInfo) {
    doctors.data.forEach(function(doctorInfo) {
    var lastName = data.profile.last_name;
    $('.showDoctor').append('<li>' + '>' + doctor.profile.first_name + ' ' + doctor.profile.last_name '</li>');
});
};


  //   $('#doctor-click').click(function(){
  //     var doctor = new Doctor();
  //     doctor.getDoctorInfo(doctor.last_name);
  //   });
  // });





$(document).ready(function(){
  var doctor = new Doctor();
  $('#doctor-list').click(function(){
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    doctor.getAllDoctors(medicalIssue, displayAllInfo);
  });
});
