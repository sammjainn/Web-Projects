const container = document.querySelector(".container")
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

function breatheAnimation() {
  text.innerHTML = 'Breathe in..'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerHTML = 'Hold'

    setTimeout(() => {
      text.innerHTML = 'Breathe out..'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

breatheAnimation()

setInterval(breatheAnimation, totalTime)