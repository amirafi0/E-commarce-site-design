function imgSlide(){
    let url = "img.json"
    fetch(url)
     .then(res => res.json())
     .then(images => {


        index = 0;
        time = 3000;

function slider(){
    let slider = document.querySelector('.slider');
    let code = `<img src='${images[index].img}'/>`

    slider.innerHTML= code;

    if(index < images.length-1){
        index++;
    } else{
        index = 0;
    }
}

setInterval(slider, time);


     })
}

imgSlide()


// product container


let prdturl = "prdt.json"
fetch(prdturl)
 .then(res => res.json())
 .then(res =>{
     card(res)
 });

 function card(prdt){
    let prdtCard = document.querySelector('.prdt-card');

    let user = ' '

    prdt.forEach(value => {
        
       

       user += html(value)
    })
    prdtCard.innerHTML = user ;
 }


 function html(prdt){
 const {image, title, price, category, rating} = prdt;


     const code  = `

        <div class="prdt-sec">
            <img src='${image}'/>
            <p>${title.length > 22 ? title.slice(0, 22)+ '...' : title}</p>
            <h2>${price}</h2>
            <h4>${category}</h4>
            <p class="rat">Rating:${rating.rate}</p>
            <p  class="rat">Sold:${rating.count}</p>

        </div>
     
     `;

     return code;
 }


