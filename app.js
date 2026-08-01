/* ==========================================================================
   Shreejee Trading Corporation - Application Logic
   ========================================================================== */

// Product Dataset
const PRODUCTS = [
  {
    id: 'prod-1',
    title: 'HepatoBoost Liver Tonic',
    composition: 'Tricholine Citrate, Inositol, Biotin & Herbal Extracts',
    category: 'poultry',
    categoryName: 'Poultry Medicine & Tonics',
    badge: 'Bestseller',
    packing: '1 Litre / 5 Litres Can',
    target: 'Broiler & Layer Poultry',
    dosage: '10-20ml per 100 birds daily',
    description: 'Premier liver tonic formulation to boost liver function, enhance feed conversion ratio (FCR), and recover from mycotoxicosis.'
  },
  {
    id: 'prod-2',
    title: 'AmoxiVet 50% Water Soluble Powder',
    composition: 'Amoxicillin Trihydrate IP 50% w/w',
    category: 'poultry',
    categoryName: 'Poultry Medicine & Tonics',
    badge: 'High Potency',
    packing: '100g / 500g Sachet',
    target: 'Poultry & Livestock',
    dosage: '10-20mg per kg body weight in drinking water',
    description: 'Broad-spectrum antibiotic for effective treatment of CRD, Fowl Cholera, E. coli infections, and necrotic enteritis.'
  },
  {
    id: 'prod-3',
    title: 'CalciMax Forte Liquid',
    composition: 'Calcium, Phosphorus, Vitamin D3 & Vitamin B12',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Essential Growth',
    packing: '1L / 5L / 20L Drum',
    target: 'Layer Birds & Cattle',
    dosage: '20ml per 100 layers / 50-100ml for Cattle',
    description: 'High-absorption liquid calcium supplement for strong eggshell quality, preventing thin-shelled eggs and leg weakness in poultry.'
  },
  {
    id: 'prod-4',
    title: 'PoultryVite-C & Electrolyte',
    composition: 'Vitamin C 99%, Sodium Chloride, Potassium Citrate',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Heat Stress Care',
    packing: '1 kg Foil Pouch / 5 kg Bulk',
    target: 'Broiler & Commercial Layer',
    dosage: '1g per 2-4 Litres of water during summer',
    description: 'Anti-stress electrolyte formulation to combat high temperature heat stress, reduce summer mortality, and maintain electrolyte balance.'
  },
  {
    id: 'prod-5',
    title: 'ViruClean 5th Gen Disinfectant',
    composition: 'Didecyl Dimethyl Ammonium Chloride & Glutaraldehyde',
    category: 'vaccines',
    categoryName: 'Vaccines & Biosecurity',
    badge: 'Biosecurity Shield',
    packing: '1L / 5L Canister',
    target: 'Farm Sheds, Equipment & Footbaths',
    dosage: '5ml per Litre water for aerial spray',
    description: 'Hospital-grade broad-spectrum biosecurity disinfectant effective against Newcastle Disease (Ranikhet), Gumboro, Avian Flu, and bacteria.'
  },
  {
    id: 'prod-6',
    title: 'ImmunoVax ND+IB Vaccine',
    composition: 'Live Attenuated Newcastle Disease & Infectious Bronchitis',
    category: 'vaccines',
    categoryName: 'Vaccines & Biosecurity',
    badge: 'Cold Chain Required',
    packing: '1000 Doses / 2000 Doses Vial',
    target: 'Chicks & Layer Flock',
    dosage: '1 drop intraocular / drinking water method',
    description: 'High-titer combined vaccine for early protection against Ranikhet disease and Infectious Bronchitis in young chicks.'
  },
  {
    id: 'prod-7',
    title: 'Tilmicosin 25% Oral Solution',
    composition: 'Tilmicosin Phosphate 250mg/ml',
    category: 'poultry',
    categoryName: 'Poultry Medicine & Tonics',
    badge: 'CRD Specialist',
    packing: '240ml / 1 Litre Bottle',
    target: 'Broilers & Breeders',
    dosage: '15-20mg per kg body weight for 3 consecutive days',
    description: 'Advanced macrolide antibiotic specifically formulated for rapid relief from severe Mycoplasma gallisepticum CRD outbreaks.'
  },
  {
    id: 'prod-8',
    title: 'GutPro Multi-Strain Probiotic',
    composition: 'Lactobacillus, Bacillus subtilis, Saccharomyces boulardii',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Natural Growth',
    packing: '500g / 1 kg Pack',
    target: 'All Poultry & Ruminants',
    dosage: '100g per ton of finished feed',
    description: 'High-CFU direct-fed microbials to optimize intestinal microflora, boost immunity, and improve weight gain naturally.'
  },
  {
    id: 'prod-9',
    title: 'Veterinary Formaldehyde & Reagents',
    composition: 'Formalin 37-40% Pure Grade',
    category: 'reagents',
    categoryName: 'Veterinary Reagents & Supplies',
    badge: 'Fumigation Grade',
    packing: '35 kg Carboy / 200 kg Drum',
    target: 'Hatchery & Farm Shed Fumigation',
    dosage: 'As per hatchery fumigation protocol',
    description: 'Pure industrial formalin for hatchery disinfection, egg fumigation, and laboratory specimen preservation.'
  },
  {
    id: 'prod-10',
    title: 'ToxBind Triple Action Mycotoxin Binder',
    composition: 'HSCAS, Organic Acids, Activated Charcoal & MOS',
    category: 'supplements',
    categoryName: 'Feed Supplements & Minerals',
    badge: 'Feed Protection',
    packing: '25 kg Paper Bag',
    target: 'Poultry Feed Mills & Farmers',
    dosage: '1-2 kg per ton of feed',
    description: 'Comprehensive toxin binder that irreversibly binds Aflatoxins, T-2 toxins, and Ochratoxins without stripping essential vitamins.'
  }
];

// App State
let quoteBasket = [];

// DOM Loaded Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
  setupEventListeners();
  setupScrollEffects();
});

// Render Products Grid
function renderProducts(productsList) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  if (productsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--slate-400); margin-bottom: 1rem;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <h3 style="color: var(--slate-700);">No products found</h3>
        <p style="color: var(--slate-500); font-size: 0.95rem;">Try adjusting your search terms or category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = productsList.map(prod => `
    <div class="product-card" data-category="${prod.category}">
      <div class="product-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <span class="product-category-tag">${prod.categoryName}</span>
          ${prod.badge ? `<span class="badge badge-primary">${prod.badge}</span>` : ''}
        </div>
        <h3 class="product-title">${prod.title}</h3>
        <p class="product-composition">${prod.composition}</p>
      </div>
      <div class="product-body">
        <p style="font-size: 0.88rem; color: var(--slate-600);">${prod.description}</p>
        <ul class="product-spec-list">
          <li class="product-spec-item">
            <span class="spec-label">Packaging:</span>
            <span class="spec-val">${prod.packing}</span>
          </li>
          <li class="product-spec-item">
            <span class="spec-label">Target:</span>
            <span class="spec-val">${prod.target}</span>
          </li>
          <li class="product-spec-item">
            <span class="spec-label">Recommended Dosage:</span>
            <span class="spec-val">${prod.dosage}</span>
          </li>
        </ul>
      </div>
      <div class="product-footer">
        <button class="btn btn-outline btn-sm" onclick="openProductModal('${prod.id}')">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Details
        </button>
        <button class="btn btn-primary btn-sm" onclick="addToQuote('${prod.id}')">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          Add to RFQ
        </button>
      </div>
    </div>
  `).join('');
}

// Filter and Search Logic
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
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
                          prod.description.toLowerCase().includes(query);
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
  showToast(`Added "${product.title}" to Wholesale Inquiry Quote.`);
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
        <div style="text-align: center; padding: 3rem 1rem; color: var(--slate-500);">
          <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin-bottom: 0.5rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <p>Your inquiry quote list is empty.</p>
          <p style="font-size: 0.82rem; margin-top: 0.25rem;">Browse catalog and click "Add to RFQ".</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = quoteBasket.map(item => `
        <div class="drawer-item">
          <div>
            <div class="drawer-item-title">${item.title}</div>
            <div class="drawer-item-sub">Packing: ${item.packing}</div>
            <div style="font-size: 0.8rem; color: var(--primary-700); font-weight: 600;">Qty: ${item.quantity} units</div>
          </div>
          <button style="background: none; border: none; color: #ef4444; cursor: pointer; padding: 0.4rem;" onclick="removeFromQuote('${item.id}')">
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

  let text = `*WHLESALE RFQ - SHREEJEE TRADING CORPORATION*\n`;
  text += `-------------------------------------------\n`;
  text += `Hello, I would like to request wholesale pricing for:\n\n`;

  quoteBasket.forEach((item, idx) => {
    text += `${idx + 1}. *${item.title}*\n`;
    text += `   - Quantity: ${item.quantity} units\n`;
    text += `   - Packaging: ${item.packing}\n\n`;
  });

  text += `Please share bulk rates and delivery timeline to my farm/clinic.\nThank you!`;

  const phone = '919825000000'; // Representative business number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Farm Requirement Calculator
function calculateFarmRequirement() {
  const birds = parseInt(document.getElementById('calcBirds')?.value) || 0;
  const days = parseInt(document.getElementById('calcDays')?.value) || 0;
  const type = document.getElementById('calcType')?.value || 'tonic';

  let estVolumeLiters = 0;
  let estPacks = 0;

  if (birds > 0 && days > 0) {
    if (type === 'tonic') {
      // ~ 15ml per 100 birds per day
      estVolumeLiters = ((birds / 100) * 15 * days) / 1000;
      estPacks = Math.ceil(estVolumeLiters / 5); // 5L cans
    } else if (type === 'calcium') {
      // ~ 20ml per 100 birds per day
      estVolumeLiters = ((birds / 100) * 20 * days) / 1000;
      estPacks = Math.ceil(estVolumeLiters / 5);
    } else if (type === 'disinfectant') {
      // ~ 5L per 10,000 sq ft shed
      estVolumeLiters = Math.max(1, Math.ceil((birds / 2000) * 2));
      estPacks = Math.ceil(estVolumeLiters / 5);
    }
  }

  const resVol = document.getElementById('resVolume');
  const resPacks = document.getElementById('resPacks');

  if (resVol) resVol.textContent = `${estVolumeLiters.toFixed(1)} Litres`;
  if (resPacks) resPacks.textContent = `${estPacks} Cans (5L Bulk)`;
}

// Handle Direct RFQ Form Submission
function handleRFQSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('rfqName').value;
  const phone = document.getElementById('rfqPhone').value;
  const location = document.getElementById('rfqLocation').value;
  const message = document.getElementById('rfqMessage').value;

  let text = `*NEW WEBSITE INQUIRY - SHREEJEE TRADING CORPORATION*\n`;
  text += `Name: ${name}\nPhone: ${phone}\nLocation: ${location}\nDetails: ${message}`;

  const url = `https://wa.me/919825000000?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');

  showToast('Inquiry sent via WhatsApp! Our team will respond shortly.');
  e.target.reset();
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
    <svg width="20" height="20" fill="none" stroke="#10b981" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Detail Modal
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  alert(`Product Specification Sheet:\n\nTitle: ${prod.title}\nActive Composition: ${prod.composition}\nCategory: ${prod.categoryName}\nPackaging: ${prod.packing}\nTarget Animal: ${prod.target}\nRecommended Dosage: ${prod.dosage}\n\nDescription: ${prod.description}`);
}

// Scroll Effects
function setupScrollEffects() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
}
