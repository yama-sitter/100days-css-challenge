window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#day1')

  target.addEventListener('click', () => {
    target.classList.toggle('bl_day1__activated')

    if (target.classList.contains('bl_day1__inactivated')) {
      target.classList.remove('bl_day1__inactivated')
    }
  })
});
