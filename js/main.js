
var questionNo =1;//Start number of question
var points = 0;
var numofQuestion = 5;//Total number of question

function submit(){

     var ans =['A','D','A','B','A'];//Answer for question in sequence
     
     //assignins Values for particular question
     var q1 = document.forms['quiz']['q1'].value;
     var q2 = document.forms['quiz']['q2'].value;
     var q3 = document.forms['quiz']['q3'].value;
     var q4 = document.forms['quiz']['q4'].value;
     var q5 = document.forms['quiz']['q5'].value;
     
     //if the value of question are equal as provided in array 
     //then answer is right and will show the green light
     //else it will show red light on top
        if(eval('q'+questionNo)=== ans[questionNo-1]){
            points++;
            console.log("your anwer is correct");
            document.getElementById("b"+ questionNo).
                    style["backgroundColor"]="green";
           
        } else{
            console.log("Your answer is incorrect");
               document.getElementById("b"+ questionNo).
                       style["backgroundColor"]="red";
        }
           
    
  
   
    console.log("You Score "+points+ " out of "+numofQuestion);
    return false;   
    }
    //This function will help us to reach the next answer
    //When the question are end it will show you the end result that how many 
    //cotrrect answer you give
    
    function nextquest(){
       
        if(questionNo >4){
            var results = document.getElementById('results');
            results.innerHTML="you Score "+points+" points out \n\
            of "+numofQuestion;
            document.getElementById("results").style.display = "block";
             document.getElementById("a"+questionNo).style["display"] = "none";
                  document.getElementById("help").style.display="none";
                
                  
        }else{
       questionNo++;
       
        document.getElementById("a"+questionNo).style["display"] = "block";
        document.getElementById("a"+(questionNo-1)).style["display"] = "none";
             document.getElementById("help").style.display="none";
    }
    }
    
    //This button will help you to know the rules and working of quiz
    function help(){
       
      var help =  document.getElementById('help');
       document.getElementById('help').style["display"] = "block";
      help.innerHTML =  "1)you Should Enter each question<br>"+
                        "2)Then Click on Enter question to see whelther \n\
                        its right or wrong<br>"+
                        "3)Click on Next Question to get the new questions\n\
                        <br>"+
                        "4)There is a help button provided which assist you\n\
                        with some basic rules.<br>"+
                        "5)If you are in help page you need to restart \n\
                        the game through restart button<br>"+
                        "6)Restart button help you to choose the question \n\
                        agin\n\
                        but do not erase the previous answer to show \n\
                        where you were wrong<br>"+
                        "7) At last you will see your final results<br>"+
                        "8)The colors on the top shows at which Question you \n\
                        were Wrong.Green color show your answer was\n\
                        right and red for wrong answer";
        
        
         document.getElementById("a1").style["display"] = "none";
         document.getElementById("a2").style.display = "none";
         document.getElementById("a3").style.display = "none";
         document.getElementById("a4").style.display = "none";
         document.getElementById("a5").style.display = "none";
        
         document.getElementById("results").style.display = "none";
     }
        
    //This will help user to restart the game and allow him to change the enterd answers
       function restart(){
        questionNo =1;
         points = 0;
         numofQuestion = 5;
         document.getElementById("a1").style["display"] = "block";
         document.getElementById("a2").style.display = "none";
         document.getElementById("a3").style.display = "none";
         document.getElementById("a4").style.display = "none";
         document.getElementById("a5").style.display = "none";
         document.getElementById("results").style.display = "none";
         document.getElementById("help").style.display="none";
         document.getElementById("b1").style["background-color"]="skyblue";
        document.getElementById("b2").style["background-color"]="skyblue";
        document.getElementById("b3").style["background-color"]="skyblue";
        document.getElementById("b4").style["background-color"]="skyblue";
        document.getElementById("b5").style["background-color"]="skyblue";
         
         
     
    }
