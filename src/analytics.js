import * as $ from 'jquery'

function createAnalytics() {
  let counter = 0
  let distroyed = false
  const listener = () => counter++

  $(document).on('click', listener)

  return {
    dystroy() {
      $(document).off('click', listener)
      distroyed = true
    },

    getClicks() {
      if (isDistroyed) {
        return `Distroyed. Amount of counter: ${counter}`
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()