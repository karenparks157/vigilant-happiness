// Consumer Subsector Data organized by category
// Codes: F=Food&Bev, A=Auto, HS=HomeServices, HC=Healthcare, P=Pets,
// B=Beauty, FIT=Fitness, ED=Education, R=Retail, T=Travel, FN=Financial, L=Lawn/Outdoor

export const subsectorCategories = [
  {
    id: 'food-bev',
    name: 'Food & Beverage',
    color: '#e74c3c',
    subsectors: [
      { code: 'F1', name: 'Contract Manufacturing - Food', description: 'Co-manufacturing and co-packing for branded food companies' },
      { code: 'F2', name: 'Contract Manufacturing - Beverage', description: 'Co-manufacturing for branded beverage companies' },
      { code: 'F3', name: 'Branded Snacks & Confections', description: 'Branded shelf-stable snack and confection products' },
      { code: 'F4', name: 'Branded Better-For-You Food', description: 'Health-oriented branded food products (organic, natural, functional)' },
      { code: 'F5', name: 'Branded Better-For-You Beverage', description: 'Health-oriented beverages (kombucha, functional drinks, cold-pressed)' },
      { code: 'F6', name: 'Specialty / Ethnic Foods', description: 'Specialty, ethnic, and international food brands' },
      { code: 'F7', name: 'Frozen Foods', description: 'Branded frozen meals, snacks, and desserts' },
      { code: 'F8', name: 'Bakery & Fresh Prepared', description: 'Fresh bakery, deli, and prepared food businesses' },
      { code: 'F9', name: 'Food Distribution / Wholesale', description: 'Specialty food distribution and wholesale' },
      { code: 'F10', name: 'Coffee & Tea', description: 'Branded coffee and tea products, roasters, and retailers' },
      { code: 'F11', name: 'Spirits & Craft Beverage', description: 'Craft spirits, wine, and specialty alcoholic beverages' },
      { code: 'F12', name: 'Restaurant / QSR Platforms', description: 'Multi-unit restaurant and quick-service concepts' },
    ]
  },
  {
    id: 'auto',
    name: 'Automotive Aftermarket',
    color: '#3498db',
    subsectors: [
      { code: 'A1', name: 'Collision Repair', description: 'Auto body and collision repair shop networks' },
      { code: 'A2', name: 'General Mechanical Repair', description: 'General auto repair and maintenance shops' },
      { code: 'A3', name: 'Oil Change / Quick Lube', description: 'Quick oil change and fluid service centers' },
      { code: 'A4', name: 'Auto Glass', description: 'Windshield and auto glass repair and replacement' },
      { code: 'A5', name: 'Tire Retail & Service', description: 'Tire sales, mounting, alignment, and related services' },
      { code: 'A6', name: 'Auto Parts Distribution', description: 'Aftermarket auto parts distributors' },
      { code: 'A7', name: 'Car Wash / Detailing', description: 'Express and full-service car wash operations' },
      { code: 'A8', name: 'Transmission / Specialty Repair', description: 'Specialized drivetrain and transmission shops' },
      { code: 'A9', name: 'Fleet Services & Management', description: 'Fleet maintenance, telematics, and management' },
      { code: 'A10', name: 'EV Charging & Service Infrastructure', description: 'Electric vehicle charging networks and EV-specific service' },
    ]
  },
  {
    id: 'home-services',
    name: 'Home Services',
    color: '#2ecc71',
    subsectors: [
      { code: 'HS1', name: 'HVAC', description: 'Heating, ventilation, and air conditioning installation and service' },
      { code: 'HS2', name: 'Plumbing', description: 'Residential and commercial plumbing services' },
      { code: 'HS3', name: 'Electrical', description: 'Residential and commercial electrical contracting' },
      { code: 'HS4', name: 'Roofing', description: 'Residential and commercial roofing installation and repair' },
      { code: 'HS5', name: 'Pest Control', description: 'Residential and commercial pest management' },
      { code: 'HS6', name: 'Restoration / Remediation', description: 'Water, fire, mold damage restoration services' },
      { code: 'HS7', name: 'Garage Door', description: 'Garage door installation, repair, and service' },
      { code: 'HS8', name: 'Insulation & Weatherization', description: 'Home insulation, weatherization, and energy efficiency' },
      { code: 'HS9', name: 'Painting', description: 'Residential and commercial painting contractors' },
      { code: 'HS10', name: 'Cleaning / Janitorial', description: 'Residential and commercial cleaning services' },
      { code: 'HS11', name: 'Pool Services', description: 'Pool cleaning, maintenance, and repair' },
      { code: 'HS12', name: 'Security / Smart Home', description: 'Home security systems and smart home installation' },
    ]
  },
  {
    id: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    color: '#9b59b6',
    subsectors: [
      { code: 'HC1', name: 'Dental (DSO)', description: 'Dental support organizations / multi-site dental platforms' },
      { code: 'HC2', name: 'Dermatology', description: 'Dermatology practice management platforms' },
      { code: 'HC3', name: 'Ophthalmology / Optometry', description: 'Vision care practice platforms' },
      { code: 'HC4', name: 'Physical Therapy', description: 'Physical therapy and rehabilitation clinic networks' },
      { code: 'HC5', name: 'Veterinary (Companion Animal)', description: 'Companion animal veterinary practice platforms' },
      { code: 'HC6', name: 'Behavioral Health', description: 'Mental health and substance abuse treatment platforms' },
      { code: 'HC7', name: 'Med Spa / Aesthetics', description: 'Medical spa and aesthetic treatment centers' },
      { code: 'HC8', name: 'Urgent Care', description: 'Walk-in urgent care clinic networks' },
      { code: 'HC9', name: 'Home Health / Home Care', description: 'In-home healthcare and personal care services' },
      { code: 'HC10', name: 'Pharmacy / Compounding', description: 'Specialty and compounding pharmacy platforms' },
    ]
  },
  {
    id: 'pets',
    name: 'Pet Services & Products',
    color: '#e67e22',
    subsectors: [
      { code: 'P1', name: 'Pet Food & Treats (Premium)', description: 'Premium and super-premium pet food and treat brands' },
      { code: 'P2', name: 'Pet Grooming', description: 'Pet grooming salon networks' },
      { code: 'P3', name: 'Pet Boarding / Daycare', description: 'Dog daycare and boarding facility networks' },
      { code: 'P4', name: 'Pet Insurance', description: 'Pet health insurance platforms' },
      { code: 'P5', name: 'Pet Supplies / E-commerce', description: 'Pet supply retail and e-commerce' },
      { code: 'P6', name: 'Pet Health & Supplements', description: 'Pet wellness, supplements, and health products' },
    ]
  },
  {
    id: 'beauty-personal',
    name: 'Beauty & Personal Care',
    color: '#e91e63',
    subsectors: [
      { code: 'B1', name: 'Salon / Hair Care Services', description: 'Multi-unit hair salon platforms' },
      { code: 'B2', name: 'Skincare Brands', description: 'Premium and prestige skincare brands' },
      { code: 'B3', name: 'Cosmetics / Color', description: 'Color cosmetics and makeup brands' },
      { code: 'B4', name: 'Fragrance', description: 'Fragrance and perfume brands' },
      { code: 'B5', name: 'Personal Care / Hygiene', description: 'Personal care and hygiene product brands' },
      { code: 'B6', name: 'Hair Care Products', description: 'Professional and consumer hair care product brands' },
      { code: 'B7', name: 'Nail Services', description: 'Multi-unit nail salon platforms' },
    ]
  },
  {
    id: 'fitness-recreation',
    name: 'Fitness & Recreation',
    color: '#00bcd4',
    subsectors: [
      { code: 'FIT1', name: 'Boutique Fitness', description: 'Boutique fitness studio concepts (cycling, yoga, barre, etc.)' },
      { code: 'FIT2', name: 'Traditional Gym / Health Club', description: 'Full-service gym and health club platforms' },
      { code: 'FIT3', name: 'Youth Sports & Activities', description: 'Youth sports leagues, training, and activity centers' },
      { code: 'FIT4', name: 'Golf / Racquet Sports', description: 'Golf courses, tennis clubs, racquet sports facilities' },
      { code: 'FIT5', name: 'Outdoor Recreation / Adventure', description: 'Outdoor recreation, adventure parks, and experiential venues' },
      { code: 'FIT6', name: 'Martial Arts / Self-Defense', description: 'Martial arts studio networks' },
    ]
  },
  {
    id: 'education-enrichment',
    name: 'Education & Enrichment',
    color: '#ff9800',
    subsectors: [
      { code: 'ED1', name: 'Tutoring / Test Prep', description: 'Tutoring centers and test preparation services' },
      { code: 'ED2', name: 'Early Childhood / Daycare', description: 'Childcare centers and early childhood education' },
      { code: 'ED3', name: 'STEM / Coding Programs', description: 'STEM education and coding bootcamp programs for youth' },
      { code: 'ED4', name: 'Music & Arts Education', description: 'Music lessons, art classes, and performing arts programs' },
      { code: 'ED5', name: 'Professional Training & Certification', description: 'Vocational training and professional certification programs' },
      { code: 'ED6', name: 'Language Learning', description: 'Language instruction and immersion programs' },
    ]
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    color: '#795548',
    subsectors: [
      { code: 'R1', name: 'Specialty Retail (Niche)', description: 'Niche specialty retailers with strong category focus' },
      { code: 'R2', name: 'DTC Brands', description: 'Direct-to-consumer digitally native brands' },
      { code: 'R3', name: 'Resale / Recommerce', description: 'Secondhand, consignment, and recommerce platforms' },
      { code: 'R4', name: 'Franchise Retail', description: 'Franchise-based retail concepts' },
      { code: 'R5', name: 'Home Furnishings / Decor', description: 'Home furnishings, furniture, and decor retailers' },
      { code: 'R6', name: 'Outdoor / Sporting Goods', description: 'Outdoor gear and sporting goods specialty retail' },
    ]
  },
  {
    id: 'travel-hospitality',
    name: 'Travel & Hospitality',
    color: '#607d8b',
    subsectors: [
      { code: 'T1', name: 'Campgrounds / RV Parks', description: 'Campground and RV park networks' },
      { code: 'T2', name: 'Experiential Travel / Tours', description: 'Tour operators and experiential travel companies' },
      { code: 'T3', name: 'Select-Service Hotels', description: 'Limited and select-service hotel management platforms' },
      { code: 'T4', name: 'Vacation Rental Management', description: 'Short-term vacation rental management companies' },
    ]
  },
  {
    id: 'financial-insurance',
    name: 'Consumer Financial & Insurance',
    color: '#4caf50',
    subsectors: [
      { code: 'FN1', name: 'Insurance Brokerage (Personal Lines)', description: 'Personal lines insurance distribution platforms' },
      { code: 'FN2', name: 'Wealth Management (Mass Affluent)', description: 'Wealth management for mass affluent consumers' },
      { code: 'FN3', name: 'Specialty Lending / Financing', description: 'Consumer specialty lending and financing platforms' },
      { code: 'FN4', name: 'Tax Preparation Services', description: 'Tax preparation and advisory service networks' },
    ]
  },
  {
    id: 'lawn-outdoor',
    name: 'Lawn, Landscape & Outdoor',
    color: '#8bc34a',
    subsectors: [
      { code: 'L1', name: 'Lawn Care / Maintenance', description: 'Residential lawn care and maintenance services' },
      { code: 'L2', name: 'Landscape Design / Build', description: 'Landscape architecture, design, and hardscape installation' },
      { code: 'L3', name: 'Tree Care / Arborist', description: 'Tree removal, trimming, and arborist services' },
      { code: 'L4', name: 'Irrigation / Water Management', description: 'Irrigation installation and water management systems' },
    ]
  },
];

// Flatten all subsectors for easy lookup
export const allSubsectors = subsectorCategories.flatMap(cat =>
  cat.subsectors.map(s => ({ ...s, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color }))
);

// Trade-off scenarios
export const tradeOffScenarios = [
  {
    id: 'scenario1',
    title: 'Growth vs. Margin',
    dealA: {
      name: 'Deal A: High-Growth Home Services Platform',
      details: [
        '25%+ organic revenue growth',
        '12% EBITDA margins (expanding)',
        'Fragmented market with clear roll-up path',
        'Heavy capex requirements for fleet/equipment',
        '8x EBITDA entry multiple',
      ],
    },
    dealB: {
      name: 'Deal B: Steady-State Branded Food Company',
      details: [
        '3-5% revenue growth',
        '22% EBITDA margins (stable)',
        'Strong retail distribution and brand loyalty',
        'Asset-light model',
        '11x EBITDA entry multiple',
      ],
    },
  },
  {
    id: 'scenario2',
    title: 'Recurring Revenue vs. Brand Power',
    dealA: {
      name: 'Deal A: Subscription Pet Wellness Platform',
      details: [
        '85% recurring revenue',
        '60% gross margins',
        'High customer LTV but rising CAC',
        'Limited physical moat',
        '15x EBITDA entry multiple',
      ],
    },
    dealB: {
      name: 'Deal B: Premium Pet Food Brand',
      details: [
        'Wholesale + DTC mix (20% recurring)',
        '45% gross margins',
        'Strong brand and retail distribution',
        'Manufacturing complexity but defensible',
        '12x EBITDA entry multiple',
      ],
    },
  },
  {
    id: 'scenario3',
    title: 'Proven Rollup vs. Emerging Category',
    dealA: {
      name: 'Deal A: HVAC Consolidation Platform',
      details: [
        '15 locations, adding 5/year via M&A',
        'Proven integration playbook',
        'Stable demand, non-discretionary',
        'Labor-intensive, technician shortage risk',
        '10x EBITDA entry multiple',
      ],
    },
    dealB: {
      name: 'Deal B: EV Charging Network Operator',
      details: [
        'Early-stage but rapidly scaling',
        'Secular tailwind from EV adoption',
        'Capital-intensive build-out phase',
        'Regulatory and technology risk',
        '20x revenue multiple (pre-EBITDA)',
      ],
    },
  },
  {
    id: 'scenario4',
    title: 'Scale vs. Niche Dominance',
    dealA: {
      name: 'Deal A: National Fitness Franchise',
      details: [
        '500+ franchise locations',
        'Royalty-fee model (high margin)',
        'Competitive market, commodity risk',
        'Franchise relationship management complexity',
        '14x EBITDA entry multiple',
      ],
    },
    dealB: {
      name: 'Deal B: Regional Med Spa Leader',
      details: [
        '12 company-owned locations in 2 markets',
        'Dense market presence, strong word-of-mouth',
        '#1 or #2 in every local market served',
        'Physician-dependency and regulatory considerations',
        '10x EBITDA entry multiple',
      ],
    },
  },
];

// Conviction questions
export const convictionQuestions = [
  {
    id: 'cq1',
    type: 'multiple-choice',
    question: 'What is the single most important attribute you look for in a consumer deal?',
    options: [
      'Recurring / repeating revenue model',
      'Strong brand and customer loyalty',
      'Fragmented market with clear roll-up opportunity',
      'High and expanding margins',
      'Secular growth tailwind in the category',
      'Asset-light business model',
    ],
  },
  {
    id: 'cq2',
    type: 'multiple-choice',
    question: 'What is the ideal revenue size for a consumer platform investment?',
    options: [
      '$10-25M revenue',
      '$25-50M revenue',
      '$50-100M revenue',
      '$100-250M revenue',
      '$250M+ revenue',
    ],
  },
  {
    id: 'cq3',
    type: 'multiple-choice',
    question: 'How important is the ability to execute a buy-and-build strategy?',
    options: [
      'Essential - it must be a core part of the thesis',
      'Very important - strong preference for M&A-driven value creation',
      'Moderately important - nice to have but not required',
      'Not important - I prefer organic growth stories',
    ],
  },
  {
    id: 'cq4',
    type: 'multiple-choice',
    question: 'What is your preferred hold period for a consumer investment?',
    options: [
      '3-4 years',
      '4-5 years',
      '5-7 years',
      '7+ years',
    ],
  },
  {
    id: 'cq5',
    type: 'ranking',
    question: 'Rank these value creation levers in order of importance (1 = most important):',
    options: [
      'Revenue growth (organic)',
      'M&A / roll-up',
      'Margin expansion / operational improvement',
      'Multiple expansion',
      'Digital transformation / tech enablement',
      'Management team upgrade',
    ],
  },
];

// Dealbreaker questions
export const dealbreakerQuestions = [
  {
    id: 'db1',
    question: 'Which of the following would be automatic dealbreakers for you? (Select all that apply)',
    options: [
      'Customer concentration >20% from single customer',
      'EBITDA margins below 10%',
      'Revenue declining year-over-year',
      'Heavy regulatory burden / licensing requirements',
      'Significant technology disruption risk',
      'Unionized workforce',
      'Seasonal business (>50% revenue in one quarter)',
      'Owner-dependent with no management bench',
      'Capital expenditure >15% of revenue annually',
      'Significant environmental / liability exposure',
      'No clear path to 3x+ MOIC',
      'Entry multiple >12x EBITDA',
    ],
  },
];

// Open-ended strategy questions
export const strategyQuestions = [
  {
    id: 'sq1',
    question: 'What consumer subsector do you believe is most underappreciated by the PE market right now, and why?',
  },
  {
    id: 'sq2',
    question: 'Describe your ideal consumer deal in 2-3 sentences. What does the company look like?',
  },
  {
    id: 'sq3',
    question: 'What macro trend or consumer behavior shift are you most excited about for the next 5 years?',
  },
  {
    id: 'sq4',
    question: 'Is there a subsector NOT listed in this survey that you think we should be exploring? If so, what and why?',
  },
  {
    id: 'sq5',
    question: 'Any additional thoughts, concerns, or strategic observations you\'d like to share with the partnership?',
  },
];
