function Hero() {
  const hero = document.createElement("div");
  hero.className = "hero";

  hero.innerHTML = `
    <video class="hero-video" autoplay muted loop playsinline>
      <source src="./assets/videos/hero_video.mp4" type="video/mp4">
    </video>
  `;

  return hero;
}

