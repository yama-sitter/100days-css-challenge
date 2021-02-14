window.addEventListener('DOMContentLoaded', () => {
  const $whiteLogo = document.querySelector('.bl_logo__white')
  const $purpleLogo = document.querySelector('.bl_logo__purple')

  document.querySelector('#block').addEventListener('click', () => {
    $whiteLogo.classList.toggle('bl_logo__normal')
    $whiteLogo.classList.toggle('bl_logo__big')
    $purpleLogo.classList.toggle('bl_logo__small')
    $purpleLogo.classList.toggle('bl_logo__normal')
  })
});
