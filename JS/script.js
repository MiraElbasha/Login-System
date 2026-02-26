var userNameInput = document.getElementById("usernameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");
var signUpBtn = document.getElementById("signupBtn");
//create new empty array to store users data in objects
var userInfo;

//if local storage has data retrieve it else create empty array
if(localStorage.getItem("users") !== null){
    userInfo =  JSON.parse(localStorage.getItem("users"));
}
else{
    userInfo = [];
}

//create a new object it's properties value from user input values
function signUp(){
    UserInputsValidation();
    IsExits();
    //if userInputValidation method returned true and is exits returned false create new user object
    if(UserInputsValidation() && !IsExits()){
        var user ={
        name:userNameInput.value,
        email:userEmailInput.value,
        password:userPasswordInput.value
    }
   
 
    //then push this user object to the users array
    userInfo.push(user);
    //save in local storage but convert the array of objects to string
    //setitem method takes key , string value
    localStorage.setItem("users" , JSON.stringify(userInfo));
    window.location.href= "index.html"; 
    }
}



//validation
function UserInputsValidation(){
    UserNameValidation();
    UserEmailValidation();
    UserPaawordValidation();

    if(UserNameValidation() && UserEmailValidation() && UserPaawordValidation() ){
        return true;
    }
    else{
        return false;
    }
}


function IsExits(){
    var accountExistMsg = document.getElementById("accountExistMsg");

    for(var i = 0; i < userInfo.length; i++){
        if(userInfo[i].email == userEmailInput.value){
        console.log("exits")
        accountExistMsg.classList.replace("d-none" , "d-block");
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        return true;
        }
        else{
        accountExistMsg.classList.replace("d-block" , "d-none");
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");   
        return false;
        }
    }


}

function UserNameValidation(){
    var usernameAlert = document.getElementById("usernameAlert");
    //user name input restrictions --> accept letter from a-z capital or small and it should be from 3 characters to 15
    var regeX = /^[A-Za-z]{3,15}$/
    //use the built in test function of the regex to compare between the input value and the regex 
    if(regeX.test(userNameInput.value) && userNameInput.value !== ""){

        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block" , "d-none");
        return true;
    }
    else{
         userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none" , "d-block");
        return false;
    }
}
function UserEmailValidation(){
    var userEmailAlert = document.getElementById("userEmailAlert");

    var regeX = /@[A-Za-z]{3,10}(\.com)$/
    //use the built in test function of the regex to compare between the input value and the regex 
    if(regeX.test(userEmailInput.value) && userEmailInput.value !== ""){

        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block" , "d-none");
        return true;
    }
    else{
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none" , "d-block");
        return false;
    }
}
function UserPaawordValidation(){
    var userPasswordAlert = document.getElementById("userPasswordAlert");

    var regeX = /^.{8,}$/
    //use the built in test function of the regex to compare between the input value and the regex 
    if(regeX.test(userPasswordInput.value) && userPasswordInput.value !== ""){

        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block" , "d-none");
        return true;
    }
    else{
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none" , "d-block");
        return false;
    }
}

var currentUser = localStorage.getItem("currentUser");
function login(){
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var loginBtn = document.getElementById("loginBtn");
    var wrongMsg = document.getElementById("wrongMsg");


    if(loginEmail.value == "" || loginPassword.value == ""){
        var fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none" , "d-block");
        return false;
    }
   for(var i=0; i < userInfo.length; i++){
        if(userInfo[i].email == loginEmail.value || userInfo[i].password ==  loginPassword.value){
            localStorage.setItem("currentUser" , JSON.stringify(userInfo[i].name));
            loginBtn.setAttribute("href" , "welcome.html")
        }
   }

}


function displayWelcomeUser(){
    document.getElementById("username").innerHTML = "Welcome " + currentUser
}