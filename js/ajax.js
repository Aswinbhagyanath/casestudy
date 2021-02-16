// Loading data from the API
function ajax(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response= JSON.parse(this.responseText);
            console.log(response);
            var content="";            

           for(var i=0;i<response.length;i++){
               
               if(response[i].completed==false){
                content+= '<input type="checkbox" id="chkbx" onclick="ifchecked()"> '+response[i] .title+'<br><br>'
                   document.getElementById("label").innerHTML=content;
                 }
               
               else{
                content+= '<input type="checkbox" id="chkbx" disabled checked/>'+'<del>'+response[i].title +'</del>'+ '<br><br>'
                document.getElementById("label").innerHTML=content;  
               }
           }
    
        
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    
    //checking whether the checkboxes are checked or not
    function ifchecked(){
    var promise= new Promise(function(resolve,reject){
        var count= 0;
        count=document.querySelectorAll("input:checked");
        console.log(count)
        console.log(count.length)
       if(count.length==95){
           resolve(alert("Congrats. 5 Tasks have been Successfully Completed"));
           
       } 
    });
    promise.then(disablebox)
    
     }  
     
     function disablebox(){
         console.log("inside disbalebx")
        var count= 0;
        count=document.querySelectorAll("input:checked");
        console.log(count.length)
        if(count.length>94){
            alert("You have reached your limit");
            window.location.href='./final.html';
        }
    
        function display(){
            
        }               
     }