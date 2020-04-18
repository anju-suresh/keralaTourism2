

function emailValidate(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var regexp=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if(!regexp.test(email.value)){
        document.getElementById("first").innerHTML="Email is not valid";
        document.getElementById("first").style.color="red";
        email.style.border= "1px dotted red";
        return false;
    }else {
        document.getElementById("first").innerHTML="Email is valid";
        document.getElementById("first").style.color="green";
        email.style.border= "1px solid #ebebeb";
        return true;
    }
}
function passwordValidate(){

var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g");
var pwd = document.getElementById("password");
if (pwd.value.length==0) {
    document.getElementById("two").innerHTML = "Type Password";
    document.getElementById("progress").style.width="5%";
    document.getElementById("progress").style.backgroundColor="grey";
    password.style.border="1px solid grey";
}else if(pwd.value.length<=8){
    document.getElementById("two").innerHTML = "password is too short";
    document.getElementById("progress").style.width="15%";
    document.getElementById("progress").style.backgroundColor="lightblue";
    password.style.border="1px solid lightblue";
}else if (false == enoughRegex.test(pwd.value)) {
    document.getElementById("two").innerHTML = "More Characters";
    document.getElementById("progress").style.width="25%";
    document.getElementById("progress").style.backgroundColor="yellow";
    password.style.border="1px solid yellow";
} else if (strongRegex.test(pwd.value)) {
    document.getElementById("two").innerHTML = "<span style='color:green'>Strong!</span>";
    document.getElementById("progress").style.width="100%";
    document.getElementById("progress").style.backgroundColor="green";
    password.style.border="1px solid #ebebeb";
} else if (mediumRegex.test(pwd.value)) {
    document.getElementById("two").innerHTML = "<span style='color:orange'>Medium!</span>";
    document.getElementById("progress").style.width="70%";
    document.getElementById("progress").style.backgroundColor="orange";
    password.style.border="1px solid orange";
} else { 
    document.getElementById("two").innerHTML ="<span style='color:red'>Weak!</span>";
    document.getElementById("progress").style.width="40%";
    document.getElementById("progress").style.backgroundColor="red";
    password.style.border="1px solid red";
}
}

function submitFun(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var numb=document.getElementById("num");
    var confm=document.getElementById("re_password");
    
    if((email.value.trim()=="")&&(pass.value.trim()=="")&&(numb.value.trim()=="")&&(confm.value.trim()=="")){
            document.getElementById("main").innerHTML=" * Fields cannot be empty";
            document.getElementById("main").style.color="red";
            email.style.border= "1px dotted red";
            pass.style.border= "1px dotted red";
            num.style.border= "1px dotted red"; 
            password.style.border= "1px dotted red"; 
            re_password.style.border= "1px dotted red";
            return false;
    }else if(numb.value.trim()=="")
    {
       document.getElementById("ph").innerHTML="Please fill a valid phone number";
       document.getElementById("ph").style.color="red";
       num.style.border= "1px dotted red";  
    }else  if(email.value.trim()==""){
        document.getElementById("first").innerHTML="Email cannot be empty";
        document.getElementById("first").style.color="red";
        email.style.border= "1px dotted red";
    }else  if(pass.value.trim()==""){
        document.getElementById("two").innerHTML="Password cannot be empty";
        document.getElementById("two").style.color="red";
        password.style.border= "1px dotted red";
    }else  if(confm.value.trim()==""){
        document.getElementById("alert").innerHTML="Please Re-enter the Password";
        document.getElementById("alert").style.color="red";
        re_password.style.border= "1px dotted red";
    }else{
        document.getElementById("main").innerHTML=" ";
        document.getElementById("first").innerHTML=" ";
        document.getElementById("two").innerHTML=" ";
        document.getElementById("ph").innerHTML=" ";
        num.style.border= "1px solid #ebebeb"; 
        email.style.border= "1px solid #ebebeb";  
        pass.style.border= "1px solid #ebebeb";  
        re_password.style.border= "1px solid #ebebeb";
	    return true;
    }


}

function phonenumber()
{
    var numb=document.getElementById("num");
    
    if(numb.value.trim()=="")
     {
        document.getElementById("ph").innerHTML="Please fill your phone number";
        document.getElementById("ph").style.color="red";
        num.style.border= "1px dotted red";  
	 }
   else
     {
	    document.getElementById("ph").innerHTML=" ";
        num.style.border= "1px dotted #ebebeb";  
	    return true;
     }
}

function check(){
    var passwd=document.getElementById("password").value;
    var confm=document.getElementById("re_password").value;
    if(passwd!=confm){
        document.getElementById("alert").innerHTML="Those passwords didn't match Try again";
        document.getElementById("alert").style.color="red";
        document.getElementById("password").innerHTML="";
        document.getElementById("re_password").innerHTML="";
        return false;

    }else{
        document.getElementById("alert").innerHTML="";
        password.style.border= "1px dotted #ebebeb"; 
        re_password.style.border= "1px dotted #ebebeb"; 
        return true;
    }
}

function submitFun1(){
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    
    if((email.value.trim()=="")&&(pass.value.trim()=="")){
            document.getElementById("main").innerHTML=" * Fields cannot be empty";
            document.getElementById("main").style.color="red";
            email.style.border= "1px dotted red";
            pass.style.border= "1px dotted red";
            return false;
    }else  if(email.value.trim()==""){
        document.getElementById("first").innerHTML="Email cannot be empty";
        document.getElementById("first").style.color="red";
        email.style.border= "1px dotted red";
        return false;
    }else  if(pass.value.trim()==""){
        document.getElementById("two").innerHTML="Password cannot be empty";
        document.getElementById("two").style.color="red";
        password.style.border= "1px dotted red";
        return false;
    }else{
        document.getElementById("main").innerHTML=" ";
        document.getElementById("first").innerHTML=" ";
        document.getElementById("two").innerHTML=" ";
        email.style.border= "1px solid #ebebeb";  
        pass.style.border= "1px solid #ebebeb";  
	    return true;
    }


}