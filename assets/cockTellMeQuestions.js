var queryURL = "https://api.traitify.com/v1/assessments"
$.ajax({
    url: queryURL,
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa("17330cfb2aff43ce8e99dd4889736e0b:x"));
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: '{ "deck_id": "career-deck" }',
})
    .then(function (response) {
        console.log(response);
        Traitify.setHost("https://api.traitify.com");
        Traitify.setPublicKey("00ab5e14b27740a08449fdf7ca441885");
        assessment = Traitify.ui.component();
        assessment.assessmentID(response.id);
        assessment.target(".traitify");
        assessment.render();
    });