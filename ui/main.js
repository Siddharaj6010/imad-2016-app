console.log('Loaded!');


// Move the image
var img = document.getElementById('img');
var marginLeft = 0;
var direction = 1;
var w = document.getElementById('container').width-40;

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
    var interval = setInterval(moveRightLeft, 10);
};