import{r as s,J as a,B as e,C as r,d as o,s as l,m as t,K as n,a as i,f as c,g as u,h as d,z as m,F as f,q as p,y as g,v,x as w,o as b,j as x,i as y}from"./index.94dc11fd.js";var h=o({name:"LoginPage",setup(){const o=l(null),c=t({email:"",password:""}),u=l({});return{formRef:o,form:c,login:async()=>{if(!o.value?.checkValidity())return;const l=await async function(o){const l=await s.checkablePost("/users/login",{user:o}),t=a(l);return t.isOk()?e(t.value.user):r(t.value)}(c);l.isOk()?(n(l.value),await i("global-feed")):u.value=await l.value.getErrors()},errors:u}}});const k={class:"auth-page"},q={class:"container page"},P={class:"row"},S={class:"col-md-6 offset-md-3 col-xs-12"},V=d("h1",{class:"text-xs-center"}," Sign in ",-1),j={class:"text-xs-center"},E=y(" Need an account? "),L={class:"error-messages"},O={class:"form-group","aria-required":"true"},R={class:" form-group"};h.render=function(s,a,e,r,o,l){const t=c("AppLink");return b(),u("div",k,[d("div",q,[d("div",P,[d("div",S,[V,d("p",j,[d(t,{name:"register"},{default:m((()=>[E])),_:1})]),d("ul",L,[(b(!0),u(f,null,p(s.errors,((s,a)=>(b(),u("li",{key:a},x(a)+" "+x(s?s[0]:""),1)))),128))]),d("form",{ref:"formRef",onSubmit:a[3]||(a[3]=g(((...a)=>s.login(...a)),["prevent"]))},[d("fieldset",O,[v(d("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>s.form.email=a),class:"form-control form-control-lg",type:"email",required:"",placeholder:"Email"},null,512),[[w,s.form.email]])]),d("fieldset",R,[v(d("input",{"onUpdate:modelValue":a[2]||(a[2]=a=>s.form.password=a),class:"form-control form-control-lg",type:"password",required:"",placeholder:"Password"},null,512),[[w,s.form.password]])]),d("button",{class:"btn btn-lg btn-primary pull-xs-right",disabled:!s.form.email||!s.form.password,type:"submit"}," Sign in ",8,["disabled"])],544)])])])])};export default h;
