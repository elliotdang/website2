function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeImagePosition(img) {
    var vpHeight = window.innerHeight;
    var vpWidth = window.innerWidth;
    var textHeight = document.querySelector('h1').offsetHeight; 
    
    var xPos = getRandomInt(0, vpWidth - img.offsetWidth);
    var yPos = getRandomInt(290, vpHeight); // Adjusted yPos
    //var yPos = getRandomInt(textHeight, vpHeight - img.offsetHeight); // Adjusted yPos
    var zIndex = getRandomInt(0, 13);
    
    img.style.top = yPos + 'px';
    img.style.left = xPos + 'px';
    img.style.zIndex = zIndex;
}

window.addEventListener('load', function() {
    var imgs = document.querySelectorAll('img');
    imgs.forEach(function(img) {
        randomizeImagePosition(img, imgs);
    });
});

/*var mouseX;
var mouseY;

$(document).on("mousemove", function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;

    if (selected) {
        selected.css("top", mouseY - 100);
        selected.css("left", mouseX - 100);
    }
});

var selected = null;
var count = 0;

$("img").click(function() {
    if ($(this).hasClass("c-images")) {
        selected = $(this);
        count++;

        if (count % 2 === 0) {
            selected = null;
        }
    }
});*/


function randomizeImagePosition(img, allImages) {
    var vpHeight = window.innerHeight;
    var vpWidth = window.innerWidth;
    
    var imgWidth = img.offsetWidth;
    var imgHeight = img.offsetHeight;
    
    var overlap = false;
    var maxAttempts = 200;
    var attempt = 0;
    
    do {
        var xPos = getRandomInt(0, vpWidth - imgWidth);
        var yPos = getRandomInt(290, vpHeight);
        
        overlap = false;
        for (var i = 0; i < allImages.length; i++) {
            var otherImg = allImages[i];
            if (otherImg !== img) {
                var otherX = parseInt(otherImg.style.left);
                var otherY = parseInt(otherImg.style.top);
                var otherWidth = otherImg.offsetWidth;
                var otherHeight = otherImg.offsetHeight;
                
                if (xPos < otherX + otherWidth && xPos + imgWidth > otherX &&
                    yPos < otherY + otherHeight && yPos + imgHeight > otherY) {
                    overlap = true;
                    break;
                }
            }
        }
        
        attempt++;
    } while (overlap && attempt < maxAttempts);
    
    if (!overlap) {
        img.style.top = yPos + 'px';
        img.style.left = xPos + 'px';
        img.style.zIndex = getRandomInt(0, 15);
    } else {
        console.log("Failed to find non-overlapping position after" + maxAttempts + " attempts.");
    }
}
window.addEventListener('load', function() {
    var imgs = document.querySelectorAll('img');
    imgs.forEach(function(img) {
        randomizeImagePosition(img, imgs);
    });
}); 


$("#img1").dblclick(function() {
    window.location.href = "huh-cat.html";
});

$("#img2").dblclick(function() {
    window.location.href = "mr-fresh.html";
});

$("#img3").dblclick(function() {
    window.location.href = "crunchy-cat.html";
});

$("#img4").dblclick(function() {
    window.location.href = "chipi-cat.html";
});

$("#img5").dblclick(function() {
    window.location.href = "beluga.html";
});

$("#img6").dblclick(function() {
    window.location.href = "girlfriend-cat.html";
});

$("#img7").dblclick(function() {
    window.location.href = "cursed-cat.html";
});

$("#img8").dblclick(function() {
    window.location.href = "high-cat.html";
}); 

$("#img9").dblclick(function() {
    window.location.href = "sadmeowingcat.html";
}); 

$("#img10").dblclick(function() {
    window.location.href = "stressed-cat.html";
}); 

$("#img11").dblclick(function() {
    window.location.href = "war-cat.html";
}); 

$("#img12").dblclick(function(){
    window.location.href = "zoneout-stare-cat.html"
});

$("#img13").dblclick(function(){
    window.location.href = "ohnocringe-cat.html"
});

$("#img14").dblclick(function(){
    window.location.href = "laugh-point-cat.html"
});

$("#img15").dblclick(function(){
    window.location.href = "smudge-cat.html"
});

$("#img16").dblclick(function(){
    window.location.href = "agressiveorange-cat.html"
});

$("#img17").dblclick(function(){
    window.location.href = "shocked-cat.html"
});

$("#img18").dblclick(function(){
    window.location.href = "surprised-cat.html"
});

$("#img19").dblclick(function(){
    window.location.href = "crying-cat.html"
});

$("#img20").dblclick(function(){
    window.location.href = "haepi-cat.html"
});



$(function drag(){
    $(".c-images").draggable()
})

