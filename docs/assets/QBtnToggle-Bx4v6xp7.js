import{c as T,k as le,h as a,G as xe,J as ke,r as V,o as ye,w as P,b as i,aa as Se,ab as ie,A as Ie,a7 as F,C as qe,g as N,a8 as G,E as _e,ac as ne,W as Be,a2 as Ce,a4 as we,H as K,ad as te,U as J,V as Q,I as E,u as ue,a as re,ae as w,af as p,ag as Ve,a0 as Te}from"./index-BZ7-6rDF.js";const Le=T({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:o,emit:n}){let u=!1,v,c,g=null,x=null,S,m;function t(){v&&v(),v=null,u=!1,g!==null&&(clearTimeout(g),g=null),x!==null&&(clearTimeout(x),x=null),c!==void 0&&c.removeEventListener("transitionend",S),S=null}function k(l,y,f){y!==void 0&&(l.style.height=`${y}px`),l.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,u=!0,v=f}function r(l,y){l.style.overflowY=null,l.style.height=null,l.style.transition=null,t(),y!==m&&n(y)}function h(l,y){let f=0;c=l,u===!0?(t(),f=l.offsetHeight===l.scrollHeight?0:void 0):(m="hide",l.style.overflowY="hidden"),k(l,f,y),g=setTimeout(()=>{g=null,l.style.height=`${l.scrollHeight}px`,S=_=>{x=null,(Object(_)!==_||_.target===l)&&r(l,"show")},l.addEventListener("transitionend",S),x=setTimeout(S,e.duration*1.1)},100)}function I(l,y){let f;c=l,u===!0?t():(m="show",l.style.overflowY="hidden",f=l.scrollHeight),k(l,f,y),g=setTimeout(()=>{g=null,l.style.height=0,S=_=>{x=null,(Object(_)!==_||_.target===l)&&r(l,"hide")},l.addEventListener("transitionend",S),x=setTimeout(S,e.duration*1.1)},100)}return le(()=>{u===!0&&t()}),()=>a(xe,{css:!1,appear:e.appear,onEnter:h,onLeave:I},o.default)}});let Z,M=0;const q=new Array(256);for(let e=0;e<256;e++)q[e]=(e+256).toString(16).substring(1);const $e=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const n=new Uint8Array(o);return e.getRandomValues(n),n}}return o=>{const n=[];for(let u=o;u>0;u--)n.push(Math.floor(Math.random()*256));return n}})(),ae=4096;function D(){(Z===void 0||M+16>ae)&&(M=0,Z=$e(ae));const e=Array.prototype.slice.call(Z,M,M+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,q[e[0]]+q[e[1]]+q[e[2]]+q[e[3]]+"-"+q[e[4]]+q[e[5]]+"-"+q[e[6]]+q[e[7]]+"-"+q[e[8]]+q[e[9]]+"-"+q[e[10]]+q[e[11]]+q[e[12]]+q[e[13]]+q[e[14]]+q[e[15]]}function Ae(e){return e??null}function oe(e,o){return e??(o===!0?`f_${D()}`:null)}function Oe({getValue:e,required:o=!0}={}){if(ke.value===!0){const n=e!==void 0?V(Ae(e())):V(null);return o===!0&&n.value===null&&ye(()=>{n.value=`f_${D()}`}),e!==void 0&&P(e,u=>{n.value=oe(u,o)}),n}return e!==void 0?i(()=>oe(e(),o)):V(`f_${D()}`)}const A=Se({}),Qe=Object.keys(ie),Fe=T({name:"QExpansionItem",props:{...ie,...Ie,...F,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...qe,"click","afterShow","afterHide"],setup(e,{slots:o,emit:n}){const{proxy:{$q:u}}=N(),v=G(e,u),c=V(e.modelValue!==null?e.modelValue:e.defaultOpened),g=V(null),x=Oe(),{show:S,hide:m,toggle:t}=_e({showing:c});let k,r;const h=i(()=>`q-expansion-item q-item-type q-expansion-item--${c.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),I=i(()=>e.contentInsetLevel===void 0?null:{["padding"+(u.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),l=i(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),y=i(()=>{const s={};return Qe.forEach(C=>{s[C]=e[C]}),s}),f=i(()=>l.value===!0||e.expandIconToggle!==!0),_=i(()=>e.expandedIcon!==void 0&&c.value===!0?e.expandedIcon:e.expandIcon||u.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),b=i(()=>e.disable!==!0&&(l.value===!0||e.expandIconToggle===!0)),L=i(()=>({expanded:c.value===!0,detailsId:x.value,toggle:t,show:S,hide:m})),$=i(()=>{const s=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:u.lang.label[c.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":c.value===!0?"true":"false","aria-controls":x.value,"aria-label":s}});P(()=>e.group,s=>{r!==void 0&&r(),s!==void 0&&R()});function U(s){l.value!==!0&&t(s),n("click",s)}function O(s){s.keyCode===13&&j(s,!0)}function j(s,C){C!==!0&&g.value!==null&&g.value.focus(),t(s),E(s)}function W(){n("afterShow")}function Y(){n("afterHide")}function R(){k===void 0&&(k=D()),c.value===!0&&(A[e.group]=k);const s=P(c,H=>{H===!0?A[e.group]=k:A[e.group]===k&&delete A[e.group]}),C=P(()=>A[e.group],(H,he)=>{he===k&&H!==void 0&&H!==k&&m()});r=()=>{s(),C(),A[e.group]===k&&delete A[e.group],r=void 0}}function d(){const s={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},C=[a(Q,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&c.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:_.value})];return b.value===!0&&(Object.assign(s,{tabindex:0,...$.value,onClick:j,onKeyup:O}),C.unshift(a("div",{ref:g,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),a(J,s,()=>C)}function B(){let s;return o.header!==void 0?s=[].concat(o.header(L.value)):(s=[a(J,()=>[a(te,{lines:e.labelLines},()=>e.label||""),e.caption?a(te,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&s[e.switchToggleSide===!0?"push":"unshift"](a(J,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>a(Q,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&s[e.switchToggleSide===!0?"unshift":"push"](d()),s}function z(){const s={ref:"item",style:e.headerStyle,class:e.headerClass,dark:v.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return f.value===!0&&(s.clickable=!0,s.onClick=U,Object.assign(s,l.value===!0?y.value:$.value)),a(Be,s,B)}function be(){return Ce(a("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:I.value,id:x.value},K(o.default)),[[we,c.value]])}function me(){const s=[z(),a(Le,{duration:e.duration,onShow:W,onHide:Y},be)];return e.expandSeparator===!0&&s.push(a(ne,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:v.value}),a(ne,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:v.value})),s}return e.group!==void 0&&R(),le(()=>{r!==void 0&&r()}),()=>a("div",{class:h.value},[a("div",{class:"q-expansion-item__container relative-position"},me())])}});function se(e,o){const n=V(null),u=i(()=>e.disable===!0?null:a("span",{ref:n,class:"no-outline",tabindex:-1}));function v(c){const g=o.value;c!==void 0&&c.type.indexOf("key")===0?g!==null&&document.activeElement!==g&&g.contains(document.activeElement)===!0&&g.focus():n.value!==null&&(c===void 0||g!==null&&g.contains(c.target)===!0)&&n.value.focus()}return{refocusTargetEl:u,refocusTarget:v}}const X={name:String};function ee(e={}){return(o,n,u)=>{o[n](a("input",{class:"hidden"+(u||""),...e.value}))}}const ce={xs:30,sm:35,md:40,lg:50,xl:60},Ee=a("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[a("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),a("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),je=T({name:"QRadio",props:{...F,...ue,...X,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:o,emit:n}){const{proxy:u}=N(),v=G(e,u.$q),c=re(e,ce),g=V(null),{refocusTargetEl:x,refocusTarget:S}=se(e,g),m=i(()=>w(e.modelValue)===w(e.val)),t=i(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(v.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),k=i(()=>{const b=e.color!==void 0&&(e.keepColor===!0||m.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${m.value===!0?"truthy":"falsy"}${b}`}),r=i(()=>(m.value===!0?e.checkedIcon:e.uncheckedIcon)||null),h=i(()=>e.disable===!0?-1:e.tabindex||0),I=i(()=>{const b={type:"radio"};return e.name!==void 0&&Object.assign(b,{".checked":m.value===!0,"^checked":m.value===!0?"checked":void 0,name:e.name,value:e.val}),b}),l=ee(I);function y(b){b!==void 0&&(E(b),S(b)),e.disable!==!0&&m.value!==!0&&n("update:modelValue",e.val,b)}function f(b){(b.keyCode===13||b.keyCode===32)&&E(b)}function _(b){(b.keyCode===13||b.keyCode===32)&&y(b)}return Object.assign(u,{set:y}),()=>{const b=r.value!==null?[a("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[a(Q,{class:"q-radio__icon",name:r.value})])]:[Ee];e.disable!==!0&&l(b,"unshift"," q-radio__native q-ma-none q-pa-none");const L=[a("div",{class:k.value,style:c.value,"aria-hidden":"true"},b)];x.value!==null&&L.push(x.value);const $=e.label!==void 0?p(o.default,[e.label]):K(o.default);return $!==void 0&&L.push(a("div",{class:"q-radio__label q-anchor--skip"},$)),a("div",{ref:g,class:t.value,tabindex:h.value,role:"radio","aria-label":e.label,"aria-checked":m.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:f,onKeyup:_},L)}}}),de={...F,...ue,...X,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ve=["update:modelValue"];function ge(e,o){const{props:n,slots:u,emit:v,proxy:c}=N(),{$q:g}=c,x=G(n,g),S=V(null),{refocusTargetEl:m,refocusTarget:t}=se(n,S),k=re(n,ce),r=i(()=>n.val!==void 0&&Array.isArray(n.modelValue)),h=i(()=>{const d=w(n.val);return r.value===!0?n.modelValue.findIndex(B=>w(B)===d):-1}),I=i(()=>r.value===!0?h.value!==-1:w(n.modelValue)===w(n.trueValue)),l=i(()=>r.value===!0?h.value===-1:w(n.modelValue)===w(n.falseValue)),y=i(()=>I.value===!1&&l.value===!1),f=i(()=>n.disable===!0?-1:n.tabindex||0),_=i(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(n.disable===!0?" disabled":"")+(x.value===!0?` q-${e}--dark`:"")+(n.dense===!0?` q-${e}--dense`:"")+(n.leftLabel===!0?" reverse":"")),b=i(()=>{const d=I.value===!0?"truthy":l.value===!0?"falsy":"indet",B=n.color!==void 0&&(n.keepColor===!0||(e==="toggle"?I.value===!0:l.value!==!0))?` text-${n.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${d}${B}`}),L=i(()=>{const d={type:"checkbox"};return n.name!==void 0&&Object.assign(d,{".checked":I.value,"^checked":I.value===!0?"checked":void 0,name:n.name,value:r.value===!0?n.val:n.trueValue}),d}),$=ee(L),U=i(()=>{const d={tabindex:f.value,role:e==="toggle"?"switch":"checkbox","aria-label":n.label,"aria-checked":y.value===!0?"mixed":I.value===!0?"true":"false"};return n.disable===!0&&(d["aria-disabled"]="true"),d});function O(d){d!==void 0&&(E(d),t(d)),n.disable!==!0&&v("update:modelValue",j(),d)}function j(){if(r.value===!0){if(I.value===!0){const d=n.modelValue.slice();return d.splice(h.value,1),d}return n.modelValue.concat([n.val])}if(I.value===!0){if(n.toggleOrder!=="ft"||n.toggleIndeterminate===!1)return n.falseValue}else if(l.value===!0){if(n.toggleOrder==="ft"||n.toggleIndeterminate===!1)return n.trueValue}else return n.toggleOrder!=="ft"?n.trueValue:n.falseValue;return n.indeterminateValue}function W(d){(d.keyCode===13||d.keyCode===32)&&E(d)}function Y(d){(d.keyCode===13||d.keyCode===32)&&O(d)}const R=o(I,y);return Object.assign(c,{toggle:O}),()=>{const d=R();n.disable!==!0&&$(d,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const B=[a("div",{class:b.value,style:k.value,"aria-hidden":"true"},d)];m.value!==null&&B.push(m.value);const z=n.label!==void 0?p(u.default,[n.label]):K(u.default);return z!==void 0&&B.push(a("div",{class:`q-${e}__label q-anchor--skip`},z)),a("div",{ref:S,class:_.value,...U.value,onClick:O,onKeydown:W,onKeyup:Y},B)}}const Re=a("div",{key:"svg",class:"q-checkbox__bg absolute"},[a("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[a("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),a("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),ze=T({name:"QCheckbox",props:de,emits:ve,setup(e){function o(n,u){const v=i(()=>(n.value===!0?e.checkedIcon:u.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>v.value!==null?[a("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[a(Q,{class:"q-checkbox__icon",name:v.value})])]:[Re]}return ge("checkbox",o)}}),He=T({name:"QToggle",props:{...de,icon:String,iconColor:String},emits:ve,setup(e){function o(n,u){const v=i(()=>(n.value===!0?e.checkedIcon:u.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),c=i(()=>n.value===!0?e.iconColor:null);return()=>[a("div",{class:"q-toggle__track"}),a("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},v.value!==void 0?[a(Q,{name:v.value,color:c.value})]:void 0)]}return ge("toggle",o)}}),fe={radio:je,checkbox:ze,toggle:He},Me=Object.keys(fe),Ne=T({name:"QOptionGroup",props:{...F,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(o=>"value"in o&&"label"in o)},name:String,type:{type:String,default:"radio",validator:e=>Me.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:o,slots:n}){const{proxy:{$q:u}}=N(),v=Array.isArray(e.modelValue);e.type==="radio"?v===!0&&console.error("q-option-group: model should not be array"):v===!1&&console.error("q-option-group: model should be array in your case");const c=G(e,u),g=i(()=>fe[e.type]),x=i(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),S=i(()=>{const t={role:"group"};return e.type==="radio"&&(t.role="radiogroup",e.disable===!0&&(t["aria-disabled"]="true")),t});function m(t){o("update:modelValue",t)}return()=>a("div",{class:x.value,...S.value},e.options.map((t,k)=>{const r=n["label-"+k]!==void 0?()=>n["label-"+k](t):n.label!==void 0?()=>n.label(t):void 0;return a("div",[a(g.value,{modelValue:e.modelValue,val:t.value,name:t.name===void 0?e.name:t.name,disable:e.disable||t.disable,label:r===void 0?t.label:null,leftLabel:t.leftLabel===void 0?e.leftLabel:t.leftLabel,color:t.color===void 0?e.color:t.color,checkedIcon:t.checkedIcon,uncheckedIcon:t.uncheckedIcon,dark:t.dark||c.value,size:t.size===void 0?e.size:t.size,dense:e.dense,keepColor:t.keepColor===void 0?e.keepColor:t.keepColor,"onUpdate:modelValue":m},r)])}))}}),Pe=T({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const n=i(()=>{const u=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(v=>e[v]===!0).map(v=>`q-btn-group--${v}`).join(" ");return`q-btn-group row no-wrap${u.length!==0?" "+u:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>a("div",{class:n.value},K(o.default))}}),Ge=T({name:"QBtnToggle",props:{...X,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(o=>("label"in o||"icon"in o||"slot"in o)&&"value"in o)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:o,emit:n}){const u=i(()=>e.options.find(r=>r.value===e.modelValue)!==void 0),v=i(()=>({type:"hidden",name:e.name,value:e.modelValue})),c=ee(v),g=i(()=>Ve(e)),x=i(()=>({rounded:e.rounded,dense:e.dense,...g.value})),S=i(()=>e.options.map((r,h)=>{const{attrs:I,value:l,slot:y,...f}=r;return{slot:y,props:{key:h,"aria-pressed":l===e.modelValue?"true":"false",...I,...f,...x.value,disable:e.disable===!0||f.disable===!0,color:l===e.modelValue?t(f,"toggleColor"):t(f,"color"),textColor:l===e.modelValue?t(f,"toggleTextColor"):t(f,"textColor"),noCaps:t(f,"noCaps")===!0,noWrap:t(f,"noWrap")===!0,size:t(f,"size"),padding:t(f,"padding"),ripple:t(f,"ripple"),stack:t(f,"stack")===!0,stretch:t(f,"stretch")===!0,onClick(_){m(l,r,_)}}}}));function m(r,h,I){e.readonly!==!0&&(e.modelValue===r?e.clearable===!0&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",r,h),n("click",I))}function t(r,h){return r[h]===void 0?e[h]:r[h]}function k(){const r=S.value.map(h=>a(Te,h.props,h.slot!==void 0?o[h.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&u.value===!0&&c(r,"push"),p(o.default,r)}return()=>a(Pe,{class:"q-btn-toggle",...g.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},k)}});export{Fe as Q,Ne as a,Ge as b};
