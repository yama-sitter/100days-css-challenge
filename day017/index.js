window.addEventListener('DOMContentLoaded', () => {
  const $alert = document.querySelector('.bl_alert')
  const $alertButton = $alert.querySelector('.bl_alert_button')

  $alertButton.addEventListener('click', () => {
    $alert.classList.add('bl_alert__hide')
  })
});
