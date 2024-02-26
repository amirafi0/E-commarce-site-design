let images = ['../images/slider1.jpg','../images/slider2.jpg','../images/slider3.jpg'];
index = 0;
time = 3000;

function slider(){
    let slider = document.querySelector('.slider');
    let code = `<img src='${images[index]}'/>`

    slider.innerHTML= code;

    if(index < images.length-1){
        index++;
    } else{
        index = 0;
    }
}

setInterval(slider, time);

slider()
