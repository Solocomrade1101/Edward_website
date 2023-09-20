const tl = gsap.timeline();

tl.fromTo('.after', { y: '+100%'}, {y:0})

ScrollTrigger.create({
  animation: tl,
  trigger: 'body',
  start: 'top top',
  end: '6000',
  scrub: true,


})


gsap.fromTo('.frame__title', { scale: 1, opacity: 1 }, {
  scale: 0.3  , opacity: 0,
  scrollTrigger: {
    trigger: '.portfolio',
    start: 'top top',
    end: '50%',
    scrub: true,
  }
})
gsap.fromTo('.frame-l__scroll', {opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.portfolio',
    start: 'top top',
    end: '100',
    scrub: true,
  }
})





  gsap.fromTo(".keys-2", { filter: "blur(6px)" }, {
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".keys-2",
      start: 'top -200px',
      end: '125% -200px',
      scrub: true,
    }
  })
  gsap.fromTo(".keys-4", { filter: "blur(8px)"}, {
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".keys-4",
      start: '1500px center',
      end: '1900px center',
      scrub: true,
    }
  })
