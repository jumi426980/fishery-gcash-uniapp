import{d as a,k as s,r as t,y as e,p as l,z as o,j as c,o as n,e as i,w as r,f as d,g as u,q as _,t as f,b as p,v,m,_ as g}from"./index-1a1fccd8.js";import{w as I}from"./Remote.9d35866b.js";const L=g(a({...{data:()=>({options:{}}),onLoad(a){this.options=a}},__name:"waiting",setup(a){const g=s(),L=t("");t({visible:!1,title:"",content:"",jumpTo:""}),e((()=>{let a=m();if(a){let s=a.data.options;L.value=s.order}})),l((()=>{clearInterval(T)}));const T=setInterval((async()=>{try{const a=await I(L.value);if(console.log(a),200==a.code){let s=a.data,t=JSON.parse(s.alertmsg),e=g.locale.value,l=t[e];l||(e=e.split("-")[0],l=t[e]),l||(e=g.fallbackLocale.value,l=t[e]),o({title:g.t("MODEL_PROMPT_TITLE"),content:l,showCancel:!1,success:function(a){clearInterval(T),w(s.jumpurl)}})}}catch(a){console.log(a)}}),3e3),w=a=>{console.log(a),c({url:a+"?order="+L.value})};return(a,s)=>{const t=d,e=v;return n(),i(t,{class:"home-container"},{default:r((()=>[u(t,{class:"custom-nav"},{default:r((()=>[u(t),u(t,null,{default:r((()=>[u(e,{class:"title"},{default:r((()=>[_(f(a.$t("PAGE_TITLE")),1)])),_:1})])),_:1}),u(t)])),_:1}),u(t,{class:"loading-container"},{default:r((()=>[u(t,{class:"loading-wrapper"},{default:r((()=>[p("div",{class:"loading-container"},[p("div",{class:"loading-circle"})]),u(t,{class:"loading-text"},{default:r((()=>[_(f(a.$t("LABEL_WAITING"))+".",1)])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-cd6eca7c"]]);export{L as default};