let count = 0

window.addEventListener('DOMContentLoaded', () => {
  const $minusButton = document.querySelector('#minusButton')
  const $plusButton = document.querySelector('#plusButton')

  $minusButton.addEventListener('click', () => countUp(-1))
  $plusButton.addEventListener('click', () => countUp(1))
})


const countUp = (offset) => {
  const $number = document.querySelector('#number')
  count += offset

  const $fadeOutUp = $number.querySelector('.fadeOutUp')
  if ($fadeOutUp) {
    $number.removeChild($fadeOutUp)
  }

  const $fadeOutDown = $number.querySelector('.fadeOutDown')
  if ($fadeOutDown) {
    $number.removeChild($fadeOutDown)
  }

  $number.querySelector('span').classList.remove('fadeInUp')
  $number.querySelector('span').classList.remove('fadeInDown')

  const $span = document.createElement('span')

  if (offset > 0) {
    $span.classList.add('fadeInUp')
    $span.innerHTML = count
    $number.appendChild($span)
    $number.querySelector('span').classList.add('fadeOutUp')
  } else {
    $span.classList.add('fadeInDown')
    $span.innerHTML = count
    $number.appendChild($span)
    $number.querySelector('span').classList.add('fadeOutDown')
  }

  $span.innerHTML = count
  $number.appendChild($span)
}
