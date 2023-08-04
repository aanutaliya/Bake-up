function showSection(section) {
    var donutSection = document.getElementById("donut");
    var cakeSection = document.getElementById("cake");
    var briocheSection = document.getElementById("brioche");
    var drinkSection = document.getElementById("drink");

    if (section === 'donut') {
      donutSection.style.display = 'block';
      cakeSection.style.display = 'none';
      briocheSection.style.display = 'none'
      drinkSection.style.display = 'none';
      setActiveNavItem('donut');
    } 
    else if (section === 'cake') {
      donutSection.style.display = 'none';
      cakeSection.style.display = 'block';
      briocheSection.style.display = 'none';
      drinkSection.style.display = 'none';
      setActiveNavItem('cake'); 
    }
    else if (section === 'brioche') {
        donutSection.style.display = 'none';
        cakeSection.style.display = 'none';
        briocheSection.style.display = 'block';
        drinkSection.style.display = 'none';
        setActiveNavItem('brioche');
      }
    else if (section === 'drink') {
      donutSection.style.display = 'none';
      cakeSection.style.display = 'none';
      briocheSection.style.display = 'none'
      drinkSection.style.display = 'block';
      setActiveNavItem('drink');
  }
}

function setActiveNavItem(section) {
    var subNavItems = document.querySelectorAll('.sub-nav ul li a');
    for (var i = 0; i < subNavItems.length; i++) {
      if (subNavItems[i].innerHTML.toLowerCase() === section) {
        subNavItems[i].classList.add('active');
      } else {
        subNavItems[i].classList.remove('active');
      }
    }
}

//getting modal opening buttons
var modalBtns = document.querySelectorAll(".each-container");

modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    }
})

var closeBtns = document.querySelectorAll(".close");

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest(".modal").style.display = "none")
    }
})

window.onclick = function(e) {
    if(e.target.className == "modal") {
        e.target.style.display = "none";
    }
}

  