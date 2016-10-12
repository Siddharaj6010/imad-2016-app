// Counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();            
            }
        }
    }
    
    // Make the request
    request.open('GET','http://siddharaj6010.imad.hasura-app.io/counter',true);
    request.send(null);
};

// Only read counter value for displaying on page load
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();            
            }
        }
    }
    
    // Make the request
    request.open('GET','http://siddharaj6010.imad.hasura-app.io/counter-read',true);
    request.send(null);
    
// -- Submit name --------------------------------------------------------------
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
  // Make a request to the server and send the name
    
    // create request object
    var request = new XMLHttpRequest();
    
    // capture response and render it as a list
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names = JSON.parse(request.responseText);
                var list = '';
                for(var i=0;i<names.length;i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list ;
            }
        }
    };
    
    
    // send request to the server
    var nameInput = document.getElementById('name');
    var name = nameInput.value;    
    request.open('GET','http://siddharaj6010.imad.hasura-app.io/submit-name/' + name,true);
    request.send(null);
};    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    