// Bootstrap의 Collapse 컴포넌트를 사용하여 아코디언을 초기화합니다.
var accordion = new bootstrap.Collapse(
  document.getElementById('accordionFlushExample'),
  {
    toggle: false, // 수동으로 아코디언을 열고 닫을 수 있도록 toggle 옵션을 false로 설정합니다.
  }
)

// 각 아코디언 아이템의 버튼을 클릭할 때 아코디언을 열고 닫습니다.
document.querySelectorAll('.accordion-button').forEach(function (button) {
  button.addEventListener('click', function () {
    var target = button.getAttribute('data-bs-target')
    if (target) {
      var collapse = document.querySelector(target)
      if (collapse) {
        var isOpen = collapse.classList.contains('show')
        if (!isOpen) {
          accordion.show(collapse) // 아코디언 열기
        } else {
          accordion.hide(collapse) // 아코디언 닫기
        }
      }
    }
  })
})
