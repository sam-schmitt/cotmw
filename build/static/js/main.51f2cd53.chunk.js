(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c,i,r,a,s,l,o,j,b,d=n(1),h=n.n(d),x=n(21),p=n.n(x),u=(n(29),n(30),n(4)),O=n(11),f=function(){var t=Object(d.useState)("thing"),e=Object(O.a)(t,2),n=e[0],c=e[1];return Object(d.useMemo)((function(){return{thing:n,setThing:c}}),[n,c])},m=n(0),g=Object(d.createContext)(""),v=function(t){var e=t.children,n=f();return Object(m.jsx)(g.Provider,{value:n,children:e})},y=n(2),k=n(5),w=n(14),S=n(6),F=S.a.nav(c||(c=Object(k.a)(["\n\tbackground: #000;\n\theight: 80px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 0.5rem calc((100vw - 1000px) / 2);\n\tz-index: 10;\n"]))),D=Object(S.a)(u.b)(i||(i=Object(k.a)(["\n\tcolor: #fff;\n\tdisplay: flex;\n\talign-items: center;\n\ttext-decoration: none;\n\tpadding: 0 1rem;\n\theight: 100%;\n\tcursor: pointer;\n\t&.active {\n\t\tcolor: #305fe2;\n\t}\n"]))),_=Object(S.a)(w.a)(r||(r=Object(k.a)(["\n\tdisplay: none;\n\tcolor: #fff;\n"]))),T=S.a.div(a||(a=Object(k.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-right: -24px;\n"]))),N=S.a.nav(s||(s=Object(k.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-right: 24px;\n"]))),C=Object(S.a)(u.b)(l||(l=Object(k.a)(["\n\tborder-radius: 4px;\n\tbackground: #305fe2;\n\tpadding: 10px 22px;\n\tcolor: #fff;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n\ttext-decoration: none;\n\tmargin-left: 24px;\n\t&:hover {\n\t\ttransition: all 0.2s ease-in-out;\n\t\tbackground: #fff;\n\t\tcolor: #010606;\n\t}\n"]))),L=n.p+"static/media/icon.265a099d.png",P=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(F,{children:[Object(m.jsx)(D,{to:"/",children:Object(m.jsx)("img",{className:"photo",src:L,alt:"logo"})}),Object(m.jsx)(_,{}),Object(m.jsxs)(T,{children:[Object(m.jsx)(D,{to:"/blog",activeStyle:!0,children:"Blog"}),Object(m.jsx)(D,{to:"/contact",activeStyle:!0,children:"Contact"})]}),Object(m.jsx)(N,{children:Object(m.jsx)(C,{to:"/projects",children:"Projects"})})]})})},B=Object(S.a)(u.b)(o||(o=Object(k.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 24px;\n"]))),z=S.a.nav(j||(j=Object(k.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 30px;\n\tmargin: 24px;\n"]))),E=Object(S.a)(u.b)(b||(b=Object(k.a)(["\n\tborder-radius: 4px;\n\tcursor: pointer;\n\tbackground: #fff;\n\tborder-width: 1;\n\tflex-wrap: wrap;\n\tmax-width: 50px;\n\tcolor: #000;\n\ttransition: all 0.2s ease-in-out;\n\ttext-decoration: none;\n\t&:hover {\n\t\ttransition: all 0.2s ease-in-out;\n\t\tbackground: #1045ab;\n\n\t\tcolor: #1045ab;\n\t}\n"]))),I=function(t){var e,n,c=t.title,i=t.pubDate,r=t.link,a=t.description,s=t.thumbnail;function l(t,e,n){return t.length>n?t.slice(e,n):t}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(E,{to:{pathname:r},target:"_blank",children:[Object(m.jsx)(z,{children:l((n=c,n=n.replace("amp;","")),0,60)}),Object(m.jsx)("img",{src:s,alt:"",style:{maxWidth:"400px",justifySelf:"center",overflow:"hidden"}}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:l(function(t){var e=document.createElement("div");return e.innerHTML=t,t=e.innerText}((e=a,e.replace("Unsplash","Unsplash. "))),0,300)+"..."}),Object(m.jsx)("br",{}),Object(m.jsx)("h4",{children:function(t){var e=t.slice(0,10).split("-"),n=e.shift();return e.push(n),console.log(t),"Published: ".concat(e.join("/"))}(i)}),Object(m.jsx)(B,{to:{pathname:r},target:"_blank",children:"Read More"})]})})};function M(t){var e=Object(d.useState)({title:"",link:"",pubDate:"",description:"",thumbnail:""}),n=Object(O.a)(e,2),c=n[0],i=n[1],r="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";Object(d.useEffect)((function(){fetch(r).then((function(t){return t.json()})).then((function(t){i(t.items[0])}))}),[r]);return Object(m.jsxs)("div",{style:{display:"flex",height:"90vh",flexDirection:"column",padding:10},children:[Object(m.jsx)("h1",{style:{alignSelf:"center"},children:"Welcome"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{style:{marginTop:20,fontSize:25},children:"Latest Blog"}),Object(m.jsx)(I,{title:c.title,link:c.link,pubDate:c.pubDate,description:c.description,thumbnail:c.thumbnail})]})]})}function q(t){var e=Object(d.useState)([]),n=Object(O.a)(e,2),c=n[0],i=n[1],r="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";return Object(d.useEffect)((function(){fetch(r).then((function(t){return t.json()})).then((function(t){i(t.items),console.log(t.items[0])}))}),[r]),Object(m.jsxs)("div",{style:{padding:10,display:"flex",height:"90vh",flexDirection:"column"},children:[Object(m.jsx)("h1",{style:{alignSelf:"center"},children:"Blogs"}),Object(m.jsx)("div",{style:{display:"flex",height:"90vh",flexDirection:"column",marginLeft:20},children:c.map((function(t,e){return Object(m.jsx)("div",{className:"noBullet",children:Object(m.jsx)(I,{title:t.title,link:t.link,pubDate:t.pubDate,description:t.description,thumbnail:t.thumbnail})},e)}))})]})}var A=function(){return Object(y.f)().path,Object(m.jsx)("div",{children:Object(m.jsx)(y.c,{children:Object(m.jsx)(y.a,{path:"/",children:Object(m.jsx)(q,{})})})})};function J(t){var e={fontSize:20,marginTop:10};return Object(m.jsxs)("div",{style:{padding:10,display:"flex",height:"90vh",alignItems:"center",flexDirection:"column"},children:[Object(m.jsx)("h1",{children:"Contact"}),Object(m.jsx)("a",{style:e,href:"https://www.linkedin.com/in/samuel-schmitt-008805189/",class:"text-white",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(m.jsx)("a",{style:e,href:"https://www.instagram.com/sam.schmiitt/",class:"text-white",target:"_blank",rel:"noreferrer",children:"Instagram"}),Object(m.jsx)("a",{style:e,href:"https://www.facebook.com/SamSchmitt703",class:"text-white",target:"_blank",rel:"noreferrer",children:"Facebook"}),Object(m.jsx)("a",{style:e,href:"https://twitter.com/samschmiitt",class:"text-white",target:"_blank",rel:"noreferrer",children:"Twitter"})]})}var W=function(){return Object(y.f)().path,Object(m.jsx)("div",{children:Object(m.jsx)(y.c,{children:Object(m.jsx)(y.a,{path:"/",children:Object(m.jsx)(J,{})})})})};var H,U,Q,R=function(){return Object(y.f)().path,Object(m.jsx)("div",{children:Object(m.jsx)(y.c,{children:Object(m.jsx)(y.a,{path:"/",children:Object(m.jsx)(M,{})})})})},G=Object(S.a)(u.b)(H||(H=Object(k.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 24px;\n"]))),K=S.a.nav(U||(U=Object(k.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 30px;\n\tmargin: 24px;\n"]))),V=Object(S.a)(u.b)(Q||(Q=Object(k.a)(["\n\tborder-radius: 4px;\n\tcursor: pointer;\n\tbackground: #fff;\n\tborder-width: 1;\n\tflex-wrap: wrap;\n\tmax-width: 50px;\n\tcolor: #000;\n\ttransition: all 0.2s ease-in-out;\n\ttext-decoration: none;\n\t&:hover {\n\t\ttransition: all 0.2s ease-in-out;\n\t\tbackground: #1045ab;\n\n\t\tcolor: #1045ab;\n\t}\n"]))),X=function(t){var e=t.title,n=t.link,c=t.linkName,i=t.description,r=t.image;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(V,{to:{pathname:n},target:"_blank",children:[Object(m.jsx)(K,{children:e}),Object(m.jsx)("img",{src:r,alt:"",style:{maxWidth:"400px",justifySelf:"center",overflow:"hidden"}}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:i}),Object(m.jsx)("br",{}),Object(m.jsx)(G,{to:{pathname:n},target:"_blank",children:c})]})})},Y=n.p+"static/media/quaeLogo.7d879634.png";function Z(t){return Object(m.jsxs)("div",{style:{display:"flex",height:"90vh",flexDirection:"column",padding:10},children:[Object(m.jsx)("h1",{style:{alignSelf:"center"},children:"Projects"}),Object(m.jsx)("div",{children:Object(m.jsx)(X,{link:"https://quae.app",linkName:"quae.app",title:"Quae",description:"The first community driven voting platfrom. Exclusive to the city of Hoboken, NJ. Currently available on the App Store, and PlayStore",image:Y})})]})}var $=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(y.c,{children:Object(m.jsx)(y.a,{path:"/",children:Object(m.jsx)(Z,{})})})})};var tt=function(){return Object(m.jsxs)("div",{className:"app-container",children:[Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)(P,{})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(y.c,{children:[Object(m.jsx)(y.a,{path:"/blog",children:Object(m.jsx)(A,{})}),Object(m.jsx)(y.a,{path:"/contact",children:Object(m.jsx)(W,{})}),Object(m.jsx)(y.a,{path:"/projects",children:Object(m.jsx)($,{})}),Object(m.jsx)(y.a,{path:"/",children:Object(m.jsx)(R,{})})]})})]})};var et=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(v,{children:Object(m.jsx)(tt,{})})})})})},nt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};p.a.render(Object(m.jsx)(h.a.StrictMode,{children:Object(m.jsx)(et,{})}),document.getElementById("root")),nt()}},[[42,1,2]]]);
//# sourceMappingURL=main.51f2cd53.chunk.js.map