var apiKey = require('./../.env').apiKey;

Doctor = function() {
}

Doctor.prototype.getDoctor = function(medicalIssue, displayFirst) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=+ ${medicalIssue}&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=${apiKey}`)
     .then(function(response) {
       displayFirst(medicalIssue, response.doctor.profile.first_name);
      //  displayLast(medicalIssue, response.profile.last_name);
      console.log(displayDocs);
     })
     .fail(function(error) {
       $('.showDoctor').text("not available");
     });
   }



exports.doctorModule = Doctor;
//
/
