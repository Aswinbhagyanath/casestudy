let username= document.getElementById("userName");
let pword= document.getElementById("password");
let pwordlabel= document.getElementById("usrnameLabel");
let userlabel= document.getElementById("pwdLabel");
let formId=document.getElementById("formid");

function validate(home) {
 if((username.value!="admin")||(pword.value!="12345"))
 {
    pwordlabel.innerHTML="Invalid username or password!"
    userlabel.innerHTML="Invalid username or password!"
    pwordlabel.style.color="red";
    userlabel.style.color="red";
    return false;
 }
 else{
     home();
 }
}

function homepage(){
  formId.setAttribute("action","./home.html");
  
}

function validation(){
    validate(homepage);
}
