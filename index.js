import{a as u,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g=void 0;async function p(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:o})).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new f(".gallery a");function h(s){const o=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${r.likes}</p>
        <p><strong>Views:</strong> ${r.views}</p>
        <p><strong>Comments:</strong> ${r.comments}</p>
        <p><strong>Downloads:</strong> ${r.downloads}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){l.innerHTML=""}function w(){d.classList.remove("is-hidden")}function b(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const o=c.elements["search-text"].value.trim();if(!o){i.warning({message:"Please enter a search query!"});return}L(),w();try{const n=(await p(o)).hits;n.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(n)}catch{i.error({message:"Something went wrong. Try again later."})}finally{b(),c.reset()}});
//# sourceMappingURL=index.js.map
