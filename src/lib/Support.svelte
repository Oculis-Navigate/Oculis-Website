<script lang="ts">
  import savhLogo from '../assets/savh.png';
  import ogpLogo from '../assets/ogp.png';
  import nexusLogo from '../assets/nexus.jpeg';
</script>

<section class="support-section page-content">
  <h2 class="section-title">Supported by the following partners:</h2>
  <div class="logos-container">
    <a href="https://savh.org.sg/" target="_blank" rel="noopener noreferrer" class="logo-link">
      <img src={savhLogo} alt="Singapore Association of the Visually Handicapped (SAVH) Logo" class="logo-image" />
    </a>
    <a href="https://www.open.gov.sg/" target="_blank" rel="noopener noreferrer" class="logo-link">
      <img src={ogpLogo} alt="Open Government Products (OGP) Logo" class="logo-image" />
    </a>
    <a href="https://www.mindef.gov.sg/about-us/community-engagement/nexus" target="_blank" rel="noopener noreferrer" class="logo-link">
      <img src={nexusLogo} alt="Nexus Logo" class="logo-image" />
    </a>
  </div>
</section>

<style>
  .support-section {
    color: black;
    padding-top: 1rem;
    padding-bottom: 4rem;
    text-align: center; 
    background-color: white;
  }

  .section-title {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  .logos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem; 
    flex-wrap: wrap;
    max-width: 900px; 
    margin: 0 auto; 
  }

  .logo-link {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .logo-link:hover {
    transform: translateY(-15px);
  }

  .logo-image {
    max-height: 100px;
    width: auto;
  }

  @media (max-width: 768px) {
    .logos-container {
      gap: 4rem;
    }
    .logo-image {
      max-height: 50px;
    }
  }
</style>