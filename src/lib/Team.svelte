<script lang="ts">
    import kh from '../assets/kh.jpg';
    import ram from '../assets/sriram.jpg';
    import ryan from '../assets/ryan.jpg';
    import wl from '../assets/wl.png';

  const teamMembers = [
    {
      name: 'Sriram',
      image: ram, 
      linkedin: 'https://www.linkedin.com/in/sriram-jeyakumar/'
    },
    {
      name: 'Ryan',
      image: ryan, 
      linkedin: 'https://www.linkedin.com/in/ryanyeojl/'
    },
    {
      name: 'Kiah Hong',
      image: kh, 
      linkedin: 'https://www.linkedin.com/in/lee-kiah-hong/'
    },
    {
      name: 'Wee Leong',
      image: wl, 
      linkedin: 'https://www.linkedin.com/in/chia-wee-leong/'
    }
  ];
</script>

<section class="team-section page-content">
  <h2 class="section-title">Our Team</h2>
  <div class="team-grid">
    {#each teamMembers as member}
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" class="team-member-card">
        <div class="member-image-container">
          <img src={member.image} alt={`A photo of ${member.name}`} class="member-image" />
          <div class="linkedin-overlay">
            <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
        </div>
        <h3 class="member-name">{member.name}</h3>
      </a>
    {/each}
  </div>
</section>

<style>
  .team-section {
    text-align: center;
    padding-top: 2rem;
    background-color: white;
    color: black;
  }

  .section-title {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 3.5rem;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem; 
    max-width: 1200px;
    margin: 0 auto;
  }

  .team-member-card {
    text-decoration: none;
    color: inherit;
    display: block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-member-card:hover {
    transform: translateY(-15px);
  }

  .member-image-container {
    position: relative;
    width: 100%;
    padding-top: 100%; 
    border-radius: 50%; 
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .member-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  .linkedin-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 10, 30, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .team-member-card:hover .linkedin-overlay {
    opacity: 1;
  }

  .linkedin-icon {
    width: 50px;
    height: 50px;
    color: white;
  }

  .member-name {
    font-size: 1.4em;
    font-weight: 600;
  }


  @media (max-width: 992px) {
    .team-grid {
      grid-template-columns: repeat(2, 1fr); 
      gap: 3rem;
    }
  }

  @media (max-width: 576px) {
    .team-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>