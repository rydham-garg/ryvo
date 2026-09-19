const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll('.nav-links a:not(.nav-cta)')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id))}})},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));
