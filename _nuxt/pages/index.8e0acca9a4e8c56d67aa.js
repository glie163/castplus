webpackJsonp([0],{"/TYz":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("ckSr"),i=a("rGQh"),r=!1;var c=function(t){r||a("i4lM")},l=a("VU/8")(e.a,i.a,!1,c,"data-v-2a183b29",null);l.options.__file="pages/index.vue",s.default=l.exports},EP6Z:function(t,s,a){t.exports=a.p+"img/hero-eng3.9922cb9.jpg"},Iix7:function(t,s,a){t.exports=a.p+"img/qingdao.d674422.jpg"},YiZh:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".services-card[data-v-2a183b29]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.services-card.active[data-v-2a183b29],.services-card[data-v-2a183b29]:hover{opacity:.8;-webkit-transform:scale(1.02);transform:scale(1.02)}.services-card.active[data-v-2a183b29]{border-bottom:6px solid #ff0}.accordion-body[data-v-2a183b29]{-webkit-transition:height .3s cubic-bezier(.25,.8,.5,1);transition:height .3s cubic-bezier(.25,.8,.5,1);height:0;overflow:hidden}.accordion-body.active[data-v-2a183b29]{height:100%}",""])},ckSr:function(t,s,a){"use strict";s.a={data:function(){return{title:"logo",dialog:!1,processItems:[{src:"process/1-mouldmaking.jpg",title:"1. Creation of the mould"},{src:"process/2-waxinjection.jpg",title:"2. Wax injection into the mould"},{src:"process/3-treeassembly.jpg",title:"3. Assembly of the tree"},{src:"process/4-coating.jpg",title:"4. Coating the tree"},{src:"process/5-waxmelting.jpg",title:"5. Melting of the wax inside the mould"},{src:"process/6-metalpouring.jpg",title:"6. Metal pouring"},{src:"process/7-shellremoval.jpg",title:"7. Outer shell removal"},{src:"process/8-cutoff.jpg",title:"8. Removal of excess material"},{src:"process/9-shotblasting.jpg",title:"9. Shot blasting"},{src:"process/10-inspection.jpg",title:"10. Inspection"},{src:"process/11-coining.jpg",title:"11. Coining"},{src:"process/12-machining.jpg",title:"12. Machining"},{src:"process/13-heattreatment.jpg",title:"13. Heat treatment"},{src:"process/14-finalinspection.jpg",title:"14. Final inspection"},{src:"process/15-delivery.jpg",title:"15. Delivery"}]}},methods:{toggleAccordion:function(t){for(var s=document.getElementsByClassName("services-card"),a=0;a<s.length;a++)s[a].classList.contains(t)?s[a].classList.toggle("active"):s[a].classList.remove("active");for(var e=document.getElementsByClassName("accordion-body"),i=0;i<e.length;i++)e[i].classList.contains(t)?(e[i].classList.contains("active")||this.$vuetify.goTo(".accordion",{offset:-50,duration:1e3}),e[i].classList.toggle("active")):e[i].classList.remove("active")}}}},i4lM:function(t,s,a){var e=a("YiZh");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("6453b595",e,!1,{sourceMap:!1})},rGQh:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{light:""}},[e("v-toolbar",{staticClass:"white",attrs:{fixed:""}},[e("v-toolbar-title",{staticClass:"pt-2"},[e("img",{staticClass:"logo",attrs:{src:"logo.svg",alt:"castplus",height:"75"}})]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{flat:""}},[t._v("English")]),e("v-btn",{attrs:{flat:""}},[t._v("中文(Chinese)")])],1)],1),e("v-content",[e("section",[e("v-parallax",{attrs:{src:a("EP6Z"),height:"550"}},[e("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[e("img",{staticClass:"hero-logo",attrs:{src:"logo-color.png",alt:"castplus",height:"150"}}),e("h1",{staticClass:"white--text mb-2 display-1 text-xs-center"},[t._v("CASTPLUS")]),e("div",{staticClass:"subheading mb-2 text-xs-center"},[t._v("Precision Engineering")]),e("v-btn",{staticClass:"primary mt-5",attrs:{large:""},nativeOn:{click:function(s){t.dialog=!0}}},[t._v("Contact Us")])],1)],1)],1),e("section",[e("v-layout",{staticClass:"mt-5",attrs:{column:"",wrap:""}},[e("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[e("div",{staticClass:"text-xs-center"},[e("h2",{staticClass:"headline"},[t._v("Over 10 years precision engineering and manufacturing experience")]),e("span",{staticClass:"subheading"})])]),e("v-flex",{attrs:{xs12:""}},[e("v-container",{attrs:{"grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-card",{staticClass:"light services-card process",attrs:{hover:"",ripple:""},nativeOn:{click:function(s){t.toggleAccordion("process")}}},[e("v-card-media",{attrs:{src:"metal-pouring.jpg",height:"300px"}}),e("v-card-text",{staticClass:"text-xs-center"}),e("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[e("div",{staticClass:"headline text-xs-center"},[t._v("Efficient processes")])]),e("v-card-text",[t._v("We have refined our proccesses over many years to ensure optimal results")])],1)],1),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-card",{staticClass:"light services-card quality",attrs:{hover:"",ripple:""},nativeOn:{click:function(s){t.toggleAccordion("quality")}}},[e("v-card-media",{attrs:{src:"metal-crystals.jpg",height:"300px"}}),e("v-card-text",{staticClass:"text-xs-center"}),e("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v("Strict quality control")])]),e("v-card-text",[t._v("All our products pass through strict quality control using latest techniques and instruments")])],1)],1),e("v-flex",{attrs:{xs12:"",md4:""}},[e("v-card",{staticClass:"light services-card products",attrs:{hover:"",ripple:""},nativeOn:{click:function(s){t.toggleAccordion("products")}}},[e("v-card-media",{attrs:{src:"products.jpg",height:"300px"}}),e("v-card-text",{staticClass:"text-xs-center"}),e("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[e("div",{staticClass:"headline text-xs-center"},[t._v("World class products")])]),e("v-card-text",[t._v("Our products have been shipped all around the world and are used by major automotive companies")])],1)],1)],1)],1)],1)],1)],1),e("div",{staticClass:"accordion"},[e("div",{staticClass:"accordion-body process"},[e("div",{staticClass:"text-xs-center mt-5"},[e("h2",{staticClass:"headline"},[t._v("See our manufacturing process")])]),e("v-container",[e("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",md8:""}},[e("v-carousel",{attrs:{cycle:!1,lazy:!0}},t._l(t.processItems,function(s,a){return e("v-carousel-item",{key:a},[e("v-card",{staticClass:"black--text",attrs:{color:"light"}},[e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{xs12:""}},[e("div",[e("div",{staticClass:"subheading pb-3"},[t._v(t._s(s.title))])])]),e("v-flex",{attrs:{xs12:""}},[e("v-card-media",{attrs:{src:s.src,height:"500"}})],1)],1)],1)],1)],1)}))],1)],1)],1)],1),e("div",{staticClass:"accordion-body quality"},[t._v("Quality")]),e("div",{staticClass:"accordion-body products"},[t._v("Products")])]),e("section",[e("div",{staticClass:"mt-5"},[e("v-parallax",{attrs:{src:a("Iix7"),height:"550"}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("div",{staticClass:"headline white--text mb-3 text-xs-center"},[t._v("Quality engineered products for all your needs")]),e("v-btn",{staticClass:"primary mt-5",attrs:{dark:"",large:""},nativeOn:{click:function(s){t.dialog=!0}}},[t._v("Contact Us")])],1)],1)],1)]),e("section",[e("v-container",[e("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-card",{staticClass:"elevation-0 transparent"},[e("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v("About CASTPLUS")])]),e("v-card-text",[t._v("Established in Taiwan in 2004")])],1)],1),e("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[e("v-card",{staticClass:"elevation-0 transparent"},[e("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v("Contact us")])]),e("v-card-text",[t._v("\n                 We ship internationally from our base of operations in Qingdao, CN. \n               ")]),e("v-list",{staticClass:"transparent"},[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{staticClass:"primary--text"},[t._v("phone")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("777-867-5309")])],1)],1),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{staticClass:"primary--text"},[t._v("place")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("Qingdao, CN")])],1)],1),e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{staticClass:"primary--text"},[t._v("email")])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v("glie163@castplus.com")])],1)],1)],1)],1)],1)],1)],1)],1),e("v-footer",{staticClass:"primary"},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",{attrs:{xs12:""}})],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(s){t.dialog=s},expression:"dialog"}},[e("v-card",[e("v-card-title",[e("span",[t._v("Dialog")]),e("v-spacer")],1),e("v-card-actions",[e("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(s){s.stopPropagation(),t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]};s.a=i}});