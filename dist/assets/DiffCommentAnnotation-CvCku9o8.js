import{c as e}from"./legacyColor-C5BGferB.js";import{r as t}from"./Icon-QjMt6TC9.js";import{Sa as n,Sx as r,_r as i}from"./utils-C04APqPL.js";import{t as a}from"./message-circle-DEY97B9T.js";import{t as o}from"./trash-2-BnR5TZ_Z.js";import{t as s}from"./defineProperty-BbfpZ9Tg.js";import{i as c,n as l,r as u,t as d}from"./classPrivateFieldSet2-BE9xOnOO.js";import{t as f}from"./classPrivateMethodInitSpec-Dhc_bQPo.js";import{w as p}from"./Virtualizer-CFsEiJT2.js";import{o as m}from"./DiffWorkerPoolProvider-DUuLn0_P.js";import{t as h}from"./textarea-CrY9sn98.js";function g({metaKey:e,ctrlKey:t},n=p()){return n?e&&!t:t&&!e}function _(e){if(p()&&e.ctrlKey&&!e.altKey&&!e.metaKey)switch(e.key){case`a`:return`start`;case`e`:return`end`;case`p`:return`up`;case`n`:return`down`;case`f`:return`right`;case`b`:return`left`}if(!e.altKey&&!e.ctrlKey&&!e.metaKey){if(e.key===`ArrowUp`)return`up`;if(e.key===`ArrowDown`)return`down`;if(e.key===`ArrowLeft`)return`left`;if(e.key===`ArrowRight`)return`right`;if(e.key===`Home`)return`start`;if(e.key===`End`)return`end`}if(g(e)){if(e.key===`ArrowLeft`)return`textStart`;if(e.key===`ArrowRight`)return`end`}}var v=new WeakMap,y=x([{bindings:{Tab:`indent`,"shift+Tab":`outdent`,"cmdOrCtrl+[":`indentLess`,"cmdOrCtrl+]":`indentMore`,"cmdOrCtrl+z":`undo`,"cmdOrCtrl+shift+z":`redo`,"cmdOrCtrl+a":`selectAll`,"cmdOrCtrl+d":`findNextMatch`,"cmdOrCtrl+f":`openSearchPanel`,"cmdOrCtrl+alt+f":`openSearchReplacePanel`,"alt+ArrowUp":`moveLineUp`,"alt+ArrowDown":`moveLineDown`,"shift+alt+ArrowUp":`copyLineUp`,"shift+alt+ArrowDown":`copyLineDown`,Escape:`simplifySelection`,"cmdOrCtrl+Enter":`insertBlankLine`,"cmdOrCtrl+/":`toggleComment`,"shift+alt+a":`toggleBlockComment`,"cmdOrCtrl+Home":`moveCursorToDocStart`,"cmdOrCtrl+End":`moveCursorToDocEnd`,"cmdOrCtrl+shift+Home":`expandSelectionDocStart`,"cmdOrCtrl+shift+End":`expandSelectionDocEnd`}},{platform:`mac`,bindings:{"ctrl+k":`deleteHardLineForward`,"ctrl+alt+p":`moveLineUp`,"ctrl+alt+n":`moveLineDown`,"cmd+ArrowUp":`moveCursorToDocStart`,"cmd+ArrowDown":`moveCursorToDocEnd`,"cmd+shift+ArrowUp":`expandSelectionDocStart`,"cmd+shift+ArrowDown":`expandSelectionDocEnd`}},{platform:`windows`,bindings:{"ctrl+y":`redo`}},{platform:`linux`,bindings:{"ctrl+y":`redo`,"ctrl+alt+p":`moveLineUp`,"ctrl+alt+n":`moveLineDown`}}]),b={Backquote:"`",Minus:`-`,Equal:`=`,Comma:`,`,Period:`.`,Slash:`/`,Semicolon:`;`,Quote:`'`,BracketLeft:`[`,BracketRight:`]`,Backslash:`\\`,Space:`Space`};function x(e){let t=v.get(e);if(t===void 0){t={mac:new Map,windows:new Map,linux:new Map};for(let n of e)for(let e of Object.keys(n.bindings)){let r=n.bindings[e];if(r===void 0)continue;let i=e.split(`+`),a=i.pop();for(let e of[`mac`,`windows`,`linux`]){if(n.platform!==void 0&&n.platform!==e)continue;let o=0;for(let t of i)t===`alt`?o|=1:t===`ctrl`?o|=2:t===`cmd`?o|=4:t===`shift`?o|=8:t===`cmdOrCtrl`&&(o|=e===`mac`?4:2);let s=t[e].get(o);s===void 0&&(s=new Map,t[e].set(o,s)),s.set(a,r)}}v.set(e,t)}return t}function S(e,t,n=p()){let r=e.key===` `?`Space`:e.key.length===1?e.key.toLowerCase():e.key,i=e.code??``,a=i.startsWith(`Key`)&&i.length===4?i.slice(3).toLowerCase():i.startsWith(`Digit`)&&i.length===6?i.slice(5):b[i],o=n?`mac`:globalThis.navigator?.platform.includes(`Linux`)===!0?`linux`:`windows`,s=+!!e.altKey|(e.ctrlKey?2:0)|(e.metaKey?4:0)|(e.shiftKey?8:0);if(t!==void 0){let e=x(t)[o].get(s),n=e?.get(r)??(a===void 0?void 0:e?.get(a));if(n!==void 0)return n}let c=y[o].get(s);return c?.get(r)??(a===void 0?void 0:c?.get(a))}function C(e,t=p()){if(!e.altKey&&g(e,t)&&((e.key.length===1?e.key.toLowerCase():e.key)===`g`||e.code===`KeyG`))return e.shiftKey?`previous`:`next`}var w,T,E,D,O,k,A,j,M,N,P,F=1e5,I=10,L=13,R=`\`~!@#$%^&*()-=+[{]}\\|;:'",.<>/?`,z=(w=class{constructor(e,t,n,r,i,a,o,c){s(this,`source`,void 0),s(this,`offset`,void 0),s(this,`length`,void 0),s(this,`lineOffsetStart`,void 0),s(this,`lineOffsetEnd`,void 0),s(this,`hasVirtualTrailingCRBreak`,void 0),s(this,`firstCharCode`,void 0),s(this,`lastCharCode`,void 0),this.source=e,this.offset=t,this.length=n,this.lineOffsetStart=r,this.lineOffsetEnd=i,this.hasVirtualTrailingCRBreak=a,this.firstCharCode=o,this.lastCharCode=c}get lineBreakCount(){return this.lineOffsetEnd-this.lineOffsetStart+ +!!this.hasVirtualTrailingCRBreak}},s(w,`Original`,0),s(w,`Added`,1),w),B=class{constructor(e){s(this,`text`,void 0),s(this,`lineOffsets`,void 0),this.text=e,this.lineOffsets=m(e)}append(e){let t=this.text.length;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);(r===I||r===L)&&(r===L&&e.charCodeAt(n+1)===I&&n++,this.lineOffsets.push(t+n+1))}return this.text+=e,t}},V=class{constructor(e,t=e.length,n=e.lineBreakCount,r=e.firstCharCode,i=e.lastCharCode){s(this,`piece`,void 0),s(this,`subtreeLength`,void 0),s(this,`subtreeLineBreakCount`,void 0),s(this,`subtreeFirstCharCode`,void 0),s(this,`subtreeLastCharCode`,void 0),s(this,`left`,null),s(this,`right`,null),s(this,`parent`,null),s(this,`priority`,0),this.piece=e,this.subtreeLength=t,this.subtreeLineBreakCount=n,this.subtreeFirstCharCode=r,this.subtreeLastCharCode=i}updateSubtreeLength(){this.subtreeLength=(this.left?.subtreeLength??0)+this.piece.length+(this.right?.subtreeLength??0),this.subtreeLineBreakCount=(this.left?.subtreeLineBreakCount??0)+this.piece.lineBreakCount+(this.right?.subtreeLineBreakCount??0)-+!!J(this.left?.subtreeLastCharCode,this.piece.firstCharCode)-!!J(this.piece.lastCharCode,this.right?.subtreeFirstCharCode),this.subtreeFirstCharCode=this.left?.subtreeFirstCharCode??this.piece.firstCharCode,this.subtreeLastCharCode=this.right?.subtreeLastCharCode??this.piece.lastCharCode}},ee=(T=new WeakMap,E=new WeakMap,D=new WeakMap,O=new WeakMap,k=new WeakMap,A=new WeakMap,j=new WeakMap,M=new WeakMap,N=new WeakMap,P=new WeakSet,class{constructor(e){f(this,P),c(this,T,void 0),c(this,E,new B(``)),c(this,D,null),c(this,O,0),c(this,k,0),c(this,A,null),c(this,j,null),c(this,M,null),c(this,N,2654435769),d(T,this,new B(e));let t=u(P,this,U).call(this,z.Original,0,e.length);d(D,this,t.length>0?u(P,this,pe).call(this,t):null),d(O,this,l(D,this)?.subtreeLength??0),d(k,this,(l(D,this)?.subtreeLineBreakCount??0)+1)}get lineCount(){return l(k,this)}getText(e){if(e===void 0)return u(P,this,ce).call(this);let t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this.getTextSlice(t,n)}getLineText(e,t=!1){if(l(A,this)!==null&&l(A,this)[0]===e&&l(A,this)[1]===t)return l(A,this)[2];let n=u(P,this,ie).call(this,e);if(n===void 0)throw Error(`Line index out of range: ${e}`);let r=this.getTextSlice(n[0],n[1],!t);return d(A,this,[e,t,r]),d(j,this,[e,t,r.length]),r}getLineLength(e,t=!1){let n=l(j,this),r=l(A,this);if(n!==null&&n[0]===e&&n[1]===t)return n[2];if(r!==null&&r[0]===e&&r[1]===t){let n=r[2].length;return d(j,this,[e,t,n]),n}let i=u(P,this,ie).call(this,e);if(i===void 0)throw Error(`Line index out of range: ${e}`);let[a,o]=i,s=o-a;if(!t)for(;s>0&&ye(this.charAt(a+s-1).charCodeAt(0));)s--;return d(j,this,[e,t,s]),s}getTextSlice(e,t,n=!1){if(e>=t)return``;let r=q(e,0,l(O,this)),i=q(t,r,l(O,this));if(r>=i)return``;let a=u(P,this,ne).call(this,r);if(a===void 0)return``;let o=[],[s,c]=a,d=i-r;for(;s!==null&&d>0;){let e=Math.min(s.piece.length-c,d),t=u(P,this,H).call(this,s.piece.source),r=s.piece.offset+c,i=r+e;if(n)for(;i>r&&ye(t.text.charCodeAt(i-1));)i--;o.push(t.text.slice(r,i)),d-=e,c=0,s=u(P,this,re).call(this,s)}return o.join(``)}charAt(e){let t=u(P,this,ne).call(this,e);if(t===void 0)return``;let[n,r]=t;return u(P,this,H).call(this,n.piece.source).text.charAt(n.piece.offset+r)}includes(e){if(e.length===0)return!0;let t=be(e),n=0,r=!1;return u(P,this,le).call(this,i=>{for(let a=i.start;a<i.end;a++){let o=i.text.charCodeAt(a);for(;n>0&&o!==e.charCodeAt(n);)n=t[n-1];if(o===e.charCodeAt(n)&&n++,n===e.length)return r=!0,!1}return!0}),r}findNextNonOverlappingSubstring(e,t){if(e.length===0||e.length>l(O,this))return;let n=xe(t,l(O,this)),r=n.reduce((e,[,t])=>Math.max(e,t),0),i=be(e),a=0,o=0,s,c;return u(P,this,le).call(this,t=>{for(let l=t.start;l<t.end;l++){let u=t.text.charCodeAt(l);for(;a>0&&u!==e.charCodeAt(a);)a=i[a-1];if(u===e.charCodeAt(a)&&a++,a===e.length){let t=o-e.length+1;if(!Se(n,t,t+e.length)){if(t>=r)return c=t,!1;s??=t}a=i[a-1]}o++}return!0}),c??s}search(e){if(e.text.length===0||l(O,this)===0||e.text.includes(`
`)||e.text.includes(`\r`)||e.regex&&(e.text.includes(`\\n`)||e.text.includes(`\\r`)))return[];let t;try{t=ke(e.text,e.regex,e.caseSensitive)}catch{return[]}return u(P,this,te).call(this,t,e.wholeWord,F)}insert(e,t){if(e.length===0)return;let n=q(t,0,l(O,this));u(P,this,ue).call(this,n,n,e),u(P,this,de).call(this)}delete(e,t){if(t<=0||l(O,this)===0)return;let n=q(e,0,l(O,this)),r=q(n+t,n,l(O,this));n!==r&&(u(P,this,ue).call(this,n,r,``),u(P,this,de).call(this))}applyEdits(e){if(e.length!==0){for(let t=e.length-1;t>=0;t--){let n=e[t],r=q(n.start,0,l(O,this)),i=q(n.end,r,l(O,this));u(P,this,ue).call(this,r,i,n.text)}u(P,this,de).call(this)}}positionAt(e){let t=q(e,0,l(O,this));if(l(O,this)===0)return{line:0,character:0};let n=u(P,this,ae).call(this,t),r=t-(n===0?0:u(P,this,oe).call(this,n-1));return d(M,this,[n,r,t]),{line:n,character:r}}positionsAt(e){let t=Array.from({length:e.length});if(e.length===0)return t;if(l(O,this)===0)return t.fill({line:0,character:0});for(let n=0;n<e.length;n++)t[n]=this.positionAt(e[n]);return t}offsetAt(e){if(e.line<0||l(O,this)===0)return 0;if(e.line>=l(k,this))throw Error(`Line index out of range: ${e.line}`);let t=l(M,this);if(t!==null&&t[0]===e.line&&t[1]===e.character)return t[2];let n=u(P,this,ie).call(this,e.line);if(n===void 0)throw Error(`Line index out of range: ${e.line}`);let r=q(e.character,0,n[1]-n[0]);return n[0]+r}});function te(e,t,n){let r=[],i=u(P,this,ce).call(this),a=i.length,o=m(i);for(let s=0;s<o.length;s++){let c=o[s],l=o[s+1]??a;for(;l>c&&ye(i.charCodeAt(l-1));)l--;let u=i.slice(c,l);e.lastIndex=0;let d;for(;(d=e.exec(u))!==null;){let a=d.index,o=d[0];if(o.length===0){e.lastIndex=Me(u,a);continue}let s=c+a;if((!t||Oe(i,s,o.length))&&(r.push([s,s+o.length]),r.length>=n))return r;a===e.lastIndex&&(e.lastIndex=Me(u,a))}}return r}function ne(e){if(e<0||e>=l(O,this))return;let t=l(D,this),n=e;for(;t!==null;){let e=t.left?.subtreeLength??0;if(n<e){t=t.left;continue}if(n-=e,n<t.piece.length)return[t,n];n-=t.piece.length,t=t.right}}function re(e){if(e.right!==null){let t=e.right;for(;t.left!==null;)t=t.left;return t}let t=e;for(;t.parent!==null&&t===t.parent.right;)t=t.parent;return t.parent}function ie(e){if(e<0)throw Error(`Line index out of range: ${e}`);if(l(O,this)===0){if(e===0)return[0,0];throw Error(`Line index out of range: ${e}`)}if(e>=l(k,this))throw Error(`Line index out of range: ${e}`);return[e===0?0:u(P,this,oe).call(this,e-1),e<l(k,this)-1?u(P,this,oe).call(this,e):l(O,this)]}function ae(e){let t=l(D,this),n=q(e,0,l(O,this)),r=0;for(;t!==null;){let e=t.left?.subtreeLength??0;if(n<e){t=t.left;continue}if(r+=(t.left?.subtreeLineBreakCount??0)-+!!J(t.left?.subtreeLastCharCode,t.piece.firstCharCode),n-=e,n<=t.piece.length){let e=u(P,this,H).call(this,t.piece.source),i=Math.min(Te(e.lineOffsets,t.piece.offset+n),t.piece.lineOffsetEnd);return r+=i-t.piece.lineOffsetStart,n===t.piece.length&&t.piece.hasVirtualTrailingCRBreak&&r++,n===t.piece.length&&J(t.piece.lastCharCode,u(P,this,re).call(this,t)?.piece.firstCharCode)&&r--,r}r+=t.piece.lineBreakCount-+!!J(t.piece.lastCharCode,t.right?.subtreeFirstCharCode),n-=t.piece.length,t=t.right}return l(k,this)-1}function oe(e){let t=l(D,this),n=e,r=0,i;for(;t!==null;){let e=(t.left?.subtreeLineBreakCount??0)-+!!J(t.left?.subtreeLastCharCode,t.piece.firstCharCode);if(n<e){i=t.piece.firstCharCode,t=t.left;continue}let a=t.left?.subtreeLength??0;r+=a,n-=e;let o=t.right?.subtreeFirstCharCode??i,s=t.piece.lineBreakCount-+!!J(t.piece.lastCharCode,o);if(n<s)return r+u(P,this,se).call(this,t.piece,n);r+=t.piece.length,n-=s,t=t.right}return l(O,this)}function se(e,t){return t<e.lineOffsetEnd-e.lineOffsetStart?u(P,this,H).call(this,e.source).lineOffsets[e.lineOffsetStart+t]-e.offset:e.length}function ce(){let e=[];return u(P,this,le).call(this,t=>{e.push(t.text.slice(t.start,t.end))}),e.join(``)}function le(e){u(P,this,ve).call(this,l(D,this),t=>{let n=u(P,this,H).call(this,t.piece.source);return e({text:n.text,lineOffsets:n.lineOffsets,lineOffsetStart:t.piece.lineOffsetStart,lineOffsetEnd:t.piece.lineOffsetEnd,start:t.piece.offset,end:t.piece.offset+t.piece.length})})}function H(e){return e===z.Original?l(T,this):l(E,this)}function U(e,t,n){let r=u(P,this,H).call(this,e),i=t+n,a=Te(r.lineOffsets,t),o=Te(r.lineOffsets,i),s=r.text.charCodeAt(i-1);return new z(e,t,n,a,o,s===L&&r.lineOffsets[o-1]!==i,r.text.charCodeAt(t),s)}function ue(e,t,n){if(e===t&&n.length===0)return;let[r,i]=u(P,this,me).call(this,l(D,this),e),a=u(P,this,he).call(this,i,t-e),o;if(n.length>0){let e=u(P,this,U).call(this,z.Added,l(E,this).append(n),n.length);o=u(P,this,K).call(this,u(P,this,ge).call(this,r,e),a)}else{let[e,t]=u(P,this,_e).call(this,a);o=e===void 0?r:u(P,this,K).call(this,u(P,this,ge).call(this,r,e),t)}o!==null&&(o.parent=null),d(D,this,o),d(O,this,o?.subtreeLength??0),d(k,this,(o?.subtreeLineBreakCount??0)+1)}function de(){d(A,this,null),d(j,this,null),d(M,this,null)}function fe(){return d(N,this,Math.imul(l(N,this),1664525)+1013904223>>>0),l(N,this)}function pe(e){let t=new V(e);return t.priority=u(P,this,fe).call(this),t}function W(e,t){e.left=t,t!==null&&(t.parent=e)}function G(e,t){e.right=t,t!==null&&(t.parent=e)}function me(e,t){if(e===null)return[null,null];if(t<=0)return[null,e];if(t>=e.subtreeLength)return[e,null];let n=e.left?.subtreeLength??0;if(t<=n){let[n,r]=u(P,this,me).call(this,e.left,t);return u(P,this,W).call(this,e,r),e.updateSubtreeLength(),[n,e]}let r=e.piece.length;if(t>=n+r){let[i,a]=u(P,this,me).call(this,e.right,t-n-r);return u(P,this,G).call(this,e,i),e.updateSubtreeLength(),[e,a]}let i=t-n,a=new V(u(P,this,U).call(this,e.piece.source,e.piece.offset,i)),o=new V(u(P,this,U).call(this,e.piece.source,e.piece.offset+i,r-i));return a.priority=e.priority,o.priority=e.priority,u(P,this,W).call(this,a,e.left),u(P,this,G).call(this,o,e.right),a.updateSubtreeLength(),o.updateSubtreeLength(),[a,o]}function he(e,t){if(e===null||t>=e.subtreeLength)return null;if(t<=0)return e;let n=e.left?.subtreeLength??0;if(t<=n)return u(P,this,W).call(this,e,u(P,this,he).call(this,e.left,t)),e.updateSubtreeLength(),e;let r=n+e.piece.length;if(t>=r)return u(P,this,he).call(this,e.right,t-r);let i=t-n,a=new V(u(P,this,U).call(this,e.piece.source,e.piece.offset+i,e.piece.length-i));return a.priority=e.priority,u(P,this,G).call(this,a,e.right),a.updateSubtreeLength(),a}function K(e,t){return e===null?t:t===null?e:e.priority>=t.priority?(u(P,this,G).call(this,e,u(P,this,K).call(this,e.right,t)),e.updateSubtreeLength(),e):(u(P,this,W).call(this,t,u(P,this,K).call(this,e,t.left)),t.updateSubtreeLength(),t)}function ge(e,t){if(e===null)return u(P,this,pe).call(this,t);let n=e;for(;n.right!==null;)n=n.right;if(Ce(n.piece,t)){n.piece=we(n.piece,t);for(let t=n;t!==null&&(t.updateSubtreeLength(),t!==e);)t=t.parent;return e}return u(P,this,K).call(this,e,u(P,this,pe).call(this,t))}function _e(e){if(e===null)return[void 0,null];if(e.left===null)return[e.piece,e.right];let[t,n]=u(P,this,_e).call(this,e.left);return u(P,this,W).call(this,e,n),e.updateSubtreeLength(),[t,e]}function ve(e,t){return e===null?!0:!u(P,this,ve).call(this,e.left,t)||t(e)===!1?!1:u(P,this,ve).call(this,e.right,t)}function ye(e){return e===10||e===13}function q(e,t,n){return Math.min(Math.max(e,t),n)}function be(e){let t=Array.from({length:e.length}).fill(0),n=0;for(let r=1;r<e.length;r++){let i=e.charCodeAt(r);for(;n>0&&i!==e.charCodeAt(n);)n=t[n-1];i===e.charCodeAt(n)&&n++,t[r]=n}return t}function xe(e,t){let n=[];for(let[r,i]of e){let e=q(r,0,t),a=q(i,e,t);e<a&&n.push([e,a])}n.sort((e,t)=>e[0]-t[0]);let r=[];for(let e of n){let t=r[r.length-1];if(t!==void 0&&e[0]<=t[1]){t[1]=Math.max(t[1],e[1]);continue}r.push(e)}return r}function Se(e,t,n){let r=0,i=e.length;for(;r<i;){let n=r+Math.floor((i-r)/2);e[n][1]<=t?r=n+1:i=n}let a=e[r];return a!==void 0&&a[0]<n}function Ce(e,t){return e.source===t.source&&e.offset+e.length===t.offset&&!J(e.lastCharCode,t.firstCharCode)}function we(e,t){return new z(e.source,e.offset,e.length+t.length,e.lineOffsetStart,t.lineOffsetEnd,t.hasVirtualTrailingCRBreak,e.firstCharCode,t.lastCharCode)}function J(e,t){return e===L&&t===I}function Te(e,t){let n=0,r=e.length;for(;n<r;){let i=n+Math.floor((r-n)/2);e[i]<=t?n=i+1:r=i}return n}function Ee(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function De(e){if(e<=32||e===127)return!0;let t=String.fromCharCode(e);return R.includes(t)}function Oe(e,t,n){let r=t<=0||De(e.charCodeAt(t-1)),i=t+n>=e.length||De(e.charCodeAt(t+n));return r&&i}function ke(e,t,n){let r=t?e:Ee(e);return new RegExp(r,`g${n?``:`i`}${t?`m`:``}`)}function Ae(e,t){return e.replace(/\$([$&]|\d+)/g,(e,n)=>n===`$`?`$`:n===`&`?t[0]??``:t[Number(n)]??``)}function je(e,t,n,r,i,a){if(!r.regex)return r.replaceText;let o=e(i),s=n(o.line),c=i-t({line:o.line,character:0}),l;try{l=ke(r.text,!0,r.caseSensitive)}catch{return r.replaceText}l.lastIndex=c;let u=l.exec(s);return u===null||u.index!==c||u[0].length!==a-i?r.replaceText:Ae(r.replaceText,u)}function Me(e,t){if(t+1<e.length){let n=e.charCodeAt(t),r=e.charCodeAt(t+1);if(n>=55296&&n<=56319&&r>=56320&&r<=57343)return t+2}return t+1}function Y(e,t,n){let{style:r,dataset:i,children:a,...o}=t??{},s=document.createElement(e);return Object.assign(s,o),r!==void 0&&(typeof r==`string`?s.style.cssText=r:Object.assign(s.style,r)),i!==void 0&&(typeof i==`string`?s.dataset[i]=``:Array.isArray(i)?i.forEach(e=>{s.dataset[e]=``}):Object.assign(s.dataset,i)),a!==void 0&&s.replaceChildren(...a),n!==void 0&&n.appendChild(s),s}function Ne(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Pe(e,t=`line`){let n=e.dataset[t];if(n===void 0)return;let r=parseInt(n,10);if(!Number.isNaN(r))return r}function Fe(e,t){if(e.nodeType===3){let n=e.textContent?.length??0;return Math.max(0,Math.min(t,n))}return e.nodeType===1?Math.max(0,Math.min(t,e.childNodes.length)):0}function Ie(e,t){return Object.assign(e,t)}function Le(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function Re(e,t=1e3){return Math.round(e*t)/t}function ze(e){return e.endsWith(`
`)||e.endsWith(`\r`)}function Be(e){if(typeof Intl<`u`&&typeof Intl.Segmenter==`function`)return new Intl.Segmenter(void 0,e)}var Ve,He=!1;function Ue(){return He||=(Ve=Be({granularity:`grapheme`}),!0),Ve}function We(e){let t=e.ownerDocument,n=e.parentElement;for(;n!=null&&n!==t.body&&n!==t.documentElement;){let e=n.ownerDocument.defaultView?.getComputedStyle(n).overflowY;if(e===`auto`||e===`scroll`||e===`overlay`)return n;n=n.parentElement}return t}var Ge=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-editor-icon-close" viewBox="0 0 16 16">
    <path fill="currentColor" d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L8 6.93934L11.7197 3.21967C12.0126 2.92678 12.4874 2.92678 12.7803 3.21967C13.0732 3.51256 13.0732 3.98744 12.7803 4.28033L9.06066 8L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L8 9.06066L4.28033 12.7803C3.98744 13.0732 3.51256 13.0732 3.21967 12.7803C2.92678 12.4874 2.92678 12.0126 3.21967 11.7197L6.93934 8L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-arrow-up" viewBox="0 0 16 16">
    <path fill="currentColor" transform="rotate(-90 8 8)" d="M8.46967 2.21967C8.17678 2.51256 8.17678 2.98744 8.46967 3.28033L12.4393 7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H12.4393L8.46967 12.7197C8.17678 13.0126 8.17678 13.4874 8.46967 13.7803C8.76256 14.0732 9.23744 14.0732 9.53033 13.7803L14.7803 8.53033C15.0732 8.23744 15.0732 7.76256 14.7803 7.46967L9.53033 2.21967C9.23744 1.92678 8.76256 1.92678 8.46967 2.21967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-arrow-down" viewBox="0 0 16 16">
    <path fill="currentColor" transform="rotate(90 8 8)" d="M8.46967 2.21967C8.17678 2.51256 8.17678 2.98744 8.46967 3.28033L12.4393 7.25H1.75C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75H12.4393L8.46967 12.7197C8.17678 13.0126 8.17678 13.4874 8.46967 13.7803C8.76256 14.0732 9.23744 14.0732 9.53033 13.7803L14.7803 8.53033C15.0732 8.23744 15.0732 7.76256 14.7803 7.46967L9.53033 2.21967C9.23744 1.92678 8.76256 1.92678 8.46967 2.21967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-case" viewBox="0 0 16 16">
    <path fill="currentColor" d="M12.2969 12.9969C10.7109 12.9969 9.61719 12.0125 9.61719 10.5047C9.61719 9.06719 10.6172 8.16094 12.5 8.15312H14.6641V7.31719C14.6641 6.23906 14.0391 5.64531 12.9297 5.64531C11.875 5.64531 11.2734 6.18437 11.1953 7.00469H9.92969C10.0156 5.56719 10.9922 4.52031 12.9766 4.52031C14.7266 4.52031 16 5.47344 16 7.2V12.8641H14.7109V11.8406H14.6719C14.2578 12.5047 13.5078 12.9969 12.2969 12.9969ZM12.6562 11.8797C13.8047 11.8797 14.6641 11.1609 14.6641 10.1375V9.18437H12.6016C11.4766 9.18437 10.9922 9.71562 10.9922 10.4578C10.9922 11.4266 11.7969 11.8797 12.6562 11.8797Z"></path>
    <path fill="currentColor" d="M1.42188 12.8641H0L3.79688 2H5.1875L8.98438 12.8641H7.54688L6.46875 9.66094H2.5L1.42188 12.8641ZM4.50781 3.60938H4.46875L2.86719 8.55937H6.10156L4.50781 3.60938Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-whole-word" viewBox="0 0 16 16">
    <path fill="currentColor" d="M11.4089 9.99449C11.1417 9.99449 10.8961 9.95595 10.6722 9.87887C10.4519 9.80179 10.2605 9.69167 10.098 9.54852C9.93551 9.40537 9.81453 9.23469 9.73508 9.03648H9.67007V9.91191H8.5V2H9.70258V5.01721H9.76758C9.81092 4.86671 9.88314 4.7309 9.98426 4.60977C10.089 4.48497 10.2136 4.37853 10.358 4.29043C10.5025 4.19867 10.6668 4.13076 10.851 4.08672C11.0352 4.039 11.2302 4.01514 11.436 4.01514C11.8802 4.01514 12.2648 4.11792 12.5898 4.32347C12.9149 4.52535 13.164 4.81532 13.3374 5.19339C13.5107 5.57146 13.5974 6.02478 13.5974 6.55334V7.45079C13.5974 7.97568 13.5089 8.429 13.332 8.81074C13.1586 9.1888 12.9076 9.48061 12.579 9.68617C12.2504 9.89172 11.8604 9.99449 11.4089 9.99449ZM11.0785 8.99243C11.353 8.99243 11.5859 8.92636 11.7773 8.79422C11.9723 8.66208 12.1204 8.46937 12.2215 8.2161C12.3226 7.95916 12.3732 7.65267 12.3732 7.29663V6.73503C12.3732 6.37164 12.3208 6.06332 12.2161 5.81005C12.115 5.55311 11.9669 5.35673 11.7719 5.22092C11.5769 5.08511 11.3385 5.01721 11.0568 5.01721C10.7824 5.01721 10.5422 5.08328 10.3364 5.21542C10.1341 5.34389 9.97704 5.52925 9.86509 5.77151C9.75675 6.01009 9.70258 6.2964 9.70258 6.63042V7.47281C9.70258 7.77013 9.76036 8.03441 9.87592 8.26566C9.99509 8.49323 10.1576 8.67125 10.3635 8.79972C10.5729 8.92819 10.8113 8.99243 11.0785 8.99243Z"></path>
    <path fill="currentColor" d="M4.70482 9.99449C4.15229 9.99449 3.70087 9.83482 3.35057 9.51548C3.00388 9.19247 2.83054 8.75935 2.83054 8.2161C2.83054 7.70223 3.00207 7.28745 3.34515 6.97178C3.69184 6.65244 4.19562 6.49277 4.8565 6.49277H6.30284V5.94769C6.30284 5.61367 6.20533 5.36774 6.01032 5.20991C5.81531 5.04841 5.55349 4.96765 5.22485 4.96765C5.00817 4.96765 4.82941 4.99702 4.68857 5.05575C4.54773 5.11081 4.43758 5.18789 4.35813 5.28699C4.27868 5.38243 4.22271 5.49621 4.19021 5.62835H3.04722C3.06527 5.3861 3.12305 5.16586 3.22056 4.96765C3.32168 4.76577 3.46252 4.59326 3.64309 4.4501C3.82727 4.30328 4.05297 4.19133 4.32021 4.11425C4.59106 4.03716 4.90525 3.99862 5.26277 3.99862C5.67086 3.99862 6.04463 4.06286 6.38409 4.19133C6.72356 4.31613 6.99441 4.52168 7.19665 4.80798C7.39888 5.09429 7.5 5.4797 7.5 5.96421V9.9064H6.35701V9.1521H6.30284C6.21978 9.29892 6.10783 9.43657 5.96698 9.56504C5.82614 9.69351 5.65099 9.79812 5.44153 9.87887C5.23569 9.95595 4.99012 9.99449 4.70482 9.99449ZM5.07318 9.04749C5.3043 9.04749 5.51196 8.99977 5.69613 8.90434C5.88031 8.80523 6.02657 8.67309 6.13491 8.50791C6.24686 8.34274 6.30284 8.1537 6.30284 7.94081V7.31314H5.04609C4.69579 7.31314 4.43939 7.39206 4.27688 7.5499C4.11798 7.70773 4.03853 7.90961 4.03853 8.15554C4.03853 8.4602 4.14326 8.68594 4.35272 8.83276C4.56578 8.97591 4.80594 9.04749 5.07318 9.04749Z"></path>
    <path fill="currentColor" d="M2.5 12.5L13.5 12.5C14.3284 12.5 15 11.8284 15 11V9.5C15 9.22386 15.2239 9 15.5 9C15.7761 9 16 9.22386 16 9.5V11C16 12.3807 14.8807 13.5 13.5 13.5L2.5 13.5C1.11929 13.5 -7.56324e-07 12.3807 0 11L6.55675e-08 9.5C3.58362e-07 9.22386 0.223858 9 0.5 9C0.776142 9 1 9.22386 1 9.5L1 11C0.999999 11.8284 1.67157 12.5 2.5 12.5Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-regex" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8.60788 6.59074C8.78227 6.46701 9.02141 6.60508 9.00146 6.81797L8.77564 9.22666C8.76189 9.37331 8.87726 9.5 9.02455 9.5H9.97548C10.1228 9.5 10.2381 9.37331 10.2244 9.22667L9.99858 6.81801C9.97862 6.60513 10.2178 6.46706 10.3922 6.59079L12.3652 7.99066C12.4853 8.07589 12.6527 8.03932 12.7264 7.91177L13.2018 7.08823C13.2755 6.96068 13.2234 6.79742 13.0896 6.73601L10.8907 5.72723C10.6963 5.63807 10.6963 5.36193 10.8907 5.27277L13.0896 4.264C13.2234 4.20258 13.2755 4.03932 13.2018 3.91177L12.7263 3.08824C12.6527 2.96068 12.4853 2.92411 12.3652 3.00934L10.3922 4.40921C10.2178 4.53294 9.97862 4.39486 9.99858 4.18198L10.2244 1.77334C10.2381 1.62669 10.1228 1.5 9.97548 1.5H9.02455C8.87726 1.5 8.76189 1.62669 8.77564 1.77334L9.00146 4.18203C9.02141 4.39491 8.78227 4.53298 8.60788 4.40926L6.63479 3.00934C6.51466 2.92411 6.34726 2.96068 6.27362 3.08823L5.79815 3.91177C5.72451 4.03932 5.77654 4.20258 5.91041 4.26399L8.10929 5.27277C8.30363 5.36193 8.30363 5.63807 8.10929 5.72723L5.91041 6.73601C5.77653 6.79742 5.7245 6.96068 5.79814 7.08824L6.27361 7.91177C6.34725 8.03932 6.51466 8.07589 6.63478 7.99066L8.60788 6.59074Z"></path>
    <path fill="currentColor" d="M4 11C3.44772 11 3 11.4477 3 12V13C3 13.5523 3.44772 14 4 14H5C5.55228 14 6 13.5523 6 13V12C6 11.4477 5.55228 11 5 11H4Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-replace" viewBox="0 0 16 16">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.28033 5.71967C5.57322 6.01256 5.57322 6.48744 5.28033 6.78033L3.56066 8.5H11.75C12.7165 8.5 13.5 7.7165 13.5 6.75V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V6.75C15 8.54493 13.5449 10 11.75 10H3.56066L5.28033 11.7197C5.57322 12.0126 5.57322 12.4874 5.28033 12.7803C4.98744 13.0732 4.51256 13.0732 4.21967 12.7803L1.21967 9.78033C0.926777 9.48744 0.926777 9.01256 1.21967 8.71967L4.21967 5.71967C4.51256 5.42678 4.98744 5.42678 5.28033 5.71967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-replace-all" viewBox="0 0 16 16">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10.7197 0.21967C11.0126 -0.0732233 11.4874 -0.0732233 11.7803 0.21967L14.7803 3.21967C15.0732 3.51256 15.0732 3.98744 14.7803 4.28033L11.7803 7.28033C11.4874 7.57322 11.0126 7.57322 10.7197 7.28033C10.4268 6.98744 10.4268 6.51256 10.7197 6.21967L12.4393 4.5H4.25C3.2835 4.5 2.5 5.2835 2.5 6.25V6.875C2.5 7.28921 2.16421 7.625 1.75 7.625C1.33579 7.625 1 7.28921 1 6.875V6.25C1 4.45507 2.45508 3 4.25 3H12.4393L10.7197 1.28033C10.4268 0.987437 10.4268 0.512563 10.7197 0.21967ZM5.28033 8.71967C5.57322 9.01256 5.57322 9.48744 5.28033 9.78033L3.56066 11.5H11.75C12.7165 11.5 13.5 10.7165 13.5 9.75V9.125C13.5 8.71079 13.8358 8.375 14.25 8.375C14.6642 8.375 15 8.71079 15 9.125V9.75C15 11.5449 13.5449 13 11.75 13H3.56066L5.28033 14.7197C5.57322 15.0126 5.57322 15.4874 5.28033 15.7803C4.98744 16.0732 4.51256 16.0732 4.21967 15.7803L1.21967 12.7803C0.926777 12.4874 0.926777 12.0126 1.21967 11.7197L4.21967 8.71967C4.51256 8.42678 4.98744 8.42678 5.28033 8.71967Z"></path>
  </symbol>
</svg>`,Ke=()=>{let e=document.createElement(`div`);e.innerHTML=Ge;let t=e.firstElementChild;if(t===null||!(t instanceof SVGSVGElement))throw Error(`Failed to create sprite element`);return t},qe=(e,t=16)=>`<svg width="${t}" height="${t}" aria-hidden="true" focusable="false">
<use href="#diffs-editor-icon-${e}"></use>
</svg>`,X=new WeakMap,Z=new WeakMap,Je=new WeakMap,Ye=new WeakMap,Q=new WeakMap,Xe=new WeakMap,Ze=class{constructor(e){c(this,X,void 0),c(this,Z,void 0),c(this,Je,void 0),c(this,Ye,void 0),c(this,Q,void 0),c(this,Xe,void 0);let{textDocument:t,containerElement:n,defaultQuery:r,mode:i=`find`,allowReplace:a=!0,initialMatch:o,scrollToMatch:s,applyReplace:u,onUpdate:f,onClose:p}=e,m={text:r,replaceText:``,caseSensitive:!1,wholeWord:!1,regex:!1},h={all:[],current:void 0},_=Y(`div`,{dataset:{matches:``,noMatches:``},textContent:`No results`}),v=e=>{h.all=m.text===``?[]:t.search(m);let n=h.all.length===0;if(L.disabled=n,R.disabled=n,n){_.textContent=`No results`,_.dataset.noMatches=``,h.current=void 0,f([]);return}if(delete _.dataset.noMatches,e?.syncSelection===!1){let e=f(h.all,{syncSelection:!1});y(e);return}y(f(h.all))};d(Je,this,v);let y=e=>{if(e===void 0)_.textContent=`${h.all.length} results`;else{let[t,n]=e,r=h.all.findIndex(e=>e[0]===t&&e[1]===n);_.textContent=`${r+1} of ${h.all.length}`}h.current=e},b=(e,t)=>{m[e]=t,v()},x=(e=!1,t=!1)=>{let n=h.all,r=n[0];if(n.length>0){if(e){let e=h.current?.[0]??0;r=n.at(-1);for(let t of n)if(t[1]<=e)r=t;else break}else{let e=h.current?.[1]??0;for(let t of n)if(t[0]>=e){r=t;break}}}r!==void 0&&(y(r),s(r,t)),h.current=r};d(Q,this,e=>x(e,!0));let S=(e,n)=>({start:e,end:n,text:je(e=>t.positionAt(e),e=>t.offsetAt(e),e=>t.getLineText(e),m,e,n)}),w=()=>{if(m.text===``||h.all.length===0)return;let e=h.current;if(e===void 0&&(x(!1,!0),e=h.current,e===void 0))return;let[t,n]=e,r=S(t,n);u([r]),s([t+r.text.length,t+r.text.length],!0),h.current=void 0,v()},T=()=>{m.text!==``&&h.all.length!==0&&(u(h.all.map(([e,t])=>S(e,t))),h.current=void 0,v())},E=()=>{this.cleanup(),p()};d(Xe,this,E);let D=e=>Y(`button`,{type:`button`,title:e.label,ariaLabel:e.label,dataset:{searchIcon:``,...e.dataset},innerHTML:qe(e.icon,e.size??16),onclick:e.onClick}),O=(e,t,n)=>{let r=D({icon:e,label:t,size:14,onClick:()=>{let e=!m[n];r.ariaPressed=String(e),b(n,e)}});return r.ariaPressed=String(m[n]),r},k=O(`case`,`Match Case`,`caseSensitive`),A=O(`whole-word`,`Whole Word`,`wholeWord`),j=O(`regex`,`Regexp`,`regex`),M=Y(`input`,{type:`text`,placeholder:`Replace`,dataset:`replace`,value:``,oninput:e=>{m.replaceText=e.target.value},onkeydown:e=>{if(e.isComposing||e.keyCode===229)return;let t=C(e);e.key===`Escape`?(e.preventDefault(),E()):e.key===`Enter`?(e.preventDefault(),w()):t!==void 0&&(e.preventDefault(),x(t===`previous`,!0))}});d(Z,this,Y(`input`,{type:`text`,placeholder:`Search`,dataset:`search`,value:r,oninput:e=>{m.text=e.target.value,h.current=void 0,v()},onkeydown:e=>{if(e.isComposing||e.keyCode===229)return;let t=C(e);e.key===`Escape`?(e.preventDefault(),E()):e.key===`Enter`?(e.preventDefault(),x(e.shiftKey,!0)):t===void 0?g(e)&&(e.key===`f`||e.code===`KeyF`)&&(e.preventDefault(),ee(e.altKey?`replace`:`find`)):(e.preventDefault(),x(t===`previous`,!0))}}));let N=Y(`div`,{dataset:`searchToggles`,children:[k,A,j]}),P=Y(`div`,{dataset:{inputBox:``,find:``},children:[l(Z,this),N]}),F=Y(`div`,{dataset:{inputBox:``,replace:``,replaceCell:``},children:[M]}),I=Y(`div`,{dataset:{replaceActions:``,replaceCell:``},children:[D({icon:`replace`,label:`Replace`,onClick:w}),D({icon:`replace-all`,label:`Replace All`,onClick:T})]}),L=D({icon:`arrow-up`,label:`Previous`,onClick:()=>{x(!0)}}),R=D({icon:`arrow-down`,label:`Next`,onClick:()=>{x()}});L.disabled=!0,R.disabled=!0;let z=Y(`div`,{dataset:`searchNav`,children:[L,R]}),B=D({icon:`close`,label:`Close`,onClick:E,dataset:{searchClose:``}}),V=Y(`div`,{dataset:{searchGrid:``,mode:i},children:[P,F,I,_,z,B]}),ee=e=>{V.dataset.mode=a?e:`find`,l(Z,this).focus(),l(Z,this).select()};d(Ye,this,ee),d(X,this,Y(`div`,{dataset:`searchPanel`,children:[Y(`div`,{dataset:`editorWidget`,children:[V]})]})),h.current=o,n.before(l(X,this)),requestAnimationFrame(()=>{o===void 0?f([]):v(),l(Z,this).select()})}focus(){l(Z,this).focus()}navigate(e){l(Q,this)?.call(this,e)}updateMatches(e){l(Je,this)?.call(this,e)}setMode(e){l(Ye,this)?.call(this,e)}close(){l(Xe,this)?.call(this)}cleanup(){l(X,this).remove()}},Qe=`@layer base, theme, rendered, unsafe;

::selection {
  background-color: #0000;
}

[data-deleted-text-selection] [data-deletions] ::selection, [data-deleted-text-selection] [data-line-type="change-deletion"] ::selection {
  background-color: var(--diffs-editor-selection-bg);
}

@keyframes blinking {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

:host, [data-code], [data-content], [data-diff-type="split"][data-overflow="wrap"] {
  position: relative;
}

[data-code] {
  container-type: inline-size;
}

[data-content] {
  cursor: text;
  caret-color: var(--diffs-bg-caret);
  background-color: #0000;
  outline: none;
}

[data-line] {
  cursor: text;
  background-color: #0000;
}

[data-line]:after {
  content: "";
  z-index: -20;
  background-color: var(--diffs-line-bg);
  pointer-events: none;
  position: absolute;
  inset: 0;
}

[data-line][data-editor-active-line]:after {
  box-shadow: inset 0 0 0 1px var(--diffs-editor-line-highlight-border);
}

[data-editor-overlay] {
  display: contents;
}

[data-caret], [data-edit-prediction], [data-selection-range], [data-match-range], [data-bracket-match-range], [data-edit-prediction-deletion-range], [data-edit-prediction-insertion-range], [data-edit-prediction-replacement-range], [data-marker-range], [data-remote-caret], [data-caret-highlight-range] {
  height: 1lh;
  line-height: var(--diffs-line-height);
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
}

[data-edit-prediction] {
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  width: max-content;
  height: auto;
  color: var(--diffs-editor-edit-prediction-fg, var(--diffs-fg));
  overflow: visible;
}

[data-edit-prediction-line] {
  box-sizing: border-box;
  white-space: pre;
  width: max-content;
  min-height: 1lh;
  display: block;
}

[data-edit-prediction][data-replacement] [data-edit-prediction-line], [data-edit-prediction-insertion-range], [data-edit-prediction-replacement-range] {
  background-color: var(--diffs-edit-prediction-bg, var(--diffs-bg));
}

[data-edit-prediction-suffix] {
  color: var(--diffs-fg);
}

[data-edit-prediction][data-wrap] [data-edit-prediction-line] {
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  max-width: 100%;
}

[data-edit-prediction-line][data-empty]:after {
  content: "↵";
}

[data-edit-prediction-spacer] {
  margin-block-end: var(--diffs-edit-prediction-spacer-height);
}

[data-code][data-deletions] [data-edit-prediction-spacer] {
  box-sizing: content-box;
  margin-block-end: 0;
  padding-block-end: var(--diffs-edit-prediction-spacer-height);
}

[data-edit-prediction-deletion-range] {
  --diffs-edit-prediction-deletion-color: var(--diffs-editor-edit-prediction-deletion-fg, var(--diffs-deletion-base));
  z-index: 1;
  background: linear-gradient(to bottom, transparent calc(50% - .5px), var(--diffs-edit-prediction-deletion-color) calc(50% - .5px), var(--diffs-edit-prediction-deletion-color) calc(50% + .5px), transparent calc(50% + .5px));
}

[data-edit-prediction-insertion-range] {
  z-index: 0;
}

[data-edit-prediction-replacement-range] {
  z-index: 1;
}

[data-caret] {
  z-index: 2;
  background-color: var(--diffs-bg-caret-override, var(--diffs-editor-cursor-fg, var(--legacy-light, var(--diffs-fg)) var(--legacy-dark, var(--diffs-fg))));
  visibility: hidden;
  width: 2px;
}

@media (prefers-reduced-motion: no-preference) {
  [data-caret] {
    animation: 1.2s .8s infinite blinking;
  }
}

[data-selection-range] {
  z-index: -10;
  background-color: var(--diffs-editor-selection-bg);
}

[data-caret-highlight-range] {
  z-index: -10;
  background-color: var(--diffs-caret-highlight-bg, var(--diffs-editor-selection-bg));
}

[data-selection-corner] {
  background-color: var(--diffs-selection-corner-bg, var(--diffs-bg));
  width: 100%;
  height: 100%;
}

[data-match-range] {
  z-index: -10;
  background-color: var(--diffs-editor-match-bg, var(--diffs-editor-selection-bg));
}

[data-match-range]:not([data-focus]) {
  background-color: var(--diffs-editor-match-highlight-bg, var(--legacy-light, #ff963288) var(--legacy-dark, #ff963266));
}

[data-bracket-match-range] {
  z-index: -9;
  box-sizing: border-box;
  border-bottom: 1px solid var(--diffs-editor-bracket-match-border, var(--diffs-fg));
  background-color: var(--diffs-editor-bracket-match-bg, var(--diffs-fg));
}

[data-rtl] {
  border-top-left-radius: 3px;
}

[data-rtr] {
  border-top-right-radius: 3px;
}

[data-rbl] {
  border-bottom-left-radius: 3px;
}

[data-rbr] {
  border-bottom-right-radius: 3px;
}

[data-marker-range] {
  z-index: 1;
  background-color: var(--diffs-marker-bg);
  mask-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjMiPjxwYXRoIGQ9Im0wIDIuNSBsMiAtMS41IGwxIDAgbDIgMS41IGwxIDAiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+");
  mask-position: 0 100%;
  mask-size: 6px 3px;
  mask-repeat: repeat-x;
}

[data-marker-error] {
  --diffs-marker-contrast: var(--legacy-light, #fff) var(--legacy-dark, #000);
  --diffs-marker-bg: var(--diffs-editor-error-fg, var(--diffs-deletion-base));
}

[data-marker-warning] {
  --diffs-marker-contrast: #000;
  --diffs-marker-bg: var(--diffs-editor-warning-fg, var(--legacy-light, var(--diffs-warning-light)) var(--legacy-dark, var(--diffs-warning-dark)));
}

[data-marker-info] {
  --diffs-marker-contrast: #000;
  --diffs-marker-bg: var(--diffs-editor-info-fg, var(--diffs-modified-base));
}

[data-marker-hint] {
  --diffs-marker-contrast: var(--legacy-light, #fff) var(--legacy-dark, #000);
  --diffs-marker-bg: var(--diffs-editor-hint-fg, var(--diffs-fg-number));
}

@media (min-width: 480px) {
  [data-content] {
    caret-color: #0000;
  }

  [data-content]:focus ~ [data-editor-overlay] [data-caret] {
    visibility: visible;
  }
}

[data-editor-widget] {
  --diffs-widget-fg: var(--diffs-fg);
  --diffs-widget-bg: var(--diffs-fg);
  --diffs-widget-border: var(--diffs-fg);
  --diffs-widget-shadow: inset 0 0 0 1px var(--diffs-bg), 0 4px 8px #00000013, 0 6px 18px #00000013;
  z-index: 100;
  width: fit-content;
  max-width: calc(100% - 24px);
  font: 14px/20px var(--diffs-header-font-fallback);
  border: 1px solid var(--diffs-widget-border);
  background-color: var(--diffs-widget-bg);
  box-shadow: var(--diffs-widget-shadow);
  background-clip: padding-box;
  border-radius: 9px;
  position: absolute;
  top: 0;
  left: 0;
}

[data-marker-popover], [data-selection-action-popover] {
  --popover-gap: var(--diffs-popover-gap, var(--diffs-gap-fallback, 8px));
  --popover-viewport-left: 0px;
  --popover-viewport-right: 100cqw;
  --popover-viewport-top: -99999px;
  --popover-viewport-bottom: 99999px;
  --popover-min-left: calc(var(--popover-viewport-left) + var(--gutter-width, 0px) + var(--popover-gap));
  --popover-available-width: max(0px, calc(var(--popover-viewport-right) - var(--popover-min-left) - var(--popover-gap)));
  max-width: min(640px, var(--popover-available-width));
  translate: clamp(var(--popover-min-left), var(--popover-x, var(--popover-min-left)), calc(var(--popover-viewport-right) - var(--popover-gap) - 100%))  clamp(var(--popover-viewport-top), calc(var(--popover-y, 0px) + var(--popover-y-shift, 0px)), calc(var(--popover-viewport-bottom) - var(--popover-gap) - 100%));
}

[data-marker-popover] {
  --diffs-widget-bg: var(--diffs-marker-bg);
  --diffs-widget-shadow: 0 4px 8px #00000026, 0 6px 18px #00000026;
  min-width: min(180px, var(--popover-available-width));
  overflow-wrap: anywhere;
  color: var(--diffs-marker-contrast);
  white-space: normal;
  pointer-events: auto;
  border: 0;
  padding: 8px 12px;
}

@supports (color: contrast-color(red)) {
  [data-marker-popover] {
    color: contrast-color(var(--diffs-marker-bg, var(--diffs-bg)));
  }
}

[data-marker-popover] [data-marker-message] {
  white-space: normal;
  overflow-wrap: anywhere;
}

[data-marker-popover] [data-marker-message] code {
  white-space: normal;
  color: inherit;
  background-color: #0000;
  display: inline;
}

[data-selection-action-popover] {
  pointer-events: auto;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  width: max-content;
  padding: 4px;
  display: flex;
}

[data-search-panel] {
  z-index: 100;
  flex-direction: column;
  justify-content: right;
  width: 100%;
  height: 0;
  display: flex;
  position: sticky;
  top: 16px;
  right: 16px;
  container: search-panel / inline-size;
}

[data-search-panel] [data-editor-widget] {
  z-index: 100;
  flex-shrink: 0;
  align-items: stretch;
  gap: 8px;
  min-width: 260px;
  max-width: 100%;
  margin-inline: auto 16px;
  padding: 4px;
  display: flex;
  position: relative;
}

[data-search-panel] svg {
  fill: currentColor;
  width: 12px;
  height: 12px;
  display: block;
}

[data-search-grid] {
  grid-template-columns: auto auto auto;
  grid-template-areas: "find matches nav"
                       "replace actions .";
  align-items: center;
  gap: 4px 6px;
  width: 100%;
  display: grid;
}

[data-input-box][data-find] {
  grid-area: find;
}

[data-search-nav] {
  grid-area: nav;
}

[data-input-box][data-replace] {
  grid-area: replace;
}

[data-replace-actions] {
  grid-area: actions;
}

[data-search-grid][data-mode="find"] {
  grid-template-areas: "find matches nav";
}

[data-search-grid][data-mode="find"] [data-replace-cell] {
  display: none;
}

@container search-panel (width < 400px) {
  [data-search-panel] [data-editor-widget] {
    padding: 10px;
  }

  [data-search-grid][data-mode="replace"] {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "find find find"
                         "replace replace replace"
                         "nav matches actions";
  }

  [data-search-grid][data-mode="find"] {
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "find find find"
                         "nav matches matches";
  }

  [data-replace-actions] {
    justify-self: end;
  }

  [data-search-grid] [data-input-box] {
    width: auto;
  }
}

[data-input-box] {
  align-items: center;
  width: 200px;
  display: flex;
  position: relative;
}

[data-input-box] input {
  width: 100%;
  min-width: 0;
  color: var(--diffs-fg);
  background-color: var(--diffs-bg);
  border: 1px solid var(--diffs-fg);
  border-radius: 6px;
  outline: none;
  flex-grow: 1;
  padding-inline: 6px;
  font-size: 13px;
  line-height: 24px;
}

[data-input-box] input::selection {
  background-color: var(--diffs-fg);
}

[data-input-box] input:focus-visible {
  outline: 1px solid var(--diffs-modified-base);
}

[data-input-box][data-find] input {
  padding-inline-end: 72px;
}

[data-input-box] [data-search-icon] {
  --diffs-search-icon-size: 20px;
}

[data-search-toggles] {
  align-items: center;
  gap: 1px;
  display: flex;
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
}

[data-matches] {
  white-space: nowrap;
  min-width: 50px;
  color: var(--diffs-fg);
  flex-shrink: 0;
  grid-area: matches;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

[data-matches][data-no-matches] {
  color: var(--diffs-fg);
}

[data-replace-actions], [data-search-nav] {
  align-items: center;
  display: flex;
}

[data-search-icon] {
  appearance: none;
  width: var(--diffs-search-icon-size, 24px);
  height: var(--diffs-search-icon-size, 24px);
  color: var(--diffs-fg);
  border-radius: var(--diffs-search-icon-radius, 4px);
  cursor: pointer;
  background: none;
  border: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: background-color .1s ease-in-out, color .1s ease-in-out;
  display: flex;
}

[data-search-icon]:disabled {
  opacity: .25;
  cursor: default;
}

[data-search-icon]:not(:disabled):hover {
  color: var(--diffs-fg);
}

[data-search-icon]:focus-visible {
  outline: 1px solid var(--diffs-modified-base);
}

[data-search-icon][aria-pressed="true"] {
  color: var(--diffs-modified-base);
}

[data-search-close] {
  --diffs-search-icon-size: 20px;
  --diffs-search-icon-radius: 50%;
  color: var(--diffs-widget-bg);
  background-color: var(--diffs-widget-fg);
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}

[data-search-close]:not(:disabled):hover {
  opacity: 1;
  color: var(--diffs-widget-bg);
  background-color: var(--diffs-widget-fg);
}
`,$e=e(t(),1),et=r();function tt(e,t,n){return!n&&(e.metaKey||e.ctrlKey)&&e.key===`Enter`&&t.trim().length>0}var $=e(n(),1);function nt(e){let t=(0,et.c)(48),{kind:n,rangeLabel:r,text:s,onTextChange:c,onCancel:l,onComment:u,onDelete:d,placeholder:f,submitLabel:p,pending:m,secondaryAction:g,focusOnMount:_}=e,v=f===void 0?`Add a comment…`:f,y=p===void 0?`Comment`:p,b=m!==void 0&&m,x=_===void 0||_,[S,C]=(0,$e.useState)(``),w=n===`draft`&&!c?S:s,T;t[0]===w?T=t[1]:(T=w.trim(),t[0]=w,t[1]=T);let E=T,D=(0,$e.useRef)(null),O,k;if(t[2]!==x||t[3]!==n?(O=()=>{if(n!==`draft`||!x)return;let e=window.requestAnimationFrame(()=>{D.current?.focus({preventScroll:!0})});return()=>window.cancelAnimationFrame(e)},k=[x,n],t[2]=x,t[3]=n,t[4]=O,t[5]=k):(O=t[4],k=t[5]),(0,$e.useLayoutEffect)(O,k),n===`comment`){let e;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(a,{className:`mt-0.5 size-3.5 shrink-0 text-primary/70`,"aria-hidden":`true`}),t[6]=e):e=t[6];let n;t[7]===w?n=t[8]:(n=(0,$.jsx)(`p`,{className:`min-w-0 flex-1 whitespace-pre-wrap text-sm leading-5`,children:w}),t[7]=w,t[8]=n);let r;t[9]===d?r=t[10]:(r=d?(0,$.jsx)(`span`,{className:`-my-1 -mr-1 flex shrink-0 opacity-0 transition-opacity group-hover/comment:opacity-100 focus-within:opacity-100 max-sm:opacity-100`,children:(0,$.jsx)(i,{variant:`ghost-muted`,size:`icon-xs`,"aria-label":`Delete comment`,onClick:d,children:(0,$.jsx)(o,{className:`size-3`})})}):null,t[9]=d,t[10]=r);let s;return t[11]!==r||t[12]!==n?(s=(0,$.jsxs)(`div`,{"data-diff-comment-annotation":!0,className:`group/comment flex min-w-0 items-start gap-2.5 border-s-2 border-primary/55 bg-primary/[0.045] px-3 py-2.5 font-sans text-foreground`,contentEditable:!1,onPointerDown:at,children:[e,n,r]}),t[11]=r,t[12]=n,t[13]=s):s=t[13],s}let A=`Comment on lines ${r}`,j;t[14]===c?j=t[15]:(j=e=>(c??C)(e.target.value),t[14]=c,t[15]=j);let M;t[16]!==l||t[17]!==u||t[18]!==b||t[19]!==E?(M=e=>{e.key===`Escape`&&(e.preventDefault(),l()),tt(e,E,b)&&(e.preventDefault(),u(E))},t[16]=l,t[17]=u,t[18]=b,t[19]=E,t[20]=M):M=t[20];let N;t[21]!==w||t[22]!==x||t[23]!==v||t[24]!==M||t[25]!==A||t[26]!==j?(N=(0,$.jsx)(h,{ref:D,autoFocus:x,size:`sm`,value:w,placeholder:v,"aria-label":A,onChange:j,onFocus:rt,onKeyDown:M}),t[21]=w,t[22]=x,t[23]=v,t[24]=M,t[25]=A,t[26]=j,t[27]=N):N=t[27];let P;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(P=(0,$.jsx)(`span`,{className:`mr-auto text-3xs text-muted-foreground/70`,children:`⌘/Ctrl Enter to send`}),t[28]=P):P=t[28];let F;t[29]===l?F=t[30]:(F=(0,$.jsx)(i,{variant:`ghost-muted`,size:`xs`,onClick:l,children:`Cancel`}),t[29]=l,t[30]=F);let I;t[31]!==g||t[32]!==E?(I=g?(0,$.jsxs)(i,{size:`xs`,variant:`outline`,disabled:!g.allowEmpty&&!E,onClick:()=>g.onAction(E),children:[g.icon,g.label]}):null,t[31]=g,t[32]=E,t[33]=I):I=t[33];let L=b||!E,R;t[34]!==u||t[35]!==E?(R=()=>u(E),t[34]=u,t[35]=E,t[36]=R):R=t[36];let z;t[37]!==y||t[38]!==L||t[39]!==R?(z=(0,$.jsx)(i,{size:`xs`,disabled:L,onClick:R,children:y}),t[37]=y,t[38]=L,t[39]=R,t[40]=z):z=t[40];let B;t[41]!==F||t[42]!==I||t[43]!==z?(B=(0,$.jsxs)(`div`,{className:`mt-1.5 flex items-center gap-1`,children:[P,F,I,z]}),t[41]=F,t[42]=I,t[43]=z,t[44]=B):B=t[44];let V;return t[45]!==N||t[46]!==B?(V=(0,$.jsxs)(`div`,{"data-diff-comment-annotation":!0,className:`px-3 py-2 font-sans text-foreground`,contentEditable:!1,onPointerDown:it,children:[N,B]}),t[45]=N,t[46]=B,t[47]=V):V=t[47],V}function rt(e){let t=e.currentTarget.value.length;e.currentTarget.setSelectionRange(t,t)}function it(e){return e.stopPropagation()}function at(e){return e.stopPropagation()}export{g as S,Re as _,Ge as a,C as b,Fe as c,ze as d,Ie as f,We as g,Y as h,Ze as i,Be as l,Pe as m,tt as n,Ke as o,Ue as p,Qe as r,Ne as s,nt as t,Le as u,ee as v,_ as x,S as y};