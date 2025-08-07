<script lang="ts">
  import appImage from '../assets/app-image.jpeg'; 
</script>

<section class="app-info-container page-content">
  <div class="image-container">
    <img src={appImage} alt="Oculis App Screenshot" class="app-image"/>
  </div>
  <div class="description-container">
    <h2>Oculis</h2>
    <p>
      Oculis is an iOS application designed to enhance public transit accessibility, especially for the visually impaired in Singapore. The app began as a real-time bus scanner but has evolved into a comprehensive transit companion.
    </p>
    <p>
      It combines on-device machine learning to identify buses with live data from Singapore's Land Transport Authority (LTA) to provide a complete journey-planning tool.
    </p>
  </div>
</section>

<style>
.app-info-container {
  display: flex;
  align-items: center; 
  max-width: 1100px;
  margin: 2rem auto;
  color: black;
  gap: 2rem;
}

.image-container {
  flex: 0 1 300px;
}

.description-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.app-image {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
h2 {
  font-size: 2.2em;
  margin-bottom: 1rem;
  font-weight: 600;
}

p {
  line-height: 1.7;
  font-size: 1.1em;
  max-width: 55ch;
  margin: 0 0 1rem 0;
}

@media (max-width: 768px) {
  .app-info-container {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  p {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>