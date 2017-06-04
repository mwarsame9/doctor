var apiKey = require('./../.env').apiKey;

Doctor = function() {
};


Doctor.prototype.getAllDoctors = function(medicalIssue, displayAllInfo) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(result){
  displayAllInfo(result);
  })
  .fail(function(error) {
    $('#showDoctor').text("No doctors available");
  });
};

exports.doctorModule = Doctor;
