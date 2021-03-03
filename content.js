/*
{
   course: "",
   date: "",
   tees: "",
   score: "", 
   holes: ""
}

course:
{
    name: "",

}

*/

function calculateCourseHandicap(handicapIndex, courseRating, courseSlope, coursePar) {
    return Math.floor((handicapIndex * (courseSlope/113)) + (courseRating - coursePar))
}

function calculateScoreDifferential(courseSlope, adjustedGrossScore, courseRating, pccAdjustment) {
    return (113 / courseSlope) * (adjustedGrossScore - courseRating - pccAdjustment)
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    scores = []
    Array.from(document.getElementsByClassName("scorecard-inner")).forEach(
        function (card, index) {
            // Set this card as the active scorecard
            card.click();
            
            for (var i=1; i<19; i++) {
                
            }

            scores.push({
                course: card.getElementsByClassName("scorecard-title")[0].innerText,
                date: card.getElementsByClassName("sc-date")[0].innerText,
                tees: card.getElementsByClassName("sc-tees")[0].innerText,
                holes: "?",
                score: card.getElementsByClassName("lastRow total")[0].innerText
            })
        });

    console.log(scores)
    sendResponse({ fromcontent: "This message is from content.js" });
});

