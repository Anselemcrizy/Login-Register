const createNav = () => {
     let nav = document.querySelector('.navigation');
 
     nav.innerHTML = `
     <header>

     <h2 class="logo"><a href="index.html">Express</a></h2>
     <nav class="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="contact.blade.php">Contact</a>
          <button class="btnLogin-popup">Login</button>
     </nav>
</header>
     `;
 }
 
 createNav();