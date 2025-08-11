
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const toggleButton = document.querySelector(".hidden-toggle-btn")
const plusIcon = document.querySelector(".plus-icon")
const minusIcon = document.querySelector(".minus-icon")

plusButton.addEventListener("click", expandFunction);
minusButton.addEventListener("click", minimizeFunction);
toggleButton.addEventListener("click", toggleInformation);
let isOpen = false;

function expandFunction() {
  if (isOpen) return;
  isOpen = true;

  gsap.fromTo(".information",
     {y: 200, opacity: 0 },
     { duration: 1, opacity: 1, y:-20, ease: "power2.out"}
    
    );
  gsap.to(".two", { duration: 0.8, x:0, y:-20, fontSize: "4rem", ease: "power2.inOut" });
  gsap.to(".bassBoosted", { duration: 0.8, x:0, y:-20, fontSize: "3rem", ease: "power2.inOut"});
}

function minimizeFunction() {
  if (!isOpen) return;
  isOpen = false;

  gsap.fromTo(".information",
    { duration: 1, opacity: 1, y:0, ease: "power2.out"},
    {y: 200, opacity: 0 }
    );
  gsap.to(".two", { duration: 0.8, x:0, y:0, fontSize: "5rem", ease: "power2.inOut" });
  gsap.to(".bassBoosted", { duration: 0.8, x:0, y:0, fontSize: "3.6rem", ease: "power2.inOut"});
} 

function toggleInformation() {
  if (isOpen) {
    gsap.fromTo(".information",
      { opacity: 1, y: 0 },
      { duration: 1, y: 200, opacity: 0, ease: "power2.out"}
    );

    gsap.to(".two", { duration: 0.8, x: 0, y:0, fontSize: "5rem", ease: "power2.inOut" });
    gsap.to(".bassBoosted", { duration: 0.8, x: 0, y:0, fontSize: "3.6rem", ease: "power2.inOut" });

    gsap.to(minusIcon, { opacity: 0, duration: 0.3, onComplete: () => {
      minusIcon.style.pointerEvents = "none";
      plusIcon.style.pointerEvents = "auto";
    }});

    gsap.to(plusIcon, { opacity: 1, duration: 0.3 });
    isOpen = false;
    return;
  }

  gsap.fromTo(".information",
    { y: 200, opacity: 0 },
    { duration: 1, opacity: 1, y: -20, ease: "power2.out"}
  );

  gsap.to(".two", { duration: 1, x: 0, y:-20, fontSize: "4rem", ease: "power2.inOut" });
  gsap.to(".bassBoosted", { duration: 1, x: 0, y:-20, fontSize: "3rem", ease: "power2.inOut" });

  gsap.to(plusIcon, { opacity: 0, duration: 0.3, onComplete: () => {
      plusIcon.style.pointerEvents = "none";
      minusIcon.style.pointerEvents = "auto";
    }});
  gsap.to(minusIcon, { opacity: 1, duration: 0.3 });

  isOpen = true;
}



document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes("samsungbrowser") || ua.includes("samsung internet") || ua.includes("wv")) {
    const banner = document.createElement("div");
    banner.textContent = "For the best experience, open this site in Chrome.";
    banner.style.position = "fixed";
    banner.style.bottom = "10px";
    banner.style.left = "50%";
    banner.style.transform = "translateX(-50%)";
    banner.style.backgroundColor = "#686868ff";
    banner.style.color = "#000";
    banner.style.padding = "10px 20px";
    banner.style.borderRadius = "8px";
    banner.style.fontSize = "14px";
    banner.style.width = "100%"
    banner.style.zIndex = "9999";
    banner.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(banner);
  }
});
