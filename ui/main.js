console.log('Loaded!');


// Move the image
var img = document.getElementById('img');
var stop = document.getElementById('stop');

var marginLeft = 0;
var direction = 1;
var w = document.getElementById('container').offsetWidth-40;
var interval;

function moveRightLeft() {
    if(marginLeft == w-img.width ) {
        direction = -1;
    } 
    else if(marginLeft == -(w-img.width) ) {
        direction = 1;
    }
    marginLeft = marginLeft + direction;
    img.style.marginLeft = marginLeft + 'px';
}
img.parentElement.onclick = function() {
    interval = setInterval(moveRightLeft, 10);
};

stop.onclick = function() {
    clearInterval(interval);
};