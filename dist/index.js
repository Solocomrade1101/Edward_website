(()=>{var e={966:()=>{const e=gsap.timeline();e.fromTo(".after",{y:"+100%"},{y:0}),ScrollTrigger.create({animation:e,trigger:"body",start:"top top",end:"6000",scrub:!0}),gsap.fromTo(".frame__title",{scale:1,opacity:1},{scale:.3,opacity:0,scrollTrigger:{trigger:".portfolio",start:"top top",end:"50%",scrub:!0}}),gsap.fromTo(".frame-l__scroll",{opacity:1},{opacity:0,scrollTrigger:{trigger:".portfolio",start:"top top",end:"100",scrub:!0}}),gsap.fromTo(".keys-2",{filter:"blur(6px)"},{filter:"blur(0px)",scrollTrigger:{trigger:".keys-2",start:"top -200px",end:"125% -200px",scrub:!0}}),gsap.fromTo(".keys-4",{filter:"blur(8px)"},{filter:"blur(0px)",scrollTrigger:{trigger:".keys-4",start:"1500px center",end:"1900px center",scrub:!0}})},874:()=>{document.querySelector(".frame__info"),document.querySelector(".frame__block-icon");let e=document.querySelectorAll(".frame__block"),t=document.querySelectorAll(".frame__info");e.forEach((e=>{e.addEventListener("click",(e=>{if("IMG"===e.target.tagName){let r=e.currentTarget.dataset.info-1;t[r].classList.toggle("frame__info-active")}else console.log(e.currentTarget.dataset.link)}))}))},676:()=>{let e=-1100,t=e/3.5,r=document.getElementsByClassName("frame"),o=Array.from(r),l=[];window.onscroll=function(){let r=document.documentElement.scrollTop,s=t-r;t=r,l=l.slice(0,o.length),o.forEach(((t,r)=>{l.push(r*e+e),l[r]+=-2.5*s;let a=o[r],p=`translateZ(${l[r]}px)`,n=l[r]<Math.abs(e)/2?1:0;display=l[r]<Math.abs(e)/1?"flex":"none",a.setAttribute("style",`transform: ${p}; opacity: ${n};  display: ${display}`)}))},window.scrollTo(0,1)},507:()=>{let e=document.querySelector(".social__arrow-open"),t=document.querySelector(".fixed__social-open");document.querySelector(".social__event").addEventListener("mouseenter",(()=>{e.style.transform="rotate(180deg)",t.style.opacity="1",t.style.transform="translateX(-47px)",t.style.pointerEvents="auto"})),t.addEventListener("mouseleave",(()=>{e.style.transform="rotate(0deg)",t.style.transform="translateX(-60px)",t.style.opacity="0",t.style.pointerEvents="none"}))}},t={};function r(o){var l=t[o];if(void 0!==l)return l.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";r(676),r(966),r(507),r(874);r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p})()})();