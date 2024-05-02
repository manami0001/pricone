import{_ as O,c as p,a as r,b as i,w as d,F as b,r as c,o as u,d as v,n as q,e as y,f as B,t as g,g as F}from"./index-eJYHdbj9.js";const R={inject:["checkList","staticChars","listing"],data(){return{tab_labels:["1ボス","2ボス","3ボス","4ボス","5ボス"],data:{},date:null,wrapNum:10,isOnlyDo:!1}},mounted(){this.date=new Date},methods:{getData(){fetch("/pricone/data/"+this.fileName+".json").then(t=>t.json()).then(t=>{this.data=t}).catch(t=>this.data=Object.assign({}))},damageDisplay(t){let n=Math.floor(t/1e4),s=t%1e4;return n?n+"億"+s+"万":s+"万"},preMonth(){let t=new Date(this.date);t.setMonth(t.getMonth()-1),this.date=t},nextMonth(){let t=new Date(this.date);t.setMonth(t.getMonth()+1),this.date=t}},computed:{mteams(){var t,n;return(t=this.data)!=null&&t.teams?(n=this.data)==null?void 0:n.teams.map(s=>{var m;let f=(m=this.data)==null?void 0:m.bosses.find(D=>D.num==s.boss).hp,h=Math.floor(f/s.damage),l=f%s.damage,C=Math.ceil(110-l/s.damage*90),k=Math.ceil(l-(11-8.9001)*s.damage/9);return Object.assign({},s,{n1:h,h1:l,t2:C,h3:k})}).sort((s,f)=>f.damage-s.damage):[]},fileName(){return this.date.toLocaleDateString("sv",{year:"numeric",month:"numeric"})},uniqueChars(){var t;return(t=this.data)!=null&&t.teams?[...new Set(this.data.teams.map(n=>n.chars).flatMap(n=>n.map(s=>s.name)))]:[]}},watch:{date(){this.getData()}}},U={class:"clabat_header"},E=r("h2",null,"使用キャラ",-1),T={class:"slider-demo-block"},G=["src","alt","onClick"],H=r("h2",null,"編成",-1),I={class:"damage"},J=["src","alt"],K={class:"static"},P={key:0},Q={key:1};function W(t,n,s,f,h,l){const C=c("ArrowLeftBold"),k=c("el-icon"),m=c("el-button"),D=c("el-date-picker"),j=c("ArrowRightBold"),L=c("el-slider"),M=c("el-tooltip"),x=c("el-tab-pane"),z=c("el-link"),A=c("el-card"),S=c("el-tabs");return u(),p(b,null,[r("div",U,[i(m,{onClick:n[0]||(n[0]=a=>l.preMonth())},{default:d(()=>[i(k,null,{default:d(()=>[i(C)]),_:1})]),_:1}),i(D,{modelValue:h.date,"onUpdate:modelValue":n[1]||(n[1]=a=>h.date=a),type:"month",clearable:!1,placeholder:"月を選んでください"},null,8,["modelValue"]),i(m,{onClick:n[2]||(n[2]=a=>l.nextMonth())},{default:d(()=>[i(k,null,{default:d(()=>[i(j)]),_:1})]),_:1})]),i(S,null,{default:d(()=>[i(x,{label:"一覧"},{default:d(()=>[E,r("div",T,[i(L,{modelValue:h.wrapNum,"onUpdate:modelValue":n[3]||(n[3]=a=>h.wrapNum=a),min:0,max:20},null,8,["modelValue"])]),r("div",{style:q(`max-width:calc(54px * ${h.wrapNum})`)},[(u(!0),p(b,null,v(l.uniqueChars,a=>(u(),y(M,{effect:"dark",content:a,placement:"bottom-start","auto-close":600},{default:d(()=>{var w,e;return[r("img",{class:B(["char-img",{maru:(w=l.staticChars.find(o=>(o==null?void 0:o.name)==a))==null?void 0:w.having,batsu:!((e=l.staticChars.find(o=>(o==null?void 0:o.name)==a))!=null&&e.having)}]),src:`/pricone/image/${a}.jpg`,alt:a,onerror:"this.src='/pricone/image/unkown.svg';",loading:"lazy",onClick:o=>l.listing(l.checkList,a)},null,10,G)]}),_:2},1032,["content"]))),256))],4),H]),_:1}),(u(!0),p(b,null,v(h.tab_labels,(a,w)=>(u(),y(x,{label:a},{default:d(()=>[(u(!0),p(b,null,v(l.mteams.filter(e=>e.boss==w+1),e=>(u(),y(A,{shadow:"hover",class:"card"},{default:d(()=>[i(z,{href:e==null?void 0:e.url,target:"_blank"},{default:d(()=>[r("span",I,g(l.damageDisplay(e.damage)),1),F(" 目押し"+g((e==null?void 0:e.meoshi)??"不明"),1)]),_:2},1032,["href"]),r("div",null,[(u(!0),p(b,null,v(e.chars.slice().reverse(),o=>(u(),y(M,{effect:"dark",content:o.name,placement:"bottom-start","auto-close":600},{default:d(()=>{var V,N;return[r("img",{class:B(["char-img",{maru:(V=l.staticChars.find(_=>(_==null?void 0:_.name)==o.name))==null?void 0:V.having,batsu:!((N=l.staticChars.find(_=>(_==null?void 0:_.name)==o.name))!=null&&N.having)}]),src:`/pricone/image/${o.name}.jpg`,alt:o.name,onerror:"this.src='/pricone/image/unkown.svg';",loading:"lazy"},null,10,J)]}),_:2},1032,["content"]))),256))]),r("div",K,[r("p",null,g(`${(e==null?void 0:e.n1)+1}凸 = ${e==null?void 0:e.t2}s`),1),(e==null?void 0:e.h3)<0?(u(),p("p",P,g(`${e==null?void 0:e.n1}凸 + ${l.damageDisplay((e==null?void 0:e.damage)+(e==null?void 0:e.h3))} = 90s`),1)):(u(),p("p",Q,g(`${(e==null?void 0:e.n1)+1}凸 + ${l.damageDisplay(e==null?void 0:e.h3)} = 90s`),1)),r("p",null,g(`${e==null?void 0:e.n1}凸 + ${l.damageDisplay((e==null?void 0:e.h1)+1)} = 21s`),1)])]),_:2},1024))),256))]),_:2},1032,["label"]))),256))]),_:1})],64)}const Y=O(R,[["render",W]]);export{Y as default};
