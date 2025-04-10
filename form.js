function Valform(){
var formvalid=document.getElementById("auform").value;
var name=document.getElementById("name").value;
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var phone=document.getElementById("phone").value;
var zipcode=document.getElementById("Zip-code").value;
var namepat=/^[a-zA-Z\s]{1,30}$/;
var userpat=/^[\w@]{2,26}$/;
var passpat=/^(?=.*[a-z])(?=.*\d).{8,}$/;
var phonepat=/^\d{3}-?\d{4}-?\d{4}$/;
var zippat=/^\d{5}$/
if(!(namepat.test(name))){
    alert("name should contain only alphabets");
    return false;
}
if(!(userpat.test(username))){
    alert("usernames should contain only alphanumeric charaters");
    return false;

}
if(!(passpat.test(password))){
    alert("password should contain atlest one alphabet one digit and atleast  characters long");
    return false;
}
if(!(phonepat.test(phone))){
    alert("enter valid phone no");
    return false;
}
if(!(zippat.test(zipcode))){
    alert("enter valid zipcode");
    return false;
}
alert("form is submitted");
return true;

}