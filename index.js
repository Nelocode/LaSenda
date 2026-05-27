/* ==========================================================================
   LOGIC FOR LA SENDA® - WEB PLATFORM COMPLIANT
   ========================================================================== */

// --- 1. Lotes Database (62 Lotes from CUADRO DE ÁREAS GENERALES.xlsx) ---
const lotesData = [
  // Etapa 1 (20 Lotes)
  { id: 1, name: "Lote 01", area: 3013.2, stage: 1, isFeatured: true },
  { id: 2, name: "Lote 02", area: 3301.2, stage: 1, isFeatured: false },
  { id: 3, name: "Lote 03", area: 3000.2, stage: 1, isFeatured: false },
  { id: 4, name: "Lote 04", area: 3300.0, stage: 1, isFeatured: false },
  { id: 5, name: "Lote 05", area: 3300.2, stage: 1, isFeatured: false },
  { id: 14, name: "Lote 14", area: 3874.7, stage: 1, isFeatured: false },
  { id: 15, name: "Lote 15", area: 3895.9, stage: 1, isFeatured: false },
  { id: 16, name: "Lote 16", area: 3255.8, stage: 1, isFeatured: false },
  { id: 17, name: "Lote 17", area: 3188.4, stage: 1, isFeatured: false },
  { id: 18, name: "Lote 18", area: 3001.8, stage: 1, isFeatured: false },
  { id: 19, name: "Lote 19", area: 3154.6, stage: 1, isFeatured: false },
  { id: 20, name: "Lote 20", area: 3151.0, stage: 1, isFeatured: false },
  { id: 21, name: "Lote 21", area: 3152.6, stage: 1, isFeatured: false },
  { id: 22, name: "Lote 22", area: 3300.6, stage: 1, isFeatured: false },
  { id: 23, name: "Lote 23", area: 3595.8, stage: 1, isFeatured: false },
  { id: 24, name: "Lote 24", area: 5400.8, stage: 1, isFeatured: true },
  { id: 25, name: "Lote 25", area: 3594.6, stage: 1, isFeatured: false },
  { id: 26, name: "Lote 26", area: 3000.9, stage: 1, isFeatured: false },
  { id: 27, name: "Lote 27", area: 3000.5, stage: 1, isFeatured: false },
  { id: 28, name: "Lote 28", area: 3000.3, stage: 1, isFeatured: false },
  
  // Etapa 2 (21 Lotes)
  { id: 6, name: "Lote 06", area: 3078.7, stage: 2, isFeatured: true },
  { id: 7, name: "Lote 07", area: 3245.1, stage: 2, isFeatured: false },
  { id: 8, name: "Lote 08", area: 3303.7, stage: 2, isFeatured: false },
  { id: 9, name: "Lote 09", area: 3307.0, stage: 2, isFeatured: false },
  { id: 10, name: "Lote 10", area: 3300.7, stage: 2, isFeatured: false },
  { id: 11, name: "Lote 11", area: 3481.1, stage: 2, isFeatured: false },
  { id: 12, name: "Lote 12", area: 3441.9, stage: 2, isFeatured: false },
  { id: 13, name: "Lote 13", area: 3448.3, stage: 2, isFeatured: false },
  { id: 29, name: "Lote 29", area: 3925.2, stage: 2, isFeatured: false },
  { id: 30, name: "Lote 30", area: 3070.0, stage: 2, isFeatured: false },
  { id: 31, name: "Lote 31", area: 3014.8, stage: 2, isFeatured: false },
  { id: 32, name: "Lote 32", area: 4385.0, stage: 2, isFeatured: true },
  { id: 33, name: "Lote 33", area: 3627.6, stage: 2, isFeatured: false },
  { id: 34, name: "Lote 34", area: 3000.2, stage: 2, isFeatured: false },
  { id: 35, name: "Lote 35", area: 3304.6, stage: 2, isFeatured: false },
  { id: 36, name: "Lote 36", area: 3174.6, stage: 2, isFeatured: false },
  { id: 37, name: "Lote 37", area: 4422.1, stage: 2, isFeatured: false },
  { id: 38, name: "Lote 38", area: 4472.4, stage: 2, isFeatured: false },
  { id: 39, name: "Lote 39", area: 3052.2, stage: 2, isFeatured: false },
  { id: 40, name: "Lote 40", area: 3191.9, stage: 2, isFeatured: false },
  { id: 41, name: "Lote 41", area: 3041.1, stage: 2, isFeatured: false },
  
  // Etapa 3 (21 Lotes)
  { id: 42, name: "Lote 42", area: 3000.2, stage: 3, isFeatured: true },
  { id: 43, name: "Lote 43", area: 3000.2, stage: 3, isFeatured: false },
  { id: 44, name: "Lote 44", area: 3000.3, stage: 3, isFeatured: false },
  { id: 45, name: "Lote 45", area: 3000.2, stage: 3, isFeatured: false },
  { id: 46, name: "Lote 46", area: 3000.4, stage: 3, isFeatured: false },
  { id: 47, name: "Lote 47", area: 3000.3, stage: 3, isFeatured: false },
  { id: 48, name: "Lote 48", area: 3548.6, stage: 3, isFeatured: false },
  { id: 49, name: "Lote 49", area: 3009.9, stage: 3, isFeatured: false },
  { id: 50, name: "Lote 50", area: 3249.9, stage: 3, isFeatured: false },
  { id: 51, name: "Lote 51", area: 3837.8, stage: 3, isFeatured: false },
  { id: 52, name: "Lote 52", area: 3966.5, stage: 3, isFeatured: true },
  { id: 53, name: "Lote 53", area: 3000.8, stage: 3, isFeatured: false },
  { id: 54, name: "Lote 54", area: 3000.1, stage: 3, isFeatured: false },
  { id: 55, name: "Lote 55", area: 3000.3, stage: 3, isFeatured: false },
  { id: 56, name: "Lote 56", area: 3000.1, stage: 3, isFeatured: false },
  { id: 57, name: "Lote 57", area: 3148.1, stage: 3, isFeatured: false },
  { id: 58, name: "Lote 58", area: 3000.0, stage: 3, isFeatured: false },
  { id: 59, name: "Lote 59", area: 3300.9, stage: 3, isFeatured: false },
  { id: 60, name: "Lote 60", area: 3300.7, stage: 3, isFeatured: false },
  { id: 61, name: "Lote 61", area: 3382.7, stage: 3, isFeatured: false },
  { id: 62, name: "Lote 62", area: 3637.5, stage: 3, isFeatured: false }
];

// --- 2. Sendas Database (Insights from Branding & Video Call) ---
const sendasData = {
  encuentro: {
    title: "Senda del Encuentro",
    subtitle: "Etapa 1 - Conexión Social & Conveniencia",
    story: "Inspirada en el ritual social y la vida comunitaria. Ubicada en la entrada de la parcelación, la Senda del Encuentro es el corazón social de La Senda. Aquí se destaca la portería robusta y el Mall Comercial, concebido para brindar conveniencia (café, panadería artesanal y canasta básica) sin alterar la paz residencial. Con una distribución de parqueos separada de las circulaciones de los propietarios, permite el flujo público ordenado e invita a compartir fogatas, picnics y mercados campesinos al aire libre.",
    images: ["assets/img/render_encuentro_1.jpg", "assets/img/render_encuentro_2.jpg", "assets/img/render_encuentro_3.jpg", "assets/img/encuentro_1.jpg", "assets/img/encuentro_2.jpg", "assets/img/IMG_4619.jpg"],
    amenities: ["Mall Comercial Integrado", "Parqueadero de Visitantes Ampliado", "Portería de Seguridad Robustecida 24/7", "Plaza de Fogatas & Socialización", "Senderos de Conexión Rápida", "Cafetería y Panadería de Pueblo"]
  },
  movimiento: {
    title: "Senda del Movimiento",
    subtitle: "Etapa 2 - Vitalidad & Aventura al Aire Libre",
    story: "Concebida para quienes se conectan con el territorio a través del esfuerzo físico y la exploración activa. Esta senda incluye un circuito completo de senderos deportivos con pendientes variables de baja, media y alta dificultad, adaptados de forma respetuosa al relieve natural sin explanaciones destructivas. El recorrido serpentea a través del bosque, ofreciendo estaciones de hidratación y picnic, y culmina en la cima de la montaña con el Mirador Panorámico: un deck cubierto con zona de fogata (firepit) que regala visuales espectaculares del suroeste y Cerro Tusa.",
    images: ["assets/img/render_movimiento_1.jpg", "assets/img/render_movimiento_2.jpg", "assets/img/render_movimiento_3.jpg", "assets/img/movimiento_1.jpg", "assets/img/movimiento_2.jpg", "assets/img/IMG_4682.jpg"],
    amenities: ["Mirador Panorámico Elevado", "Deck Cubierto & Firepit Premium", "Senderos Deportivos de Montaña", "Estaciones de Hidratación", "Espacios de Picnic en el Bosque", "Conexión Directa a Rutas Outdoor"]
  },
  calma: {
    title: "Senda de la Calma",
    subtitle: "Etapa 3 - Silencio, Introspección & Conexión Animal",
    story: "Ubicada en el sector más íntimo y boscoso, es el refugio de la serenidad y la contemplación. Acompañada por el murmullo de la quebrada nativa, cuenta con un Parque Lineal con decks de madera diseñados para la meditación, yoga y desconexión total. El sendero del bosque culmina en una Estancia Equina especializada, diseñada para dueños de caballos y amantes de la equitación consciente, donde se puede pasear, interactuar y descansar en armonía con el entorno, totalmente aislado del tráfico de vehículos.",
    images: ["assets/img/render_calma_1.jpg", "assets/img/render_calma_2.jpg", "assets/img/render_calma_3.jpg", "assets/img/calma_1.jpg", "assets/img/calma_2.jpg", "assets/img/IMG_4649.jpg", "assets/img/IMG_4648.jpg"],
    amenities: ["Estancia Equina de Descanso", "Parque Lineal del Río", "Decks del Río (River Lounges)", "Yoga Mats & Estaciones Wellness", "Bosques Nativos de Preservación", "Senderos Exclusivos del Silencio"]
  }
};

// --- 3. DOM Elements ---
const header = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const heroBg = document.getElementById("hero-bg");

const sendaCards = document.querySelectorAll(".senda-card");
const detailsContainer = document.getElementById("senda-details-container");
const detailsSubtitle = document.getElementById("details-subtitle");
const detailsTitle = document.getElementById("details-title");
const detailsStory = document.getElementById("details-story");
const detailsAmenities = document.getElementById("details-amenities");
const galleryCarousel = document.getElementById("gallery-carousel");
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
const detailsCtaBtn = document.getElementById("details-cta-btn");

const specTabBtns = document.querySelectorAll(".spec-tab-btn");
const specPanes = document.querySelectorAll(".spec-content-pane");

const lotesGrid = document.getElementById("lotes-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchLoteInput = document.getElementById("search-lote");
const sortLotesSelect = document.getElementById("sort-lotes");

const loteModal = document.getElementById("lote-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalTitleNum = document.getElementById("modal-title-num");
const modalStageBadge = document.getElementById("modal-stage-badge");
const modalSpecArea = document.getElementById("modal-spec-area");
const modalSpecBoundaries = document.getElementById("modal-spec-boundaries");
const modalRecText = document.getElementById("modal-recommendation-text");

const leadForm = document.getElementById("lead-form");
const toastContainer = document.getElementById("toast-container");

// --- State Variables ---
let currentSendaKey = null;
let currentCarouselIndex = 0;
let currentCarouselImages = [];
let lastFocusedElement = null; // Accessibility tracking

// --- 4. Navigation & Layout Scroll Actions ---

// Feature detection for CSS Scroll-driven animations
const supportsSDA = CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)');

if (!supportsSDA) {
  // FALLBACK 1: Shrinking header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled-fallback");
    } else {
      header.classList.remove("scrolled-fallback");
    }
  });

  // FALLBACK 2: Scrollytelling Background Fading via IntersectionObserver
  // Vinculado a colores pasteles sumamente claros y limpios
  const sections = [
    { id: "manifiesto", color: "#FDFCF9" },
    { id: "elige-tu-senda", color: "#F5F2EC" },
    { id: "ficha-tecnica", color: "#FDFCF9" },
    { id: "lotes", color: "#FDFCF9" },
    { id: "contacto", color: "#F5F2EC" }
  ];

  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sec = sections.find(s => s.id === entry.target.id);
        if (sec) {
          document.body.style.backgroundColor = sec.color;
        }
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(sec => {
    const el = document.getElementById(sec.id);
    if (el) bgObserver.observe(el);
  });

  // FALLBACK 3: Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-fallback");
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !isExpanded);
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// --- 5. Interactive Senda Selector ---

// Wraps DOM updates in startViewTransition natively with fallback
function performTransition(updateCallback, focusCallback) {
  if (!document.startViewTransition) {
    updateCallback();
    if (focusCallback) focusCallback();
  } else {
    const transition = document.startViewTransition(updateCallback);
    if (focusCallback) {
      transition.finished.finally(() => {
        focusCallback();
      });
    }
  }
}

sendaCards.forEach(card => {
  // Click handler
  card.addEventListener("click", () => {
    const sendaKey = card.getAttribute("data-senda");
    selectSenda(sendaKey, card);
  });

  // Keyboard accessibility handler
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const sendaKey = card.getAttribute("data-senda");
      selectSenda(sendaKey, card);
    }
  });
});

function selectSenda(sendaKey, cardElement) {
  performTransition(() => {
    // Clear active card states and set current
    sendaCards.forEach(c => {
      c.classList.remove("active");
      c.setAttribute("aria-expanded", "false");
    });
    cardElement.classList.add("active");
    cardElement.setAttribute("aria-expanded", "true");
    
    // Change page theme class on body
    document.body.className = ""; // clear all
    document.body.classList.add(`theme-${sendaKey}`);
    
    // Load senda details content
    loadSendaDetails(sendaKey);
  }, () => {
    // MANDATORY Focus Routing: Route focus to the newly revealed details heading
    detailsTitle.focus();
    // Scroll to details
    detailsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function loadSendaDetails(key) {
  const data = sendasData[key];
  if (!data) return;
  
  currentSendaKey = key;
  currentCarouselImages = data.images;
  currentCarouselIndex = 0;
  
  // Set textual content
  detailsSubtitle.textContent = data.subtitle;
  detailsTitle.textContent = data.title;
  detailsStory.textContent = data.story;
  
  // Set amenities list
  detailsAmenities.innerHTML = "";
  data.amenities.forEach(amenity => {
    const item = document.createElement("div");
    item.className = "amenity-item";
    item.innerHTML = `<span class="amenity-bullet"></span>${amenity}`;
    detailsAmenities.appendChild(item);
  });
  
  // Set carousel slides
  galleryCarousel.innerHTML = "";
  data.images.forEach(imgUrl => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";
    slide.style.backgroundImage = `url('${imgUrl}')`;
    galleryCarousel.appendChild(slide);
  });
  updateCarouselPosition();
  
  // Dynamically change hero section background render to match the selected Senda's primary render
  heroBg.style.backgroundImage = `url('${data.images[0]}')`;
  
  // Display the container
  detailsContainer.style.display = "block";
}

// Carousel controls
function updateCarouselPosition() {
  galleryCarousel.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
}

carouselPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentCarouselIndex > 0) {
    currentCarouselIndex--;
  } else {
    currentCarouselIndex = currentCarouselImages.length - 1;
  }
  updateCarouselPosition();
});

carouselNext.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentCarouselIndex < currentCarouselImages.length - 1) {
    currentCarouselIndex++;
  } else {
    currentCarouselIndex = 0;
  }
  updateCarouselPosition();
});

// Hook up the Details Dossier CTA button to filter and scroll to lotes section
if (detailsCtaBtn) {
  detailsCtaBtn.addEventListener("click", () => {
    let filterVal = "all";
    if (currentSendaKey === "encuentro") filterVal = "1";
    if (currentSendaKey === "movimiento") filterVal = "2";
    if (currentSendaKey === "calma") filterVal = "3";
    
    // Find the corresponding filter button and trigger click
    const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${filterVal}"]`);
    if (targetFilterBtn) {
      targetFilterBtn.click();
    }
    
    // Scroll smoothly to lotes grid
    document.getElementById("lotes").scrollIntoView({ behavior: "smooth" });
  });
}

// --- 6. Technical Specifications Tabs ---
specTabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab");
    
    performTransition(() => {
      // Toggle active classes on buttons
      specTabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      
      // Toggle active classes on panes
      specPanes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === `pane-${tabName}`) {
          pane.classList.add("active");
        }
      });
    });
  });
});

// --- 7. Lotes Grid rendering, filtering and sorting ---
let currentFilter = "all";
let currentSearch = "";
let currentSort = "num-asc";

function renderLotesGrid() {
  lotesGrid.innerHTML = "";
  
  // Filter lotes
  let filteredLotes = lotesData.filter(lote => {
    if (currentFilter === "1" && lote.stage !== 1) return false;
    if (currentFilter === "2" && lote.stage !== 2) return false;
    if (currentFilter === "3" && lote.stage !== 3) return false;
    if (currentFilter === "featured" && !lote.isFeatured) return false;
    
    if (currentSearch) {
      const matchName = lote.name.toLowerCase().includes(currentSearch.toLowerCase());
      const matchNum = lote.id.toString().includes(currentSearch);
      if (!matchName && !matchNum) return false;
    }
    return true;
  });
  
  // Sort lotes
  filteredLotes.sort((a, b) => {
    if (currentSort === "num-asc") {
      return a.id - b.id;
    } else if (currentSort === "num-desc") {
      return b.id - a.id;
    } else if (currentSort === "area-desc") {
      return b.area - a.area;
    } else if (currentSort === "area-asc") {
      return a.area - b.area;
    }
    return 0;
  });
  
  // Render cards
  if (filteredLotes.length === 0) {
    lotesGrid.innerHTML = `
      <div style="grid-column: span 100%; text-align: center; padding: 4rem 0; color: var(--color-text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--theme-accent);"></i>
        <p>No se encontraron lotes que coincidan con tu búsqueda.</p>
      </div>
    `;
    return;
  }
  
  filteredLotes.forEach(lote => {
    const card = document.createElement("div");
    
    // Color definitions per Stage matching the brand palette
    const stageColor = lote.stage === 1 ? "#AE5D1F" : lote.stage === 2 ? "#C27D38" : "#3E8A7E";
    const stageRGB = lote.stage === 1 ? "174, 93, 31" : lote.stage === 2 ? "194, 125, 56" : "62, 138, 126";
    const stageLabel = lote.stage === 1 ? "Etapa 1" : lote.stage === 2 ? "Etapa 2" : "Etapa 3";
    
    card.className = `lote-card ${lote.isFeatured ? 'featured' : ''}`;
    card.setAttribute("style", `--stage-color: ${stageColor}; --stage-color-rgb: ${stageRGB};`);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${lote.name}, Área ${lote.area} metros cuadrados, ${stageLabel}. Haga clic para ver detalles.`);
    
    let featuredBadge = lote.isFeatured ? `<span class="lote-badge-featured"><i class="fa-solid fa-star"></i> Lanzamiento</span>` : "";
    
    card.innerHTML = `
      ${featuredBadge}
      <div class="lote-num">${lote.name}</div>
      <div class="lote-area">${lote.area.toLocaleString('es-CO')} m²</div>
      <span class="lote-stage-label">${stageLabel}</span>
    `;
    
    // Attach details handlers (mouse & keyboard)
    card.addEventListener("click", (e) => {
      lastFocusedElement = card; // store focus reference
      openLoteModal(lote);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        lastFocusedElement = card; // store focus reference
        openLoteModal(lote);
      }
    });
    
    lotesGrid.appendChild(card);
  });
}

// Filter button clicks
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.getAttribute("data-filter");
    performTransition(() => renderLotesGrid());
  });
});

// Search input keyup
searchLoteInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  // Dynamic updates without full transition to avoid typing disruption
  renderLotesGrid();
});

// Sort select change
sortLotesSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  performTransition(() => renderLotesGrid());
});

// --- 8. Lote Detail Modal ---
function openLoteModal(lote) {
  modalTitleNum.textContent = lote.name;
  
  const stageLabel = lote.stage === 1 ? "Etapa 1 - Senda del Encuentro" : lote.stage === 2 ? "Etapa 2 - Senda del Movimiento" : "Etapa 3 - Senda de la Calma";
  const stageColor = lote.stage === 1 ? "#AE5D1F" : lote.stage === 2 ? "#C27D38" : "#3E8A7E";
  const stageRGB = lote.stage === 1 ? "174, 93, 31" : lote.stage === 2 ? "194, 125, 56" : "62, 138, 126";
  
  modalStageBadge.textContent = stageLabel;
  modalStageBadge.style.backgroundColor = `rgba(${stageRGB}, 0.08)`;
  modalStageBadge.style.color = stageColor;
  modalStageBadge.style.border = `1px solid ${stageColor}`;
  
  modalSpecArea.textContent = `${lote.area.toLocaleString('es-CO')} m²`;
  
  // Calculate average boundaries per Stage (approximate from Excel total linderos/lotes count)
  let boundariesVal = "176.1 m";
  if (lote.stage === 2) boundariesVal = "165.8 m";
  if (lote.stage === 3) boundariesVal = "163.6 m";
  modalSpecBoundaries.textContent = boundariesVal;

  // Photographic Proposal Integration for Lote Modal
  const stage1Images = ["assets/img/IMG_4586.jpg", "assets/img/IMG_4588.jpg", "assets/img/IMG_4590.jpg", "assets/img/IMG_4591.jpg", "assets/img/IMG_4675.jpg"];
  const stage2Images = ["assets/img/IMG_4619.jpg", "assets/img/IMG_4650.jpg", "assets/img/IMG_4658.jpg", "assets/img/IMG_4682.jpg", "assets/img/IMG_4684.jpg", "assets/img/IMG_4687.jpg"];
  const stage3Images = ["assets/img/IMG_4592.jpg", "assets/img/IMG_4593.jpg", "assets/img/IMG_4595.jpg", "assets/img/IMG_4626.jpg", "assets/img/IMG_4638.jpg", "assets/img/IMG_4648.jpg", "assets/img/IMG_4649.jpg", "assets/img/IMG_4663.jpg", "assets/img/IMG_4667.jpg", "assets/img/IMG_4668.jpg"];

  let selectedImg = "";
  if (lote.stage === 1) {
    selectedImg = stage1Images[lote.id % stage1Images.length];
  } else if (lote.stage === 2) {
    selectedImg = stage2Images[lote.id % stage2Images.length];
  } else {
    selectedImg = stage3Images[lote.id % stage3Images.length];
  }
  
  const modalImgHeader = document.getElementById("modal-image-header");
  if (modalImgHeader) {
    modalImgHeader.style.backgroundImage = `url('${selectedImg}')`;
  }
  
  // Custom recommendation storytelling
  let recText = "";
  if (lote.stage === 1) {
    recText = "Este lote es ideal para quienes aman la conexión comunitaria y la comodidad. Su ubicación privilegiada te sitúa a pocos metros del Mall Comercial y la Portería principal, facilitando tus compras del día a día, disfrutar de la panadería artesanal del pueblo y participar de los eventos sociales en la plaza sin sacrificar tu privacidad.";
  } else if (lote.stage === 2) {
    recText = "Recomendado para familias activas e inversionistas que disfrutan del deporte y las actividades al aire libre. Estarás conectado directamente con los senderos deportivos de la Senda del Movimiento que ascienden hacia el mirador panorámico, ideales para caminatas matutinas, paseos en bici y ver los atardeceres sobre Cerro Tusa.";
  } else if (lote.stage === 3) {
    recText = "Perfecto para quienes buscan paz, silencio y desconexión absoluta. Su ubicación en el sector alto te ofrece una inmersión natural única junto al bosque nativo y el Parque Lineal de la quebrada. Ideal para meditar, practicar yoga en los decks ecológicos y estar a pasos de la estancia equina para paseos a caballo.";
  }
  modalRecText.textContent = recText;
  
  // Synchronise Contact Form select option
  const interesDropdown = document.getElementById("interes");
  if (lote.stage === 1) interesDropdown.value = "encuentro";
  if (lote.stage === 2) interesDropdown.value = "movimiento";
  if (lote.stage === 3) interesDropdown.value = "calma";
  
  // Pre-fill message
  document.getElementById("mensaje").value = `Hola, estoy interesado en recibir información comercial detallada sobre el Lote ${lote.name.replace("Lote ", "")} de la Etapa ${lote.stage}.`;

  // Display modal
  performTransition(() => {
    loteModal.classList.add("active");
    loteModal.setAttribute("aria-hidden", "false");
  }, () => {
    // MANDATORY A11y Focus management: Focus the heading when opening modal
    modalTitleNum.focus();
  });
}

function closeLoteModal() {
  performTransition(() => {
    loteModal.classList.remove("active");
    loteModal.setAttribute("aria-hidden", "true");
  }, () => {
    // MANDATORY A11y Focus management: Return focus to the element that triggered it
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  });
}

closeModalBtn.addEventListener("click", closeLoteModal);

window.addEventListener("click", (e) => {
  if (e.target === loteModal) {
    closeLoteModal();
  }
});

// Escape key closes modal (A11y)
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && loteModal.classList.contains("active")) {
    closeLoteModal();
  }
});

// --- 9. Lead Capture & Toast Notifications ---
leadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Custom validation check using modern Web platform APIs
  if (!leadForm.checkValidity()) {
    leadForm.querySelectorAll(".form-control").forEach(input => {
      // Trigger invalid display
      if (!input.validity.valid) {
        input.setAttribute("aria-invalid", "true");
      } else {
        input.removeAttribute("aria-invalid");
      }
    });
    // Show validation toast
    showToast("Por favor, corrige los campos antes de enviar.", "#AE5D1F");
    return;
  }
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const interesVal = document.getElementById("interes").value;
  const mensaje = document.getElementById("mensaje").value;
  
  // CRM local storage saving simulation
  const newLead = {
    nombre,
    email,
    telefono,
    interes: interesVal,
    mensaje,
    date: new Date().toISOString()
  };
  
  const existingLeads = JSON.parse(localStorage.getItem("lasenda_leads") || "[]");
  existingLeads.push(newLead);
  localStorage.setItem("lasenda_leads", JSON.stringify(existingLeads));
  
  console.log(`[CRM LA SENDA] Registro exitoso. Total leads: ${existingLeads.length}`, newLead);
  
  // Dynamic success message
  let sendaText = "el proyecto general";
  if (interesVal === "encuentro") sendaText = "la Senda del Encuentro (Etapa 1)";
  if (interesVal === "movimiento") sendaText = "la Senda del Movimiento (Etapa 2)";
  if (interesVal === "calma") sendaText = "la Senda de la Calma (Etapa 3)";
  
  showToast(`¡Gracias, ${nombre.split(' ')[0]}! Hemos registrado tu interés en ${sendaText}. Un asesor de CNTXT se comunicará contigo pronto.`, "var(--theme-accent)");
  
  // Reset form and clear validation markers
  leadForm.reset();
  leadForm.querySelectorAll(".form-control").forEach(input => {
    input.removeAttribute("aria-invalid");
  });
});

function showToast(message, borderStyle) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.borderLeftColor = borderStyle;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size: 1.2rem; color: ${borderStyle};"></i><span>${message}</span>`;
  toastContainer.appendChild(toast);
  
  // Trigger entry animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 50);
  
  // Dismiss toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 600);
  }, 5000);
}

// --- 10. Initialisation on page load ---
window.addEventListener("DOMContentLoaded", () => {
  // Render lotes grid
  renderLotesGrid();
  
  // Default load Senda de la Calma detailed view
  loadSendaDetails("calma");
  
  // Hero entry animation delay
  setTimeout(() => {
    const heroText = document.querySelector(".hero-editorial-text");
    const heroMedia = document.querySelector(".hero-editorial-media");
    if (heroText) {
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }
    if (heroMedia) {
      heroMedia.style.opacity = "1";
      heroMedia.style.transform = "translateY(0)";
    }
  }, 150);

  // --- 11. Timeline Sinuous Path Discovery Logic (Station 3 to 4) ---
  const btnTraceTimeline = document.getElementById("btn-trace-timeline");
  const discoveryPath = document.getElementById("timeline-discovery-path");
  const timelinePointer = document.getElementById("timeline-pointer");
  const station4 = document.getElementById("station-4");

  if (btnTraceTimeline && discoveryPath && timelinePointer && station4) {
    btnTraceTimeline.addEventListener("click", () => {
      // Disable button during animation
      btnTraceTimeline.disabled = true;
      btnTraceTimeline.style.opacity = "0.7";
      btnTraceTimeline.innerHTML = 'Descubriendo... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 5px;"></i>';
      
      // Reset stroke-dashoffset to draw the golden path segment
      discoveryPath.style.strokeDashoffset = "0";
      
      // Make pointer visible
      timelinePointer.style.display = "block";
      
      const pathLength = discoveryPath.getTotalLength();
      let start = null;
      const duration = 2000; // 2 seconds animation
      
      function animateTimelinePebble(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(1, elapsed / duration);
        const currentLength = progress * pathLength;
        
        try {
          // Get dynamic coordinates along the sinuous curve
          const point = discoveryPath.getPointAtLength(currentLength);
          
          // Coordinate mapping: SVG is dynamically sized
          timelinePointer.style.left = point.x + "%";
          timelinePointer.style.top = point.y + "px";
        } catch (e) {
          // Fallback coordinate calculations if SVG API fails
          timelinePointer.style.left = "50%";
          const wrapperRect = document.querySelector(".timeline-wrapper").getBoundingClientRect();
          const n3 = document.querySelector(".timeline-station:nth-of-type(3) .station-node");
          const n4 = document.querySelector(".timeline-station:nth-of-type(4) .station-node");
          const y3 = n3.getBoundingClientRect().top - wrapperRect.top + n3.offsetHeight / 2;
          const y4 = n4.getBoundingClientRect().top - wrapperRect.top + n4.offsetHeight / 2;
          timelinePointer.style.top = (y3 + progress * (y4 - y3)) + "px";
        }
        
        if (progress < 1) {
          requestAnimationFrame(animateTimelinePebble);
        } else {
          // Path tracing completed!
          setTimeout(() => {
            // Unlock Station 4 visual display
            station4.classList.remove("station-locked");
            
            // Update trigger button state
            btnTraceTimeline.innerHTML = '¡Senda Descubierta! <i class="fa-solid fa-circle-check" style="margin-left: 5px;"></i>';
            btnTraceTimeline.style.background = "var(--color-primary-green-light)";
            btnTraceTimeline.style.borderColor = "var(--color-primary-green-light)";
            btnTraceTimeline.style.cursor = "default";
            
            // Visual notification ripple
            showToast("¡Has descubierto el retorno a lo esencial en la Estación IV!", "var(--color-accent-gold)");
            
            // Hide pointer pebble after completion
            timelinePointer.style.display = "none";
          }, 300);
        }
      }
      
      requestAnimationFrame(animateTimelinePebble);
    });
  }

  // --- 11B. Collapsible Technical Details Panel ---
  const btnToggleTechnical = document.getElementById("btn-toggle-technical");
  const technicalDetailsCollapse = document.getElementById("technical-details-collapse");

  if (btnToggleTechnical && technicalDetailsCollapse) {
    btnToggleTechnical.addEventListener("click", () => {
      const isExpanded = btnToggleTechnical.getAttribute("aria-expanded") === "true";
      btnToggleTechnical.setAttribute("aria-expanded", !isExpanded);
      technicalDetailsCollapse.classList.toggle("active");
      
      if (!isExpanded) {
        btnToggleTechnical.innerHTML = 'Ocultar Ficha Técnica Detallada <i class="fa-solid fa-chevron-up"></i>';
        technicalDetailsCollapse.setAttribute("aria-hidden", "false");
        setTimeout(() => {
          technicalDetailsCollapse.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      } else {
        btnToggleTechnical.innerHTML = 'Ver Ficha Técnica Completa <i class="fa-solid fa-chevron-down"></i>';
        technicalDetailsCollapse.setAttribute("aria-hidden", "true");
      }
    });
  }

  // --- 12. Dynamic Timeline Sinuous Path Alignment ---
  function updateTimelinePath() {
    const wrapper = document.querySelector(".timeline-wrapper");
    const basePath = document.getElementById("timeline-base-path");
    const activePath = document.getElementById("timeline-active-path");
    const discoveryPath = document.getElementById("timeline-discovery-path");
    const stations = document.querySelectorAll(".timeline-station");
    
    if (!wrapper || !basePath || !activePath || !discoveryPath) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperHeight = wrapperRect.height;
    const isMobile = window.innerWidth <= 768;

    // Find y coordinates of the nodes relative to the wrapper
    const yCoords = [];
    stations.forEach(station => {
      const node = station.querySelector(".station-node");
      if (node) {
        const nodeRect = node.getBoundingClientRect();
        const nodeCenterY = nodeRect.top - wrapperRect.top + nodeRect.height / 2;
        yCoords.push(nodeCenterY);
      }
    });

    if (yCoords.length < 4) return;

    // Set SVG viewBox dynamically to match wrapper height
    const svg = basePath.ownerSVGElement;
    if (svg) {
      svg.setAttribute("viewBox", `0 0 100 ${wrapperHeight}`);
    }

    // Draw paths
    let baseD = "";
    let activeD = "";
    let discoveryD = "";

    if (isMobile) {
      // On mobile, draw a straight line down the left side
      baseD = `M 50,0 L 50,${wrapperHeight}`;
      activeD = `M 50,0 L 50,${yCoords[2]}`;
      discoveryD = `M 50,${yCoords[2]} L 50,${yCoords[3]}`;
    } else {
      // On desktop, draw the beautiful sinuous curve that waves left and right
      const amp = 30; // amplitude of curves (x goes from 50 to 50 + amp or 50 - amp)
      
      baseD = `M 50,0 L 50,${yCoords[0]}`;
      
      // Curve 1: Node 1 to Node 2 (curves to the right)
      const cy1_1 = yCoords[0] + 0.3 * (yCoords[1] - yCoords[0]);
      const cy1_2 = yCoords[0] + 0.7 * (yCoords[1] - yCoords[0]);
      baseD += ` C ${50 + amp},${cy1_1} ${50 + amp},${cy1_2} 50,${yCoords[1]}`;
      
      // Curve 2: Node 2 to Node 3 (curves to the left)
      const cy2_1 = yCoords[1] + 0.3 * (yCoords[2] - yCoords[1]);
      const cy2_2 = yCoords[1] + 0.7 * (yCoords[2] - yCoords[1]);
      baseD += ` C ${50 - amp},${cy2_1} ${50 - amp},${cy2_2} 50,${yCoords[2]}`;
      
      // Curve 3: Node 3 to Node 4 (curves to the right)
      const cy3_1 = yCoords[2] + 0.3 * (yCoords[3] - yCoords[2]);
      const cy3_2 = yCoords[2] + 0.7 * (yCoords[3] - yCoords[2]);
      baseD += ` C ${50 + amp},${cy3_1} ${50 + amp},${cy3_2} 50,${yCoords[3]}`;
      
      // End segment
      baseD += ` L 50,${wrapperHeight}`;

      // Active path (from top to Node 3)
      activeD = `M 50,0 L 50,${yCoords[0]}`;
      activeD += ` C ${50 + amp},${cy1_1} ${50 + amp},${cy1_2} 50,${yCoords[1]}`;
      activeD += ` C ${50 - amp},${cy2_1} ${50 - amp},${cy2_2} 50,${yCoords[2]}`;

      // Discovery path (from Node 3 to Node 4)
      discoveryD = `M 50,${yCoords[2]} C ${50 + amp},${cy3_1} ${50 + amp},${cy3_2} 50,${yCoords[3]}`;
    }

    basePath.setAttribute("d", baseD);
    activePath.setAttribute("d", activeD);
    discoveryPath.setAttribute("d", discoveryD);

    // Update stroke-dasharray and stroke-dashoffset on the discovery path
    const pathLength = discoveryPath.getTotalLength();
    discoveryPath.style.strokeDasharray = pathLength;
    const station4 = document.getElementById("station-4");
    if (station4 && !station4.classList.contains("station-locked")) {
      discoveryPath.style.strokeDashoffset = "0";
    } else {
      discoveryPath.style.strokeDashoffset = pathLength;
    }
  }

  // Sinuous path calculation initialization
  updateTimelinePath();
  window.addEventListener("resize", updateTimelinePath);
  window.addEventListener("load", updateTimelinePath);

  // --- 13. Video Start Time Control (Skip logo intro and start at map) ---
  const cinematicVideo = document.querySelector(".video-bg");
  const videoStartSecs = 7; // Skip first 7 seconds (logo intro) and start directly at the map

  if (cinematicVideo) {
    if (cinematicVideo.readyState >= 1) {
      cinematicVideo.currentTime = videoStartSecs;
    } else {
      cinematicVideo.addEventListener("loadedmetadata", () => {
        cinematicVideo.currentTime = videoStartSecs;
      });
    }

    // Loop correction: when it loops, reset it to videoStartSecs instead of 0
    cinematicVideo.addEventListener("timeupdate", () => {
      if (cinematicVideo.currentTime < 0.5) {
        cinematicVideo.currentTime = videoStartSecs;
      }
    });
  }
});
