var queryURL = "https://api.traitify.com/v1/assessments"

$('#questionBtn').on("click", function () {
    window.location = './questions.html';
});

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
        //console.log(response);
        //console.log(test_ID);
        Traitify.setHost("https://api.traitify.com");
        Traitify.setPublicKey("00ab5e14b27740a08449fdf7ca441885");
        assessment = Traitify.ui.component();
        var lastTest = localStorage.getItem("Test_ID");
        console.log(lastTest)
        var setTest = localStorage.setItem("Test_ID", response.id);
        if (lastTest !== "null") {
            assessment.assessmentID(lastTest);
        } else {
            var setTest = assessment.assessmentID(response.id);
            console.log(setTest);
            localStorage.setItem("Test_ID", JSON.stringify(setTest.id))
        }
        assessment.target(".traitify");
        assessment.render();
    });
    

    // b196e696-a52a-41dd-a843-03138ed1401c