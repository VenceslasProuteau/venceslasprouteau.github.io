function removeActiveTab(){tabs.forEach(e=>{e.classList.remove("is-active")}),sections.forEach(e=>{e.classList.remove("is-active")})}function addActiveTab(e){e.classList.add("is-active");let t=e.querySelector("a").getAttribute("href"),a=document.querySelector(t);a.classList.add("is-active")}const tabs=document.querySelectorAll(".tabs li"),sections=document.querySelectorAll(".tabs-container > section");function toggleStickyNav(){let e=header.children[0];header.classList.toggle("active"),e.classList.toggle("sticky-nav"),document.body.classList.toggle("no-overflow")[0]}tabs.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),removeActiveTab(),addActiveTab(e)})});const toggleStickyNavBtn=document.querySelector("header > div.layout > button"),header=document.querySelector("header");toggleStickyNavBtn.addEventListener("click",toggleStickyNav),document.querySelectorAll("header > div.layout > nav > ul > li").forEach(e=>{e.addEventListener("click",e=>{header.children[0].classList.contains("sticky-nav")&&toggleStickyNav()})});const opts={rootMargin:"-30px"},cb=e=>{let t=document.getElementsByTagName("header")[0];e[0].isIntersecting?t.classList.remove("scrolled"):t.classList.add("scrolled")},observer=new IntersectionObserver(cb,opts),target=document.getElementsByTagName("section")[0];observer.observe(target);
