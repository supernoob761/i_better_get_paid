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
