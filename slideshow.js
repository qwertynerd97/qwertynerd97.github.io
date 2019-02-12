var slideIndex = 0;

function showPics(increment) {
    var i;
    var container = document.getElementById("container");
    var pics = document.getElementsByClassName("slideImage");

    // Parse image and window sizes
    var showWidth = container.offsetWidth;
    var picWidth = pics[0].offsetWidth;
    var carouselCurcumference = picWidth*pics.length;
    var slide = Math.round((container.offsetWidth/2)) - (picWidth/2);

    var caroselX = [];

    slideIndex += increment;

    // Maintain slide index circle
    if (slideIndex >= pics.length) {
    	slideIndex = 0;
    }
    if (slideIndex < 0) {
    	slideIndex = pics.length-1;
    }

    for (i = 0; i < pics.length; i++) {
        caroselX[i] = (i-slideIndex)*picWidth;

        // Move extra leftward elements to the far right
        if(caroselX[i] < 0-picWidth){
			caroselX[i] = ((pics.length-slideIndex)*picWidth) + (i*picWidth);
        }

        // Move extra rightward elements to the far left
        if(caroselX[i] > showWidth){
        	caroselX[i] = (0-((slideIndex)*picWidth)) - ((pics.length-i)*picWidth);
        }

        // Center the images in the carosel
        caroselX[i] += slide;

        pics[i].style.left = caroselX[i] + 'px';
    }

    // May be implemented to allow pictures to smoothly glide from one image to another
    // Needs ajustment
    //slideElement(pics, caroselX, picWidth, showWidth);
}

function slideElement(elements, index, to, windowWidth) {
    var pos = 0;
    var id = setInterval(frame, 10);
    var i;

    function frame() {
    	if (pos == to) {
            clearInterval(id);
       	} else {
       		pos++;
			for(i = 0; i < elements.length; i++){
				index[i]++;
         	   	elements[i].style.left = (index[i]) + 'px';
        	}
    	}
    }
}
