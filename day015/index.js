window.addEventListener('DOMContentLoaded', () => {
  const $menuItems = document.querySelector('.bl_menu_items')
  const $menuButton = document.querySelector('.bl_menu_button')
  const $links = Array.from(document.querySelectorAll('.link'))

  $links.forEach($link => {
    $link.addEventListener('click', () => {
      $menuItems.classList.toggle('active')
      $menuButton.classList.toggle('active')
    })
  })
});
