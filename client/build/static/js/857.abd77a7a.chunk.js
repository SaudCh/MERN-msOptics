"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[857],{873:function(e,t,s){s.d(t,{x:function(){return n}});var n=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}},7857:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var n=s(2791),c=s(9707),r=s(7008),i=s(8161),l=s(9439),a=s(4569),d=s.n(a),o=s(184),m=function(e){var t=e.cart,s=e.user,c=n.useState(!1),r=(0,l.Z)(c,2),i=r[0],a=r[1];return(0,o.jsx)(o.Fragment,{children:(null===s||void 0===s?void 0:s._id)&&(0,o.jsxs)("button",{type:"button",class:"btn text-white mt-3 ",onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("token")),n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}};a(!0),d().post("".concat("http://localhost:4000","/api/orders/checkout-session"),{cart:t,user:s},n).then((function(e){e.data.url&&(window.location.href=e.data.url)})).catch((function(e){return console.log(e.message)})),a(!1)}()},disabled:i,style:{backgroundColor:"#373B3C"},children:[i&&(0,o.jsx)("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Check out"]})})},u=s(873);function h(){document.title="Cart";var e=(0,n.useContext)(c.A),t=e.cart,s=e.removeAll,l=e.removeItem,a=e.total,d=e.IncQuantity,h=e.DecQuantity,x=(0,n.useContext)(r.V).user;return 0===t.length?(0,o.jsx)("div",{className:"cart d-flex align-items-center justify-content-center",style:{minHeight:"70vh"},children:(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("h1",{children:"Cart"}),(0,o.jsx)("p",{children:"There are no items in your cart."})]})}):(0,o.jsx)("section",{className:"container-fluid mt-3 pt-2 ",style:{minHeight:"72vh"},children:(0,o.jsxs)("div",{className:"row justify-content-center align-items-center align-items-md-start flex-column-reverse flex-md-row",children:[(0,o.jsxs)("div",{className:"col-11 col-md-9 bg-light border rounded p-2 mt-3 mt-md-0",style:{minHeight:"50vh"},children:[(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsx)("p",{className:"h4",children:"Cart"}),(0,o.jsx)("button",{className:"btn btn-sm text-white",style:{backgroundColor:"#373B3C"},onClick:function(){return s()},children:"Remove All"})]}),t.map((function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)("figure",{className:"rounded overflow-hidden border",children:(0,o.jsx)("img",{src:"".concat("http://localhost:4000","/img/products/").concat(e.image),alt:"",width:"100",height:"100"})}),(0,o.jsxs)("div",{className:"ms-1",children:[(0,o.jsx)("p",{className:"h6 p-0 m-0",children:e.title}),(0,o.jsx)("p",{className:"p-0 m-0 text-success fw-bold",children:(0,u.x)(e.price)})]})]}),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("p",{className:"p-0 m-0 text-success fw-bold",children:(0,u.x)(e.price)}),(0,o.jsxs)("div",{className:"border d-flex rounded overflow-hidden bg-white",children:[(0,o.jsx)("button",{className:"btn px-2 py-1 cart-icon border-end",onClick:function(){return h(e.id)},children:(0,o.jsx)(i.Sb,{})}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:"m-0 px-3 py-1",children:e.quantity})}),(0,o.jsx)("button",{className:"btn px-2 py-1 cart-icon border-start",onClick:function(){return d(e.id)},children:(0,o.jsx)(i.xY,{})})]})]}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return l(e.id)},children:(0,o.jsx)(i.XH,{})})})]}),(0,o.jsx)("hr",{})]})}))]}),(0,o.jsx)("div",{className:"col-11 col-md-2",children:(0,o.jsxs)("div",{className:"bg-light border p-2 rounded",children:[(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsx)("p",{className:"p-0 m-0",children:"Subtotal"}),(0,o.jsx)("p",{className:"p-0 m-0",children:(0,u.x)(a)})]}),(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsx)("p",{className:"p-0 m-0",children:"Delivery Charges"}),(0,o.jsx)("p",{className:"p-0 m-0",children:"Total"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,o.jsx)("p",{className:"p-0 m-0",children:"Total"}),(0,o.jsx)("p",{className:"p-0 m-0",children:(0,u.x)(a)})]}),(0,o.jsx)("div",{className:"text-end",children:(0,o.jsx)(m,{cart:t,user:x})})]})})]})})}}}]);
//# sourceMappingURL=857.abd77a7a.chunk.js.map