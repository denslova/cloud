//git test
$(document).ready(function(){

const gkTField = document.getElementById("my-textfield");
let enteredGrade;
let builtURL;
const finalScore = $("#finalScore").val();

    

    if(finalScore != -1){
        sendRestRequest(postGrade);
    }

    function sendRestRequest(cbPostGrade){
        enteredGrade = finalScore;
        builtURL = 'https://canvas.fxlongterm.com/api/v1/courses/1/assignments/1/submissions/3?submission[posted_grade]=' + finalScore + '&access_token=18ceydBy64JjnJdAGeq4l7FsE1Azc7GZlzmCoQr1iwkuIkODEz9ACujU2dZC8ZIn';
        console.log("entered grade: " + finalScore + "\n" + "entered grade URL: " + "\n" + builtURL + timeStamp());    
        cbPostGrade();
        console.log("finished sendRestRequest() " + timeStamp());  
        
    }

    function postGrade() {
        console.log("inside postGrade() " + timeStamp());  

        fetch(builtURL, {
        'method': 'PUT',
        'body': JSON.stringify({
        })

        }).then(function(response) {
        console.log(response);
        }).catch(function(error) {
        console.error(error);
        }) 
    } //end postGrade

    function timeStamp() {
        var d = new Date();
        var ms = d.getMilliseconds();
        return  d + " " + ms + " ms";
    }

    $("p").click(function(){
        $(this).hide();
    });



}); //end doc ready


