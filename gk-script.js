$(document).ready(function(){



const gkTField = document.getElementById("my-textfield");
let enteredGrade;
let builtURL;
    
    gkTField.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;

        if (key === 13) { // 13 is enter
            enteredGrade = gkTField.value;
            builtURL = 'https://canvas.fxlongterm.com/api/v1/courses/1/assignments/1/submissions/3?submission[posted_grade]=' + enteredGrade + '&access_token=18ceydBy64JjnJdAGeq4l7FsE1Azc7GZlzmCoQr1iwkuIkODEz9ACujU2dZC8ZIn';
            console.log("entered grade: " + enteredGrade + "\n" + "entered grade URL: " + "\n" + builtURL);
            // $.getJSON("https://canvas.fxlongterm.com/api/v1/accounts?access_token=18ceydBy64JjnJdAGeq4l7FsE1Azc7GZlzmCoQr1iwkuIkODEz9ACujU2dZC8ZIn").done(function(data) { console.log(data); });
            
            if (builtURL !== null){
                console.log("posting grade...");
                postGrade();
                
                
            }
        }    
    });


    function postGrade() {
      fetch(builtURL, {
        'method': 'PUT',
        //   'headers': {
        //     'Authorization': 'key=nyo6Q9VPT6KJ4mhtxpu8Uq82dXIUWL4YSO2CVQCv5c6ykOFtXAAERMHp10hsHQKV',
        //     'Content-Type': 'application/json'
        //   },
        'body': JSON.stringify({
        })

        }).then(function(response) {
        console.log(response);
        }).catch(function(error) {
        console.error(error);
        }) 
    } //end postGrade

    $("p").click(function(){
        $(this).hide();
    });







}); //end doc ready


