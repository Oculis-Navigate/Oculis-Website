<script lang="ts">
  import { onMount } from 'svelte';
  // @ts-expect-error - anime.js v3 types
  import anime from 'animejs';

  let isFlipped = $state(false);
  let pendantWrapper: HTMLDivElement | undefined = $state();
  let isAnimating = $state(false);

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
    anime({
      targets: '.annotation.front',
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(150),
      easing: 'easeOutQuad',
      duration: 600
    });
  });

  function handleFlip() {
    if (isAnimating) return;
    isAnimating = true;

    const tl = anime.timeline({
      easing: 'easeInOutQuad',
      complete: () => {
        isFlipped = !isFlipped;
        isAnimating = false;
      }
    });

    const targetRotation = isFlipped ? 0 : 180;
    const hideClass = isFlipped ? '.annotation.back' : '.annotation.front';
    const showClass = isFlipped ? '.annotation.front' : '.annotation.back';

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

<div class="showcase-container">
  <div class="scene">
    {#each frontAnnotations as ann}
      <div 
        class="annotation front" 
        style="top: {ann.top}; left: {ann.left}; opacity: 0;"
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
        style="top: {ann.top}; left: {ann.left}; opacity: 0;"
      >
        <div class="annotation-content">
          <div class="line"></div>
          <p>{ann.text}</p>
        </div>
      </div>
    {/each}

    <div class="pendant-wrapper" bind:this={pendantWrapper}>
      <img src="/front-view.png" alt="Front" class="face face-front" />
      <img src="/back-view.png" alt="Back" class="face face-back" />
    </div>
  </div>

  <button class="flip-btn" onclick={handleFlip} disabled={isAnimating}>
    {isFlipped ? 'View Front' : 'View Back'}
  </button>
</div>

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
    background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(49, 130, 206, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .flip-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(49, 130, 206, 0.4);
  }

  .flip-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .flip-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
</style>
