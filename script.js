const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const body = document.body;

if (hamburger && navbar) {
  /* ── Hamburger open/close ──────────────────────────────── */
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    body.classList.toggle("nav-open");
  });

  const parentItems = navbar.querySelectorAll("li:has(> .dropdown)");

  parentItems.forEach(function (li) {
    const parentLink = li.querySelector(":scope > a");

    parentLink.addEventListener("click", function (e) {
      if (window.getComputedStyle(hamburger).display === "none") return;
      e.preventDefault();

      parentItems.forEach(function (other) {
        if (other !== li) other.classList.remove("dropdown-open");
      });

      li.classList.toggle("dropdown-open");
    });
  });

  const destinationLinks = navbar.querySelectorAll(
    "a:not(li:has(> .dropdown) > a)",
  );

  destinationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
      body.classList.remove("nav-open");

      parentItems.forEach(function (li) {
        li.classList.remove("dropdown-open");
      });
    });
  });
}
