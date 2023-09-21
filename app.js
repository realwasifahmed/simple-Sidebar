let show = document.getElementById('showSidebar')
let close = document.getElementById("closeSidebar")

show.addEventListener('click', () => {
    let aside = document.querySelector('aside')
    aside.style.width = '50%'

    close.addEventListener('click', () => {
        aside.style.width = '0%'
    })
})