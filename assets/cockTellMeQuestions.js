var queryURL = "https://api.traitify.com/v1/assessments";

Traitify.setHost("https://api.traitify.com");
Traitify.setPublicKey("00ab5e14b27740a08449fdf7ca441885");


$('#questionBtn').on("click", function () {
    window.location = './questions.html';
});


var lastTest = localStorage.getItem("Test_ID");
if (lastTest) {
    renderQuiz(lastTest);
} else {
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
            localStorage.setItem("Test_ID", response.id);
            renderQuiz(response.id)
        });
}
function renderQuiz(testID) {
    assessment = Traitify.ui.component();
    console.log(testID)
    assessment.assessmentID(testID);
    assessment.target(".traitify");
    assessment.render()
}

var queryResults = "https://api.traitify.com/v1/assessments/" + "ddb69c62-70bc-4406-af2f-aeb47f329ea5" + "?data=blend,types,traits,career_matches"
$.ajax({
    url: queryResults,
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Basic " + btoa("17330cfb2aff43ce8e99dd4889736e0b:x"));
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
})
    .then(function (response) {
        console.log(response);
        if (response.status === "complete") {
            console.log(response.status);
            $("#resultsBtn").removeClass("uk-hidden").css({
                "margin-left": "450px",
                "background": "#B0BEC5"
            });
        }
    });

$("#resultsBtn").on('click', function () {
    window.location = "./results.html";
})