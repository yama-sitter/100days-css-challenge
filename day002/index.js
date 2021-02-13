window.addEventListener('DOMContentLoaded', () => {
  let count = 1

  const $cards = Array.from(document.querySelectorAll('.bl_card_button'))

  $cards.forEach($el => {
    $el.addEventListener('click', () => {
      const $currentCard = document.querySelector(`.bl_card:nth-child(${count})`)
      $currentCard.classList.remove('bl_card_activated')
      $currentCard.classList.add('bl_card__inactivated')

      if (count === $cards.length) {
        count = 1
      } else {
        count++
      }

      const $nextCard = document.querySelector(`.bl_card:nth-child(${count})`)
      $nextCard.classList.remove('bl_card__inactivated')
      $nextCard.classList.add('bl_card__activated')
    })
  })
});
