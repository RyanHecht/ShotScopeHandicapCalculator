/*
{
   course: "",
   date: "",
   tees: "",
   score: "", 
   holes: ""
}



*/

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    scores = []
    Array.from(document.getElementsByClassName("scorecard-inner")).forEach(
        function (card, index) {
            // Set this card as the active scorecard
            card.click();

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

