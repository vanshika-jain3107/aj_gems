import fs from 'fs';
import path from 'path';

const targetDir = 'public/images/gemstones';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const gems = [
  { name: 'ruby-1', title: 'Mozambique Pigeon Blood Ruby', color1: '#4A0404', color2: '#DC2626', color3: '#991B1B' },
  { name: 'ruby-1-alt', title: 'Pigeon Blood Ruby Side View', color1: '#3F0000', color2: '#EF4444', color3: '#7F1D1D' },
  { name: 'ruby-2', title: 'Burmese Royal Crimson Ruby', color1: '#450A0A', color2: '#B91C1C', color3: '#7F1D1D' },
  { name: 'ruby-3', title: 'Natural Star Ruby', color1: '#3B0764', color2: '#991B1B', color3: '#581C87' },
  { name: 'blue-sapphire-1', title: 'Ceylon Royal Blue Sapphire', color1: '#0F172A', color2: '#2563EB', color3: '#1E3A8A' },
  { name: 'blue-sapphire-2', title: 'Kashmir Cornflower Sapphire', color1: '#172554', color2: '#3B82F6', color3: '#1E40AF' },
  { name: 'blue-sapphire-3', title: 'Deep Midnight Blue Sapphire', color1: '#020617', color2: '#1D4ED8', color3: '#0F172A' },
  { name: 'yellow-sapphire-1', title: 'Ceylon Canary Yellow Sapphire', color1: '#451A03', color2: '#EAB308', color3: '#B45309' },
  { name: 'yellow-sapphire-2', title: 'Golden Imperial Yellow Sapphire', color1: '#78350F', color2: '#F59E0B', color3: '#D97706' },
  { name: 'emerald-1', title: 'Colombian Muzo Green Emerald', color1: '#022C22', color2: '#10B981', color3: '#047857' },
  { name: 'emerald-2', title: 'Zambian Forest Emerald', color1: '#064E3B', color2: '#059669', color3: '#065F46' },
  { name: 'emerald-3', title: 'Panjshir Mint Emerald', color1: '#022C22', color2: '#34D399', color3: '#059669' },
  { name: 'amethyst-1', title: 'African Siberian Violet Amethyst', color1: '#2E1065', color2: '#8B5CF6', color3: '#5B21B6' },
  { name: 'amethyst-2', title: 'Brazilian Velvet Amethyst', color1: '#3B0764', color2: '#A855F7', color3: '#7E22CE' },
  { name: 'tanzanite-1', title: 'Tanzanite Violet-Blue', color1: '#1E1B4B', color2: '#6366F1', color3: '#3730A3' },
  { name: 'spinel-1', title: 'Burmese Hot Pink Spinel', color1: '#500724', color2: '#EC4899', color3: '#BE185D' },
  { name: 'opal-1', title: 'Australian Black Opal', color1: '#0F172A', color2: '#14B8A6', color3: '#3B82F6' },
];

gems.forEach((gem) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="bg-${gem.name}" cx="50%" cy="50%" r="75%">
      <stop offset="0%" stop-color="#151515" />
      <stop offset="100%" stop-color="#0B0B0B" />
    </radialGradient>
    <linearGradient id="gem-grad-${gem.name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gem.color2}" />
      <stop offset="50%" stop-color="${gem.color3}" />
      <stop offset="100%" stop-color="${gem.color1}" />
    </linearGradient>
    <filter id="glow-${gem.name}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="25" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="800" height="600" fill="url(#bg-${gem.name})" />

  <!-- Outer Ambient Glow -->
  <circle cx="400" cy="300" r="180" fill="${gem.color2}" opacity="0.15" filter="url(#glow-${gem.name})" />

  <!-- Faceted Gemstone Shape -->
  <g transform="translate(400, 290)">
    <!-- Gem Base Structure -->
    <polygon points="0,-140 120,-60 120,60 0,140 -120,60 -120,-60" fill="url(#gem-grad-${gem.name})" stroke="#C9A45C" stroke-width="1.5" stroke-opacity="0.4" />
    
    <!-- Table & Crown Facets -->
    <polygon points="0,-90 70,-40 70,40 0,90 -70,40 -70,-40" fill="#FFFFFF" fill-opacity="0.1" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.5" />
    <polygon points="0,-90 0,-140" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.3" />
    <polygon points="70,-40 120,-60" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.3" />
    <polygon points="70,40 120,60" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.3" />
    <polygon points="0,90 0,140" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.3" />
    <polygon points="-70,40 -120,60" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.3" />
    <polygon points="-70,-40 -120,-60" stroke="#C9A45C" stroke-width="1" stroke-opacity="0.3" />

    <!-- Specular Highlight -->
    <polygon points="-50,-70 20,-70 -20,-20 -60,-20" fill="#FFFFFF" fill-opacity="0.25" />
  </g>

  <!-- Watermark / Heritage Text -->
  <text x="400" y="520" text-anchor="middle" font-family="serif" font-size="20" fill="#C9A45C" letter-spacing="4" opacity="0.7">AJ GEMS • JAIPUR</text>
  <text x="400" y="545" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#F5F1E8" letter-spacing="2" opacity="0.5">${gem.title.toUpperCase()}</text>
</svg>`;

  fs.writeFileSync(path.join(targetDir, `${gem.name}.jpg`), svg);
  fs.writeFileSync(path.join(targetDir, `${gem.name}.svg`), svg);
});

console.log('Placeholder images created successfully!');
