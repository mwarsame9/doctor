var Doctor = require('./../js/doctor.js').doctorModule;


var displayAllInfo = function(doctorInfos) {
  $('#showDoctor').text("")
    doctorInfos.data.forEach(function(doctorInfo) {
    $('#showDoctor').append('<li>' + 'Dr.' + ' ' + doctorInfo.profile.first_name + ' ' + doctorInfo.profile.last_name + '</li>');
  });
};

$(document).ready(function(){
  var doctor = new Doctor();
  $('#doctor-list').click(function(event){
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    doctor.getAllDoctors(medicalIssue, displayAllInfo);
  });
});
