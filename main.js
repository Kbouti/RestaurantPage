(()=>{"use strict";console.log("homepage js loaded");console.log("pageload js loaded");console.log("Welcome to the console of the pizza website of the Kevdawg"),console.log("initial load function run"),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","mainContain"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","mainHeader"),t.appendChild(n);const d=document.createElement("div");d.classList.add("headerItem"),d.innerHTML="215-327-1557",n.appendChild(d);const i=document.createElement("div");i.setAttribute("id","headerLogo");const o=document.createElement("img");o.src="/src/images/kevdogPizzaLogo.png",o.alt="Pizza By Kevdog",i.appendChild(o),n.appendChild(i);const s=document.createElement("div");s.classList.add("headerItem"),s.innerHTML="Order Now!",n.appendChild(s);const c=document.createElement("div");c.setAttribute("id","subHeader"),t.appendChild(c);const a=document.createElement("ul");a.setAttribute("id","subMenu"),c.appendChild(a);const l=document.createElement("li");l.classList.add("menu"),l.classList.add("subMenu"),l.innerHTML="Home",l.setAttribute("id","homeBtn"),a.appendChild(l);const r=document.createElement("li");r.classList.add("menu"),r.classList.add("subMenu"),r.innerHTML="Menu",r.setAttribute("id","menuBtn"),a.appendChild(r);const u=document.createElement("li");u.classList.add("menu"),u.classList.add("subMenu"),u.setAttribute("id","hoursBtn"),u.innerHTML="Hours",a.appendChild(u);const m=document.createElement("li");m.classList.add("menu"),m.classList.add("subMenu"),m.setAttribute("id","contactBtn"),m.innerHTML="Contact Us",a.appendChild(m);const p=document.createElement("div");p.setAttribute("id","body"),t.appendChild(p);const b=document.createElement("div");b.setAttribute("id","mainContent"),p.appendChild(b);const h=document.createElement("div");h.setAttribute("id","message1"),h.setAttribute("class","bodyText"),h.innerHTML="Best Pizza in Town!!!",b.appendChild(h);const g=document.createElement("div");g.setAttribute("id","photoHolder1"),b.appendChild(g);const C=document.createElement("img");C.src="/src/images/counterTopPizza.jpeg",C.alt="Delicious pizza",C.setAttribute("id","counterPizza"),g.appendChild(C);const E=document.createElement("div");E.setAttribute("id","message2"),E.setAttribute("class","bodyText"),E.innerHTML="Don't just take our word for it...",b.appendChild(E);const v=document.createElement("div");v.setAttribute("id","review1"),v.setAttribute("class","review"),p.appendChild(v);const A=document.createElement("div");A.setAttribute("id","photoHolder2"),v.appendChild(A);const L=document.createElement("img");L.src="/src/images/howie.jpeg",L.alt="Adorable puppy standing in water bowl",L.setAttribute("id","howie"),L.setAttribute("class","dog"),A.appendChild(L);const y=document.createElement("div");y.setAttribute("id","review2"),y.setAttribute("class","review"),p.appendChild(y);const T=document.createElement("div");T.setAttribute("id","photoHolder3"),y.appendChild(T);const H=document.createElement("img");H.src="/src/images/lucy.jpeg",H.alt="The sweetest little puppy",H.setAttribute("id","lucy"),H.setAttribute("class","dog"),T.appendChild(H);const M=document.createElement("div");M.setAttribute("id","footer"),t.appendChild(M);const w=document.createElement("div");w.setAttribute("id","attributions"),M.appendChild(w);const B=document.createElement("div");B.setAttribute("id","signature"),B.innerHTML="Kbouti 2023",w.appendChild(B);const z=document.createElement("div");z.setAttribute("id","logoMakr"),z.innerHTML="Logo created at ",w.appendChild(z);const k=document.createElement("a");k.setAttribute("href","https://logomakr.com/"),k.innerHTML="logomakr.com",z.appendChild(k)})(),document.getElementById("menuBtn").addEventListener("click",(()=>{console.log("You clicked the menu button");let e=document.getElementById("mainContent"),t=document.getElementById("body");t.removeChild(e),t.removeChild(review1),t.removeChild(review2);const n=document.createElement("div");n.setAttribute("id","bodyMenu"),n.setAttribute("class","subPage"),t.appendChild(n);const d=document.createElement("div");d.setAttribute("id","menuTitle"),d.setAttribute("class","bodyText"),d.innerHTML="Menu",n.appendChild(d);const i=document.createElement("div");i.setAttribute("id","menuContent"),i.setAttribute("class","bodySubtext"),i.innerHTML="This is where all the pizza options would go",n.appendChild(i)})),document.getElementById("hoursBtn").addEventListener("click",(()=>{console.log("You clicked the hours button");let e=document.getElementById("mainContent"),t=document.getElementById("body");t.removeChild(e),t.removeChild(review1),t.removeChild(review2);const n=document.createElement("div");n.setAttribute("id","bodyHours"),n.setAttribute("class","subPage"),t.appendChild(n);const d=document.createElement("div");d.setAttribute("id","hoursTitle"),d.setAttribute("class","bodyText"),d.innerHTML="Hours",n.appendChild(d);const i=document.createElement("div");i.setAttribute("id","menuContent"),i.setAttribute("class","bodySubtext"),i.innerHTML="This place isn't actually open for business.",n.appendChild(i)})),document.getElementById("homeBtn").addEventListener("click",(function(){location.reload()})),document.getElementById("headerLogo").addEventListener("click",(function(){location.reload()}))})();