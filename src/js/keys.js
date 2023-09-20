'https://solocomrade1101.github.io/React_Applications.github.io/'
'https://solocomrade1101.github.io/galaxy_horses/'
'https://solocomrade1101.github.io/NFT_project/'
'https://solocomrade1101.github.io/Movies_project/'
let info = document.querySelector('.frame__info')
let infoIcon = document.querySelector('.frame__block-icon')
let keys = document.querySelectorAll('.frame__block')
let frameInfo = document.querySelectorAll('.frame__info')


keys.forEach(item => {
  item.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
      let current = e.currentTarget.dataset.info - 1 
      frameInfo[current].classList.toggle('frame__info-active')
    }else{
      console.log(e.currentTarget.dataset.link)
      // window.open('https://solocomrade1101.github.io/React_Applications.github.io/')
    }
    
  
  })
})


