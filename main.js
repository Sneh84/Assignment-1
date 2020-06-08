
var questionNo =1;
var points = 0;
var numofQuestion = 5;

function submit(){

     var ans =['A','D','A','B','A','D','B','A','A','C'];
     
     var q1 = document.forms['quiz']['q1'].value;
     var q2 = document.forms['quiz']['q2'].value;
     var q3 = document.forms['quiz']['q3'].value;
     var q4 = document.forms['quiz']['q4'].value;
     var q5 = document.forms['quiz']['q5'].value;
     
     
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
    
    function nextquest(){
       
        if(questionNo >4){
            var results = document.getElementById('results');
            results.innerHTML="you Score "+points+" points out \n\
            of "+numofQuestion;
            document.getElementById("results").style.display = "block";
             document.getElementById("a"+questionNo).style["display"] = "none";
                  
        }else{
       questionNo++;
       
        document.getElementById("a"+questionNo).style["display"] = "block";
        document.getElementById("a"+(questionNo-1)).style["display"] = "none";
             
    }
    }
    

    
    

