import{f as u,_,j as v,w as f,T as g,o as n,c as l,a as o,t as h,n as d,h as C,p as $,e as y,r as b,F as P,g as k,d as w,k as D}from"./index-c3683aeb.js";const j=u({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}});const m=e=>($("data-v-6434eb73"),e=e(),y(),e),S={key:0},T=m(()=>o("div",{class:"overlay"},null,-1)),I={class:"dialog-title"},L=m(()=>o("i",{class:"fa fa-times fa-lg fa-fw"},null,-1)),B=[L],O={class:"dialog-content"},H=["innerHTML"],N={class:"dialog-bottom"};function V(e,s,a,r,c,p){return n(),v(g,{name:"fade"},{default:f(()=>[e.visible?(n(),l("div",S,[T,o("div",{class:"dialog",style:d({"background-color":e.color})},[o("h1",I,h(e.title),1),o("div",{onClick:s[0]||(s[0]=i=>e.$emit("close")),class:"dialog-close"},B),o("div",O,[o("div",{innerHTML:e.htmlContent},null,8,H),o("div",N,[o("a",{onClick:s[1]||(s[1]=i=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):C("",!0)]),_:1})}const z=_(j,[["render",V],["__scopeId","data-v-6434eb73"]]),F=u({name:"ProjectsList",components:{ProjectDetailsOverlay:z},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}});const M={class:"projects-list"},U=["onClick"],W={class:"title-text"};function A(e,s,a,r,c,p){const i=b("ProjectDetailsOverlay");return n(),l("div",null,[o("div",M,[(n(!0),l(P,null,k(e.projects,t=>(n(),l("div",{key:t.id,onClick:E=>e.showDetails(t),class:D(["project-item",{wide:t.isWide,high:t.isHigh}])},[o("div",{class:"project-item-image",style:d({"background-image":"url("+t.iconUrl+")"})},null,4),o("div",{class:"title-bar",style:d({"background-color":t.accentColor+"DD"})},[o("div",W,h(t.name),1)],4)],10,U))),128))]),w(i,{onClose:s[0]||(s[0]=t=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const G=_(F,[["render",A],["__scopeId","data-v-b78f79fc"]]);class J{constructor(s,a,r,c,p="#000000",i=!1,t=!1){this.id=s,this.name=a,this.htmlDescription=c,this.iconUrl=r,this.isHigh=i,this.isWide=t,this.accentColor=p}}export{J as P,G as a};
