import b from"./TabsHeader.cccc400a.js";import g from"./ComponentPlaygroundProps.55510aa2.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.b2b2e898.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.14adc70c.js";import{a as D}from"./index.98575bbb.js";import{d as V,r as k,b as n,c as C,g as P,M as o,X as m,as as T,f as s,l as B}from"./entry.f5ae0e21.js";import"./ProseH4.62be9921.js";import"./ProseCodeInline.e609cb00.js";import"./Badge.5e15a5dd.js";import"./ContentSlot.e4bd5170.js";import"./ProseP.20b8eb91.js";const I={class:"component-playground-data"},j=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=D(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=l=>e.value=l;return(l,c)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":c[0]||(c[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const w=B(j,[["__scopeId","data-v-ef4d9ec9"]]);export{w as default};