(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r),c=n(7),a=n(8),s=n(5),u=n.n(s),i=n(1),d=(n(15),n(0)),b=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{style:{color:"".concat(t.color)},"data-cy":"good",children:t.name},t.id)}))})},l=n(9);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){return f().then((function(t){return Object(l.a)(t).sort().slice(0,5)}))},p=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},h=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];function o(t){return s.apply(this,arguments)}function s(){return(s=Object(c.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.currentTarget.dataset.cy,t.t0=n,t.next="all-button"===t.t0?4:"first-five-button"===t.t0?10:"red-button"===t.t0?16:22;break;case 4:return t.t1=r,t.next=7,f();case 7:return t.t2=t.sent,(0,t.t1)(t.t2),t.abrupt("break",23);case 10:return t.t3=r,t.next=13,j();case 13:return t.t4=t.sent,(0,t.t3)(t.t4),t.abrupt("break",23);case 16:return t.t5=r,t.next=19,p();case 19:return t.t6=t.sent,(0,t.t5)(t.t6),t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:o,children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:o,children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:o,children:"Load red goods"}),Object(d.jsx)(b,{goods:n})]})};o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6bf1aa2f.chunk.js.map