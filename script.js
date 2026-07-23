const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".main-nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
  })
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const countdown=document.querySelector(".countdown");
if(countdown){
  const target=new Date(countdown.dataset.date).getTime();
  const update=()=>{
    const d=Math.max(0,target-Date.now());
    document.getElementById("days").textContent=Math.floor(d/86400000);
    document.getElementById("hours").textContent=String(Math.floor((d%86400000)/3600000)).padStart(2,"0");
    document.getElementById("minutes").textContent=String(Math.floor((d%3600000)/60000)).padStart(2,"0");
  };
  update();setInterval(update,60000);
}
document.getElementById("year").textContent=new Date().getFullYear();

const modal=document.getElementById("poster-modal");
const modalImage=document.getElementById("modal-image");
document.querySelectorAll("[data-poster]").forEach(button=>{
  button.addEventListener("click",()=>{modalImage.src=button.dataset.poster;modal.showModal()})
});
document.querySelector(".modal-close").addEventListener("click",()=>modal.close());
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});


const enquiryForm=document.getElementById("enquiry-form");
if(enquiryForm){
  enquiryForm.addEventListener("submit",event=>{
    event.preventDefault();
    const status=document.getElementById("form-status");
    status.textContent="Thank you. The enquiry form is ready; online delivery will be connected when the Association's custom email is added.";
    enquiryForm.reset();
  });
}
