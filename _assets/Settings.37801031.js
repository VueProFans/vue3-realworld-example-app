import{g as e,d as o,c as l,s as a,B as s,m as t,M as r,u as n,a as u,b as i,j as m,i as c,v as d,o as f}from"./index.c919f844.js";var p=o({name:"Settings",setup(){const o=t(),u=n(),i=l((()=>u.state.user)),m=a({});s((()=>{if(!i.value)return o.push({name:"login"});m.image=i.value.image,m.username=i.value.username,m.bio=i.value.bio,m.email=i.value.email}));const c=l((()=>m.image===i.value?.image&&m.username===i.value?.email&&m.bio===i.value?.bio&&!m.password));return{form:m,onSubmit:async()=>{const o=Object.entries(m).reduce(((e,[o,l])=>null===l?e:{...e,[o]:l}),{}),l=await async function(o){return e.put("/user",o).then((e=>e.user))}(o);u.commit(r.UPDATE_USER,l)},isButtonDisabled:c,onLogout:()=>{u.dispatch("logout")}}}});const g={class:"settings-page"},b={class:"container page"},v={class:"row"},h={class:"col-md-6 offset-md-3 col-xs-12"},w=i("h1",{class:"text-xs-center"}," Your Settings ",-1),x={class:"form-group"},y={class:"form-group"},U={class:"form-group"},S={class:"form-group"},V={class:"form-group"},j=i("hr",null,null,-1);p.render=function(e,o,l,a,s,t){return f(),u("div",g,[i("div",b,[i("div",v,[i("div",h,[w,i("form",{onSubmit:o[6]||(o[6]=m(((...o)=>e.onSubmit(...o)),["prevent"]))},[i("fieldset",null,[i("fieldset",x,[c(i("input",{"onUpdate:modelValue":o[1]||(o[1]=o=>e.form.image=o),type:"text",class:"form-control",placeholder:"URL of profile picture"},null,512),[[d,e.form.image]])]),i("fieldset",y,[c(i("input",{"onUpdate:modelValue":o[2]||(o[2]=o=>e.form.username=o),type:"text",class:"form-control form-control-lg",placeholder:"Your name"},null,512),[[d,e.form.username]])]),i("fieldset",U,[c(i("textarea",{"onUpdate:modelValue":o[3]||(o[3]=o=>e.form.bio=o),class:"form-control form-control-lg",rows:8,placeholder:"Short bio about you"},null,512),[[d,e.form.bio]])]),i("fieldset",S,[c(i("input",{"onUpdate:modelValue":o[4]||(o[4]=o=>e.form.email=o),type:"email",class:"form-control form-control-lg",placeholder:"Email"},null,512),[[d,e.form.email]])]),i("fieldset",V,[c(i("input",{"onUpdate:modelValue":o[5]||(o[5]=o=>e.form.password=o),type:"password",class:"form-control form-control-lg",placeholder:"New Password"},null,512),[[d,e.form.password]])]),i("button",{class:"btn btn-lg btn-primary pull-xs-right",disabled:e.isButtonDisabled,type:"submit"}," Update Settings ",8,["disabled"])])],32),j,i("button",{class:"btn btn-outline-danger",onClick:o[7]||(o[7]=(...o)=>e.onLogout(...o))}," Or click here to logout. ")])])])])};export default p;
