(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7340:function(e,t,s){Promise.resolve().then(s.bind(s,6932))},3910:function(e,t,s){var r=s(4288).Symbol;e.exports=r},4506:function(e,t,s){var r=s(3910),l=s(4479),a=s(910),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?l(e):a(e)}},5041:function(e,t,s){var r=s(5035),l=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(l,""):e}},7071:function(e,t,s){var r="object"==typeof s.g&&s.g&&s.g.Object===Object&&s.g;e.exports=r},4479:function(e,t,s){var r=s(3910),l=Object.prototype,a=l.hasOwnProperty,i=l.toString,n=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,n),s=e[n];try{e[n]=void 0;var r=!0}catch(e){}var l=i.call(e);return r&&(t?e[n]=s:delete e[n]),l}},910:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},4288:function(e,t,s){var r=s(7071),l="object"==typeof self&&self&&self.Object===Object&&self,a=r||l||Function("return this")();e.exports=a},5035:function(e){var t=/\s/;e.exports=function(e){for(var s=e.length;s--&&t.test(e.charAt(s)););return s}},7310:function(e,t,s){var r=s(8302),l=s(1121),a=s(6660),i=Math.max,n=Math.min;e.exports=function(e,t,s){var c,o,u,d,x,f,p=0,m=!1,h=!1,g=!0;if("function"!=typeof e)throw TypeError("Expected a function");function j(t){var s=c,r=o;return c=o=void 0,p=t,d=e.apply(r,s)}function v(e){var s=e-f,r=e-p;return void 0===f||s>=t||s<0||h&&r>=u}function b(){var e,s,r,a=l();if(v(a))return w(a);x=setTimeout(b,(e=a-f,s=a-p,r=t-e,h?n(r,u-s):r))}function w(e){return(x=void 0,g&&c)?j(e):(c=o=void 0,d)}function y(){var e,s=l(),r=v(s);if(c=arguments,o=this,f=s,r){if(void 0===x)return p=e=f,x=setTimeout(b,t),m?j(e):d;if(h)return clearTimeout(x),x=setTimeout(b,t),j(f)}return void 0===x&&(x=setTimeout(b,t)),d}return t=a(t)||0,r(s)&&(m=!!s.leading,u=(h="maxWait"in s)?i(a(s.maxWait)||0,t):u,g="trailing"in s?!!s.trailing:g),y.cancel=function(){void 0!==x&&clearTimeout(x),p=0,c=f=o=x=void 0},y.flush=function(){return void 0===x?d:w(l())},y}},8302:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},303:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},8371:function(e,t,s){var r=s(4506),l=s(303);e.exports=function(e){return"symbol"==typeof e||l(e)&&"[object Symbol]"==r(e)}},1121:function(e,t,s){var r=s(4288);e.exports=function(){return r.Date.now()}},6660:function(e,t,s){var r=s(5041),l=s(8302),a=s(8371),i=0/0,n=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return i;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var s=c.test(e);return s||o.test(e)?u(e.slice(2),s?2:8):n.test(e)?i:+e}},756:function(e,t,s){"use strict";s.d(t,{Z:function(){return l}});var r=s(7437);s(2265);var l=e=>{let{children:t,className:s}=e;return(0,r.jsx)("div",{className:"w-full flex justify-center "+s,children:(0,r.jsx)("div",{className:"w-full max-w-[1092px] flex flex-col items-center mx-6",children:t})})}},1926:function(e,t,s){"use strict";var r=s(7437);s(2265);var l=s(3145),a=s(2370),i=s(9431),n=s(7030),c=s(7648),o=s(3925);t.Z=e=>{let{id:t,image:s,title:u,view_count:d,date:x,area:f,width:p}=e;console.log(x);let m=window.localStorage.getItem("locale");return(0,r.jsxs)("div",{className:"flex flex-col cursor-pointer",style:{width:p?"".concat(p,"px"):"350px"},children:[(0,r.jsx)("div",{className:"w-full bg-cover bg-center h-[197px] mb-[11px] relative",style:{backgroundImage:'url("'.concat(s,'")')},children:"string"==typeof f&&(0,r.jsx)("div",{className:"absolute w-2/3 px-2 py-3 leading-[21px] text-[18px] font-medium text-white text-wrap bg-[#0A478C] bottom-[15px]",children:f})}),(0,r.jsx)(c.default,{href:"/news/".concat(t),style:{fontSize:"".concat(p?"16":"21","px")},className:"text-[21px] font-medium hover:text-primary hover:underline hover:underline-offset-4",children:u}),(0,r.jsxs)("div",{className:"w-full flex justify-between text-[#7F7C7C] ",children:[(0,r.jsx)("p",{children:x?(0,o.WU)(new Date(x),"d MMMM",{locale:"ru"===m?i.ru:n.kk}):""}),(0,r.jsx)("div",{className:"flex  gap-x-[21px]",children:(0,r.jsxs)("p",{className:"flex gap-x-1",children:[(0,r.jsx)(l.default,{src:a.Z,alt:""}),d]})})]})]})}},6932:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var r=s(7437),l=s(756),a=s(2265),i={src:"/_next/static/media/Vector.3ff4cdb4.svg",height:20,width:20,blurWidth:0,blurHeight:0},n=s(3145),c=s(7310),o=s.n(c),u=s(7648),d=s(476),x=()=>{let[e,t]=(0,a.useState)(""),[s,l]=(0,a.useState)([]),[c,x]=(0,a.useState)("ru");(0,a.useEffect)(()=>{x(window.localStorage.getItem("locale")||"ru")},[]);let f=o()(async e=>{if(e.trim())try{let t=await d.Z.get("/search?text=".concat(encodeURIComponent(e)));l(t.data)}catch(e){console.error("Error fetching search suggestions:",e)}else l([])},500);return(0,a.useEffect)(()=>(f(e),()=>{f.cancel()}),[e]),(0,r.jsxs)("div",{className:"flex items-center w-full max-w-[720px] bg-white z-50 relative",children:[(0,r.jsx)("input",{type:"text",placeholder:"ru"===c?"Поиск":"Іздеу",value:e,onChange:e=>t(e.target.value),className:"flex-grow px-4 text-gray-700 placeholder-gray-400 font-black outline-none w-full"}),(0,r.jsx)("button",{type:"submit",onClick:()=>f(e),className:"p-2 ml-2 text-gray-600 hover:text-gray-800 transition w-14 flex justify-center bg-accent","aria-label":"Поиск",children:(0,r.jsx)(n.default,{src:i,alt:"",className:"text-white",width:20,height:20})}),s.length>0&&(0,r.jsx)("ul",{className:"absolute top-full left-0 w-full bg-white shadow-lg mt-2 overflow-auto z-[100]",children:s.map(e=>(0,r.jsxs)(u.default,{href:"akimat"===e.type?"/area/".concat(e.id):"/news/".concat(e.id),className:"px-4 cursor-pointer py-2 text-gray-800 flex items-center justify-between hover:bg-gray-100  z-[1000]",children:[(0,r.jsx)("strong",{children:e.title.ru})," ",(0,r.jsx)("p",{className:"text-[14px] text-gray-400",children:"akimat"===e.type?"ru"===c?"Акимат":"Акімдік":"ru"===c?"Новость":"Жаңалық"})]},e.id+e.title.ru))})]})},f=s(337),p=e=>{let{}=e,[t,s]=(0,a.useState)([]),[l,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{i(!0),d.Z.get("/akimat").then(e=>{s(e.data)}).finally(()=>{i(!1)})},[]),(0,r.jsx)("div",{className:"flex justify-center w-full flex-col items-center",children:(0,r.jsxs)("div",{className:"grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:grid-cols-2 xl:grid-cols-2",children:[!l&&t.map(e=>(0,r.jsxs)(u.default,{href:"/area/".concat(e.id),className:"font-medium cursor-pointer flex items-center justify-start hover:underline gap-2",children:[(0,r.jsx)("span",{className:"w-[5px] h-[5px] rounded-full bg-black"}),(0,r.jsx)("span",{children:e.title})]},e.id)),l&&[{id:1,title:"Акимат области Абая"},{id:2,title:"Акимат Акмолинской области"},{id:3,title:"Акимат Актюбинской области"},{id:4,title:"Акимат Алматинской области"},{id:5,title:"Акимат Атырауской области"},{id:7,title:"Акимат города Алматы"},{id:8,title:"Акимат города Астаны"},{id:9,title:"Акимат города Шымкент"},{id:10,title:"Акимат Жамбылской области"},{id:11,title:"Акимат области Жетісу"},{id:13,title:"Акимат Карагандинской области"},{id:14,title:"Акимат Костанайской области"},{id:15,title:"Акимат Кызылординской области"}].map((e,t)=>(0,r.jsx)(f.Z.Input,{active:!0,size:"small",block:!0},t))]})})},m=s(1926),h=()=>{let[e,t]=(0,a.useState)(),[s,l]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{l(!0),d.Z.get("/news").then(e=>{t(e.data)}).finally(()=>{l(!1)})},[]),(0,r.jsx)("div",{className:"flex justify-center w-full flex-col items-center justify-center",children:(0,r.jsxs)("div",{className:"flex w-full flex-wrap gap-x-[20px] gap-y-[20px] justify-center",children:[!s&&(null==e?void 0:e.map((e,t)=>t<8&&(0,r.jsx)(m.Z,{id:e.id,title:e.title,image:e.image_url,view_count:e.view_count,date:e.createdAt,area:e.akimatName},e.id))),s&&(0,r.jsx)("div",{children:"loading"})]})})};function g(){let[e,t]=(0,a.useState)(!1),[s,i]=(0,a.useState)("ru");return(0,a.useEffect)(()=>{i(window.localStorage.getItem("locale")||"ru")},[]),(0,a.useEffect)(()=>{console.log()},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{className:"bg-secondary  ",children:(0,r.jsxs)("div",{className:"w-full max-h-[204px] h-64 relative",children:[(0,r.jsxs)("div",{className:"w-full relative overflow-hidden max-h-[204px] h-64",children:[(0,r.jsx)("img",{src:"https://www.gov.kz/static/media/ornament.8ce1d830.svg",alt:"",className:"absolute left-0 top-0"}),(0,r.jsx)("img",{src:"https://www.gov.kz/static/media/flag.50c6d379.svg",alt:"",className:"absolute right-0 top-0"})]}),(0,r.jsx)("div",{className:"w-full absolute top-1 flex justify-center sm:my-10 md:my-14 lg:my-20 xl:my-24 ",children:(0,r.jsx)(x,{})})]})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full flex flex-col gap-y-8 my-10",children:[(0,r.jsx)("h1",{className:"text-[42px] font-semibold",children:(0,r.jsx)("span",{children:"ru"===s?"Акиматы":"Акімдіктер"})}),(0,r.jsxs)("div",{className:"flex  flex-col-reverse  items-start md:flex-row gap-5 justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(p,{onClick:()=>{t(!0)}}),(0,r.jsx)("h1",{className:"text-[42px] font-semibold mb-10 mt-10",children:"ru"===s?"Новости страны":"Ел жаңалықтары"}),(0,r.jsx)(h,{})]}),(0,r.jsxs)("div",{className:"flex text-[12px] md:flex-col w-full md:w-auto justify-center gap-2 items-start",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5",children:[(0,r.jsx)("div",{className:"w-[200px] h-[250px] bg-cover bg-start",style:{backgroundImage:'url("/Kassym-Jomart_Tokayev.jpg")'}}),(0,r.jsx)(u.default,{href:"https://www.akorda.kz/ru/president/president",children:"ru"===s?(0,r.jsxs)(r.Fragment,{children:["Президент Республики Казахстан",(0,r.jsx)("br",{})," ",(0,r.jsx)("strong",{children:"Токаев Касым-Жомарт Кемелевич"})]}):(0,r.jsxs)(r.Fragment,{children:["Қазақстан Республикасының Президенті",(0,r.jsx)("br",{})," ",(0,r.jsx)("strong",{children:"Қасым-Жомарт Кемелұлы Тоқаев"})]})})]}),(0,r.jsxs)("div",{className:"flex  flex-col items-center w-[250px] text-center justify-center bg-blue-100 px-2 py-5",children:[(0,r.jsx)("div",{className:"w-[200px] h-[250px] bg-cover bg-center",style:{backgroundImage:'url("/bektenov.jpg")'}}),(0,r.jsx)(u.default,{href:"https://primeminister.kz/ru/government/composition/bektenov",className:"text-[12px]",children:"ru"===s?(0,r.jsxs)(r.Fragment,{children:["Премьер-министр Республики Казахстан ",(0,r.jsx)("br",{})," ",(0,r.jsx)("strong",{children:"Бектенов Олжас Абаевич"})," "]}):(0,r.jsxs)(r.Fragment,{children:["Қазақстан Республикасының Премьер-Министрі ",(0,r.jsx)("br",{})," ",(0,r.jsx)("strong",{children:"Олжас Абайұлы Бектенов"})]})})]})]})]})]}),(0,r.jsxs)("div",{className:"w-full flex my-10 gap-4",children:[(0,r.jsxs)(u.default,{href:"https://open.egov.kz/",target:"_blank",className:"flex-1  text-[14px] gap-2",children:[(0,r.jsx)("img",{src:"https://www.gov.kz/uploads/2019/6/19/a1297e9e09f22c412ddfe056d3d4ed9c_original.19895.svg",alt:"d",className:"h-[50px]"}),(0,r.jsx)("p",{className:"mt-3",children:"НҚА әзірлеу мен бюджетті жасауда қатысу, ашық деректерді алу, мемлекеттік органдарға өтініш жіберу"})]}),(0,r.jsxs)(u.default,{href:"https://egov.kz/cms/kk",target:"_blank",className:"flex-1 text-[14px] gap-2",children:[(0,r.jsx)("img",{src:"https://www.gov.kz/uploads/2020/1/9/602c5a9aaa19882413e630395f7ceb31_original.6761.png",alt:"d",className:"h-[50px]"}),(0,r.jsx)("p",{className:"mt-3",children:"eGov.kz электрондық үкімет порталы – мемлекеттік қызметтерді онлайн түрде алу"})]}),(0,r.jsxs)(u.default,{href:"https://eotinish.kz/kk",target:"_blank",className:"flex-1  text-[14px] gap-2",children:[(0,r.jsx)("img",{src:"https://www.gov.kz/uploads/2023/7/31/557ce713e82d4763d5bd4ae96b4e0cab_original.4211.png",alt:"d",className:"h-[50px]"}),(0,r.jsx)("p",{className:"mt-3",children:"e-Otinish – Мемлекеттік органдарға өтініш беру"})]}),(0,r.jsxs)(u.default,{href:"https://sb.egov.kz/smart-bridge/home",target:"_blank",className:"flex-1 text-[14px] gap-2",children:[(0,r.jsx)("img",{src:"https://www.gov.kz/uploads/2019/6/19/9db49dbece24b92b6d6dd2a7d9c0b5eb_original.12820.svg",alt:"d",className:"h-[50px]"}),(0,r.jsx)("p",{className:"mt-3",children:"Бизнеске мемлекеттік ақпараттық жүйелермен интеграциялануға көмектесетін Платформа"})]})]})]})})]})}},476:function(e,t,s){"use strict";let r=s(3464).Z.create({baseURL:"http://akimpress.kz/api",headers:{"Content-Type":"application/json",Accept:"application/json"}});r.interceptors.request.use(e=>{let t=window.localStorage.getItem("access_token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e.headers["Accept-Language"]=localStorage.getItem("locale")||"ru",e},e=>Promise.reject(e)),r.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(window.localStorage.delete("authToken"),window.location.href="/"),Promise.reject(e))),t.Z=r},2370:function(e,t){"use strict";t.Z={src:"/_next/static/media/lyra-icon-eye-open.564565b0.svg",height:19,width:19,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[464,726,881,320,70,337,971,117,744],function(){return e(e.s=7340)}),_N_E=e.O()}]);