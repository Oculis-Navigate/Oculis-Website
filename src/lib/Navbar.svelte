<script lang="ts">
  import logoSrc from '../assets/logo.jpeg';
  const sections = ['About', 'Demo', 'Milestones', 'Partners', 'Team'];
</script>

<nav class="navbar">
  <div class="logo">
    <a href="#about">
      <img src={logoSrc} alt="Logo" />
    </a>
  </div>

  <ul class="nav-links">
    {#each sections as section}
      <li><a href={'#' + section.toLowerCase()}>{section}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav.navbar {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: 0.25rem 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .logo img {
    height: 5.5rem;
    padding-left: 4rem;
    width: auto;
  }

  .nav-links {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;           
    margin: 0 auto;       
    list-style: none;
    padding: 0;
  }

  .nav-links a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.65rem;    
    padding: 0.5rem 0;     
    position: relative;
    display: inline-block; 
    transition: color 150ms, transform 0.3s ease; 
  }
  
  .nav-links a:hover {
    transform: scale(1.2); 
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    bottom: 0; 
    height: 2px;
    background-color: black;
    transform: scaleX(0);
    transform-origin: center; 
    transition: transform 150ms ease-in-out;
  }

  .nav-links a:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 992px) {
    nav.navbar {
      display: flex;
      flex-direction: column;
      padding: 1rem; 
    }

    .logo img {
      height: 4.5rem;
      padding-left: 0; 
      margin-bottom: 1rem;
    }

    .nav-links {
      grid-column: unset;
      width: 100%;
      margin: 0;
      
      flex-direction: column;
      align-items: center; 
      gap: 1rem; 
    }

    .nav-links a {
      font-size: 1.2rem;
    }
  }
</style>