window.addEventListener('DOMContentLoaded', () => {
  const $imageWrapper = document.querySelector('.bl_images')
  const $images = Array.from(document.querySelectorAll('.bl_images_image'))

  $images.forEach($image => {
    $image.addEventListener('click', () => {
      $image.classList.toggle('active')
      $imageWrapper.classList.toggle('active')
    })
  })
});
