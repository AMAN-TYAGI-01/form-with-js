document.getElementById("form").addEventListener("submit",aman);
function aman(e){
   
    e.preventDefault();
    let firstname=document.getElementById("firstname").value;
    let lastname=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("psw").value;
    let cnf=document.getElementById("cnfpsw").value;
    let mobile=document.getElementById("mobile").value;
    // let gender=document.getElementById("gender").value;
    // let hobby=document.getElementById("hobby").value;
    let address=document.getElementById("add").value;
    
 console.log(firstname,lastname,email,password,cnf,mobile,address);

 if(firstname==""||lastname==""||email==""||password==""||cnf==""||mobile==""||address==""){
        alert("somthing went wrong");
        return false;
}
if(password!=cnf){
    alert("password does not match");
    return false;
}

alert("successful");
}