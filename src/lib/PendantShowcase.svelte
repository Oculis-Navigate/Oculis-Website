<script lang="ts">
  import { onMount } from 'svelte';
  // @ts-expect-error - anime.js v3 types
  import anime from 'animejs';

  let isFlipped = $state(false);
  let showcaseContainer: HTMLElement | undefined = $state();
  let pendantWrapper: HTMLDivElement | undefined = $state();
  let isAnimating = $state(false);
  let prefersReducedMotion = $state(false);

  const frontAnnotations = [
    { id: 'btn', text: 'Textured Action Button (Knurled)', top: '15%', left: '80%' },
    { id: 'cam', text: 'OV9281 Camera', top: '35%', left: '-20%' },
    { id: 'glass', text: 'Smoked Glass / Lens Cover', top: '65%', left: '80%' }
  ];

  const backAnnotations = [
    { id: 'lanyard', text: 'Lanyard\nAttachment Point', top: '10%', left: '-20%' },
    { id: 'logo', text: 'Laser Engraved\nLighthouse Logo', top: '50%', left: '80%' }
  ];

  onMount(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const settleCurrentView = () => {
      const frontCallouts = showcaseContainer?.querySelectorAll('.annotation.front');
      const backCallouts = showcaseContainer?.querySelectorAll('.annotation.back');

      anime.remove(frontCallouts);
      anime.remove(backCallouts);
      if (frontCallouts) anime.set(frontCallouts, { opacity: isFlipped ? 0 : 1, translateX: 0 });
      if (backCallouts) anime.set(backCallouts, { opacity: isFlipped ? 1 : 0, translateX: 0 });

      if (pendantWrapper) {
        anime.remove(pendantWrapper);
        anime.set(pendantWrapper, { rotateY: isFlipped ? 180 : 0 });
      }
      isAnimating = false;
    };
    const updateMotionPreference = () => {
      prefersReducedMotion = motionQuery.matches;
      if (prefersReducedMotion) settleCurrentView();
    };

    updateMotionPreference();
    motionQuery.addEventListener('change', updateMotionPreference);

    if (prefersReducedMotion) {
      return () => motionQuery.removeEventListener('change', updateMotionPreference);
    }

    anime({
      targets: showcaseContainer?.querySelectorAll('.annotation.front'),
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(150),
      easing: 'easeOutQuad',
      duration: 600
    });

    return () => {
      motionQuery.removeEventListener('change', updateMotionPreference);
      anime.remove(showcaseContainer?.querySelectorAll('.annotation'));
      if (pendantWrapper) anime.remove(pendantWrapper);
    };
  });

  function handleFlip() {
    if (isAnimating) return;

    if (prefersReducedMotion) {
      isFlipped = !isFlipped;
      if (pendantWrapper) {
        anime.remove(pendantWrapper);
        pendantWrapper.style.transform = `rotateY(${isFlipped ? 180 : 0}deg)`;
      }
      return;
    }

    isAnimating = true;

    const tl = anime.timeline({
      easing: 'easeInOutQuad',
      complete: () => {
        isFlipped = !isFlipped;
        isAnimating = false;
      }
    });

    const targetRotation = isFlipped ? 0 : 180;
    const hideClass = showcaseContainer?.querySelectorAll(
      isFlipped ? '.annotation.back' : '.annotation.front'
    );
    const showClass = showcaseContainer?.querySelectorAll(
      isFlipped ? '.annotation.front' : '.annotation.back'
    );

    tl.add({
      targets: hideClass,
      opacity: 0,
      duration: 300
    })
    .add({
      targets: pendantWrapper,
      rotateY: targetRotation,
      duration: 800
    }, '-=100')
    .add({
      targets: showClass,
      opacity: 1,
      translateX: [isFlipped ? 20 : -20, 0],
      duration: 400,
      delay: anime.stagger(100)
    }, '-=200');
  }
</script>

<section
  class="showcase-container"
  bind:this={showcaseContainer}
  aria-labelledby="pendant-showcase-heading"
>
  <h2 id="pendant-showcase-heading" class="visually-hidden">
    Explore the Oculis wearable
  </h2>

  <div
    class="scene"
    id="pendant-view"
    role="group"
    aria-label={isFlipped ? 'Back view of the Oculis wearable' : 'Front view of the Oculis wearable'}
    aria-describedby="pendant-view-description"
    aria-busy={isAnimating}
  >
    {#each frontAnnotations as ann}
      <div 
        class="annotation front" 
        style="top: {ann.top}; left: {ann.left}; opacity: {isFlipped ? 0 : 1};"
        aria-hidden="true"
      >
        <div class="annotation-content">
          <div class="line"></div>
          <p>{ann.text}</p>
        </div>
      </div>
    {/each}

    {#each backAnnotations as ann}
      <div 
        class="annotation back" 
        style="top: {ann.top}; left: {ann.left}; opacity: {isFlipped ? 1 : 0};"
        aria-hidden="true"
      >
        <div class="annotation-content">
          <div class="line"></div>
          <p>{ann.text}</p>
        </div>
      </div>
    {/each}

    <div class="pendant-wrapper" bind:this={pendantWrapper}>
      <img src="/front-view.png" alt="" class="face face-front" />
      <img src="/back-view.png" alt="" class="face face-back" />
    </div>
  </div>

  <p
    id="pendant-view-description"
    class="visually-hidden"
    aria-live="polite"
    aria-atomic="true"
  >
    {isFlipped
      ? 'Back view. Features shown: lanyard attachment point and laser-engraved lighthouse logo.'
      : 'Front view. Features shown: textured knurled action button, OV9281 camera and smoked-glass lens cover.'}
  </p>

  <button
    class="flip-btn"
    type="button"
    onclick={handleFlip}
    aria-disabled={isAnimating}
    aria-controls="pendant-view"
  >
    {isFlipped ? 'View Front' : 'View Back'}
  </button>
</section>

<style>
  .showcase-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    background: #f8f9fa;
  }

  .scene {
    position: relative;
    width: 400px;
    height: 600px;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pendant-wrapper {
    width: 300px;
    height: 450px;
    position: relative;
    transform-style: preserve-3d;
    transform-origin: center center;
  }

  .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
  }

  .face-front {
    transform: rotateY(0deg);
  }

  .face-back {
    transform: rotateY(180deg);
  }

  .annotation {
    position: absolute;
    z-index: 10;
    pointer-events: none;
  }

  .annotation-content {
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 200px;
  }

  .annotation.front .annotation-content {
    margin-left: 20px;
  }

  .annotation.back .annotation-content {
    margin-left: -20px;
  }

  .annotation p {
    margin: 0;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
    font-size: 0.85rem;
    font-weight: 500;
    color: #2d3748;
    letter-spacing: -0.02em;
    line-height: 1.4;
    white-space: pre-line;
  }

  .line {
    position: absolute;
    top: 50%;
    height: 1px;
    width: 40px;
  }

  .annotation.front .line {
    left: -40px;
    transform: translateY(-50%);
    background: linear-gradient(90deg, transparent 0%, #3182ce 30%, #3182ce 100%);
  }

  .annotation.back .line {
    right: -40px;
    left: auto;
    transform: translateY(-50%);
    background: linear-gradient(90deg, #3182ce 0%, #3182ce 70%, transparent 100%);
  }

  .annotation.front::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: #3182ce;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }

  .annotation.back::before {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: #3182ce;
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }

  .flip-btn {
    margin-top: 3rem;
    padding: 14px 32px;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #286da8 0%, #2c5282 100%);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(49, 130, 206, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .flip-btn:hover:not([aria-disabled="true"]) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(49, 130, 206, 0.4);
  }

  .flip-btn:active:not([aria-disabled="true"]) {
    transform: translateY(0);
  }

  .flip-btn:focus-visible {
    outline: 3px solid #050505;
    outline-offset: 4px;
  }

  .flip-btn[aria-disabled="true"] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .flip-btn {
      transition: none;
    }
  }
</style>
