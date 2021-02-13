window.addEventListener('DOMContentLoaded', () => {
  const $search = document.querySelector('#search')
  const $suggestions = document.querySelector('#suggestions')

  $search.addEventListener('keyup', (e) => {
    const searchTextLen = $search.value.length
    $suggestions.innerHTML = ''

    if (searchTextLen > 0) {
      $suggestions.classList.add('bl_search_suggestions__active')

      const text = $search.value
      $suggestions.insertAdjacentHTML('beforeend', `<li><b>${text}</b></li>`)
      $suggestions.insertAdjacentHTML('beforeend', `<li>Veritatis et <b>${text}</b></li>`)
      $suggestions.insertAdjacentHTML('beforeend', `<li>ut aliquid ex <b>${text}</b></li>`)
    } else {
      $suggestions.classList.remove('bl_search_suggestions__active')
    }
  })
})
