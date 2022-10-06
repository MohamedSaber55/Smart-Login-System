let loginEmail = document.getElementById('loginEmail');
let loginPass = document.getElementById('loginPass');
let loginBtn = document.getElementById('loginBtn');
let signUpName = document.getElementById('signUpName');
let signUpEmail = document.getElementById('signUpEmail');
let signUpPass = document.getElementById('signUpPass');
let signUpBtn = document.getElementById('signUpBtn');
// let welcome = document.getElementById("welcome");
var usersDataContainer;


if(localStorage.getItem("users")==null){
    var usersDataContainer=[];
}
else{
    usersDataContainer = JSON.parse(localStorage.getItem("users"));
}

function addUser(){
    if(!checkIsEmpty()){
        if(exist()){
            displayExist();
            clearForm();
        }
        else{
            let user = {
                name : signUpName.value,
                email: signUpEmail.value,
                password: signUpPass.value,
            }
            usersDataContainer.push(user);
            console.log(usersDataContainer);
            setLocalStorage();
            displaySuccess();
            clearForm();
        }
    }
    else{
        displayRequired();
    }
}

function exist(){
    for(var i=0; i<usersDataContainer.length; i++){
        if(usersDataContainer[i].email == signUpEmail.value ){
            return true;
        }
    }
    return false;
};

function searchUser(){
    if(checkIsEmptySign()){
        displayRequiredSign();
    }
    else{
        for(var i=0;i<usersDataContainer.length;i++){
            if(usersDataContainer[i].email==loginEmail.value && usersDataContainer[i].password==loginPass.value){
                loginBtn.setAttribute('href', `home.html`);
                // welcome .innerHTML +=`<h1 class=" text-info opacity-75"> ${signUpName.value} </h1>`;
                welcome()
                clearLogin();
            }
            else{
                displayIncorrect();
            }
        }
    }
};

function checkIsEmptySign(){
    if(loginEmail.value =="" || loginPass.value =="" ){
        return true;
    }
    else{
        return false;
    }
}

function checkIsEmpty(){
    if(signUpName.value!="" && signUpPass.value !="" && signUpEmail.value !=""){
        return false;
    }
    else{
        return true;
    }
};
function clearForm() {
    signUpName.value="";
    signUpPass.value="";
    signUpEmail.value="";
}


function clearLogin(){
    loginEmail.value ='';
    loginPass.value ='';
};

function displayIncorrect(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>incorrect email or password</span>`;
};

function displayRequired(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};

function displayRequiredSign(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};

function displayExist(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>email already exists</span>`;
};

function displaySuccess(){
    document.getElementById("required").innerHTML=`<span class=' text-success'>Success</span>`;
};

function setLocalStorage() {
    localStorage.setItem('users', JSON.stringify(usersDataContainer));
};

// loginBtn.addEventListener('click', function(){
//     searchUser();
// });


// signUpBtn.addEventListener('click', function(){
//     addUser();
// });




function welcome(){   
    document.getElementById("welcome").innerHTML = `<h1 class=" text-info opacity-75">Welcome` + signUpName.value +`</h1>`;
};