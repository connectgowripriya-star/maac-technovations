/* =========================================================
   MAAC TECHNOVATIONS
   Main interactions
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const portalOpen = document.getElementById("portalOpen");
    const portalOverlay = document.getElementById("portalOverlay");
    const portalClose = document.getElementById("portalClose");

    const unveiledButton = document.getElementById("unveiledButton");

   const contentPanels = {
    about: document.getElementById("aboutPanel"),
    products: document.getElementById("productsPanel"),
    technology: document.getElementById("technologyPanel"),
    gallery: document.getElementById("galleryPanel"),
    contact: document.getElementById("contactPanel")
};

    const productModal = document.getElementById("productModal");
    const productModalClose =
        document.getElementById("productModalClose");

    const productModalImage =
        document.getElementById("productModalImage");

    const productModalNumber =
        document.getElementById("productModalNumber");

    const productModalTitle =
        document.getElementById("productModalTitle");

    const productModalTagline =
        document.getElementById("productModalTagline");

    const productModalDescription =
        document.getElementById("productModalDescription");

    const productFeatures =
        document.getElementById("productFeatures");


    /* -----------------------------------------------------
       PRODUCT DATA
    ----------------------------------------------------- */

    const products = {

        coco: {
            number: "01 / COCO MAAC",
            title: "COCO MAAC",
            tagline: "Nature served smartly.",
            image: "assets/cocomaac-logo.png",
            description:
                "A smart coconut vending concept that brings fresh coconut experiences together with modern technology and convenient access.",
            features: [
                "SMART VENDING",
                "FRESH COCONUT EXPERIENCE",
                "MODERN TECHNOLOGY",
                "CONVENIENT ACCESS"
            ]
        },

        chips: {
            number: "02 / FRUIT CHIPS",
            title: "FRUIT CHIPS",
            tagline: "Natural fruit innovations.",
            image: "assets/chip-chip-logo.png",
            description:
                "A growing range of fruit-based snack concepts designed around natural ingredients, variety and modern presentation.",
            features: [
                "MANGO",
                "APPLE",
                "PINEAPPLE",
                "MIXED VARIETIES"
            ]
        },

        juice: {
            number: "03 / FRUIT JUICE",
            title: "FRUIT JUICE",
            tagline: "Fresh natural beverages.",
            image: "assets/pulpivorush-logo.png",
            description:
                "A natural beverage collection designed to bring fruit-based refreshment into a modern, convenient product experience.",
            features: [
                "FRUIT BASED",
                "NATURAL EXPERIENCE",
                "MODERN PACKAGING",
                "PRODUCT INNOVATION"
            ]
        }

    };


    /* -----------------------------------------------------
       PORTAL MENU
    ----------------------------------------------------- */

    const openPortal = () => {

        portalOverlay.classList.add("active");

        portalOverlay.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    };


    const closePortal = () => {

        portalOverlay.classList.remove("active");

        portalOverlay.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "hidden";
    };


    portalOpen.addEventListener("click", openPortal);

    portalClose.addEventListener("click", closePortal);


    /* -----------------------------------------------------
       CONTENT PANELS
    ----------------------------------------------------- */

    const closeAllPanels = () => {

        Object.values(contentPanels).forEach(panel => {

            if (!panel) {
                return;
            }

            panel.classList.remove("active");

            panel.setAttribute(
                "aria-hidden",
                "true"
            );
        });
    };


    const openPanel = (name) => {

        closeAllPanels();

        const panel = contentPanels[name];

        if (!panel) {
            return;
        }

        portalOverlay.classList.remove("active");

        setTimeout(() => {

            panel.classList.add("active");

            panel.setAttribute(
                "aria-hidden",
                "false"
            );

        }, 300);
    };


    document.querySelectorAll(".portal-link").forEach(link => {

        link.addEventListener("click", () => {

            const page = link.dataset.page;

            openPanel(page);

        });

    });


    /* -----------------------------------------------------
       PANEL CLOSE BUTTONS
    ----------------------------------------------------- */

    document.querySelectorAll(".panel-close").forEach(button => {

        button.addEventListener("click", () => {

            closeAllPanels();

        });

    });


   /* -----------------------------------------------------
   MAAC UNVEILED - PRODUCT TOGGLE
----------------------------------------------------- */

const productStrip =
    document.querySelector(".product-strip");

unveiledButton.addEventListener("click", () => {

    const isVisible =
        productStrip.classList.contains("active");

    if (isVisible) {

        productStrip.classList.remove("active");

    } else {

        productStrip.classList.add("active");

    }

});


    /* -----------------------------------------------------
       PRODUCT MODAL
    ----------------------------------------------------- */

    const openProduct = (productKey) => {

        const product = products[productKey];

        if (!product) {
            return;
        }


        productModalNumber.textContent =
            product.number;

        productModalTitle.textContent =
            product.title;

        productModalTagline.textContent =
            product.tagline;

        productModalDescription.textContent =
            product.description;

        productModalImage.src =
            product.image;

        productModalImage.alt =
            product.title;


        productFeatures.innerHTML = "";


        product.features.forEach(feature => {

            const featureItem =
                document.createElement("div");

            featureItem.className =
                "product-feature";

            featureItem.textContent =
                feature;

            productFeatures.appendChild(
                featureItem
            );

        });


        productModal.classList.add("active");

        productModal.setAttribute(
            "aria-hidden",
            "false"
        );

    };


    document.querySelectorAll("[data-product]").forEach(button => {

        button.addEventListener("click", () => {

            const productKey =
                button.dataset.product;

            closeAllPanels();

            portalOverlay.classList.remove(
                "active"
            );

            setTimeout(() => {

                openProduct(productKey);

            }, 180);

        });

    });


    productModalClose.addEventListener(
        "click",
        () => {

            productModal.classList.remove(
                "active"
            );

            productModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );


    /* -----------------------------------------------------
       ESC KEY
    ----------------------------------------------------- */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        portalOverlay.classList.remove(
            "active"
        );

        closeAllPanels();

        productModal.classList.remove(
            "active"
        );

    });

});
