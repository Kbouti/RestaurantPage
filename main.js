(()=>{"use strict";console.log("homepage js loaded");console.log("pageload js loaded");console.log("Welcome to the console of the pizza website of the Kevdawg"),console.log("initial load function run"),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","mainContain"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("id","mainHeader"),t.appendChild(n);const d=document.createElement("div");d.classList.add("headerItem"),d.innerHTML="215-327-1557",n.appendChild(d);const i=document.createElement("div");i.setAttribute("id","headerLogo");const s=document.createElement("img");s.src="/src/images/kevdogPizzaLogo.png",s.alt="Pizza By Kevdog",i.appendChild(s),n.appendChild(i);const o=document.createElement("div");o.classList.add("headerItem"),o.innerHTML="Order Now!",n.appendChild(o);const c=document.createElement("div");c.setAttribute("id","subHeader"),t.appendChild(c);const a=document.createElement("ul");a.setAttribute("id","subMenu"),c.appendChild(a);const l=document.createElement("li");l.classList.add("menu"),l.classList.add("subMenu"),l.innerHTML="Menu",l.setAttribute("id","menuBtn"),a.appendChild(l);const r=document.createElement("li");r.classList.add("menu"),r.classList.add("subMenu"),r.setAttribute("id","specialsBtn"),r.innerHTML="Specials",a.appendChild(r);const u=document.createElement("li");u.classList.add("menu"),u.classList.add("subMenu"),u.setAttribute("id","locationsBtn"),u.innerHTML="Locations",a.appendChild(u);const m=document.createElement("li");m.classList.add("menu"),m.classList.add("subMenu"),m.setAttribute("id","hoursBtn"),m.innerHTML="Hours",a.appendChild(m);const p=document.createElement("li");p.classList.add("menu"),p.classList.add("subMenu"),p.setAttribute("id","contactBtn"),p.innerHTML="Contact Us",a.appendChild(p);const b=document.createElement("div");b.setAttribute("id","body"),t.appendChild(b);const h=document.createElement("div");h.setAttribute("id","mainContent"),b.appendChild(h);const g=document.createElement("div");g.setAttribute("id","message1"),g.setAttribute("class","bodyText"),g.innerHTML="Best Pizza in Town!!!",h.appendChild(g);const A=document.createElement("div");A.setAttribute("id","photoHolder1"),h.appendChild(A);const C=document.createElement("img");C.src="/src/images/counterTopPizza.jpeg",C.alt="Delicious pizza",C.setAttribute("id","counterPizza"),A.appendChild(C);const E=document.createElement("div");E.setAttribute("id","message2"),E.setAttribute("class","bodyText"),E.innerHTML="Don't just take our word for it...",h.appendChild(E);const L=document.createElement("div");L.setAttribute("id","review1"),L.setAttribute("class","review"),b.appendChild(L);const v=document.createElement("div");v.setAttribute("id","photoHolder2"),L.appendChild(v);const M=document.createElement("img");M.src="/src/images/howie.jpeg",M.alt="Adorable puppy standing in water bowl",M.setAttribute("id","howie"),M.setAttribute("class","dog"),v.appendChild(M);const H=document.createElement("div");H.setAttribute("id","review2"),H.setAttribute("class","review"),b.appendChild(H);const T=document.createElement("div");T.setAttribute("id","photoHolder3"),H.appendChild(T);const w=document.createElement("img");w.src="/src/images/lucy.jpeg",w.alt="The sweetest little puppy",w.setAttribute("id","lucy"),w.setAttribute("class","dog"),T.appendChild(w);const z=document.createElement("div");z.setAttribute("id","footer"),t.appendChild(z);const y=document.createElement("div");y.setAttribute("id","attributions"),z.appendChild(y);const B=document.createElement("div");B.setAttribute("id","signature"),B.innerHTML="Kbouti 2023",y.appendChild(B);const k=document.createElement("div");k.setAttribute("id","logoMakr"),k.innerHTML="Logo created at ",y.appendChild(k);const f=document.createElement("a");f.setAttribute("href","https://logomakr.com/"),f.innerHTML="logomakr.com",k.appendChild(f)})(),document.getElementById("menuBtn").addEventListener("click",(()=>{console.log("You clicked the menu button")}))})();