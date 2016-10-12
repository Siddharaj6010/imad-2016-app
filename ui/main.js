console.log('Loaded!');

// Change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = `
    Let\'s Dance ;) 
    <br/>
    <p>(Click on the above image to start. Click again to increase speed.)</p>
`;

// Move the image
var img = document.getElementById('img');
var marginLeft = 0;
var direction = 1;
var w = window.innerWidth-20;

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
img.onclick = function() {
    var interval = setInterval(moveRightLeft, 50);
};