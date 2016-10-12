console.log('Loaded!');

// Change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

// Move the image
var img = document.getElementById('img');
var marginLeft = 0;
var direction = 1;
function moveRightLeft() {
    if(marginLeft == 200 ) {
        direction = -1;
    } 
    else if(marginLeft == -200 ) {
        direction = 1;
    }
    marginLeft = marginLeft + direction;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRightLeft, 50);
};