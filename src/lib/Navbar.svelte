<script lang="ts">
  import logoSrc from '../assets/logo.jpeg';
  const sections = ['About', 'Demo', 'Powered', 'Roadshow', 'Team'];
</script>

<style>
  nav.navbar {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    width: 100%;
    background-color: #fff;
    color: #000;
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
    transition: color 150ms;
  }

  .nav-links a:hover {
    color: #005aee;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: #005aee;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 150ms;
  }
  .nav-links a:hover::after {
    transform: scaleX(1);
  }
</style>

<nav class="navbar">
  <div class="logo">
    <img src={logoSrc} alt="Logo" />
  </div>

  <ul class="nav-links">
    {#each sections as section}
      <li><a href={'#' + section.toLowerCase()}>{section}</a></li>
    {/each}
  </ul>
</nav>
