const initAnimacaoScroll = () => {
  const animations = document.querySelectorAll('#animation')

  if (animations.length) {
    const windowHalf = window.innerHeight * 0.6

    const animaScroll = () => {
      animations.forEach((animation) => {
        const sectionTop = animation.getBoundingClientRect().top
        const isSectionViseble = sectionTop - windowHalf < 0
        if (isSectionViseble) animation.classList.add('ativo')
      })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}

initAnimacaoScroll()