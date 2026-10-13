import{t as e}from"./defineProperty-BbfpZ9Tg.js";import{C as t,D as n,K as r,U as i,X as a,Y as o,ct as s,dt as c,et as l,f as u,g as d,gt as f,h as p,ht as m,it as h,m as g,mt as _,ot as v,p as y,q as b,rt as x,st as S,ut as C,w}from"./diffRendering-DZItrh9q.js";import{t as T}from"./legacyCssValue-BcwdPWbN.js";import{Qa as E}from"./main-CBJImtt1.js";function ee(e,t){return e==null||t==null||typeof e==`string`||typeof t==`string`?e===t:e.dark===t.dark&&e.light===t.light}function D(e){return{type:`text`,value:e}}function O({tagName:e,children:t=[],properties:n={}}){return{type:`element`,tagName:e,properties:n,children:t}}function k({name:e,width:t=16,height:n=16,properties:r}){return O({tagName:`svg`,properties:{width:t,height:n,viewBox:`0 0 16 16`,...r},children:[O({tagName:`use`,properties:{href:`#${e.replace(/^#/,``)}`}})]})}function te(e){let t=e.children[0];for(;t!=null;){if(t.type===`element`&&t.tagName===`code`)return t;t=`children`in t?t.children[0]:null}}function A(e){return O({tagName:`div`,properties:{"data-gutter":``},children:e})}function ne(e,t,n,r={}){return O({tagName:`div`,properties:{"data-line-type":e,"data-column-number":t,"data-line-index":n,...r},children:t==null?void 0:[O({tagName:`span`,properties:{"data-line-number-content":``},children:[D(`${t}`)]})]})}function j(e,t,n){return O({tagName:`div`,properties:{"data-gutter-buffer":t,"data-buffer-size":n,"data-line-type":t===`annotation`?void 0:e,style:t===`annotation`?`grid-row: span ${n};`:`grid-row: span ${n};min-height:calc(${n} * 1lh);`}})}function re(e,t){return e==null||t==null?e===t:e.startingLine===t.startingLine&&e.totalLines===t.totalLines&&e.bufferBefore===t.bufferBefore&&e.bufferAfter===t.bufferAfter}function ie(e){return O({tagName:`div`,children:[O({tagName:`div`,children:e.annotations?.map(e=>O({tagName:`slot`,properties:{name:e}})),properties:{"data-annotation-content":``}})],properties:{"data-line-annotation":`${e.hunkIndex},${e.lineIndex}`}})}function ae(e){switch(e){case`file`:return`diffs-icon-file-code`;case`change`:return`diffs-icon-symbol-modified`;case`new`:return`diffs-icon-symbol-added`;case`deleted`:return`diffs-icon-symbol-deleted`;case`rename-pure`:case`rename-changed`:return`diffs-icon-symbol-moved`}}function oe({fileOrDiff:e,mode:t,stickyHeader:n}){let r=`type`in e?e:void 0,i={"data-diffs-header":t,"data-change-type":r?.type,"data-sticky":n?``:void 0};return O({tagName:`div`,children:[t===`custom`?O({tagName:`slot`,properties:{name:l}}):se({name:e.name,prevName:`prevName`in e?e.prevName:void 0,iconType:r?.type??`file`}),...t===`custom`?[]:[ce(r)]],properties:i})}function se({name:e,prevName:t,iconType:n}){let r=[O({tagName:`slot`,properties:{name:f}}),k({name:ae(n),properties:{"data-change-icon":n}})];return t!=null&&(r.push(O({tagName:`div`,children:[O({tagName:`bdi`,children:[D(t)]})],properties:{"data-prev-name":``}})),r.push(k({name:`diffs-icon-arrow-right-short`,properties:{"data-rename-icon":``}}))),r.push(O({tagName:`div`,children:[O({tagName:`bdi`,children:[D(e)]})],properties:{"data-title":``}})),r.push(O({tagName:`slot`,properties:{name:_}})),O({tagName:`div`,children:r,properties:{"data-header-content":``}})}function ce(e){let t=[];if(e!=null){let n=0,r=0;for(let t of e.hunks)n+=t.additionLines,r+=t.deletionLines;(r>0||n===0)&&t.push(O({tagName:`span`,children:[D(`-${r.toLocaleString()}`)],properties:{"data-deletions-count":``}})),(n>0||r===0)&&t.push(O({tagName:`span`,children:[D(`+${n.toLocaleString()}`)],properties:{"data-additions-count":``}}))}return t.push(O({tagName:`slot`,properties:{name:m}})),O({tagName:`div`,children:t,properties:{"data-metadata":``}})}function le(e){return O({tagName:`pre`,properties:ue(e)})}function ue({diffIndicators:e,disableBackground:t,disableLineNumbers:n,overflow:r,split:i,totalLines:a,type:o,customProperties:s}){return{...s,"data-diff":o===`diff`?``:void 0,"data-file":o===`file`?``:void 0,"data-diff-type":o===`diff`?i?`split`:`single`:void 0,"data-overflow":r,"data-disable-line-numbers":n?``:void 0,"data-background":t?void 0:``,"data-indicators":e===`bars`||e===`classic`?e:void 0,style:`--diffs-min-number-column-width-default:${`${a}`.length}ch;`}}function de(e,{theme:t,preferredHighlighter:n=`shiki-js`}){return{langs:Array.isArray(e)?e:[e??`text`],themes:w(t),preferredHighlighter:n}}function fe(e){return`annotation-${`side`in e?`${e.side}-`:``}${e.lineNumber}`}function pe(e){return e.startingLine===0&&e.totalLines===1/0&&e.bufferBefore===0&&e.bufferAfter===0}function me(e,t,n){let r=typeof n.lineInfo==`function`?n.lineInfo(t):n.lineInfo[t-1];if(r==null){let r=`processLine: line ${t}, contains no state.lineInfo`;throw console.error(r,{node:e,line:t,state:n}),Error(r)}return e.tagName=`div`,e.properties[`data-line`]=r.lineNumber,e.properties[`data-alt-line`]=r.altLineNumber,e.properties[`data-line-type`]=r.type,e.properties[`data-line-index`]=r.lineIndex,e.children.length===0&&e.children.push(D(`
`)),e}var he=Symbol(`no-token`),ge=Symbol(`multiple-tokens`);function _e(e){let t=ve(e);if(t!=null)return t;let n=he,r=[],i=[],a,o=()=>{if(i.length===0||a==null){i=[],a=void 0;return}if(i.length===1){let e=i[0];if(e?.type===`element`){ye(e,a);for(let t of e.children)M(t)}else M(e);r.push(e),i=[],a=void 0;return}for(let e of i)M(e);r.push(O({tagName:`span`,properties:{"data-char":a},children:i})),i=[],a=void 0},s=e=>{if(e!==he){if(e===ge){n=ge;return}if(n===he){n=e;return}n!==e&&(n=ge)}};for(let t of e.children){let e=t.type===`element`?_e(t):he;if(s(e),typeof e!=`number`){o(),r.push(t);continue}a!=null&&a!==e&&o(),a??=e,i.push(t)}return o(),e.children=r,n}function ve(e){let t=e.properties[`data-char`];if(typeof t==`number`)return t}function M(e){if(e.type===`element`){e.properties[`data-char`]=void 0;for(let t of e.children)M(t)}}function ye(e,t){e.properties[`data-char`]=t}function be(e={}){let{classPrefix:t=`__shiki_`,classSuffix:n=``,classReplacer:r=e=>e}=e,i=new Map;function a(e){return Object.entries(e).map(([e,t])=>`${e}:${t}`).join(`;`)}function o(e){let o=t+xe(typeof e==`string`?e:a(e))+n;return o=r(o),i.has(o)||i.set(o,typeof e==`string`?e:{...e}),o}return{name:`@shikijs/transformers:style-to-class`,pre(e){if(!e.properties.style)return;let t=o(e.properties.style);delete e.properties.style,this.addClassToHast(e,t)},tokens(e){for(let t of e)for(let e of t){if(!e.htmlStyle)continue;let t=o(e.htmlStyle);e.htmlStyle={},e.htmlAttrs||={},e.htmlAttrs.class?e.htmlAttrs.class+=` ${t}`:e.htmlAttrs.class=t}},getClassRegistry(){return i},getCSS(){let e=``;for(let[t,n]of i.entries())e+=`.${t}{${typeof n==`string`?n:a(n)}}`;return e},clearRegistry(){i.clear()}}}function xe(e,t=0){let n=3735928559^t,r=1103547991^t;for(let t=0,i;t<e.length;t++)i=e.charCodeAt(t),n=Math.imul(n^i,2654435761),r=Math.imul(r^i,1597334677);return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(n^n>>>13,3266489909),(4294967296*(2097151&r)+(n>>>0)).toString(36).slice(0,6)}function Se(e=!1,t=!1){let n={lineInfo:[]},r=[{line(e){return delete e.properties.class,e},pre(t){let r=te(t),i=[];if(r!=null){let t=1;for(let a of r.children)a.type===`element`&&(e&&_e(a),i.push(me(a,t,n)),t++);r.children=i}return t},...e?{tokens(e){for(let t of e){let e=0;for(let n of t){let t=n;t.__lineChar??=e,e+=n.content.length}}},preprocess(e,t){t.mergeWhitespaces=`never`},span(e,t,n,r,i){if(i?.offset!=null&&i.content!=null){let t=i.__lineChar;return t!=null&&(e.properties[`data-char`]=t),e}return e}}:null}];return t&&r.push(we,Ce),e&&r.push({line:e=>(e.type===`element`&&e.children.length===0&&e.children.push({type:`element`,tagName:`br`,properties:{},children:[]}),e)}),{state:n,transformers:r,toClass:Ce}}var Ce=be({classPrefix:`hl-`}),we={name:`token-style-normalizer`,tokens(e){for(let t of e)for(let e of t){if(e.htmlStyle!=null)continue;let t={};e.color!=null&&(t.color=e.color),e.bgColor!=null&&(t[`background-color`]=e.bgColor),e.fontStyle!=null&&e.fontStyle!==0&&(e.fontStyle&1&&(t[`font-style`]=`italic`),e.fontStyle&2&&(t[`font-weight`]=`bold`),e.fontStyle&4&&(t[`text-decoration`]=`underline`)),Object.keys(t).length>0&&(e.htmlStyle=t)}}};function N(e){return`--${e===`token`?`diffs-token`:`diffs`}-`}var Te=/^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i,Ee=/^0(?:\.0+)?%?$/;function De(e){let t=e.indexOf(`(`);if(t<=0||!e.endsWith(`)`))return;let n=e.slice(0,t).trim();if(!/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)$/i.test(n))return;let r=e.slice(t+1,-1).trim();if(r.length===0)return;let i=r.lastIndexOf(`/`);if(i!==-1)return r.slice(i+1).trim();if(/^(?:rgba|hsla)$/i.test(n)){let e=r.split(`,`);if(e.length===4)return e[3]?.trim()}}function P(e){let t=/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b/i.exec(e.trim());if(t==null)return null;let n=t[1],r,i=1;return n.length===3?r=n.split(``).map(e=>e+e).join(``):n.length===6?r=n:(r=n.slice(0,6),i=parseInt(n.slice(6,8),16)/255),[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),i]}function F(e){if(e==null)return null;let t=P(e);if(t==null)return null;let n=t[0]/255,r=t[1]/255,i=t[2]/255,a=e=>e<=.03928?e/12.92:((e+.055)/1.055)**2.4;return .2126*a(n)+.7152*a(r)+.0722*a(i)}function Oe(e,t){let[n,r]=e>t?[e,t]:[t,e];return(n+.05)/(r+.05)}function ke(e,t){if(t==null)return;let n=P(e),r=P(t);if(n==null||r==null)return;let[i,a,o,s]=n,[c,l,u]=r;return`#`+[Math.round(i*s+c*(1-s)),Math.round(a*s+l*(1-s)),Math.round(o*s+u*(1-s))].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Ae(e){if(e==null)return!1;let t=e.trim().toLowerCase();if(t===`transparent`||Te.test(t))return!0;let n=De(t);return n!=null&&Ee.test(n)}function je(e,t){let n=F(e);if(n!=null)return n<.4;let r=F(t);return r!=null&&r>.6}function Me(e,t){if(e==null||t==null)return!1;if(e.trim().toLowerCase()===t.trim().toLowerCase())return!0;let n=F(e),r=F(t);return n==null||r==null?!1:Math.abs(n-r)<.06}function Ne(e,t,n){if(t==null||n==null)return!1;let r=F(e),i=F(t),a=F(n);return r==null||i==null||a==null?!1:Math.abs(r-a)<Math.abs(r-i)}function Pe(e,t){let n=F(e),r=t.find(e=>e!=null&&e!==``);if(n==null)return r;let i,a=-1;for(let e of t){if(e==null||e===``)continue;let t=F(e);if(t==null)continue;let r=Oe(n,t);if(r>=3)return e;r>a&&(i=e,a=r)}return i??r}function Fe(e,t){if(t==null)return e;let n=P(e),r=P(t),i=F(t);if(n==null||r==null||i==null)return`color-mix(in srgb, ${e} 70%, ${t})`;let[a,o,s]=n,[c,l,u]=r;for(let e of[.6,.7,.8,.9]){let t=`#`+[Math.round(a*e+c*(1-e)),Math.round(o*e+l*(1-e)),Math.round(s*e+u*(1-e))].map(e=>e.toString(16).padStart(2,`0`)).join(``),n=F(t);if(n!=null&&Oe(i,n)>=4.5)return t}return e}var Ie=new WeakMap;function Le(e){let t=Ie.get(e);if(t!=null)return t;let n=e.colors??{},r={...n},i=n[`editor.background`]??e.bg,a=n[`editor.foreground`]??e.fg,o=n[`sideBar.background`]??i,s=n[`sideBar.foreground`]??a;I(r,`editor.background`,i),I(r,`editor.foreground`,a),I(r,`sideBar.background`,o),I(r,`sideBar.foreground`,s),I(r,`input.background`,n[`input.background`]??o),I(r,`sideBarSectionHeader.foreground`,n[`sideBarSectionHeader.foreground`]??s),I(r,`list.activeSelectionForeground`,n[`list.activeSelectionForeground`]??s),I(r,`gitDecoration.addedResourceForeground`,Re(n[`gitDecoration.addedResourceForeground`],n[`terminal.ansiGreen`],n[`editorGutter.addedBackground`])),I(r,`gitDecoration.modifiedResourceForeground`,Re(n[`gitDecoration.modifiedResourceForeground`],n[`terminal.ansiBlue`],n[`editorGutter.modifiedBackground`])),I(r,`gitDecoration.deletedResourceForeground`,Re(n[`gitDecoration.deletedResourceForeground`],n[`terminal.ansiRed`],n[`editorGutter.deletedBackground`]));let c=(Ae(n[`list.focusOutline`])?void 0:n[`list.focusOutline`])??(Ae(n.focusBorder)?void 0:n.focusBorder);c==null?delete r[`list.focusOutline`]:r[`list.focusOutline`]=c;let l=n[`list.hoverBackground`];l!=null&&(ze(l,o)||Ne(l,o,s))&&delete r[`list.hoverBackground`];let u=Object.freeze({...e,colors:Object.freeze(r)});return Ie.set(e,u),u}function I(e,t,n){n!=null&&n!==``&&(e[t]=n)}function Re(...e){for(let t of e)if(t!=null&&t!==``)return t}function ze(e,t){return t!=null&&e.toLowerCase()===t.toLowerCase()}function Be({theme:e=v,highlighter:t,prefix:n}){let r=``;if(typeof e==`string`){let i=t.getTheme(e),a=Le(i);r+=`color:${a.fg};`,r+=`background-color:${a.bg};`,r+=`${N(`global`)}fg:${a.fg};`,r+=`${N(`global`)}bg:${a.bg};`,r+=Ve(i,n)}else{let n=t.getTheme(e.dark),i=Le(n);r+=`${N(`global`)}dark:${i.fg};`,r+=`${N(`global`)}dark-bg:${i.bg};`,r+=Ve(n,`dark`),n=t.getTheme(e.light),i=Le(n),r+=`${N(`global`)}light:${i.fg};`,r+=`${N(`global`)}light-bg:${i.bg};`,r+=Ve(n,`light`)}return r}function Ve(e,t){t=t==null?``:`${t}-`;let n=``,r=e.colors?.[`gitDecoration.addedResourceForeground`]??e.colors?.[`terminal.ansiGreen`];r!=null&&(n+=`${N(`global`)}${t}addition-color:${r};`);let i=e.colors?.[`gitDecoration.deletedResourceForeground`]??e.colors?.[`terminal.ansiRed`];i!=null&&(n+=`${N(`global`)}${t}deletion-color:${i};`);let a=e.colors?.[`gitDecoration.modifiedResourceForeground`]??e.colors?.[`terminal.ansiBlue`];return a!=null&&(n+=`${N(`global`)}${t}modified-color:${a};`),n}function He(e){let t=e.children[0];for(;t!=null;){if(t.type===`element`&&t.tagName===`code`)return t.children;t=`children`in t?t.children[0]:null}throw console.error(e),Error(`getLineNodes: Unable to find children`)}function Ue(e,t){for(let n of t)e.push(n)}var We=`-1,-1`;function Ge(e){return e?.some(e=>e.lineNumber===0)??!1}function Ke(e){let t=e[0];return t!=null&&t.length>0?t:void 0}function qe(e){return e.startingLine===0&&e.totalLines>0}function Je(e,t){return e.endsWith(`\r
`)?t+`\r
`:e.endsWith(`\r`)?t+`\r`:e.endsWith(`
`)?t+`
`:t}function Ye(e,t){return O({tagName:`div`,children:e,properties:{"data-content":``,style:`grid-row: span ${t}`}})}var Xe=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-eye-slash" viewBox="0 0 16 16">
    <path d="m13.47 1.47-12 12 1.06 1.06 12-12zM8 14c-.92 0-1.802-.208-2.624-.547l1.173-1.174c.476.142.963.221 1.451.221 1.66 0 3.307-.949 4.626-2.196a10.4 10.4 0 0 0 1.494-1.751A5 5 0 0 0 14.443 8a5 5 0 0 0-.323-.553 10 10 0 0 0-1.238-1.5l1.061-1.062C15.222 6.173 16 7.511 16 8c0 1.05-3.582 6-8 6"/><path d="M8 11q-.084 0-.167-.005l3.162-3.162q.006.083.005.167a3 3 0 0 1-3 3M5.005 8.167l3.162-3.162a3 3 0 0 0-3.162 3.162"/><path d="M8 3.5c.485 0 .97.081 1.445.227l1.168-1.169C9.794 2.212 8.915 2 8 2 3.582 2 0 6.8 0 8c0 .555.766 1.88 2.027 3.144l1.06-1.06a9.5 9.5 0 0 1-1.203-1.461 4.3 4.3 0 0 1-.345-.617L1.536 8l.003-.006c.064-.149.176-.359.345-.617a9.8 9.8 0 0 1 1.482-1.73C4.675 4.427 6.326 3.5 8 3.5"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-plus" viewBox="0 0 16 16">
    <path d="M8 3a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 8 3"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 4a.75.75 0 0 0-.75.75v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5A.75.75 0 0 0 8 4" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M4.75 7.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8 3.546a.75.75 0 0 0-.75.75V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2V4.296a.75.75 0 0 0-.75-.75" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted" viewBox="0 0 16 16">
    <path d="M8.25 4.25a.75.75 0 0 1 0 1.5H6.81l3.302 3.302a1.5 1.5 0 1 1-1.06 1.06L5.75 6.811V8.25a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 5 4.25z"/><path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 1.5c-1.613 0-2.807.089-3.704.288-.88.196-1.382.477-1.706.802-.325.324-.606.826-.802 1.706C1.588 5.193 1.5 6.387 1.5 8s.089 2.807.288 3.704c.196.88.477 1.382.802 1.706.324.325.826.606 1.706.802.897.2 2.091.288 3.704.288s2.807-.089 3.704-.288c.88-.196 1.382-.477 1.706-.802.325-.324.606-.826.802-1.706.2-.897.288-2.091.288-3.704s-.089-2.807-.288-3.704c-.196-.88-.477-1.382-.802-1.706-.324-.325-.826-.606-1.706-.802C10.807 1.588 9.613 1.5 8 1.5" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted-duo" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8" clip-rule="evenodd" opacity=".2"/><path d="M8.25 4.25a.75.75 0 0 1 0 1.5H6.81l3.302 3.302a1.5 1.5 0 1 1-1.06 1.06L5.75 6.811V8.25a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 5 4.25z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-extracted-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5 4.25a.75.75 0 0 0-.75.75v3.25a.75.75 0 0 0 1.5 0V6.81l3.302 3.302a1.5 1.5 0 1 0 1.06-1.06L6.811 5.75H8.25a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M11.53 4.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m3.53 4.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined" viewBox="0 0 16 16">
    <path d="M7.75 11.75a.75.75 0 0 1 0-1.5h1.44L5.887 6.948a1.5 1.5 0 1 1 1.06-1.06l3.302 3.301V7.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75z"/><path fill-rule="evenodd" d="M8 16c-6.588 0-8-1.412-8-8s1.412-8 8-8 8 1.412 8 8-1.412 8-8 8m0-1.5c1.613 0 2.807-.089 3.704-.288.88-.196 1.382-.477 1.706-.802.325-.324.606-.826.802-1.706.2-.897.288-2.091.288-3.704s-.089-2.807-.288-3.704c-.196-.88-.477-1.382-.802-1.706-.324-.325-.826-.606-1.706-.802C10.807 1.588 9.613 1.5 8 1.5s-2.807.089-3.704.288c-.88.196-1.382.477-1.706.802-.325.324-.606.826-.802 1.706C1.588 5.193 1.5 6.387 1.5 8s.089 2.807.288 3.704c.196.88.477 1.382.802 1.706.324.325.826.606 1.706.802.897.2 2.091.288 3.704.288" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined-duo" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 16c-6.588 0-8-1.412-8-8s1.412-8 8-8 8 1.412 8 8-1.412 8-8 8" clip-rule="evenodd" opacity=".2"/><path d="M7.75 11.75a.75.75 0 0 1 0-1.5h1.44L5.887 6.948a1.5 1.5 0 1 1 1.06-1.06l3.302 3.301V7.75a.75.75 0 0 1 1.5 0V11a.75.75 0 0 1-.75.75z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-inlined-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8M5.5 4a1.5 1.5 0 1 0 .388 2.948l3.301 3.302H7.75a.75.75 0 0 0 0 1.5H11a.75.75 0 0 0 .75-.75V7.75a.75.75 0 0 0-1.5 0v1.44L6.948 5.887A1.5 1.5 0 0 0 5.5 4" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved-duo" viewBox="0 0 16 16">
    <path d="M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8" opacity=".2"/><path d="M8.496 4.695a.75.75 0 0 0-.051 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.051 1.06L6.49 8.003 4.693 9.998a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 0c6.588 0 8 1.412 8 8s-1.412 8-8 8-8-1.412-8-8 1.412-8 8-8m1.555 4.745a.75.75 0 0 0-1.11 1.01L10.486 8l-2.04 2.245a.75.75 0 0 0 1.109 1.01l2.5-2.75a.75.75 0 0 0 0-1.01zm-4 0a.75.75 0 0 0-1.11 1.01l2.043 2.248-1.796 1.995a.75.75 0 0 0 1.116 1.004l2.25-2.5a.75.75 0 0 0-.003-1.007z" clip-rule="evenodd"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`,Ze=`@layer base {
  :host {
    --diffs-font-fallback: "SF Mono", Monaco, Consolas, "Ubuntu Mono", "Liberation Mono", "Courier New", monospace;
    --diffs-header-font-fallback: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif;
    --diffs-mixer: var(--legacy-light, #000) var(--legacy-dark, #fff);
    --diffs-gap-fallback: 8px;
    --diffs-scrollbar-gutter-fallback: 6px;
    --diffs-scrollbar-gutter: var(--diffs-scrollbar-gutter-override, var(--diffs-scrollbar-gutter-measured, var(--diffs-scrollbar-gutter-fallback)));
    --diffs-added-light: #0dbe4e;
    --diffs-added-dark: #5ecc71;
    --diffs-modified-light: #009fff;
    --diffs-modified-dark: #69b1ff;
    --diffs-deleted-light: #ff2e3f;
    --diffs-deleted-dark: #ff6762;
    --diffs-warning-light: #d5a910;
    --diffs-warning-dark: #ffd452;
    --lightningcss-light: initial;
    --lightningcss-dark: ;
    color-scheme: light dark;
    font-family: var(--diffs-header-font-family, var(--diffs-header-font-fallback));
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    font-feature-settings: var(--diffs-font-features);
    --diffs-bg: var(--legacy-light, var(--diffs-light-bg, #fff)) var(--legacy-dark, var(--diffs-dark-bg, #000));
    --diffs-bg-buffer: var(--diffs-bg-buffer-override, var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg)));
    --diffs-bg-context: var(--diffs-bg-context-override, var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg)));
    --diffs-bg-context-gutter: var(--diffs-bg-context-gutter-override, var(--legacy-light, var(--diffs-bg-context)) var(--legacy-dark, var(--diffs-bg-context)));
    --diffs-bg-separator: var(--diffs-bg-separator-override, var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg)));
    --diffs-fg: var(--legacy-light, var(--diffs-light, #000)) var(--legacy-dark, var(--diffs-dark, #fff));
    --diffs-fg-number: var(--diffs-fg-number-override, var(--legacy-light, var(--diffs-fg)) var(--legacy-dark, var(--diffs-fg)));
    --diffs-fg-conflict-marker: var(--diffs-fg-conflict-marker-override, var(--diffs-fg-number));
    --diffs-deletion-base: var(--diffs-deletion-color-override, var(--legacy-light, var(--diffs-light-deletion-color, var(--diffs-deletion-color, var(--diffs-deleted-light)))) var(--legacy-dark, var(--diffs-dark-deletion-color, var(--diffs-deletion-color, var(--diffs-deleted-dark)))));
    --diffs-addition-base: var(--diffs-addition-color-override, var(--legacy-light, var(--diffs-light-addition-color, var(--diffs-addition-color, var(--diffs-added-light)))) var(--legacy-dark, var(--diffs-dark-addition-color, var(--diffs-addition-color, var(--diffs-added-dark)))));
    --diffs-modified-base: var(--diffs-modified-color-override, var(--legacy-light, var(--diffs-light-modified-color, var(--diffs-modified-color, var(--diffs-modified-light)))) var(--legacy-dark, var(--diffs-dark-modified-color, var(--diffs-modified-color, var(--diffs-modified-dark)))));
    --diffs-bg-deletion: var(--diffs-bg-deletion-override, var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg)));
    --diffs-bg-deletion-emphasis: var(--diffs-bg-deletion-emphasis-override, var(--legacy-light, rgb(from var(--diffs-deletion-base) r g b / .15)) var(--legacy-dark, rgb(from var(--diffs-deletion-base) r g b / .2)));
    --diffs-bg-addition: var(--diffs-bg-addition-override, var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg)));
    --diffs-bg-addition-emphasis: var(--diffs-bg-addition-emphasis-override, var(--legacy-light, rgb(from var(--diffs-addition-base) r g b / .15)) var(--legacy-dark, rgb(from var(--diffs-addition-base) r g b / .2)));
    --diffs-selection-base: var(--diffs-modified-base);
    --diffs-selection-number-fg: var(--legacy-light, var(--diffs-selection-base)) var(--legacy-dark, var(--diffs-selection-base));
    background-color: var(--diffs-bg);
    color: var(--diffs-fg);
    display: block;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --lightningcss-light: ;
      --lightningcss-dark: initial;
    }
  }

  pre, code, [data-error-wrapper] {
    isolation: isolate;
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    outline: none;
    margin: 0;
    padding: 0;
    display: block;
  }

  pre, code {
    background-color: var(--diffs-bg);
  }

  code {
    contain: content;
  }

  input, button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  *, :before, :after {
    box-sizing: border-box;
  }

  [data-icon-sprite] {
    display: none;
  }

  [data-diffs-header], [data-separator] {
    font-family: var(--diffs-header-font-family, var(--diffs-header-font-fallback));
  }

  [data-diffs-header][data-sticky] {
    z-index: 1;
    background-color: var(--diffs-bg);
    position: sticky;
    top: 0;
  }

  [data-file-info] {
    color: var(--fg);
    background-color: var(--bg);
    border-block: 1px solid var(--bg);
    padding: 10px;
    font-weight: 700;
  }

  [data-diff], [data-file] {
    --diffs-grid-number-column-width: minmax(min-content, max-content);
    --diffs-code-grid: var(--diffs-grid-number-column-width) 1fr;
  }

  :is([data-diff], [data-file])[data-dehydrated] {
    --diffs-code-grid: var(--diffs-grid-number-column-width) minmax(0, 1fr);
  }

  :is([data-diff], [data-file]):hover [data-code]::-webkit-scrollbar-thumb {
    background-color: var(--diffs-bg-context);
  }

  @supports (-webkit-touch-callout: none) {
    :host {
      --diffs-scrollbar-gutter-fallback: 0px;
    }
  }

  [data-line] span, [data-edit-prediction-suffix] span {
    color: var(--legacy-light, var(--diffs-token-light, var(--diffs-light))) var(--legacy-dark, var(--diffs-token-dark, var(--diffs-dark)));
    background-color: var(--legacy-light, var(--diffs-token-light-bg, inherit)) var(--legacy-dark, var(--diffs-token-dark-bg, inherit));
    font-weight: var(--legacy-light, var(--diffs-token-light-font-weight, inherit)) var(--legacy-dark, var(--diffs-token-dark-font-weight, inherit));
    font-style: var(--legacy-light, var(--diffs-token-light-font-style, inherit)) var(--legacy-dark, var(--diffs-token-dark-font-style, inherit));
    -webkit-text-decoration: var(--legacy-light, var(--diffs-token-light-text-decoration, inherit)) var(--legacy-dark, var(--diffs-token-dark-text-decoration, inherit));
    text-decoration: var(--legacy-light, var(--diffs-token-light-text-decoration, inherit)) var(--legacy-dark, var(--diffs-token-dark-text-decoration, inherit));
  }

  [data-line], [data-gutter-buffer], [data-column-number], [data-line-annotation], [data-no-newline], [data-merge-conflict], [data-merge-conflict-actions], [data-editor-overlay] {
    --diffs-computed-decoration-bg: var(--diffs-bg);
    --diffs-computed-diff-line-bg: var(--diffs-computed-decoration-bg);
    --diffs-computed-selected-line-bg: var(--diffs-computed-diff-line-bg);
    --diffs-computed-editor-active-line-bg: var(--diffs-computed-selected-line-bg);
    --diffs-computed-hovered-line-bg: var(--diffs-computed-editor-active-line-bg);
    --diffs-hover-mix-target: var(--diffs-bg-hover-override, var(--diffs-mixer));
    --diffs-line-bg: var(--diffs-computed-hovered-line-bg);
    color: var(--diffs-fg);
    background-color: var(--diffs-line-bg, var(--diffs-bg));
  }

  :is([data-line], [data-no-newline])[data-decoration-bg] {
    --mix-deco-light: 92%;
    --mix-deco-dark: 85%;
  }

  :is([data-line], [data-no-newline])[data-decoration-bg][data-decoration-bg-depth="2"] {
    --mix-deco-light: 88%;
    --mix-deco-dark: 80%;
  }

  :is([data-line], [data-no-newline])[data-decoration-bg][data-decoration-bg-depth="3"] {
    --mix-deco-light: 85%;
    --mix-deco-dark: 78%;
  }

  :is([data-line], [data-no-newline])[data-decoration-bg] {
    --diffs-hover-mix-target: var(--diffs-decoration-bg);
    --diffs-computed-decoration-bg: var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg));
  }

  [data-line-annotation], [data-gutter-buffer="annotation"] {
    --diffs-annotation-bg: var(--diffs-bg-context);
    --diffs-computed-decoration-bg: var(--diffs-annotation-bg);
    --diffs-hover-mix-target: var(--diffs-computed-editor-active-line-bg);
  }

  [data-merge-conflict-actions], [data-gutter-buffer="merge-conflict-action"], [data-gutter-buffer="merge-conflict-marker-base"], [data-gutter-buffer="merge-conflict-marker-separator"], [data-merge-conflict="marker-base"], [data-merge-conflict="marker-separator"] {
    --diffs-computed-decoration-bg: var(--diffs-bg-context);
    --diffs-hover-mix-target: var(--diffs-computed-editor-active-line-bg);
  }

  [data-gutter-buffer="merge-conflict-marker-start"], [data-merge-conflict="marker-start"], [data-gutter-buffer="merge-conflict-marker-end"], [data-merge-conflict="marker-end"] {
    --diffs-computed-decoration-bg: var(--legacy-light, var(--diffs-bg)) var(--legacy-dark, var(--diffs-bg));
    --diffs-hover-mix-target: var(--diffs-computed-editor-active-line-bg);
  }

  [data-has-merge-conflict] [data-line-annotation], [data-has-merge-conflict] [data-gutter-buffer="annotation"] {
    --diffs-computed-decoration-bg: var(--diffs-bg);
    --diffs-hover-mix-target: var(--diffs-computed-editor-active-line-bg);
  }

  :where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number] {
    --mix-light: 91%;
    --mix-dark: 85%;
  }

  :where([data-background]) [data-line], :where([data-background]) [data-no-newline] {
    --mix-light: 88%;
    --mix-dark: 80%;
  }

  :where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline] {
    --diffs-diff-line-mix-target: var(--diffs-bg);
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-deletion"] {
    --diffs-diff-line-mix-target: var(--diffs-bg-deletion-override, var(--diffs-deletion-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-deletion"]:where([data-gutter-buffer], [data-column-number]) {
    color: var(--diffs-fg-number-deletion-override, var(--diffs-deletion-base));
    --diffs-diff-line-mix-target: var(--diffs-bg-deletion-number-override, var(--diffs-deletion-base));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-deletion"] {
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-addition"] {
    --diffs-diff-line-mix-target: var(--diffs-bg-addition-override, var(--diffs-addition-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-addition"]:where([data-gutter-buffer], [data-column-number]) {
    color: var(--diffs-fg-number-addition-override, var(--diffs-addition-base));
    --diffs-diff-line-mix-target: var(--diffs-bg-addition-number-override, var(--diffs-addition-base));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-addition"] {
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="current"] {
    --diffs-diff-line-mix-target: var(--conflict-bg-current-override, var(--diffs-addition-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="current"]:where([data-gutter-buffer], [data-column-number]) {
    color: var(--diffs-fg-number-addition-override, var(--diffs-addition-base));
    --diffs-diff-line-mix-target: var(--conflict-bg-current-number-override, var(--diffs-addition-base));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="current"] {
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="incoming"] {
    --diffs-diff-line-mix-target: var(--conflict-bg-incoming-override, var(--diffs-modified-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="incoming"]:where([data-gutter-buffer], [data-column-number]) {
    color: var(--diffs-modified-base);
    --diffs-diff-line-mix-target: var(--conflict-bg-incoming-number-override, var(--diffs-modified-base));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="incoming"] {
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  [data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay] {
    --diffs-selection-mix-target: var(--diffs-bg-selection-override, var(--diffs-selection-base));
    --diffs-selection-emphasis-mix-target: var(--diffs-selection-mix-target);
  }

  :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay]):where([data-editor-overlay]), :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay]):where([data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline])[data-selected-line] {
    --mix-selection-light: 82%;
    --mix-selection-dark: 75%;
    --diffs-hover-mix-target: var(--diffs-selection-mix-target);
  }

  :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay]):where([data-gutter-buffer][data-selected-line], [data-column-number]:is([data-selected-line], [data-editor-active-line])) {
    --mix-selection-light: 75%;
    --mix-selection-dark: 60%;
    --diffs-selection-mix-target: var(--diffs-bg-selection-number-override, var(--diffs-selection-base));
    --diffs-hover-mix-target: var(--diffs-selection-mix-target);
  }

  :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay]):where([data-line][data-selected-line]):is([data-line-type="change-addition"], [data-line-type="change-deletion"]) {
    --diffs-selection-emphasis-mix-target: var(--legacy-light, var(--diffs-diff-line-mix-target, var(--diffs-selection-mix-target))) var(--legacy-dark, var(--diffs-selection-mix-target));
  }

  :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay]):where([data-editor-overlay]), :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay])[data-selected-line] {
    --diffs-computed-selected-line-bg: var(--legacy-light, var(--diffs-computed-diff-line-bg)) var(--legacy-dark, var(--diffs-computed-diff-line-bg));
  }

  [data-line][data-editor-active-line], [data-column-number][data-editor-active-line] {
    --diffs-computed-editor-active-line-bg: var(--diffs-computed-selected-line-bg);
  }

  @media (pointer: fine) {
    [data-line][data-hovered], [data-gutter-buffer][data-hovered], [data-column-number][data-hovered], [data-line-annotation][data-hovered], [data-no-newline][data-hovered], [data-merge-conflict][data-hovered], [data-merge-conflict-actions][data-hovered], [data-editor-overlay][data-hovered] {
      --diffs-computed-hovered-line-bg: var(--legacy-light, var(--diffs-computed-editor-active-line-bg)) var(--legacy-dark, var(--diffs-computed-editor-active-line-bg));
    }
  }

  [data-gutter-buffer][data-selected-line], [data-column-number]:is([data-selected-line], [data-editor-active-line]) {
    color: var(--diffs-selection-number-fg);
  }

  [data-no-newline] {
    -webkit-user-select: none;
    user-select: none;
  }

  [data-no-newline] span {
    opacity: .6;
  }

  [data-diff-type="split"][data-overflow="scroll"] {
    grid-template-columns: 1fr 1fr;
    display: grid;
  }

  [data-diff-type="split"][data-overflow="scroll"] [data-additions] {
    border-left: 1px solid var(--diffs-bg);
  }

  [data-diff-type="split"][data-overflow="scroll"] [data-deletions] {
    border-right: 1px solid var(--diffs-bg);
  }

  [data-code] {
    grid-auto-flow: dense;
    grid-template-columns: var(--diffs-code-grid);
    overflow: var(--diffs-overflow-override, scroll) clip;
    overscroll-behavior-x: none;
    tab-size: var(--diffs-tab-size, 2);
    padding-top: var(--diffs-gap-block, var(--diffs-gap-fallback));
    padding-bottom: max(0px, calc(var(--diffs-gap-block, var(--diffs-gap-fallback)) - var(--diffs-scrollbar-gutter)));
    scrollbar-gutter: stable;
    align-self: flex-start;
    display: grid;
  }

  [data-diffs-scrollbar-measure] {
    opacity: 0;
    pointer-events: none;
    scrollbar-gutter: auto;
    grid-template-columns: none;
    width: 100px;
    height: 100px;
    padding: 0;
    position: absolute;
    top: -200px;
    left: -200px;
  }

  [data-container-size] {
    container-type: inline-size;
  }

  [data-code]::-webkit-scrollbar {
    width: 0;
    height: var(--diffs-scrollbar-gutter);
  }

  [data-code]::-webkit-scrollbar-track {
    background: none;
  }

  [data-code]::-webkit-scrollbar-thumb {
    background-color: #0000;
    background-clip: content-box;
    border: 1px solid #0000;
    border-radius: 3px;
  }

  [data-code]::-webkit-scrollbar-corner {
    background-color: #0000;
  }

  @supports ((-moz-appearance: none)) {
    [data-code] {
      scrollbar-width: thin;
      scrollbar-color: var(--diffs-bg-context) transparent;
      padding-bottom: var(--diffs-gap-block, var(--diffs-gap-fallback));
    }
  }

  :is([data-diffs-header] ~ [data-diff], [data-diffs-header] ~ [data-file]) [data-code], :is([data-diffs-header] ~ [data-diff], [data-diffs-header] ~ [data-file])[data-overflow="wrap"], :is([data-diffs-header] ~ [data-diff], [data-diffs-header] ~ [data-file])[data-dehydrated][data-diff-type="split"][data-overflow="scroll"] {
    padding-top: 0;
  }

  [data-gutter] {
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    z-index: 3;
    background-color: var(--diffs-bg);
    grid-column: 1;
    display: grid;
    position: relative;
  }

  [data-gutter] [data-gutter-buffer], [data-gutter] [data-column-number] {
    border-right: var(--diffs-gap-style, 2px solid var(--diffs-bg));
  }

  [data-content] {
    grid-template-rows: subgrid;
    grid-template-columns: subgrid;
    background-color: var(--diffs-bg);
    grid-column: 2;
    min-width: 0;
    display: grid;
  }

  [data-diff-type="split"][data-overflow="wrap"], [data-dehydrated][data-diff-type="split"][data-overflow="scroll"] {
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, var(--diffs-code-grid));
    padding-block: var(--diffs-gap-block, var(--diffs-gap-fallback));
    display: grid;
  }

  :is([data-diff-type="split"][data-overflow="wrap"], [data-dehydrated][data-diff-type="split"][data-overflow="scroll"]) [data-code] {
    display: contents;
  }

  :is([data-diff-type="split"][data-overflow="wrap"], [data-dehydrated][data-diff-type="split"][data-overflow="scroll"]) [data-deletions] [data-gutter] {
    grid-column: 1;
  }

  :is([data-diff-type="split"][data-overflow="wrap"], [data-dehydrated][data-diff-type="split"][data-overflow="scroll"]) [data-deletions] [data-content] {
    border-right: 1px solid var(--diffs-bg);
    grid-column: 2;
  }

  :is([data-diff-type="split"][data-overflow="wrap"], [data-dehydrated][data-diff-type="split"][data-overflow="scroll"]) [data-additions] [data-gutter] {
    border-left: 1px solid var(--diffs-bg);
    grid-column: 3;
  }

  :is([data-diff-type="split"][data-overflow="wrap"], [data-dehydrated][data-diff-type="split"][data-overflow="scroll"]) [data-additions] [data-content] {
    grid-column: 4;
  }

  [data-dehydrated][data-diff-type="split"][data-overflow="scroll"] [data-content] {
    overflow: clip;
  }

  [data-overflow="scroll"] [data-gutter] {
    position: sticky;
    left: 0;
  }

  [data-interactive-lines] [data-line] {
    cursor: pointer;
  }

  [data-interactive-line-numbers] [data-column-number] {
    cursor: pointer;
    touch-action: none;
  }

  [data-content-buffer], [data-gutter-buffer] {
    -webkit-user-select: none;
    user-select: none;
    min-height: 1lh;
    position: relative;
  }

  [data-gutter-buffer] {
    padding-left: 2ch;
    padding-right: 1ch;
  }

  [data-gutter-buffer]:before {
    content: "";
    min-width: var(--diffs-min-number-column-width, var(--diffs-min-number-column-width-default, 3ch));
    display: block;
  }

  [data-gutter-buffer="annotation"] {
    --diffs-annotation-bg: var(--diffs-bg-context-gutter);
    min-height: 0;
  }

  [data-gutter-buffer="buffer"] {
    --diffs-line-bg: var(--diffs-bg-context-gutter);
  }

  [data-content-buffer] {
    background-position: 5px 0;
    background-size: 8px 8px;
    background-origin: border-box;
    background-image: repeating-linear-gradient(-45deg, transparent, transparent calc(3px * 1.414), var(--diffs-bg-buffer) calc(3px * 1.414), var(--diffs-bg-buffer) calc(4px * 1.414));
    grid-column: 1;
  }

  [data-separator] {
    box-sizing: content-box;
    background-color: var(--diffs-bg);
  }

  [data-separator="simple"] {
    min-height: 4px;
  }

  [data-separator="line-info"], [data-separator="line-info-basic"], [data-separator="metadata"], [data-separator="simple"] {
    background-color: var(--diffs-bg-separator);
  }

  [data-separator="line-info"], [data-separator="line-info-basic"], [data-separator="metadata"] {
    height: 32px;
    position: relative;
  }

  [data-separator-wrapper] {
    -webkit-user-select: none;
    user-select: none;
    fill: currentColor;
    background-color: var(--diffs-bg);
    align-items: center;
    height: 100%;
    display: flex;
    position: absolute;
    inset-inline: 0;
  }

  [data-content] [data-separator-wrapper] {
    display: none;
  }

  [data-separator="metadata"] [data-separator-wrapper] {
    background-color: var(--diffs-bg-separator);
    height: 100%;
    color: var(--diffs-fg-number);
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: min-content;
    padding-inline: 1ch;
    inset-inline: 100% auto;
    overflow: hidden;
  }

  [data-separator="line-info"] {
    margin-block: var(--diffs-gap-block, var(--diffs-gap-fallback));
  }

  [data-separator="line-info"] [data-separator-wrapper] {
    min-width: 16px;
  }

  [data-separator="line-info-basic"], [data-separator="metadata"] {
    margin-block: 0;
  }

  [data-separator="line-info"][data-separator-first] {
    margin-top: 0;
  }

  [data-separator="line-info"][data-separator-last] {
    margin-bottom: 0;
  }

  [data-expand-index] [data-separator-wrapper] {
    grid-template-columns: 32px auto;
    display: grid;
  }

  [data-expand-index] [data-separator-wrapper][data-separator-multi-button] {
    grid-template-columns: 32px 32px auto;
  }

  [data-expand-button], [data-separator-content] {
    background-color: var(--diffs-bg-separator);
    flex: none;
    align-items: center;
    display: flex;
  }

  [data-expand-index] [data-separator-content]:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  [data-expand-button] {
    cursor: pointer;
    min-width: 32px;
    color: var(--diffs-fg-number);
    border-right: 2px solid var(--diffs-bg);
    flex-shrink: 0;
    justify-content: center;
    align-self: stretch;
  }

  [data-expand-button]:hover {
    color: var(--diffs-fg);
  }

  [data-expand-button][data-expand-all-button] {
    display: none;
  }

  [data-expand-down] [data-icon] {
    transform: scaleY(-1);
  }

  [data-separator-content] {
    height: 100%;
    color: var(--diffs-fg-number);
    flex: auto;
    justify-content: flex-start;
    padding: 0 1ch;
    overflow: hidden;
  }

  :is([data-separator="line-info"], [data-separator="line-info-basic"]) [data-separator-content] {
    -webkit-user-select: none;
    user-select: none;
    height: 100%;
    overflow: clip;
  }

  [data-unmodified-lines] {
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 0 auto;
    min-width: 0;
    display: block;
    overflow: hidden;
  }

  @supports (width: 1cqi) {
    [data-unified] [data-separator="line-info"] [data-separator-wrapper] {
      padding-inline: var(--diffs-gap-inline, var(--diffs-gap-fallback));
      width: 100cqi;
    }

    [data-unified] [data-separator="line-info"] [data-separator-wrapper] [data-separator-content] {
      border-radius: 6px;
    }

    [data-unified] [data-separator="line-info"][data-expand-index] [data-separator-wrapper] [data-separator-content] {
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
    }

    [data-gutter] [data-separator="line-info"] [data-separator-wrapper] {
      padding-left: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    }

    [data-gutter] [data-separator="line-info"] [data-separator-content] {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    [data-gutter] [data-separator="line-info"][data-expand-index] [data-separator-content] {
      border-top-left-radius: unset;
      border-bottom-left-radius: unset;
    }

    [data-additions] [data-content] [data-separator="line-info"] {
      background-color: var(--diffs-bg);
    }

    [data-additions] [data-content] [data-separator="line-info"] [data-separator-wrapper] {
      display: none;
    }

    [data-additions] [data-gutter] [data-separator="line-info"] [data-separator-wrapper] {
      background-color: var(--diffs-bg-separator);
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      height: 100%;
      display: block;
    }

    [data-additions] [data-gutter] [data-separator="line-info"] [data-separator-wrapper] [data-separator-content], [data-additions] [data-gutter] [data-separator="line-info"] [data-separator-wrapper] [data-expand-button] {
      display: none;
    }

    [data-overflow="scroll"] [data-additions] [data-gutter] [data-separator="line-info"] [data-separator-wrapper] {
      width: calc(100cqi - var(--diffs-gap-inline, var(--diffs-gap-fallback)));
    }

    [data-overflow="wrap"] [data-additions] [data-content] [data-separator="line-info"] [data-separator-wrapper] {
      background-color: var(--diffs-bg-separator);
      height: 100%;
      margin-right: var(--diffs-gap-inline, var(--diffs-gap-fallback));
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      display: block;
    }

    [data-overflow="wrap"] [data-additions] [data-content] [data-separator="line-info"] [data-separator-wrapper] [data-separator-content], [data-overflow="wrap"] [data-additions] [data-content] [data-separator="line-info"] [data-separator-wrapper] [data-expand-button] {
      display: none;
    }

    [data-separator="line-info"] [data-separator-wrapper] [data-expand-both], [data-separator="line-info"] [data-separator-wrapper] [data-expand-down], [data-separator="line-info"] [data-separator-wrapper] [data-expand-up] {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    @media (pointer: fine) {
      [data-separator="line-info"] [data-separator-wrapper][data-separator-multi-button] [data-expand-up] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: unset;
      }

      [data-separator="line-info"] [data-separator-wrapper][data-separator-multi-button] [data-expand-down] {
        border-bottom-left-radius: 6px;
        border-top-left-radius: unset;
      }
    }
  }

  @media (pointer: coarse) {
    [data-separator="line-info-basic"] [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: 34px 34px auto;
    }

    [data-separator="line-info-basic"] [data-separator-wrapper][data-separator-multi-button] [data-separator-content] {
      grid-column: unset;
      grid-row: unset;
    }

    @supports (width: 1cqi) {
      [data-separator="line-info"] [data-separator-wrapper] [data-expand-both], [data-separator="line-info"] [data-separator-wrapper] [data-expand-down], [data-separator="line-info"] [data-separator-wrapper] [data-expand-up] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      [data-separator="line-info"] [data-separator-wrapper][data-separator-multi-button] [data-expand-up] {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      [data-separator="line-info"] [data-separator-wrapper][data-separator-multi-button] [data-expand-down] {
        border-bottom-left-radius: unset;
        border-top-left-radius: unset;
      }
    }
  }

  @media (pointer: fine) {
    [data-separator-wrapper][data-separator-multi-button] {
      grid-template-rows: 50% 50%;
      display: grid;
    }

    [data-separator-wrapper][data-separator-multi-button] [data-separator-content] {
      grid-area: 1 / 2 / -1;
      min-width: min-content;
    }

    [data-separator-wrapper][data-separator-multi-button] [data-expand-button] {
      grid-column: 1;
    }

    [data-separator="line-info"] [data-separator-wrapper], [data-separator="line-info"] [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: 34px auto;
    }

    [data-separator="line-info-basic"][data-expand-index] [data-separator-wrapper] {
      grid-template-columns: 100% auto;
    }

    :is([data-separator="line-info"], [data-separator="line-info-basic"]) [data-separator-multi-button] [data-expand-up] {
      border-bottom: 1px solid var(--diffs-bg);
      border-right: 2px solid var(--diffs-bg);
    }

    :is([data-separator="line-info"], [data-separator="line-info-basic"]) [data-separator-multi-button] [data-expand-down] {
      border-top: 1px solid var(--diffs-bg);
      border-right: 2px solid var(--diffs-bg);
    }
  }

  [data-additions] [data-gutter] [data-separator-wrapper], [data-additions] [data-separator="line-info-basic"] [data-separator-wrapper], [data-content] [data-separator-wrapper] {
    display: none;
  }

  [data-line-annotation] {
    min-height: var(--diffs-annotation-min-height, 0);
    z-index: 2;
  }

  [data-merge-conflict-actions] {
    z-index: 2;
  }

  [data-separator="custom"] {
    grid-template-columns: subgrid;
    display: grid;
  }

  [data-line], [data-column-number], [data-no-newline] {
    padding-inline: 1ch;
    position: relative;
  }

  [data-indicators="classic"] [data-line] {
    padding-inline-start: 2ch;
  }

  :is(:is([data-indicators="classic"] [data-line-type="change-addition"], [data-indicators="classic"] [data-line-type="change-deletion"])[data-no-newline], :is([data-indicators="classic"] [data-line-type="change-addition"], [data-indicators="classic"] [data-line-type="change-deletion"])[data-line]):before {
    -webkit-user-select: none;
    user-select: none;
    width: 1ch;
    height: 1lh;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }

  :is([data-indicators="classic"] [data-line-type="change-addition"][data-line], [data-indicators="classic"] [data-line-type="change-addition"][data-no-newline]):before {
    content: "+";
    color: var(--diffs-addition-base);
  }

  :is([data-indicators="classic"] [data-line-type="change-deletion"][data-line], [data-indicators="classic"] [data-line-type="change-deletion"][data-no-newline]):before {
    content: "-";
    color: var(--diffs-deletion-base);
  }

  :is([data-indicators="bars"] [data-line-type="change-deletion"], [data-indicators="bars"] [data-line-type="change-addition"])[data-column-number]:before {
    content: "";
    -webkit-user-select: none;
    user-select: none;
    contain: strict;
    width: 4px;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  [data-indicators="bars"] [data-line-type="change-deletion"][data-column-number]:before {
    background-image: linear-gradient(0deg, var(--diffs-bg-deletion) 50%, var(--diffs-deletion-base) 50%);
    background-repeat: repeat;
    background-size: 2px 2px;
    background-size: calc(1lh / round(1lh / 2px)) calc(1lh / round(1lh / 2px));
  }

  [data-indicators="bars"] [data-line-type="change-addition"][data-column-number]:before {
    background-color: var(--diffs-addition-base);
  }

  [data-overflow="wrap"] [data-line] {
    white-space: pre-wrap;
    word-break: break-word;
  }

  [data-overflow="wrap"] [data-annotation-content] {
    word-break: break-word;
  }

  [data-overflow="scroll"] [data-line] {
    white-space: pre;
    min-height: 1lh;
  }

  [data-column-number] {
    box-sizing: content-box;
    text-align: right;
    -webkit-user-select: none;
    user-select: none;
    color: var(--diffs-fg-number);
    padding-left: 2ch;
  }

  [data-line-number-content] {
    min-width: var(--diffs-min-number-column-width, var(--diffs-min-number-column-width-default, 3ch));
    z-index: 1;
    display: inline-block;
    position: relative;
  }

  [data-disable-line-numbers] [data-gutter-buffer], [data-disable-line-numbers] [data-column-number] {
    min-width: 4px;
    padding: 0;
  }

  :is([data-disable-line-numbers] [data-gutter-buffer], [data-disable-line-numbers] [data-column-number]):before {
    min-width: 0;
  }

  [data-disable-line-numbers] [data-line-number-content] {
    display: none;
  }

  [data-disable-line-numbers] [data-gutter-utility-slot] {
    right: unset;
    justify-content: flex-start;
    left: 0;
  }

  [data-disable-line-numbers][data-indicators="bars"] [data-gutter-utility-slot] {
    left: 6px;
  }

  [data-file][data-disable-line-numbers] [data-gutter-buffer], [data-file][data-disable-line-numbers] [data-column-number] {
    border-right: 0;
    min-width: 0;
  }

  [data-diff-span] {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    border-radius: 3px;
  }

  [data-line-type="change-addition"] [data-diff-span] {
    background-color: var(--diffs-bg-addition-emphasis);
  }

  [data-line-type="change-deletion"] [data-diff-span] {
    background-color: var(--diffs-bg-deletion-emphasis);
  }

  [data-merge-conflict="marker-start"], [data-merge-conflict="marker-base"], [data-merge-conflict="marker-separator"], [data-merge-conflict="marker-end"] {
    color: var(--diffs-fg);
    padding-left: 1ch;
  }

  [data-merge-conflict="marker-start"], [data-merge-conflict="marker-end"] {
    align-items: center;
    display: flex;
  }

  :is([data-merge-conflict="marker-start"], [data-merge-conflict="marker-end"]):after {
    color: var(--diffs-fg-conflict-marker);
    font-size: .75rem;
    font-style: normal;
    line-height: 1.25rem;
    font-family: var(--diffs-header-font-family, var(--diffs-header-font-fallback));
    padding-left: 1ch;
  }

  [data-merge-conflict="marker-start"]:after {
    content: "(Current Change)";
  }

  [data-merge-conflict="marker-end"]:after {
    content: "(Incoming Change)";
  }

  [data-merge-conflict-actions-content] {
    min-height: 1.75rem;
    font-family: var(--diffs-header-font-family, var(--diffs-header-font-fallback));
    color: var(--diffs-fg);
    align-items: center;
    gap: .25rem;
    padding-inline: .5rem;
    font-size: .75rem;
    line-height: 1.2;
    display: flex;
  }

  [data-merge-conflict-action] {
    appearance: none;
    color: var(--diffs-fg-number);
    font: inherit;
    cursor: pointer;
    background: none;
    border: 0;
    padding: 0;
    font-style: normal;
  }

  [data-merge-conflict-action]:hover {
    color: var(--diffs-fg);
  }

  [data-merge-conflict-action="current"]:hover {
    color: var(--diffs-addition-base);
  }

  [data-merge-conflict-action="incoming"]:hover {
    color: var(--diffs-modified-base);
  }

  [data-merge-conflict-action-separator] {
    color: var(--diffs-fg-number);
    opacity: .6;
    -webkit-user-select: none;
    user-select: none;
  }

  [data-diffs-header="default"] {
    background-color: var(--diffs-bg);
    justify-content: space-between;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-height: calc(1lh + (var(--diffs-gap-block, var(--diffs-gap-fallback)) * 3));
    z-index: 2;
    flex-direction: row;
    padding-inline: 16px;
    display: flex;
    position: relative;
    top: 0;
  }

  [data-header-content] {
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    white-space: nowrap;
    flex-direction: row;
    min-width: 0;
    display: flex;
  }

  [data-header-content] [data-prev-name], [data-header-content] [data-title] {
    text-overflow: ellipsis;
    white-space: nowrap;
    direction: rtl;
    min-width: 0;
    overflow: hidden;
  }

  [data-prev-name] {
    opacity: .7;
  }

  [data-rename-icon] {
    fill: currentColor;
    flex-grow: 0;
    flex-shrink: 0;
  }

  [data-diffs-header="default"] [data-metadata] {
    white-space: nowrap;
    align-items: center;
    gap: 1ch;
    display: flex;
  }

  [data-diffs-header="default"] [data-additions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-addition-base);
  }

  [data-diffs-header="default"] [data-deletions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-deletion-base);
  }

  [data-change-icon] {
    fill: currentColor;
    flex-shrink: 0;
  }

  [data-change-icon="change"], [data-change-icon="rename-pure"], [data-change-icon="rename-changed"] {
    color: var(--diffs-modified-base);
  }

  [data-change-icon="new"] {
    color: var(--diffs-addition-base);
  }

  [data-change-icon="deleted"] {
    color: var(--diffs-deletion-base);
  }

  [data-change-icon="file"] {
    opacity: .6;
  }

  [data-annotation-content] {
    z-index: 2;
    isolation: isolate;
    white-space: normal;
    align-self: flex-start;
    min-width: 0;
    display: flow-root;
    position: relative;
  }

  [data-overflow="scroll"] [data-annotation-content], [data-overflow="scroll"] [data-merge-conflict-actions-content] {
    width: var(--diffs-column-content-width, auto);
    left: var(--diffs-column-number-width, 0);
    position: sticky;
  }

  [data-annotation-slot] {
    text-wrap-mode: wrap;
    word-break: normal;
    white-space-collapse: collapse;
  }

  [data-gutter-utility-slot] {
    touch-action: none;
    justify-content: flex-end;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }

  [data-utility-button] {
    appearance: none;
    cursor: pointer;
    width: 1lh;
    height: 1lh;
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    background-color: var(--diffs-modified-base);
    color: var(--diffs-bg);
    fill: currentColor;
    z-index: 4;
    touch-action: none;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    margin-right: calc(1ch - 1lh);
    padding: 0;
    display: flex;
    position: relative;
  }

  [data-utility-button]:before {
    content: "";
    display: block;
    position: absolute;
    inset: 0 0 0 -4px;
  }

  [data-decoration-bar-stack] {
    pointer-events: none;
    isolation: isolate;
    z-index: 1;
    background-color: var(--diffs-decoration-bar-color, transparent);
    box-sizing: content-box;
    border-left: 2px solid var(--diffs-bg);
    border-right: 2px solid var(--diffs-bg);
    width: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -2px;
  }

  [data-decoration-bar-depth="1"] [data-decoration-bar-stack], [data-decoration-bar-depth="2"] [data-decoration-bar-stack], [data-decoration-bar-depth="3"] [data-decoration-bar-stack] {
    background-color: var(--diffs-bg);
  }

  [data-decoration-bar-start] [data-decoration-bar-stack] {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  [data-decoration-bar-end] [data-decoration-bar-stack] {
    z-index: 3;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  [data-placeholder] {
    contain: strict;
  }

  [data-error-wrapper] {
    padding: var(--diffs-gap-block, var(--diffs-gap-fallback)) var(--diffs-gap-inline, var(--diffs-gap-fallback));
    scrollbar-width: none;
    max-height: 400px;
    overflow: auto;
  }

  [data-error-wrapper] [data-error-message] {
    color: var(--diffs-deletion-base);
    font-size: 18px;
    font-weight: 700;
  }

  [data-error-wrapper] [data-error-stack] {
    color: var(--diffs-fg-number);
  }
}

@layer theme, rendered, unsafe;

@media (max-width: 767px) {
  :root {
    --workspace-controls-top: env(safe-area-inset-top, 0px);
  }

  [data-chat-header] {
    height: var(--workspace-topbar-height);
    min-height: var(--workspace-topbar-height);
    flex-shrink: 0;
    align-items: center;
    display: flex;
    padding-left: calc(env(safe-area-inset-left, 0px) + 3.5rem) !important;
    padding-right: calc(env(safe-area-inset-right, 0px) + 7.5rem) !important;
  }

  [data-chat-header] > :not([data-workspace-titlebar-controls]) {
    min-width: 0;
  }

  [data-sidebar-control], [data-workspace-titlebar-controls] {
    height: var(--workspace-topbar-height);
    align-items: center;
    top: env(safe-area-inset-top, 0px) !important;
  }
}
`,L;function Qe(e){if(L!=null)return L;let t=e.host;if(typeof HTMLElement<`u`&&t instanceof HTMLElement&&!t.isConnected)return;let n=document.createElement(`div`);n.setAttribute(`data-code`,``),n.setAttribute(c,`true`);let r=document.createElement(`div`);return r.style.position=`relative`,r.style.width=`200%`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n),L=Math.max(n.offsetHeight-n.clientHeight,0),n.remove(),L}function $e(e){let t=e==null?`var(--diffs-scrollbar-gutter-fallback)`:`${e}px`;return`${C}: ${t};`}var et=`@layer base, theme, rendered, unsafe;`,tt=RegExp(`${ot(C)}\\s*:\\s*[^;]+;`);function nt(e){return`${et}
${Ze}
@layer theme {
  ${e}
}`}function rt(e){return`${et}
@layer unsafe {
  ${e}
}`}function it(e,t=`system`,n){let r=T(e);return`${et}
@layer rendered {
  :host {${t===`system`?``:`
  color-scheme: ${t};`}
  ${$e(n)}
  ${r}
  }
}`}function at(e,t){let n=$e(t);return e.replace(tt,n)}function ot(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function st(e){return e?.useTokenTransformer===!0||e?.onTokenClick!=null||e?.onTokenEnter!=null||e?.onTokenLeave!=null}function ct(e){return{...s,...e}}function lt(e,t){return ut(e,t)+dt(e,t)}function ut(e,t){return t?0:e.diffHeaderHeight}function dt(e,t){return e.paddingTop??(t?e.spacing:0)}function ft(e){return e.paddingBottom??e.spacing}function pt(e){switch(e){case`simple`:return 4;case`metadata`:case`line-info`:case`line-info-basic`:case`custom`:return 32}}function R(e,t){return e?.cacheKey!=null||t?.cacheKey!=null?e?.cacheKey===t?.cacheKey:e===t}function z(e,t){return ee(e.theme,t.theme)&&e.useTokenTransformer===t.useTokenTransformer&&e.tokenizeMaxLineLength===t.tokenizeMaxLineLength&&e.lineDiffType===t.lineDiffType&&e.maxLineDiffLength===t.maxLineDiffLength}function mt(e){return O({tagName:`div`,properties:{"data-content-buffer":``,"data-buffer-size":e,style:`grid-row: span ${e};min-height:calc(${e} * 1lh)`}})}function ht(e){return O({tagName:`div`,children:[O({tagName:`span`,children:[D(`No newline at end of file`)]})],properties:{"data-no-newline":``,"data-line-type":e,"data-column-content":``}})}function gt(e){return O({tagName:`div`,children:[k({name:e===`both`?`diffs-icon-expand-all`:`diffs-icon-expand`,properties:{"data-icon":``}})],properties:{role:`button`,"data-expand-button":``,"data-expand-both":e===`both`?``:void 0,"data-expand-up":e===`up`?``:void 0,"data-expand-down":e===`down`?``:void 0}})}function B({type:e,content:t,expandIndex:n,chunked:r=!1,slotName:i,isFirstHunk:a,isLastHunk:o}){let s=0,c=[];if(e===`metadata`&&t!=null&&c.push(O({tagName:`div`,children:[D(t)],properties:{"data-separator-wrapper":``}})),(e===`line-info`||e===`line-info-basic`)&&t!=null){let e=[];n!=null&&(r?(a||(e.push(gt(`up`)),s++),o||(e.push(gt(`down`)),s++)):(e.push(gt(!a&&!o?`both`:a?`down`:`up`)),s++)),e.push(O({tagName:`div`,children:[O({tagName:`span`,children:[D(t)],properties:{"data-unmodified-lines":``}})],properties:{"data-separator-content":``}})),r&&n!=null&&e.push(O({tagName:`div`,children:[D(`Expand all`)],properties:{role:`button`,"data-expand-button":``,"data-expand-all-button":``}})),c.push(O({tagName:`div`,children:e,properties:{"data-separator-wrapper":``,"data-separator-multi-button":s>1?``:void 0}}))}return e===`custom`&&i!=null&&c.push(O({tagName:`slot`,properties:{name:i}})),O({tagName:`div`,children:c,properties:{"data-separator":c.length===0?`simple`:e,"data-expand-index":n,"data-separator-first":a?``:void 0,"data-separator-last":o?``:void 0}})}function _t(e,t){return`hunk-separator-${e}-${t}`}function vt(e){let t=e.at(-1);return t==null?0:Math.max(o(t.additionStart,t.additionCount),o(t.deletionStart,t.deletionCount))}function V({line:e,spanStart:t,spanLength:n}){return{start:{line:e,character:t},end:{line:e,character:t+n},properties:{"data-diff-span":``},alwaysWrap:!0}}function H({item:e,arr:t,enableJoin:n,isNeutral:r=!1,isLastItem:i=!1}){let a=t[t.length-1];if(a==null||i||!n){t.push([+!r,e.value]);return}let o=a[0]===0;if(r===o||r&&e.value.length===1&&!o){a[1]+=e.value;return}t.push([+!r,e.value])}function U(e){return[a(e.additionStart,e.additionCount)+1,o(e.additionStart,e.additionCount)+1]}function W({isPartial:e,rangeSize:t,expandedHunks:n,hunkIndex:r,collapsedContextThreshold:i}){let a=Math.max(t,0);if(a===0||e)return{fromStart:0,fromEnd:0,rangeSize:a,collapsedLines:a,renderAll:!1};if(n===!0||a<=i)return{fromStart:a,fromEnd:0,rangeSize:a,collapsedLines:0,renderAll:!0};let o=n?.get(r),s=Math.min(Math.max(o?.fromStart??0,0),a),c=Math.min(Math.max(o?.fromEnd??0,0),a),l=s+c,u=l>=a;return{fromStart:u?a:s,fromEnd:u?0:c,rangeSize:a,collapsedLines:Math.max(a-l,0),renderAll:u}}function yt(e){let t=e.hunks[e.hunks.length-1];if(t==null||e.isPartial||e.additionLines.length===0||e.deletionLines.length===0)return!1;let n=e.additionLines.length-o(t.additionStart,t.additionCount),r=e.deletionLines.length-o(t.deletionStart,t.deletionCount);return n<=0&&r<=0?!1:n!==r}function bt({fileDiff:e,errorPrefix:t}){let n=e.hunks[e.hunks.length-1];if(n==null||e.isPartial||e.additionLines.length===0||e.deletionLines.length===0)return 0;let r=e.additionLines.length-o(n.additionStart,n.additionCount),i=e.deletionLines.length-o(n.deletionStart,n.deletionCount);if(r<=0&&i<=0)return 0;if(r!==i)throw Error(`${t}: trailing context mismatch (additions=${r}, deletions=${i}) for ${e.name}`);return Math.min(r,i)}function G({fileDiff:e,hunkIndex:t,expandedHunks:n,collapsedContextThreshold:r,errorPrefix:i}){if(t!==e.hunks.length-1)return;let a=bt({fileDiff:e,errorPrefix:i});if(a<=0)return;if(n===!0||a<=r)return{fromStart:a,fromEnd:0,rangeSize:a,collapsedLines:0,renderAll:!0};let o=n?.get(e.hunks.length),s=Math.min(Math.max(o?.fromStart??0,0),a);return{fromStart:s,fromEnd:0,rangeSize:a,collapsedLines:a-s,renderAll:s>=a}}function xt({fileDiff:e,lineNumber:t,expandedHunks:n,collapsedContextThreshold:r}){if(n===!0||e.isPartial)return!0;for(let[i,a]of e.hunks.entries()){let[o,s]=U(a);if(t<o){let s=W({isPartial:e.isPartial,rangeSize:a.collapsedBefore,expandedHunks:n,hunkIndex:i,collapsedContextThreshold:r}),c=o-s.rangeSize;return s.renderAll||t<c+s.fromStart||t>=o-s.fromEnd}if(t<s)return!0}let i=G({fileDiff:e,hunkIndex:e.hunks.length-1,expandedHunks:n,collapsedContextThreshold:r,errorPrefix:`isAdditionLineRenderable`});if(i==null||i.renderAll)return!0;let a=e.hunks[e.hunks.length-1],[,o]=U(a);return t<o+i.fromStart||t>=o+i.rangeSize}function St({fileDiff:e,lineNumber:t,direction:n,expandedHunks:r,collapsedContextThreshold:i}){if(r===!0||e.isPartial)return t;let a=[],o=1;for(let[t,n]of e.hunks.entries()){let[s,c]=U(n),l=W({isPartial:e.isPartial,rangeSize:n.collapsedBefore,expandedHunks:r,hunkIndex:t,collapsedContextThreshold:i}),u=s-l.rangeSize;l.renderAll?a.push([u,s]):(l.fromStart>0&&a.push([u,u+l.fromStart]),l.fromEnd>0&&a.push([s-l.fromEnd,s])),a.push([s,c]),o=c}let s=G({fileDiff:e,hunkIndex:e.hunks.length-1,expandedHunks:r,collapsedContextThreshold:i,errorPrefix:`getNearestRenderableAdditionLine`});if(s!=null){let e=o;o=e+s.rangeSize,s.renderAll?a.push([e,o]):s.fromStart>0&&a.push([e,e+s.fromStart])}if(t>=o)return t;if(n===`down`){for(let[e,n]of a)if(n>t)return Math.max(e,t);return}for(let e=a.length-1;e>=0;e--){let[n,r]=a[e];if(n<=t)return Math.min(r-1,t)}}function Ct({type:e,metrics:t}){return t.hunkSeparatorHeight??pt(e)}function wt({type:e,metrics:t}){return e===`simple`||e===`metadata`||e===`line-info-basic`?0:t.spacing}function Tt({type:e,hunkIndex:t,hunkSpecs:n}){switch(e){case`simple`:return t>0;case`metadata`:return n!=null;case`line-info`:case`line-info-basic`:case`custom`:return!0}}function Et(e){return e!==`simple`&&e!==`metadata`}function Dt({type:e,metrics:t,hunkIndex:n,hunkSpecs:r}){if(!Tt({type:e,hunkIndex:n,hunkSpecs:r}))return;let i=Ct({type:e,metrics:t}),a=wt({type:e,metrics:t}),o=n>0?a:0,s=a;return{height:i,gapBefore:o,gapAfter:s,totalHeight:o+i+s}}function Ot({type:e,metrics:t}){if(!Et(e))return;let n=Ct({type:e,metrics:t}),r=wt({type:e,metrics:t});return{height:n,gapBefore:r,gapAfter:0,totalHeight:r+n}}function K({diff:e,diffStyle:t,startingLine:n=0,totalLines:r=1/0,expandedHunks:i,collapsedContextThreshold:o=1,callback:s}){let c=kt({diff:e,diffStyle:t,startingLine:n,expandedHunks:i,collapsedContextThreshold:o}),l={viewportStart:n,viewportEnd:n+r,isWindowedHighlight:n>0||r<1/0,splitCount:c.splitCount,unifiedCount:c.unifiedCount,finalHunkIndex:e.hunks.length-1,shouldBreak(){if(!l.isWindowedHighlight)return!1;let e=l.unifiedCount>=n+r,i=l.splitCount>=n+r;return t===`unified`?e:(t===`split`||e)&&i},shouldSkip(e,r){if(!l.isWindowedHighlight)return!1;let i=e>0&&l.unifiedCount+e<=n,a=r>0&&l.splitCount+r<=n;return t===`unified`?i:(t===`split`||i)&&a},incrementCounts(e,n){(t===`unified`||t===`both`)&&(l.unifiedCount+=e),(t===`split`||t===`both`)&&(l.splitCount+=n)},isInWindow(e,n){if(!l.isWindowedHighlight)return!0;let r=l.isInUnifiedWindow(e),i=l.isInSplitWindow(n);return t===`unified`?r:t===`split`?i:r||i},isInUnifiedWindow(e){return!l.isWindowedHighlight||l.unifiedCount>=n-e&&l.unifiedCount<n+r},isInSplitWindow(e){return!l.isWindowedHighlight||l.splitCount>=n-e&&l.splitCount<n+r},emit(e,n=!1){return n||(t===`unified`?l.incrementCounts(1,0):t===`split`?l.incrementCounts(0,1):l.incrementCounts(1,1)),s(e)??!1}};hunkIterator:for(let n=c.hunkIndex;n<e.hunks.length;n++){let r=e.hunks[n];if(r==null)throw Error(`iterateOverDiff: invalid hunk index`);if(l.shouldBreak())break;let s=a(r.deletionStart,r.deletionCount),c=a(r.additionStart,r.additionCount),u=!e.isPartial&&r.deletionCount===0?s:r.deletionLineIndex,d=!e.isPartial&&r.additionCount===0?c:r.additionLineIndex,f=W({isPartial:e.isPartial,rangeSize:r.collapsedBefore,expandedHunks:i,hunkIndex:n,collapsedContextThreshold:o}),p=n===l.finalHunkIndex?G({fileDiff:e,hunkIndex:n,expandedHunks:i,collapsedContextThreshold:o,errorPrefix:`iterateOverDiff`}):void 0,m=f.fromStart+f.fromEnd;function h(e,n){return p==null||p.collapsedLines<=0||p.fromStart+p.fromEnd>0?0:t===`unified`?e===r.unifiedLineStart+r.unifiedLineCount-1?p.collapsedLines:0:n===r.splitLineStart+r.splitLineCount-1?p.collapsedLines:0}let g=f.collapsedLines===0;function _(){return g?0:(g=!0,f.collapsedLines)}if(l.shouldSkip(m,m))l.incrementCounts(m,m),_();else{let e=r.unifiedLineStart-f.rangeSize,i=r.splitLineStart-f.rangeSize,a=u-f.rangeSize,o=d-f.rangeSize,p=s+1-f.rangeSize,m=c+1-f.rangeSize;if(q(l,f.fromStart,t,t=>l.emit({hunkIndex:n,hunk:r,collapsedBefore:0,collapsedAfter:0,type:`context-expanded`,deletionLine:{lineNumber:p+t,lineIndex:a+t,noEOFCR:!1,unifiedLineIndex:e+t,splitLineIndex:i+t},additionLine:{unifiedLineIndex:e+t,splitLineIndex:i+t,lineIndex:o+t,lineNumber:m+t,noEOFCR:!1}}))||(e=r.unifiedLineStart-f.fromEnd,i=r.splitLineStart-f.fromEnd,a=u-f.fromEnd,o=d-f.fromEnd,p=s+1-f.fromEnd,m=c+1-f.fromEnd,q(l,f.fromEnd,t,t=>l.emit({hunkIndex:n,hunk:r,collapsedBefore:_(),collapsedAfter:0,type:`context-expanded`,deletionLine:{lineNumber:p+t,lineIndex:a+t,noEOFCR:!1,unifiedLineIndex:e+t,splitLineIndex:i+t},additionLine:{unifiedLineIndex:e+t,splitLineIndex:i+t,lineIndex:o+t,lineNumber:m+t,noEOFCR:!1}}),()=>{_()})))break hunkIterator}let v=r.unifiedLineStart,y=r.splitLineStart,b=u,x=d,S=s+1,C=c+1,w=r.hunkContent.at(-1);for(let e of r.hunkContent){if(l.shouldBreak())break hunkIterator;let i=e===w;if(e.type===`context`){if(l.shouldSkip(e.lines,e.lines))l.incrementCounts(e.lines,e.lines),_();else if(q(l,e.lines,t,t=>{let a=i&&t===e.lines-1,o=v+t,s=y+t;return l.emit({hunkIndex:n,hunk:r,collapsedBefore:_(),collapsedAfter:h(o,s),type:`context`,deletionLine:{lineNumber:S+t,lineIndex:b+t,noEOFCR:a&&r.noEOFCRDeletions,unifiedLineIndex:o,splitLineIndex:s},additionLine:{unifiedLineIndex:o,splitLineIndex:s,lineIndex:x+t,lineNumber:C+t,noEOFCR:a&&r.noEOFCRAdditions}})},()=>{_()}))break hunkIterator;v+=e.lines,y+=e.lines,b+=e.lines,x+=e.lines,S+=e.lines,C+=e.lines}else{let a=Math.max(e.deletions,e.additions),o=e.deletions+e.additions;if(!l.shouldSkip(o,a)){let s=Mt(l,e,t);(s[0]?.[0]??0)>0&&_();for(let[c,u]of s)for(let s=c;s<u;s++){let c=h(v+s,t===`unified`?y+(s<e.deletions?s:s-e.deletions):y+s);if(l.emit(Nt({hunkIndex:n,hunk:r,collapsedBefore:_(),collapsedAfter:c,diffStyle:t,index:s,unifiedLineIndex:v,splitLineIndex:y,additionLineIndex:x,deletionLineIndex:b,additionLineNumber:C,deletionLineNumber:S,content:e,isLastContent:i,unifiedCount:o,splitCount:a}),!0))break hunkIterator}}_(),l.incrementCounts(o,a),v+=o,y+=a,b+=e.deletions,x+=e.additions,S+=e.deletions,C+=e.additions}}if(p!=null){let{collapsedLines:n,fromStart:r,fromEnd:i}=p,a=r+i;if(q(l,a,t,t=>{let r=t===a-1;return l.emit({hunkIndex:e.hunks.length,hunk:void 0,collapsedBefore:0,collapsedAfter:r?n:0,type:`context-expanded`,deletionLine:{lineNumber:S+t,lineIndex:b+t,noEOFCR:!1,unifiedLineIndex:v+t,splitLineIndex:y+t},additionLine:{unifiedLineIndex:v+t,splitLineIndex:y+t,lineIndex:x+t,lineNumber:C+t,noEOFCR:!1}})},void 0,()=>l.shouldBreak()))break hunkIterator}}}function kt({diff:e,diffStyle:t,startingLine:n,expandedHunks:r,collapsedContextThreshold:i}){if(n<=0||t===`both`)return{hunkIndex:0,splitCount:0,unifiedCount:0};let a=At({diff:e,expandedHunks:r,collapsedContextThreshold:i}),o=0,s=e.hunks.length-1,c=e.hunks.length;for(;o<=s;){let e=o+s>>1,r=a[e+1];if(r==null)throw Error(`iterateOverDiff: invalid hunk prefix index`);(t===`unified`?r.unifiedCount:r.splitCount)>n?(c=e,s=e-1):o=e+1}if(c>=e.hunks.length){let t=a[e.hunks.length];if(t==null)throw Error(`iterateOverDiff: invalid terminal hunk prefix index`);return{hunkIndex:e.hunks.length,splitCount:t.splitCount,unifiedCount:t.unifiedCount}}let l=a[c];if(l==null)throw Error(`iterateOverDiff: invalid selected hunk prefix index`);return{hunkIndex:c,splitCount:l.splitCount,unifiedCount:l.unifiedCount}}function At({diff:e,expandedHunks:t,collapsedContextThreshold:n}){let r=0,i=0,a=e.hunks.length-1,o=[{splitCount:0,unifiedCount:0}];for(let s=0;s<e.hunks.length;s++){let c=e.hunks[s];if(c==null)throw Error(`iterateOverDiff: invalid hunk summary index`);let l=W({isPartial:e.isPartial,rangeSize:c.collapsedBefore,expandedHunks:t,hunkIndex:s,collapsedContextThreshold:n}),u=l.fromStart+l.fromEnd;r+=u+c.splitLineCount,i+=u+c.unifiedLineCount;let d=s===a?G({fileDiff:e,hunkIndex:s,expandedHunks:t,collapsedContextThreshold:n,errorPrefix:`iterateOverDiff`}):void 0;if(d!=null){let e=d.fromStart+d.fromEnd;r+=e,i+=e}o.push({splitCount:r,unifiedCount:i})}return o}function jt(e,t,n){if(!e.isWindowedHighlight||t<=0)return[0,t];let r=[];function i(n){let i=Math.max(0,e.viewportStart-n),a=Math.min(t,e.viewportEnd-n);a>i&&r.push([i,a])}if(n!==`split`&&i(e.unifiedCount),n!==`unified`&&i(e.splitCount),r.length===0)return[0,0];let a=r[0][0],o=r[0][1];for(let e=1;e<r.length;e++){let t=r[e];a=Math.min(a,t[0]),o=Math.max(o,t[1])}return[a,o]}function q(e,t,n,r,i,a){let[o,s]=jt(e,t,n);o>0&&(e.incrementCounts(o,o),i?.());let c=o;for(;c<t;){if(a?.()===!0)return!0;if(c>=s){e.incrementCounts(t-c,t-c);break}if(e.isInWindow(0,0)){if(r(c)===!0)return!0}else e.incrementCounts(1,1);c++}return!1}function Mt(e,t,n){if(!e.isWindowedHighlight)return[[0,n===`unified`?t.deletions+t.additions:Math.max(t.deletions,t.additions)]];let r=n!==`split`,i=n!==`unified`,a=n===`unified`?`unified`:`split`,o=[];function s(t,n){if(t+n<=e.viewportStart||t>=e.viewportEnd)return;let r=Math.max(0,e.viewportStart-t),i=Math.min(n,e.viewportEnd-t);return i>r?[r,i]:void 0}function c(e,n){return a===`split`?e:n===`additions`?[e[0]+t.deletions,e[1]+t.deletions]:e}function l(e,t){if(e==null)return;let[n,r]=c(e,t);r>n&&o.push([n,r])}if(r&&(l(s(e.unifiedCount,t.deletions),`deletions`),l(s(e.unifiedCount+t.deletions,t.additions),`additions`)),i&&(l(s(e.splitCount,t.deletions),`deletions`),l(s(e.splitCount,t.additions),`additions`)),o.length===0)return o;o.sort((e,t)=>e[0]-t[0]);let u=[o[0]];for(let[e,t]of o.slice(1)){let n=u[u.length-1];e<=n[1]?n[1]=Math.max(n[1],t):u.push([e,t])}return u}function Nt({hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,diffStyle:i,index:a,unifiedLineIndex:o,splitLineIndex:s,additionLineIndex:c,deletionLineIndex:l,additionLineNumber:u,deletionLineNumber:d,content:f,isLastContent:p,unifiedCount:m,splitCount:h}){let g=a<f.deletions?o+a:void 0,_=i===`unified`?a>=f.deletions?o+a:void 0:a<f.additions?o+f.deletions+a:void 0,v=i===`unified`?s+(a<f.deletions?a:a-f.deletions):s+a,y=a<f.deletions?l+a:void 0,b=a<f.deletions?d+a:void 0,x=i===`unified`?a>=f.deletions?c+(a-f.deletions):void 0:a<f.additions?c+a:void 0,S=i===`unified`?a>=f.deletions?u+(a-f.deletions):void 0:a<f.additions?u+a:void 0,C=i===`unified`?p&&a===f.deletions-1&&t.noEOFCRDeletions:p&&a===h-1&&t.noEOFCRDeletions,w=i===`unified`?p&&a===m-1&&t.noEOFCRAdditions:p&&a===h-1&&t.noEOFCRAdditions,T=y!=null&&b!=null&&g!=null?{lineNumber:b,lineIndex:y,noEOFCR:C,unifiedLineIndex:g,splitLineIndex:v}:void 0,E=x!=null&&S!=null&&_!=null?{unifiedLineIndex:_,splitLineIndex:v,lineIndex:x,lineNumber:S,noEOFCR:w}:void 0;if(T==null&&E!=null)return{type:`change`,hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,deletionLine:void 0,additionLine:E};if(T!=null&&E==null)return{type:`change`,hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,deletionLine:T,additionLine:void 0};if(T==null||E==null)throw Error(`iterateOverDiff: missing change line data`);return{type:`change`,hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,deletionLine:T,additionLine:E}}var Pt={forcePlainText:!1};function Ft(e,t,n,{forcePlainText:r,startingLine:i,totalLines:a,expandedHunks:o,collapsedContextThreshold:s=1}=Pt){r?(i??=0,a??=1/0):(i=0,a=1/0);let c=i>0||a<1/0,l=typeof n.theme==`string`?t.getTheme(n.theme).type:void 0,u=Be({theme:n.theme,highlighter:t}),d=r&&!c&&(e.unifiedLineCount>1e3||e.splitLineCount>1e3)?`none`:n.lineDiffType,f={deletionLines:[],additionLines:[]},{maxLineDiffLength:p}=n,m=!r&&!e.isPartial,h=r?o:void 0,g=new Map;function _(e){let t=m?0:e,n=g.get(t)??Rt();return g.set(t,n),n}function v(e,t,n,r){if(c){let e=n.at(-1);(e==null||e.targetIndex+e.count!==t)&&(e={targetIndex:t,originalOffset:r.length,count:0},n.push(e)),e.count++}r.push(e)}K({diff:e,diffStyle:`both`,startingLine:i,totalLines:a,expandedHunks:!c||h,collapsedContextThreshold:s,callback:({hunkIndex:t,additionLine:n,deletionLine:r,type:i})=>{let a=_(t),o=n==null?r.splitLineIndex:n.splitLineIndex;i===`change`&&n!=null&&r!=null&&Lt({additionLine:e.additionLines[n.lineIndex],deletionLine:e.deletionLines[r.lineIndex],deletionLineIndex:a.deletionContent.length,additionLineIndex:a.additionContent.length,deletionDecorations:a.deletionDecorations,additionDecorations:a.additionDecorations,lineDiffType:d,maxLineDiffLength:p}),r!=null&&(v(e.deletionLines[r.lineIndex],r.lineIndex,a.deletionSegments,a.deletionContent),a.deletionInfo.push({type:i===`change`?`change-deletion`:i,lineNumber:r.lineNumber,altLineNumber:i===`change`?void 0:n.lineNumber??void 0,lineIndex:`${r.unifiedLineIndex},${o}`})),n!=null&&(v(e.additionLines[n.lineIndex],n.lineIndex,a.additionSegments,a.additionContent),a.additionInfo.push({type:i===`change`?`change-addition`:i,lineNumber:n.lineNumber,altLineNumber:i===`change`?void 0:r.lineNumber??void 0,lineIndex:`${n.unifiedLineIndex},${o}`}))}});for(let i of g.values()){if(i.deletionContent.length===0&&i.additionContent.length===0)continue;let a={name:e.prevName??e.name,contents:i.deletionContent.value},o={name:e.name,contents:i.additionContent.value},{deletionLines:s,additionLines:c}=zt({deletionFile:a,deletionInfo:i.deletionInfo,deletionDecorations:i.deletionDecorations,additionFile:o,additionInfo:i.additionInfo,additionDecorations:i.additionDecorations,highlighter:t,options:n,languageOverride:r?`text`:e.lang});if(m){f.deletionLines=s,f.additionLines=c;continue}if(i.deletionSegments.length>0)for(let e of i.deletionSegments)for(let t=0;t<e.count;t++)f.deletionLines[e.targetIndex+t]=s[e.originalOffset+t];else Ue(f.deletionLines,s);if(i.additionSegments.length>0)for(let e of i.additionSegments)for(let t=0;t<e.count;t++)f.additionLines[e.targetIndex+t]=c[e.originalOffset+t];else Ue(f.additionLines,c)}return{code:f,themeStyles:u,baseThemeType:l}}function It(e,{deletionLineIndex:t,additionLineIndex:n,deletionDecorations:r,additionDecorations:i}){let a=0,o=0,s=-1,c=0,l=-1,u=0;for(let{value:t,added:n,removed:r}of e)r?(s===-1&&(s=a),a+=t.length,c=a):n?(l===-1&&(l=o),o+=t.length,u=o):(a+=t.length,o+=t.length);s!==-1&&r.push(V({line:t,spanStart:s,spanLength:c-s})),l!==-1&&i.push(V({line:n,spanStart:l,spanLength:u-l}))}function Lt({deletionLine:e,additionLine:t,deletionLineIndex:n,additionLineIndex:r,deletionDecorations:i,additionDecorations:a,lineDiffType:o,maxLineDiffLength:s}){if(e==null||t==null||o===`none`||(e=b(e),t=b(t),e.length>s||t.length>s))return;let c=o===`char`?g(e,t):y(e,t);if(o===`word-line`){It(c,{deletionLineIndex:n,additionLineIndex:r,deletionDecorations:i,additionDecorations:a});return}let l=[],u=[],d=o===`word-alt`,f=c.at(-1);for(let e of c){let t=e===f;!e.added&&!e.removed?(H({item:e,arr:l,enableJoin:d,isNeutral:!0,isLastItem:t}),H({item:e,arr:u,enableJoin:d,isNeutral:!0,isLastItem:t})):e.removed?H({item:e,arr:l,enableJoin:d,isLastItem:t}):H({item:e,arr:u,enableJoin:d,isLastItem:t})}let p=0;for(let e of l)e[0]===1&&i.push(V({line:n,spanStart:p,spanLength:e[1].length})),p+=e[1].length;p=0;for(let e of u)e[0]===1&&a.push(V({line:r,spanStart:p,spanLength:e[1].length})),p+=e[1].length}function Rt(){return{deletionContent:{push(e){this.value+=e,this.length++},value:``,length:0},additionContent:{push(e){this.value+=e,this.length++},value:``,length:0},deletionInfo:[],additionInfo:[],deletionDecorations:[],additionDecorations:[],deletionSegments:[],additionSegments:[]}}function zt({deletionFile:e,additionFile:t,deletionInfo:n,additionInfo:r,highlighter:i,deletionDecorations:a,additionDecorations:o,languageOverride:s,options:{theme:c,...l}}){let u=s??E(e.name),d=s??E(t.name),{state:f,transformers:p}=Se(l.useTokenTransformer),m=typeof c==`string`?{...l,lang:`text`,theme:c,transformers:p,decorations:void 0,defaultColor:!1,cssVariablePrefix:N(`token`),tokenizeTimeLimit:0}:{...l,lang:`text`,themes:c,transformers:p,decorations:void 0,defaultColor:!1,cssVariablePrefix:N(`token`),tokenizeTimeLimit:0};return{deletionLines:e.contents===``?[]:(m.lang=u,f.lineInfo=n,m.decorations=a,He(i.codeToHast(b(e.contents),m))),additionLines:t.contents===``?[]:(m.lang=d,m.decorations=o,f.lineInfo=r,He(i.codeToHast(b(t.contents),m)))}}function J(e,t){let n=u({name:e.prevName??e.name,contents:e.deletionLines.join(``)},{name:e.name,contents:e.additionLines.join(``),lang:e.lang},t);return{hunks:n.hunks,splitLineCount:n.splitLineCount,unifiedLineCount:n.unifiedLineCount,additionLines:n.additionLines,deletionLines:n.deletionLines,type:n.type}}function Bt(e,t){let n=Math.max(e,1),r=Array.from({length:n},(e,t)=>`${` `.repeat(t+1)}\n`).join(``);return r===t&&(r=Array.from({length:n},(e,t)=>`\u0000${` `.repeat(t)}\n`).join(``)),r}function Vt(e){for(let t of e)if(t.trim().length>0)return!1;return!0}function Ht(e,t){return t.length>0&&t.length<e.deletionLines.length&&Vt(t)}function Y(e,t,n){let r=e.deletionLines.join(``),i=Bt(t.length,r),a=u({name:e.prevName??e.name,contents:r},{name:e.name,contents:i,lang:e.lang},n);return{hunks:a.hunks,splitLineCount:a.splitLineCount,unifiedLineCount:a.unifiedLineCount,additionLines:t,deletionLines:a.deletionLines,type:a.type}}function Ut(e,t){return Y(e,[``],t)}function Wt(e,t){if(e.additionLines.length===0)return Ut(e,t);if(Ht(e,e.additionLines))return Y(e,e.additionLines,t);let n=e.additionLines,r=J(e,t);return Kt(r,n),r}function Gt(e){return e.length>1&&e.at(-1)===``}function Kt(e,t){if(!Gt(t))return;let n=t.length-e.additionLines.length;if(n<=0)return;let r=e.additionLines.length,i=e.hunks.at(-1);if(i!=null&&o(i.additionStart,i.additionCount)===r){for(let a of i.hunkContent)if(a.type===`change`&&a.additions<a.deletions&&a.additionLineIndex+a.additions===r){e.additionLines=t,a.additions+=n,i.additionCount+=n,i.additionLines+=n,tn(e);return}}}function qt(e,t,n){if(e.isPartial||e.deletionLines.length!==e.additionLines.length)return X(e,J(e,n));let r=Array.from(t);if(r.length===0)return X(e,{hunks:e.hunks,splitLineCount:e.splitLineCount,unifiedLineCount:e.unifiedLineCount,type:e.type});for(let t of r){let r=e.additionLines[t],i=e.deletionLines[t];if(r==null||i==null||b(r)===b(i))return X(e,J(e,n))}let i=Jt(e,r);if(i.size===0)return X(e,J(e,n));for(let t of i)if(!Xt(e,t,n))return X(e,J(e,n));return tn(e),yt(e)?X(e,J(e,n)):X(e,{hunks:e.hunks,splitLineCount:e.splitLineCount,unifiedLineCount:e.unifiedLineCount,type:e.type})}function X(e,t){return Object.assign(e,t),t}function Jt(e,t){let n=new Set;for(let r of t){let t=Yt(e,r);if(t==null)return new Set;n.add(t)}return n}function Yt(e,t){for(let[n,r]of e.hunks.entries()){let e=r.additionLineIndex+r.additionCount;if(t>=r.additionLineIndex&&t<e)return n}}function Xt(e,t,n){let r=e.hunks[t];if(r==null)return!1;let i=e.deletionLines.slice(r.deletionLineIndex,r.deletionLineIndex+r.deletionCount),a=e.additionLines.slice(r.additionLineIndex,r.additionLineIndex+r.additionCount),o=u({name:e.prevName??e.name,contents:i.join(``)},{name:e.name,contents:a.join(``),lang:e.lang},{...n,context:0}),s=o.hunks[0];return s==null||o.hunks.length!==1?!1:(Qt(r,s),Zt(e,t),!0)}function Zt(e,t){let n=e.hunks[t];if(n==null)return;if(t!==e.hunks.length-1){n.noEOFCRAdditions=!1,n.noEOFCRDeletions=!1;return}let r=e.additionLines.at(-1),i=e.deletionLines.at(-1);n.noEOFCRAdditions=r!=null&&r!==``&&!r.endsWith(`
`),n.noEOFCRDeletions=i!=null&&i!==``&&!i.endsWith(`
`)}function Qt(e,t){let n=e.additionLineIndex,r=e.deletionLineIndex;e.hunkContent=t.hunkContent.map(e=>$t(e,n,r)),e.additionLineIndex=n+t.additionLineIndex,e.additionStart+=t.additionLineIndex,e.additionCount=t.additionCount,e.additionLines=t.additionLines,t.deletionLineIndex>=0&&(e.deletionLineIndex=r+t.deletionLineIndex,e.deletionStart+=t.deletionLineIndex),e.deletionCount=t.deletionCount,e.deletionLines=t.deletionLines,e.noEOFCRAdditions=t.noEOFCRAdditions,e.noEOFCRDeletions=t.noEOFCRDeletions,en(e)}function $t(e,t,n){return{...e,additionLineIndex:e.additionLineIndex+t,deletionLineIndex:e.deletionLineIndex+n}}function en(e){let t=0,n=0;for(let r of e.hunkContent)r.type===`context`?(t+=r.lines,n+=r.lines):(t+=Math.max(r.additions,r.deletions),n+=r.additions+r.deletions);e.splitLineCount=t,e.unifiedLineCount=n}function tn(e){let t=0,n=0,r=0;for(let i of e.hunks)i.collapsedBefore=Math.max(a(i.additionStart,i.additionCount)-r,0),i.splitLineStart=t+i.collapsedBefore,i.unifiedLineStart=n+i.collapsedBefore,en(i),t+=i.collapsedBefore+i.splitLineCount,n+=i.collapsedBefore+i.unifiedLineCount,r=o(i.additionStart,i.additionCount);if(e.hunks.length>0){let r=e.hunks[e.hunks.length-1],i=Math.max(e.additionLines.length-o(r.additionStart,r.additionCount),0);t+=i,n+=i}e.splitLineCount=t,e.unifiedLineCount=n}var nn=new WeakMap;function rn(e){return e.length>1&&e[e.length-1]===``?e.slice(0,-1):e}function an(e,t){let n=Math.min(e.length,t.length),r=0;for(;r<n&&e[r]===t[r];)r++;let i=e.length,a=t.length;for(;i>r&&a>r&&e[i-1]===t[a-1];)i--,a--;if(r!==i||r!==a)return{start:r,deletionEnd:i,additionEnd:a}}function on(e,t,n){let r=e.hunks,i=e.additionLines,a=rn(i),o=a===i?e:{...e,additionLines:a},s=_n(r,hn(o,t,n),e.deletionLines.length),c=bn(o,s);if(e.additionLines=a,e.hunks=c,e.editSessionDirty=!0,kn(e),Kt(e,i),Cn(r,e.hunks))return{regions:s.map(e=>e.previousSpan)}}function sn(e,t,n,r){let i=new Set(t),a=Array.from(i).filter(t=>t>=0&&t<e.additionLines.length).sort((e,t)=>e-t);if(a.length===0)return;let o=t=>i.has(t)?r?.get(t):e.additionLines[t],{hunks:s}=e,c,l=0;for(let t of a){for(;l<s.length;){let e=s[l];if(t<En(e)+e.additionCount)break;l++}let r=s[l],i=r==null?void 0:En(r);if(i==null||t<i||c!=null&&c!==l)return on(e,n,o);c=l}if(c!=null){if(cn(e,a,c,r,n)){e.editSessionDirty=!0;return}return on(e,n,o)}}function cn(e,t,n,r,i){if(r==null||i?.ignoreWhitespace===!0||i?.stripTrailingCr===!0)return!1;let a=ln(e),o=e.hunks[n];if(o.hunkContent.some(un))return!1;for(let n of t){let t=r.get(n),i=e.additionLines[n];if(t==null||i==null||a.has(t)||a.has(i))return!1;let s=!1;for(let e of o.hunkContent)if(e.type===`change`&&e.additions===e.deletions&&n>=e.additionLineIndex&&n<e.additionLineIndex+e.additions){s=!0;break}if(!s)return!1}return!0}function ln(e){let t=nn.get(e);if(t?.lines===e.deletionLines)return t.set;let n=new Set(e.deletionLines);return nn.set(e,{lines:e.deletionLines,set:n}),n}function un(e){return e?.type===`change`&&(e.additions===0||e.deletions===0)}function dn(e,t){let n=new Map,{regions:r}=t;for(let t=0;t<=r.length;t++){let i=r[t-1],a=r[t],o=t===0?e.get(0):i==null?void 0:e.get(i.lastIndex+1),s=a==null?void 0:e.get(a.firstIndex),c=o?.fromStart??0,l=s?.fromEnd??0;(c>0||l>0)&&n.set(t,{fromStart:c,fromEnd:l})}return n}function fn(e,t,n){let r=[];if(e.isPartial)return r;for(let[i,a]of e.hunks.entries()){let o=W({isPartial:e.isPartial,rangeSize:a.collapsedBefore,expandedHunks:t,hunkIndex:i,collapsedContextThreshold:n});if(o.rangeSize<=n)continue;let s=Z(a),c=s-o.rangeSize;o.fromStart>0&&r.push([c,c+o.fromStart]),o.fromEnd>0&&r.push([s-o.fromEnd,s])}let i=G({fileDiff:e,hunkIndex:e.hunks.length-1,expandedHunks:t,collapsedContextThreshold:n,errorPrefix:`captureExpansionAnchors`});if(i!=null&&i.fromStart>0&&i.rangeSize>n){let t=e.hunks[e.hunks.length-1],n=Z(t)+t.deletionCount;r.push([n,n+i.fromStart])}return r}function pn(e,t){let n=new Map;if(t.length===0)return n;let r=(e,r,i)=>{if(i<=r)return;let a=0,o=0;for(let[e,n]of t)n<=r||e>=i||(e<=r&&(a=Math.max(a,Math.min(n,i)-r)),n>=i&&(o=Math.max(o,i-Math.max(e,r))));(a>0||o>0)&&n.set(e,{fromStart:a,fromEnd:o})};for(let[t,n]of e.hunks.entries()){let e=Z(n);r(t,e-Math.max(n.collapsedBefore,0),e)}let i=e.hunks[e.hunks.length-1];return i!=null&&!e.isPartial&&e.deletionLines.length>0&&r(e.hunks.length,Z(i)+i.deletionCount,e.deletionLines.length),n}function mn(e,t){return e.editSessionDirty===!0&&(delete e.editSessionDirty,Object.assign(e,e.additionLines.length<=1&&e.additionLines.join(``)===``?J(e,t):Wt(e,t)),!0)}function hn(e,t,n){if(an(e.deletionLines,e.additionLines)==null)return[];let i=u({name:e.prevName??e.name,contents:e.deletionLines.join(``)},{name:e.name,contents:e.additionLines.join(``),lang:e.lang},t),a,o=(t,r)=>{a??=gn(e.hunks);for(let e=0;e<=r;e++){let o=a.get(t.deletionLineIndex-e);if(o!=null&&o.additions===t.additions&&o.deletions===t.deletions){if(t.additions>0&&n!=null){for(let e=0;e<t.additions;e++)if(n(o.additionLineIndex+e)!==i.additionLines[t.additionLineIndex+e])return r}return e}}return r},s=[],c=0,l=0;for(let e of i.hunks){r(e,i,o);let t=e.additionCount>0?e.additionLineIndex-c:e.deletionLineIndex-l;c+=t,l+=t;for(let t of e.hunkContent){if(t.type===`context`){c+=t.lines,l+=t.lines;continue}let e=$t(t,0,0);e.additions===0&&(e.additionLineIndex=c),e.deletions===0&&(e.deletionLineIndex=l),s.push(e),c+=e.additions,l+=e.deletions}}return s}function gn(e){let t=new Map;for(let n of e)for(let e of n.hunkContent)e.type===`change`&&(e.additions===0||e.deletions===0)&&t.set(e.deletionLineIndex,e);return t}function _n(e,t,n){let r=e.map((e,t)=>{let n=Z(e);return{deletionStart:n,deletionEnd:n+e.deletionCount,blocks:[],previousSpan:{firstIndex:t,lastIndex:t}}}),i=[],a=0;for(let e of t){let t=e.deletionLineIndex,o=t+e.deletions;for(;a<r.length&&r[a].deletionEnd<t;)i.push(r[a]),a++;let s=i.length>0&&vn(t,o,i[i.length-1])?i.pop():void 0;for(;a<r.length&&r[a].deletionStart<=o;)s=yn(s,r[a]),a++;if(s==null){let c=t,l=o;if((e.deletions===0||e.additions===0)&&n>e.deletions){let e=i[i.length-1]?.deletionEnd??0,s=r[a]?.deletionStart??n;t>e?c--:o<s&&l++}s={deletionStart:c,deletionEnd:l,blocks:[],previousSpan:void 0}}s.deletionStart=Math.min(s.deletionStart,t),s.deletionEnd=Math.max(s.deletionEnd,o),s.blocks.push(e),i.push(s)}for(;a<r.length;)i.push(r[a]),a++;return i}function vn(e,t,n){return e<=n.deletionEnd&&t>=n.deletionStart}function yn(e,t){return e==null?t:(e.deletionStart=Math.min(e.deletionStart,t.deletionStart),e.deletionEnd=Math.max(e.deletionEnd,t.deletionEnd),e.blocks.push(...t.blocks),t.previousSpan!=null&&(e.previousSpan??={...t.previousSpan},e.previousSpan.firstIndex=Math.min(e.previousSpan.firstIndex,t.previousSpan.firstIndex),e.previousSpan.lastIndex=Math.max(e.previousSpan.lastIndex,t.previousSpan.lastIndex)),e)}function bn(e,t){let n=[],r=0,i=0;for(let a of t){let t=a.deletionStart-r;if(t<0)throw Error(`buildRegionHunks: overlapping old-side regions`);r+=t,i+=t;let o=i,s=[];for(let e of a.blocks){let t=e.deletionLineIndex-r,n=e.additionLineIndex-i;if(t<0||t!==n)throw Error(`buildRegionHunks: canonical block context mismatch`);Sn(s,t,i,r),r+=t,i+=n,s.push({...e}),r+=e.deletions,i+=e.additions}let c=a.deletionEnd-r;if(c<0)throw Error(`buildRegionHunks: block exceeds its old-side region`);Sn(s,c,i,r),r+=c,i+=c,n.push(xn(e,{additionStart:o,additionEnd:i,deletionStart:a.deletionStart,deletionEnd:a.deletionEnd},s))}if(e.deletionLines.length-r!==e.additionLines.length-i)throw Error(`buildRegionHunks: trailing context mismatch`);return n}function xn(e,t,n){let r=t.additionEnd-t.additionStart,i=t.deletionEnd-t.deletionStart,a=0,o=0;for(let e of n)e.type===`change`&&(a+=e.additions,o+=e.deletions);let s={collapsedBefore:0,additionStart:Dn(t.additionStart,r),additionCount:r,additionLines:a,additionLineIndex:On(t.additionStart,r),deletionStart:Dn(t.deletionStart,i),deletionCount:i,deletionLines:o,deletionLineIndex:On(t.deletionStart,i),hunkContent:n,hunkSpecs:`@@ -${Dn(t.deletionStart,i)},${i} +${Dn(t.additionStart,r)},${r} @@`,splitLineStart:0,splitLineCount:0,unifiedLineStart:0,unifiedLineCount:0,noEOFCRAdditions:!1,noEOFCRDeletions:!1};return en(s),s}function Sn(e,t,n,r){t>0&&e.push({type:`context`,lines:t,additionLineIndex:n,deletionLineIndex:r})}function Cn(e,t){if(e.length!==t.length)return!0;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(Z(r)!==Z(i)||r.deletionCount!==i.deletionCount||En(r)!==En(i)||r.additionCount!==i.additionCount||r.splitLineCount!==i.splitLineCount||!wn(r,i))return!0}return!1}function wn(e,t){let n=Tn(e),r=Tn(t);for(;;){let e=n.next(),t=r.next();if(e.done===!0||t.done===!0)return e.done===t.done;if(e.value[0]!==t.value[0]||e.value[1]!==t.value[1])return!1}}function*Tn(e){for(let t of e.hunkContent){if(t.type===`context`){for(let e=0;e<t.lines;e++)yield[t.deletionLineIndex+e,t.additionLineIndex+e];continue}let e=Math.max(t.deletions,t.additions);for(let n=0;n<e;n++)yield[n<t.deletions?t.deletionLineIndex+n:void 0,n<t.additions?t.additionLineIndex+n:void 0]}}function En(e){return a(e.additionStart,e.additionCount)}function Z(e){return a(e.deletionStart,e.deletionCount)}function Dn(e,t){return t===0?e:e+1}function On(e,t){return t===0?e-1:e}function kn(e){tn(e);for(let t=0;t<e.hunks.length;t++)Zt(e,t)}function Q(e){let t=e.lang??E(e.name),n=e.lang??(e.prevName==null?`text`:E(e.prevName));return t===`text`&&n===`text`}var An=-1,jn=class{constructor(n={theme:v},r=fe,i,a){e(this,`options`,void 0),e(this,`annotationSlotName`,void 0),e(this,`onRenderUpdate`,void 0),e(this,`workerManager`,void 0),e(this,`__id`,`diff-hunks-renderer:${++An}`),e(this,`highlighter`,void 0),e(this,`diff`,void 0),e(this,`expandedHunks`,new Map),e(this,`deletionAnnotations`,{}),e(this,`additionAnnotations`,{}),e(this,`computedLangs`,[`text`]),e(this,`renderCache`,void 0),e(this,`pendingHighlightResult`,void 0),e(this,`pendingStructuralRows`,void 0),e(this,`editSessionActive`,!1),e(this,`createAnnotationElement`,e=>ie(e)),this.options=n,this.annotationSlotName=r,this.onRenderUpdate=i,this.workerManager=a,a?.isWorkingPool()!==!0&&(this.highlighter=t(n.theme??v)?p():void 0)}cleanUp(){this.endEditSession(),this.recycle(),this.expandedHunks.clear(),this.workerManager=void 0,this.onRenderUpdate=void 0}recycle(){this.highlighter=void 0,this.diff=void 0,this.editSessionActive?(this.renderCache!=null&&(this.renderCache.renderRange=void 0),this.pendingHighlightResult=void 0,this.pendingStructuralRows=void 0):this.clearRenderCache(),this.additionAnnotations={},this.deletionAnnotations={},this.workerManager?.cleanUpTasks(this)}beginEditSession(e,t){let{editSessionActive:n}=this;this.editSessionActive=!0,n||(this.pendingHighlightResult=void 0),this.diff=e,n&&this.renderCache!=null&&this.renderCache.diff!==e&&this.clearRenderCache();let{renderCache:r}=this;if(!e.isPartial&&e.additionLines.length===0){Object.assign(e,Ut(e,this.options.parseDiffOptions)),this.markEditSessionPass(e),this.clearRenderCache();return}if(r==null||n&&r.diff===e)return;let{options:i}=this.getRenderOptions(e),a=r.diff===e,o=t!=null&&R(r.diff,t),{result:s}=r;if(!r.highlighted||s==null||!z(r.options,i)||!a&&!o){this.clearRenderCache();return}a||(this.renderCache={diff:e,options:i,highlighted:!0,result:{...s,code:{...s.code,additionLines:[...s.code.additionLines]}},renderRange:r.renderRange})}endEditSession(){this.editSessionActive=!1,this.pendingHighlightResult=void 0,this.diff??this.clearRenderCache()}editorRenderReady(){return this.renderCache?.options.useTokenTransformer===!0&&this.renderCache.highlighted&&this.renderCache.result!=null}refreshHighlightedResult(){let{diff:e,renderCache:t,workerManager:n}=this;return e==null||t==null||!R(t.diff,e)||Q(e)||$(e,this.getTokenizeMaxLength())?Promise.resolve():!this.editSessionActive&&n?.isWorkingPool()===!0&&e.cacheKey!=null?(n.evictDiffFromCache(e.cacheKey),n.primeDiffHighlightCache(e).then(()=>{this.applyRefreshedResult(e,n.getDiffResultCache(e))}).catch(e=>this.onHighlightError(e))):this.asyncHighlight(e).then(t=>this.applyRefreshedResult(e,t)).catch(e=>this.onHighlightError(e))}applyRefreshedResult(e,t){let{diff:n,renderCache:r}=this;if(t==null||n==null||r==null||!R(n,e)||!R(r.diff,e)||this.editSessionActive)return;let{options:i}=this.getRenderOptions(n);z(i,t.options)&&(this.pendingHighlightResult={diff:n,options:t.options,highlighted:!0,result:t.result},this.onRenderUpdate?.())}get diffCache(){return this.renderCache?.diff??this.diff}clearRenderCache(){this.renderCache=void 0,this.pendingHighlightResult=void 0,this.pendingStructuralRows=void 0}setOptions(e){this.options=e}mergeOptions(e){this.options={...this.options,...e}}expandHunk(e,t,n=this.getOptionsWithDefaults().expansionLineCount){let r={...this.expandedHunks.get(e)??{fromStart:0,fromEnd:0}};(t===`up`||t===`both`)&&(r.fromStart+=n),(t===`down`||t===`both`)&&(r.fromEnd+=n),this.renderCache?.highlighted!==!0&&this.clearRenderCache(),this.expandedHunks.set(e,r)}getExpandedHunk(e){return this.expandedHunks.get(e)??x}getExpandedHunksMap(){return this.expandedHunks}setExpandedHunksMap(e){this.expandedHunks=e}setLineAnnotations(e){this.additionAnnotations={},this.deletionAnnotations={};for(let t of e){let e=(()=>{switch(t.side){case`deletions`:return this.deletionAnnotations;case`additions`:return this.additionAnnotations}})(),n=e[t.lineNumber]??[];e[t.lineNumber]=n,n.push(t)}}updateRenderCache(e,t,n=!1,r,i){this.pendingStructuralRows=void 0;let{renderCache:a}=this;if(a==null)return!1;let{result:o,diff:s}=a;if(o==null)return!1;if(s.isPartial)throw Error(`Could not update render cache for partial diff`);let c=o.code.additionLines,l=this.pendingStructuralRows=n?new Map:void 0,u=[],d=new Map;if(l==null&&r!=null){let t=s.additionLines.length,n=Vn(s.additionLines,i);for(let[i,a]of r){if(i<0||i>t||i===t&&(a===``||!n))continue;let r=s.additionLines[i]??``;r!==a&&(s.additionLines[i]=a,u.push(i),d.set(i,r),e.has(i)||(c[i]=Hn(i,b(a))))}}for(let[t,n]of e){let e=c[t]?.properties??{},i=n.map(e=>e[2]).join(``),a=t<s.additionLines.length,o=a?s.additionLines[t]??``:``,f=b(o);l==null&&a&&r?.has(t)!==!0&&(s.additionLines[t]=Je(o,i),f!==i&&(u.push(t),d.set(t,o)));let p={type:`element`,tagName:`div`,properties:{"data-line":e[`data-line`]??t+1,"data-line-index":e[`data-line-index`]??t,"data-line-type":e[`data-line-type`]??`context`},children:n.map(([e,t,n])=>e===0&&t===``?n===``?{type:`element`,tagName:`br`,properties:{},children:[]}:{type:`text`,value:n}:{type:`element`,tagName:`span`,properties:{"data-char":e,style:`color:${t};`},children:[{type:`text`,value:n}]})};l==null?c[t]=p:l.set(t,p)}let f=!1;if(u.length>0){if(this.editSessionActive){if(s.additionLines.length<=1&&s.additionLines.join(``)===``)this.applyRecomputePreservingSessionType(s,Ut(s,this.options.parseDiffOptions)),f=!0;else if(Ht(s,s.additionLines))this.applyRecomputePreservingSessionType(s,Y(s,s.additionLines,this.options.parseDiffOptions)),f=!0;else{let e=sn(s,u,this.options.parseDiffOptions,d);this.applyExpansionRemap(e),f=e!=null}}else Object.assign(s,qt(s,u,this.options.parseDiffOptions))}return o.baseThemeType=t,a.isDirty=!0,f}applyExpansionRemap(e){e!=null&&(this.expandedHunks=dn(this.expandedHunks,e))}applyDocumentChange(e){let{pendingStructuralRows:t,renderCache:n}=this;this.pendingStructuralRows=void 0;let r=this.diff??n?.diff;if(r==null)return;let i=n?.result;if(r.isPartial)throw Error(`Could not apply document change for partial diff`);let{additionLines:a}=r;if(r.additionLines=Un(e),i!=null&&(i.code.additionLines=Bn(a,r.additionLines,i.code.additionLines,e)),r.additionLines.length<=1&&r.additionLines.join(``)===``?(this.applyRecomputePreservingSessionType(r,Ut(r,this.options.parseDiffOptions)),i!=null&&(i.code.additionLines[0]=Hn(0,e.getLineText(0)))):this.editSessionActive?this.applySessionDocumentChange(r,a):Object.assign(r,Wt(r,this.options.parseDiffOptions)),t!=null&&i!=null)for(let[e,n]of t)e<i.code.additionLines.length&&(i.code.additionLines[e]=n);n!=null&&(n.isDirty=!0)}applySessionDocumentChange(e,t){let{parseDiffOptions:n}=this.options,r=e.additionLines;if(Ht(e,r)){this.applyRecomputePreservingSessionType(e,Y(e,r,n));return}this.applyExpansionRemap(on(e,n,e=>t[e]))}applyRecomputePreservingSessionType(e,t){let n=this.editSessionActive?e.type:void 0;Object.assign(e,t),n!=null&&(e.type=n),this.markEditSessionPass(e)}markEditSessionPass(e){this.editSessionActive&&(e.editSessionDirty=!0)}getUnifiedLineDecoration({lineType:e}){return{gutterLineType:e,contentProperties:{"data-line-type":e}}}getSplitLineDecoration({side:e,type:t}){let n=t===`change`?e===`deletions`?`change-deletion`:`change-addition`:t;return{gutterLineType:n,contentProperties:{"data-line-type":n}}}getOptionsWithDefaults(){let{diffIndicators:e=`bars`,diffStyle:t=`split`,disableBackground:n=!1,disableFileHeader:r=!1,disableLineNumbers:i=!1,disableVirtualizationBuffers:a=!1,collapsed:o=!1,expandUnchanged:s=!1,collapsedContextThreshold:c=1,expansionLineCount:l=100,hunkSeparators:u=`line-info`,lineDiffType:d=`word-alt`,maxLineDiffLength:f=1e3,overflow:p=`scroll`,stickyHeader:m=!1,theme:h=v,headerRenderMode:g=`default`,tokenizeMaxLineLength:_=1e3,tokenizeMaxLength:y=S,useTokenTransformer:b=!1,useCSSClasses:x=!1}=this.options;return{diffIndicators:e,diffStyle:t,disableBackground:n,disableFileHeader:r,disableLineNumbers:i,disableVirtualizationBuffers:a,collapsed:o,expandUnchanged:s,collapsedContextThreshold:c,expansionLineCount:l,hunkSeparators:u,lineDiffType:d,maxLineDiffLength:f,overflow:p,stickyHeader:m,theme:this.workerManager?.getDiffRenderOptions().theme??h,headerRenderMode:g,tokenizeMaxLineLength:_,tokenizeMaxLength:y,useTokenTransformer:b,useCSSClasses:x}}async initializeHighlighter(){return this.highlighter=await d(de(this.computedLangs,{theme:this.getLocalHighlightTheme(),preferredHighlighter:this.workerManager?.getPreferredHighlighter()??this.options.preferredHighlighter})),this.highlighter}hydrate(e){if(e==null)return;this.diff=e;let{options:t}=this.getRenderOptions(e),n=$(e,this.getTokenizeMaxLength()),r=this.workerManager?.getDiffResultCache(e);r!=null&&!z(t,r.options)&&(r=void 0),this.renderCache??={diff:e,hydrated:!0,highlighted:!n&&!Q(e),options:t,result:n?void 0:r?.result,renderRange:void 0},!this.editSessionActive&&this.workerManager?.isWorkingPool()===!0?this.renderCache.result==null&&!n&&this.workerManager.highlightDiffAST(this,this.diff):this.highlighter??(this.computedLangs=Wn(e),this.initializeHighlighter())}getLocalHighlightTheme(){return this.workerManager?.getDiffRenderOptions().theme??this.options.theme??v}getEffectiveCodeOptions(){let e=this.workerManager?.isWorkingPool()===!0?this.workerManager.getDiffRenderOptions():void 0;return{theme:this.getLocalHighlightTheme(),tokenizeMaxLineLength:e?.tokenizeMaxLineLength??this.options.tokenizeMaxLineLength}}getRenderOptions(e){let t=(()=>{if(this.workerManager?.isWorkingPool()===!0){let e=this.workerManager.getDiffRenderOptions();return this.editSessionActive&&e.useTokenTransformer!==!0?{...e,useTokenTransformer:!0}:e}let{theme:e,tokenizeMaxLineLength:t,lineDiffType:n,maxLineDiffLength:r}=this.getOptionsWithDefaults();return{theme:e,useTokenTransformer:this.editSessionActive||this.options.useTokenTransformer===!0,tokenizeMaxLineLength:t,lineDiffType:n,maxLineDiffLength:r}})();this.getOptionsWithDefaults();let{renderCache:n}=this;return n?.result==null||!R(e,n.diff)||!z(t,n.options)?{options:t,forceHighlight:!0}:{options:t,forceHighlight:!1}}getDiffForNextRender(e){let{options:t}=this.getRenderOptions(e);if(this.getReadyRenderResult(e,t)!=null||this.renderCache==null)return e;if(R(this.renderCache.diff,e))return this.renderCache.diff;let n=!(e.additionLines.length>0||e.deletionLines.length>0)||Q(e)||$(e,this.getTokenizeMaxLength());return this.canRenderDiff(e,t,n)?e:this.renderCache.diff}canRenderDiff(e,n,r){let{renderCache:i}=this;return i==null||R(i.diff,e)?!0:r?i.result==null&&i.hydrated!==!0||this.workerManager?.isWorkingPool()===!0||this.highlighter!=null&&t(n.theme):i.result==null&&i.hydrated!==!0?!0:!this.editSessionActive&&this.workerManager?.isWorkingPool()===!0?!i.highlighted:this.highlighter!=null&&t(n.theme)}renderDiff(e=this.diff,n=h){if(this.diff=e,e==null){this.pendingHighlightResult=void 0;return}let{expandUnchanged:r,collapsedContextThreshold:a}=this.getOptionsWithDefaults(),{options:o,forceHighlight:s}=this.getRenderOptions(e),c=this.getReadyRenderResult(e,o);this.pendingHighlightResult=void 0,c!=null&&(this.renderCache={...c,diff:e,renderRange:void 0},s=!1),this.renderCache??={diff:e,highlighted:!1,options:o,result:void 0,renderRange:void 0};let l=e.additionLines.length>0||e.deletionLines.length>0,u=!l||Q(e)||$(e,this.getTokenizeMaxLength()),d=this.canRenderDiff(e,o,u),f=!R(e,this.renderCache.diff),m=!re(this.renderCache.renderRange,n);if(!this.editSessionActive&&this.workerManager?.isWorkingPool()===!0){let t=this.renderCache.result==null&&this.renderCache.highlighted&&!u&&!f&&pe(n);d&&!t&&(u||this.renderCache.result==null||!this.renderCache.highlighted&&(f||m))&&(this.renderCache.diff=e,this.renderCache.options=o,this.renderCache.highlighted=!1,(this.renderCache.result==null||f||m||s)&&(this.renderCache.result=this.workerManager.getPlainDiffAST(e,n.startingLine,n.totalLines,pe(n)||r?!0:this.expandedHunks,a)),this.renderCache.renderRange=n),!u&&l&&(!this.renderCache.highlighted||s)&&this.workerManager.highlightDiffAST(this,e)}else{this.computedLangs=Wn(e),this.highlighter??=p();let n=this.highlighter!=null&&t(o.theme),r=this.highlighter!=null&&i(this.computedLangs),a=!u&&r;if(d&&this.highlighter!=null&&n&&(s||u||!this.renderCache.highlighted&&a||this.renderCache.result==null)){let{result:t,options:n}=this.renderDiffWithHighlighter(e,this.highlighter,u||!r);this.renderCache={diff:e,options:n,highlighted:a,result:t,renderRange:void 0}}(!n||!u&&!r)&&this.asyncHighlight(e).then(({result:t,options:n})=>{this.applyHighlightResult(e,t,n,!u)})}return this.renderCache.result==null?void 0:this.processDiffResult(this.renderCache.diff,n,this.renderCache.result)}async asyncRender(e,t=h){this.diff=e;let{result:n}=await this.asyncHighlight(e);return this.processDiffResult(e,t,n)}createPreElement(e,t,n){let{diffIndicators:r,disableBackground:i,disableLineNumbers:a,overflow:o}=this.getOptionsWithDefaults();return le({type:`diff`,diffIndicators:r,disableBackground:i,disableLineNumbers:a,overflow:o,split:e,totalLines:t,customProperties:n})}async asyncHighlight(e){let n=$(e,this.getTokenizeMaxLength());this.computedLangs=n?[`text`]:Wn(e);let r=this.highlighter!=null&&t(this.getLocalHighlightTheme()),a=n||this.highlighter!=null&&i(this.computedLangs);return(this.highlighter==null||!r||!a)&&(this.highlighter=await this.initializeHighlighter()),this.renderDiffWithHighlighter(e,this.highlighter,n)}renderDiffWithHighlighter(e,t,n=!1){let{options:r}=this.getRenderOptions(e),{collapsedContextThreshold:i}=this.getOptionsWithDefaults(),a=Ft(e,t,r,{forcePlainText:n,expandedHunks:n?!0:void 0,collapsedContextThreshold:i});if(this.editSessionActive&&e.additionLines.length===1&&e.additionLines[0]===``&&a.code.additionLines[0]==null){let t;if(K({diff:e,diffStyle:`both`,expandedHunks:n?!0:void 0,collapsedContextThreshold:i,callback:({additionLine:e})=>{if(e?.lineIndex===0)return t=e,!0}}),t==null)throw Error(`DiffHunksRenderer: missing empty addition line`);a.code.additionLines[0]=Hn(0,``,t.unifiedLineIndex,t.splitLineIndex)}return{result:a,options:r}}onHighlightSuccess(e,t,n,r=!0){this.editSessionActive||this.applyHighlightResult(e,t,n,r)}applyHighlightResult(e,t,n,r=!0){let{diff:i,renderCache:a}=this;i!=null&&a!=null&&R(i,e)&&z(n,this.getRenderOptions(i).options)&&(a.result!=null&&a.highlighted&&z(a.options,n)&&R(a.diff,i)||(this.pendingHighlightResult={diff:i,options:n,highlighted:r,result:t},this.onRenderUpdate?.()))}getMatchingWorkerResultCache(e,t){if(this.editSessionActive)return;let n=this.workerManager?.getDiffResultCache(e);if(n!=null&&z(t,n.options))return n}getReadyRenderResult(e,t){let{pendingHighlightResult:n}=this;if(n!=null&&R(n.diff,e)&&z(n.options,t))return n;let r=this.getMatchingWorkerResultCache(e,t);if(!(r==null||this.hasHighlightedRenderCache(e,t)))return{diff:e,highlighted:!0,...r}}hasHighlightedRenderCache(e,t){let{renderCache:n}=this;return n?.result!=null&&n.highlighted&&R(e,n.diff)&&z(t,n.options)}onHighlightError(e){console.error(e)}getTokenizeMaxLength(){return this.options.tokenizeMaxLength??1e5}processDiffResult(e,t,{code:n,themeStyles:r,baseThemeType:i}){let{diffStyle:a,disableFileHeader:o,expandUnchanged:s,expansionLineCount:c,collapsedContextThreshold:l,hunkSeparators:u}=this.getOptionsWithDefaults(),d=this.renderCache?.isDirty??!1,f=a===`unified`,p=Gn(e,this.options.loadDiffFiles!=null),m=!e.isPartial||p,h=[],g=[],_=[],v=[],{additionLines:y,deletionLines:b}=n,x={rowCount:0,hunkSeparators:u,additionsContentAST:h,deletionsContentAST:g,unifiedContentAST:_,unifiedGutterAST:A(),deletionsGutterAST:A(),additionsGutterAST:A(),expansionLineCount:c,hunkData:v,incrementRowCount(e=1){x.rowCount+=e},pushToGutter(e,t){switch(e){case`unified`:x.unifiedGutterAST.children.push(t);break;case`deletions`:x.deletionsGutterAST.children.push(t);break;case`additions`:x.additionsGutterAST.children.push(t)}}},S=bt({fileDiff:e,errorPrefix:`DiffHunksRenderer.processDiffResult`}),C={size:0,side:void 0,increment(){this.size+=1},flush(){if(a!==`unified`){if(this.size<=0||this.side==null){this.side=void 0,this.size=0;return}this.side===`additions`?(x.pushToGutter(`additions`,j(void 0,`buffer`,this.size)),h?.push(mt(this.size))):(x.pushToGutter(`deletions`,j(void 0,`buffer`,this.size)),g?.push(mt(this.size))),this.size=0,this.side=void 0}}},w=(e,t,n,r,i)=>{x.pushToGutter(e,ne(t,n,r,i))};function T(e){C.flush(),a===`unified`?Ln(`unified`,e,x):(Ln(`deletions`,e,x),Ln(`additions`,e,x))}this.pushFileLevelAnnotations(e,a,t,x),K({diff:e,diffStyle:a,startingLine:t.startingLine,totalLines:t.totalLines,expandedHunks:s?!0:this.expandedHunks,collapsedContextThreshold:l,callback:({hunkIndex:t,hunk:n,collapsedBefore:r,collapsedAfter:i,additionLine:o,deletionLine:s,type:c})=>{let l=s==null?o.splitLineIndex:s.splitLineIndex,f=o==null?s.unifiedLineIndex:o.unifiedLineIndex;a===`split`&&c!==`change`&&C.flush(),r>0&&T({hunkIndex:t,collapsedLines:r,rangeSize:Math.max(n?.collapsedBefore??0,0),hunkSpecs:n?.hunkSpecs,isFirstHunk:t===0,isLastHunk:!1,isExpandable:m});let h=a===`unified`?f:l,g={type:c,hunkIndex:t,lineIndex:h,unifiedLineIndex:f,splitLineIndex:l,deletionLine:s,additionLine:o};if(a===`unified`){let n=this.getUnifiedInjectedRowsForLine?.(g);n?.before!=null&&Pn(n.before,x);let r=s==null?void 0:b[s.lineIndex],i=o==null?void 0:y[o.lineIndex];if(r==null&&i==null){let t=`DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong`;throw console.error(t,{file:e.name}),Error(t)}let a=c===`change`?o==null?`change-deletion`:`change-addition`:c,u=this.getUnifiedLineDecoration({type:c,lineType:a,additionLineIndex:o?.lineIndex,deletionLineIndex:s?.lineIndex});w(`unified`,u.gutterLineType,o==null?s.lineNumber:o.lineNumber,`${f},${l}`,u.gutterProperties),i==null?r!=null&&(r=Rn(r,u.contentProperties,d&&s!=null?{"data-line":s.lineNumber,"data-line-index":`${f},${l}`}:void 0)):i=Rn(i,u.contentProperties,d&&o!=null?{"data-line":o.lineNumber,"data-line-index":`${f},${l}`}:void 0),In({diffStyle:`unified`,type:c,deletionLine:r,additionLine:i,unifiedSpan:this.getAnnotations(`unified`,s?.lineNumber,o?.lineNumber,t,h),createAnnotationElement:e=>this.createAnnotationElement(e),context:x}),n?.after!=null&&Pn(n.after,x)}else{let n=this.getSplitInjectedRowsForLine?.(g);n?.before!=null&&Fn(n.before,x,C);let r=s==null?void 0:b[s.lineIndex],i=o==null?void 0:y[o.lineIndex],a=this.getSplitLineDecoration({side:`deletions`,type:c,lineIndex:s?.lineIndex}),u=this.getSplitLineDecoration({side:`additions`,type:c,lineIndex:o?.lineIndex});if(r==null&&i==null){let t=`DiffHunksRenderer.processDiffResult: deletionLine and additionLine are null, something is wrong`;throw console.error(t,{file:e.name}),Error(t)}let f=(()=>{if(c===`change`){if(i==null)return`additions`;if(r==null)return`deletions`}})();f==null?c===`change`&&C.flush():(C.side!=null&&C.side!==f&&C.flush(),C.side=f,C.increment());let p=this.getAnnotations(`split`,s?.lineNumber,o?.lineNumber,t,h);if(p!=null&&C.size>0&&C.flush(),s!=null){let e=Rn(r,a.contentProperties,d?{"data-line":s.lineNumber,"data-line-index":`${s.unifiedLineIndex},${l}`}:void 0);w(`deletions`,a.gutterLineType,s.lineNumber,`${s.unifiedLineIndex},${l}`,a.gutterProperties),e!=null&&(r=e)}if(o!=null){let e=Rn(i,u.contentProperties,d?{"data-line":o.lineNumber,"data-line-index":`${o.unifiedLineIndex},${l}`}:void 0);w(`additions`,u.gutterLineType,o.lineNumber,`${o.unifiedLineIndex},${l}`,u.gutterProperties),e!=null&&(i=e)}In({diffStyle:`split`,type:c,additionLine:i,deletionLine:r,...p,createAnnotationElement:e=>this.createAnnotationElement(e),context:x}),n?.after!=null&&Fn(n.after,x,C)}let _=a===`split`&&n!=null&&l===n.splitLineStart+n.splitLineCount-1,v=t===e.hunks.length-1&&n!=null&&(a===`split`?l===n.splitLineStart+n.splitLineCount-1:f===n.unifiedLineStart+n.unifiedLineCount-1),E=_?n.noEOFCRDeletions:!1,ee=_?n.noEOFCRAdditions:!1,D=(s?.noEOFCR??!1)||E,O=(o?.noEOFCR??!1)||ee;if(O||D){if(a===`split`&&C.flush(),D){let e=c===`context`||c===`context-expanded`?c:`change-deletion`;a===`unified`?(x.unifiedContentAST.push(ht(e)),x.pushToGutter(`unified`,j(e,`metadata`,1))):(x.deletionsContentAST.push(ht(e)),x.pushToGutter(`deletions`,j(e,`metadata`,1)),O||(x.pushToGutter(`additions`,j(void 0,`buffer`,1)),x.additionsContentAST.push(mt(1))))}if(O){let e=c===`context`||c===`context-expanded`?c:`change-addition`;a===`unified`?(x.unifiedContentAST.push(ht(e)),x.pushToGutter(`unified`,j(e,`metadata`,1))):(x.additionsContentAST.push(ht(e)),x.pushToGutter(`additions`,j(e,`metadata`,1)),D||(x.pushToGutter(`deletions`,j(void 0,`buffer`,1)),x.deletionsContentAST.push(mt(1))))}x.incrementRowCount(1)}u!==`simple`&&u!==`metadata`&&(i>0||v&&p)&&T({hunkIndex:c===`context-expanded`?t:t+1,collapsedLines:v&&p?`unknown`:i,rangeSize:S,hunkSpecs:void 0,isFirstHunk:!1,isLastHunk:!0,isExpandable:m}),x.incrementRowCount(1)}}),a===`split`&&C.flush();let E=Math.max(vt(e.hunks),e.additionLines.length??0,e.deletionLines.length??0),ee=t.bufferBefore>0||t.bufferAfter>0,D=!f&&e.type!==`deleted`,O=!f&&e.type!==`new`,k=x.rowCount>0||ee;h=D&&k?h:void 0,g=O&&k?g:void 0,_=f&&k?_:void 0;let te=this.createPreElement(g!=null&&h!=null,E);return{fileDiff:e,unifiedGutterAST:f&&k?x.unifiedGutterAST.children:void 0,unifiedContentAST:_,deletionsGutterAST:O&&k?x.deletionsGutterAST.children:void 0,deletionsContentAST:g,additionsGutterAST:D&&k?x.additionsGutterAST.children:void 0,additionsContentAST:h,hunkData:v,preNode:te,themeStyles:r,baseThemeType:i,headerElement:o?void 0:this.renderHeader(e),totalLines:E,rowCount:x.rowCount,bufferBefore:t.bufferBefore,bufferAfter:t.bufferAfter,css:``}}renderCodeAST(e,t){let n=e===`unified`?t.unifiedGutterAST:e===`deletions`?t.deletionsGutterAST:t.additionsGutterAST,r=e===`unified`?t.unifiedContentAST:e===`deletions`?t.deletionsContentAST:t.additionsContentAST;if(n==null||r==null)return;let i=A(n);return i.properties.style=`grid-row: span ${t.rowCount}`,[i,Ye(r,t.rowCount)]}renderFullAST(e,t=[]){let n=this.getOptionsWithDefaults().hunkSeparators===`line-info`,r=this.renderCodeAST(`unified`,e);if(r!=null)return t.push(O({tagName:`code`,children:r,properties:{"data-code":``,"data-container-size":n?``:void 0,"data-unified":``}})),{...e.preNode,children:t};let i=this.renderCodeAST(`deletions`,e);i!=null&&t.push(O({tagName:`code`,children:i,properties:{"data-code":``,"data-container-size":n?``:void 0,"data-deletions":``}}));let a=this.renderCodeAST(`additions`,e);return a!=null&&t.push(O({tagName:`code`,children:a,properties:{"data-code":``,"data-container-size":n?``:void 0,"data-additions":``}})),{...e.preNode,children:t}}renderFullHTML(e,t=[]){return n(this.renderFullAST(e,t))}renderPartialHTML(e,t){return n(t==null?e:O({tagName:`code`,children:e,properties:{"data-code":``,"data-container-size":this.getOptionsWithDefaults().hunkSeparators===`line-info`?``:void 0,[`data-${t}`]:``}}))}pushFileLevelAnnotations(e,t,n,r){if(!qe(n))return;let i=e.type===`new`?[]:this.getAnnotationNames(Ke(this.deletionAnnotations)),a=e.type===`deleted`?[]:this.getAnnotationNames(Ke(this.additionAnnotations));if(i.length===0&&a.length===0)return;let{createAnnotationElement:o}=this;if(t===`unified`){In({diffStyle:t,type:`context`,unifiedSpan:{type:`annotation`,hunkIndex:-1,lineIndex:-1,annotations:i.concat(a)},createAnnotationElement:o,context:r});return}In({diffStyle:t,type:`context`,deletionSpan:{type:`annotation`,hunkIndex:-1,lineIndex:-1,annotations:i},additionSpan:{type:`annotation`,hunkIndex:-1,lineIndex:-1,annotations:a},createAnnotationElement:o,context:r})}getAnnotations(e,t,n,r,i){let a={type:`annotation`,hunkIndex:r,lineIndex:i,annotations:[]};if(t!=null)for(let e of this.deletionAnnotations[t]??[])a.annotations.push(this.annotationSlotName(e));let o={type:`annotation`,hunkIndex:r,lineIndex:i,annotations:[]};if(n!=null)for(let t of this.additionAnnotations[n]??[])(e===`unified`?a:o).annotations.push(this.annotationSlotName(t));if(e===`unified`)return a.annotations.length>0?a:void 0;if(o.annotations.length!==0||a.annotations.length!==0)return{deletionSpan:a,additionSpan:o}}getAnnotationNames(e){return e?.map(e=>this.annotationSlotName(e))??[]}renderHeader(e){let{headerRenderMode:t,stickyHeader:n}=this.getOptionsWithDefaults();return oe({fileOrDiff:e,mode:t,stickyHeader:n})}},Mn=new Intl.PluralRules(`en-US`);function Nn(e){return`${e} unmodified line${Mn.select(e)===`one`?``:`s`}`}function Pn(e,t){for(let n of e)t.unifiedContentAST.push(n.content),t.pushToGutter(`unified`,n.gutter),t.incrementRowCount(1)}function Fn(e,t,n){for(let{deletion:r,addition:i}of e){if(r==null&&i==null)continue;let e=r!=null&&i!=null?void 0:r==null?`deletions`:`additions`;(e==null||n.side!==e)&&n.flush(),r!=null&&(t.deletionsContentAST.push(r.content),t.pushToGutter(`deletions`,r.gutter)),i!=null&&(t.additionsContentAST.push(i.content),t.pushToGutter(`additions`,i.gutter)),e!=null&&(n.side=e,n.increment()),t.incrementRowCount(1)}}function In({diffStyle:e,type:t,deletionLine:n,additionLine:r,unifiedSpan:i,deletionSpan:a,additionSpan:o,createAnnotationElement:s,context:c}){let l=!1;if(e===`unified`){if(r==null?n!=null&&c.unifiedContentAST.push(n):c.unifiedContentAST.push(r),i!=null){let e=t===`change`?n==null?`change-addition`:`change-deletion`:t;c.unifiedContentAST.push(s(i)),c.pushToGutter(`unified`,j(e,`annotation`,1)),l=!0}}else if(e===`split`){if(n!=null&&c.deletionsContentAST.push(n),r!=null&&c.additionsContentAST.push(r),a!=null){let e=t===`change`?n==null?`context`:`change-deletion`:t;c.deletionsContentAST.push(s(a)),c.pushToGutter(`deletions`,j(e,`annotation`,1)),l=!0}if(o!=null){let e=t===`change`?r==null?`context`:`change-addition`:t;c.additionsContentAST.push(s(o)),c.pushToGutter(`additions`,j(e,`annotation`,1)),l=!0}}l&&c.incrementRowCount(1)}function Ln(e,{hunkIndex:t,collapsedLines:n,rangeSize:r,hunkSpecs:i,isFirstHunk:a,isLastHunk:o,isExpandable:s},c){if(typeof n==`number`&&n<=0)return;let l=e===`unified`?c.unifiedContentAST:e===`deletions`?c.deletionsContentAST:c.additionsContentAST;if(c.hunkSeparators===`metadata`){i!=null&&(c.pushToGutter(e,B({type:`metadata`,content:i,isFirstHunk:a,isLastHunk:o})),l.push(B({type:`metadata`,content:i,isFirstHunk:a,isLastHunk:o})),e!==`additions`&&c.incrementRowCount(1));return}if(c.hunkSeparators===`simple`){t>0&&(c.pushToGutter(e,B({type:`simple`,isFirstHunk:a,isLastHunk:!1})),l.push(B({type:`simple`,isFirstHunk:a,isLastHunk:!1})),e!==`additions`&&c.incrementRowCount(1));return}let u=_t(e,t),d=r>c.expansionLineCount,f=s?t:void 0,p=typeof n==`number`?Nn(n):`More unchanged context may be available`;c.pushToGutter(e,B({type:c.hunkSeparators,content:p,expandIndex:f,chunked:d,slotName:u,isFirstHunk:a,isLastHunk:o})),l.push(B({type:c.hunkSeparators,content:p,expandIndex:f,chunked:d,slotName:u,isFirstHunk:a,isLastHunk:o})),e!==`additions`&&c.incrementRowCount(1),c.hunkData.push({slotName:u,hunkIndex:t,lines:typeof n==`number`?n:0,lineCountKnown:typeof n==`number`,type:e,expandable:s?{up:!a,down:!o,chunked:d}:void 0})}function Rn(e,t,n){return e==null||e.type!==`element`||t==null&&n==null?e:{...e,properties:{...e.properties,...t,...n}}}function zn(e){return e.length>0&&e[e.length-1]===``?e.length-1:e.length}function Bn(e,t,n,r){let i=zn(e),a=zn(t),o=Math.min(i,a),s=0;for(;s<o&&e[s]===t[s];)s++;let c=0;for(;c<o-s&&e[i-1-c]===t[a-1-c];)c++;let l=Array(t.length);for(let e=0;e<s;e++)l[e]=n[e];for(let e=0;e<c;e++)l[a-1-e]=n[i-1-e];i<e.length&&a<t.length&&(l[t.length-1]=n[e.length-1]);for(let e=s;e<t.length;e++)l[e]??=Hn(e,r.getLineText(e));return l}function Vn(e,t){return t===e.length+1&&e.at(-1)?.endsWith(`
`)===!0}function Hn(e,t,n=e,r=e){return{type:`element`,tagName:`div`,properties:{"data-line":e+1,"data-line-index":`${n},${r}`,"data-line-type":`context`},children:[{type:`element`,tagName:`span`,properties:{"data-char":0},children:[{type:`text`,value:t}]}]}}function Un(e){let t=[];for(let n=0;n<e.lineCount;n++)t.push(e.getLineText(n,!0));return t}function Wn(e){if(e.lang!=null)return[e.lang];let t=E(e.prevName??e.name),n=E(e.name);return t===n?[n]:[t,n]}function $(e,t){return Math.max(e.additionLines.length,e.deletionLines.length)>t}function Gn(e,t){return e.isPartial&&t&&(e.type===`change`||e.type===`rename-changed`)}function Kn({oldFile:e,newFile:t},n){if(e!==void 0||t!==void 0){if(e===void 0||t===void 0)throw Error(`${n}: Pass null for an intentionally missing oldFile or newFile side`);if(e===null){if(t===null)throw Error(`${n}: You must pass oldFile, newFile, or both`);return{oldFile:e,newFile:t}}return{oldFile:e,newFile:t}}}export{de as $,Xe as A,ke as B,st as C,rt as D,it as E,Ge as F,Ae as G,Fe as H,qe as I,Me as J,Pe as K,Ue as L,Je as M,We as N,Qe as O,Ke as P,fe as Q,He as R,ft as S,nt as T,Ne as U,Oe as V,je as W,Se as X,N as Y,pe as Z,z as _,mn as a,ne as at,ut as b,Ft as c,k as ct,U as d,le as et,Dt as f,xt as g,Ot as h,fn as i,j as it,Ye as j,Ze as k,K as l,D as lt,G as m,jn as n,ie as nt,pn as o,A as ot,St as p,F as q,Q as r,re as rt,tn as s,O as st,Kn as t,oe as tt,W as u,ee as ut,R as v,at as w,lt as x,ct as y,Be as z};