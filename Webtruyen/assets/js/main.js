const other = document.querySelector('.js-other')
const topSearch = document.querySelector('.js-top_search')

function showTopSearch(){
    topSearch.style.display = 'block';
}

other.addEventListener('click',showTopSearch)






const bottom = document.querySelector('.js-bottom')
const navMenu = document.querySelector('.js-nav-menu')
const bottomHeight = bottom.clientHeight

navMenu.addEventListener('click',function(){
    var isClose = bottom.clientHeight === bottomHeight;
    if(isClose){
        bottom.style.height = 'auto';
        bottom.style.overflow = 'visible';
    } else 
    {
        bottom.style.overflow = 'hidden';
        bottom.style.height = '52px';
    }
})





const bookTags1 = document.querySelector('.js-book_tags1')
const bookTags2 = document.querySelector('.js-book_tags2')
const megaMenu1 = document.querySelector('.js-mega_menu1')
const megaMenu2 = document.querySelector('.js-mega_menu2')

megaMenu1.addEventListener('click',function(){
    var isOpen = megaMenu1.classList.contains("open")
    if(isOpen){
        bookTags1.classList.remove('expanded')
        megaMenu1.classList.remove('open')
    } else {
        bookTags1.classList.add('expanded')
        megaMenu1.classList.add('open')
    }
    
})

megaMenu2.addEventListener('click',function(){
    var isOpen = megaMenu2.classList.contains("open")
    if(isOpen){
        bookTags2.classList.remove('expanded')
        megaMenu2.classList.remove('open')
    } else {
        bookTags2.classList.add('expanded')
        megaMenu2.classList.add('open')
    }
    
})






const left = document.querySelector('.js-left')
const right = document.querySelector('.js-right')
const scroll = document.querySelector('.js-list-grid')
setTimeout(scrollAuto,5000)

function scrollAuto(){
    switch(scroll.style.marginLeft)
    {
        case '-10px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-120px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-690px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        default : break;
    }
    setTimeout(scrollAuto,5000)
}

function scrollRight(){
    switch(scroll.style.marginLeft)
    {
        case '-10px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-120px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-690px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        default : break;
    }

}

function scrollLeft(){
    switch(scroll.style.marginLeft)
    {
        case '-120px':
        {
            scroll.style.marginLeft = '-10px';
            break;
        }
        case '-310px':
        {
            scroll.style.marginLeft = '-120px';
            break;
        }
        case '-500px':
        {
            scroll.style.marginLeft = '-310px';
            break;
        }
        case '-690px':
        {
            scroll.style.marginLeft = '-500px';
            break;
        }
        default : break;
    }
}

left.addEventListener('click',scrollLeft)
right.addEventListener('click',scrollRight)
