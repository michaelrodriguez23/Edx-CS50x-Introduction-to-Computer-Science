
    if(!localStorage.getItem('counter')){
        localStorage.setItem('counter', 0);
    }
  
    const header = document.querySelector('h1');

    function count(){
        let counter = localStorage.getItem('counter');
        counter ++; 
        document.querySelector('h1').innerHTML = counter;
        localStorage.setItem('counter',counter);
    }
    // notice  that we dont run the function by adding parenthesis
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('h1').innerHTML = localStorage.getItem('counter');
        document.querySelector('button').onclick = count; 

    });