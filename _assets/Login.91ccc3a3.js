import{d as s,h as e,s as r,D as a,r as o,a as l,b as t,w as n,F as i,z as d,j as m,i as c,v as f,o as p,t as u,f as g}from"./index.c919f844.js";var b=s({name:"Login",setup(){const s=e(null),o=r({email:"",password:""});return{formRef:s,form:o,onLogin:()=>{s.value?.checkValidity()&&a.dispatch("login",o)},errors:[]}}});const h={class:"auth-page"},v={class:"container page"},w={class:"row"},x={class:"col-md-6 offset-md-3 col-xs-12"},y=t("h1",{class:"text-xs-center"}," Sign in ",-1),L={class:"text-xs-center"},k=g(" Need an account? "),q={class:"error-messages"},S={class:"form-group","aria-required":"true"},V={class:" form-group"};b.render=function(s,e,r,a,g,b){const j=o("AppLink");return p(),l("div",h,[t("div",v,[t("div",w,[t("div",x,[y,t("p",L,[t(j,{name:"register"},{default:n((()=>[k])),_:1})]),t("ul",q,[(p(!0),l(i,null,d(s.errors,(([s,e])=>(p(),l("li",{key:s},u(s)+" "+u(e[0]),1)))),128))]),t("form",{ref:"formRef",onSubmit:e[3]||(e[3]=m(((...e)=>s.onLogin(...e)),["prevent"]))},[t("fieldset",S,[c(t("input",{"onUpdate:modelValue":e[1]||(e[1]=e=>s.form.email=e),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Email"},null,512),[[f,s.form.email]])]),t("fieldset",V,[c(t("input",{"onUpdate:modelValue":e[2]||(e[2]=e=>s.form.password=e),class:"form-control form-control-lg",type:"password",required:"",placeholder:"Password"},null,512),[[f,s.form.password]])]),t("button",{class:"btn btn-lg btn-primary pull-xs-right",disabled:!s.form.email||!s.form.password,type:"submit"}," Sign in ",8,["disabled"])],544)])])])])};export default b;