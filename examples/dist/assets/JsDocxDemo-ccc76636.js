var a=Object.defineProperty;var p=(s,e,t)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{d as n}from"./docx-0c8fb292.js";import{r as l,o as u,a as h,c as d}from"./index-893deb04.js";import"./_commonjs-dynamic-modules-302442b1.js";class m{constructor(e,t={},o={}){i(this,"container",null);i(this,"options",{});i(this,"requestOptions",{});this.container=e,this.options=t,this.requestOptions=o}setOptions(e){this.options=e}setRequestOptions(e){this.requestOptions=e}preview(e){return new Promise((t,o)=>{n.getData(e,this.requestOptions).then(r=>{n.render(r,this.container,this.options).then(()=>{t()}).catch(c=>{n.render("",this.container,this.options),o(c)})}).catch(r=>{n.render("",this.container,this.options),o(r)})})}}function f(s,e,t){return new m(s,e,t)}const x={init:f},O={__name:"JsDocxDemo",setup(s){const e=l(null);return u(()=>{let t=x.init(e.value);t.preview("/vue-office/examples/dist/static/test-files/test.docx").then(o=>{console.log("docx preview done"),setTimeout(()=>{t.preview("/vue-office/examples/dist/static/test-files/test2.docx")},3e3)}).catch(o=>{console.log("err",o)})}),(t,o)=>(h(),d("div",{ref_key:"dom",ref:e},null,512))}};export{O as default};
