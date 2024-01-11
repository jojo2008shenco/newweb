function myFunction(){
    var x = document.getElementById('myTopnav');
    if(x.className === 'topnav'){
        x.className += ' responsive';
    }
    else{
        x.className = 'topnav'
    }
}
const accordion = document.getElementsByClassName('content-container');


for( i = 0; i < accordion.length; i++)  {
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active');
    })
};

