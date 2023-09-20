let zSpacing = -1100,
    lastPos = zSpacing / 3.5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []


window.onscroll = function(){

  let top = document.documentElement.scrollTop,
      delta = lastPos - top

  lastPos = top
  zVals = zVals.slice(0, frames.length);

  frames.forEach((n, i) => {
    zVals.push((i * zSpacing) + zSpacing)
    zVals[i] += delta * - 2.5
    let frame = frames[i],
        transform = `translateZ(${zVals[i]}px)`,
        // делитель 1.5 показывает как скоро елемент будет скрываться
        opacity = zVals[i] < Math.abs(zSpacing) / 2 ? 1 : 0
        // zIndex = zVals[i] < Math.abs(zSpacing) / 2 ? '1' : '-100'
        display = zVals[i] < Math.abs(zSpacing) / 1 ? 'flex' : 'none' 

    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity};  display: ${display}` )

  })
}

window.scrollTo(0, 1)

