/* ==========================================================================
   Shreejee Trading Corporation (STC) - Modern Application Logic
   Proprietor: Chetan Shah
   Office Phone: (079) 22146549 | Mobile/WhatsApp: +91 9376168779
   Email: crshah2@yahoo.com
   Address: 15, 2nd Floor, Hiramoti Chambers, Glowad, Khadia, Ahmedabad-380001
   ========================================================================== */

// Rich B2B Wholesale Product Dataset
const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'HepatoBoost Liver Tonic & Metabolism Enhancer',
    composition: 'Tricholine Citrate, Inositol, Biotin, DL-Methionine & Herbal Silymarin Extract',
    category: 'poultry',
    categoryName: 'Poultry Medicine & Tonics',
    badge: 'Bestseller',
    packing: '1 Litre Bottle / 5 Litre Bulk Can',
    moq: '4 x 5L Bulk Cans (1 Carton)',
    storage: 'Store in cool, dark place below 25°C. Protect from direct sunlight.',
    target: 'Broiler, Breeder & Commercial Layer Flocks',
    dosage: '15-20ml per 100 birds daily in drinking water for 5-7 days',
    indications: 'Fatty Liver Kidney Syndrome (FLKS), Mycotoxicosis, low FCR, post-antibiotic liver recovery.',
    speciesTags: ['Broiler Poultry', 'Layer Birds', 'Breeder Flocks'],
    description: 'Premier liver tonic formulation engineered to regenerate hepatic tissue, enhance digestive enzyme synthesis, and accelerate feed conversion ratio (FCR) during stress.',
    technicalSpecs: 'Administer via overhead drinking water tanks. Compatible with standard multivitamin formulations. Do not mix with acidifiers.'
  },
  {
    id: 'prod-2',
    title: 'AmoxiVet 50% Water Soluble High-Potency Powder',
    composition: 'Amoxicillin Trihydrate IP 50% w/w + Clavulanic Acid Stabilizer',
    category: 'poultry',
    categoryName: 'Poultry Medicine & Tonics',
    badge: 'High Potency',
    packing: '100g Sachet / 500g Bulk Jar',
    moq: '20 x 500g Jars',
    storage: 'Store below 25°C in airtight container. Moisture sensitive.',
    target: 'Poultry Flocks & Livestock Cattle',
    dosage: '10-20mg per kg body weight in drinking water for 3-5 days',
    indications: 'Chronic Respiratory Disease (CRD), Fowl Cholera, Colibacillosis (E. coli), Necrotic Enteritis.',
    speciesTags: ['Poultry Flocks', 'Cattle & Calves', 'Swine'],
    description: 'Ultra-pure, highly soluble broad-spectrum semi-synthetic penicillin antibiotic offering rapid systemic absorption for acute bacterial outbreaks.',
    technicalSpecs: 'Solubility: 100% water soluble within 60 seconds. Prepare fresh medicated water daily.'
  },
  {
    id: 'prod-3',
    title: 'Medical Grade Disposable Powder-Free Latex Gloves',
    composition: '100% Pure Natural Rubber Latex - Examination Grade (AQL 1.5)',
    category: 'gloves',
    categoryName: 'Disposable Gloves & Safety',
    badge: 'Essential Stock',
    packing: 'Box of 100 Gloves / Master Carton of 10 Boxes (1000 Pcs)',
    moq: '1 Master Carton (10 Boxes / 1000 Gloves)',
    storage: 'Store in cool, dry warehouse below 30°C away from ozone and UV light.',
    target: 'Veterinary Surgeons, Poultry Farm Workers & Diagnostic Labs',
    dosage: 'Single-use hygienic barrier protection',
    indications: 'Farm biosecurity protocols, vaccine administration, post-mortem inspection, clinical surgery.',
    speciesTags: ['Veterinary Clinic', 'Farm Biosecurity', 'Laboratory'],
    description: 'Textured, micro-roughened powder-free natural rubber latex gloves offering maximum tactile sensitivity, high tensile tear resistance, and reliable pathogen barrier protection.',
    technicalSpecs: 'Thickness: 5.5 mil palm, 6.0 mil finger textured. Ambidextrous with beaded cuff for easy donning.'
  },
  {
    id: 'prod-4',
    title: 'Heavy-Duty Nitrile Chemical & Vaccine Gloves',
    composition: '100% Synthetic Nitrile Butadiene Rubber (Latex-Free & Chem Safe)',
    category: 'gloves',
    categoryName: 'Disposable Gloves & Safety',
    badge: 'Chemical Safe',
    packing: 'Box of 100 Gloves / Carton of 10 Boxes (Blue/Black Options)',
    moq: '1 Master Carton (10 Boxes)',
    storage: 'Store in dry area away from organic solvents and direct sunlight.',
    target: 'Hatchery Managers, Biosecurity Spray Teams & Poultry Veterinarians',
    dosage: 'Single-use chemical & puncture resistant protection',
    indications: 'Handling formaldehyde sanitizers, caustic disinfectants, oil-emulsion poultry vaccines, and sharp tools.',
    speciesTags: ['Poultry Hatchery', 'Biosecurity Spray', 'Veterinary Exams'],
    description: 'Puncture-resistant synthetic nitrile gloves engineered with superior resistance against farm disinfectants, organic acids, and accidental needle pricks during flock vaccination.',
    technicalSpecs: 'Thickness: 6.0 mil heavy-duty nitrile. 3x puncture resistance of standard natural latex.'
  },
  {
    id: 'prod-5',
    title: 'CalciMax Forte Chelated Liquid Supplement',
    composition: 'Micro-chelated Calcium, Phosphorus, Vitamin D3, B12, and Magnesium',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Essential Growth',
    packing: '1L Bottle / 5L Bulk Can / 20L Commercial Drum',
    moq: '2 x 20L Drums or 10 x 5L Cans',
    storage: 'Store in ambient temperature. Shake well before administration.',
    target: 'Commercial Layer Birds, Breeders & Dairy Cattle',
    dosage: 'Poultry: 20-30ml per 100 layers daily | Cattle: 100ml per dairy animal daily',
    indications: 'Thin or soft-shelled eggs, cage layer fatigue, rickets, hypocalcemia (milk fever in cattle).',
    speciesTags: ['Commercial Layers', 'Dairy Cattle', 'Breeder Birds'],
    description: 'High-bioavailability chelated liquid calcium and phosphorus formulation that strengthens eggshell density, prevents leg paralysis, and boosts milk yield in dairy livestock.',
    technicalSpecs: 'Ca:P ratio optimized at 2:1 with rapid-absorption organic chelating ligands.'
  },
  {
    id: 'prod-6',
    title: 'PoultryVite-C & Electrolyte Anti-Stress Formula',
    composition: 'Ascorbic Acid (Vitamin C) 99%, Sodium Chloride, Potassium Citrate & Dextrose',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Heat Stress Care',
    packing: '1 kg Moisture-Proof Foil Pouch / 5 kg Bucket',
    moq: '10 x 1 kg Pouches',
    storage: 'Store in airtight condition below 25°C. Hygroscopic material.',
    target: 'Broilers, Commercial Layers & Chick Arrivals',
    dosage: '1g per 2 Litres drinking water during high summer temperatures',
    indications: 'Summer heat stress, dehydration, vaccination stress, transport mortality reduction.',
    speciesTags: ['Broiler Flocks', 'Layer Birds', 'Day-Old Chicks'],
    description: 'High-potency vitamin C and balanced electrolyte formulation to maintain cellular osmotic balance, lower core body temperature, and prevent summer heat stress mortality.',
    technicalSpecs: 'Enriched with instant-energy dextrose monohydrate to revive exhausted birds within 2 hours.'
  },
  {
    id: 'prod-7',
    title: 'ViruClean 5th Gen Synergistic Disinfectant',
    composition: 'Didecyl Dimethyl Ammonium Chloride 10% + Glutaraldehyde 15%',
    category: 'vaccines',
    categoryName: 'Vaccines & Biosecurity',
    badge: 'Biosecurity Shield',
    packing: '1 Litre / 5 Litre High-Density Polyethylene Canister',
    moq: '4 x 5L Canisters',
    storage: 'Store in ventilated warehouse. Highly concentrated compound.',
    target: 'Poultry Farm Sheds, Incubators, Hatchers & Vehicle Footbaths',
    dosage: '4-5ml per Litre water for aerial fogging and surface sanitization',
    indications: 'Newcastle Disease Virus, Gumboro (IBD), Avian Influenza, Salmonella, E. coli biofilm eradication.',
    speciesTags: ['Shed Sanitation', 'Hatchery Hygiene', 'Vehicle Disinfection'],
    description: 'Hospital-grade broad-spectrum biosecurity disinfectant that penetrates organic matter and destroys enveloped/non-enveloped viruses, fungi, and bacterial spores.',
    technicalSpecs: 'Non-corrosive at recommended dilution. Active even in the presence of hard water and 400ppm organic soil.'
  },
  {
    id: 'prod-8',
    title: 'ImmunoVax ND+IB Combined Live Vaccine',
    composition: 'Live Attenuated Newcastle Disease (LaSota) & Infectious Bronchitis (H120)',
    category: 'vaccines',
    categoryName: 'Vaccines & Biosecurity',
    badge: 'Cold Chain Required',
    packing: '1000 Doses / 2000 Doses Freeze-Dried Glass Vial',
    moq: '50 Vials (With Thermocol Cold-Box Packaging)',
    storage: 'CRITICAL COLD CHAIN: Must be stored at 2°C to 8°C continuously.',
    target: 'Day-old Chicks & Growing Layer/Broiler Flocks',
    dosage: '1 drop per bird intraocular/intranasal or via chlorine-free drinking water',
    indications: 'Active immunization against Ranikhet (Newcastle Disease) and Avian Infectious Bronchitis respiratory distress.',
    speciesTags: ['Day-Old Chicks', 'Broiler Flocks', 'Layer Pullets'],
    description: 'High-titer freeze-dried live vaccine providing rapid mucosal immunity and robust circulating antibody titers against virulent field strains of ND and IB.',
    technicalSpecs: 'Shipped exclusively with ice-packs in temperature-verified styrofoam containers from Ahmedabad hub.'
  },
  {
    id: 'prod-9',
    title: 'Veterinary Long-Shoulder Artificial Insemination Gloves',
    composition: 'Low Density Polyethylene (LDPE) 90cm Full Shoulder Length',
    category: 'gloves',
    categoryName: 'Disposable Gloves & Safety',
    badge: 'Veterinary Specialty',
    packing: 'Pack of 100 Gloves / Master Carton of 20 Packs (2000 Pcs)',
    moq: '5 Packs (500 Gloves)',
    storage: 'Store in dry place below 35°C away from sharp instruments.',
    target: 'Cattle Veterinary Doctors, AI Technicians & Livestock Breeding Centers',
    dosage: 'Single-use shoulder-length protective barrier',
    indications: 'Artificial Insemination (AI), rectal examination, pregnancy diagnosis, and obstetric maneuvers in dairy cattle.',
    speciesTags: ['Dairy Cattle', 'Veterinary Doctors', 'AI Breeding'],
    description: 'Extra-long 90cm shoulder-length smooth polyethylene gloves engineered with high seam-weld strength to prevent rupture during large animal rectal palpation and insemination.',
    technicalSpecs: 'Super smooth external surface prevents rectal mucosal irritation. Oblique cut shoulder fit for full arm protection.'
  },
  {
    id: 'prod-10',
    title: 'Tilmicosin 25% Oral Respiratory Solution',
    composition: 'Tilmicosin Phosphate 250 mg/ml in Aqueous Vehicle',
    category: 'poultry',
    categoryName: 'Poultry Medicine & Tonics',
    badge: 'CRD Specialist',
    packing: '240ml Bottle / 1 Litre High-Density Bottle',
    moq: '10 x 1L Bottles',
    storage: 'Store below 25°C. Keep bottle tightly closed after opening.',
    target: 'Commercial Broilers, Pullets & Breeder Poultry Flocks',
    dosage: '15-20mg Tilmicosin per kg body weight in drinking water for 3 consecutive days',
    indications: 'Severe Mycoplasma gallisepticum (MG) and Mycoplasma synoviae (MS) Chronic Respiratory Disease outbreaks.',
    speciesTags: ['Broiler Flocks', 'Breeder Poultry', 'Turkey Flocks'],
    description: 'Advanced macrolide antibiotic formulation specifically targeted at pulmonary and air sac tissues to rapidly clear tracheal rales and mycoplasmal infection.',
    technicalSpecs: 'Concentrates 15x higher in lung macrophages compared to serum for prolonged respiratory tissue protection.'
  },
  {
    id: 'prod-11',
    title: 'GutPro Multi-Strain Probiotic & Prebiotic Blend',
    composition: 'Lactobacillus acidophilus, Bacillus subtilis, Saccharomyces boulardii + MOS',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Natural Growth',
    packing: '500g Pouch / 1 kg Foil Jar / 10 kg Bucket',
    moq: '10 x 1 kg Jars',
    storage: 'Store in refrigerated or cool dry condition below 20°C.',
    target: 'All Poultry Breeds & Growing Cattle Calves',
    dosage: '100g per ton of finished poultry feed or 50g per 1000 birds water',
    indications: 'Wet droppings, dysbacteriosis, post-antibiotic gut restoration, competitive exclusion of Salmonella.',
    speciesTags: ['Poultry Flocks', 'Cattle Calves', 'Breeder Flocks'],
    description: 'High-CFU direct-fed microbials designed to colonize intestinal villi, stimulate natural digestive immunity, and enhance nutrient absorption without leaving antibiotic residues.',
    technicalSpecs: 'Total microbial count: > 10 x 10^9 CFU/g. Micro-encapsulated strains withstand feed pelleting heat up to 85°C.'
  },
  {
    id: 'prod-12',
    title: 'ToxBind Triple Action Mycotoxin Binder',
    composition: 'Hydrated Sodium Calcium Aluminosilicate (HSCAS) + Organic Acids + MOS',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Feed Protection',
    packing: '25 kg Heavy-Duty Poly-Laminated Bag',
    moq: '10 x 25 kg Bags (250 kg)',
    storage: 'Store in dry warehouse on pallets away from floor moisture.',
    target: 'Poultry Feed Manufacturers, Commercial Farms & Dairy Cattle',
    dosage: '1 kg per ton of feed (maintenance) | 2 kg per ton during high mycotoxin contamination',
    indications: 'Aflatoxicosis, T-2 toxin, Ochratoxin feed contamination, oral lesions, immunosuppression prevention.',
    speciesTags: ['Feed Manufacturers', 'Commercial Poultry', 'Dairy Livestock'],
    description: 'Premium broad-spectrum toxin binder that irreversibly adsorbs polar and non-polar fungal mycotoxins in the digestive tract without binding vital dietary vitamins and trace minerals.',
    technicalSpecs: 'Cation Exchange Capacity (CEC): > 85 meq/100g. Particle size 100% through 150 mesh for maximum surface area adsorption.'
  }
];

// Application State
let quoteBasket = [];
let currentCalcTab = 'poultry';

// DOM Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProducts(PRODUCTS);
  renderPartnerMarquee(PARTNER_COMPANIES);
  renderPartners(PARTNER_COMPANIES);
  setupEventListeners();
  setupScrollEffects();
  setupStatsAnimation();
  updateQuoteUI();
  calculateFarmRequirement();
});

// Dark / Light Mode Theme Switching
function initTheme() {
  const savedTheme = localStorage.getItem('stc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('stc_theme', newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Dark Medical Theme' : 'Clinical Light Theme'}.`);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      <span>Light Mode</span>
    `;
  } else {
    btn.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
      <span>Dark Mode</span>
    `;
  }
}

// Render Products Grid
function renderProducts(productsList) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  if (productsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 5rem 1rem; background: var(--card-bg); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <svg width="56" height="56" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--slate-400); margin-bottom: 1rem;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <h3 style="color: var(--text-heading); font-size: 1.35rem; margin-bottom: 0.4rem;">No wholesale products matched your search</h3>
        <p style="color: var(--text-body); font-size: 0.95rem;">Try adjusting your keyword filter or explore all product categories.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = productsList.map(prod => `
    <div class="product-card" data-category="${prod.category}">
      <div class="product-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <span class="product-category-tag">${prod.categoryName}</span>
          ${prod.badge ? `<span class="badge badge-primary">${prod.badge}</span>` : ''}
        </div>
        <h3 class="product-title">${prod.title}</h3>
        <p class="product-composition">${prod.composition}</p>
      </div>
      <div class="product-body">
        <p class="product-desc-snippet">${prod.description}</p>
        
        <div class="product-species-tags">
          ${(prod.speciesTags || []).map(tag => `<span class="species-tag">${tag}</span>`).join('')}
        </div>

        <ul class="product-spec-list">
          <li class="product-spec-item">
            <span class="spec-label">Wholesale Packing:</span>
            <span class="spec-val">${prod.packing}</span>
          </li>
          <li class="product-spec-item">
            <span class="spec-label">Min. Order (MOQ):</span>
            <span class="spec-val" style="color: var(--stc-red); font-weight: 600;">${prod.moq}</span>
          </li>
          <li class="product-spec-item">
            <span class="spec-label">Target Dosage:</span>
            <span class="spec-val">${prod.dosage}</span>
          </li>
        </ul>
      </div>
      <div class="product-footer">
        <button class="btn btn-outline btn-sm" onclick="openQuickView('${prod.id}')" title="View Full Technical Datasheet & Indications">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          Quick View & Datasheet
        </button>
        <button class="btn btn-primary btn-sm" onclick="addToQuote('${prod.id}')" title="Add to Wholesale Inquiry List">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Add to RFQ
        </button>
      </div>
    </div>
  `).join('');
}

// Technical Quick View & Dosage Protocol Modal
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  let modalContainer = document.getElementById('quickViewModalContainer');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'quickViewModalContainer';
    document.body.appendChild(modalContainer);
  }

  modalContainer.innerHTML = `
    <div class="quick-view-overlay active" onclick="closeQuickView(event)"></div>
    <div class="quick-view-modal active">
      <div class="quick-view-header">
        <div>
          <span class="product-category-tag">${prod.categoryName}</span>
          <h3 style="font-size: 1.45rem; margin-top: 0.35rem;">${prod.title}</h3>
          <p style="color: var(--stc-red); font-weight: 600; font-size: 0.95rem;">${prod.composition}</p>
        </div>
        <button class="quick-view-close" onclick="closeQuickView()" title="Close Datasheet">&times;</button>
      </div>

      <div class="quick-view-body">
        <div class="quick-view-section">
          <h4>Technical Description & Mode of Action</h4>
          <p>${prod.description}</p>
        </div>

        <div class="quick-view-grid-specs">
          <div class="spec-card">
            <h5>Wholesale Packaging</h5>
            <p>${prod.packing}</p>
          </div>
          <div class="spec-card">
            <h5>Minimum Order Quantity (MOQ)</h5>
            <p style="color: var(--stc-red); font-weight: 700;">${prod.moq}</p>
          </div>
          <div class="spec-card">
            <h5>Storage & Cold-Chain Specs</h5>
            <p>${prod.storage}</p>
          </div>
          <div class="spec-card">
            <h5>Primary Indications & Uses</h5>
            <p>${prod.indications}</p>
          </div>
        </div>

        <div class="quick-view-section" style="margin-top: 1.25rem;">
          <h4>Recommended Administration & Dosage Protocol</h4>
          <div class="dosage-table-wrapper">
            <table class="dosage-table">
              <thead>
                <tr>
                  <th>Target Species</th>
                  <th>Recommended Dosage / Inclusion Rate</th>
                  <th>Technical Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>${prod.target}</strong></td>
                  <td><strong style="color: var(--primary-700);">${prod.dosage}</strong></td>
                  <td>${prod.technicalSpecs || 'Follow veterinary consultant instructions.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="quick-view-section" style="margin-top: 1.25rem;">
          <h4>Authorized Dealer Verification</h4>
          <p style="font-size: 0.88rem; color: var(--text-body);">
            100% Genuine Lot Traceability guaranteed by <strong>Shreejee Trading Corporation (Prop. Chetan Shah)</strong>. Stocks dispatched directly from Hiramoti Chambers warehouse, Ahmedabad.
          </p>
        </div>
      </div>

      <div class="quick-view-footer">
        <button class="btn btn-outline" onclick="closeQuickView()">Close Datasheet</button>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="addToQuote('${prod.id}'); closeQuickView();">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Add to Wholesale RFQ
          </button>
          <a href="https://wa.me/919376168779?text=${encodeURIComponent(`Hello Mr. Chetan Shah, I am viewing the technical datasheet for *${prod.title}* (${prod.packing}). I would like to inquire about bulk wholesale pricing.`)}" target="_blank" class="btn btn-whatsapp">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            WhatsApp Chetan Shah
          </a>
        </div>
      </div>
    </div>
  `;
}

function closeQuickView(event) {
  if (event && event.target && !event.target.classList.contains('quick-view-overlay')) return;
  const modalContainer = document.getElementById('quickViewModalContainer');
  if (modalContainer) modalContainer.innerHTML = '';
}

// Escape key listener to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeQuickView();
    toggleQuoteDrawer(false);
  }
});

// Event Listeners for Filters, Search & Forms
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn:not(.partner-filter-btn)');
  const partnerSearchInput = document.getElementById('partnerSearchInput');
  const partnerFilterBtns = document.querySelectorAll('.partner-filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterProducts();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts();
    });
  });

  if (partnerSearchInput) {
    partnerSearchInput.addEventListener('input', () => {
      filterPartners();
    });
  }

  partnerFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      partnerFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterPartners();
    });
  });

  // Contact Form Submission
  const rfqForm = document.getElementById('rfqForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', handleRFQSubmit);
  }

  // Calculator Form
  const calcForm = document.getElementById('calcForm');
  if (calcForm) {
    calcForm.addEventListener('input', calculateFarmRequirement);
  }
}

function filterProducts() {
  const query = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const activeCategory = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';

  const filtered = PRODUCTS.filter(prod => {
    const matchesSearch = prod.title.toLowerCase().includes(query) || 
                          prod.composition.toLowerCase().includes(query) ||
                          prod.description.toLowerCase().includes(query) ||
                          (prod.speciesTags && prod.speciesTags.some(t => t.toLowerCase().includes(query)));
    const matchesCat = activeCategory === 'all' || prod.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  renderProducts(filtered);
}

// Quote Basket State Management
function addToQuote(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = quoteBasket.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    quoteBasket.push({ ...product, quantity: 1 });
  }

  updateQuoteUI();
  showToast(`Added "${product.title}" to Wholesale RFQ List.`);
}

function removeFromQuote(productId) {
  quoteBasket = quoteBasket.filter(item => item.id !== productId);
  updateQuoteUI();
}

function updateQuoteUI() {
  const badgeCount = document.getElementById('quoteBadgeCount');
  const drawerList = document.getElementById('drawerQuoteList');
  const totalCount = quoteBasket.reduce((sum, item) => sum + item.quantity, 0);

  if (badgeCount) badgeCount.textContent = totalCount;

  if (drawerList) {
    if (quoteBasket.length === 0) {
      drawerList.innerHTML = `
        <div style="text-align: center; padding: 3.5rem 1rem; color: var(--text-body);">
          <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 0.75rem; color: var(--slate-400);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <p style="font-weight: 600; color: var(--text-heading);">Your wholesale inquiry list is empty</p>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Browse products or gloves and click "Add to RFQ" to build a consolidated inquiry for Chetan Shah.</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = quoteBasket.map(item => `
        <div class="drawer-item">
          <div>
            <div class="drawer-item-title">${item.title}</div>
            <div class="drawer-item-sub">Packing: ${item.packing}</div>
            <div style="font-size: 0.8rem; color: var(--stc-red); font-weight: 600; margin-top: 0.2rem;">Qty: ${item.quantity} units (${item.moq})</div>
          </div>
          <button style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.4rem;" onclick="removeFromQuote('${item.id}')" title="Remove Item">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `).join('');
    }
  }
}

// Drawer Toggle
function toggleQuoteDrawer(open) {
  const overlay = document.getElementById('drawerOverlay');
  const drawer = document.getElementById('quoteDrawer');
  if (!overlay || !drawer) return;

  if (open) {
    overlay.classList.add('active');
    drawer.classList.add('active');
  } else {
    overlay.classList.remove('active');
    drawer.classList.remove('active');
  }
}

// WhatsApp RFQ Generation to Mr. Chetan Shah
function sendWhatsAppRFQ() {
  if (quoteBasket.length === 0) {
    showToast('Please add products to your inquiry quote first.');
    return;
  }

  let text = `*WHOLESALE RFQ - SHREEJEE TRADING CORPORATION*\n`;
  text += `Attn: Mr. Chetan Shah (+91 9376168779)\n`;
  text += `Registered Office: Hiramoti Chambers, Khadia, Ahmedabad\n`;
  text += `-------------------------------------------\n`;
  text += `Hello Mr. Shah, I would like to request wholesale dealer pricing for:\n\n`;

  quoteBasket.forEach((item, idx) => {
    text += `${idx + 1}. *${item.title}*\n`;
    text += `   - Quantity Required: ${item.quantity} unit(s)\n`;
    text += `   - Packaging: ${item.packing}\n\n`;
  });

  text += `Please share bulk dealer rates, GST invoice details, and transport dispatch schedule.\nThank you!`;

  const phone = '919376168779'; // Proprietor Chetan Shah
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Multi-Tab Farm Requirement & Dosage Estimator
function switchCalcTab(tab) {
  currentCalcTab = tab;
  const tabBtns = document.querySelectorAll('.calc-tab-btn');
  tabBtns.forEach(b => {
    if (b.dataset.tab === tab) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  // Toggle visible form controls
  const poultryGroup = document.getElementById('poultryCalcGroup');
  const livestockGroup = document.getElementById('livestockCalcGroup');
  const glovesGroup = document.getElementById('glovesCalcGroup');

  if (poultryGroup) poultryGroup.style.display = tab === 'poultry' ? 'block' : 'none';
  if (livestockGroup) livestockGroup.style.display = tab === 'livestock' ? 'block' : 'none';
  if (glovesGroup) glovesGroup.style.display = tab === 'gloves' ? 'block' : 'none';

  calculateFarmRequirement();
}

function calculateFarmRequirement() {
  const resVol = document.getElementById('resVolume');
  const resPacks = document.getElementById('resPacks');
  const resNote = document.getElementById('resNote');
  if (!resVol || !resPacks) return;

  if (currentCalcTab === 'poultry') {
    const birds = parseInt(document.getElementById('calcPoultryBirds')?.value) || 5000;
    const days = parseInt(document.getElementById('calcPoultryDays')?.value) || 5;
    const type = document.getElementById('calcPoultryType')?.value || 'tonic';

    let liters = 0;
    let packs = 0;
    if (type === 'tonic') {
      liters = ((birds / 100) * 15 * days) / 1000;
      packs = Math.ceil(liters / 5);
      resVol.textContent = `${liters.toFixed(1)} Litres (Water Tonic)`;
      resPacks.textContent = `${packs} Can(s) (5L Bulk Wholesale Can)`;
      if (resNote) resNote.textContent = `*Recommended for ${birds.toLocaleString()} poultry birds over ${days} consecutive days of drinking water treatment.`;
    } else if (type === 'calcium') {
      liters = ((birds / 100) * 20 * days) / 1000;
      packs = Math.ceil(liters / 5);
      resVol.textContent = `${liters.toFixed(1)} Litres (Liquid Calcium)`;
      resPacks.textContent = `${packs} Can(s) (5L Bulk Wholesale Can)`;
      if (resNote) resNote.textContent = `*Helps strengthen eggshells and prevent leg weakness in ${birds.toLocaleString()} layers.`;
    } else if (type === 'disinfectant') {
      liters = Math.max(1, Math.ceil((birds / 2000) * 2));
      packs = Math.ceil(liters / 5);
      resVol.textContent = `${liters.toFixed(1)} Litres (5th Gen Disinfectant)`;
      resPacks.textContent = `${packs} Can(s) (5L Bulk Canister)`;
      if (resNote) resNote.textContent = `*Standard aerial fogging and biosecurity surface spray volume for poultry shed.`;
    }
  } else if (currentCalcTab === 'livestock') {
    const cattle = parseInt(document.getElementById('calcCattleCount')?.value) || 50;
    const days = parseInt(document.getElementById('calcCattleDays')?.value) || 30;
    const type = document.getElementById('calcCattleType')?.value || 'calcium';

    if (type === 'calcium') {
      const liters = (cattle * 0.1 * days); // 100ml per dairy cow daily
      const drums = Math.ceil(liters / 20);
      resVol.textContent = `${liters.toFixed(0)} Litres (CalciMax Forte)`;
      resPacks.textContent = `${drums} Drum(s) (20L Commercial Drum)`;
      if (resNote) resNote.textContent = `*Based on daily 100ml liquid calcium intake per dairy animal for high milk yield.`;
    } else {
      const kg = (cattle * 0.05 * days); // 50g mineral supplement per cow daily
      const bags = Math.ceil(kg / 25);
      resVol.textContent = `${kg.toFixed(0)} kg (Mineral Powder)`;
      resPacks.textContent = `${bags} Bag(s) (25kg Laminated Bag)`;
      if (resNote) resNote.textContent = `*Essential trace minerals to boost cattle fertility and herd immunity.`;
    }
  } else if (currentCalcTab === 'gloves') {
    const dailyExams = parseInt(document.getElementById('calcGlovesExams')?.value) || 40;
    const workDays = parseInt(document.getElementById('calcGlovesDays')?.value) || 25;
    const type = document.getElementById('calcGlovesType')?.value || 'latex';

    const totalPairs = dailyExams * workDays;
    const totalGloves = totalPairs * 2;
    const boxes = Math.ceil(totalGloves / 100);
    const cartons = (boxes / 10).toFixed(1);

    resVol.textContent = `${totalPairs.toLocaleString()} Pairs (${totalGloves.toLocaleString()} Gloves)`;
    resPacks.textContent = `${boxes} Box(es) (approx. ${cartons} Master Cartons)`;
    if (resNote) resNote.textContent = `*Hygienic single-use examination glove requirement for clinic/farm staff over ${workDays} working days.`;
  }
}

// Handle Direct RFQ Form Submission
function handleRFQSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('rfqName')?.value || '';
  const phone = document.getElementById('rfqPhone')?.value || '';
  const location = document.getElementById('rfqLocation')?.value || '';
  const message = document.getElementById('rfqMessage')?.value || '';

  let text = `*NEW WEBSITE INQUIRY - SHREEJEE TRADING CORPORATION*\n`;
  text += `Attn: Mr. Chetan Shah (+91 9376168779)\n`;
  text += `Registered Office: Hiramoti Chambers, Khadia, Ahmedabad\n`;
  text += `-------------------------------------------\n`;
  text += `Name/Firm: ${name}\nPhone (WhatsApp): ${phone}\nCity/District: ${location}\n\n`;
  text += `Inquiry Details / Products Required:\n${message}`;

  const url = `https://wa.me/919376168779?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');

  showToast('Inquiry routed to Mr. Chetan Shah via WhatsApp!');
  if (e.target && typeof e.target.reset === 'function') e.target.reset();
}

// Toast Notification
function showToast(msg) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" fill="none" stroke="#d90429" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3800);
}

// Animated Counter on Scroll for Statistics
function setupStatsAnimation() {
  const statsSection = document.querySelector('.stats-banner');
  if (!statsSection) return;

  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(el => {
          const target = parseInt(el.getAttribute('data-target')) || 0;
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          animateNumber(el, 0, target, 1800, prefix, suffix);
        });
      }
    });
  }, { threshold: 0.25 });

  observer.observe(statsSection);
}

function animateNumber(element, start, end, duration, prefix = '', suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
    const currentVal = Math.floor(easeProgress * (end - start) + start);
    element.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = `${prefix}${end.toLocaleString()}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

// Scroll Effects for Navbar & Smooth Navigation
function setupScrollEffects() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
}

// Print / Download Wholesale Catalog Helper
function triggerCatalogPrint() {
  showToast('Preparing printable 2026 Wholesale Product Guide...');
  setTimeout(() => {
    window.print();
  }, 600);
}

// 21 Industry Partners & Brand Portfolio Dataset
const PARTNER_COMPANIES = [
  {
    id: 1,
    name: "Virbac Animal Health India Private Limited",
    website: "https://in.virbac.com/home",
    category: "pharma",
    categoryLabel: "Pharma & Antibiotics",
    description: "Global leader in veterinary dermatology, livestock therapeutics, antibiotics, and nutritional supplements."
  },
  {
    id: 2,
    name: "Ayurvet Limited",
    website: "https://www.ayurvet.com/",
    category: "ayurvedic",
    categoryLabel: "Natural & Ayurvedic",
    description: "Pioneering scientifically validated herbal and ayurvedic healthcare solutions for livestock and poultry."
  },
  {
    id: 3,
    name: "Indovax Private Limited",
    website: "https://indovax.com/",
    category: "vaccines",
    categoryLabel: "Vaccines & Biologics",
    description: "Premier Indian manufacturer of poultry and veterinary biologicals, SPF egg vaccines, and herd immunizations."
  },
  {
    id: 4,
    name: "Provimi Animal Nutrition India Limited",
    website: "https://www.provimi.in/",
    category: "nutrition",
    categoryLabel: "Nutrition & Feed",
    description: "World-class animal nutrition premixes, concentrates, and specialized feed additives for high yield."
  },
  {
    id: 5,
    name: "Simfa Labs Pvt Ltd",
    website: "https://vetlineindia.com/",
    category: "pharma",
    categoryLabel: "Pharma & Diagnostics",
    description: "Specialized veterinary pharmaceutical formulations, injectable antimicrobials, and diagnostic care."
  },
  {
    id: 6,
    name: "Varsha Multi Tech",
    website: "https://varshagroup.com/",
    category: "pharma",
    categoryLabel: "Pharma & Biosecurity",
    description: "Comprehensive poultry healthcare, farm sanitation, acidifiers, and bio-secure disinfectants."
  },
  {
    id: 7,
    name: "Varsha Lab",
    website: "https://varshagroup.com/",
    category: "diagnostics",
    categoryLabel: "Diagnostics & Labs",
    description: "Advanced poultry disease diagnostic reagents, ELISA kits, serology reagents, and rapid farm PCR testing."
  },
  {
    id: 8,
    name: "Vetoquinol India Animal Health",
    website: "https://www.vetoquinol.in/",
    category: "pharma",
    categoryLabel: "Pharma & Antibiotics",
    description: "International veterinary pharmaceutical specialist in anti-infectives, mastitis management, and pain relief."
  },
  {
    id: 9,
    name: "Elanco India (Bayer Animal Health)",
    website: "https://www.elanco.com/",
    category: "pharma",
    categoryLabel: "Pharma & Parasiticides",
    description: "Global animal healthcare innovator in ecto-endoparasiticides, poultry therapeutics, and herd health."
  },
  {
    id: 10,
    name: "Micro Labs Ltd (Veterinary Division)",
    website: "https://www.microlabsltd.com/",
    category: "pharma",
    categoryLabel: "Pharma & Antibiotics",
    description: "WHO-GMP certified pharmaceutical giant offering dedicated veterinary antimicrobials and anti-inflammatory care."
  },
  {
    id: 11,
    name: "Venky’s (India) Limited",
    website: "https://venkys.com/",
    category: "nutrition",
    categoryLabel: "Nutrition & Poultry",
    description: "Asia's largest poultry breeder, hatchery equipment, feed supplements, and poultry healthcare enterprise."
  },
  {
    id: 12,
    name: "Ventri Biologicals",
    website: "https://venkys.com/",
    category: "vaccines",
    categoryLabel: "Vaccines & Biologics",
    description: "Specific Pathogen Free (SPF) vaccines and viral biologicals protecting commercial poultry and livestock."
  },
  {
    id: 13,
    name: "Vetina Healthcare LLP",
    website: "https://vetina.com/",
    category: "pharma",
    categoryLabel: "Pharma & Nutraceuticals",
    description: "Companion animal and livestock healthcare therapeutics, skin formulations, and dietary nutraceuticals."
  },
  {
    id: 14,
    name: "Intron Life Sciences Private Limited",
    website: "https://www.intronlifesciences.com/",
    category: "nutrition",
    categoryLabel: "Nutrition & Biotechnology",
    description: "Probiotics, prebiotics, and advanced biotechnology feed additives for poultry and aquaculture health."
  },
  {
    id: 15,
    name: "Polchem (Ceva Polchem)",
    website: "https://www.cevapolchem.in/",
    category: "pharma",
    categoryLabel: "Pharma & Biosecurity",
    description: "Ceva Polchem poultry therapeutics, hatchery sanitizers, water treatment, and respiratory tonics."
  },
  {
    id: 16,
    name: "Cadila Pharmaceuticals (Veterinary)",
    website: "https://www.cadilapharma.com/",
    category: "pharma",
    categoryLabel: "Pharma & Antibiotics",
    description: "One of India's largest privately held pharma giants with robust veterinary formulations and injectables."
  },
  {
    id: 17,
    name: "nuvoCare Biocorp",
    website: "http://www.nuvocarebiocorp.com/",
    category: "nutrition",
    categoryLabel: "Nutrition & Feed",
    description: "Bio-innovative feed supplements, liver tonics, electrolyte boosters, and toxin binders for poultry."
  },
  {
    id: 18,
    name: "Lemmens Shardlow",
    website: "https://www.lemmensshardlow.com/",
    category: "nutrition",
    categoryLabel: "Poultry Automation & Care",
    description: "Specialized poultry farm automation, commercial incubation, climate control, and biosecurity solutions."
  },
  {
    id: 19,
    name: "Natural Remedies",
    website: "https://www.naturalremedy.com/",
    category: "ayurvedic",
    categoryLabel: "Natural & Ayurvedic",
    description: "India's #1 scientifically validated herbal and botanical veterinary medicine brand for livestock productivity."
  },
  {
    id: 20,
    name: "Zydus Animal Health",
    website: "https://www.zyduslife.com/",
    category: "pharma",
    categoryLabel: "Pharma & Antibiotics",
    description: "Zydus Animal Health division offering comprehensive cattle, poultry, and equine therapeutics."
  },
  {
    id: 21,
    name: "Zuri Life Science",
    website: "https://zurilifesciences.com/",
    category: "pharma",
    categoryLabel: "Pharma & Supplements",
    description: "Emerging veterinary pharmaceutical formulation and high-efficacy nutritional supplement brand."
  }
];

// Render Continuous Partner Marquee Ticker
function renderPartnerMarquee(partnersList) {
  const track1 = document.getElementById('marqueeTrack1');
  const track2 = document.getElementById('marqueeTrack2');
  if (!track1 || !track2) return;

  const pillsHtml = partnersList.map(p => `
    <span class="marquee-pill">
      <span class="marquee-pill-dot"></span>
      ${p.name}
    </span>
  `).join('');

  track1.innerHTML = pillsHtml;
  track2.innerHTML = pillsHtml; // Duplicate for seamless infinite loop
}

// Render Partner Companies Grid
function renderPartners(partnersList) {
  const container = document.getElementById('partnersGridContainer');
  const counterEl = document.getElementById('partnersCountBadge');
  if (!container) return;

  if (counterEl) {
    counterEl.textContent = `${partnersList.length} Partner Brands`;
  }

  if (partnersList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; background: var(--card-bg); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <h3 style="color: var(--text-heading); font-size: 1.25rem; margin-bottom: 0.4rem;">No partner companies matched your filter</h3>
        <p style="color: var(--text-body); font-size: 0.9rem;">Try searching for a different brand name or reset category filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = partnersList.map(p => `
    <div class="partner-card" data-category="${p.category}">
      <div>
        <div class="partner-card-header">
          <span class="partner-index-badge">#${p.id}</span>
          <span class="partner-category-pill">${p.categoryLabel}</span>
        </div>
        <div class="partner-card-body" style="margin-top: 1rem;">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
        </div>
      </div>
      <div class="partner-card-footer">
        <a href="${p.website !== '#' ? p.website : 'https://www.google.com/search?q=' + encodeURIComponent(p.name)}" target="_blank" rel="noopener noreferrer" class="partner-web-link">
          Official Site
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
        <button class="partner-btn-inquire" onclick="inquireBrandWhatsApp('${p.name}')">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          Inquire Stock
        </button>
      </div>
    </div>
  `).join('');
}

// Filter Partners by Search Query and Category Pill
function filterPartners() {
  const query = document.getElementById('partnerSearchInput')?.value.toLowerCase() || '';
  const activeCategory = document.querySelector('.partner-filter-btn.active')?.dataset.filter || 'all';

  const filtered = PARTNER_COMPANIES.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(query) || 
                          p.description.toLowerCase().includes(query) ||
                          p.categoryLabel.toLowerCase().includes(query);
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  renderPartners(filtered);
}

// Route Brand Inquiry via WhatsApp to Chetan Shah
function inquireBrandWhatsApp(brandName) {
  let text = `*PARTNER BRAND WHOLESALE INQUIRY*\n`;
  text += `Attn: Mr. Chetan Shah (+91 9376168779)\n`;
  text += `Shreejee Trading Corporation (Hiramoti Chambers, Ahmedabad)\n`;
  text += `-------------------------------------------\n`;
  text += `Hello Mr. Shah, I am interested in wholesale dealership / bulk availability for products from *${brandName}*.\n\n`;
  text += `Please share current stock list, dealer pricing, and dispatch terms. Thank you!`;

  const phone = '919376168779';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
