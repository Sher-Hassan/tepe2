
    const hamburger = document.querySelector('.hamb');
    const closeMenu = document.querySelector('.close');
    const mobileMenu = document.querySelector('.mobmenu');
    const body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      mobileMenu.style.right = '0'; // Slide the menu in
      body.style.overflow = 'hidden'; // Prevent body scroll
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.style.right = '-300%'; // Slide the menu out
      body.style.overflow = ''; // Restore body scroll
    });
    function closebar(){
    mobileMenu.classList.remove('open');
      mobileMenu.style.right = '-300%'; // Slide the menu out
      body.style.overflow = '';
    }