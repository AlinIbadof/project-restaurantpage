(()=>{"use strict";function t(){const t=document.getElementById("content");t.removeChild(t.firstChild)}!function(){const t=document.createElement("div");t.classList.add("navbtn"),t.classList.add("homebtn"),t.classList.add("currentpage"),t.setAttribute("id","homebtn"),t.textContent="Home";const e=document.createElement("div");e.classList.add("navbtn"),e.classList.add("menubtn"),e.setAttribute("id","menubtn"),e.textContent="Menu";const n=document.createElement("div");n.classList.add("navbtn"),n.classList.add("contactbtn"),n.setAttribute("id","contactbtn"),n.textContent="Contact";const d=document.createElement("div");d.classList.add("navigation"),d.appendChild(t),d.appendChild(e),d.appendChild(n);const a=document.createElement("div");a.textContent="Alin's restaurant",a.classList.add("title");const s=document.createElement("img");s.src="src/chef.jpeg",s.classList.add("chefimg");const c=document.createElement("div");c.classList.add("tagline");const i=document.createElement("p");i.textContent="Life’s too short for boring food",c.appendChild(i);const o=document.createElement("div");o.classList.add("review");const l=document.createElement("p");l.textContent="It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",o.appendChild(l),document.createElement("div");const m=document.createElement("div");m.classList.add("middleContent"),m.appendChild(a),m.appendChild(s),m.appendChild(c),m.appendChild(o);const r=document.createElement("div");r.classList.add("footer"),r.textContent="@ Alin Ibadof";const p=document.createElement("div");p.classList.add("home"),p.classList.add("page"),p.appendChild(d),p.appendChild(m),p.appendChild(r),document.getElementById("content").appendChild(p)}(),function e(){const n=document.getElementById("homebtn"),d=document.getElementById("menubtn"),a=document.getElementById("contactbtn");n.addEventListener("click",(()=>{t(),function(){const t=document.createElement("div");t.classList.add("navbtn"),t.classList.add("homebtn"),t.classList.add("currentpage"),t.setAttribute("id","homebtn"),t.textContent="Home";const e=document.createElement("div");e.classList.add("navbtn"),e.classList.add("menubtn"),e.setAttribute("id","menubtn"),e.textContent="Menu";const n=document.createElement("div");n.classList.add("navbtn"),n.classList.add("contactbtn"),n.setAttribute("id","contactbtn"),n.textContent="Contact";const d=document.createElement("div");d.classList.add("navigation"),d.appendChild(t),d.appendChild(e),d.appendChild(n);const a=document.createElement("div");a.textContent="Alin's restaurant",a.classList.add("title");const s=document.createElement("img");s.src="src/chef.jpeg",s.classList.add("chefimg");const c=document.createElement("div");c.classList.add("tagline");const i=document.createElement("p");i.textContent="Life’s too short for boring food",c.appendChild(i);const o=document.createElement("div");o.classList.add("review");const l=document.createElement("p");l.textContent="It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",o.appendChild(l);const m=document.createElement("div");m.classList.add("middleContent"),m.appendChild(a),m.appendChild(s),m.appendChild(c),m.appendChild(o);const r=document.createElement("div");r.classList.add("footer"),r.textContent="@ Alin Ibadof";const p=document.createElement("div");p.classList.add("home"),p.classList.add("page"),p.appendChild(d),p.appendChild(m),p.appendChild(r),document.getElementById("content").appendChild(p)}(),e()})),d.addEventListener("click",(()=>{t(),function(){const t=document.createElement("div");t.classList.add("navbtn"),t.classList.add("homebtn"),t.setAttribute("id","homebtn"),t.textContent="Home";const e=document.createElement("div");e.classList.add("navbtn"),e.classList.add("menubtn"),e.classList.add("currentpage"),e.setAttribute("id","menubtn"),e.textContent="Menu";const n=document.createElement("div");n.classList.add("navbtn"),n.classList.add("contactbtn"),n.setAttribute("id","contactbtn"),n.textContent="Contact";const d=document.createElement("div");d.classList.add("navigation"),d.appendChild(t),d.appendChild(e),d.appendChild(n);const a=document.createElement("div");a.textContent="Alin's restaurant's Menu",a.classList.add("title");const s=document.createElement("img");s.src="src/grilledcheese.jpg",s.classList.add("cheeseimg");const c=document.createElement("div");c.classList.add("tagline");const i=document.createElement("p");i.textContent="Griled cheese sandwich",c.appendChild(i);const o=document.createElement("div");o.classList.add("review");const l=document.createElement("p");l.textContent="It's all about the crust. Choose a hearty bread, butter it up, and shred your favorite cheddar for the best grilled cheese ever: crispy-crunchy on the outside, melty, cheddar middle, and the world's most impressive cheese pull.",o.appendChild(l);const m=document.createElement("div");m.classList.add("middleContent"),m.appendChild(a),m.appendChild(s),m.appendChild(c),m.appendChild(o);const r=document.createElement("div");r.classList.add("footer"),r.textContent="@ Alin Ibadof";const p=document.createElement("div");p.classList.add("menu"),p.classList.add("page"),p.appendChild(d),p.appendChild(m),p.appendChild(r),document.getElementById("content").appendChild(p)}(),e()})),a.addEventListener("click",(()=>{t(),function(){const t=document.createElement("div");t.classList.add("navbtn"),t.classList.add("homebtn"),t.setAttribute("id","homebtn"),t.textContent="Home";const e=document.createElement("div");e.classList.add("navbtn"),e.classList.add("menubtn"),e.setAttribute("id","menubtn"),e.textContent="Menu";const n=document.createElement("div");n.classList.add("navbtn"),n.classList.add("contactbtn"),n.classList.add("currentpage"),n.setAttribute("id","contactbtn"),n.textContent="Contact";const d=document.createElement("div");d.classList.add("navigation"),d.appendChild(t),d.appendChild(e),d.appendChild(n);const a=document.createElement("div");a.textContent="Alin's restaurant's contact info",a.classList.add("title");const s=document.createElement("img");s.src="src/restaurant.jpg",s.classList.add("restaurantimg");const c=document.createElement("div");c.textContent="9831 S. 6th Street; Ames, IA 50010",c.classList.add("address");const i=document.createElement("div");i.textContent="Alin Ibadof -> manager@mail.restaurant.com",i.classList.add("manager");const o=document.createElement("form");o.setAttribute("id","form");const l=document.createElement("label");l.setAttribute("for","name"),l.textContent="Name:";const m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("name","name"),m.setAttribute("id","name");const r=document.createElement("label");r.setAttribute("for","email"),r.textContent="Email:";const p=document.createElement("input");p.setAttribute("type","email"),p.setAttribute("name","email"),p.setAttribute("id","email");const u=document.createElement("label");u.setAttribute("for","msg"),u.textContent="Message:";const C=document.createElement("input");C.setAttribute("type","text"),C.setAttribute("name","msg"),C.setAttribute("id","msg");const h=document.createElement("button");h.setAttribute("type","submit"),h.textContent="Submit",o.appendChild(l),o.appendChild(m),o.appendChild(r),o.appendChild(p),o.appendChild(u),o.appendChild(C),o.appendChild(h);const b=document.createElement("div");b.classList.add("middleContent"),b.appendChild(a),b.appendChild(s),b.appendChild(c),b.appendChild(i),b.appendChild(o);const v=document.createElement("div");v.classList.add("footer"),v.textContent="@ Alin Ibadof";const E=document.createElement("div");E.classList.add("contact"),E.classList.add("page"),E.appendChild(d),E.appendChild(b),E.appendChild(v),document.getElementById("content").appendChild(E)}(),e()}))}()})();