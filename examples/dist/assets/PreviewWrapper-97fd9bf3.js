import{r as d,m as C,_ as I,w as N,p as l,a as p,c as x,u as t,g as i,f as n,q as v,s as S,e as y,l as m,t as V,v as W,x as A,b as R}from"./index-50d431e6.js";function T(e){const s=d("url"),a=d(e),r=d(e),u=d([]);function b(w){let c=new FileReader;return c.onload=o=>{let _=o.target.result;r.value=_},c.readAsArrayBuffer(w),!1}return{type:s,inputSrc:a,src:r,fileList:u,beforeUpload:b}}let g=d(!1),k;function $(e){k=C.loading(e,0),g.value=!0}function q(){g.value===!0&&(k(),g.value=!1)}const E={loading:g,showLoading:$,hideLoading:q};function F(){return location.href.includes("test")}const j=e=>(W("data-v-6e0b6946"),e=e(),A(),e),z={class:"preview-wrapper"},D={key:0,class:"operate-area"},G=j(()=>R("div",{class:"preview-wrapper-main"},null,-1)),H={__name:"PreviewWrapper",props:{accept:String,placeholder:String,defaultSrc:String},setup(e){const s=e,{type:a,inputSrc:r,src:u,fileList:b,beforeUpload:w}=T(s.defaultSrc);return N(u,()=>{E.showLoading()},{immediate:!0}),(c,o)=>{const _=l("a-radio-button"),B=l("a-radio-group"),L=l("a-input"),h=l("a-button"),U=l("upload-outlined"),P=l("a-upload");return p(),x("div",z,[t(F)()?m("",!0):(p(),x("div",D,[i(B,{value:t(a),"onUpdate:value":o[0]||(o[0]=f=>S(a)?a.value=f:null),"button-style":"solid"},{default:n(()=>[i(_,{value:"url"},{default:n(()=>[v("远程文件地址")]),_:1}),i(_,{value:"upload"},{default:n(()=>[v("上传本地文件")]),_:1})]),_:1},8,["value"]),t(a)==="url"?(p(),y(L,{key:0,value:t(r),"onUpdate:value":o[1]||(o[1]=f=>S(r)?r.value=f:null),placeholder:s.placeholder,style:{width:"600px","margin-left":"10px"}},null,8,["value","placeholder"])):m("",!0),t(a)==="url"?(p(),y(h,{key:1,type:"primary",style:{"margin-left":"10px"},onClick:o[2]||(o[2]=f=>u.value=t(r))},{default:n(()=>[v(" 预览 ")]),_:1})):m("",!0),t(a)!=="url"?(p(),y(P,{key:2,accept:s.accept,action:"",beforeUpload:t(w),"file-list":[]},{default:n(()=>[i(h,{style:{"margin-left":"10px"}},{default:n(()=>[i(U),v(" 选择文件 ")]),_:1})]),_:1},8,["accept","beforeUpload"])):m("",!0)])),V(c.$slots,"default",{src:t(u)},void 0,!0),G])}}},K=I(H,[["__scopeId","data-v-6e0b6946"]]);export{K as P,E as u};
