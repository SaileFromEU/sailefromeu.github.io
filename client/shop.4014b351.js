import{S as s,i as a,s as e,e as r,a as c,t,c as o,f as l,b as n,g as i,d as p,j as d,h,l as f,k as v,u as m,q as u,n as g,o as j}from"./client.d75d38cc.js";function E(s,a,e){const r=s.slice();return r[7]=a[e],r}function x(s){let a,e,u,g,j,E,x,b,I,L,O,A,C,T,N,S,D,U,M,P,V=s[7].name+"",B=s[7].description+"",y=s[7].price+"";function H(){return s[3](s[7])}return{c(){a=r("div"),e=r("img"),j=c(),E=r("p"),x=t(V),b=c(),I=r("p"),L=t(B),O=c(),A=r("div"),C=r("p"),T=t(y),N=c(),S=r("button"),D=t("Add to cart"),U=c(),this.h()},l(s){a=o(s,"DIV",{class:!0,id:!0});var r=l(a);e=o(r,"IMG",{src:!0,alt:!0,class:!0}),j=n(r),E=o(r,"P",{class:!0});var c=l(E);x=i(c,V),c.forEach(p),b=n(r),I=o(r,"P",{class:!0});var t=l(I);L=i(t,B),t.forEach(p),O=n(r),A=o(r,"DIV",{class:!0});var d=l(A);C=o(d,"P",{class:!0});var h=l(C);T=i(h,y),h.forEach(p),N=n(d),S=o(d,"BUTTON",{class:!0});var f=l(S);D=i(f,"Add to cart"),f.forEach(p),d.forEach(p),U=n(r),r.forEach(p),this.h()},h(){d(e.src,u=k+s[7].imageLink)||h(e,"src",u),h(e,"alt",g=s[7].name),h(e,"class","productImage svelte-7xbspj"),h(E,"class","productName"),h(I,"class","productDescription svelte-7xbspj"),h(C,"class","productPrice svelte-7xbspj"),h(S,"class","addToCart svelte-7xbspj"),h(A,"class","lastRow svelte-7xbspj"),h(a,"class","productCard svelte-7xbspj"),h(a,"id","productCard")},m(s,r){f(s,a,r),v(a,e),v(a,j),v(a,E),v(E,x),v(a,b),v(a,I),v(I,L),v(a,O),v(a,A),v(A,C),v(C,T),v(A,N),v(A,S),v(S,D),v(a,U),M||(P=m(S,"click",H),M=!0)},p(a,e){s=a},d(s){s&&p(a),M=!1,P()}}}function b(s){let a,e,d,b,k,I,L,O,A,C,T,N,S,D,U,M,P,V,B,y,H,W,w,K,R,J=s[0],Y=[];for(let a=0;a<J.length;a+=1)Y[a]=x(E(s,J,a));return{c(){a=r("link"),e=c(),d=r("div"),b=r("div"),k=r("a"),I=t("HOME"),L=c(),O=r("a"),A=t("MY WORK"),C=c(),T=r("a"),N=r("u"),S=r("b"),D=t("WEB SHOP"),U=c(),M=r("a"),P=t("CONTACT"),V=c(),B=r("div"),y=r("div");for(let s=0;s<Y.length;s+=1)Y[s].c();H=c(),W=r("button"),w=t("Checkout"),this.h()},l(s){const r=u('[data-svelte="svelte-y3kx7d"]',document.head);a=o(r,"LINK",{rel:!0,href:!0}),r.forEach(p),e=n(s),d=o(s,"DIV",{class:!0});var c=l(d);b=o(c,"DIV",{class:!0});var t=l(b);k=o(t,"A",{href:!0,class:!0});var h=l(k);I=i(h,"HOME"),h.forEach(p),L=n(t),O=o(t,"A",{href:!0,class:!0});var f=l(O);A=i(f,"MY WORK"),f.forEach(p),C=n(t),T=o(t,"A",{href:!0,class:!0});var v=l(T);N=o(v,"U",{});var m=l(N);S=o(m,"B",{});var g=l(S);D=i(g,"WEB SHOP"),g.forEach(p),m.forEach(p),v.forEach(p),U=n(t),M=o(t,"A",{href:!0,class:!0});var j=l(M);P=i(j,"CONTACT"),j.forEach(p),t.forEach(p),c.forEach(p),V=n(s),B=o(s,"DIV",{class:!0});var E=l(B);y=o(E,"DIV",{class:!0});var x=l(y);for(let s=0;s<Y.length;s+=1)Y[s].l(x);x.forEach(p),H=n(E),W=o(E,"BUTTON",{class:!0});var K=l(W);w=i(K,"Checkout"),K.forEach(p),E.forEach(p),this.h()},h(){document.title="Sondre Mosdal",h(a,"rel","icon"),h(a,"href","favicon-32x32.png"),h(k,"href","/"),h(k,"class","home fadeInUp svelte-7xbspj"),h(O,"href","my-work"),h(O,"class","my-work fadeInUp svelte-7xbspj"),h(T,"href","shop"),h(T,"class","shop fadeInUp svelte-7xbspj"),h(M,"href","contact"),h(M,"class","contact fadeInUp svelte-7xbspj"),h(b,"class","header-text svelte-7xbspj"),h(d,"class","header svelte-7xbspj"),h(y,"class","shopItems svelte-7xbspj"),h(W,"class","checkout svelte-7xbspj"),h(B,"class","shop svelte-7xbspj")},m(r,c){v(document.head,a),f(r,e,c),f(r,d,c),v(d,b),v(b,k),v(k,I),v(b,L),v(b,O),v(O,A),v(b,C),v(b,T),v(T,N),v(N,S),v(S,D),v(b,U),v(b,M),v(M,P),f(r,V,c),f(r,B,c),v(B,y);for(let s=0;s<Y.length;s+=1)Y[s].m(y,null);v(B,H),v(B,W),v(W,w),K||(R=m(W,"click",s[4]),K=!0)},p(s,[a]){if(3&a){let e;for(J=s[0],e=0;e<J.length;e+=1){const r=E(s,J,e);Y[e]?Y[e].p(r,a):(Y[e]=x(r),Y[e].c(),Y[e].m(y,null))}for(;e<Y.length;e+=1)Y[e].d(1);Y.length=J.length}},i:g,o:g,d(s){p(a),s&&p(e),s&&p(d),s&&p(V),s&&p(B),j(Y,s),K=!1,R()}}}let k="shop/products/";function I(s){let a,e=[];a=localStorage.getItem("cart"),a&&(e=JSON.parse(a));const r=(s,a)=>{if(e.find((a=>a.prodnr===s))){let a=e.find((a=>a.prodnr===s));a.amount=a.amount+1}else e.push({prodnr:s,amount:a});localStorage.setItem("cart",JSON.stringify(e))},c=()=>{location.href="/shop/checkout"};return[[{prodnr:1,name:"Automotive",description:"10 images",imageLink:"23 (Large).jpg",price:"599,-"},{prodnr:2,name:"Automotive",description:"25 images",imageLink:"34 (Large).jpg",price:"1099,-"},{prodnr:3,name:"Landscape",description:"4 images",imageLink:"50.jpg",price:"599,-"},{prodnr:4,name:"Landscape",description:"8 images",imageLink:"52.jpg",price:"1099,-"},{prodnr:5,name:"Landscape",description:"12 images",imageLink:"52.jpg",price:"1399,-"}],r,c,s=>r(s.prodnr,1),()=>c()]}class L extends s{constructor(s){super(),a(this,s,I,b,e,{})}}export{L as default};
