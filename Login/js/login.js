//users
var users = [
    {
        username : 'jsmith',
        password : '123',
        employee : {
            id : 1001,
            name : 'John Smith',
            photo: 'users/1002.png'
        },
        role : {
            id: '5A',
            description : 'System Administrator'
        }
        
    },
    {
        username : 'mjordan',
        password : 'def123',
        employee : {
            id : 1002,
            name : 'Michael Jordan',
            photo: 'users/1002.png'
        },
        role : {
            id: '5A',
            description : 'System Administrator'
        }
        
    },
    {
        username : 'jjonhson',
        password : 'qwe333',
        employee : {
            id : 1002,
            name : 'John Jonhson',
            photo: 'users/1002.png'
        },
        role : {
            id: '5A',
            description : 'System Administrator'
        }
        
    },
    {
        username : 'rphelps',
        password : '126663',
        employee : {
            id : 1002,
            name : 'Richard Phelps',
            photo: 'users/1002.png'
        },
        role : {
            id: '5A',
            description : 'System Administrator'
        }
        
    }
];
//global variables 
var employee;
var found = false;
var name;
var employees;



function init(){
    console.log('Initializing page...');
    hideErrorLabel();
    hideWelcomeLabel();
}

function login(){
    console.log('login...');
    found=false;
    hideErrorLabel();
    hideWelcomeLabel();
    
    var userName = document.getElementById('inputuser').value;
    var password = document.getElementById('inputpassword').value;

    users.forEach(user => {
        
        if(userName == user.username && password == user.password){
            found = true;
            employees = user;
            sessionStorage.isLoggedIn = true;
            sessionStorage.userInfo = JSON.stringify(user);
            if(typeof sessionStorage.previousPage !== 'undefined'){
                //display user info
                window.location = sessionStorage.previousPage;
            }
            else{
                
                window.location = 'index.html'
            }
          
        }
        
        
            
    });

    if(found){
        name = employees.employee.name;
        
        showWelcomeLabel('Welcome ' + name);
        

    }
    else        
        showErrorLabel('User or password asre incorrect');
        
    
}

function clearValues(){
    console.log('Clear...');
    document.getElementById('inputuser').value = '';
   
    document.getElementById('inputpassword').value = '';
    hideErrorLabel();
    hideWelcomeLabel();
}

function hideErrorLabel(){
    document.getElementById('errorlabel').style.display = 'none';
}

function hideWelcomeLabel(){
    document.getElementById('welcomelabel').style.display = 'none';   
}


function showErrorLabel(message){
    document.getElementById('errorlabel').style.display = 'block';
    document.getElementById('errorlabel').innerHTML = message;
}

function showWelcomeLabel(message){
    document.getElementById('welcomelabel').style.display = 'block';
    document.getElementById('welcomelabel').innerHTML = message;
}




