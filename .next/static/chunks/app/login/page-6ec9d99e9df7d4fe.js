(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{3277:function(e,s,t){Promise.resolve().then(t.bind(t,8991))},9376:function(e,s,t){"use strict";var r=t(5475);t.o(r,"useParams")&&t.d(s,{useParams:function(){return r.useParams}}),t.o(r,"usePathname")&&t.d(s,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(s,{useRouter:function(){return r.useRouter}})},8991:function(e,s,t){"use strict";t.r(s);var r=t(7437),n=t(2265),a=t(3464),u=t(9376);s.default=()=>{let[e,s]=(0,n.useState)(""),[t,o]=(0,n.useState)(""),[l,i]=(0,n.useState)(""),c=(0,u.useRouter)(),d=async s=>{s.preventDefault();try{let{access_token:s,refresh_token:r}=(await a.Z.post("".concat("https://akimpress.kz/api","/auth/login"),{phoneNumber:e,password:t})).data;localStorage.setItem("access_token",s),localStorage.setItem("refresh_token",r),c.push("/")}catch(e){var r,n;i((null===(n=e.response)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:r.message)||"Something went wrong")}};return(0,r.jsx)("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:(0,r.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg w-96",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold text-center mb-6",children:"Вход"}),l&&(0,r.jsx)("div",{className:"text-red-600 text-sm mb-4",children:l}),(0,r.jsxs)("form",{onSubmit:d,children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{htmlFor:"phoneNumber",className:"block text-sm font-medium text-gray-700",children:"Номер телефона"}),(0,r.jsx)("input",{type:"text",id:"phoneNumber",name:"phoneNumber",value:e,onChange:e=>s(e.target.value),className:"w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Пароль"}),(0,r.jsx)("input",{type:"password",id:"password",name:"password",value:t,onChange:e=>o(e.target.value),className:"w-full mt-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",children:"Login"})]})]})})}}},function(e){e.O(0,[464,971,117,744],function(){return e(e.s=3277)}),_N_E=e.O()}]);