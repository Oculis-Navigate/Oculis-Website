<script lang="ts">
  import demoVideo from '../assets/demo.mp4';
  import qrCode from '../assets/qrcode.png';
</script>

<section class="demo-section page-content">
  <h2 class="section-title">Helping you see the world, one journey at a time.</h2>
  <div class="demo-content-wrapper">
    <div class="video-container">
      <video class="demo-video" autoplay loop muted playsinline>
        <source src={demoVideo} type="video/mp4" />
      </video>
    </div>

    <div class="qr-container">
      <h3 class="qr-text">Your journey starts here.</h3>
      <img src={qrCode} alt="QR Code to try the app" class="qr-image" />
      <p class="qr-subtext">Scan to experience Oculis now.</p>
    </div>
  </div>
</section>

<style>
  .demo-section {
    color: black;
    text-align: center; 
    padding-bottom: 4rem;
  }

  .demo-content-wrapper {
    display: flex;
    align-items: center;
    gap: 3rem; 
    max-width: 1100px; 
    margin: 0 auto;
    flex-wrap: wrap;
    text-align: left;
  }

  .video-container {
    flex: 1 1 60%; 
    min-width: 400px;
  }

  .section-title {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  .demo-video {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    display: block;
  }

  .qr-container {
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem; 
  }

  .qr-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    order: 2;
  }

  .qr-text {
    font-size: 1.6em;
    font-weight: 600;
    color: #333;
    line-height: 1.2;
    order: 1;
  }

  .qr-subtext {
    font-size: 1.1em;
    color: #555;
    order: 3;
  }

  @media (max-width: 900px) {
    .demo-content-wrapper {
      flex-direction: column;
      gap: 3rem;
      text-align: center;
    }
    .video-container, .qr-container {
      flex-basis: auto;
    }
  }
</style>