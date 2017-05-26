var Doctor = require('./../js/doctor.js').doctorModule;


var displayAllInfo = function(medicalIssue, doctorsInfo) {
    doctorsInfo.data.forEach(function(doctorInfo) {
    // var lastName = data.profile.last_name;
    $('.showDoctors').append('<li>' + '>' + doctor.profile.first_name + ' ' + doctor.profile.last_name + ' ' +  doctor.profile.bio + ' ' + '</li>' + '<br>');
});
};


  //   $('#doctor-click').click(function(){
  //     var doctor = new Doctor();
  //     doctor.getDoctorInfo(doctor.last_name);
  //   });
  // });



$(document).ready(function(){
  var doctor = new Doctor();
  $('#submitIssue').click(function(){
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    doctor.getAllDoctors(medicalIssue, displayAllInfo);
  });
});
