import{g as t,d as a,c as e,s,h as l,B as o,y as r,m as i,a as n,b as c,j as d,i as u,v as m,C as p,F as f,z as g,o as b,f as y,t as v}from"./index.c919f844.js";import{g as h}from"./getArticle.29bcf0ae.js";var w=a({name:"EditArticle",setup(){const a=r(),n=i(),c=e((()=>a.params.slug)),d=s({title:"",description:"",body:"",tagList:[]}),u=l("");o((()=>{c.value&&async function(t){const a=await h(t);d.title=a.title,d.description=a.description,d.body=a.body,d.tagList=a.tagList}(c.value)}));return{form:d,onSubmit:async()=>{let a;return a=c.value?await async function(a,e){return t.put("/articles/"+a,{article:e}).then((t=>t.article))}(c.value,d):await async function(a){return t.post("/articles",{article:a}).then((t=>t.article))}(d),n.push({name:"article",params:{slug:a.slug}})},newTag:u,addTag:()=>{d.tagList.push(u.value.trim()),u.value=""},removeTag:t=>{d.tagList=d.tagList.filter((a=>a!==t))}}}});const T={class:"editor-page"},x={class:"container page"},L={class:"row"},k={class:"col-md-10 offset-md-1 col-xs-12"},A={class:"form-group"},C={class:"form-group"},U={class:"form-group"},V={class:"form-group"},j={class:"tag-list"};w.render=function(t,a,e,s,l,o){return b(),n("div",T,[c("div",x,[c("div",L,[c("div",k,[c("form",{onSubmit:a[7]||(a[7]=d(((...a)=>t.onSubmit(...a)),["prevent"]))},[c("fieldset",A,[u(c("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>t.form.title=a),type:"text",class:"form-control form-control-lg",placeholder:"Article Title"},null,512),[[m,t.form.title]])]),c("fieldset",C,[u(c("input",{"onUpdate:modelValue":a[2]||(a[2]=a=>t.form.description=a),type:"text",class:"form-control form-control-lg",placeholder:"What's this article about?"},null,512),[[m,t.form.description]])]),c("fieldset",U,[u(c("textarea",{"onUpdate:modelValue":a[3]||(a[3]=a=>t.form.body=a),rows:8,class:"form-control",placeholder:"Write your article (in markdown)"},null,512),[[m,t.form.body]])]),c("fieldset",V,[u(c("input",{"onUpdate:modelValue":a[4]||(a[4]=a=>t.newTag=a),type:"text",class:"form-control",placeholder:"Enter tags",onChange:a[5]||(a[5]=(...a)=>t.addTag(...a)),onKeypress:a[6]||(a[6]=p(d(((...a)=>t.addTag(...a)),["prevent"]),["enter"]))},null,544),[[m,t.newTag]]),c("div",j,[(b(!0),n(f,null,g(t.form.tagList,(a=>(b(),n("span",{key:a,class:"tag-default tag-pill"},[c("i",{class:"ion-close-round",onClick:e=>t.removeTag(a)},null,8,["onClick"]),y(" "+v(a),1)])))),128))])]),c("button",{class:"btn btn-lg pull-xs-right btn-primary",type:"submit",disabled:!(t.form.title&&t.form.description&&t.form.body)}," Publish Article ",8,["disabled"])],32)])])])])};export default w;
