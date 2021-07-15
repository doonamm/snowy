var font_size = window.getComputedStyle(document.querySelector('.fa-snowflake')).getPropertyValue('font-size');
setInterval(createSnowFlake, Math.floor(Math.random()*100) + 70)
var isPhone = false;
if(parseInt(font_size) > 30){
    isPhone = true;
    console.log("okokokokok");
}
var isFullScreen = false;

document.addEventListener('dblclick', ()=>{
    
    document.body.innerHTML = '';

    if(!isFullScreen){
        document.documentElement.requestFullscreen();
        if(isPhone)        
            font_size = '15px';
    }
    else{
        document.exitFullscreen();
        if(isPhone)
            font_size = '35px';
    }
 

    isFullScreen = !isFullScreen;
})

function createSnowFlake(){
    const snow_flake = document.createElement('i');

    snow_flake.classList.add('fas', 'fa-snowflake');

    const randomTime = Math.round(Math.random()*5) + 4;

    snow_flake.style.left = Math.random()*document.body.clientWidth + 'px';
    snow_flake.style.animationDuration = randomTime + 's';
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.round(Math.random()*10) - 5 + parseInt(font_size) + 'px';

    console.log(font_size);
    document.body.appendChild(snow_flake);
    setTimeout(()=>{
        snow_flake.remove();
    }, randomTime*1000);
}