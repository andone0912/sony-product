
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const toggleButton = document.querySelector(".hidden-toggle-btn");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");
const verticalBar = document.querySelector(".vertical-bar");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const mm = gsap.matchMedia();

document.querySelector(".page-two").style.position = "absolute";
document.querySelector(".page-two").style.top = "0px";

plusButton.addEventListener("click", expandFunction);
minusButton.addEventListener("click", minimizeFunction);
toggleButton.addEventListener("click", toggleInformation);
arrowRight.addEventListener("click", moveRight);
arrowLeft.addEventListener("click", moveLeft);
let isOpen = false;
let pageTwo = false;


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


mm.add("(min-width: 640px)", () => {
  console.log("Desktop listener added");
  document.querySelector(".page-two").style.removeProperty("transform");
  document.querySelector(".page-one").style.removeProperty("transform");



  const verticalBar = document.querySelector(".vertical-bar");

  function scrollHeroDesktop() {
    gsap.killTweensOf(".page-one, .page-two, .vertical-bar > div");
    if (pageTwo) {
      gsap.to(".vertical-bar > div", { y: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.fromTo(".page-one",
         { y: -200, x:0, opacity: 0},
         { y: 0, x:0, opacity: 1, duration: 0.9, ease: "power2.inOut" }
        );
      gsap.to(".page-two", { opacity: 0, y: 300, duration: 0.5, ease: "power2.inOut" });
      pageTwo = false;
    } else {
      gsap.to(".vertical-bar > div", { y: -75, duration: 0.5, ease: "power2.inOut" });
      gsap.to(".page-one", { y: -100, x:0 ,opacity: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.fromTo(".page-two", 
        { opacity: 0, y: 400, x:0, duration: 0.9, ease: "power2.inOut" },
        { opacity: 1, y: 0, x:0, duration: 0.9, ease: "power2.inOut"}
      );
      pageTwo = true;
    }
  }

  verticalBar.addEventListener("click", scrollHeroDesktop);
  return () => {
    console.log("Desktop listener removed");
    verticalBar.removeEventListener("click", scrollHeroDesktop);
  };
});

mm.add("(max-width: 639px)", () => {
  console.log("Mobile listener added");
  document.querySelector(".page-two").style.removeProperty("transform");
  document.querySelector(".page-one").style.removeProperty("transform");

  const verticalBar = document.querySelector(".vertical-bar");

  function scrollHeroMobile() {
    gsap.killTweensOf(".page-one, .page-two, .vertical-bar > div");
    if (pageTwo) {
      gsap.to(".vertical-bar > div", { x:0, y:0, duration: 0.5, ease: "power2.inOut" });
      gsap.fromTo(".page-one", 
        { x: -400, y:0, opacity: 0},
        { x: 0, y:0, opacity: 1, duration: 0.9, ease: "power2.inOut"}
      );
      gsap.to(".page-two", { opacity: 0, x: 400, y:0, duration: 0.5, ease: "power2.inOut" });
      pageTwo = false;
    } else {
      gsap.to(".vertical-bar > div", { x:0, y:-75, duration: 0.5, ease: "power2.inOut" });
      gsap.to(".page-one", { x: -400, y:0, opacity: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.fromTo(".page-two", 
        { opacity: 0, x: 400, y:0},
        { opacity: 1, x: 0, y:0, duration: 0.9, ease: "power2.inOut"}
      );
      pageTwo = true;
    }
  }

  verticalBar.addEventListener("click", scrollHeroMobile);

  return () => {
    console.log("Mobile listener removed");
    verticalBar.removeEventListener("click", scrollHeroMobile);
  };
});

const previews1 = [
  "./images/headphones-left.png",
  "./images/headphones-right.png",
  "./images/center-preview.png"
]

const previews2 = [
  "./images/headphones-right.png",
  "./images/center-preview.png",
  "./images/headphones-left.png"
]


const images = [
  "./images/headphones-image.png",
  "./images/headphone-image2.png",
  "./images/headphone-image1.png"
];



let current = 0;
let current2 = 0;
let current3 = 0; 


function moveRight() {
  current = (current + 1) % images.length;
  current2 = (current2 + 1) % previews1.length;
  current3 = (current3 + 1) % previews2.length;

  const tl = gsap.timeline({
    onComplete: () => {
      document.querySelector(".center-image > img").src = images[current];
      document.querySelector(".headphone-preview-left > img").src = previews1[current2];
      document.querySelector(".headphone-preview-right > img").src = previews2[current3];
    }
  });

  tl.to(".headphone-preview-left", { opacity: 0, scale: 0.9, x: 20, duration: 0.3 })
    .to(".center-image", { opacity: 0, scale: 0.9, x: 30, duration: 0.3}, "-=0.25")
    .to(".headphone-preview-right", { opacity: 0, scale: 0.9, x: 20, duration: 0.3 }, "-=0.25")
    .add(() => {
      gsap.fromTo(".center-image", { opacity: 0, scale: 1.1, x: -30 }, { opacity: 1, scale: 1, x: 0, duration: 0.3 });
      gsap.fromTo(".headphone-preview-left", { opacity: 0, scale: 1.1, x: -20 }, { opacity: 1, scale: 1, x: 0, duration: 0.3, delay: 0.1 });
      gsap.fromTo(".headphone-preview-right", { opacity: 0, scale: 1.1, x: -20 }, { opacity: 1, scale: 1, x: 0, duration: 0.3, delay: 0.2 });
    });
}


function moveLeft() {
  current = (current - 1 + images.length) % images.length;
  current2 = (current2 - 1 + previews1.length) % previews1.length;
  current3 = (current3 - 1 + previews2.length) % previews2.length;

  const tl = gsap.timeline({
    onComplete: () => {
      document.querySelector(".center-image > img").src = images[current];
      document.querySelector(".headphone-preview-left > img").src = previews1[current2];
      document.querySelector(".headphone-preview-right > img").src = previews2[current3];
    }
  });

  tl.to(".headphone-preview-right", { opacity: 0, scale: 0.9, x: 20, duration: 0.3 })
    .to(".center-image", { opacity: 0, scale: 0.9, x: 30, duration: 0.3}, "-=0.25")
    .to(".headphone-preview-left", { opacity: 0, scale: 0.9, x: 20, duration: 0.3 }, "-=0.25")
    .add(() => {
      gsap.fromTo(".center-image", { opacity: 0, scale: 1.1, x: -30 }, { opacity: 1, scale: 1, x: 0, duration: 0.3 });
      gsap.fromTo(".headphone-preview-left", { opacity: 0, scale: 1.1, x: -20 }, { opacity: 1, scale: 1, x: 0, duration: 0.3, delay: 0.1 });
      gsap.fromTo(".headphone-preview-right", { opacity: 0, scale: 1.1, x: -20 }, { opacity: 1, scale: 1, x: 0, duration: 0.3, delay: 0.2 });
    });
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
    banner.style.fontSize = "12px";
    banner.style.width = "100%"
    banner.style.zIndex = "9999";
    banner.style.boxShadow = "0 4px 8px rgba(71, 71, 71, 0.2)";
    document.body.appendChild(banner);
  }
});
