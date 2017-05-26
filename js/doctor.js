var apiKey = require('./../.env').apiKey;

Doctor = function() {
}

Doctor.prototype.getDoctor = function(medicalIssue, displayFirst, displayLast) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
     .then(function(response) {
       displayFirst(medicalIssue, response.profile.first_name);
       displayLast(medicalIssue, response.profile.last_name);
     })
     .fail(function(error) {
       $('.showDoctor').text(error.responseJSON.message);
     });
   }






//     medicalIssue(response.main.humidity);
//     console.log(response.main.humidity);
//   }).fail(function(error) {
//     $('.showDoctor').text(error.responseJSON.message);
//   });
// }

//
//
// Doctor.prototype.getDoctor = function(city, displayHumidity) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     displayHumidity(city, response.main.humidity);
//     console.log(response.main.humidity);
//   }).fail(function(error) {
//     $('.showDoctor').text(error.responseJSON.message);
//   });
// }
exports.doctorModule = Doctor;
//
//
// https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_location=45.523%2C-122.413&skip=0&limit=10&user_key=81a8192ea8aefbc9eb73bbfd7639c587
