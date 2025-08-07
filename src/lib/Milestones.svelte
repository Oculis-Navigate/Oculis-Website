<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import ndpImage from '../assets/ndp-engagement.jpg';
  import hpcImage from '../assets/hpc.jpeg';
  import innofestImage from '../assets/innofest.jpg';

  interface CarouselItem {
    imageSrc: string;
    title: string;
    description: string;
  }

  const carouselData: CarouselItem[] = [
    {
      imageSrc: ndpImage,
      title: 'NDP Engagement',
      description: "Our team presented Oculis to Senior Minister Zaqy Mohamad and Minister Desmond Choo, demonstrating how this assistive technology strengthens Singapore's Social Defence by creating an inclusive society where everyone can contribute to our nation's resilience.",
    },
    {
      imageSrc: innofestImage,
      title: 'NTU Innofest',
      description: "Our team presented Oculis to MP Shawn Huang at NTU Innofest, showing how it enables visually impaired Singaporeans to navigate independently and confidently, fostering a more inclusive society.",
    },
    {
      imageSrc: hpcImage,
      title: 'Supercomputing Asia 2025',
      description: "Our team presented Oculis to an international audience at Supercomputing Asia 2025, showcasing how we used high performance computing to empower the visually impaired and drive social good.",
    },
  ];

  let currentIndex = 0;
  let intervalId: number;
  const intervalTime = 8000;

  function goToSlide(direction: 'next' | 'prev') {
    if (direction === 'next') {
      currentIndex = (currentIndex + 1) % carouselData.length;
    } else {
      currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    }
    
    resetInterval();
  }

  function startInterval() {
    intervalId = setInterval(() => goToSlide('next'), intervalTime);
  }

  function resetInterval() {
    clearInterval(intervalId);
    startInterval();
  }

  onMount(() => {
    startInterval();
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<section class="mp-carousel-section page-content">
  <h2 class="section-title">Our Milestones</h2>
  <div class="carousel-wrapper">
    <button class="carousel-arrow prev" on:click={() => goToSlide('prev')} aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </button>
    <button class="carousel-arrow next" on:click={() => goToSlide('next')} aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
    </button>

    <div class="slides-container">
      {#key currentIndex}
        <div class="carousel-slide" in:fade={{ duration: 600 }} out:fade={{ duration: 600 }}>
          <div class="slide-image-container">
            <img src={carouselData[currentIndex].imageSrc} alt={carouselData[currentIndex].title} class="slide-image" />
          </div>
          <div class="slide-description-container">
            <h3>{carouselData[currentIndex].title}</h3>
            <p>{carouselData[currentIndex].description}</p>
          </div>
        </div>
      {/key}
    </div>
  </div>
</section>

<style>
  .mp-carousel-section {
    text-align: center;
    padding-bottom: 4rem;
    background-color: white;
    color: black;
  }

  .section-title {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  .carousel-wrapper {
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
  }

  .slides-container {
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius-lg, 24px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    background-color: var(--background-color, #FFFFFF);
    min-height: 450px;
  }

  .carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 3rem;
    text-align: left;
    box-sizing: border-box;
  }

  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
  }
  .carousel-arrow:hover {
    background-color: white;
    transform: translateY(-50%) scale(1.1);
  }
  .carousel-arrow.prev {
    left: -30px;
  }
  .carousel-arrow.next {
    right: -30px;
  }
  .carousel-arrow svg {
    width: 36px;
    height: 36px;
    color: #333;
  }

  .slide-image-container {
    flex: 0 0 500px;
    height: 350px;
    overflow: hidden;
    border-radius: var(--border-radius-md, 16px);
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: var(--border-radius-md, 16px); 
  }

  .slide-description-container {
    flex: 1;
  }

  .slide-description-container h3 {
    font-size: 1.6em;
    margin-bottom: 0.5rem;
    color: var(--heading-color, #111827);
  }

  .slide-description-container p {
    font-size: 1.05em;
    line-height: 1.6;
    color: black;
    padding-right: 1rem;
    margin-top: 0; 
  }

  @media (max-width: 1200px) {
    .carousel-arrow.prev {
      left: 15px;
    }
    .carousel-arrow.next {
      right: 15px;
    }
  }

  @media (max-width: 768px) {
    .slides-container {
      min-height: 600px; 
    }
    .carousel-slide {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
      padding: 2rem 2rem 3rem;
    }
    .slide-image-container {
      flex-basis: auto;
      width: 100%;
      max-width: 350px;
      height: 250px;
    }
    .slide-description-container p {
      padding-right: 0;
    }
  }
</style>