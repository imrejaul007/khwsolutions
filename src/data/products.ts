export interface ColorOption {
  name: string;
  description: string;
  hex: string;
}

export interface PoleSpec {
  od: string;
  id: string;
  thickness: string;
  length: string;
}

export interface InstallationMethod {
  type: string;
  description: string;
  battenSpacing?: string;
  railType?: string;
  subDeck?: string;
  waterMembrane?: string;
  notes?: string;
  diagramImage?: string;
  beam?: string;
  batten?: string;
  rafter?: string;
  pillar?: string;
  panelSize?: string;
  height?: string;
  fasteners?: string;
  patterns?: string[];
  pattern?: string;
  styles?: string[];
  profiles?: string[];
  diameter?: string;
  coverage?: string;
  poles?: PoleSpec[];
  keySpecs?: string[];
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface Application {
  icon: string;
  name: string;
}

export interface SubProduct {
  id: string;
  name: string;
  shortName: string;
  description: string;
  material: string;
  panelSize?: string;
  coverage?: string;
  boxContents?: string;
  thickness?: string;
  colors: ColorOption[];
  installations: InstallationMethod[];
  specs: SpecItem[];
  applications: string[];
  features: string[];
  warranty: string;
  fireRating?: string;
  waterProof?: boolean;
  imageGallery?: string[];
  badge?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  subProducts: SubProduct[];
  heroImage: string;
  features: string[];
  certifications: string[];
}

export const products: ProductCategory[] = [
  // =====================
  // SYNTHETIC THATCH
  // =====================
  {
    id: "synthetic-thatch",
    name: "Synthetic Thatch",
    tagline: "Nature's beauty, engineered for eternity",
    description:
      "KHW Synthetic Thatch products are molded from high-quality polyethylene in natural palm, reed, and straw textures. They reproduce the rugged charm of natural thatching to the most delicate detail — while delivering decades of maintenance-free performance.",
    icon: "Palmtree",
    heroImage: "/images/thatch/cover-1.png",
    features: [
      "Class A Fire Rated",
      "100% Waterproof",
      "Wind Resistant to 260 km/h",
      "UV Stable — 2000hr TÜV Tested",
      "Zero Maintenance",
      "20-Year Warranty",
      "50+ Year Lifespan",
      "100% Recyclable",
    ],
    certifications: ["TÜV SÜD", "SGS", "INTERTEK", "LEED Certified"],
    subProducts: [
      {
        id: "exotic-palm-thatch",
        name: "Exotic Palm Thatch",
        shortName: "Palm Thatch",
        description:
          "Molded in high-quality polyethylene from palm or nipa leaves, KHW Palm Thatch shingles reproduce the rugged charm of natural palm leaf thatching to the most delicate detail. Available with or without aluminum rails.",
        material: "High-Density Polyethylene (HDPE)",
        panelSize: "1160 × 900mm",
        coverage: "1 pc = 2.3 sqft (4.4 pcs = 1 sqm)",
        boxContents: "60 pcs = 138 sqft ≈ 12.8 sqm per box",
        thickness: "Random cut lengths for natural look",
        colors: [
          {
            name: "Sundried",
            description: "Warm golden-brown tones like sun-bleached palm",
            hex: "#C4933F",
          },
          {
            name: "Aged",
            description: "Deep rich brown with natural weathering",
            hex: "#7B5A2D",
          },
          {
            name: "Weathered",
            description: "Light grey-brown with wind-weathered texture",
            hex: "#9B8B70",
          },
        ],
        installations: [
          {
            type: "Horizontal Battens",
            description:
              "Shingles are installed horizontally on wooden or metal battens, creating a traditional exposed underside ceiling look. The natural leaf texture is visible on the ceiling side — authentic tropical aesthetic.",
            beam: "Min. 100×100mm (4\"×4\")",
            battenSpacing: "220mm (9\")",
            batten: "Min. 50×50mm (2\"×2\")",
            pillar: "Min. 100×100mm (4\"×4\")",
            fasteners: "6 per shingle — 11 gauge (3mm), 25–40mm (1–1.5\") stainless steel nails or screws",
            subDeck: "Not required",
            waterMembrane: "Not required — 100% waterproof on its own",
            notes:
              "Center-to-center batten spacing: 220mm (9\"). Use stainless steel fasteners for longevity. The natural leaf texture pattern is visible on the underside ceiling when installed on open battens — authentic tropical ceiling aesthetic.",
            keySpecs: ["100% Waterproof", "No Sub-Deck Needed", "220mm (9\") Batten Spacing", "6 Fasteners per Shingle", "Stainless Steel"],
          },
          {
            type: "Vertical Rafter",
            description:
              "Installed on vertical rafter systems — works with wood, metal, or bamboo structural frames. Creates the characteristic interior underside look with natural thatch texture visible from inside.",
            beam: "Min. 100×100mm (4\"×4\")",
            rafter: "Rail system — spacing up to 900mm (35\")",
            battenSpacing: "220mm (9\")",
            fasteners: "11 gauge (3mm), 25–40mm (1–1.5\") stainless steel nails or screws",
            pillar: "Min. 100×100mm (4\"×4\")",
            subDeck: "Not required",
            waterMembrane: "Not required",
            notes:
              "Rafter spacing up to 900mm (35\"). Fasten with 11 gauge (3mm), 25–40mm stainless steel nails or screws. This method creates the characteristic interior underside look with natural thatch texture.",
            keySpecs: ["900mm (35\") Rafter Spacing", "4\"×4\" Beam", "6 Fasteners per Shingle", "Interior Underside Look", "Works with Wood/Metal/Bamboo"],
          },
          {
            type: "Plywood Deck / OSB",
            description:
              "Installed directly over plywood or OSB sheathing. A waterproofing membrane is optional but recommended for added weather protection. This method provides a solid, continuous sub-surface for the thatch shingles.",
            subDeck: "Min. 16mm (5/8\") plywood or 12mm (15/32\") OSB",
            waterMembrane: "Optional — recommended for added weather protection",
            battenSpacing: "220mm (9\")",
            fasteners: "6 per shingle — 11 gauge (3mm), 25–40mm (1–1.5\") stainless steel nails or screws",
            notes:
              "Plywood: min. 16mm (5/8\"). OSB: min. 12mm (15/32\"). Apply waterproofing membrane before batten installation for best weather resistance.",
            keySpecs: ["16mm Plywood / 12mm OSB", "Optional Waterproof Membrane", "220mm (9\") Batten Spacing", "6 Fasteners per Shingle"],
          },
          {
            type: "Metal Sheeting",
            description:
              "Installed over metal roofing sheets with horizontal battens secured to the metal structure. Maintains the authentic tropical aesthetic while providing the durability of a metal roof underneath.",
            battenSpacing: "220mm (9\")",
            fasteners: "6 per shingle — 11 gauge (3mm), 25–40mm (1–1.5\") stainless steel nails or screws",
            notes:
              "Batten spacing: 220mm (9\"). Secure battens to metal roof structure with appropriate metal fasteners before installing thatch shingles.",
            keySpecs: ["220mm (9\") Batten Spacing", "6 Fasteners per Shingle", "Metal Roof Underneath", "Stainless Steel Fasteners"],
          },
          {
            type: "Concrete Roofing",
            description:
              "Installed over concrete or cement tile roofing surfaces with horizontal battens. Provides a tropical aesthetic over solid concrete construction.",
            battenSpacing: "220mm (9\")",
            fasteners: "6 per shingle — 11 gauge (3mm), 25–40mm (1–1.5\") stainless steel nails or screws, masonry anchors as required",
            notes:
              "Batten spacing: 220mm (9\"). Use masonry anchors and appropriate concrete fasteners to secure battens to the concrete surface.",
            keySpecs: ["220mm (9\") Batten Spacing", "6 Fasteners per Shingle", "Masonry Anchors", "Concrete/Cement Tile Substrate"],
          },
        ],
        specs: [
          { label: "Material", value: "HDPE (High-Density Polyethylene)" },
          { label: "Panel Size", value: "1160 × 900mm (45.7\" × 35.4\")" },
          { label: "Coverage", value: "1 pc = 2.3 sqft | 4.4 pcs = 1 sqm" },
          { label: "Box Contents", value: "60 pcs | 138 sqft | 12.8 sqm" },
          { label: "Wind Resistance", value: "Up to 260 km/h (ASTM D3161)" },
          { label: "UV Testing", value: "2000 hrs ISO 4892-3 (TÜV SÜD)" },
          { label: "Fire Rating (FR)", value: "Class A (ASTM E108) & Class B1 (GB8624)" },
          { label: "Pest Resistance", value: "ASTM G21-96 (INTERTEK certified)" },
          { label: "Waterproof", value: "100% — No sub-deck required" },
          { label: "Warranty", value: "20 years against rot, decay & fading" },
          { label: "Lifespan", value: "50+ years" },
          { label: "Maintenance", value: "Zero" },
          { label: "Recyclable", value: "100% — LEED Certified" },
        ],
        applications: [
          "Beach resorts & hotels",
          "Tiki bars & restaurants",
          "Beach houses & villas",
          "Gazebos & pergolas",
          "Poolside structures",
          "Theme parks",
          "Farmhouses",
          "Coastal residences",
        ],
        features: [
          "Exposed natural leaf texture on ceiling side",
          "Random-cut shingle lengths for authentic look",
          "Available with or without aluminum rails",
          "No waterproof membrane needed",
          "Class A fire-rated option available",
          "Hurricane wind resistant",
        ],
        warranty: "20 years",
        fireRating: "Class A (with FR treatment)",
        waterProof: true,
        badge: "Most Popular",
      },
      {
        id: "exotic-reed-thatch",
        name: "Exotic Reed Thatch",
        shortName: "Reed Thatch",
        description:
          "Luxurious synthetic reed thatch that excellently reproduces the charm of natural water reed thatching from exotic destinations. Reed strands at varied colors and lengths create a layered, voluminous appearance when installed — with the benefits of modern synthetic materials.",
        material: "High-Density Polyethylene (HDPE)",
        panelSize: "1200 × 430mm",
        coverage: "1 panel covers varies by installation spacing",
        boxContents: "Available in Eave, Starter & Field/Hip-Ridge panels",
        colors: [
          {
            name: "Light Reed",
            description: "Natural light tan reed strands — bright and tropical",
            hex: "#D4B896",
          },
          {
            name: "Dark Reed",
            description: "Deep brown reed strands — rich and rustic",
            hex: "#8B6342",
          },
        ],
        installations: [
          {
            type: "Horizontal Battens",
            description:
              "Standard installation on horizontal batten framework — ideal for gazebos, tiki huts, and garden structures. Consists of three panel types: Eave Panel (bottom edge), Starter Panel (transition), and Field/Hip-Ridge Panel (main field + ridge). Install from bottom to top, overlapping each row.",
            battenSpacing: "14–15cm (6\")",
            subDeck: "Fiber cement board, plywood, or solid substrate recommended",
            waterMembrane:
              "Waterproof membrane / bitumen sheet recommended — reed thatch requires solid substrate unlike palm thatch",
            notes:
              "Consists of three panel types: Eave Panel (bottom edge), Starter Panel (transition), and Field/Hip-Ridge Panel (main field + ridge). Install from bottom to top, overlapping each row.",
            keySpecs: ["3-Panel System", "14–15cm Batten Spacing", "Waterproof Membrane Required", "Solid Sub-Deck Needed"],
          },
          {
            type: "Over Metal Sheets / Corrugated Panels",
            description:
              "Can be installed directly over corrugated metal sheets, fiber cement boards, or puffed panels with appropriate fastening. Suitable for retrofitting over existing structures.",
            battenSpacing: "Per structural requirements",
            subDeck: "Fiber cement board, corrugated metal sheet, puffed sheet, or plywood",
            waterMembrane:
              "Waterproof membrane / bitumen sheet required between structure and thatch",
            notes:
              "Suitable for retrofitting over existing metal or cement roof structures.",
            keySpecs: ["Over Existing Structures", "Bitumen Sheet Required", "Fiber Cement / Metal / Puffed Board"],
          },
        ],
        specs: [
          { label: "Material", value: "HDPE (High-Density Polyethylene)" },
          { label: "Panel Size", value: "1200 × 430mm (47.2\" × 16.9\")" },
          { label: "Panel Types", value: "Eave Panel, Starter Panel, Field/Hip-Ridge Panel" },
          { label: "Appearance", value: "Reed strands at varied colors & lengths" },
          { label: "Wind Resistance", value: "Up to 260 km/h (ASTM D3161)" },
          { label: "UV Testing", value: "2000 hrs ISO 4892-3 (TÜV SÜD)" },
          { label: "Fire Rating (FR)", value: "Class A (ASTM E108) available" },
          { label: "Pest Resistance", value: "100% — insects, rot & mildew proof" },
          { label: "Waterproof", value: "Yes — with proper installation" },
          { label: "Warranty", value: "20 years against rot, decay & fading" },
          { label: "Lifespan", value: "50+ years" },
          { label: "Maintenance", value: "Zero" },
        ],
        applications: [
          "Gazebos",
          "Tiki bars & hut roofs",
          "Garden structures",
          "Beach bars",
          "Ceiling accent walls",
          "Resort roofing",
          "Poolside cabanas",
          "Decorative wall cladding",
        ],
        features: [
          "Layered, voluminous appearance",
          "Three-panel system: Eave → Starter → Field/Ridge",
          "Natural strand variation for authentic look",
          "Suitable for indoor and outdoor use",
          "Class A fire-rated option",
          "Can be used as ceiling accent",
        ],
        warranty: "20 years",
        fireRating: "Class A (with FR treatment)",
        badge: "Versatile",
      },
      {
        id: "exotic-straw-thatch",
        name: "Exotic Straw Thatch",
        shortName: "Straw Thatch",
        description:
          "The Exotic Outdoor Straw Thatch combines traditional Mexican palapas styling with modern durability. Its long-lasting, fire-resistant design needs minimal upkeep, making it an eco-friendly choice that brings classic beauty to any structure without sacrificing performance.",
        material: "High-Density Polyethylene (HDPE)",
        panelSize: "1160 × 900mm",
        coverage: "1 pc = 2.3 sqft (4.4 pcs = 1 sqm)",
        boxContents: "60 pcs = 138 sqft ≈ 12.8 sqm per box",
        colors: [
          {
            name: "Tobacco Brown",
            description: "Rich warm brown with golden highlights — classic Mexican palapas style",
            hex: "#A0673C",
          },
        ],
        installations: [
          {
            type: "Horizontal Battens / Corrugated Roof",
            description:
              "Installed on horizontal battens or directly over corrugated metal sheets, puff panels, fiber cement board, or plywood. Straw thatch requires a solid substrate with waterproofing. Minimum roof pitch: 30°.",
            battenSpacing: "12–15cm (5–6\")",
            subDeck:
              "Fiber cement board, corrugated metal sheet, puffed sheet, or plywood over waterproof membrane",
            waterMembrane:
              "Waterproof membrane / bitumen sheet REQUIRED — essential for straw thatch installations",
            notes:
              "Straw thatch should always be installed over a solid substrate with waterproofing. The structure must have adequate pitch (min. 30°) for water runoff.",
            keySpecs: ["Min. 30° Roof Pitch", "Waterproof Membrane REQUIRED", "Solid Sub-Deck", "12–15cm Batten Spacing"],
          },
        ],
        specs: [
          { label: "Material", value: "HDPE (High-Density Polyethylene)" },
          { label: "Panel Size", value: "1160 × 900mm (45.7\" × 35.4\")" },
          { label: "Coverage", value: "1 pc = 2.3 sqft | 4.4 pcs = 1 sqm" },
          { label: "Box Contents", value: "60 pcs | 138 sqft | 12.8 sqm" },
          { label: "Style", value: "Mexican Palapas / Rain Cape inspired" },
          { label: "Wind Resistance", value: "Up to 260 km/h (ASTM D3161)" },
          { label: "UV Testing", value: "2000 hrs ISO 4892-3 (TÜV SÜD)" },
          { label: "Fire Rating (FR)", value: "Class A (ASTM E108) & Class B1 (GB8624)" },
          { label: "Pest Resistance", value: "100% — insects, rot & mildew proof" },
          { label: "Waterproof", value: "Requires waterproof membrane & solid substrate" },
          { label: "Warranty", value: "20 years against rot, decay & fading" },
          { label: "Lifespan", value: "50+ years" },
          { label: "Maintenance", value: "Zero" },
        ],
        applications: [
          "Mexican palapas",
          "Beach bars & restaurants",
          "Resort structures",
          "Traditional-themed venues",
          "Coastal properties",
          "Tropical landscaping",
          "Poolside cabanas",
          "Coastal homes",
        ],
        features: [
          "Authentic Mexican palapas aesthetic",
          "Rich tobacco brown coloring",
          "Requires waterproof membrane (unlike palm thatch)",
          "Needs solid substrate — fiber cement board or metal sheets",
          "Class A fire-rated option",
          "Min. 30° roof pitch required",
        ],
        warranty: "20 years",
        fireRating: "Class A (with FR treatment)",
        badge: "Traditional Style",
      },
      {
        id: "folding-reed-shingles",
        name: "Folding Reed Shingles",
        shortName: "Folding Shingles",
        description:
          "Folding Reed Shingles are an innovative modular thatch system where each shingle features a pre-scored folding line, allowing it to fold around roof edges, ridges, and corners seamlessly. This creates a fully integrated thatch roof with minimal gaps and maximum weather protection.",
        material: "High-Density Polyethylene (HDPE)",
        panelSize: "1160 × 900mm (with folding line)",
        coverage: "1 pc = 2.3 sqft",
        colors: [
          {
            name: "Natural Reed",
            description: "Light golden reed tones",
            hex: "#D4B896",
          },
        ],
        installations: [
          {
            type: "Modular Folding System",
            description:
              "Each shingle folds along its scored line, allowing it to wrap around structural edges and create a continuous thatch surface without gaps.",
            battenSpacing: "Per manufacturer specification",
            subDeck: "Solid substrate recommended",
            waterMembrane: "Waterproof membrane recommended",
            notes:
              "The folding design eliminates the need for separate hip/ridge pieces. Shingles interlock and fold to cover all roof angles including ridges and hips.",
          },
        ],
        specs: [
          { label: "Material", value: "HDPE (High-Density Polyethylene)" },
          { label: "Panel Size", value: "1160 × 900mm (45.7\" × 35.4\")" },
          { label: "Coverage", value: "1 pc = 2.3 sqft" },
          { label: "Design Feature", value: "Pre-scored folding line for edge wrapping" },
          { label: "Fire Rating", value: "Class A option available" },
          { label: "Waterproof", value: "Enhanced — minimal gaps due to folding design" },
          { label: "Warranty", value: "20 years" },
        ],
        applications: [
          "Roofs with complex angles",
          "Gazebos with hips and ridges",
          "Traditional hut structures",
          "Rounded roof sections",
        ],
        features: [
          "Pre-scored folding line for seamless edge coverage",
          "Eliminates need for separate hip/ridge pieces",
          "Minimal gaps between shingles",
          "Enhanced waterproofing at roof edges",
          "Clean, integrated roof appearance",
        ],
        warranty: "20 years",
      },
    ],
  },

  // =====================
  // BAMBOO PRODUCTS
  // =====================
  {
    id: "bamboo-products",
    name: "Synthetic Bamboo",
    tagline: "Hand-crafted elegance, engineered to last",
    description:
      "KHW Artificial Bamboo products are hand-crafted from high-grade ASA (Acrylonitrile Styrene Acrylate) resins — no PVC. Molds are taken from real natural bamboo to achieve indistinguishable authenticity. Every product is weather-tested for 10,000+ hours, ensuring decades of worry-free beauty.",
    icon: "TreePine",
    heroImage: "/images/bamboo/bamboo-rolls-splash.png",
    features: [
      "ASA Premium Outdoor Material",
      "10,000hr Weather Testing",
      "No PVC — 100% Recyclable",
      "Will Not Split, Peel or Fade",
      "Class A Fire Rating Available",
      "10–20 Year Warranty",
      "Custom Colors Available",
      "Raised Nodes Like Real Bamboo",
    ],
    certifications: ["SGS", "TÜV SÜD", "INTERTEK"],
    subProducts: [
      {
        id: "bamboo-rolls",
        name: "Bamboo Rolls",
        shortName: "Bamboo Rolls",
        description:
          "Thatch-style synthetic bamboo rolls crafted from ASA premium outdoor material. These durable, weather-resistant bamboo strands are bound at the top and bottom with stainless steel wire, creating flexible rolls that drape naturally over any surface. Available in Single Layer and Stacked (Double Layer) configurations.",
        material: "ASA Premium Outdoor (Acrylonitrile Styrene Acrylate) — No PVC",
        colors: [
          {
            name: "Folding",
            description: "Natural golden bamboo tones with light folding marks",
            hex: "#C4933F",
          },
          {
            name: "Standard",
            description: "Uniform medium-toned bamboo appearance",
            hex: "#A67C3D",
          },
          {
            name: "Premium",
            description: "Rich deep brown with refined texture — our finest grade",
            hex: "#7B5A2D",
          },
          {
            name: "Weathered",
            description: "Silver-grey weathered bamboo appearance",
            hex: "#9B8B70",
          },
          {
            name: "Young Bamboo",
            description: "Light green fresh bamboo tones",
            hex: "#8BAF5A",
          },
          {
            name: "Aged",
            description: "Deep brown with aged patina",
            hex: "#6B4423",
          },
        ],
        installations: [
          {
            type: "Single Layer Rolls",
            description:
              "Flexible single-layer bamboo rolls — each bamboo strand is individually wrapped and bound with stainless steel wire at top and bottom. Rolls unfold and drape over structures. Best for: Standard decorative applications, lightweight installations.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            height: "15mm (0.6\") avg | 50mm (2.0\") when rolled",
            fasteners: "Stainless steel wire binding at top and bottom",
            notes:
              "Single layer = one row of bamboo poles. Use for: Pergola ceilings, fence tops, decorative overlays.",
            keySpecs: ["333 × 1800mm Panel", "15mm Strand Height", "50mm Rolled Height", "Stainless Wire Binding"],
          },
          {
            type: "Stacked (Double Layer) Rolls",
            description:
              "Two rows of bamboo poles stacked together — creating double the fullness and visual depth of single layer rolls. Best for: Premium applications where visual richness is important.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            height: "20mm (0.8\") avg | 45mm (1.8\") when rolled",
            fasteners: "Stainless steel wire binding at top and bottom",
            notes:
              "Double layer = two rows of bamboo poles. Use for: Feature walls, pool fences, resort installations.",
            keySpecs: ["333 × 1800mm Panel", "20mm Strand Height", "45mm Rolled Height", "Double Layer Fullness"],
          },
          {
            type: "Stacked Reed + Indoor Rolls",
            description:
              "Smaller format rolls designed for indoor applications and decorative uses. Single bamboo strand layer on rolls.",
            panelSize: "200 × 1200mm (0.7' × 4')",
            height: "15mm (0.6\") avg | 35mm (1.4\") when rolled",
            fasteners: "Stainless steel wire binding",
            notes:
              "Indoor/reed variant with compact dimensions. Use for: Indoor accent walls, ceiling panels, craft applications.",
            keySpecs: ["200 × 1200mm Compact Size", "15mm Strand Height", "35mm Rolled Height", "Indoor Applications"],
          },
        ],
        specs: [
          { label: "Material", value: "ASA Premium Outdoor — No PVC, 100% Recyclable" },
          { label: "Single Layer Bamboo Roll", value: "333 × 1800mm (1.1' × 6') | Height: 15mm avg (0.6\")" },
          { label: "Single Layer Avg Coverage", value: "Avg. height 50mm (2.0\") when rolled" },
          { label: "Stacked Roll", value: "333 × 1800mm (1.1' × 6') | Height: 20mm (0.8\")" },
          { label: "Stacked Avg Coverage", value: "Avg. height 45mm (1.8\") when rolled" },
          { label: "Stacked Reed + Indoor", value: "200 × 1200mm (0.7' × 4') | Height: 15mm (0.6\") | Avg: 35mm (1.4\")" },
          { label: "Bamboo Pole Sizes", value: "38–89mm OD (Outer Diameter)" },
          { label: "Color Options", value: "6 colors: Folding, Standard, Premium, Weathered, Young, Aged" },
          { label: "UV Resistance", value: "10,000 hrs accelerated weathering (highest grade)" },
          { label: "Fire Rating", value: "Class A fire-resistant model available (ASTM E84)" },
          { label: "Warranty", value: "10 years against rot, decay & fading" },
          { label: "Maintenance", value: "Zero" },
        ],
        applications: [
          "Fence tops & railings",
          "Pergola ceiling & beam covers",
          "Feature walls",
          "Pool area fencing",
          "Resort & hotel decor",
          "Bamboo gazebo interiors",
          "Deck railings",
          "Decorative ceiling panels",
        ],
        features: [
          "Bound with stainless steel wire — rust-free",
          "Flexible rolls for easy installation on curves",
          "Single and double layer options",
          "6 color options including natural and aged tones",
          "Will not split, peel, or fade",
          "Class A fire-rated model available",
        ],
        warranty: "10 years",
        fireRating: "Class A (with FR treatment, ASTM E84)",
        badge: "Best Seller",
      },
      {
        id: "bamboo-poles",
        name: "Bamboo Poles",
        shortName: "Bamboo Poles",
        description:
          "Highly realistic synthetic bamboo poles molded from natural bamboo with authentic raised nodes. Hand-painted with weathering textures for indistinguishable authenticity. Suitable for decorative and semi-structural applications. Can be reinforced with metal rods for full structural use.",
        material: "ASA Premium Outdoor (Acrylonitrile Styrene Acrylate) — No PVC",
        colors: [
          {
            name: "Young Bamboo",
            description: "Light green — fresh young bamboo",
            hex: "#8BAF5A",
          },
          {
            name: "Sundried",
            description: "Golden tan — sun-bleached bamboo poles",
            hex: "#C4933F",
          },
          {
            name: "Aged",
            description: "Rich deep brown — aged bamboo with patina",
            hex: "#7B5A2D",
          },
          {
            name: "Brown",
            description: "Solid brown bamboo poles",
            hex: "#8B6342",
          },
          {
            name: "Green",
            description: "Classic green bamboo color",
            hex: "#6B8E4E",
          },
          {
            name: "Olive",
            description: "Olive-green bamboo tone",
            hex: "#808A4E",
          },
          {
            name: "Blue",
            description: "Designer blue bamboo — custom projects",
            hex: "#4A6B8A",
          },
          {
            name: "Black",
            description: "Modern black bamboo — contemporary spaces",
            hex: "#3A3530",
          },
        ],
        installations: [
          {
            type: "Decorative Installation",
            description:
              "Poles are installed as exposed decorative elements — columns, balustrades, fence posts, or accent pieces. Simply cut to length and mount using standard hardware. End caps available to conceal threads.",
            poles: [
              { od: "25mm", id: "19mm", thickness: "3mm", length: "1000mm" },
              { od: "35mm", id: "25mm", thickness: "5mm", length: "1000mm" },
              { od: "45mm", id: "35mm", thickness: "5mm", length: "1000mm" },
              { od: "55mm", id: "43mm", thickness: "6mm", length: "1000mm" },
              { od: "75mm", id: "61mm", thickness: "7mm", length: "1000mm" },
              { od: "95mm", id: "83mm", thickness: "6mm", length: "1000mm" },
            ],
            notes:
              "Can be used as: Exposed columns, fence posts, pergola supports, decorative beams, electrical conduit covers. End caps available to conceal threads.",
            keySpecs: ["6 Diameter Options (25–95mm)", "Hollow Center Design", "End Caps Available", "Cut to Any Length"],
          },
          {
            type: "Extended Length Poles (508mm)",
            description:
              "Longer format bamboo poles for extended applications and structural use. Same ASA Premium quality in extended lengths.",
            poles: [
              { od: "60mm", id: "40mm", thickness: "10mm", length: "508mm" },
              { od: "70mm", id: "50mm", thickness: "10mm", length: "508mm" },
            ],
            notes:
              "Extended poles for large-span applications, pergola beams, and structural supports. Metal rod reinforcement available for load-bearing use.",
            keySpecs: ["60mm & 70mm OD Options", "508mm Extended Length", "10mm Wall Thickness", "Structural Applications"],
          },
          {
            type: "Structural with Metal Reinforcement",
            description:
              "For structural applications, poles can be reinforced with internal metal rods (rebar or steel tube) inserted through the hollow center. Transforms decorative poles into genuine structural elements.",
            notes:
              "Structural applications: Primary columns, load-bearing supports, heavy-use areas. Metal rod reinforcement transforms decorative poles into genuine structural elements.",
            keySpecs: ["Metal Rod Reinforcement", "Load-Bearing Capacity", "Hollow Center for Rebar", "Primary Structural Columns"],
          },
          {
            type: "Column Sleeving",
            description:
              "Synthetic bamboo poles can be used to sleeve over existing concrete or steel columns for instant tropical transformation. Simply slide over existing columns.",
            notes:
              "Ideal for renovating brutalist concrete structures. Available in multiple diameters to fit different column sizes.",
            keySpecs: ["Instant Tropical Transform", "Slide Over Existing Columns", "Multiple Diameter Options", "No Structural Work Needed"],
          },
        ],
        specs: [
          { label: "Material", value: "ASA Premium Outdoor — No PVC, 100% Recyclable" },
          { label: "Available Diameters", value: "25mm, 35mm, 45mm, 55mm, 75mm, 95mm" },
          { label: "Length", value: "Standard lengths available; cut to size as needed" },
          { label: "Node Detail", value: "Raised nodes — authentic like natural bamboo" },
          { label: "Wall Thickness", value: "Varies by diameter (see size chart)" },
          { label: "Inner Diameter", value: "Hollow center — can accommodate metal rod reinforcement" },
          { label: "End Caps", value: "Available — conceal threads and keep elements out" },
          { label: "UV Resistance", value: "10,000 hrs accelerated weathering (highest grade)" },
          { label: "Fire Rating", value: "Class A fire-resistant model available (ASTM E84)" },
          { label: "Weather Testing", value: "10,000 hrs — highest color-fastness grade" },
          { label: "Warranty", value: "10 years against rot, decay & fading" },
          { label: "Maintenance", value: "Zero" },
          { label: "Custom Colors", value: "Available for bulk orders" },
        ],
        applications: [
          "Decorative columns & balustrades",
          "Fence posts",
          "Pergola supports & beams",
          "Electrical conduit covering",
          "Concrete column sleeving",
          "Waterpark decor (can be submerged)",
          "Structural columns (with metal rod)",
          "Tiki bar construction",
        ],
        features: [
          "Raised nodes like real bamboo",
          "8 color options including custom colors",
          "6 diameter sizes (25mm–95mm)",
          "Can be reinforced with metal rods",
          "End caps available",
          "Can be submerged in water (waterparks)",
          "Class A fire-rated option",
        ],
        warranty: "10 years",
        fireRating: "Class A (with FR treatment, ASTM E84)",
      },
      {
        id: "bamboo-mats",
        name: "Bamboo Mats",
        shortName: "Bamboo Mats",
        description:
          "Hand-woven decorative bamboo mats crafted from all-weather synthetic rattan by skilled artisans. Each mat replicates the traditional bamboo weave pattern with the durability of modern synthetic materials. Available in three distinct weave patterns and three rich wood-tone colors.",
        material: "All-Weather Synthetic Rattan (HDPE-based) — PVC-Free, Non-Toxic",
        colors: [
          {
            name: "Teak",
            description: "Rich warm teak wood tones",
            hex: "#A67C3D",
          },
          {
            name: "Walnut",
            description: "Deep dark walnut brown",
            hex: "#5C3D2E",
          },
          {
            name: "Carbonized",
            description: "Dark carbonized bamboo tones",
            hex: "#6B4423",
          },
        ],
        installations: [
          {
            type: "Wall Covering",
            description:
              "Mats are mounted directly onto wall surfaces using adhesive, screws, or a track system. Creates an instant tropical accent wall. Best for: Living rooms, hotel lobbies, restaurants, resorts.",
            panelSize: "4ft × 8ft (1.2m × 2.4m) | 1 roll = 30 sq ft (2.88 sqm)",
            patterns: ["Tight Weave", "Open Weave", "Herringbone"],
            notes: "Best for: Living rooms, hotel lobbies, restaurants, resorts. Lightweight and easy to handle. Can be cut to fit around outlets and fixtures.",
            keySpecs: ["4ft × 8ft (1.2 × 2.4m)", "30 sq ft per roll", "3 Weave Patterns", "Cut to Fit"],
          },
          {
            type: "Ceiling Covering",
            description:
              "Bamboo mats can be installed on ceiling surfaces for an exotic overhead aesthetic — popular in tiki bars, resorts, and tropical restaurants. Adds acoustic properties along with visual appeal.",
            panelSize: "4ft × 8ft (1.2m × 2.4m) | 1 roll = 30 sq ft (2.88 sqm)",
            patterns: ["Tight Weave", "Open Weave", "Herringbone"],
            notes:
              "Use appropriate ceiling-grade adhesive or track mounting. Mats add acoustic properties in addition to their visual appeal.",
            keySpecs: ["Ceiling Application", "Acoustic Properties", "3 Weave Patterns", "Tropical Aesthetic"],
          },
          {
            type: "Fence & Gate Panels",
            description:
              "Woven bamboo mats can be framed and used as infill panels for fences, gates, and screening applications. Creates natural-looking privacy screens.",
            panelSize: "4ft × 8ft (1.2m × 2.4m)",
            notes: "Frame with timber or metal for structural support. Creates natural-looking privacy screens.",
            keySpecs: ["Framed Fence Panels", "Privacy Screening", "4ft × 8ft Size", "Natural-Looking"],
          },
        ],
        specs: [
          { label: "Material", value: "All-Weather Synthetic Rattan — HDPE-based, PVC-Free" },
          { label: "Standard Size", value: "8ft × 4ft (2.4m × 1.2m)" },
          { label: "Roll Size", value: "4ft × 8ft (1.2m × 2.4m) | 30 sq ft per roll" },
          { label: "Weave Patterns", value: "3 patterns available" },
          { label: "Colors", value: "Teak, Walnut, Carbonized" },
          { label: "Fire Rating", value: "Class A fire retardant version available (ASTM E84)" },
          { label: "Weather Resistance", value: "All-weather — suitable for covered outdoor areas" },
          { label: "Warranty", value: "10 years against rot, decay & fading" },
          { label: "Maintenance", value: "Easy clean — hose down or wipe" },
          { label: "Custom Colors", value: "Available for commercial projects" },
        ],
        applications: [
          "Accent walls",
          "Ceiling panels",
          "Fence infill panels",
          "Gate inserts",
          "Tiki bar interiors",
          "Hotel & resort lobbies",
          "Restaurant decor",
          "Privacy screens",
        ],
        features: [
          "Hand-woven by skilled artisans",
          "3 weave pattern options",
          "3 wood-tone color options",
          "Standard 8×4 ft size",
          "Class A fire-rated model available",
          "Suitable for wall AND ceiling use",
          "Custom colors for commercial projects",
        ],
        warranty: "10 years",
        fireRating: "Class A (with FR treatment, ASTM E84)",
      },
      {
        id: "bamboo-panels",
        name: "Bamboo Panels",
        shortName: "Bamboo Panels",
        description:
          "Decorative synthetic bamboo wall and ceiling panels that simulate the natural bamboo appearance with stunning three-dimensional depth. Available in slat and round profiles. Premium ASA material ensures these panels withstand outdoor conditions while maintaining their beauty for decades.",
        material: "ASA Premium Outdoor (Acrylonitrile Styrene Acrylate) — No PVC",
        colors: [
          {
            name: "Sundried Slat",
            description: "Golden slat profile in sun-dried tones",
            hex: "#C4933F",
          },
          {
            name: "Sesame Slat",
            description: "Warm sesame-brown slat profile",
            hex: "#A67C3D",
          },
          {
            name: "Invecchiato (Aged) Slat",
            description: "Aged brown slat with weathered texture",
            hex: "#7B5A2D",
          },
          {
            name: "Sundried Round",
            description: "Round profile in golden sun-dried tone",
            hex: "#C4933F",
          },
          {
            name: "Sesame Round",
            description: "Round profile in warm sesame tone",
            hex: "#A67C3D",
          },
        ],
        installations: [
          {
            type: "Wall Cladding",
            description:
              "Panels are installed on wall surfaces using a track or batten system. Slats/cylinders are mounted on backing rails, creating a seamless bamboo wall effect. Slat and round profiles create different aesthetics.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            profiles: ["Slat (flat)", "Round (cylindrical)", "Half-Round Φ50", "Half-Round Φ75"],
            notes: "Slat and round profiles create different aesthetics. Slat = flat bamboo slat appearance. Round = cylindrical bamboo look.",
            keySpecs: ["333 × 1800mm Panel", "Slat & Round Profiles", "Half-Round Options", "Wall + Ceiling Use"],
          },
          {
            type: "Ceiling Installation",
            description:
              "Bamboo panels can be installed on ceiling surfaces for an exotic overhead look — perfect for restaurants, resorts, and themed spaces. Use ceiling-grade mounting hardware.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            profiles: ["Slat (flat)", "Round (cylindrical)", "Half-Round Φ50", "Half-Round Φ75"],
            notes: "Use ceiling-grade mounting hardware. Panels add visual depth and tropical character to any space.",
            keySpecs: ["Ceiling Application", "ASA Premium Material", "Outdoor Rated", "Tropical Overhead Look"],
          },
          {
            type: "Soffit & Facade",
            description:
              "Panels are suitable for exterior soffit and facade applications where authentic bamboo appearance is desired with superior weather performance. ASA Premium material handles outdoor exposure beautifully.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            notes: "ASA Premium material handles outdoor exposure beautifully. Fade-resistant and weatherproof.",
            keySpecs: ["Exterior Soffit", "Facade Application", "ASA Premium", "10,000hr UV Tested"],
          },
        ],
        specs: [
          { label: "Material", value: "ASA Premium Outdoor — No PVC, 100% Recyclable" },
          { label: "Profiles Available", value: "Slat (flat), Round (cylindrical)" },
          { label: "Panel Dimensions", value: "333 × 1800mm (1.1' × 6')" },
          { label: "Bamboo Pole Options", value: "Slat, Round, Pole Half-Round φ50, Pole Half-Round φ75" },
          { label: "UV Resistance", value: "10,000 hrs — highest grade color-fastness" },
          { label: "Split/Crack Resistance", value: "Yes — will not split, peel, or fade" },
          { label: "Warranty", value: "10 years (ASA Premium Outdoor)" },
          { label: "Maintenance", value: "Zero" },
        ],
        applications: [
          "Feature walls",
          "Ceiling panels",
          "Exterior soffits",
          "Storefront facades",
          "Resort interiors",
          "Backyard renovations",
          "Restaurant decor",
          "Bamboo room dividers",
        ],
        features: [
          "Slat AND round profile options",
          "ASA Premium material for outdoor use",
          "Multiple color options per profile",
          "Half-round pole options (φ50, φ75)",
          "Will not crack or peel",
          "Suitable for exterior applications",
        ],
        warranty: "10 years",
      },
      {
        id: "bamboo-fences",
        name: "Bamboo Fences",
        shortName: "Bamboo Fences",
        description:
          "KHW Synthetic Bamboo Fences perfectly reproduce the natural allure of authentic Japanese bamboo fencing without the natural problems. Available in four distinct Japanese-inspired styles, each replicating a different traditional bamboo fence aesthetic. Built to withstand harsh climate, pest damage, and wear for decades.",
        material: "High-Performing Synthetic Resins — No PVC",
        colors: [
          {
            name: "Natural Bamboo",
            description: "Golden natural bamboo tones",
            hex: "#C4933F",
          },
        ],
        installations: [
          {
            type: "Privacy Fence",
            description:
              "Fence panels are installed between posts using rail brackets or by direct mounting. Panels interlock to create seamless continuous fence lines. Multiple styles available — all naturally opaque with no gaps between slats.",
            styles: ["Kenneji Gaki", "Katsura Gaki", "Tokusa Gaki", "Misu Gaki"],
            notes: "Multiple styles available for different aesthetic levels of privacy. All styles are naturally opaque — no gaps between slats.",
            keySpecs: ["4 Japanese Styles", "No Gaps — Full Privacy", "Rail Bracket Mounting", "Weather Tested 10,000hr"],
          },
          {
            type: "Decorative Screen",
            description:
              "Smaller fence panels can be used as decorative screens in gardens, around pools, or as feature elements within a larger landscape design. Lightweight and easy to position.",
            styles: ["Kenneji Gaki", "Katsura Gaki", "Tokusa Gaki", "Misu Gaki"],
            notes: "Lightweight panels are easy to handle and position. Can be mounted on existing walls or freestanding with metal posts.",
            keySpecs: ["Garden & Pool Screens", "Mount on Walls or Posts", "4 Design Styles", "Instant Tropical Look"],
          },
        ],
        specs: [
          { label: "Material", value: "High-performing synthetic resins — No PVC" },
          { label: "Styles", value: "4 Japanese-inspired designs" },
          { label: "Width Options", value: "4ft, 6ft, 8ft width configurations" },
          { label: "Weather Testing", value: "10,000 hrs accelerated weathering" },
          { label: "Color Fastness", value: "Highest grade — will not fade" },
          { label: "Split/Crack Resistance", value: "Yes" },
          { label: "Mold/Insect/Rot", value: "100% proof" },
          { label: "Warranty", value: "20 years against rot, decay & fading" },
          { label: "Maintenance", value: "Zero" },
          { label: "Recyclable", value: "100%" },
        ],
        applications: [
          "Garden fences",
          "Pool area privacy screens",
          "Resort perimeter fencing",
          "Tropical property boundaries",
          "Decorative garden screens",
          "Terrace dividers",
          "Beach property fencing",
          "Tiki bar enclosures",
        ],
        features: [
          "4 Japanese-inspired traditional styles",
          "Kenneji Gaki — arrayed erratic bamboo slat pattern",
          "Katsura Gaki — varied bamboo slats with split cane supports",
          "Tokusa Gaki — irregular bamboo layout (Japanese grass inspired)",
          "Misu Gaki — dignified privacy screen (noble's garden style)",
          "No gaps — complete privacy",
          "20-year warranty",
        ],
        warranty: "20 years",
        badge: "Premium",
      },
      {
        id: "bamboo-upsidedown-mat",
        name: "Thatch Upside Mat",
        shortName: "Upside Mat",
        description:
          "High-density synthetic bamboo poles mounted upside-down on rolls, creating a unique textured surface. The exposed underside of the bamboo creates a distinctive natural pattern — perfect for ceiling applications, accent walls, and feature surfaces where an organic texture is desired.",
        material: "ASA Premium Outdoor (Acrylonitrile Styrene Acrylate) — No PVC",
        colors: [
          {
            name: "Natural",
            description: "Golden natural bamboo tones",
            hex: "#C4933F",
          },
        ],
        installations: [
          {
            type: "Ceiling Installation (Upside-Down)",
            description:
              "Installed upside-down on ceiling surfaces — the exposed bamboo pole ends create a unique organic texture visible from below. Creates an extraordinary natural ceiling texture. Each bamboo pole end is visible, creating a hand-crafted appearance.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            pattern: "Upside-Down Pole Mount — exposed pole ends",
            notes:
              "Ideal for resort lobbies, tiki bars, and tropical restaurants.",
            keySpecs: ["Exposed Pole Ends", "Organic Ceiling Texture", "Hand-Crafted Appearance", "ASA Premium Material"],
          },
          {
            type: "Feature Wall (Upside-Down)",
            description:
              "Can be installed on walls upside-down to create a textured accent surface with exposed bamboo pole ends. Popular for creating feature walls in hospitality venues.",
            panelSize: "333 × 1800mm (1.1' × 6')",
            pattern: "Upside-Down Pole Mount — exposed pole ends",
            notes: "Popular for creating feature walls in hospitality venues.",
            keySpecs: ["Textured Feature Wall", "Exposed Pole Ends", "Hospitality Venues", "ASA Premium Material"],
          },
        ],
        specs: [
          { label: "Material", value: "ASA Premium Outdoor — No PVC" },
          { label: "Design", value: "Bamboo poles mounted on rolls — installed upside-down" },
          { label: "Effect", value: "Exposed pole ends create organic textured surface" },
          { label: "UV Resistance", value: "10,000 hrs accelerated weathering" },
          { label: "Warranty", value: "10 years" },
        ],
        applications: [
          "Ceiling accent",
          "Feature walls",
          "Resort interiors",
          "Tiki bar ceilings",
          "Tropical restaurant decor",
          "Hotel lobbies",
        ],
        features: [
          "Unique exposed-end bamboo texture",
          "Creates hand-crafted organic look",
          "ASA Premium material",
          "Perfect for ceiling applications",
          "10-year warranty",
        ],
        warranty: "10 years",
      },
    ],
  },
];

export const sharedFeatures = [
  {
    icon: "Flame",
    label: "Fire Rated",
    description: "Class A & B fire-rated options available",
  },
  {
    icon: "CloudRain",
    label: "Waterproof",
    description: "100% waterproof without membrane (Palm Thatch)",
  },
  {
    icon: "Wind",
    label: "Wind Resistant",
    description: "Up to 260 km/h — hurricane rated",
  },
  {
    icon: "Sun",
    label: "UV Stable",
    description: "2000–10000hr weather tested",
  },
  {
    icon: "Bug",
    label: "Pest Proof",
    description: "Insects, rot & mildew resistant",
  },
  {
    icon: "Wrench",
    label: "Zero Maintenance",
    description: "Never needs painting, sealing, or repair",
  },
  {
    icon: "Recycle",
    label: "Eco-Friendly",
    description: "100% recyclable, no PVC in bamboo",
  },
  {
    icon: "Shield",
    label: "20-Year Warranty",
    description: "Against rot, decay & color fading",
  },
];

export const companyInfo = {
  name: "KHW Solutions Pvt. Ltd.",
  tagline: "Synthetic Thatch | Bamboo | Fencing Solutions",
  address:
    "401/A, 1st Floor, 5th A Main, 2nd Block, HRBR Layout, Kalyan Nagar, Bangalore KA 560043",
  phones: ["+91-9148584281", "+91-7483460820"],
  email: "info@khwsolutions.com",
  websites: ["syntheticthatch.in", "khwsolutions.com"],
  hours: "09:00 AM – 06:00 PM",
  certifications: ["TÜV SÜD", "SGS", "INTERTEK", "LEED Certified"],
};
