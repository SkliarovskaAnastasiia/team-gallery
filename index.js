import{a as c}from"./assets/vendor-N5iQpiFS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc",d=async(o,t)=>(await c.get("https://api.unsplash.com/search/photos",{params:{client_id:l,query:o,page:t,per_page:12,orientation:"portrait"}})).data,n={form:document.querySelector(".js-search-form"),galleryList:document.querySelector(".js-gallery"),loader:document.querySelector(".loader")},u=o=>o.map(t=>`<li class='gallery__item'>
    <img src='${t.urls.small}' alt='${t.alt_description}' class='gallery-img' />
  </li>`).join(""),m=()=>n.loader.classList.remove("is-hidden"),p=()=>n.loader.classList.add("is-hidden"),f=async o=>{o.preventDefault(),n.galleryList.innerHTML="",m();const t=o.currentTarget.elements["user-search-query"].value.trim(),i=1;try{const{results:s,total:e}=await d(t,i);n.galleryList.innerHTML=u(s)}catch(s){console.log(s)}finally{p()}};n.form.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
