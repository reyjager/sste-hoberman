
function menuButtonClick(event) {
  // Find the <i> element inside the clicked .accord-button which is the target to change
  var iconElement = event.currentTarget.querySelector('i.fa-solid.fa-chevron-down');

  // Toggle the 'rotate180' class on the <i> element
  if (iconElement.classList.contains('rotateup')) {
    iconElement.classList.remove('rotateup');
    iconElement.classList.add('rotatedown');
  } else {
    iconElement.classList.remove('rotatedown');
    iconElement.classList.add('rotateup');
  }
}


// Function to remove active from all menu items and hide all submenus
function removeAllActiveFromMenu() {
  const menuItems = document.querySelectorAll('.menu');
  const subMenus = document.querySelectorAll('.sub-menu');

  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('active');
  });

  subMenus.forEach((subMenu) => {
    subMenu.style.display = 'none';
  });
}


document.addEventListener('DOMContentLoaded', function () {
  var accordButtons = document.querySelectorAll('.accord-button');

  accordButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-collapse-target');
      var target = document.getElementById(targetId);

             // Toggle the chevron rotation
        var chevronIcon = button.querySelector('[class="fa-chevron-down"]');
        if (chevronIcon) {
          chevronIcon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      
    });
  });
});


