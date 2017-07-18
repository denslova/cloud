
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://canvas.fxlongterm.com/api/v1/courses/1/assignments/1/submissions/3?submission%5Bposted_grade%5D=52&access_token=18ceydBy64JjnJdAGeq4l7FsE1Azc7GZlzmCoQr1iwkuIkODEz9ACujU2dZC8ZIn",
    "method": "PUT",
    "headers": {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
        "origin": "https://canvas.fxlongterm.com",
        "x-devtools-emulate-network-conditions-client-id": "ee557565-984b-4cc7-aa74-d1b115102f90",
        "x-devtools-request-id": "3723.6225",
        "authorization": "key=10000000000001",
        "accept": "*/*",
        "referer": "https://canvas.fxlongterm.com/profile/settings",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-AU,en;q=0.8,en-US;q=0.6,ru;q=0.4,uk;q=0.2",
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "496ec1bf-fa8e-cc8f-7818-b450c9114fe4"
    },
    "data": ""
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    });


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
        'async': 'true',
        "crossDomain": true,                
        'method': 'PUT',
          'headers': {
            'Authorization': 'key=10000000000001',
            'Content-Type': 'application/json'
          },
        'body': JSON.stringify({
        })

        }).then(function(response) {
        console.log(response);
        }).catch(function(error) {
        console.error(error); 
        console.log("error formedURL:    " + builtURL);       
        console.log("inside postGrade() error " + timeStamp());  
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