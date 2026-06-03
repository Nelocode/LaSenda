/* ==========================================================================
   LOGIC FOR LA SENDA® - WEB PLATFORM COMPLIANT (EDITORIAL TRIPTYCH)
   ========================================================================== */

// --- 1. Lotes Database (62 Lotes from CUADRO DE ÁREAS GENERALES) ---
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

// --- 2. Sendas Database ---
const sendasData = {
  encuentro: {
    title: "Senda del Encuentro",
    subtitle: "Etapa I - Del Agua",
    story: "Inspirada en el ritual social y la vida comunitaria. Ubicada en la entrada de la parcelación, la Senda del Encuentro es el corazón social de La Senda. Aquí se destaca la portería robusta y el Mall Comercial, concebido para brindar conveniencia (café, panadería artesanal y canasta básica) sin alterar la paz residencial. Con una distribución de parqueos separada de las circulaciones de los propietarios, permite el flujo público ordenado e invita a compartir fogatas, picnics y mercados campesinos al aire libre.",
    images: ["assets/img/render_encuentro_1.webp", "assets/img/render_encuentro_2.webp", "assets/img/render_encuentro_3.webp", "assets/img/encuentro_1.webp", "assets/img/encuentro_2.webp", "assets/img/IMG_4619.webp"],
    amenities: ["Mall Comercial Integrado", "Parqueadero de Visitantes Ampliado", "Portería de Seguridad Robustecida 24/7", "Plaza de Fogatas & Socialización", "Senderos de Conexión Rápida", "Cafetería y Panadería de Pueblo"]
  },
  movimiento: {
    title: "Senda del Movimiento",
    subtitle: "Etapa II - Del Bosque",
    story: "Concebida para quienes se conectan con el territorio a través del esfuerzo físico y la exploración activa. Esta senda incluye un circuito completo de senderos deportivos con pendientes variables de baja, media y alta dificultad, adaptados de forma respetuosa al relieve natural sin explanaciones destructivas. El recorrido serpentea a través del bosque, ofreciendo estaciones de picnic, y culmina en la cima de la montaña con el Mirador Panorámico: un deck cubierto con zona de fogata (firepit) que regala visuales espectaculares del suroeste y Cerro Tusa.",
    images: ["assets/img/render_movimiento_1.webp", "assets/img/render_movimiento_2.webp", "assets/img/render_movimiento_3.webp", "assets/img/movimiento_1.webp", "assets/img/movimiento_2.webp", "assets/img/IMG_4684.webp"],
    amenities: ["Mirador Panorámico Elevado", "Deck Cubierto & Firepit Premium", "Senderos Deportivos de Montaña", "Estaciones de Hidratación", "Espacios de Picnic en el Bosque", "Conexión Directa a Rutas Outdoor"]
  },
  calma: {
    title: "Senda de la Calma",
    subtitle: "Etapa III - Del Viento",
    story: "Ubicada en el sector más íntimo y boscoso, es el refugio de la serenidad y la contemplación. Acompañada por el murmullo de la quebrada nativa, cuenta con un Parque Lineal con decks de madera diseñados para la meditación, yoga y desconexión total. El sendero del bosque culmina en una Estancia Equina especializada, diseñada para dueños de caballos y amantes de la equitación consciente, donde se puede pasear, interactuar y descansar en armonía con el entorno, totalmente aislado del tráfico de vehículos.",
    images: ["assets/img/render_calma_1.webp", "assets/img/render_calma_2.webp", "assets/img/render_calma_3.webp", "assets/img/calma_1.webp", "assets/img/calma_2.webp", "assets/img/IMG_4649.webp", "assets/img/IMG_4648.webp"],
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
const btnToggleTechnical = document.getElementById("btn-toggle-technical");
const technicalDetailsCollapse = document.getElementById("technical-details-collapse");

const lotesRecomendadosGrid = document.getElementById("lotes-recomendados-grid");
const lotesTableBody = document.getElementById("lotes-table-body");
const btnToggleLotesList = document.getElementById("btn-toggle-lotes-list");
const lotesListCollapse = document.getElementById("lotes-list-collapse");
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
let lastFocusedElement = null;

// --- 4. Navigation & Layout Scroll Actions ---

// Header background change on scroll (within the scroll container)
const scrollContainer = document.querySelector(".scroll-container");
if (scrollContainer) {
  scrollContainer.addEventListener("scroll", () => {
    if (scrollContainer.scrollTop > 50) {
      header.classList.add("scrolled-fallback");
    } else {
      header.classList.remove("scrolled-fallback");
    }
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
  card.addEventListener("click", () => {
    const sendaKey = card.getAttribute("data-senda");
    selectSenda(sendaKey, card);
  });

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
    sendaCards.forEach(c => {
      c.classList.remove("active");
      c.setAttribute("aria-expanded", "false");
    });
    cardElement.classList.add("active");
    cardElement.setAttribute("aria-expanded", "true");
    
    document.body.className = "";
    document.body.classList.add(`theme-${sendaKey}`);
    
    loadSendaDetails(sendaKey);
    // Explicitly show details drawer when clicked
    detailsContainer.style.display = "block";
  }, () => {
    detailsTitle.focus();
    detailsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function loadSendaDetails(key) {
  const data = sendasData[key];
  if (!data) return;
  
  currentSendaKey = key;
  currentCarouselImages = data.images;
  currentCarouselIndex = 0;
  
  detailsSubtitle.textContent = data.subtitle;
  detailsTitle.textContent = data.title;
  detailsStory.textContent = data.story;
  
  // Amenities list populate
  detailsAmenities.innerHTML = "";
  data.amenities.forEach(amenity => {
    const item = document.createElement("div");
    item.className = "amenity-item";
    item.innerHTML = `<span class="amenity-bullet"></span>${amenity}`;
    detailsAmenities.appendChild(item);
  });
  
  // Carousel slides populate
  galleryCarousel.innerHTML = "";
  data.images.forEach(imgUrl => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";
    slide.style.backgroundImage = `url('${imgUrl}')`;
    galleryCarousel.appendChild(slide);
  });
  updateCarouselPosition();
  
  // Change hero background
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${data.images[0]}')`;
  }
}

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

if (detailsCtaBtn) {
  detailsCtaBtn.addEventListener("click", () => {
    let filterVal = "all";
    if (currentSendaKey === "encuentro") filterVal = "1";
    if (currentSendaKey === "movimiento") filterVal = "2";
    if (currentSendaKey === "calma") filterVal = "3";
    
    const targetFilterBtn = document.querySelector(`.filter-btn[data-filter="${filterVal}"]`);
    if (targetFilterBtn) {
      targetFilterBtn.click();
    }
    
    document.getElementById("lotes").scrollIntoView({ behavior: "smooth" });
    // Hide details drawer
    detailsContainer.style.display = "none";
  });
}

// --- 6. Technical Specifications Tabs ---
specTabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab");
    
    performTransition(() => {
      specTabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      
      specPanes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === `pane-${tabName}`) {
          pane.classList.add("active");
        }
      });
    });
  });
});

if (btnToggleTechnical && technicalDetailsCollapse) {
  btnToggleTechnical.addEventListener("click", () => {
    const isExpanded = btnToggleTechnical.getAttribute("aria-expanded") === "true";
    btnToggleTechnical.setAttribute("aria-expanded", !isExpanded);
    technicalDetailsCollapse.setAttribute("aria-hidden", isExpanded ? "true" : "false");
    technicalDetailsCollapse.style.display = isExpanded ? "none" : "flex";
    btnToggleTechnical.innerHTML = isExpanded 
      ? 'Ver Ficha Técnica Completa <i class="fa-solid fa-chevron-down"></i>' 
      : 'Ocultar Ficha Técnica <i class="fa-solid fa-chevron-up"></i>';
  });
}

// --- 7. Lotes Grid rendering, filtering and sorting ---
let currentFilter = "all";
let currentSearch = "";
let currentSort = "num-asc";

function renderLotesGrid() {
  lotesRecomendadosGrid.innerHTML = "";
  lotesTableBody.innerHTML = "";
  
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
  
  filteredLotes.sort((a, b) => {
    if (currentSort === "num-asc") return a.id - b.id;
    if (currentSort === "num-desc") return b.id - a.id;
    if (currentSort === "area-desc") return b.area - a.area;
    if (currentSort === "area-asc") return a.area - b.area;
    return 0;
  });
  
  // Render recommended postcards (max 3)
  const recommendedLotes = filteredLotes.slice(0, 3);
  
  if (recommendedLotes.length === 0) {
    lotesRecomendadosGrid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; padding: 4rem 0; color: var(--color-salvia);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
        <p style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">No se encontraron lotes que coincidan con la búsqueda.</p>
      </div>
    `;
  } else {
    const stage1Photos = ["IMG_4586.webp", "IMG_4588.webp", "IMG_4590.webp", "IMG_4591.webp", "IMG_4675.webp"];
    const stage2Photos = ["IMG_4619.webp", "IMG_4650.webp", "IMG_4658.webp", "IMG_4682.webp", "IMG_4684.webp", "IMG_4687.webp"];
    const stage3Photos = ["IMG_4592.webp", "IMG_4593.webp", "IMG_4595.webp", "IMG_4626.webp", "IMG_4638.webp", "IMG_4648.webp", "IMG_4649.webp", "IMG_4663.webp", "IMG_4667.webp", "IMG_4668.webp"];
    
    recommendedLotes.forEach(lote => {
      const card = document.createElement("div");
      card.className = "lote-preview-card";
      
      const stageColor = lote.stage === 1 ? "#2B7A8C" : lote.stage === 2 ? "#3D5C34" : "#9A7D45";
      const stageLabel = lote.stage === 1 ? "Etapa I · Del Agua" : lote.stage === 2 ? "Etapa II · Del Bosque" : "Etapa III · Del Viento";
      card.style.setProperty("--prev-color", stageColor);
      
      const photos = lote.stage === 1 ? stage1Photos : (lote.stage === 2 ? stage2Photos : stage3Photos);
      const photoName = photos[lote.id % photos.length];
      const photoUrl = `assets/img/${photoName}`;
      
      let desc = "";
      if (lote.stage === 1) {
        desc = "Ubicación privilegiada en la Senda del Encuentro. Lote de topografía suave, a pocos metros del Mall Comercial y la portería general. Excelente conectividad y cercanía social.";
      } else if (lote.stage === 2) {
        desc = "Emplazamiento único en media ladera en la Senda del Movimiento. Ofrece visuales espectaculares hacia Cerro Tusa y el valle del suroeste, ideal para un estilo de vida activo.";
      } else {
        desc = "Refugio de serenidad absoluto en la Senda de la Calma. Lote de gran extensión rodeado de bosque nativo y el murmullo de la quebrada, cercano a la estancia equina.";
      }
      
      card.innerHTML = `
        <div class="lote-prev-img" style="background-image: url('${photoUrl}')"></div>
        <div class="lote-prev-body">
          <span class="lote-prev-etapa">${stageLabel}</span>
          <h3 class="lote-prev-title">${lote.name}</h3>
          <div class="lote-prev-stat">
            <span>Área Privada</span>
            <span>${lote.area.toLocaleString('es-CO')} m²</span>
          </div>
          <p class="lote-prev-desc">${desc}</p>
        </div>
      `;
      
      card.addEventListener("click", () => {
        lastFocusedElement = card;
        openLoteModal(lote);
      });
      
      lotesRecomendadosGrid.appendChild(card);
    });
  }
  
  // Render Technical list
  if (filteredLotes.length === 0) {
    lotesTableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2rem; color: var(--color-salvia);">
          No se encontraron lotes.
        </td>
      </tr>
    `;
  } else {
    filteredLotes.forEach(lote => {
      const row = document.createElement("tr");
      const stageLabel = lote.stage === 1 ? "Etapa I - Del Agua" : lote.stage === 2 ? "Etapa II - Del Bosque" : "Etapa III - Del Viento";
      const stageColor = lote.stage === 1 ? "#2B7A8C" : lote.stage === 2 ? "#3D5C34" : "#9A7D45";
      
      row.innerHTML = `
        <td style="font-weight: 600; padding: 0.8rem;">${lote.name}</td>
        <td style="text-align: right; padding: 0.8rem;">${lote.area.toLocaleString('es-CO')} m²</td>
        <td style="padding: 0.8rem; padding-left: 2rem; color: ${stageColor}; font-weight: 600;">${stageLabel}</td>
        <td style="text-align: center; padding: 0.8rem;">
          <span style="background-color: rgba(61,92,52,0.08); color: #3D5C34; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.7rem; font-weight: 700; font-family: var(--font-sans); text-transform: uppercase;">Disponible</span>
        </td>
        <td style="text-align: center; padding: 0.8rem;">
          <button class="filter-btn" type="button" style="padding: 0.4rem 1rem; border-color: ${stageColor}; color: ${stageColor}; background: transparent;">Ficha</button>
        </td>
      `;
      
      const rowBtn = row.querySelector("button");
      rowBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        lastFocusedElement = rowBtn;
        openLoteModal(lote);
      });
      
      lotesTableBody.appendChild(row);
    });
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.getAttribute("data-filter");
    performTransition(() => renderLotesGrid());
  });
});

searchLoteInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderLotesGrid();
});

sortLotesSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  performTransition(() => renderLotesGrid());
});

if (btnToggleLotesList && lotesListCollapse) {
  btnToggleLotesList.addEventListener("click", () => {
    const isExpanded = btnToggleLotesList.getAttribute("aria-expanded") === "true";
    btnToggleLotesList.setAttribute("aria-expanded", !isExpanded);
    lotesListCollapse.setAttribute("aria-hidden", isExpanded ? "true" : "false");
    lotesListCollapse.style.display = isExpanded ? "none" : "flex";
    btnToggleLotesList.innerHTML = isExpanded 
      ? 'Ver Listado Técnico (62 predios) <i class="fa-solid fa-chevron-down"></i>' 
      : 'Ocultar Listado Técnico <i class="fa-solid fa-chevron-up"></i>';
  });
}

// --- 8. Lote Detail Modal ---
function openLoteModal(lote) {
  modalTitleNum.textContent = lote.name;
  
  const stageLabel = lote.stage === 1 ? "Etapa I - Del Agua" : lote.stage === 2 ? "Etapa II - Del Bosque" : "Etapa III - Del Viento";
  const stageColor = lote.stage === 1 ? "#2B7A8C" : lote.stage === 2 ? "#3D5C34" : "#9A7D45";
  
  modalStageBadge.textContent = stageLabel;
  modalStageBadge.style.backgroundColor = stageColor;
  modalStageBadge.style.color = "var(--color-cream)";
  
  modalSpecArea.textContent = `${lote.area.toLocaleString('es-CO')} m²`;
  
  let boundariesVal = "176.1 m";
  if (lote.stage === 2) boundariesVal = "165.8 m";
  if (lote.stage === 3) boundariesVal = "163.6 m";
  modalSpecBoundaries.textContent = boundariesVal;

  const stage1Images = ["assets/img/IMG_4586.webp", "assets/img/IMG_4588.webp", "assets/img/IMG_4590.webp", "assets/img/IMG_4591.webp", "assets/img/IMG_4675.webp"];
  const stage2Images = ["assets/img/IMG_4619.webp", "assets/img/IMG_4650.webp", "assets/img/IMG_4658.webp", "assets/img/IMG_4682.webp", "assets/img/IMG_4684.webp", "assets/img/IMG_4687.webp"];
  const stage3Images = ["assets/img/IMG_4592.webp", "assets/img/IMG_4593.webp", "assets/img/IMG_4595.webp", "assets/img/IMG_4626.webp", "assets/img/IMG_4638.webp", "assets/img/IMG_4648.webp", "assets/img/IMG_4649.webp", "assets/img/IMG_4663.webp", "assets/img/IMG_4667.webp", "assets/img/IMG_4668.webp"];

  let selectedImg = "";
  if (lote.stage === 1) selectedImg = stage1Images[lote.id % stage1Images.length];
  else if (lote.stage === 2) selectedImg = stage2Images[lote.id % stage2Images.length];
  else selectedImg = stage3Images[lote.id % stage3Images.length];
  
  const modalImgHeader = document.getElementById("modal-image-header");
  if (modalImgHeader) {
    modalImgHeader.style.backgroundImage = `url('${selectedImg}')`;
  }
  
  let recText = "";
  if (lote.stage === 1) {
    recText = "Ideal para quienes valoran la conectividad y la comodidad. Estarás a pocos pasos del Mall Comercial y la Portería principal, facilitando compras rápidas del día a día y gozando de una vida social integrada en un entorno natural.";
  } else if (lote.stage === 2) {
    recText = "Recomendado para amantes del bienestar activo y de la exploración al aire libre. Su cercanía a los senderos deportivos que ascienden al Mirador Panorámico te permitirá disfrutar de trekking y atardeceres increíbles sobre Cerro Tusa.";
  } else if (lote.stage === 3) {
    recText = "Perfecto para quienes buscan silencio y desconexión absoluta en la montaña. Rodeado de bosque nativo y el susurro de la quebrada. Ideal para meditar, practicar yoga en los decks fluviales y estar a pasos de la estancia equina.";
  }
  modalRecText.textContent = recText;
  
  const interesDropdown = document.getElementById("interes");
  if (interesDropdown) {
    if (lote.stage === 1) interesDropdown.value = "encuentro";
    if (lote.stage === 2) interesDropdown.value = "movimiento";
    if (lote.stage === 3) interesDropdown.value = "calma";
  }
  
  const mensajeInput = document.getElementById("mensaje");
  if (mensajeInput) {
    mensajeInput.value = `Hola, me interesa conocer más detalles comerciales sobre el Lote ${lote.name.replace("Lote ", "")} de la Etapa ${lote.stage}.`;
  }

  performTransition(() => {
    loteModal.classList.add("active");
    loteModal.setAttribute("aria-hidden", "false");
  }, () => {
    modalTitleNum.focus();
  });
}

function closeLoteModal() {
  performTransition(() => {
    loteModal.classList.remove("active");
    loteModal.setAttribute("aria-hidden", "true");
  }, () => {
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  });
}

closeModalBtn.addEventListener("click", closeLoteModal);
window.addEventListener("click", (e) => {
  if (e.target === loteModal) closeLoteModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && loteModal.classList.contains("active")) {
    closeLoteModal();
  }
});

// --- 9. Lead Capture & Toast Notifications ---
leadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (!leadForm.checkValidity()) {
    leadForm.querySelectorAll(".form-control").forEach(input => {
      if (!input.validity.valid) {
        input.setAttribute("aria-invalid", "true");
      } else {
        input.removeAttribute("aria-invalid");
      }
    });
    showToast("Por favor, completa los campos requeridos.", "#AE5D1F");
    return;
  }
  
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const interesVal = document.getElementById("interes").value;
  const mensaje = document.getElementById("mensaje").value;
  
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
  
  let sendaText = "el proyecto general";
  if (interesVal === "encuentro") sendaText = "la Senda del Encuentro (Etapa I)";
  if (interesVal === "movimiento") sendaText = "la Senda del Movimiento (Etapa II)";
  if (interesVal === "calma") sendaText = "la Senda de la Calma (Etapa III)";
  
  showToast(`¡Gracias, ${nombre.split(' ')[0]}! Hemos registrado tu interés en ${sendaText}. Un asesor de CNTXT se comunicará contigo pronto.`, "var(--theme-accent)");
  
  leadForm.reset();
  leadForm.querySelectorAll(".form-control").forEach(input => {
    input.removeAttribute("aria-invalid");
  });
});

function showToast(message, borderStyle) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.style.borderLeft = `4px solid ${borderStyle}`;
  toast.style.padding = "1rem 1.5rem";
  toast.style.background = "var(--color-white)";
  toast.style.color = "var(--color-dark)";
  toast.style.boxShadow = "var(--shadow-modal)";
  toast.style.marginBottom = "1rem";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "12px";
  toast.style.fontFamily = "var(--font-sans)";
  toast.style.fontSize = "0.8rem";
  toast.style.fontWeight = "600";
  toast.style.borderRadius = "4px";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";
  toast.style.transition = "all 0.4s ease";
  
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: ${borderStyle}; font-size: 1.1rem;"></i><span>${message}</span>`;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 50);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-20px)";
    setTimeout(() => {
      toast.remove();
    }, 450);
  }, 5000);
}

// --- 13. Dynamic Timeline Sinuous Path Alignment ---
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

// --- 10. Initialisation on page load ---
window.addEventListener("DOMContentLoaded", () => {
  // Render lotes grid
  renderLotesGrid();
  
  // Default load Senda de la Calma detailed data (keeps container hidden on load)
  loadSendaDetails("calma");

  // --- 11. Video Start Time Control (Skip logo intro and start directly at map) ---
  const cinematicVideo = document.querySelector(".video-bg");
  const videoStartSecs = 7;

  if (cinematicVideo) {
    let isInitialized = false;
    const initVideoControl = () => {
      if (isInitialized) return;
      isInitialized = true;

      // Only apply skip and loop correction to the full desktop video (duration > 70s)
      if (cinematicVideo.duration > 70) {
        cinematicVideo.currentTime = videoStartSecs;
        cinematicVideo.addEventListener("timeupdate", () => {
          if (cinematicVideo.currentTime < 0.5) {
            cinematicVideo.currentTime = videoStartSecs;
          }
        });
      }
    };

    if (cinematicVideo.readyState >= 1) {
      initVideoControl();
    } else {
      cinematicVideo.addEventListener("loadedmetadata", initVideoControl);
    }
  }

  // --- 12. Scroll Reveal IntersectionObserver ---
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Stagger reveal of any immediate .reveal children if they exist
          const staggers = entry.target.querySelectorAll(".reveal-child");
          staggers.forEach((child, idx) => {
            setTimeout(() => {
              child.classList.add("active");
            }, idx * 100);
          });
        }
      });
    }, {
      root: window.innerWidth > 768 ? document.querySelector(".scroll-container") : null,
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- 14. Timeline Sinuous Path Discovery Logic (Station 3 to 4) ---
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
            btnTraceTimeline.style.background = "var(--color-salvia)";
            btnTraceTimeline.style.borderColor = "var(--color-salvia)";
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

  // Bind responsive alignment events for timeline path
  updateTimelinePath();
  window.addEventListener("resize", updateTimelinePath);
  window.addEventListener("load", updateTimelinePath);
  setTimeout(updateTimelinePath, 500); // Fallback deferred calculations
});
