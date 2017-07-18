$(document).ready(function(){

const gkTField = document.getElementById("my-textfield");
let enteredGrade;
let builtURL;


    gkTField.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            console.log("ENTER pressed " + timeStamp());
            setTimeout(sendRestRequest(postGrade), 2000);
                            
        }    
    });

    function sendRestRequest(cbPostGrade){
        enteredGrade = gkTField.value;
        builtURL = 'https://canvas.fxlongterm.com/api/v1/courses/1/assignments/1/submissions/3?submission[posted_grade]=' + enteredGrade + '&access_token=18ceydBy64JjnJdAGeq4l7FsE1Azc7GZlzmCoQr1iwkuIkODEz9ACujU2dZC8ZIn';
        console.log("entered grade: " + enteredGrade + "\n" + "entered grade URL: " + "\n" + builtURL + timeStamp());    
        cbPostGrade();
        console.log("finished sendRestRequest() " + timeStamp());  
        
    }

    function postGrade() {
        console.log("inside postGrade() " + timeStamp());  

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

    function timeStamp() {
        var d = new Date();
        var ms = d.getMilliseconds();
        return  d + " " + ms + " ms";
    }

    $("p").click(function(){
        $(this).hide();
    });







}); //end doc ready


