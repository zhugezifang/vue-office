var p=Object.defineProperty;var c=(i,e,t)=>e in i?p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(c(i,typeof e!="symbol"?e+"":e,t),t);import{d as n}from"./docx-30db419d.js";import{d as l}from"./url-de9b02cf.js";import{r as h,o as d,a as u,c as m}from"./index-53845faa.js";import"./_commonjs-dynamic-modules-302442b1.js";class w{constructor(e,t={},s={}){r(this,"container",null);r(this,"wrapper",null);r(this,"wrapperMain",null);r(this,"options",{});r(this,"requestOptions",{});r(this,"fileData",null);this.container=e,this.options=t,this.requestOptions=s,this.createWrapper()}createWrapper(){this.wrapper=document.createElement("div"),this.wrapper.className="vue-office-docx",this.wrapperMain=document.createElement("div"),this.wrapperMain.className="vue-office-docx-main",this.wrapper.appendChild(this.wrapperMain),this.container.appendChild(this.wrapper)}setOptions(e){this.options=e}setRequestOptions(e){this.requestOptions=e}preview(e){return new Promise((t,s)=>{n.getData(e,this.requestOptions).then(async o=>{this.fileData=await n.getBlob(o),n.render(this.fileData,this.wrapperMain,this.options).then(()=>{t()}).catch(a=>{n.render("",this.wrapperMain,this.options),s(a)})}).catch(o=>{n.render("",this.wrapperMain,this.options),s(o)})})}save(e){l(e||`js-preview-docx-${new Date().getTime()}.docx`,this.fileData)}destroy(){this.container.removeChild(this.wrapper),this.container=null,this.wrapper=null,this.wrapperMain=null,this.options=null,this.requestOptions=null}}function f(i,e,t){return new w(i,e,t)}const v={init:f};const q={__name:"JsDocxDemo",setup(i){const e=h(null);return d(()=>{let t=v.init(e.value);t.preview("/vue-office/examples/dist/static/test-files/test.docx").then(s=>{console.log("docx preview done"),setTimeout(()=>{t.preview("/vue-office/examples/dist/static/test-files/test2.docx")},3e3)}).catch(s=>{console.log("err",s)})}),(t,s)=>(u(),m("div",{ref_key:"dom",ref:e},null,512))}};export{q as default};
