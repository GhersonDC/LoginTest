//Users
var users = [
    {
        userName: 'jsmith',
        password: 'abc123',
        employee:{
            id:1001,
            name:'John Smith',
            photo:'users 1001.png'
        },
        role:{
            id:'5A',
            description:'System Administrator'
        }
    },
    {
        userName: 'kjhonson',
        password: 'def456',
        employee:{
            id:1002,
            name: 'Kyle Johnson',
            photo: 'users 1002.png'
        },
        role:{
            id:'5A',
            description: 'System Administrator'
        }
    },

    {
        userName: 'kcaprice',
        password: 'ghi789',
        employee:{
            id:1003,
            name: 'Kevin Caprice',
            photo: 'users 1003.png'
        },
        role:{
            id: '5A',
            description: 'System Administrator'
        }
    }
];
//global variable
var validUser;

function init(){
    hideErrorLabel();
}

function login(){
    console.log('Login...');
    //get info from
    var userr = document.getElementById('inputuser').value;
    var passwordd = document.getElementById('inputpassword').value;
    var is_logued = false;
    var is_empty = false;

    if (!userr==''  || !passwordd==''){
        users.forEach(user=>
            {
                if(userr == user.userName && passwordd==user.password){
                    is_logued = true;
                    // try {
                    //     throw Exception;
                    // } catch (error) {
                    //     console.log("Error");
                    // }
                }
                else{
                document.getElementById('errorlabel').className='windowerrorlabel';
                showErrorLabel('Password or Username incorrects!');
                }
            }
        )
    }
    else
        {
            document.getElementById('errorlabel').className='windowerrorlabel';
            showErrorLabel('You cannot left fields empty');
            console.log("is_logued", is_logued);
    }
    if(is_empty==true && is_logued==false){
        document.getElementById('errorlabel').className='windowerrorlabel';
        showErrorLabel('Password or Username incorrects!');
    }
    if(is_empty==false && is_logued==true){
        showErrorLabel('Welcome');
         document.getElementById('errorlabel').className='windowloggedlabel';
         showErrorLabel('Logged Succesfully');
    }
}

function clearValues(){
    console.log('Clear..');
    document.getElementById('inputuser').value='';
    //document.getElementById('inputexchangerate').value='';
    document.getElementById('inputpassword').value='';
    hideErrorLabel();
}
function showErrorLabel(message){
    document.getElementById('errorlabel').style.display='block';
    document.getElementById('errorlabel').innerHTML=message;
}
function hideErrorLabel(){
    document.getElementById('errorlabel').style.display = 'none';
}



