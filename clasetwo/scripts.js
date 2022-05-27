const getScrollBarWidth = () => {
    return(innerWidth - document.documentElement.clientWidth)
}


document.documentElement.style.setProperty('--scroll-bar', getScrollBarWidth())