(this.webpackJsonpconvolver=this.webpackJsonpconvolver||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),i=a.n(l),c=(a(10),a(1)),o=(a(11),a(12),function(e,t,a){return 4*(e+t*a)}),u=Math.floor,s=function(e,t,a,n,r){for(var l=0,i=0,c=0,s=u(t.dim/2),m=-s;m<=s;m++)for(var d=-s;d<=s;d++){var f=u(o(m+s,d+s,t.dim)/4),v=t.values[f]/a,g=o(n+m,r+d,500);l+=e.data[g]*v,c+=e.data[g+1]*v,i+=e.data[g+2]*v}return[l,c,i]},m=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useRef)(),i=Object(n.useRef)(),u=Object(n.useState)(),m=Object(c.a)(u,2),d=m[0],f=m[1];Object(n.useEffect)((function(){if(d&&e.filter){var n=t.current.getContext("2d"),r=a.current.getContext("2d");n.drawImage(d,0,0,500,500);var l=n.getImageData(0,0,500,500);n.putImageData(l,0,0);for(var i=new ImageData(500,500),u=1;u<499;u++)for(var m=1;m<499;m++){var f=s(l,e.filter,e.scale,u,m),v=Object(c.a)(f,3),g=v[0],b=v[1],p=v[2],E=o(u,m,500);i.data[E]=g,i.data[E+1]=b,i.data[E+2]=p,i.data[E+3]=255}r.putImageData(i,0,0)}}),[e.filter,e.scale,d]);return r.a.createElement("div",{className:"image-display"},r.a.createElement("h2",{id:"original"},"Original"),r.a.createElement("h2",{id:"convolved"},"Convolved"),r.a.createElement("canvas",{ref:t,height:"500",width:"500",id:"display"}),r.a.createElement("canvas",{ref:a,height:"500",width:"500",id:"convolved-display"}),r.a.createElement("input",{id:"image-input",ref:l,type:"file",name:"img",onChange:function(e){if(e.target.files&&1===e.target.files.length){var t=e.target.files[0],a=new FileReader;a.onload=function(){var e=new Image;e.src=a.result,f(e)},a.readAsDataURL(t)}},accept:"image/png, image/jpeg"}),r.a.createElement("button",{id:"image-button",className:"image-button",onClick:function(){l.current.click()}},"Choose Image"),r.a.createElement("a",{id:"download-button",ref:i,onClick:function(e){var t=a.current.toDataURL("image/png");i.current.href=t},className:"image-button",download:"convolved.png",href:"f"},"Download Convolved Image"))},d=a(4),f=(a(13),function(e){var t=e.dim,a=Object(n.useState)({values:Array(t*t).fill(1),dim:t}),l=Object(c.a)(a,2),i=l[0],o=l[1],u=Object(n.useState)(1),s=Object(c.a)(u,2),m=s[0],f=s[1],v=Object(n.useRef)();Object(n.useEffect)((function(){e.onInput(i,m)}),[i.dim]),Object(n.useEffect)((function(){o(e.filter),f(e.scale)}),[e.filter,e.scale]),Object(n.useEffect)((function(){var t=e.dim;o({values:Array(t*t).fill(1),dim:t})}),[e.dim]);var g=function(t,a){var n=Object(d.a)({},i);n.values[a]=Number(t.target.value),o(n),e.onInput(n,m)};return r.a.createElement("div",{className:"convolution"},r.a.createElement("h2",{className:"dimension",id:"filter-title"},"Filter"),r.a.createElement("div",{className:"convolution-container",style:{gridTemplateColumns:"repeat(".concat(i.dim,", 1fr)"),width:50*i.dim,height:50*i.dim}},i.values.map((function(e,t){return r.a.createElement("input",{className:"filter-number",value:e,key:t,onChange:function(e){return g(e,t)},type:"number"})}))),r.a.createElement("div",{className:"setting filter-scale"},r.a.createElement("label",{htmlFor:"scale"},"Filter Scale"),r.a.createElement("input",{className:"nonfilter-number",name:"scale",value:m,onChange:function(t){f(Number(t.target.value)),e.onInput(i,Number(t.target.value))},type:"number"})),r.a.createElement("div",{className:"setting size"},r.a.createElement("label",{htmlFor:"dimension"},"Filter Size "),r.a.createElement("input",{className:"nonfilter-number",min:"3",max:"7",onChange:g,value:t,type:"number",id:"dimension"})),r.a.createElement("div",{className:"setting dimension"},r.a.createElement("label",{htmlFor:"presets"},"Filter Presets"),r.a.createElement("select",{ref:v,onClick:function(){var e;switch(v.current.value){case"3x3 horz edge":o(e={values:[-5,-5,-5,5,5,5,0,0,0],dim:3}),f(1);break;case"3x3 vert edge":o(e={values:[-5,5,0,-5,5,0,-5,5,0],dim:3}),f(1);break;case"3x3 gen edge":o(e={values:[-2,-2,-2,-2,16,-2,-2,-2,-2],dim:3}),f(1);break;case"5x5 blur":e={values:Array(25).fill(1),dim:5},o(e),f(25);break;case"5x5 gauss blur":o(e={values:[1,4,6,4,1,4,16,24,16,4,6,24,36,24,6,4,16,24,16,4,1,4,6,4,1],dim:5}),f(256)}},id:"presets"},r.a.createElement("option",{value:"3x3 horz edge"},"3x3 Horizontal Edge Detection"),r.a.createElement("option",{value:"3x3 vert edge"},"3x3 Vertical Edge Detection"),r.a.createElement("option",{value:"3x3 gen edge"},"3x3 General Edge Detection"),r.a.createElement("option",{value:"5x5 blur"},"5x5 blur"),r.a.createElement("option",{value:"5x5 gauss blur"},"5x5 Gaussian blur"))))});var v=function(){var e=Object(n.useState)(3),t=Object(c.a)(e,2),a=t[0],l=(t[1],Object(n.useState)()),i=Object(c.a)(l,2),o=i[0],u=i[1],s=Object(n.useState)(),d=Object(c.a)(s,2),v=d[0],g=d[1],b=Object(n.useCallback)((function(e,t){u(e),g(t)}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"dimension"},r.a.createElement("h1",{className:"title"},"Image Convolution Demonstration")),r.a.createElement(f,{dim:a,filter:o,scale:v,onInput:b}),r.a.createElement(m,{filter:o,scale:v}))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.6f4d52f3.chunk.js.map