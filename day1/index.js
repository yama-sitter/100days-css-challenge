window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#menuIcon')

  target.addEventListener('click', () => {
    target.classList.toggle('bl_menuIcon__activated')

    if (target.classList.contains('bl_menuIcon__inactivated')) {
      target.classList.remove('bl_menuIcon__inactivated')
    }
  })
});
