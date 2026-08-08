/* ==========================================================================
   Shreejee Trading Corporation (STC) - Modern Application Logic
   Proprietor: Chetan Shah
   Office Phone: (079) 22146549 | Mobile/WhatsApp: +91 9376168779
   Email: crshah2@yahoo.com
   Address: 15, 2nd Floor, Hiramoti Chambers, Glowad, Khadia, Ahmedabad-380001
   ========================================================================== */

// Rich B2B Wholesale Product Dataset
const PRODUCTS = [
  // VIRBAC
  {
    id: 'prod-virbac-1', brand: 'Virbac', title: 'Ostovet Liquid', composition: 'Calcium, Phosphorus, Vitamin D3, Vitamin B12', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'High Yield', packing: '1L / 5L / 20L', moq: '20L Drum', storage: 'Store in cool, dark place', target: 'Cattle, Poultry', dosage: 'Cattle: 100ml/day | Poultry: 20-50ml/100 birds', indications: 'Enhances milk production, prevents egg shell defects.', speciesTags: ['Dairy Cattle', 'Layer Birds'], description: 'Premium liquid calcium supplement enriched with essential vitamins for optimal bone health and high lactation yield.', technicalSpecs: 'High bioavailability chelated minerals.'
  },
  {
    id: 'prod-virbac-2', brand: 'Virbac', title: 'Vimeral Liquid', composition: 'Vitamin A, D3, E, B12', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Stress Relief', packing: '120ml / 500ml / 1L', moq: '10 x 1L Bottles', storage: 'Store below 25°C', target: 'Livestock, Poultry', dosage: 'Poultry: 5ml/100 birds | Cattle: 10ml/day', indications: 'Removes stress, improves growth and hatchability.', speciesTags: ['Broiler Poultry', 'Dairy Cattle'], description: 'Highly concentrated anti-stress liquid vitamin supplement for maintaining optimum health and productivity.', technicalSpecs: 'Stable aqueous formulation for easy mixing in water.'
  },
  {
    id: 'prod-virbac-3', brand: 'Virbac', title: 'Brotone Liver Tonic', composition: 'Liver extract, Yeast extract, Nicotinic Acid', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Liver Care', packing: '500ml / 1L / 5L', moq: '10 x 1L Bottles', storage: 'Store in cool dry place', target: 'Poultry, Swine, Cattle', dosage: 'Poultry: 10-20ml/100 birds', indications: 'Hepatic dysfunction, anorexia, convalescence.', speciesTags: ['Broiler Flocks', 'Cattle', 'Swine'], description: 'Trusted liver tonic and appetite stimulant for restoring hepatic functions and improving FCR.', technicalSpecs: 'Contains vital B-complex factors.'
  },
  {
    id: 'prod-virbac-4', brand: 'Virbac', title: 'Lixen Powder', composition: 'Cephalexin IP 7.5% w/w', category: 'poultry', categoryName: 'Poultry Medicine & Antibiotics', badge: 'Broad Spectrum', packing: '20g / 100g Sachet', moq: '50 x 100g', storage: 'Store below 30°C', target: 'Poultry', dosage: '1g / Liter of drinking water for 3-5 days', indications: 'CRD, Colisepticemia, Coryza, Fowl Cholera.', speciesTags: ['Poultry Flocks'], description: 'First generation cephalosporin antibiotic for potent action against gram-positive and gram-negative pathogens.', technicalSpecs: 'Water soluble powder.'
  },
  {
    id: 'prod-virbac-5', brand: 'Virbac', title: 'Toxiroak Gold', composition: 'HSCAS, MOS, Organic Acids, Copper Sulfate', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Toxin Binder', packing: '25kg Bag', moq: '10 x 25kg (250kg)', storage: 'Dry warehouse', target: 'Poultry Feed', dosage: '1-2kg per Ton of feed', indications: 'Mycotoxicosis, Aflatoxin contamination.', speciesTags: ['Feed Manufacturers', 'Commercial Poultry'], description: 'Broad-spectrum mycotoxin binder that adsorbs multiple toxins and prevents immunosuppression.', technicalSpecs: 'Irreversible binding capacity.'
  },
  // AYURVET
  {
    id: 'prod-ayurvet-1', brand: 'Ayurvet', title: 'Ruchamax Powder', composition: 'Herbal digestive stimulants', category: 'supplements', categoryName: 'Natural & Ayurvedic', badge: 'Appetite Pro', packing: '15g sachet / 1kg Pouch', moq: '20 x 1kg', storage: 'Keep in dry place', target: 'Cattle, Sheep, Goat', dosage: 'Cattle: 15g twice daily', indications: 'Anorexia, Indigestion, Dyspepsia.', speciesTags: ['Dairy Cattle', 'Small Ruminants'], description: 'Polyherbal stomachic and digestive tonic that restores rumen microflora and appetite naturally.', technicalSpecs: 'Zero withdrawal period.'
  },
  {
    id: 'prod-ayurvet-2', brand: 'Ayurvet', title: 'Payapro Tablets', composition: 'Leptadenia reticulata, Asparagus racemosus', category: 'supplements', categoryName: 'Natural & Ayurvedic', badge: 'Galactagogue', packing: 'Strip of 10 Tablets / Box of 100', moq: '10 Boxes', storage: 'Room temperature', target: 'Dairy Cattle', dosage: '3-4 tablets twice daily', indications: 'Hypogalactia, irregular lactation drops.', speciesTags: ['Dairy Cattle'], description: 'Herbal galactagogue that naturally stimulates milk let-down and increases overall milk yield.', technicalSpecs: '100% herbal active ingredients.'
  },
  {
    id: 'prod-ayurvet-3', brand: 'Ayurvet', title: 'Exapar Liquid', composition: 'Plumbago zeylanica, Aloe barbadensis', category: 'supplements', categoryName: 'Natural & Ayurvedic', badge: 'Uterine Cleanser', packing: '500ml / 1L', moq: '10 x 1L', storage: 'Cool dry place', target: 'Cattle, Buffalo', dosage: '100ml twice on first day, then 50ml daily', indications: 'Retained placenta, delayed involution of uterus.', speciesTags: ['Dairy Cattle'], description: 'Potent uterine ecbolic and cleanser to prevent post-partum complications and infections.', technicalSpecs: 'Ensures timely involution.'
  },
  {
    id: 'prod-ayurvet-4', brand: 'Ayurvet', title: 'Restobal Liquid', composition: 'Withania somnifera, Ocimum sanctum', category: 'supplements', categoryName: 'Natural & Ayurvedic', badge: 'Adaptogen', packing: '1L / 5L', moq: '5 x 5L', storage: 'Store below 25°C', target: 'Poultry', dosage: '10-20ml / 100 birds in water', indications: 'Heat stress, vaccination stress, handling stress.', speciesTags: ['Broiler Poultry', 'Layer Birds'], description: 'Herbal anti-stress, adaptogenic and immunomodulatory tonic for flock stability during environmental stress.', technicalSpecs: 'Reduces serum cortisol levels naturally.'
  },
  // VETOQUINOL
  {
    id: 'prod-veto-1', brand: 'Vetoquinol', title: 'Meriquin 10% Oral Solution', composition: 'Enrofloxacin 100mg/ml', category: 'poultry', categoryName: 'Poultry Medicine & Antibiotics', badge: 'Fast Acting', packing: '1L / 5L Can', moq: '10 x 1L', storage: 'Protect from light', target: 'Poultry', dosage: '10mg/kg body weight for 3-5 days', indications: 'CRD, Colibacillosis, Fowl Cholera, Coryza.', speciesTags: ['Broiler Flocks', 'Layer Birds'], description: 'Broad-spectrum fluoroquinolone antibiotic for rapid control of severe systemic and respiratory infections.', technicalSpecs: 'High tissue concentration within 2 hours.'
  },
  {
    id: 'prod-veto-2', brand: 'Vetoquinol', title: 'Toxi-Flush', composition: 'Sorbitol, Carnitine, Betaine, MgSO4', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Kidney Flush', packing: '1L / 5L', moq: '10 x 1L', storage: 'Room temp', target: 'Poultry', dosage: '10-20ml/100 birds', indications: 'Gout, nephrosis, post-antibiotic flush.', speciesTags: ['Broiler Flocks', 'Layer Birds'], description: 'Osmotic diuretic and metabolic stimulant that flushes kidney urates and revitalizes organ function.', technicalSpecs: 'Liquid water soluble.'
  },
  {
    id: 'prod-veto-3', brand: 'Vetoquinol', title: 'Cephacare 500mg Tablets', composition: 'Cephalexin 500mg', category: 'poultry', categoryName: 'Veterinary Medicine', badge: 'Essential', packing: 'Strip of 10 / Box of 100', moq: '10 Boxes', storage: 'Below 25°C', target: 'Dogs, Cats', dosage: '15mg/kg twice daily', indications: 'Pyoderma, urinary tract infections, respiratory infections.', speciesTags: ['Canine', 'Feline', 'Clinic'], description: 'First generation cephalosporin for veterinary clinical use against susceptible Staphylococcus.', technicalSpecs: 'Scored tablets for easy dosing.'
  },
  // VENKYS
  {
    id: 'prod-venkys-1', brand: 'Venkys', title: 'Groviplex Liquid', composition: 'B-Complex Vitamins with Amino Acids', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Growth Promoter', packing: '1L / 5L / 30L', moq: '1 x 30L Drum', storage: 'Store in dark place', target: 'Poultry', dosage: '10-20ml/100 birds daily', indications: 'B-complex deficiency, stunted growth, poor feathering.', speciesTags: ['Broiler Poultry', 'Layer Birds'], description: 'Comprehensive B-Complex formulation enriched with essential amino acids to boost metabolism and weight gain.', technicalSpecs: 'Highly palatable.'
  },
  {
    id: 'prod-venkys-2', brand: 'Venkys', title: 'Ventri-Nutri Powder', composition: 'Multivitamins, Trace Minerals, Probiotics', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Complete Premix', packing: '1kg Pouch / 25kg Bag', moq: '5 x 25kg', storage: 'Dry cool place', target: 'Poultry Feed', dosage: '2.5kg per ton of feed', indications: 'Nutritional deficiency, poor FCR, drop in egg production.', speciesTags: ['Feed Manufacturers', 'Layer Birds'], description: 'Complete vitamin and mineral feed premix for commercial poultry rations.', technicalSpecs: 'Micro-encapsulated vitamins for zero loss during pelleting.'
  },
  {
    id: 'prod-venkys-3', brand: 'Venkys', title: 'Vencomycin 10%', composition: 'Lincomycin 100g/kg', category: 'poultry', categoryName: 'Poultry Medicine & Antibiotics', badge: 'Necrotic Enteritis', packing: '1kg Jar', moq: '10 x 1kg', storage: 'Dry place', target: 'Poultry', dosage: '2-4g / liter water', indications: 'Necrotic Enteritis caused by Clostridium perfringens.', speciesTags: ['Broiler Flocks'], description: 'Macrolide antibiotic highly effective against gut pathogens and anaerobic bacteria.', technicalSpecs: 'Zero residue after 48h withdrawal.'
  },
  // INDOVAX
  {
    id: 'prod-indovax-1', brand: 'Indovax', title: 'ND LaSota Live Vaccine', composition: 'Lentogenic LaSota strain of ND Virus', category: 'vaccines', categoryName: 'Vaccines & Biosecurity', badge: 'Cold Chain', packing: '1000 / 2000 Doses Vial', moq: '100 Vials', storage: 'Strictly 2°C to 8°C', target: 'Poultry', dosage: '1 drop per bird intraocular or via drinking water', indications: 'Prevention of Newcastle Disease.', speciesTags: ['Broiler Flocks', 'Layer Pullets'], description: 'Live attenuated freeze-dried vaccine for boosting immunity against Newcastle Disease in growing birds.', technicalSpecs: 'CEF origin, SPF tested.'
  },
  {
    id: 'prod-indovax-2', brand: 'Indovax', title: 'IB H120 Live Vaccine', composition: 'Mass type H120 strain of IB Virus', category: 'vaccines', categoryName: 'Vaccines & Biosecurity', badge: 'Cold Chain', packing: '1000 / 2000 Doses Vial', moq: '100 Vials', storage: 'Strictly 2°C to 8°C', target: 'Poultry', dosage: 'Intraocular or drinking water', indications: 'Prevention of Infectious Bronchitis.', speciesTags: ['Day-Old Chicks', 'Broiler Flocks'], description: 'Live vaccine offering robust respiratory mucosal immunity against Massachusetts serotype of IB.', technicalSpecs: 'Given at 1-7 days of age.'
  },
  {
    id: 'prod-indovax-3', brand: 'Indovax', title: 'Fowl Pox Live Vaccine', composition: 'Pigeon Pox Virus Strain', category: 'vaccines', categoryName: 'Vaccines & Biosecurity', badge: 'Cold Chain', packing: '1000 Doses Vial with Diluent', moq: '50 Vials', storage: '2°C to 8°C', target: 'Poultry', dosage: 'Wing web puncture', indications: 'Prevention of Fowl Pox.', speciesTags: ['Layer Pullets', 'Breeder Flocks'], description: 'Lyophilized live vaccine for enduring immunity against fowl pox outbreaks in long-living birds.', technicalSpecs: 'Supplied with double-needle applicator.'
  },
  // MICRO LABS
  {
    id: 'prod-micro-1', brand: 'Micro Labs', title: 'Melonex Injection', composition: 'Meloxicam 5mg/ml', category: 'poultry', categoryName: 'Veterinary Medicine', badge: 'NSAID', packing: '30ml / 100ml Vial', moq: '50 Vials', storage: 'Protect from light', target: 'Cattle, Sheep, Pig', dosage: '0.5mg/kg body weight IM/IV', indications: 'Pneumonia, Mastitis, Prolapse pain management.', speciesTags: ['Dairy Cattle', 'Swine'], description: 'Potent non-steroidal anti-inflammatory drug (NSAID) for rapid pain relief and fever reduction.', technicalSpecs: 'Preferential COX-2 inhibitor.'
  },
  {
    id: 'prod-micro-2', brand: 'Micro Labs', title: 'Amoxyrum Forte Injection', composition: 'Amoxicillin 3g + Sulbactam 1.5g', category: 'poultry', categoryName: 'Veterinary Medicine', badge: 'Beta-Lactamase Resistant', packing: '4.5g Vial with sterile water', moq: '20 Vials', storage: 'Cool dry place', target: 'Cattle, Buffalo', dosage: '7-10mg/kg body weight IM', indications: 'Severe mastitis, metritis, respiratory infections.', speciesTags: ['Dairy Cattle'], description: 'Synergistic combination of broad-spectrum antibiotic and beta-lactamase inhibitor for resistant infections.', technicalSpecs: 'Requires reconstitution before use.'
  },
  // VARSHA
  {
    id: 'prod-varsha-1', brand: 'Varsha', title: 'Varsha M-Vit Powder', composition: 'Vitamins & Chelated Trace Minerals', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Trace Minerals', packing: '1kg / 5kg', moq: '10 x 1kg', storage: 'Room temp', target: 'Poultry, Cattle', dosage: 'Poultry: 1kg/ton | Cattle: 30g/day', indications: 'Mineral deficiency, poor immunity, infertility.', speciesTags: ['Broiler Flocks', 'Dairy Cattle'], description: 'High bioavailability chelated mineral mixture to support enzymatic functions and reproductive health.', technicalSpecs: 'Contains Zinc, Copper, Manganese, Iron, Selenium.'
  },
  {
    id: 'prod-varsha-2', brand: 'Varsha', title: 'Varsha Electrolyte C', composition: 'Electrolytes with Vitamin C', category: 'supplements', categoryName: 'Feed Supplements & Minerals', badge: 'Rehydration', packing: '1kg Pouch', moq: '20 Pouches', storage: 'Airtight container', target: 'Poultry', dosage: '1g / Liter water', indications: 'Summer stress, loose droppings, dehydration.', speciesTags: ['Poultry Flocks'], description: 'Instant energy and rehydration formula for combating severe heat stress and restoring fluid balance.', technicalSpecs: 'High solubility.'
  },
  // MISC/GENERAL
  {
    id: 'prod-stc-1', brand: 'STC Supply', title: 'Examination Latex Gloves', composition: '100% Pure Latex', category: 'gloves', categoryName: 'Disposable Gloves & Safety', badge: 'Essential', packing: 'Box of 100', moq: '10 Boxes', storage: 'Below 30°C', target: 'Veterinary Clinics, Farms', dosage: 'Single use', indications: 'Biosecurity, clinical exams.', speciesTags: ['Veterinary Clinic', 'Farm Biosecurity'], description: 'High-quality powder-free latex gloves for reliable pathogen barrier protection.', technicalSpecs: 'AQL 1.5'
  },
  {
    id: 'prod-stc-2', brand: 'STC Supply', title: 'Nitrile Heavy-Duty Gloves', composition: 'Synthetic Nitrile Rubber', category: 'gloves', categoryName: 'Disposable Gloves & Safety', badge: 'Chemical Safe', packing: 'Box of 100', moq: '10 Boxes', storage: 'Dry place', target: 'Hatchery, Disinfection Teams', dosage: 'Single use', indications: 'Handling chemical sanitizers, vaccines.', speciesTags: ['Poultry Hatchery'], description: 'Puncture-resistant nitrile gloves offering superior chemical protection.', technicalSpecs: '6 mil thickness.'
  }
];

// Application State
let quoteBasket = JSON.parse(localStorage.getItem('stc_quote_basket') || '[]');
let currentCalcTab = 'poultry';
let activeSpeciesFilter = 'all';
let activeSort = 'default';

const CATEGORY_IMAGES = {
  poultry: 'assets/poultry_supplements.jpg',
  gloves: 'assets/hero_banner.jpg',
  supplements: 'assets/poultry_supplements.jpg',
  vaccines: 'assets/vet_vaccines.jpg'
};

const SPECIES_FILTERS = [
  { id: 'all', label: 'All Species' },
  { id: 'poultry', label: 'Poultry' },
  { id: 'cattle', label: 'Cattle & Dairy' },
  { id: 'clinic', label: 'Clinic & Lab' },
  { id: 'hatchery', label: 'Hatchery' }
];

function getPartnerInitials(name) {
  return name.split(/\s+/).filter(w => w.length > 2 && !/^(pvt|ltd|llp|limited|private|india|inc|corp|biologicals|healthcare|lifesciences|lifescience|labs|lab)$/i.test(w))
    .slice(0, 2).map(w => w[0].toUpperCase()).join('') || name.slice(0, 2).toUpperCase();
}

function getCategoryThumbClass(category) {
  return `product-thumb--${category}`;
}

function productMatchesSpecies(prod, species) {
  if (species === 'all') return true;
  const tags = (prod.speciesTags || []).join(' ').toLowerCase();
  const map = {
    poultry: ['poultry', 'broiler', 'layer', 'chick', 'turkey', 'breeder'],
    cattle: ['cattle', 'dairy', 'livestock', 'calves', 'swine', 'ai breeding'],
    clinic: ['clinic', 'veterinary', 'laboratory', 'surgeon', 'diagnostic'],
    hatchery: ['hatchery', 'day-old', 'incubator', 'biosecurity']
  };
  return (map[species] || []).some(kw => tags.includes(kw));
}

function sortProducts(list, sortBy) {
  const sorted = [...list];
  if (sortBy === 'alpha') sorted.sort((a, b) => a.title.localeCompare(b.title));
  else if (sortBy === 'category') sorted.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
  return sorted;
}

function updateCatalogMeta(shown, total) {
  const countEl = document.getElementById('catalogResultsCount');
  if (countEl) countEl.textContent = `Showing ${shown} of ${total} products`;
}

function getActiveFilterCount() {
  let count = 0;
  const cat = document.querySelector('.catalog-filter-btn.active')?.dataset.filter;
  if (cat && cat !== 'all') count++;
  if (activeSpeciesFilter !== 'all') count++;
  const query = document.getElementById('searchInput')?.value.trim();
  if (query) count++;
  return count;
}

function updateFilterBadge() {
  const badge = document.getElementById('activeFilterBadge');
  const count = getActiveFilterCount();
  if (badge) {
    badge.textContent = count ? `${count} filter${count > 1 ? 's' : ''} active` : '';
    badge.style.display = count ? 'inline' : 'none';
  }
}

// DOM Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('stc_theme');
  document.documentElement.removeAttribute('data-theme');
  renderProducts(PRODUCTS);
  renderPartnerMarquee(PARTNER_COMPANIES);
  renderPartners(PARTNER_COMPANIES);
  setupEventListeners();
  setupScrollEffects();
  setupStatsAnimation();
  updateQuoteUI();
  calculateFarmRequirement();
  initScrollRevealObserver();
});

// Category Thumbnail Fallback Helper
function getCategoryFallbackImage(category) {
  if (category === 'vaccines') return 'assets/category-vaccines.jpg';
  if (category === 'gloves') return 'assets/category-gloves.jpg';
  return 'assets/category-supplements.jpg';
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
      <div class="product-body" style="display: flex; flex-direction: column; flex: 1;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            ${prod.brand ? `<span class="brand-badge" style="background: var(--stc-red); color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${prod.brand}</span>` : ''}
            <span class="product-category-tag">${prod.categoryName}</span>
          </div>
          ${prod.badge ? `<span class="product-status-badge" style="color: #10B981; font-size: 0.8rem; font-weight: 600; background: rgba(16, 185, 129, 0.1); padding: 2px 8px; border-radius: 4px;">★ ${prod.badge}</span>` : ''}
        </div>
        <h3 class="product-title">${prod.title}</h3>
        <p class="product-composition">${prod.composition}</p>
        <p class="product-desc-snippet">${prod.description}</p>
        
        <div class="product-meta-grid">
          <div class="meta-item">
            <span class="meta-label">MOQ</span>
            <span class="meta-value">${prod.moq}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Packing</span>
            <span class="meta-value">${prod.packing}</span>
          </div>
        </div>
        
        <div class="product-species-tags">
          ${(prod.speciesTags || []).map(tag => `<span class="species-tag">${tag}</span>`).join('')}
        </div>
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
  const catalogFilterBtns = document.querySelectorAll('.catalog-filter-btn');
  const partnerSearchInput = document.getElementById('partnerSearchInput');
  const partnerFilterBtns = document.querySelectorAll('.partner-filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterProducts();
    });
  }

  const sortFilter = document.getElementById('sortFilter');
  if (sortFilter) {
    sortFilter.addEventListener('change', () => {
      filterProducts();
    });
  }

  catalogFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catalogFilterBtns.forEach(b => b.classList.remove('active'));
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
  const searchInput = document.getElementById('searchInput');
  const sortFilter = document.getElementById('sortFilter');
  if (!document.getElementById('productsContainer')) return;
  const query = searchInput?.value.toLowerCase() || '';
  const activeCategory = document.querySelector('.catalog-filter-btn.active')?.dataset.filter || 'all';
  const sortValue = sortFilter?.value || 'relevance';

  let filtered = PRODUCTS.filter(prod => {
    const matchesSearch = prod.title.toLowerCase().includes(query) || 
                          prod.composition.toLowerCase().includes(query) ||
                          prod.description.toLowerCase().includes(query) ||
                          (prod.speciesTags && prod.speciesTags.some(t => t.toLowerCase().includes(query)));
    const matchesCat = activeCategory === 'all' || prod.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  if (sortValue === 'a-z') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === 'z-a') {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

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
  localStorage.setItem('stc_quote_basket', JSON.stringify(quoteBasket));
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
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Browse products or gloves and click "Add to RFQ" to build a consolidated wholesale inquiry.</p>
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

// WhatsApp RFQ Generation
function sendWhatsAppRFQ() {
  if (quoteBasket.length === 0) {
    showToast('Please add products to your inquiry quote first.');
    return;
  }

  let text = `*WHOLESALE RFQ - SHREEJEE TRADING CORPORATION*\n`;
  text += `Hiramoti Chambers, Khadia, Ahmedabad | Mob: +91 9376168779\n`;
  text += `-------------------------------------------\n`;
  text += `Hello, I would like to request wholesale dealer pricing for:\n\n`;

  quoteBasket.forEach((item, idx) => {
    text += `${idx + 1}. *${item.title}*\n`;
    text += `   - Quantity Required: ${item.quantity} unit(s)\n`;
    text += `   - Packaging: ${item.packing}\n\n`;
  });

  text += `Please share bulk dealer rates, GST invoice details, and transport dispatch schedule.\nThank you!`;

  const phone = '919376168779';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Indian B2B Payment Portal Tab Switcher (PayTM, GPay, PhonePe, Bank NEFT/RTGS)
function switchPaymentTab(tabName) {
  const tabs = document.querySelectorAll('.payment-tab-btn');
  const panels = document.querySelectorAll('.payment-panel');

  tabs.forEach(tab => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  panels.forEach(panel => {
    if (panel.id === `payment-${tabName}`) {
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }
  });
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
      ${p.logoUrl 
        ? `<img src="${p.logoUrl}" alt="${p.name} logo" class="marquee-pill-img">` 
        : `<span class="marquee-pill-logo">${p.name.charAt(0)}</span>`
      }
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

/* ===== PREMIUM VISUAL ENHANCEMENTS ===== */

// Scroll-Reveal Animation via IntersectionObserver
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-reveal').forEach(el => observer.observe(el));

  // Also observe all section headers for fade-in
  document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('animate-reveal');
    observer.observe(el);
  });
})();

// Mouse Spotlight Cursor-Tracking Glow on Product & Partner Cards
(function initSpotlightCards() {
  const cards = document.querySelectorAll('.product-card, .partner-card, .badge-card');
  cards.forEach(card => {
    card.classList.add('spotlight-card');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
})();

// Back-to-Top Button Visibility
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
})();
