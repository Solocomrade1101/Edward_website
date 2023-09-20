
let arrow = document.querySelector('.social__arrow-open')
let socialOpen = document.querySelector('.fixed__social-open')

document.querySelector('.social__event').addEventListener('mouseenter', () => {
    arrow.style.transform = 'rotate(180deg)'
    socialOpen.style.opacity = '1'
    socialOpen.style.transform = 'translateX(-47px)'
    socialOpen.style.pointerEvents = 'auto'
})
socialOpen.addEventListener('mouseleave', () => {
    arrow.style.transform = 'rotate(0deg)'
    socialOpen.style.transform = 'translateX(-60px)'
    socialOpen.style.opacity = '0'
    socialOpen.style.pointerEvents = 'none'
})