(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{520:function(t,e,r){"use strict";r.r(e);r(308);var n=r(27),o=r(37),c=r(42),l=r(36),v=r(28),d=r(13),f=r(181),h=r(521);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"title",get:function(){return this.item.label}},{key:"url",get:function(){return this.item.url}}]),r}(f.Vue);_([Object(f.Prop)()],y.prototype,"item",void 0);var k=y=_([Object(f.Component)({components:{ShareButtons:h.default}})],y),w=r(103),x=r(142),j=r.n(x),C=r(235),O=r(218),I=r(470),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("v-menu",{attrs:{top:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{depressed:"",icon:""}},n),[r("v-icon",[t._v("mdi-share-variant")])],1)]}}])},[t._v(" "),r("ShareButtons",{attrs:{url:t.url,title:t.title}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{ShareButtons:r(521).default}),j()(component,{VBtn:C.a,VIcon:O.a,VMenu:I.a})},521:function(t,e,r){"use strict";r.r(e);r(308);var n=r(27),o=r(37),c=r(42),l=r(36),v=r(28),d=r(13),f=r(181);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).baseUrl="https://shibusawa-foundation.github.io/labo1",t}return Object(o.a)(r,[{key:"twitterUrl",get:function(){return"https://twitter.com/intent/tweet?url="+this.url+"&text="+this.title}},{key:"facebookUrl",get:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url}},{key:"pocketUrl",get:function(){return"http://getpocket.com/edit?url="+this.url}}]),r}(f.Vue);m([Object(f.Prop)({required:!0})],_.prototype,"url",void 0),m([Object(f.Prop)({required:!0})],_.prototype,"title",void 0);var y=_=m([f.Component],_),k=r(103),w=r(142),x=r.n(w),j=r(235),C=r(220),O=r(218),I=r(540),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.twitterUrl}},n),[r("v-icon",[t._v("mdi-twitter")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Twitter"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.facebookUrl}},n),[r("v-icon",[t._v("mdi-facebook")])],1)]}}])},[t._v(" "),r("span",[t._v(t._s("Facebook"))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"ma-2",attrs:{icon:"",target:"_blank",href:t.pocketUrl}},n),[r("img",{staticStyle:{"font-size":"24px"},attrs:{src:t.baseUrl+"/img/icons/pocket.svg"}})])]}}])},[t._v(" "),r("span",[t._v(t._s("Pocket"))])])],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:j.a,VCard:C.a,VIcon:O.a,VTooltip:I.a})},541:function(t,e,r){var content=r(577);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1dee1762",content,!0,{sourceMap:!1})},576:function(t,e,r){"use strict";r(541)},577:function(t,e,r){(e=r(17)(!1)).push([t.i,"tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}",""]),t.exports=e},609:function(t,e,r){"use strict";r.r(e);r(26),r(68),r(32),r(51),r(52);var n=r(16),o=r(525),c=r(184),l={components:{ResultOption:r(520).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,v,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,n=t.app,!r){e.next=5;break}return e.abrupt("return",{item:r});case 5:return l=n.context.params.id,v=o(c.a.appId,c.a.apiKey),d=v.initIndex("dev_MAIN"),e.next=10,d.getObject(l);case 10:return f=e.sent,e.abrupt("return",{item:f});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{baseUrl:"https://shibusawa-foundation.github.io/labo1"}},head:function(){var title=this.title;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:this.url},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"}]}},computed:{dates:function(){var t=this.item.date,e=Object.keys(t),r=t[e[e.length-1]].split(" > "),data=[];return r.length>=1&&data.push({id:1,name:r[0],children:[],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0]}}),r.length>=2&&data[0].children.push({id:2,name:r[1],children:[],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][date.lvl0][1]":r[1]}}),3===r.length&&data[0].children[0].children.push({id:3,name:r[2],query:{"dev_MAIN[hierarchicalMenu][date.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][date.lvl0][1]":r[1],"dev_MAIN[hierarchicalMenu][date.lvl0][2]":r[2]}}),data},categories:function(){var t=this.item.category,e=Object.keys(t),r=t[e[e.length-1]].split(" > ");return[{id:1,name:r[0],query:{"dev_MAIN[hierarchicalMenu][category.lvl0][0]":r[0]},children:[{id:2,name:r[1],query:{"dev_MAIN[hierarchicalMenu][category.lvl0][0]":r[0],"dev_MAIN[hierarchicalMenu][category.lvl0][1]":r[1]}}]}]},title:function(){return this.item.label},url:function(){return this.baseUrl+this.$route.path},jsonUrl:function(){return"https://".concat(c.a.appId,"-dsn.algolia.net/1/indexes/dev_MAIN/").concat(this.item.objectID,"?X-Algolia-API-Key=").concat(c.a.apiKey,"&X-Algolia-Application-Id=").concat(c.a.appId)},items:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"})},{text:this.$t("search"),disabled:!1,to:this.localePath({name:"search"})},{text:this.title}]}},methods:{getQuery:function(label,t){var e={"dev_MAIN[sortBy]":"dev_MAIN"};return e["dev_MAIN[refinementList][".concat(label,"][0]")]=t,e},getValues:function(data){return data?Array.isArray(data)?data:[data]:[]},dwnData:function(){var t=this.item.objectID+".xml",data=this.item.xml,link=document.createElement("a");link.href="data:text/xml;charset=utf-8,"+encodeURIComponent(data),link.download=t,link.click()}}},v=(r(576),r(103)),d=r(142),f=r.n(d),h=r(522),m=r(235),_=r(220),y=r(511),k=r(218),w=r(177),x=r(57),j=r(531),C=r(540),O=r(613),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-4",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[r("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1),t._v(" "),r("v-container",{staticClass:"py-10"},[r("p",{staticClass:"mb-5 text-center"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.item.prev?r("v-btn",t._g({staticClass:"ma-1",attrs:{text:"",color:"primary",to:t.localePath({name:"item-id",params:{id:t.item.prev}})}},n),[r("v-icon",[t._v("mdi-chevron-left")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("previous")))])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.item.next?r("v-btn",t._g({staticClass:"ma-1",attrs:{text:"",color:"primary",to:t.localePath({name:"item-id",params:{id:t.item.next}})}},n),[r("v-icon",[t._v("mdi-chevron-right")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v(t._s(t.$t("next")))])])],1),t._v(" "),r("v-card",{staticClass:"my-5",attrs:{flat:"",outlined:""}},[r("div",{staticClass:"pa-4"},[r("span",{domProps:{innerHTML:t._s(t.$utils.xml2html(t.item.xml,!0))}}),t._v(" "),r("v-sheet",{staticClass:"pa-3 mt-10",attrs:{color:"grey lighten-3"}},[r("b",{staticClass:"mr-2"},[t._v(t._s(t.$t("legend"))+":")]),t._v(" "),r("span",{staticClass:"mr-2 teiPersName"},[t._v(t._s(t.$t("agential")))]),t._v(" "),r("span",{staticClass:"mr-2 teiPlaceName"},[t._v(t._s(t.$t("spatial")))]),t._v(" "),r("span",{staticClass:"mr-2 teiDate"},[t._v(t._s(t.$t("date")))]),t._v(" "),r("span",{staticClass:"teiTime"},[t._v(t._s(t.$t("temporal")))])])],1)]),t._v(" "),r("div",{staticClass:"text-center mt-10"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-4",attrs:{icon:""}},n),[r("a",[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/tei.png"},on:{click:function(e){return t.dwnData()}}})],1)])]}}])},[t._v(" "),r("span",[t._v("TEI/XML")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-4",attrs:{icon:""}},n),[r("a",{attrs:{href:t.jsonUrl,target:"_blank"}},[r("v-img",{attrs:{contain:"",width:"30px",src:t.baseUrl+"/img/icons/json-logo.svg"}})],1)])]}}])},[t._v(" "),r("span",[t._v("JSON")])]),t._v(" "),r("ResultOption",{attrs:{item:{label:t.title,url:t.url}}})],1),t._v(" "),r("v-simple-table",{staticClass:"mt-10",scopedSlots:t._u([{key:"default",fn:function(){return[r("tbody",[r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("category")))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("v-treeview",{attrs:{dense:"","open-all":"",items:t.categories},scopedSlots:t._u([{key:"label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"search",query:n.query})}},[t._v(t._s(n.name))])]}}])})],1)]),t._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t("date")))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[r("v-treeview",{attrs:{dense:"","open-all":"",items:t.dates},scopedSlots:t._u([{key:"label",fn:function(e){var n=e.item;return[r("nuxt-link",{attrs:{to:t.localePath({name:"search",query:n.query})}},[t._v(t._s(n.name))])]}}])})],1)]),t._v(" "),t._l(["agential","spatial"],(function(e,n){return[t.item[e].length>0?r("tr",{key:n},[r("td",{attrs:{width:"30%"}},[t._v(t._s(t.$t(e)))]),t._v(" "),r("td",{staticClass:"py-5",staticStyle:{"overflow-wrap":"break-word"}},[t._l(t.getValues(t.item[e]),(function(n,o){return[r("span",{key:o,staticClass:"mr-4"},[r("nuxt-link",{attrs:{to:t.localePath({name:"entity-entity-id",params:{entity:e,id:n}})}},[t._v("\n                      "+t._s(n)+"\n                    ")]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var c=o.on;return[r("v-btn",t._g({attrs:{icon:"",to:t.localePath({name:"search",query:t.getQuery(e,n)})}},c),[r("v-icon",[t._v("mdi-magnify")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.$t("search")))])])],1)]}))],2)]):t._e()]}))],2)]},proxy:!0}])})],1),t._v(" "),r("v-sheet",{staticClass:"text-center pa-10"},[r("small",[r("h3",{staticClass:"mb-5"},[t._v(t._s(t.$t("license")))]),t._v(" "),"ja"==t.$i18n.locale?[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"クリエイティブ・コモンズ・ライセンス",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("この作品は"),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("クリエイティブ・コモンズ 表示 4.0 国際 ライセンス")]),t._v("の下に提供されています。\n      ")]:[r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[r("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by/4.0/88x31.png"}})]),r("br"),t._v("This work is licensed under a\n        "),r("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by/4.0/"}},[t._v("Creative Commons Attribution 4.0 International License")]),t._v(".\n      ")]],2)])],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{ResultOption:r(520).default}),f()(component,{VBreadcrumbs:h.a,VBtn:m.a,VCard:_.a,VContainer:y.a,VIcon:k.a,VImg:w.a,VSheet:x.a,VSimpleTable:j.a,VTooltip:C.a,VTreeview:O.a})}}]);