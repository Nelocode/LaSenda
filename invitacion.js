/* ==========================================================================
   Javascript de Invitación Móvil - La Senda
   Mobile-First Interactive Hooks & Single Screen Controls
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  const heroVideo = document.getElementById("hero-video");
  const introOverlay = document.getElementById("intro-overlay");

  // --- 2. Dismiss Intro Overlay & Unmute Audio ---
  const dismissIntro = () => {
    if (!introOverlay || introOverlay.classList.contains("fade-out")) return;
    
    introOverlay.classList.add("fade-out");
    console.log("[La Senda Video] Intro overlay dismissed by user.");

    // Play video unmuted from the beginning (complies with browser policies)
    if (heroVideo) {
      heroVideo.muted = false;
      heroVideo.currentTime = 0; // Reset video to the beginning
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

    // Fade out brand logo overlay after 10 seconds of user interaction
    const identityOverlay = document.querySelector(".video-identity-container");
    if (identityOverlay) {
      setTimeout(() => {
        identityOverlay.classList.add("fade-out-logo");
        console.log("[La Senda Video] Brand logo overlay faded out after 10s.");
      }, 10000);
    }
  };

  const btnEnter = document.getElementById("btn-enter");
  if (btnEnter) {
    // Force interaction directly with the button to enable audio autoplay compliance
    btnEnter.addEventListener("click", (e) => {
      e.stopPropagation();
      dismissIntro();
    });
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
      
      const whatsappNumber = "573243356537"; // Customer's designated WhatsApp
      const rsvpMsg = "Hola,\n\nQuiero confirmar mi asistencia al lanzamiento privado de La Senda. Muchas gracias por la invitación.\n\nNos vemos pronto.";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rsvpMsg)}`;
      
      showToast("Redireccionando a WhatsApp de confirmación...", "var(--color-primary-green)");
      
      setTimeout(() => {
        window.location.href = waUrl;
      }, 500);
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
