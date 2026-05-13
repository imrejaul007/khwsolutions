const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const WIDTH = 1200;
const HEIGHT = 630;

async function generateOgImage() {
  // Create SVG with branding
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1D6D29;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#258E35;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#EE7C00;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF9E2C;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="${WIDTH - 100}" cy="${HEIGHT + 50}" r="200" fill="#258E35" opacity="0.4"/>
  <circle cx="${WIDTH - 200}" cy="${HEIGHT - 50}" r="150" fill="#1D6D29" opacity="0.5"/>
  <circle cx="100" cy="-50" r="120" fill="#4AAE50" opacity="0.2"/>

  <!-- Gold accent bar -->
  <rect x="80" y="200" width="6" height="120" fill="url(#gold)"/>

  <!-- Brand name -->
  <text x="110" y="260" font-family="Georgia, serif" font-size="72" font-weight="bold" fill="#ffffff" letter-spacing="8">KHW</text>
  <text x="110" y="300" font-family="Georgia, serif" font-size="28" font-weight="300" fill="#CCE5D5" letter-spacing="4">SOLUTIONS</text>

  <!-- Tagline -->
  <text x="110" y="350" font-family="Arial, sans-serif" font-size="22" fill="rgba(255,255,255,0.7)" letter-spacing="1">Premium Synthetic Thatch &amp; Bamboo</text>

  <!-- Bottom strip -->
  <rect x="0" y="${HEIGHT - 80}" width="${WIDTH}" height="80" fill="rgba(0,0,0,0.2)"/>
  <text x="110" y="${HEIGHT - 40}" font-family="Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.6)" letter-spacing="2">khwsolutions.com</text>
  <text x="${WIDTH - 110}" y="${HEIGHT - 40}" text-anchor="end" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.4)" letter-spacing="1">TUV SUD CERTIFIED • 20-YEAR WARRANTY</text>
</svg>`;

  const outputPath = path.join(__dirname, "..", "public", "images", "og-image.png");

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`OG image generated: ${outputPath}`);
}

generateOgImage().catch(console.error);
