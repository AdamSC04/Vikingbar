let openButtons = document.querySelectorAll(".open-touch");
let closeButtons = document.querySelectorAll(".closeDropdown");
let dropdowns = document.querySelectorAll(".daily-item-dropdown");
let menuButton = document.getElementById("menuButton");

if (window.matchMedia("(max-width: 768px)").matches) {
    let openButtons = document.querySelectorAll(".open-touch");
    let closeButtons = document.querySelectorAll(".closeDropdown");
    let dropdowns = document.querySelectorAll(".daily-item-dropdown");
  
    for (let i = 0; i < openButtons.length; i++) {
      let openButton = openButtons[i];
      let closeButton = closeButtons[i];
      let dropdown = dropdowns[i];
  
      openButton.addEventListener("click", function() {
        dropdown.style.display = "flex";
      });
  
      closeButton.addEventListener("click", function() {
        dropdown.style.display = "none";
      });
  
      dropdown.addEventListener("mouseleave", function() {
        dropdown.style.display = "none";
      });
    }
    for (let i = 0; i < dropdowns.length; i++) {
        let dropdown = dropdowns[i];
        let dailyItem = dropdown.closest(".daily-item");
    
        dailyItem.addEventListener("mouseenter", function() {
          dropdown.style.display = "flex";
        });
    
        dailyItem.addEventListener("mouseleave", function() {
          dropdown.style.display = "none";
        });
      }
  }

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    const position = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  } 
}

menuButton.addEventListener("click", function() {
  scrollToElement("menu");
});

