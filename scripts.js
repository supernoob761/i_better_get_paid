        function toggleMenu() {
            var navMenu = document.getElementById('navMenu');
            var burger = document.querySelector('.burger-menu');
            navMenu.classList.toggle('active');
            burger.classList.toggle('active');
        }
        function closeMenu() {
            var navMenu = document.getElementById('navMenu');
            var burger = document.querySelector('.burger-menu');
            navMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    function goToGalery() {
      let pass = document.getElementById("password").value;
      let confirmpass = document.getElementById("confirm").value;

      if (pass !== confirmpass) {
        alert("Passwords do not match!");
        document.getElementById("password").value = "";
        document.getElementById("confirm").value = "";
        return false;
      }
      window.location.href="Galary.html"
      return false;
    }
