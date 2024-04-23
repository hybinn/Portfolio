var accordion = new bootstrap.Collapse(
  document.getElementById('accordionFlushExample'),
  {
    toggle: false, 
  }
)

.
document.querySelectorAll('.accordion-button').forEach(function (button) {
  button.addEventListener('click', function () {
    var target = button.getAttribute('data-bs-target')
    if (target) {
      var collapse = document.querySelector(target)
      if (collapse) {
        var isOpen = collapse.classList.contains('show')
        if (!isOpen) {
          accordion.show(collapse)
        } else {
          accordion.hide(collapse) 
        }
      }
    }
  })
})
