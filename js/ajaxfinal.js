// Loading data from the API
function ajaxfinal(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var heading=document.getElementById("heading");
            var tablehead=document.getElementById("tablehead");
            var tablehead1=document.getElementById("tablehead1");
            heading.innerHTML="";
            tablehead.innerHTML="<h2>To Do!</h2>";
            tablehead1.innerHTML="<h2>Done</h2>";
            console.log(response);
            var content="";   
            var content1="";   
            var table=document.querySelectorAll(".table");
            table[0].classList.remove("table");
            table[0].classList.add("listitem","col-lg-5","col-md-10","col-sm-10");
            table[1].classList.remove("table");
            table[1].classList.add("listitem","col-lg-5","col-md-10","col-sm-10");
            
            var response= JSON.parse(this.responseText);
           for(var i=0;i<response.length;i++){
               
               if(response[i].completed===false){
                content+= '<div id="cell"><input type="checkbox" id="chkbx" onclick="ifchecked()">'+response[i].title+'</div>'
                   document.getElementById("label").innerHTML=content;
                 }
               
               else{
                content1+= '<div id="cell"><input type="checkbox" id="chkbx" disabled checked/>'+response[i].title +'</div>'
                document.getElementById("label1").innerHTML=content1;  
               }
           }
    
        
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    
    //checking whether the checkboxes are checked or not
    function ifchecked(){
    var promise= new Promise(function(resolve){
        var count= 0;
        count=document.querySelectorAll("input:checked");
        
       if(count.length==95){
        

           resolve(setTimeout(function(){ alert("Congrats. 5 Tasks have been Successfully Completed"); }, 80));
           
       } 
    });
    promise.then(disablebox)
    
     }  
     
     function disablebox(){
        var count= 0;
        count=document.querySelectorAll("input:checked");        
        if(count.length>94){
            setTimeout(function(){ alert("You have reached your limit");
            window.location.href='./final.html';
         }, 300)
            
        }
    
                    
     }
