(function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,f=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2179bf99"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3a4c":function(t,e,n){},"45cf":function(t,e,n){"use strict";var r=n("3a4c"),o=n.n(r);o.a},"474a":function(t,e,n){t.exports=n.p+"img/favicon2.36539d07.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("474a")}}),r("div",[r("Nav"),r("router-view")],1)])},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav_fixed"},[n("div",{staticStyle:{float:"left","margin-left":"20px","margin-top":"10px"}},[n("router-link",{attrs:{to:"/"}},[n("Icon",{attrs:{type:"md-planet",size:"30"}})],1)],1),n("div",{staticStyle:{float:"left","margin-left":"20px","margin-top":"10px"}},[n("router-link",{attrs:{to:"/about"}},[n("Icon",{attrs:{type:"md-cog",size:"30"}})],1)],1)])},i=[],c={name:"Nav",props:{}},s=c,l=(n("45cf"),n("2877")),d=Object(l["a"])(s,u,i,!1,null,null,null),f=d.exports,p={name:"app",components:{Nav:f}},m=p,b=(n("034f"),Object(l["a"])(m,o,a,!1,null,null,null)),v=b.exports,h=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("22"+t._s(t.murmur))])])},y=[],w=(n("a4d3"),n("4de4"),n("a15b"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),O=n("2f62"),j=n("e813"),_=n.n(j);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(w["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=Object(O["a"])("account"),S=k.mapState,E=k.mapActions,C={name:"home",computed:P({},S({murmur:function(t){return t.did}})),methods:P({},E(["act_update_did"])),components:{},created:function(){if(window.console.log("ww",this.murmur,""!=this.murmur,this.$store.state.account.did),""==this.murmur){window.console.log(this.murmur,22,window.requestIdleCallback);var t=this;window.requestIdleCallback?requestIdleCallback((function(){_.a.get((function(e){var n=e.map((function(t){return t.value})),r=_.a.x64hash128(n.join(""),31);t.act_update_did(r)}))})):setTimeout((function(){_.a.get((function(e){var n=e.map((function(t){return t.value})),r=_.a.x64hash128(n.join(""),31);t.act_update_did(r)}))}),500),window.console.log(666,this.murmur)}}},T=C,I=Object(l["a"])(T,g,y,!1,null,null,null),$=I.exports;r["default"].use(h["a"]);var q=[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],D=new h["a"]({mode:"history",base:"/",routes:q}),M=D,N=n("f825"),z=n.n(N);n("f8ce");r["default"].use(z.a);var A={did:"",name:"",uid:0},J={did:function(t){return t.did}},L={update_did:function(t,e){var n=e.did;t.did=n}},B={act_update_did:function(t,e){var n=t.commit;n("update_did",{did:e})}},F={namespaced:!0,state:A,getters:J,actions:B,mutations:L};r["default"].use(O["b"]);var G=new O["b"].Store({state:{},mutations:{},actions:{},modules:{account:F}});r["default"].config.productionTip=!1,new r["default"]({router:M,store:G,render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a55c7e8c.js.map