(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




  document.addEventListener("DOMContentLoaded", function () {
    let filters = document.getElementById("filters");
    let arrowLeft = document.querySelector(".arrow-left");
    let arrowRight = document.querySelector(".arrow-right");

    function scrollLeft() {
        filters.scrollBy({ left: -100, behavior: "smooth" });
    }

    function scrollRight() {
        filters.scrollBy({ left: 100, behavior: "smooth" });
    }

    // Add event listeners
    arrowLeft.addEventListener("click", scrollLeft);
    arrowRight.addEventListener("click", scrollRight);

    // Check scroll position and disable arrows if necessary
    function updateArrows() {
        arrowLeft.style.opacity = filters.scrollLeft > 0 ? "1" : "0.5";
        arrowLeft.style.pointerEvents = filters.scrollLeft > 0 ? "auto" : "none";

        let maxScroll = filters.scrollWidth - filters.clientWidth;
        arrowRight.style.opacity = filters.scrollLeft < maxScroll ? "1" : "0.5";
        arrowRight.style.pointerEvents = filters.scrollLeft < maxScroll ? "auto" : "none";
    }

    // Listen for scrolling and update arrow visibility
    filters.addEventListener("scroll", updateArrows);
    updateArrows(); // Initial check
});

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
        if (info.style.display != "inline") {
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
});


let taxToggle = document.querySelector(".tax-toggle");

window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        // Show the tax-toggle when at the top
        taxToggle.style.opacity = "1";
        taxToggle.style.display = "flex";  // Ensure it's visible
    } else {
        // Hide the tax-toggle when scrolling down
        taxToggle.style.opacity = "0";
        taxToggle.style.display = "none";  // Completely hide
    }
});