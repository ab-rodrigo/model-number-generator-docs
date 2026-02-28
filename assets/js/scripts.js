document.addEventListener("DOMContentLoaded", function () {
    const offcanvasElement = document.getElementById("offcanvasNavbar");

    if (offcanvasElement && window.bootstrap) {
        const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

        document.addEventListener("click", function (event) {
            if (event.target.closest(".offcanvas-dismiss")) {
                offcanvasInstance.hide();
            }
        });
    }

    const htmlElement = document.documentElement;
    const themeToggles = document.querySelectorAll(".darkModeToggle");

    function applyTheme(theme) {
        htmlElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("bs-theme", theme);

        themeToggles.forEach(function (toggle) {
            if (theme === "dark") {
                toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
                toggle.setAttribute("aria-label", "light");
            } else {
                toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
                toggle.setAttribute("aria-label", "dark");
            }
        });
    }

    const savedTheme = localStorage.getItem("bs-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    applyTheme(savedTheme || systemTheme);

    themeToggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            const currentTheme = htmlElement.getAttribute("data-bs-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            applyTheme(newTheme);
        });
    });

    function openImageZoom(imageSrc, imageAlt) {
        if (document.querySelector(".zoomed-img-overlay")) return;

        const overlay = document.createElement("div");
        overlay.className = "zoomed-img-overlay";
        overlay.tabIndex = 0;

        Object.assign(overlay.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "9999",
            cursor: "zoom-out"
        });

        overlay.innerHTML = `
            <img src="${imageSrc}" 
                 alt="${imageAlt}" 
                 style="max-width:95%; max-height:95vh; border-radius:4px; box-shadow:0 0 20px rgba(0,0,0,0.5);">
        `;

        function closeOverlay() {
            overlay.remove();
            document.body.style.overflow = "";
        }

        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                closeOverlay();
            }
        });
        overlay.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeOverlay();
            }
        });

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";
        overlay.focus();
    }

    document.querySelectorAll("img:not(.no-zoom)").forEach(function (img) {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", function () {
            openImageZoom(img.src, img.alt);
        });
    });

    const currentPath = window.location.pathname;

    document.querySelectorAll(".lang-option").forEach(function (link) {
        const langCode = link.getAttribute("data-lang");

        if (currentPath.includes(langCode)) {
            link.classList.add("active");
        }

        link.addEventListener("click", function () {
            const originalHref = this.getAttribute("href");
            const manualPath = originalHref.replace(
                "../",
                "../model-number-generator-doc/"
            );

            localStorage.setItem("user-manual-lang", manualPath);
        });
    });
});