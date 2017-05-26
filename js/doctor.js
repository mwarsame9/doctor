var apiKey = require('./../.env').apiKey;

Doctor = function() {
};


Doctor.prototype.getAllDoctors = function(medicalIssue, displayAllInfo) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result){
  displayAllInfo(result);
  console.log(result.meta.item_type);
  }).fail(function(error) {
    console.log("fail");
    // $('.output').text(error.responseJSON.message);
  });
};



exports.doctorModule = Doctor;

// https://api.betterdoctor.com/2016-03-01/doctors?query=+ "${medicalIssue}"&user_location=45.523%2C-122.413&skip=0&limit=10&user_key=81a8192ea8aefbc9eb73bbfd7639c587
