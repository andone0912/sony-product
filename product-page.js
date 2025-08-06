
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");


plusButton.addEventListener("click", expandFunction);
minusButton.addEventListener("click", minimizeFunction);
let isOpen = false;

function expandFunction() {
  if (isOpen) return;
  isOpen = true;

  gsap.fromTo(".information",
     {y: 200, opacity: 0 },
     { duration: 1, opacity: 1, y:0, ease: "power2.out"}
    
    );
  gsap.to(".two", { duration: 0.8, x:0, fontSize: "4rem", ease: "power2.inOut" });
  gsap.to(".bassBoosted", { duration: 0.8, x:0, fontSize: "3rem", ease: "power2.inOut"});
}

function minimizeFunction() {
  if (!isOpen) return;
  isOpen = false;

  gsap.fromTo(".information",
    { duration: 1, opacity: 1, y:0, ease: "power2.out"},
    {y: 200, opacity: 0 }
    );
  gsap.to(".two", { duration: 0.8, x:0, fontSize: "5rem", ease: "power2.inOut" });
  gsap.to(".bassBoosted", { duration: 0.8, x:0, fontSize: "3.6rem", ease: "power2.inOut"});
} 
