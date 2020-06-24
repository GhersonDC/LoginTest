function init(){
    console.log('Initializing document...');
    var loggedIn = false;

    if(typeof sessionStorage.isLoggedIn !== 'undefined'){
        if(sessionStorage.isLoggedIn !==true){
            //display user info
            loggedIn = true;
            if(typeof sessionStorage.userInfo !== 'undefined'){
                //parse user info
                var userInfo = JSON.parse(sessionStorage.userInfo);
                console.log(userInfo);
                document.getElementById('userphoto').src=  userInfo.employee.photo;
                document.getElementById('username').innerHTML = userInfo.employee.name;
                document.getElementById('userrole').innerHTML = userInfo.role.description;

            }
        }  
        
    }
    if(!loggedIn){
        sessionStorage.previousPage = 'index.html';
        window.location = 'login.html'
    }
}

function logout(){
    sessionStorage.isLoggedIn = false;
    sessionStorage.removeItem(sessionStorage.userInfo);
    sessionStorage.removeItem(sessionStorage.previousPage);
    window.location= 'login.html';

}