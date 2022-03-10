function createAnalytics() {
  let counter = 0
  let distroyed = false
  const listener = () => counter++

  document.addEventListener('click', listener)

  return {
    dystroy() {
      document.removeEventListener('click', listener)
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