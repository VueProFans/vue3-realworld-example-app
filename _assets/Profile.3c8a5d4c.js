let e=document.createElement("style");e.innerHTML=".space[data-v-7a2b6835]{margin-right:4px}",document.head.appendChild(e);import{m as a,q as s,e as l,d as o,G as i,H as n,I as t,f as r,J as c,i as u,s as d,r as f,c as g,a as p,t as m,j as v,b as w,F as b,x as P,k as y,o as h,p as k,l as A}from"./index.8643d939.js";import{u as x}from"./followProfile.bc547a8b.js";function N(e){const o=a({});async function i(){n(await async function(e){return l.get("/profiles/"+e).then(e=>e.profile)}(e))}async function n(e){Object.assign(o,e)}return s(()=>{i()}),{profile:o,updateProfile:n}}var C=o({name:"Profile",components:{ArticlePreview:i,ArticlesNavigation:n,Pagination:t},setup(){const e=u(),a=d(),s=r(()=>a.name),l=r(()=>a.params.username),o=r(()=>e.state.user),{profile:i,updateProfile:n}=N(l.value),{followProcessGoing:t,toggleFollow:f}=x({following:r(()=>i.following),username:l}),g=r(()=>null!==e.state.user),p=r(()=>g.value&&o.value.username===l.value),m=r(()=>g.value&&o.value.username!==l.value),{articlesDownloading:v,articlesCount:w,articles:b,page:P,changePage:y,updateArticle:h}=c({routeName:s,username:l});return{username:l,profile:i,articlesDownloading:v,articles:b,articlesCount:w,page:P,changePage:y,updateArticle:h,isMyProfile:p,isNotMyProfile:m,routeName:s,followProcessGoing:t,toggleFollow:async function(){const e=await f();n(e)}}}});const F=y("data-v-7a2b6835");k("data-v-7a2b6835");const M={class:"profile-page"},_={class:"user-info"},j={class:"container"},G={class:"row"},D={class:"col-xs-12 col-md-10 offset-md-1"},U={key:0},E=p("i",{class:"ion-gear-a space"},null,-1),H=w(" Edit profile settings "),I=p("i",{class:"ion-plus-round space"},null,-1),L={class:"container"},q={class:"row"},J={class:"col-xs-12 col-md-10 offset-md-1"},O={class:"articles-toggle"},T={key:0,class:"article-preview"};A();const z=F((function(e,a,s,l,o,i){const n=f("AppLink"),t=f("ArticlesNavigation"),r=f("ArticlePreview"),c=f("Pagination");return h(),g("div",M,[p("div",_,[p("div",j,[p("div",G,[p("div",D,[p("img",{src:e.profile.image,class:"user-img"},null,8,["src"]),p("h4",null,m(e.profile.username),1),e.profile.bio?(h(),g("p",U,m(e.profile.bio),1)):v("v-if",!0),e.isMyProfile?(h(),g(n,{key:1,class:"btn btn-sm btn-outline-secondary action-btn",name:"settings"},{default:F(()=>[E,H]),_:1})):v("v-if",!0),e.isNotMyProfile?(h(),g("button",{key:2,class:"btn btn-sm btn-outline-secondary action-btn",disabled:e.followProcessGoing,onClick:a[1]||(a[1]=(...a)=>e.toggleFollow(...a))},[I,w(" "+m(e.profile.following?"Unfollow":"Follow")+" "+m(e.profile.username),1)],8,["disabled"])):v("v-if",!0)])])])]),p("div",L,[p("div",q,[p("div",J,[p("div",O,[p(t,{"use-author":e.username,"use-favorited":e.username},null,8,["use-author","use-favorited"])]),e.articlesDownloading?(h(),g("div",T," Articles are downloading... ")):(h(),g(b,{key:1},[(h(!0),g(b,null,P(e.articles,(a,s)=>(h(),g(r,{key:a.slug,article:a,onUpdate:a=>e.updateArticle(s,a)},null,8,["article","onUpdate"]))),128)),p(c,{count:e.articlesCount,page:e.page,"onPage-change":e.changePage},null,8,["count","page","onPage-change"])],64))])])])])}));C.render=z,C.__scopeId="data-v-7a2b6835",C.__file="src/pages/Profile.vue";export default C;
