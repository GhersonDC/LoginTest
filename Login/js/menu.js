//variables
var menuOpen = false;

//show/hide menu
function toggleMenu(){
    console.log('Toggle menu...');
    //get content height
    var contentHeight = document.getElementById('content').clientHeight;
    //nav height
    document.getElementById('nav').style.height = contentHeight + 'px';
    //menu closed
    if(!menuOpen)
        document.getElementById('nav').style.display = 'inline';     
    else
    document.getElementById('nav').style.display = 'none';

    

    menuOpen = !menuOpen; //toggle menuOpen variable
}