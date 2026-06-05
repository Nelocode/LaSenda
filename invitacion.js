/* ==========================================================================
   Javascript de Invitación Móvil - La Senda
   Mobile-First Interactive Hooks & Single Screen Controls
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  const heroVideo = document.getElementById("hero-video");
  const introOverlay = document.getElementById("intro-overlay");
  const loaderBar = document.querySelector(".intro-loader-bar");
  
  // --- 1. 3-Second Hook Loader Animation ---
  if (loaderBar) {
    // Small delay to trigger smooth transition after render
    setTimeout(() => {
      loaderBar.style.transition = "width 3.0s linear";
      loaderBar.style.width = "100%";
    }, 100);
  }

  // --- 2. Dismiss Intro Overlay & Unmute Audio ---
  const dismissIntro = () => {
    if (!introOverlay || introOverlay.classList.contains("fade-out")) return;
    
    introOverlay.classList.add("fade-out");
    console.log("[La Senda Video] Intro overlay dismissed by user.");

    // Play video unmuted since user interacted (complies with browser policies)
    if (heroVideo) {
      heroVideo.muted = false;
      heroVideo.play()
        .then(() => {
          console.log("[La Senda Video] Unmuted play succeeded via click gesture.");
        })
        .catch(err => {
          console.log("[La Senda Video] Unmuted play blocked. Retrying muted...", err);
          heroVideo.muted = true;
          heroVideo.play().catch(e => console.log("[La Senda Video] Muted play also blocked: ", e));
        });
    }
  };

  if (introOverlay) {
    // Dismiss on click/touch anywhere on the overlay
    introOverlay.addEventListener("click", dismissIntro);
    introOverlay.addEventListener("touchstart", dismissIntro);

    // Auto-dismiss safety fallback after 3.2 seconds
    setTimeout(() => {
      if (!introOverlay.classList.contains("fade-out")) {
        introOverlay.classList.add("fade-out");
        console.log("[La Senda Video] Intro overlay auto-dismissed.");
        if (heroVideo) {
          // Play muted by default on auto-dismiss since no click might have happened
          heroVideo.play().catch(err => console.log("[La Senda Video] Auto-play blocked.", err));
        }
      }
    }, 3200);
  }

  // --- 3. Video Timeline Progress Bar ---
  if (heroVideo) {
    const progressBar = document.getElementById("video-progress-bar");
    heroVideo.addEventListener("timeupdate", () => {
      if (heroVideo.duration && progressBar) {
        const percentage = (heroVideo.currentTime / heroVideo.duration) * 100;
        progressBar.style.width = `${percentage}%`;
      }
    });
  }

  // --- 4. RSVP Confirm Assist WhatsApp Redirect ---
  const btnRsvp = document.getElementById("btn-rsvp");
  if (btnRsvp) {
    btnRsvp.addEventListener("click", (e) => {
      e.stopPropagation(); // Avoid triggering page level gestures
      
      const whatsappNumber = "573000000000"; // Sales / Organizer WhatsApp
      const rsvpMsg = "Hola, confirmo mi asistencia al evento de lanzamiento exclusivo de La Senda el próximo viernes 12 de junio.";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rsvpMsg)}`;
      
      showToast("Redireccionando a WhatsApp de confirmación...", "var(--color-primary-green)");
      
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1000);
    });
  }

  // --- 5. Nature Window Portal Transition Effect ---
  const natureWindow = document.querySelector(".nature-window-arch");
  const mainScreen = document.querySelector(".scroll-container");

  if (natureWindow) {
    natureWindow.addEventListener("click", (e) => {
      e.stopPropagation();
      
      // Gentle zoom in
      natureWindow.classList.add("portal-clicked");
      
      // Smooth fade out of main interface
      if (mainScreen) {
        mainScreen.style.transition = "opacity 0.8s ease-in-out";
        mainScreen.style.opacity = "0";
      }
      
      showToast("Adentrándote en La Senda...", "var(--color-accent-gold)");

      // Redirect to main site
      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);
    });
  }

  // --- 6. Toast Notification Handler ---
  const toastContainer = document.getElementById("toast-container");
  
  function showToast(message, borderStyle) {
    if (!toastContainer) return;
    
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.style.borderLeftColor = borderStyle;
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size: 1.2rem; color: ${borderStyle};"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    
    // Slide in
    setTimeout(() => {
      toast.classList.add("show");
    }, 50);
    
    // Dismiss after 4s
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 4000);
  }

});
