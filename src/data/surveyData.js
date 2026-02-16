// Consumer Subsector Data organized by category
// 99 subsectors across 13 categories

export const subsectorCategories = [
  {
    id: 'food-bev',
    name: 'Food & Beverage',
    color: '#c0392b',
    subsectors: [
      { code: 'F1', name: 'Branded Packaged Food', description: 'Branded shelf-stable, refrigerated, or frozen packaged food products; center-aisle and mass-channel consumer brands' },
      { code: 'F2', name: 'Dairy', description: 'Milk, cultured dairy, cheese, creamers, ice cream; mix of refrigerated and frozen; includes processors and manufacturers' },
      { code: 'F3', name: 'Bakery', description: 'Fresh, frozen, and shelf-stable baked goods; breads, buns, pastries, sweet goods; includes branded, in-store bakery, and private label' },
      { code: 'F4', name: 'BFY/Natural/Specialty', description: 'Better-for-you, clean label, natural, and specialty food brands; premium positioning with modern flavor profiles; natural channel + omni-channel' },
      { code: 'F5', name: 'Ingredients/Flavors', description: 'Flavor houses, extracts, functional ingredients, proteins, enzymes, botanicals; technical + R&D-led B2B suppliers to food manufacturers' },
      { code: 'F6', name: 'Beverages (Non Alcoholic)', description: 'RTD beverages, juices, teas, coffees, functional beverages, hydration drinks, energy alternatives; branded non-alcoholic beverage products' },
      { code: 'F7', name: 'Contract Manufacturing/Private Label', description: 'Co-manufacturers and private label producers for food and beverage; turnkey production, packaging, and formulation services' },
      { code: 'F8', name: 'Distribution/Supply Chain', description: 'Food distribution, specialty distributors, cold-chain logistics, foodservice ingredient suppliers, institutional and retail supply chain' },
      { code: 'F9', name: 'Agribusiness', description: 'Agricultural production, processing, and supply; farm-to-manufacturer inputs, commodities, and ag-tech services' },
    ]
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Foodservice',
    color: '#e74c3c',
    subsectors: [
      { code: 'R1', name: 'Multi-Unit Franchisee Platforms - QSR', description: 'Ownership of 10+ QSR franchise locations (e.g., quick service, fast casual) with strong unit economics and operational discipline' },
      { code: 'R2', name: 'Multi-Unit Franchisee Platforms - Casual Dining', description: 'Ownership of 10+ casual dining franchise locations with proven category and management' },
      { code: 'R3', name: 'Corporate Restaurants - Fast Casual / QSR', description: 'Company-owned restaurant concepts (not franchised); fast casual or QSR format with replicable model' },
      { code: 'R4', name: 'Corporate Restaurants - Casual Dining', description: 'Company-owned casual dining concepts with brand equity and unit-level profitability' },
      { code: 'R5', name: 'Specialty Beverage Concepts', description: 'Coffee shops, juice bars, smoothie concepts, bubble tea; franchised or corporate' },
    ]
  },
  {
    id: 'franchisors',
    name: 'Multi-Unit Franchisors',
    color: '#e67e22',
    subsectors: [
      { code: 'MF1', name: 'Franchisor - QSR / Fast Casual', description: 'Franchise systems in food service; focus on emerging or growth-stage brands' },
      { code: 'MF2', name: 'Franchisor - Services (Home, Personal, B2B)', description: 'Franchise systems in services: home services, personal care, business services, automotive' },
      { code: 'MF3', name: 'Franchisor - Fitness / Wellness', description: 'Boutique fitness, wellness centers, recovery studios' },
      { code: 'MF4', name: 'Franchisor - Education / Enrichment', description: "Children's education, tutoring, STEM, enrichment programs" },
    ]
  },
  {
    id: 'health-wellness',
    name: 'Health, Wellness & Personal Care Services',
    color: '#9b59b6',
    subsectors: [
      { code: 'H1', name: 'Med Spa / Aesthetics - Multi-Unit Platforms', description: 'Medical spas, laser hair removal, injectables, skin treatments; 3+ locations with operational systems' },
      { code: 'H2', name: 'Beauty Services - Salons, Lash/Brow, Nails', description: 'Multi-unit beauty service platforms: hair salons, lash/brow studios, nail salons' },
      { code: 'H3', name: 'Fitness - Boutique Studios', description: 'Boutique fitness concepts: cycling, Pilates, barre, HIIT, yoga; 3+ locations' },
      { code: 'H4', name: 'Wellness & Recovery Services', description: 'Massage, chiropractic, physical therapy, cryotherapy, IV therapy, recovery studios; multi-unit platforms' },
      { code: 'H5', name: 'Weight Management / Nutrition Services', description: 'Clinical weight loss, nutrition counseling, meal planning services' },
    ]
  },
  {
    id: 'home-services',
    name: 'Home & Residential Services',
    color: '#27ae60',
    subsectors: [
      { code: 'HS1', name: 'Home Services - HVAC', description: 'Residential HVAC installation, maintenance, and repair; recurring service agreements' },
      { code: 'HS2', name: 'Home Services - Plumbing', description: 'Residential plumbing installation, maintenance, and repair; emergency and scheduled services' },
      { code: 'HS3', name: 'Home Services - Electrical', description: 'Residential electrical services; installation, maintenance, repair, emergency services' },
      { code: 'HS4', name: 'Home Services - Multi-Trade Platforms', description: 'Platforms offering 2+ trade services (e.g., HVAC + plumbing, or plumbing + electrical)' },
      { code: 'HS5', name: 'Pest Control', description: 'Residential and light commercial pest control; recurring service contracts' },
      { code: 'HS6', name: 'Landscaping & Lawn Care', description: 'Commercial and residential landscaping; maintenance contracts and project work' },
      { code: 'HS7', name: 'Cleaning Services - Residential', description: 'Recurring residential cleaning; maid services; multi-unit or route-based' },
      { code: 'HS8', name: 'Cleaning Services - Commercial', description: 'Janitorial and facilities maintenance for commercial properties; contract-based' },
      { code: 'HS9', name: 'Home Improvement - Remodeling & Restoration', description: 'Kitchen/bath remodeling, flooring, painting, restoration services (water, fire, mold)' },
      { code: 'HS10', name: 'Window Cleaning / Pressure Washing', description: 'Residential and commercial window cleaning, pressure washing, exterior maintenance' },
    ]
  },
  {
    id: 'auto',
    name: 'Auto Aftermarket & Services',
    color: '#2980b9',
    subsectors: [
      { code: 'A1', name: 'Auto Aftermarket - Retail & Performance Parts', description: 'Aftermarket auto parts and accessories for performance, customization, off-road, motorsports' },
      { code: 'A2', name: 'Auto Services - Multi-Unit Repair & Maintenance', description: 'Oil change, brakes, tires, general repair; multi-unit service center platforms' },
      { code: 'A3', name: 'Auto Services - Collision Repair', description: 'Auto body shops and collision repair centers; multi-unit platforms' },
      { code: 'A4', name: 'Auto Services - Car Wash', description: 'Express tunnel car washes; multi-unit platforms with membership models' },
      { code: 'A5', name: 'Auto Services - Specialty (Detailing, Glass, etc.)', description: 'Windshield repair/replacement, detailing, paint protection, specialized services' },
    ]
  },
  {
    id: 'pet',
    name: 'Pet Products & Services',
    color: '#f39c12',
    subsectors: [
      { code: 'P1', name: 'Pet Services - Grooming', description: 'Multi-unit pet grooming salons or mobile grooming platforms' },
      { code: 'P2', name: 'Pet Services - Daycare & Boarding', description: 'Pet resorts, daycare, boarding facilities; multi-unit platforms' },
      { code: 'P3', name: 'Pet Services - Training', description: 'Pet training services; obedience, behavior modification, puppy training' },
      { code: 'P4', name: 'Pet Services - Veterinary', description: 'Veterinary clinics; general practice or specialty (dental, urgent care)' },
      { code: 'P5', name: 'Pet Retail - Specialty', description: 'Pet supply stores focused on premium/natural products; multi-unit retail' },
      { code: 'P6', name: 'Pet Products - Consumables (Branded)', description: 'Branded pet food, treats, supplements; DTC or wholesale' },
    ]
  },
  {
    id: 'personal-services',
    name: 'Personal Services & Lifestyle',
    color: '#e91e63',
    subsectors: [
      { code: 'PS1', name: 'Salons & Barbershops', description: 'Multi-unit hair salon or barbershop platforms' },
      { code: 'PS2', name: 'Dry Cleaning & Laundry Services', description: 'Traditional dry cleaning, laundry, alterations; multi-unit or route-based' },
      { code: 'PS3', name: 'Senior Care & Concierge Services', description: 'Non-medical senior care, companion services, concierge/errand services' },
      { code: 'PS4', name: 'Youth Sports & Activities', description: 'Sports tournaments, leagues, camps, showcases; participation-based recurring revenue' },
      { code: 'PS5', name: 'Education & Tutoring - Supplemental', description: 'Tutoring centers, test prep, after-school enrichment, STEM programs' },
      { code: 'PS6', name: 'Childcare & Early Education', description: 'Daycare centers, preschools, early childhood education; multi-unit platforms' },
    ]
  },
  {
    id: 'cp-household',
    name: 'Consumer Products - Household & Personal Care',
    color: '#00bcd4',
    subsectors: [
      { code: 'CP1', name: 'Household Products - Cleaning & Paper', description: 'Branded cleaning products, paper goods, household consumables (not services)' },
      { code: 'CP2', name: 'Beauty & Personal Care - Branded Products', description: 'Skincare, cosmetics, hair care, grooming products; DTC and/or wholesale' },
      { code: 'CP3', name: 'Health & Wellness Products - VMS', description: 'Vitamins, minerals, supplements; sports nutrition, functional wellness' },
    ]
  },
  {
    id: 'cp-other',
    name: 'Consumer Products - Other Categories',
    color: '#795548',
    subsectors: [
      { code: 'CP4', name: 'Apparel & Footwear - Branded', description: 'Fashion brands, footwear, athleisure, outdoor/performance wear (excludes pure manufacturing)' },
      { code: 'CP5', name: 'Home Goods & Decor', description: 'Furniture, home decor, kitchenware, cookware, home textiles (branded products)' },
      { code: 'CP6', name: 'Outdoor & Recreation Products', description: 'Outdoor gear, camping equipment, sporting goods, recreation products' },
      { code: 'CP7', name: 'Toys & Games', description: 'Toy companies, board games, educational toys, hobby products' },
    ]
  },
  {
    id: 'quasi-consumer',
    name: 'Quasi-Consumer & Manufacturing',
    color: '#607d8b',
    subsectors: [
      { code: 'QC1', name: 'Interior Finishes & Surfaces', description: 'Wallcoverings, acoustic panels, decorative surfaces, window treatments sold to architects/designers for commercial and hospitality projects' },
      { code: 'QC2', name: 'Commercial Furniture & Fixtures', description: 'Modular interior systems, retail fixtures, restaurant/hospitality furniture, office furniture sold to commercial clients' },
      { code: 'QC3', name: 'Automotive Components (OEM)', description: 'Components sold to automotive OEMs (seats, interior trim, electronics, safety systems) where consumer preferences drive specifications' },
      { code: 'QC4', name: 'Automotive Aftermarket Components (Tier 1/2)', description: 'Parts and components sold to automotive aftermarket distributors and installers (not retail)' },
      { code: 'QC5', name: 'Specialty Building Products for Residential', description: 'Products sold through builders/contractors for residential construction: exterior products, interior finishes, hardware' },
      { code: 'QC6', name: 'Architectural Hardware & Lighting', description: 'Door hardware, lighting fixtures, plumbing fixtures sold to architects/designers/contractors for commercial and high-end residential' },
      { code: 'QC7', name: 'Flooring & Carpet (Commercial/Hospitality)', description: 'Commercial carpet, luxury vinyl, specialty flooring sold to architects/designers for hospitality, education, healthcare, corporate' },
      { code: 'QC8', name: 'Foodservice Equipment & Smallwares', description: 'Commercial kitchen equipment, serving ware, food prep tools sold to restaurants/institutions' },
      { code: 'QC9', name: 'Salon & Spa Equipment', description: 'Professional salon chairs, spa tables, equipment sold to salons/spas' },
      { code: 'QC10', name: 'Sports Facility Equipment', description: 'Gym equipment, sports flooring, athletic facility outfitting sold to schools, gyms, sports facilities' },
      { code: 'QC11', name: 'School & Institutional Furniture', description: 'Classroom furniture, library furniture, dormitory furnishings sold to educational institutions' },
      { code: 'QC12', name: 'Retail Store Fixtures & Displays', description: 'Custom retail displays, mannequins, point-of-purchase displays, merchandising fixtures sold to retailers and brands' },
      { code: 'QC13', name: 'Hospitality Supplies & Amenities', description: 'Hotel amenities, linens, tabletop products, in-room accessories sold to hotels/resorts' },
      { code: 'QC14', name: 'Promotional Products & Corporate Gifts', description: 'Branded merchandise, promotional items, corporate gifts, awards sold to businesses' },
      { code: 'QC15', name: 'Uniform & Workwear Programs', description: 'Corporate uniforms, healthcare scrubs, hospitality apparel sold to employers' },
      { code: 'QC16', name: 'Event & Experiential Products', description: 'Event furnishings, tents, staging, decor sold to event planners, venues, corporate clients' },
      { code: 'QC17', name: 'Funeral Products & Caskets', description: 'Caskets, urns, memorial products, embalming supplies sold to funeral homes' },
      { code: 'QC18', name: 'Medical/Dental Supplies (Practitioner Preference)', description: 'Medical/dental consumables where practitioner brand preference matters' },
      { code: 'QC19', name: 'Pet Professional Products', description: 'Professional grooming tools/products, veterinary supplies, kennel equipment sold to pet service businesses' },
      { code: 'QC20', name: 'Beauty Professional Products', description: 'Professional hair care, skin care, color, tools sold to salons/spas (not retail)' },
    ]
  },
  {
    id: 'consumer-mfg',
    name: 'Consumer Manufacturing',
    color: '#455a64',
    subsectors: [
      { code: 'CM1', name: 'Contract Mfg - Non-Food Consumer Goods', description: 'Assembly, packaging, kitting for consumer products (toys, games, small appliances, household items)' },
      { code: 'CM2', name: 'Contract Mfg - Health & Beauty Products', description: 'Private label and contract manufacturing of skincare, cosmetics, supplements, personal care' },
      { code: 'CM3', name: 'Contract Mfg - Apparel & Soft Goods', description: 'Cut-and-sew, screen printing, embroidery, promotional apparel, team uniforms' },
      { code: 'CM4', name: 'Contract Mfg - Packaging & Labeling', description: 'Custom packaging, labels, boxes, bags for consumer brands' },
      { code: 'CM5', name: 'Component Mfg - Consumer Products', description: 'Plastic injection molding, metal stamping, fasteners, small parts sold to consumer product OEMs' },
      { code: 'CM6', name: 'Contract Mfg - Outdoor & Recreation Gear', description: 'Manufacturing of sporting goods, outdoor equipment, recreational products for brands' },
      { code: 'CM7', name: 'Specialty Mfg - Seasonal & Holiday', description: 'Manufacturing of holiday decor, seasonal products, party supplies, gift items' },
      { code: 'CM8', name: 'Specialty Mfg - Licensed Products', description: 'Manufacturing of licensed consumer products (Disney, sports leagues, entertainment brands) for retail' },
      { code: 'CM9', name: 'Print & Specialty Fabrication', description: 'Large-format printing, signage, graphics, branded environments for retail, events, corporate' },
      { code: 'CM10', name: 'Textile & Fabric Mfg - Consumer-Focused', description: 'Textile mills, fabric converters, screen printing focused on apparel, home textiles' },
    ]
  },
  {
    id: 'consumer-infra',
    name: 'Consumer Infrastructure / Enablers',
    color: '#3498db',
    subsectors: [
      { code: 'CI1', name: 'Distribution - Non-Food Specialty', description: 'Specialty distributors serving consumer product categories (not food)' },
      { code: 'CI2', name: 'Marketing & E-Commerce Enablement', description: 'Marketing services, marketplace accelerators, digital platforms serving consumer brands' },
      { code: 'CI3', name: 'Logistics & 3PL - Consumer-Focused', description: 'Third-party logistics, fulfillment, last-mile delivery focused on consumer goods' },
      { code: 'CI4', name: 'Group Purchasing Organizations - Consumer', description: 'GPOs serving restaurants, retailers, hospitality, or consumer service businesses' },
      { code: 'CI5', name: 'Loyalty & CRM Platforms', description: 'Customer retention, rewards programs, marketing automation platforms serving consumer businesses' },
      { code: 'CI6', name: 'Retail Technology & POS Systems', description: 'Point-of-sale software, inventory management, retail operations platforms' },
      { code: 'CI7', name: 'Omnichannel & Marketplace Platforms', description: 'E-commerce enablement, marketplace management, fulfillment tech for consumer brands' },
      { code: 'CI8', name: 'Payment Processing & Fintech - Consumer', description: 'Merchant services, payment processing, BNPL, consumer financing solutions' },
      { code: 'CI9', name: 'Digital Marketing Services - Consumer Brands', description: 'Performance marketing, social media management, influencer platforms serving consumer companies' },
      { code: 'CI10', name: 'Supply Chain Software - Consumer Goods', description: 'Inventory optimization, demand planning, warehouse management systems for consumer product companies' },
      { code: 'CI11', name: 'Product Testing & Compliance', description: 'Testing, inspection, certification, compliance services for consumer products' },
      { code: 'CI12', name: 'Reverse Logistics & Returns Management', description: 'Returns processing, refurbishment, liquidation services for consumer product companies and retailers' },
    ]
  },
];

// Flatten all subsectors for easy lookup
export const allSubsectors = subsectorCategories.flatMap(cat =>
  cat.subsectors.map(s => ({ ...s, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color }))
);

// Part 2: Trade-off scenarios
export const tradeOffScenarios = [
  {
    id: 'scenario1',
    title: 'Scenario 1: Proven vs. Emerging',
    dealA: {
      name: 'Deal A: Franchisee Platform',
      details: [
        '15 locations',
        'Strong unit economics',
        'Proven category',
        'Management in place',
        '10x EBITDA',
      ],
    },
    dealB: {
      name: 'Deal B: Med Spa Platform',
      details: [
        '8 locations',
        'Emerging category',
        'Needs operational upgrade',
        'Higher growth potential',
        '7x EBITDA',
      ],
    },
  },
  {
    id: 'scenario2',
    title: 'Scenario 2: Manufacturing vs. Services',
    dealA: {
      name: 'Deal A: Food Co-Manufacturer',
      details: [
        '60% capacity utilization',
        'Customer concentration',
        'Strong margins',
        'Operational complexity',
        '8x EBITDA',
      ],
    },
    dealB: {
      name: 'Deal B: Home Services Platform (HVAC)',
      details: [
        'Fragmented market',
        'Bolt-on opportunities',
        'Recurring revenue',
        'Labor-dependent model',
        '11x EBITDA',
      ],
    },
  },
  {
    id: 'scenario3',
    title: 'Scenario 3: Experience vs. Opportunity',
    dealA: {
      name: 'Deal A: Sector We Know (Franchising)',
      details: [
        'Deep firm experience in the category',
        'Competitive process',
        'Strong asset',
        'Premium pricing',
        '12x EBITDA',
      ],
    },
    dealB: {
      name: 'Deal B: New Sector (Pet Services)',
      details: [
        'Proprietary deal / no competition',
        'Needs operational improvement',
        'Good market dynamics',
        'Learning curve for team',
        '8x EBITDA',
      ],
    },
  },
  {
    id: 'scenario4',
    title: 'Scenario 4: Complexity vs. Simplicity',
    dealA: {
      name: 'Deal A: Ingredients / Flavors Business',
      details: [
        'High technical barriers',
        'Differentiated offering',
        'Sticky customer relationships',
        'Complex operations',
        '12x EBITDA',
      ],
    },
    dealB: {
      name: 'Deal B: Retail Services Concept',
      details: [
        'Replicable model',
        'Simple operations',
        'Capital-light',
        'Lower barriers to entry',
        '7x EBITDA',
      ],
    },
  },
];

// Part 3: Conviction building (checkbox with "other" text input)
export const convictionQuestions = [
  {
    id: 'cq1',
    type: 'checkbox-with-other',
    question: 'What would it take for you to pursue a deal at 11-12x EBITDA? (Select your top 2)',
    maxSelect: 2,
    options: [
      'Sector we already know extremely well',
      'Proprietary sourcing relationship / no competition',
      'Exceptional management team staying',
      'Clear, executable 100%+ revenue growth plan',
      'Strategic add-on to existing portfolio company',
      'Unique market position / limited competition',
      'Honestly, would not pursue at that multiple',
    ],
    hasOther: true,
  },
];

// Part 4: Dealbreaker questions
export const dealbreakerQuestions = [
  {
    id: 'db1',
    question: 'Which of these would make you pass on a deal regardless of subsector or price? (Check all that apply)',
    options: [
      'Customer concentration >30% to top customer',
      'Founder not staying in any capacity',
      'High capex requirements (>15% of revenue annually)',
      'Unproven business model (<3 years operating history)',
      'Complex operations we don\'t understand',
      'Sector declining >5% annually',
      'High fashion/trend risk',
      'Significant working capital needs',
      'Regulatory/compliance complexity',
      'None of the above - everything is situation-dependent',
    ],
  },
];

// Part 5: Resource allocation & open response questions
export const strategyQuestions = [
  {
    id: 'sq1',
    type: 'multiple-choice',
    question: 'If we decided to proactively build a pipeline in 2-3 specific subsectors (banker outreach, conferences, thematic research), how should we allocate effort?',
    subtitle: 'I would support dedicating 30-40% of our sourcing time to proactive subsector development:',
    options: [
      'Strongly agree',
      'Agree',
      'Neutral',
      'Disagree - we should stay opportunistic',
    ],
  },
  {
    id: 'sq2',
    type: 'checkbox',
    question: 'If we do this, which activities make sense? (Check all that apply)',
    options: [
      'Attend 2-3 industry conferences per year in target sectors',
      'Monthly calls with 5-10 bankers who focus on target sectors',
      'Quarterly thematic deep-dives (market research, expert calls)',
      'Build relationships with 3-5 operators/executives in target sectors',
      'Retain an industry advisor/executive in residence',
      'None - better to respond to inbound flow',
    ],
  },
  {
    id: 'sq3',
    type: 'open',
    question: 'What consumer subsector do you think Charger is best positioned to win in that we\'re NOT currently seeing enough deal flow?',
  },
  {
    id: 'sq4',
    type: 'open',
    question: 'Complete this sentence: "I would be excited to do a deal at 11x EBITDA if..."',
  },
  {
    id: 'sq5',
    type: 'open',
    question: 'What\'s one subsector you think we should explicitly avoid, and why?',
  },
];
