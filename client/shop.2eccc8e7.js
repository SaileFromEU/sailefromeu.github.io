import{S as s,i as a,s as e,e as r,a as c,t,c as o,f as l,b as n,g as i,d as p,j as h,h as d,l as f,k as v,u as m,q as u,n as g,o as E}from"./client.48559ea9.js";function j(s,a,e){const r=s.slice();return r[7]=a[e],r}function x(s){let a,e,u,g,E,j,x,b,I,L,O,A,C,T,N,S,D,U,M,P,V=s[7].name+"",B=s[7].description+"",y=s[7].price+"";function H(){return s[3](s[7])}return{c(){a=r("div"),e=r("img"),E=c(),j=r("p"),x=t(V),b=c(),I=r("p"),L=t(B),O=c(),A=r("div"),C=r("p"),T=t(y),N=c(),S=r("button"),D=t("Add to cart"),U=c(),this.h()},l(s){a=o(s,"DIV",{class:!0,id:!0});var r=l(a);e=o(r,"IMG",{src:!0,alt:!0,class:!0}),E=n(r),j=o(r,"P",{class:!0});var c=l(j);x=i(c,V),c.forEach(p),b=n(r),I=o(r,"P",{class:!0});var t=l(I);L=i(t,B),t.forEach(p),O=n(r),A=o(r,"DIV",{class:!0});var h=l(A);C=o(h,"P",{class:!0});var d=l(C);T=i(d,y),d.forEach(p),N=n(h),S=o(h,"BUTTON",{class:!0});var f=l(S);D=i(f,"Add to cart"),f.forEach(p),h.forEach(p),U=n(r),r.forEach(p),this.h()},h(){h(e.src,u=k+s[7].imageLink)||d(e,"src",u),d(e,"alt",g=s[7].name),d(e,"class","productImage svelte-7xbspj"),d(j,"class","productName"),d(I,"class","productDescription svelte-7xbspj"),d(C,"class","productPrice svelte-7xbspj"),d(S,"class","addToCart svelte-7xbspj"),d(A,"class","lastRow svelte-7xbspj"),d(a,"class","productCard svelte-7xbspj"),d(a,"id","productCard")},m(s,r){f(s,a,r),v(a,e),v(a,E),v(a,j),v(j,x),v(a,b),v(a,I),v(I,L),v(a,O),v(a,A),v(A,C),v(C,T),v(A,N),v(A,S),v(S,D),v(a,U),M||(P=m(S,"click",H),M=!0)},p(a,e){s=a},d(s){s&&p(a),M=!1,P()}}}function b(s){let a,e,h,b,k,I,L,O,A,C,T,N,S,D,U,M,P,V,B,y,H,W,w,K,R,J,Y,q=s[0],G=[];for(let a=0;a<q.length;a+=1)G[a]=x(j(s,q,a));return{c(){a=r("link"),e=c(),h=r("div"),b=r("div"),k=r("a"),I=t("HOME"),L=c(),O=r("a"),A=t("MY WORK"),C=c(),T=r("a"),N=r("u"),S=r("b"),D=t("WEB SHOP"),U=c(),M=r("a"),P=t("CONTACT"),V=c(),B=r("div"),y=r("div");for(let s=0;s<G.length;s+=1)G[s].c();H=c(),W=r("button"),w=t("Checkout"),K=c(),R=r("a"),this.h()},l(s){const r=u('[data-svelte="svelte-y3kx7d"]',document.head);a=o(r,"LINK",{rel:!0,href:!0}),r.forEach(p),e=n(s),h=o(s,"DIV",{class:!0});var c=l(h);b=o(c,"DIV",{class:!0});var t=l(b);k=o(t,"A",{href:!0,class:!0});var d=l(k);I=i(d,"HOME"),d.forEach(p),L=n(t),O=o(t,"A",{href:!0,class:!0});var f=l(O);A=i(f,"MY WORK"),f.forEach(p),C=n(t),T=o(t,"A",{href:!0,class:!0});var v=l(T);N=o(v,"U",{});var m=l(N);S=o(m,"B",{});var g=l(S);D=i(g,"WEB SHOP"),g.forEach(p),m.forEach(p),v.forEach(p),U=n(t),M=o(t,"A",{href:!0,class:!0});var E=l(M);P=i(E,"CONTACT"),E.forEach(p),t.forEach(p),c.forEach(p),V=n(s),B=o(s,"DIV",{class:!0});var j=l(B);y=o(j,"DIV",{class:!0});var x=l(y);for(let s=0;s<G.length;s+=1)G[s].l(x);x.forEach(p),H=n(j),W=o(j,"BUTTON",{class:!0});var J=l(W);w=i(J,"Checkout"),J.forEach(p),K=n(j),R=o(j,"A",{href:!0,class:!0}),l(R).forEach(p),j.forEach(p),this.h()},h(){document.title="Sondre Mosdal",d(a,"rel","icon"),d(a,"href","favicon-32x32.png"),d(k,"href","/"),d(k,"class","home fadeInUp svelte-7xbspj"),d(O,"href","my-work"),d(O,"class","my-work fadeInUp svelte-7xbspj"),d(T,"href","shop"),d(T,"class","shop fadeInUp svelte-7xbspj"),d(M,"href","contact"),d(M,"class","contact fadeInUp svelte-7xbspj"),d(b,"class","header-text svelte-7xbspj"),d(h,"class","header svelte-7xbspj"),d(y,"class","shopItems svelte-7xbspj"),d(W,"class","checkout svelte-7xbspj"),d(R,"href","/checkout"),d(R,"class",""),d(B,"class","shop svelte-7xbspj")},m(r,c){v(document.head,a),f(r,e,c),f(r,h,c),v(h,b),v(b,k),v(k,I),v(b,L),v(b,O),v(O,A),v(b,C),v(b,T),v(T,N),v(N,S),v(S,D),v(b,U),v(b,M),v(M,P),f(r,V,c),f(r,B,c),v(B,y);for(let s=0;s<G.length;s+=1)G[s].m(y,null);v(B,H),v(B,W),v(W,w),v(B,K),v(B,R),J||(Y=m(W,"click",s[4]),J=!0)},p(s,[a]){if(3&a){let e;for(q=s[0],e=0;e<q.length;e+=1){const r=j(s,q,e);G[e]?G[e].p(r,a):(G[e]=x(r),G[e].c(),G[e].m(y,null))}for(;e<G.length;e+=1)G[e].d(1);G.length=q.length}},i:g,o:g,d(s){p(a),s&&p(e),s&&p(h),s&&p(V),s&&p(B),E(G,s),J=!1,Y()}}}let k="shop/products/";function I(s){let a,e=[];a=localStorage.getItem("cart"),a&&(e=JSON.parse(a));const r=(s,a)=>{if(e.find((a=>a.prodnr===s))){let a=e.find((a=>a.prodnr===s));a.amount=a.amount+1}else e.push({prodnr:s,amount:a});localStorage.setItem("cart",JSON.stringify(e))},c=()=>{location.href="/shop/checkout"};return[[{prodnr:1,name:"Automotive",description:"10 images",imageLink:"23 (Large).jpg",price:"599,-"},{prodnr:2,name:"Automotive",description:"25 images",imageLink:"34 (Large).jpg",price:"1099,-"},{prodnr:3,name:"Landscape",description:"4 images",imageLink:"50.jpg",price:"599,-"},{prodnr:4,name:"Landscape",description:"8 images",imageLink:"52.jpg",price:"1099,-"},{prodnr:5,name:"Landscape",description:"12 images",imageLink:"52.jpg",price:"1399,-"}],r,c,s=>r(s.prodnr,1),()=>c()]}class L extends s{constructor(s){super(),a(this,s,I,b,e,{})}}export{L as default};
