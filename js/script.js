const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// ================= MOBILE MENU =================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");
        navLinks.classList.toggle("active");

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("active");
            navLinks.classList.remove("active");

        });

    });


    // Close menu when clicking outside

    document.addEventListener("click", (event) => {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedMenuButton = menuBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            menuBtn.classList.remove("active");
            navLinks.classList.remove("active");

        }

    });

}


// ================= ESCAPE KEY =================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && menuBtn && navLinks) {

        menuBtn.classList.remove("active");
        navLinks.classList.remove("active");

    }

});


// ================= RESET MENU ON DESKTOP =================

window.addEventListener("resize", () => {

    if (window.innerWidth > 800 && menuBtn && navLinks) {

        menuBtn.classList.remove("active");
        navLinks.classList.remove("active");

    }

});