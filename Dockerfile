# ── Build stage ────────────────────────────────────────────────────────────
# (No build tool needed – pure HTML/CSS/JS)
# ── Production stage ───────────────────────────────────────────────────────
FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy site files
COPY index.html    /usr/share/nginx/html/
COPY index.css     /usr/share/nginx/html/
COPY index.js      /usr/share/nginx/html/
COPY assets/       /usr/share/nginx/html/assets/

# Correct permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
