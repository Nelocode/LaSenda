/* ==========================================================================
   Javascript de Invitación Móvil - La Senda
   Mobile-First Calendar Events & RSVP Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. Video Autoplay Assurance & Unmute on User Interaction ---
  const heroVideo = document.getElementById("hero-video");
  const scrollCont = document.querySelector(".scroll-container");

  if (heroVideo) {
    // 1. Attempt unmuted autoplay first (if browser profile/settings allow it)
    heroVideo.muted = false;
    
    heroVideo.play()
      .then(() => {
        console.log("[La Senda Video] Unmuted autoplay succeeded on load.");
      })
      .catch(error => {
        console.log("[La Senda Video] Unmuted autoplay blocked. Falling back to muted autoplay...", error);
        
        // 2. Mute the video and play so it autoplays visually
        heroVideo.muted = true;
        heroVideo.play().catch(err => {
          console.log("[La Senda Video] Muted autoplay also blocked.", err);
        });

        // 3. Register document-wide listeners to unmute on the VERY FIRST gesture anywhere on screen
        const unmuteOnGesture = () => {
          heroVideo.muted = false;
          heroVideo.play();
          console.log("[La Senda Video] Video unmuted via screen gesture.");
          removeGestureListeners();
        };

        const removeGestureListeners = () => {
          document.removeEventListener("click", unmuteOnGesture);
          document.removeEventListener("touchstart", unmuteOnGesture);
          document.removeEventListener("scroll", unmuteOnGesture);
          if (scrollCont) {
            scrollCont.removeEventListener("scroll", unmuteOnGesture);
          }
        };

        document.addEventListener("click", unmuteOnGesture);
        document.addEventListener("touchstart", unmuteOnGesture);
        document.addEventListener("scroll", unmuteOnGesture);
        if (scrollCont) {
          scrollCont.addEventListener("scroll", unmuteOnGesture);
        }
      });
  }

  // --- 2. Calendar Event Configuration ---
  const eventDetails = {
    title: "Lanzamiento Exclusivo - Proyecto La Senda",
    description: "Lanzamiento privado de parcelas premium. Vive la experiencia y el retorno a lo esencial en Titiribí.",
    location: "Proyecto La Senda, Titiribí, Antioquia, Colombia",
    startUTC: "20260620T150000Z", // June 20, 2026, 10:00 AM COT (UTC-5)
    endUTC: "20260620T210000Z",   // June 20, 2026, 04:00 PM COT (UTC-5)
    startICS: "20260620T100000",   // Local time for ICS
    endICS: "20260620T160000"
  };

  // --- 3. Google Calendar URL Generator ---
  const btnGoogleCal = document.getElementById("opt-gcal");
  if (btnGoogleCal) {
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startUTC}/${eventDetails.endUTC}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}&sf=true&output=xml`;
    btnGoogleCal.href = gCalUrl;
    btnGoogleCal.addEventListener("click", () => {
      showToast("Abriendo Google Calendar...", "var(--color-accent-gold)");
      toggleCalendarMenu(false);
    });
  }

  // --- 4. ICS File Downloader ---
  const btnIcsCal = document.getElementById("opt-ics");
  if (btnIcsCal) {
    btnIcsCal.addEventListener("click", (e) => {
      e.preventDefault();
      
      const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//La Senda//Lanzamiento//ES",
        "CALSCALE:GREGORIAN",
        "BEGIN:VEVENT",
        `SUMMARY:${eventDetails.title}`,
        `DTSTART:${eventDetails.startUTC}`,
        `DTEND:${eventDetails.endUTC}`,
        `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
        "UID:uid-lasenda-lanzamiento-2026@lasenda.com",
        `DESCRIPTION:${eventDetails.description}`,
        `LOCATION:${eventDetails.location}`,
        "STATUS:CONFIRMED",
        "SEQUENCE:0",
        "BEGIN:VALARM",
        "TRIGGER:-PT2H", // Alarm 2 hours before
        "DESCRIPTION:Recordatorio Lanzamiento La Senda",
        "ACTION:DISPLAY",
        "END:VALARM",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      try {
        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "lanzamiento-la-senda.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showToast("Descargando archivo de calendario (.ics)", "var(--color-primary-green)");
      } catch (err) {
        console.error("[La Senda Calendar] Error generating ICS file.", err);
        showToast("No se pudo descargar el calendario. Prueba Google Calendar.", "#AE5D1F");
      }
      
      toggleCalendarMenu(false);
    });
  }

  // --- 5. Calendar Options Dropdown Trigger ---
  const btnCalendarTrigger = document.getElementById("btn-calendar-trigger");
  const calendarMenu = document.getElementById("calendar-options-menu");

  const toggleCalendarMenu = (forceState) => {
    const isShowing = calendarMenu.classList.contains("show");
    const showMenu = forceState !== undefined ? forceState : !isShowing;
    
    if (showMenu) {
      calendarMenu.classList.add("show");
      calendarMenu.setAttribute("aria-hidden", "false");
      btnCalendarTrigger.setAttribute("aria-expanded", "true");
    } else {
      calendarMenu.classList.remove("show");
      calendarMenu.setAttribute("aria-hidden", "true");
      btnCalendarTrigger.setAttribute("aria-expanded", "false");
    }
  };

  if (btnCalendarTrigger && calendarMenu) {
    btnCalendarTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCalendarMenu();
    });

    // Close menu when clicking outside
    document.addEventListener("click", () => {
      toggleCalendarMenu(false);
    });
  }

  // --- 6. RSVP Confirm Assist WhatsApp Redirect ---
  const btnRsvp = document.getElementById("btn-rsvp");
  if (btnRsvp) {
    btnRsvp.addEventListener("click", () => {
      const whatsappNumber = "573000000000"; // Sales / Organizer template number (user can adjust easily)
      const rsvpMsg = "Hola, confirmo mi asistencia al evento de lanzamiento exclusivo de La Senda el próximo sábado 20 de junio.";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rsvpMsg)}`;
      
      showToast("Redireccionando a WhatsApp de confirmación...", "var(--color-primary-green)");
      
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1000);
    });
  }

  // --- 7. Nature Window Portal Transition Effect ---
  const natureWindow = document.querySelector(".nature-window-arch");
  const scrollContainer = document.querySelector(".scroll-container");

  if (natureWindow) {
    natureWindow.addEventListener("click", () => {
      // Gentle, organic zoom/scale up of the window
      natureWindow.classList.add("portal-clicked");
      
      // Smooth fade out of the entire scroll container (gives a premium fade-to-black/green effect)
      if (scrollContainer) {
        scrollContainer.style.transition = "opacity 0.8s ease-in-out";
        scrollContainer.style.opacity = "0";
      }
      
      showToast("Adentrándote en La Senda...", "var(--color-accent-gold)");

      // Redirect after transition completes (800ms)
      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);
    });
  }

  // --- 8. Toast Notification Handler ---
  const toastContainer = document.getElementById("toast-container");
  
  function showToast(message, borderStyle) {
    if (!toastContainer) return;
    
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.style.borderLeftColor = borderStyle;
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size: 1.2rem; color: ${borderStyle};"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    
    // Slide in toast
    setTimeout(() => {
      toast.classList.add("show");
    }, 50);
    
    // Dismiss toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 4000);
  }

});
