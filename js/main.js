
// ! list links

let icon = document.getElementById('ico')
let myList = document.querySelector(' ul') 

document.addEventListener('click', function(event){
    let isClickInside = icon.contains(event.target)

    if(isClickInside){
        myList.style.display = 'block';
    }else{
        myList.style.display = 'none'
    }
});

// ! Buttom Scrole

let buttomScroll = document.getElementById('bt-scroll')

buttomScroll.style.display= 'none'

window.onscroll = (function ()
{
    if (window.scrollY >= 400)
    {
        buttomScroll.style.display = 'block'
    } else
    {
        buttomScroll.style.display = 'none'
    }
    
})
buttomScroll.onclick = (function(){
    window.scrollTo({
        left : 0,
        top : 0,
        behavior: "smooth",
        
    })
})

































