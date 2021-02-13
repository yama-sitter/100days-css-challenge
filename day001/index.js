window.addEventListener('DOMContentLoaded', () => {
  const $menuIcon = document.querySelector('#menuIcon')

  $menuIcon.addEventListener('click', () => {
    $menuIcon.classList.toggle('bl_menuIcon__activated')

    if ($menuIcon.classList.contains('bl_menuIcon__inactivated')) {
      $menuIcon.classList.remove('bl_menuIcon__inactivated')
    }
  })
});
