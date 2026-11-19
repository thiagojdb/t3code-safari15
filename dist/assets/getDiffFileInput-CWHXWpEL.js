import{t as e}from"./defineProperty-BbfpZ9Tg.js";import{i as t,n,r,t as i}from"./classPrivateFieldSet2-BE9xOnOO.js";import{B as a,D as o,F as s,M as c,N as l,O as u,P as d,R as f,V as p,b as m,f as h,g,j as _,k as v,m as y,p as b,v as x,w as S,y as C,z as w}from"./diffRendering-DUGVJcso.js";import{c as T,i as E}from"./themeResolver-BSK0hTy3.js";import{t as D}from"./constants-CmGPilXJ.js";import{t as O}from"./legacyCssValue-ZT_zIji4.js";import{_ as ee,a as te,c as ne,d as k,f as A,h as re,i as j,l as M,m as N,n as ie,o as ae,p as oe,r as se,s as ce,t as le,u as ue}from"./appendItems-CEQnBBBZ.js";import{t as de}from"./classPrivateMethodInitSpec-Dhc_bQPo.js";import{t as P}from"./formatCSSVariablePrefix-KRh9vnZf.js";import{$a as fe,Qa as pe,Za as me,no as he,to as ge}from"./main-DOHqjC4d.js";function _e(e,t,n){if(e===t||e==null||t==null)return e===t;let r=new Set(n),i=Object.keys(e),a=new Set(Object.keys(t));for(let n of i)if(a.delete(n),!r.has(n)&&(!(n in t)||e[n]!==t[n]))return!1;for(let e of Array.from(a))if(!r.has(e))return!1;return!0}var ve=/\{(\w+)\s*,\s*plural\s*,((?:\s*\w+\s*\{[^{}]*\})+)\s*\}/,ye=/(\w+)\s*\{([^{}]*)\}/g,be=/\{(\w+)\}/g,xe=new Set([`zero`,`one`,`two`,`few`,`many`,`other`]);function Se(e){return xe.has(e)}function Ce(e,t){let n=t?.[e];if(n==null)throw Error(`i18n: message argument "${e}" was not provided`);return n}function we(e,t,n){let r=ve.exec(e),i=r==null?e:e.slice(0,r.index),a=r==null?``:e.slice(r.index+r[0].length);if(/[{}]/.test((i+a).replace(be,``)))throw Error(`i18n: unsupported syntax in "${e}"`);if(r==null)return t=>Te(e,t,n);let[,o,s]=r,c=new Map;for(let[,t,n]of s.matchAll(ye)){if(!Se(t))throw Error(`i18n: unknown plural category "${t}" in "${e}"`);if(c.has(t))throw Error(`i18n: duplicate plural category "${t}" in "${e}"`);c.set(t,n)}let l=c.get(`other`);if(l==null)throw Error(`i18n: plural block needs an "other" branch in "${e}"`);return e=>{let r=Ce(o,e);if(typeof r!=`number`)throw Error(`i18n: plural argument "${o}" must be a number`);let s=c.get(t.select(r))??l;return Te(i+s.replaceAll(`#`,n.format(r))+a,e,n)}}function Te(e,t,n){return e.replace(be,(e,r)=>{let i=Ce(r,t);return typeof i==`number`?n.format(i):i})}var Ee,De,Oe,ke,F,Ae;function je(e){return Object.hasOwn(u,e)}function Me(e){let t={...u};if(e==null)return t;for(let[n,r]of Object.entries(e)){if(!je(n))throw Error(`i18n: unknown message "${n}"`);r!=null&&(t[n]=r)}return t}function Ne(e,t,n){let r=new Intl.PluralRules(t),i=new Map;for(let[t,a]of Object.entries(e))i.set(t,we(a,r,n));return i}var I=new(Ee=new WeakMap,De=new WeakMap,Oe=new WeakMap,ke=new WeakMap,F=new WeakMap,Ae=new WeakMap,class{constructor(){t(this,Ee,`en`),t(this,De,u),t(this,Oe,new Intl.NumberFormat(`en`)),t(this,ke,Ne(u,`en`,n(Oe,this))),t(this,F,new Set),t(this,Ae,0)}get version(){return n(Ae,this)}set({locale:e=`en`,messages:t}={}){var r;let a=Me(t);if(e===n(Ee,this)&&_e(a,n(De,this)))return;let o=new Intl.NumberFormat(e);i(ke,this,Ne(a,e,o)),i(Oe,this,o),i(Ee,this,e),i(De,this,a),i(Ae,this,(r=n(Ae,this),r++,r));for(let e of n(F,this))e.onMessagesChange()}t(e,t){let r=n(ke,this).get(e);if(r==null)throw Error(`i18n: unknown message "${e}"`);return r(t)}formatNumber(e){return n(Oe,this).format(e)}subscribe(e){return n(F,this).add(e),()=>{this.unsubscribe(e)}}unsubscribe(e){n(F,this).delete(e)}__clearSubscribers(){n(F,this).clear()}}),Pe=`@layer base {
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
    --diffs-search-text-color: var(--diffs-fg-search-match-override, #000);
    --diffs-search-match-color: var(--diffs-bg-search-match-override, #ffff54);
    --diffs-search-current-color: var(--diffs-bg-search-match-current-override, var(--diffs-modified-base));
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
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-line-type="change-addition"] {
    --diffs-diff-line-mix-target: var(--diffs-bg-addition-override, var(--diffs-addition-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="current"] {
    --diffs-diff-line-mix-target: var(--conflict-bg-current-override, var(--diffs-addition-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :is(:where([data-background]) [data-gutter-buffer], :where([data-background]) [data-column-number], :where([data-background]) [data-line], :where([data-background]) [data-no-newline])[data-merge-conflict="incoming"] {
    --diffs-diff-line-mix-target: var(--conflict-bg-incoming-override, var(--diffs-modified-base));
    --diffs-hover-mix-target: var(--diffs-diff-line-mix-target);
    --diffs-computed-diff-line-bg: var(--legacy-light, var(--diffs-computed-decoration-bg)) var(--legacy-dark, var(--diffs-computed-decoration-bg));
  }

  :where([data-background]) [data-gutter-buffer][data-line-type="change-deletion"], :where([data-background]) [data-column-number][data-line-type="change-deletion"] {
    color: var(--diffs-fg-number-deletion-override, var(--diffs-deletion-base));
    --diffs-diff-line-mix-target: var(--diffs-bg-deletion-number-override, var(--diffs-deletion-base));
  }

  :where([data-background]) [data-gutter-buffer][data-line-type="change-addition"], :where([data-background]) [data-column-number][data-line-type="change-addition"] {
    color: var(--diffs-fg-number-addition-override, var(--diffs-addition-base));
    --diffs-diff-line-mix-target: var(--diffs-bg-addition-number-override, var(--diffs-addition-base));
  }

  :where([data-background]) [data-gutter-buffer][data-merge-conflict="current"], :where([data-background]) [data-column-number][data-merge-conflict="current"] {
    color: var(--diffs-fg-number-addition-override, var(--diffs-addition-base));
    --diffs-diff-line-mix-target: var(--conflict-bg-current-number-override, var(--diffs-addition-base));
  }

  :where([data-background]) [data-gutter-buffer][data-merge-conflict="incoming"], :where([data-background]) [data-column-number][data-merge-conflict="incoming"] {
    color: var(--diffs-modified-base);
    --diffs-diff-line-mix-target: var(--conflict-bg-incoming-number-override, var(--diffs-modified-base));
  }

  [data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay] {
    --diffs-selection-mix-target: var(--diffs-bg-selection-override, var(--diffs-selection-base));
    --diffs-selection-emphasis-mix-target: var(--diffs-selection-mix-target);
  }

  :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay]):where([data-editor-overlay]), :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay])[data-selected-line]:where([data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline]) {
    --mix-selection-light: 82%;
    --mix-selection-dark: 75%;
    --diffs-hover-mix-target: var(--diffs-selection-mix-target);
  }

  :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay])[data-selected-line]:where([data-gutter-buffer], [data-column-number]), :is([data-gutter-buffer], [data-column-number], [data-line], [data-line-annotation], [data-merge-conflict], [data-merge-conflict-actions], [data-no-newline], [data-editor-overlay])[data-editor-active-line]:where([data-column-number]) {
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

  [data-overflow="scroll"]:not([data-dehydrated], [data-custom-styles], :has( > [data-code] > [contenteditable],  > [data-code] > * > :is([data-line-annotation], [data-separator], [data-merge-conflict], [data-merge-conflict-actions]))) > [data-code] {
    display: flex;
  }

  [data-overflow="scroll"]:not([data-dehydrated], [data-custom-styles], :has( > [data-code] > [contenteditable],  > [data-code] > * > :is([data-line-annotation], [data-separator], [data-merge-conflict], [data-merge-conflict-actions]))) > [data-code] > [data-gutter] {
    flex-shrink: 0;
    display: block;
  }

  [data-overflow="scroll"]:not([data-dehydrated], [data-custom-styles], :has( > [data-code] > [contenteditable],  > [data-code] > * > :is([data-line-annotation], [data-separator], [data-merge-conflict], [data-merge-conflict-actions]))) > [data-code] > [data-content] {
    flex: 1 0 max-content;
    display: block;
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

  [data-indicators="classic"] [data-line][data-line-type="change-addition"]:before, [data-indicators="classic"] [data-line][data-line-type="change-deletion"]:before, [data-indicators="classic"] [data-no-newline][data-line-type="change-addition"]:before, [data-indicators="classic"] [data-no-newline][data-line-type="change-deletion"]:before {
    -webkit-user-select: none;
    user-select: none;
    width: 1ch;
    height: 1lh;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }

  [data-indicators="classic"] [data-line][data-line-type="change-addition"]:before, [data-indicators="classic"] [data-no-newline][data-line-type="change-addition"]:before {
    content: "+";
    color: var(--diffs-addition-base);
  }

  [data-indicators="classic"] [data-line][data-line-type="change-deletion"]:before, [data-indicators="classic"] [data-no-newline][data-line-type="change-deletion"]:before {
    content: "-";
    color: var(--diffs-deletion-base);
  }

  [data-indicators="bars"] [data-column-number][data-line-type="change-deletion"]:before, [data-indicators="bars"] [data-column-number][data-line-type="change-addition"]:before {
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

  [data-indicators="bars"] [data-column-number][data-line-type="change-deletion"]:before {
    background-image: linear-gradient(0deg, var(--diffs-bg-deletion) 50%, var(--diffs-deletion-base) 50%);
    background-repeat: repeat;
    background-size: 2px 2px;
    background-size: calc(1lh / round(1lh / 2px)) calc(1lh / round(1lh / 2px));
  }

  [data-indicators="bars"] [data-column-number][data-line-type="change-addition"]:before {
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

  [data-overflow="scroll"] [data-column-number] {
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

  ::highlight(diffs-search-match) {
    color: var(--diffs-search-text-color);
    background-color: var(--diffs-search-match-color);
  }

  ::highlight(diffs-search-current) {
    color: var(--diffs-search-text-color);
    background-color: var(--diffs-search-current-color);
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

  [data-merge-conflict="marker-start"]:after, [data-merge-conflict="marker-end"]:after {
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
`,Fe;function Ie(e){if(Fe!=null)return Fe;let t=e.host;if(typeof HTMLElement<`u`&&t instanceof HTMLElement&&!t.isConnected)return;let n=document.createElement(`div`);n.setAttribute(`data-code`,``),n.setAttribute(s,`true`);let r=document.createElement(`div`);return r.style.position=`relative`,r.style.width=`200%`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n),Fe=Math.max(n.offsetHeight-n.clientHeight,0),n.remove(),Fe}function Le(e){let t=e==null?`var(--diffs-scrollbar-gutter-fallback)`:`${e}px`;return`${d}: ${t};`}var Re=`@layer base, theme, rendered, unsafe;`,ze=RegExp(`${We(d)}\\s*:\\s*[^;]+;`);function Be(){return`${Re}
${Pe}`}function Ve(e){return`${Re}
@layer unsafe {
  ${e}
}`}function He(e,t=`system`,n){let r=O(e),i=t===`system`?``:`
  color-scheme: ${t};`,a=Le(n);return`${Re}
@layer base {
  ${(t===`system`?[`light`,`dark`]:[t]).map(e=>{let n=`
  [data-line] span, [data-edit-prediction-suffix] span {
    font-weight: var(--diffs-token-${e}-font-weight, inherit);
    font-style: var(--diffs-token-${e}-font-style, inherit);
    text-decoration: var(--diffs-token-${e}-text-decoration, inherit);
  }`;return t===`system`&&e===`dark`?`@media (prefers-color-scheme: dark) {${n}\n}`:n}).join(`
`)}
}
@layer rendered {
  :host {${i}
  ${a}
  ${r}
  }
}`}function Ue(e,t){let n=Le(t);return e.replace(ze,n)}function We(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Ge(e,t){return e==null||t==null||typeof e==`string`||typeof t==`string`?e===t:e.dark===t.dark&&e.light===t.light}function Ke(e){let t=/\r\n|\r|\n/.exec(e)?.[0];return t===`\r
`||t===`\r`?t:`
`}function qe(e){return e.includes(`\r`)?e.replace(/\r\n|\r/g,`
`):e}function Je(e){if(!e.includes(`\r`))return e;let t=Ke(e);return e.replace(/\r\n|\r|\n/g,t)}function Ye(e){return!e.includes(`:`)}function Xe(e){return{gutter:e.map(e=>e.gutter),content:e.map(e=>e.content)}}function Ze(e,t){let n=Array.isArray(e)?e:[e];return t==null?n.every(e=>e===`text`||e===`ansi`||D.has(e)):t.hasLoadedLanguages(n)}function Qe(e,t){return e==null||t==null?e===t:e.startingLine===t.startingLine&&e.totalLines===t.totalLines&&e.bufferBefore===t.bufferBefore&&e.bufferAfter===t.bufferAfter}function $e(e){return k({tagName:`div`,children:[k({tagName:`div`,children:e.annotations?.map(e=>k({tagName:`slot`,properties:{name:e}})),properties:{"data-annotation-content":``}})],properties:{"data-line-annotation":`${e.hunkIndex},${e.lineIndex}`}})}var et=new WeakMap,tt=new WeakMap,L=new WeakMap,nt=class{constructor(){t(this,et,new WeakMap),t(this,tt,new Map),t(this,L,new Map)}line(e,t,r,i,a){let o={...e.properties,"data-line":r,"data-alt-line":i,"data-line-type":t?.[`data-line-type`]??e.properties[`data-line-type`],"data-line-index":a,...t},s=n(et,this).get(e);if(s!=null&&at(s.properties,o))return s.row;let c={...e,properties:o};return n(et,this).set(e,{properties:o,row:c}),c}gutter(e,t,r,i,a={}){let o=n(tt,this).get(e);if(o!=null&&o.lineType===t&&o.lineNumber===r&&o.lineIndexText===i&&at(o.properties,a))return o.cell;let s=M(t,r,i,a);return o!=null&&o.lineNumber===r&&(s.children=o.cell.children),n(tt,this).set(e,{lineType:t,lineNumber:r,lineIndexText:i,properties:a,cell:s}),s}fixedRow(e,t,r,i){let a=n(L,this).get(t),o=I.version;(a==null||a.signature!==r||a.messagesVersion!==o)&&(a={signature:r,messagesVersion:o,...i()},n(L,this).set(t,a)),R(e,{key:t,gutter:a.gutter,content:a.content})}forgetLines(e){for(let t of e)n(tt,this).delete(`a${t}`),n(L,this).delete(`ann:a${t}`),n(L,this).delete(`buf:a${t}`),n(L,this).delete(`buf:ann:a${t}`)}};function rt(){return{specs:[],lastKey:void 0}}function R(e,t){e.specs.push(t),e.lastKey=t.key}function it(e){return{...e,properties:{...e.properties,contenteditable:`false`}}}function at(e,t){let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r of n)if(e[r]!==t[r])return!1;return!0}var ot=`-1,-1`;function st(e){return e?.some(e=>e.lineNumber===0)??!1}function ct(e){let t=e[0];return t!=null&&t.length>0?t:void 0}function lt(e){return e.startingLine===0&&e.totalLines>0}var ut=10,dt=13,ft=4,pt=40;function mt(e){let t=[0],n=e.indexOf(`\r`),r=e.indexOf(`
`),i=0,a=0;for(;n!==-1||r!==-1;){let o;if(n!==-1&&(r===-1||n<r)?r===n+1?(o=r+1,n=e.indexOf(`\r`,o),r=e.indexOf(`
`,o)):(o=n+1,n=e.indexOf(`\r`,o)):(o=r+1,r=e.indexOf(`
`,o)),t.push(o),++a===ft){if(o-i<=pt){for(let n=o;n<e.length;n++){let r=e.charCodeAt(n);(r===ut||r===dt)&&(r===dt&&n+1<e.length&&e.charCodeAt(n+1)===ut&&n++,t.push(n+1))}return t}i=o,a=0}}return t}function ht(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);(r===ut||r===dt)&&(r===dt&&n+1<e.length&&e.charCodeAt(n+1)===ut&&n++,t++)}return t}function gt(e){let t=mt(e);return Array.from({length:t.length},(n,r)=>{let i=t[r],a=t[r+1]??e.length;return e.slice(i,a)})}function _t(e,t){let n=t.changedLineChanges?.some(([,,e])=>e!==0)===!0?[[t.startLine,t.endLine]]:t.changedLineRanges,r=new Map;for(let[t,i]of n){let n=Math.min(i,e.lineCount-1);if(n<t)continue;if(n===t){r.set(t,e.getLineText(t,!0));continue}let a=n+1<e.lineCount?{line:n+1,character:0}:{line:n,character:e.getLineText(n).length},o=gt(e.getText({start:{line:t,character:0},end:a}));for(let e=t;e<=n;e++)r.set(e,o[e-t])}return r}function vt(e){let t=[],n=0;for(let r=0;r<e.lineCount;r++){let i=e.getLineText(r,!0);t.push(i),n+=i.length}return{lines:t,characterCount:n}}var z=new WeakMap,yt=new WeakMap,bt=new WeakMap,xt=class{constructor(e){if(t(this,z,void 0),t(this,yt,void 0),t(this,bt,void 0),e<1)throw Error(`LineMap: a document has at least one line`);i(z,this,Array.from({length:e},(e,t)=>t)),i(yt,this,e)}get lineCount(){return n(z,this).length}ids(){return n(z,this).slice()}idAt(e){let t=n(z,this)[e];if(t==null)throw Error(`LineMap.idAt: line ${e} is out of range`);return t}lineOf(e){let t=n(bt,this);if(t==null){t=new Map;for(let[e,r]of n(z,this).entries())t.set(r,e);i(bt,this,t)}return t.get(e)}applyChange(e){let t=ae(e);t.some(([,,e])=>e!==0)&&i(bt,this,void 0);let r=ce(n(z,this),t,()=>{var e,t;return i(yt,this,(e=n(yt,this),t=e++,e)),t});if(i(z,this,r.entries),n(z,this).length!==e.lineCount)throw Error(`LineMap.applyChange: the document has ${e.lineCount} lines but the map has ${n(z,this).length}`);return r.removed}},St=new WeakMap,Ct=new WeakMap,wt=new WeakMap,Tt=new WeakMap,B=new WeakMap,Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap,kt=class{constructor(e){t(this,St,[]),t(this,Ct,[]),t(this,wt,[]),t(this,Tt,void 0),t(this,B,new Map),t(this,Et,new WeakMap),t(this,Dt,new Map),t(this,Ot,new Map),this.setHighlightRows(e)}setHighlightRows({deletionRows:e,additionRows:t,additionLines:n,lineIds:r}){if(i(St,this,e),r!=null){let e=new Map;for(let i=0;i<n.length;i++){let a=t[i];a?.type===`element`&&e.set(r[i],{row:a,text:n[i]})}i(Tt,this,e),i(Ct,this,[]),i(wt,this,[])}else i(Tt,this,void 0),i(Ct,this,t),i(wt,this,n)}setTokens(e,t){let r=n(B,this).get(e);if(r!=null&&At(r.tokens,t))return!1;let i=``;for(let e of t)i+=e[2];return n(B,this).set(e,{tokens:t,text:i}),n(Dt,this).delete(e),!0}hasTokens(e){return n(B,this).has(e)}forgetTokens(){n(B,this).clear()}forgetLines(e){for(let t of e)n(B,this).delete(t),n(Dt,this).delete(t),n(Tt,this)?.delete(t)}deletionRow(e,t){let r=n(St,this)[t];if(r?.type===`element`)return r;let i=x(e.diff.deletionLines[t]??``),a=n(Ot,this).get(t);if(a!=null&&a.text===i)return a.row;let o=oe(i);return n(Ot,this).set(t,{text:i,row:o}),o}additionRow(e,t){let r=e.lineId(t),i=e.lineText(t),a=x(i),o=n(B,this).get(r);if(o!=null&&o.text===a){let e=n(Et,this).get(o.tokens);return e??(e=re(o.tokens),n(Et,this).set(o.tokens,e)),e}let s=n(Tt,this);if(s!=null){let e=s.get(r);if(e!=null&&e.text===i)return e.row}else{let e=n(Ct,this)[t];if(e?.type===`element`&&n(wt,this)[t]===i)return e}let c=n(Dt,this).get(r);if(c!=null&&c.text===a)return c.row;let l=oe(a);return n(Dt,this).set(r,{text:a,row:l}),l}};function At(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++){let[r,i,a]=e[n],[o,s,c]=t[n];if(r!==o||i!==s||a!==c)return!1}return!0}function jt(e){switch(e){case`file`:return`diffs-icon-file-code`;case`change`:return`diffs-icon-symbol-modified`;case`new`:return`diffs-icon-symbol-added`;case`deleted`:return`diffs-icon-symbol-deleted`;case`rename-pure`:case`rename-changed`:return`diffs-icon-symbol-moved`}}function Mt({fileOrDiff:e,mode:t,stickyHeader:n}){let r=`type`in e?e:void 0,i={"data-diffs-header":t,"data-change-type":r?.type,"data-sticky":n?``:void 0};return k({tagName:`div`,children:[t===`custom`?k({tagName:`slot`,properties:{name:S}}):Nt({name:e.name,prevName:`prevName`in e?e.prevName:void 0,iconType:r?.type??`file`}),...t===`custom`?[]:[Pt(r)]],properties:i})}function Nt({name:e,prevName:t,iconType:n}){let r=[k({tagName:`slot`,properties:{name:a}}),A({name:jt(n),properties:{"data-change-icon":n}})];return t!=null&&(r.push(k({tagName:`div`,children:[k({tagName:`bdi`,children:[N(t)]})],properties:{"data-prev-name":``}})),r.push(A({name:`diffs-icon-arrow-right-short`,properties:{"data-rename-icon":``}}))),r.push(k({tagName:`div`,children:[k({tagName:`bdi`,children:[N(e)]})],properties:{"data-title":``}})),r.push(k({tagName:`slot`,properties:{name:f}})),k({tagName:`div`,children:r,properties:{"data-header-content":``}})}function Pt(e){let t=[];if(e!=null&&(e.type!==`new`||e.additionCharacterCount>0)){let n=0,r=0;for(let t of e.hunks)n+=t.additionLines,r+=t.deletionLines;(r>0||n===0)&&t.push(k({tagName:`span`,children:[N(`-${I.formatNumber(r)}`)],properties:{"data-deletions-count":``}})),(n>0||r===0)&&t.push(k({tagName:`span`,children:[N(`+${I.formatNumber(n)}`)],properties:{"data-additions-count":``}}))}return t.push(k({tagName:`slot`,properties:{name:w}})),k({tagName:`div`,children:t,properties:{"data-metadata":``}})}function Ft(e){return k({tagName:`pre`,properties:It(e)})}function It({diffIndicators:e,disableBackground:t,disableLineNumbers:n,overflow:r,split:i,totalLines:a,type:o,customProperties:s}){return{...s,"data-diff":o===`diff`?``:void 0,"data-file":o===`file`?``:void 0,"data-diff-type":o===`diff`?i?`split`:`single`:void 0,"data-overflow":r,"data-disable-line-numbers":n?``:void 0,"data-background":t?void 0:``,"data-indicators":e===`bars`||e===`classic`?e:void 0,style:`--diffs-min-number-column-width-default:${`${a}`.length}ch;`}}function Lt(e,{theme:t,preferredHighlighter:n}){return{langs:Array.isArray(e)?e:[e??`text`],themes:he(t),preferredHighlighter:T(n)}}var Rt=/^#(?:[0-9a-f]{3}0|[0-9a-f]{6}00)$/i,zt=/^0(?:\.0+)?%?$/;function Bt(e){let t=e.indexOf(`(`);if(t<=0||!e.endsWith(`)`))return;let n=e.slice(0,t).trim();if(!/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)$/i.test(n))return;let r=e.slice(t+1,-1).trim();if(r.length===0)return;let i=r.lastIndexOf(`/`);if(i!==-1)return r.slice(i+1).trim();if(/^(?:rgba|hsla)$/i.test(n)){let e=r.split(`,`);if(e.length===4)return e[3]?.trim()}}function Vt(e){let t=/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b/i.exec(e.trim());if(t==null)return null;let n=t[1],r,i=1;return n.length===3?r=n.split(``).map(e=>e+e).join(``):n.length===6?r=n:(r=n.slice(0,6),i=parseInt(n.slice(6,8),16)/255),[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16),i]}function V(e){if(e==null)return null;let t=Vt(e);if(t==null)return null;let n=t[0]/255,r=t[1]/255,i=t[2]/255,a=e=>e<=.03928?e/12.92:((e+.055)/1.055)**2.4;return .2126*a(n)+.7152*a(r)+.0722*a(i)}function Ht(e,t){let[n,r]=e>t?[e,t]:[t,e];return(n+.05)/(r+.05)}function Ut(e,t){if(t==null)return;let n=Vt(e),r=Vt(t);if(n==null||r==null)return;let[i,a,o,s]=n,[c,l,u]=r;return`#`+[Math.round(i*s+c*(1-s)),Math.round(a*s+l*(1-s)),Math.round(o*s+u*(1-s))].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Wt(e){if(e==null)return!1;let t=e.trim().toLowerCase();if(t===`transparent`||Rt.test(t))return!0;let n=Bt(t);return n!=null&&zt.test(n)}function Gt(e,t){let n=V(e);if(n!=null)return n<.4;let r=V(t);return r!=null&&r>.6}function Kt(e,t){if(e==null||t==null)return!1;if(e.trim().toLowerCase()===t.trim().toLowerCase())return!0;let n=V(e),r=V(t);return n==null||r==null?!1:Math.abs(n-r)<.06}function qt(e,t,n){if(t==null||n==null)return!1;let r=V(e),i=V(t),a=V(n);return r==null||i==null||a==null?!1:Math.abs(r-a)<Math.abs(r-i)}function Jt(e,t){let n=V(e),r=t.find(e=>e!=null&&e!==``);if(n==null)return r;let i,a=-1;for(let e of t){if(e==null||e===``)continue;let t=V(e);if(t==null)continue;let r=Ht(n,t);if(r>=3)return e;r>a&&(i=e,a=r)}return i??r}function Yt(e,t){if(t==null)return e;let n=Vt(e),r=Vt(t),i=V(t);if(n==null||r==null||i==null)return`color-mix(in srgb, ${e} 70%, ${t})`;let[a,o,s]=n,[c,l,u]=r;for(let e of[.6,.7,.8,.9]){let t=`#`+[Math.round(a*e+c*(1-e)),Math.round(o*e+l*(1-e)),Math.round(s*e+u*(1-e))].map(e=>e.toString(16).padStart(2,`0`)).join(``),n=V(t);if(n!=null&&Ht(i,n)>=4.5)return t}return e}var Xt=new WeakMap;function Zt(e){let t=Xt.get(e);if(t!=null)return t;let n=e.colors??{},r={...n},i=n[`editor.background`]??e.bg,a=n[`editor.foreground`]??e.fg,o=n[`sideBar.background`]??i,s=n[`sideBar.foreground`]??a;H(r,`editor.background`,i),H(r,`editor.foreground`,a),H(r,`sideBar.background`,o),H(r,`sideBar.foreground`,s),H(r,`input.background`,n[`input.background`]??o),H(r,`sideBarSectionHeader.foreground`,n[`sideBarSectionHeader.foreground`]??s),H(r,`list.activeSelectionForeground`,n[`list.activeSelectionForeground`]??s),H(r,`gitDecoration.addedResourceForeground`,Qt(n[`gitDecoration.addedResourceForeground`],n[`terminal.ansiGreen`],n[`editorGutter.addedBackground`])),H(r,`gitDecoration.modifiedResourceForeground`,Qt(n[`gitDecoration.modifiedResourceForeground`],n[`terminal.ansiBlue`],n[`editorGutter.modifiedBackground`])),H(r,`gitDecoration.deletedResourceForeground`,Qt(n[`gitDecoration.deletedResourceForeground`],n[`terminal.ansiRed`],n[`editorGutter.deletedBackground`]));let c=(Wt(n[`list.focusOutline`])?void 0:n[`list.focusOutline`])??(Wt(n.focusBorder)?void 0:n.focusBorder);c==null?delete r[`list.focusOutline`]:r[`list.focusOutline`]=c;let l=n[`list.hoverBackground`];l!=null&&($t(l,o)||qt(l,o,s))&&delete r[`list.hoverBackground`];let u=Object.freeze({...e,colors:Object.freeze(r)});return Xt.set(e,u),u}function H(e,t,n){n!=null&&n!==``&&(e[t]=n)}function Qt(...e){for(let t of e)if(t!=null&&t!==``)return t}function $t(e,t){return t!=null&&e.toLowerCase()===t.toLowerCase()}function en({theme:e=_,highlighter:t,prefix:n}){let r=``;if(typeof e==`string`){let i=t.getTheme(e),a=tn(i,t);r+=`color:${a.fg};`,r+=`background-color:${a.bg};`,r+=`${P(`global`)}fg:${a.fg};`,r+=`${P(`global`)}bg:${a.bg};`,r+=nn(i,n)}else{let n=t.getTheme(e.dark),i=tn(n,t);r+=`${P(`global`)}dark:${i.fg};`,r+=`${P(`global`)}dark-bg:${i.bg};`,r+=nn(n,`dark`),n=t.getTheme(e.light),i=tn(n,t),r+=`${P(`global`)}light:${i.fg};`,r+=`${P(`global`)}light-bg:${i.bg};`,r+=nn(n,`light`)}return r}function tn(e,t){if(t.name===`highlights`&&e.zed?.cssVariables===!0){let e=P(`token`);return{fg:`var(${e}foreground)`,bg:`var(${e}background)`}}return Zt(e)}function nn(e,t){t=t==null?``:`${t}-`;let n=``,r=e.colors?.[`gitDecoration.addedResourceForeground`]??e.colors?.[`terminal.ansiGreen`];r!=null&&(n+=`${P(`global`)}${t}addition-color:${r};`);let i=e.colors?.[`gitDecoration.deletedResourceForeground`]??e.colors?.[`terminal.ansiRed`];i!=null&&(n+=`${P(`global`)}${t}deletion-color:${i};`);let a=e.colors?.[`gitDecoration.modifiedResourceForeground`]??e.colors?.[`terminal.ansiBlue`];return a!=null&&(n+=`${P(`global`)}${t}modified-color:${a};`),n}function rn(e){return`annotation-${`side`in e?`${e.side}-`:``}${e.lineNumber}`}function an(e){return e.startingLine===0&&e.totalLines===1/0&&e.bufferBefore===0&&e.bufferAfter===0}function on(e,t,n){return{lang:e,...typeof t==`string`?{theme:t}:{themes:t},defaultColor:!1,cssVariablePrefix:P(`token`),tokenizeMaxLineLength:n,tokenizeTimeLimit:0}}function sn(e,t){return e?.getPreferredHighlighter()??t.preferredHighlighter}function cn(e,t){for(let n of Object.keys(t)){let r=Number(n);r in e||(e[r]=t[r])}}function ln(e,t){return k({tagName:`div`,children:e,properties:{"data-content":``,style:`grid-row: span ${t}`}})}function un(e){}var dn=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
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
</svg>`;function fn(e){return e?.useTokenTransformer===!0||e?.onTokenClick!=null||e?.onTokenEnter!=null||e?.onTokenLeave!=null}var pn=class extends Error{constructor(){super(`WorkerPoolManager: operation canceled because the pool terminated`),this.name=`WorkerPoolTerminatedError`}},mn=class extends Error{constructor(){super(`WorkerPoolManager: operation canceled before the task completed`),this.name=`WorkerPoolTaskCanceledError`}},hn=class extends Error{constructor(e,t){super(e,t),this.name=`WorkerPoolWorkerError`}},gn=new WeakSet;function _n(e){gn.add(e)}function vn(e){return e instanceof pn||e instanceof mn}function yn(e){return vn(e)||e instanceof hn&&gn.has(e)}function bn(e){return{...l,...e}}function xn(e,t){return Sn(e,t)+Cn(e,t)}function Sn(e,t){return t?0:e.diffHeaderHeight}function Cn(e,t){return e.paddingTop??(t?e.spacing:0)}function wn(e){return e.paddingBottom??e.spacing}function Tn(e){switch(e){case`simple`:return 4;case`metadata`:case`line-info`:case`line-info-basic`:case`custom`:return 32}}function U(e,t){return e?.cacheKey!=null||t?.cacheKey!=null?e?.cacheKey===t?.cacheKey:e===t}function En(e){return e.map(e=>({...e,hunkContent:e.hunkContent.map(e=>({...e}))}))}function Dn(e){return{...e,hunks:En(e.hunks),deletionLines:[...e.deletionLines],additionLines:[...e.additionLines]}}function On(e){return e===``?[]:e.split(p)}function kn({item:e,arr:t,enableJoin:n,isNeutral:r=!1,isLastItem:i=!1}){let a=t[t.length-1];if(a==null||i||!n){t.push([+!r,e.value]);return}let o=a[0]===0;r===o||r&&e.value.length===1&&!o?a[1]+=e.value:t.push([+!r,e.value])}var An=Object.freeze({deletion:Object.freeze([]),addition:Object.freeze([])});function jn(e,t,n,r,i=`jsdiff`){if(n===`none`||(e=x(e),t=x(t),e.length>r||t.length>r))return An;let{diffChars:a,diffWordsWithSpace:o}=b[y(i)],s=n===`char`?a(e,t):o(e,t);if(n===`word-line`)return Nn(s);let c=[],l=[],u=n===`word-alt`,d=s.at(-1);for(let e of s){let t=e===d;!e.added&&!e.removed?(kn({item:e,arr:c,enableJoin:u,isNeutral:!0,isLastItem:t}),kn({item:e,arr:l,enableJoin:u,isNeutral:!0,isLastItem:t})):e.removed?kn({item:e,arr:c,enableJoin:u,isLastItem:t}):kn({item:e,arr:l,enableJoin:u,isLastItem:t})}return{deletion:Mn(c),addition:Mn(l)}}function Mn(e){let t=[],n=0;for(let[r,i]of e)r===1&&t.push([n,n+i.length]),n+=i.length;return t}function Nn(e){let t=0,n=0,r=-1,i=0,a=-1,o=0;for(let{value:s,added:c,removed:l}of e)l?(r===-1&&(r=t),t+=s.length,i=t):c?(a===-1&&(a=n),n+=s.length,o=n):(t+=s.length,n+=s.length);return{deletion:r===-1?[]:[[r,i]],addition:a===-1?[]:[[a,o]]}}var Pn,Fn=Object.freeze([]),In=(Pn=new WeakMap,class{constructor(n,r,i=`jsdiff`){e(this,`lineDiffType`,void 0),e(this,`maxLineDiffLength`,void 0),e(this,`preferredDiffLib`,void 0),t(this,Pn,new Map),this.lineDiffType=n,this.maxLineDiffLength=r,this.preferredDiffLib=i}get(e,t,r){let i=n(Pn,this).get(e);if(i!=null&&i.deletionText===t&&i.additionText===r)return i.ranges;let a;try{a=jn(t,r,this.lineDiffType,this.maxLineDiffLength,this.preferredDiffLib)}catch(e){if(this.preferredDiffLib===`jsdiff`)throw e;console.error(e),this.preferredDiffLib=`jsdiff`,a=jn(t,r,this.lineDiffType,this.maxLineDiffLength,this.preferredDiffLib)}return n(Pn,this).set(e,{deletionText:t,additionText:r,ranges:a}),a}});function Ln(e,t,n,r){let i=e.pairFor(t,n);if(i==null)return Fn;let{deletionLines:a,additionLines:o}=e.diff,s=t===`deletions`?r.get(n,a[n],o[i]):r.get(i,a[i],o[n]);return t===`deletions`?s.deletion:s.addition}function Rn(e,t){if(t.length===0)return e;let n=[];if(Bn(e.children,n),n.length===0)throw Error(`markRow: an empty row has no text to mark`);let r={type:`element`,tagName:e.tagName,properties:{...e.properties},children:[]},i=t.map(([e,t])=>({start:{line:0,character:e},end:{line:0,character:t},properties:{"data-diff-span":``},alwaysWrap:!0})),a=0;for(let e of n)a+=e.text.length;let o=new te(r,i,0,a),s=0;for(let e of n){let{text:t}=e,n=s,r=n+t.length;for(;s<r;){o.moveTo(s);let i=Math.min(r,o.nextEdge);o.parent.children.push(zn(e,s===n&&i===r?t:t.slice(s-n,i-n))),s=i}}return o.moveTo(s),n.some(e=>e.char!=null)&&se(r),r}function zn(e,t){if(e.properties==null)return{type:`text`,value:t};let n={...e.properties};return e.char!=null&&(n[`data-char`]=e.char),{type:`element`,tagName:`span`,properties:n,children:[{type:`text`,value:t}]}}function Bn(e,t){for(let n of e){if(n.type===`text`){if(n.value===`
`&&e.length===1)continue;t.push({text:n.value,properties:void 0,char:void 0});continue}if(n.type!==`element`||n.tagName===`br`)continue;if(n.tagName!==`span`)throw Error(`markRow: unexpected <${n.tagName}> in a base row`);if(n.properties[`data-diff-span`]!=null||n.children.some(e=>e.type!==`text`))throw Error(`markRow: a base row has no wrapper spans`);let r={...n.properties},i=r[`data-char`];delete r[`data-char`];let a=``;for(let e of n.children)e.type===`text`&&(a+=e.value);t.push({text:a,properties:r,char:typeof i==`number`?i:void 0})}}function Vn(e){return k({tagName:`div`,properties:{"data-content-buffer":``,"data-buffer-size":e,style:`grid-row: span ${e};min-height:calc(${e} * 1lh)`}})}function Hn(e){return k({tagName:`div`,children:[k({tagName:`span`,children:[N(I.t(`noNewlineAtEndOfFile`))]})],properties:{"data-no-newline":``,"data-line-type":e,"data-column-content":``}})}function Un(e){return k({tagName:`div`,children:[A({name:e===`both`?`diffs-icon-expand-all`:`diffs-icon-expand`,properties:{"data-icon":``}})],properties:{role:`button`,"data-expand-button":``,"data-expand-both":e===`both`?``:void 0,"data-expand-up":e===`up`?``:void 0,"data-expand-down":e===`down`?``:void 0}})}function Wn({type:e,content:t,expandIndex:n,chunked:r=!1,slotName:i,isFirstHunk:a,isLastHunk:o}){let s=0,c=[];if(e===`metadata`&&t!=null&&c.push(k({tagName:`div`,children:[N(t)],properties:{"data-separator-wrapper":``}})),(e===`line-info`||e===`line-info-basic`)&&t!=null){let e=[];n!=null&&(r?(a||(e.push(Un(`up`)),s++),o||(e.push(Un(`down`)),s++)):(e.push(Un(!a&&!o?`both`:a?`down`:`up`)),s++)),e.push(k({tagName:`div`,children:[k({tagName:`span`,children:[N(t)],properties:{"data-unmodified-lines":``}})],properties:{"data-separator-content":``}})),r&&n!=null&&e.push(k({tagName:`div`,children:[N(I.t(`expandAll`))],properties:{role:`button`,"data-expand-button":``,"data-expand-all-button":``}})),c.push(k({tagName:`div`,children:e,properties:{"data-separator-wrapper":``,"data-separator-multi-button":s>1?``:void 0}}))}return e===`custom`&&i!=null&&c.push(k({tagName:`slot`,properties:{name:i}})),k({tagName:`div`,children:c,properties:{"data-separator":c.length===0?`simple`:e,"data-expand-index":n,"data-separator-first":a?``:void 0,"data-separator-last":o?``:void 0}})}function Gn(e,t){return`hunk-separator-${e}-${t}`}function Kn(e){let t=e.at(-1);return t==null?0:Math.max(C(t.additionStart,t.additionCount),C(t.deletionStart,t.deletionCount))}function qn(e){return[m(e.additionStart,e.additionCount)+1,C(e.additionStart,e.additionCount)+1]}function Jn(e){return[m(e.deletionStart,e.deletionCount)+1,C(e.deletionStart,e.deletionCount)+1]}function Yn(e,t){return t===`additions`?qn(e):Jn(e)}function Xn(e,t,n){let r={fromStart:e?.fromStart??0,fromEnd:e?.fromEnd??0};return(t===`up`||t===`both`)&&(r.fromStart+=n),(t===`down`||t===`both`)&&(r.fromEnd+=n),r}function Zn({isPartial:e,rangeSize:t,expandedHunks:n,hunkIndex:r,collapsedContextThreshold:i}){let a=Math.max(t,0);if(a===0||e)return{fromStart:0,fromEnd:0,rangeSize:a,collapsedLines:a,renderAll:!1};if(n===!0||a<=i)return{fromStart:a,fromEnd:0,rangeSize:a,collapsedLines:0,renderAll:!0};let o=n?.get(r),s=Math.min(Math.max(o?.fromStart??0,0),a),c=Math.min(Math.max(o?.fromEnd??0,0),a),l=s+c,u=l>=a;return{fromStart:u?a:s,fromEnd:u?0:c,rangeSize:a,collapsedLines:Math.max(a-l,0),renderAll:u}}function Qn({fileDiff:e,errorPrefix:t}){let n=e.hunks[e.hunks.length-1];if(n==null||e.isPartial||e.additionLines.length===0||e.deletionLines.length===0)return 0;let r=e.additionLines.length-C(n.additionStart,n.additionCount),i=e.deletionLines.length-C(n.deletionStart,n.deletionCount);if(r<=0&&i<=0)return 0;if(r!==i)throw Error(`${t}: trailing context mismatch (additions=${r}, deletions=${i}) for ${e.name}`);return Math.min(r,i)}function $n({fileDiff:e,hunkIndex:t,expandedHunks:n,collapsedContextThreshold:r,errorPrefix:i}){if(t!==e.hunks.length-1)return;let a=Qn({fileDiff:e,errorPrefix:i});if(a<=0)return;if(n===!0||a<=r)return{fromStart:a,fromEnd:0,rangeSize:a,collapsedLines:0,renderAll:!0};let o=n?.get(e.hunks.length),s=Math.min(Math.max(o?.fromStart??0,0),a);return{fromStart:s,fromEnd:0,rangeSize:a,collapsedLines:a-s,renderAll:s>=a}}function er({fileDiff:e,lineNumber:t,side:n,expandedHunks:r,collapsedContextThreshold:i}){if(r===!0||e.isPartial)return!1;for(let[a,o]of e.hunks.entries()){let[s,c]=Yn(o,n);if(t<s){let n=Zn({isPartial:e.isPartial,rangeSize:o.collapsedBefore,expandedHunks:r,hunkIndex:a,collapsedContextThreshold:i}),c=s-n.rangeSize;return!n.renderAll&&t>=c+n.fromStart&&t<s-n.fromEnd}if(t<c)return!1}let a=$n({fileDiff:e,hunkIndex:e.hunks.length-1,expandedHunks:r,collapsedContextThreshold:i,errorPrefix:`isDiffLineInCollapsedContext`});if(a==null||a.renderAll)return!1;let o=e.hunks[e.hunks.length-1],[,s]=Yn(o,n);return t>=s+a.fromStart&&t<s+a.rangeSize}function tr({fileDiff:e,lineNumber:t,direction:n,expandedHunks:r,collapsedContextThreshold:i}){if(r===!0||e.isPartial)return t;let a=[],o=1;for(let[t,n]of e.hunks.entries()){let[s,c]=qn(n),l=Zn({isPartial:e.isPartial,rangeSize:n.collapsedBefore,expandedHunks:r,hunkIndex:t,collapsedContextThreshold:i}),u=s-l.rangeSize;l.renderAll?a.push([u,s]):(l.fromStart>0&&a.push([u,u+l.fromStart]),l.fromEnd>0&&a.push([s-l.fromEnd,s])),a.push([s,c]),o=c}let s=$n({fileDiff:e,hunkIndex:e.hunks.length-1,expandedHunks:r,collapsedContextThreshold:i,errorPrefix:`getNearestRenderableAdditionLine`});if(s!=null){let e=o;o=e+s.rangeSize,s.renderAll?a.push([e,o]):s.fromStart>0&&a.push([e,e+s.fromStart])}if(t>=o)return t;if(n===`down`){for(let[e,n]of a)if(n>t)return Math.max(e,t)}else for(let e=a.length-1;e>=0;e--){let[n,r]=a[e];if(n<=t)return Math.min(r-1,t)}}function nr({type:e,metrics:t}){return t.hunkSeparatorHeight??Tn(e)}function rr({type:e,metrics:t}){return e===`simple`||e===`metadata`||e===`line-info-basic`?0:t.spacing}function ir({type:e,hunkIndex:t,hunkSpecs:n}){switch(e){case`simple`:return t>0;case`metadata`:return n!=null;case`line-info`:case`line-info-basic`:case`custom`:return!0}}function ar(e){return e!==`simple`&&e!==`metadata`}function or({type:e,metrics:t,hunkIndex:n,hunkSpecs:r}){if(!ir({type:e,hunkIndex:n,hunkSpecs:r}))return;let i=nr({type:e,metrics:t}),a=rr({type:e,metrics:t}),o=n>0?a:0,s=a;return{height:i,gapBefore:o,gapAfter:s,totalHeight:o+i+s}}function sr({type:e,metrics:t}){if(!ar(e))return;let n=nr({type:e,metrics:t}),r=rr({type:e,metrics:t});return{height:n,gapBefore:r,gapAfter:0,totalHeight:r+n}}function cr({diff:e,diffStyle:t,startingLine:n=0,totalLines:r=1/0,expandedHunks:i,collapsedContextThreshold:a=1,includeTrailingNewline:o=!1,callback:s}){let c=ur({diff:e,diffStyle:t,startingLine:n,expandedHunks:i,collapsedContextThreshold:a,includeTrailingNewline:o}),l={viewportStart:n,viewportEnd:n+r,isWindowedHighlight:n>0||r<1/0,splitCount:c.splitCount,unifiedCount:c.unifiedCount,finalHunkIndex:e.hunks.length-1,shouldBreak(){if(!l.isWindowedHighlight)return!1;let e=l.unifiedCount>=n+r,i=l.splitCount>=n+r;return t===`unified`?e:(t===`split`||e)&&i},shouldSkip(e,r){if(!l.isWindowedHighlight)return!1;let i=e>0&&l.unifiedCount+e<=n,a=r>0&&l.splitCount+r<=n;return t===`unified`?i:(t===`split`||i)&&a},incrementCounts(e,n){(t===`unified`||t===`both`)&&(l.unifiedCount+=e),(t===`split`||t===`both`)&&(l.splitCount+=n)},isInWindow(e,n){if(!l.isWindowedHighlight)return!0;let r=l.isInUnifiedWindow(e),i=l.isInSplitWindow(n);return t===`unified`?r:t===`split`?i:r||i},isInUnifiedWindow(e){return!l.isWindowedHighlight||l.unifiedCount>=n-e&&l.unifiedCount<n+r},isInSplitWindow(e){return!l.isWindowedHighlight||l.splitCount>=n-e&&l.splitCount<n+r},emit(e,n=!1){return n||(t===`unified`?l.incrementCounts(1,0):t===`split`?l.incrementCounts(0,1):l.incrementCounts(1,1)),s(e)??!1}};hunkIterator:for(let n=c.hunkIndex;n<e.hunks.length;n++){let r=e.hunks[n];if(r==null)throw Error(`iterateOverDiff: invalid hunk index`);if(l.shouldBreak())break;let s=m(r.deletionStart,r.deletionCount),c=m(r.additionStart,r.additionCount),u=!e.isPartial&&r.deletionCount===0?s:r.deletionLineIndex,d=!e.isPartial&&r.additionCount===0?c:r.additionLineIndex,f=Zn({isPartial:e.isPartial,rangeSize:r.collapsedBefore,expandedHunks:i,hunkIndex:n,collapsedContextThreshold:a}),p=n===l.finalHunkIndex?$n({fileDiff:e,hunkIndex:n,expandedHunks:i,collapsedContextThreshold:a,errorPrefix:`iterateOverDiff`}):void 0,h=f.fromStart+f.fromEnd;function g(e,n){return p==null||p.collapsedLines<=0||p.fromStart+p.fromEnd>0?0:t===`unified`?e===r.unifiedLineStart+r.unifiedLineCount-1?p.collapsedLines:0:n===r.splitLineStart+r.splitLineCount-1?p.collapsedLines:0}let _=f.collapsedLines===0;function v(){return _?0:(_=!0,f.collapsedLines)}if(l.shouldSkip(h,h))l.incrementCounts(h,h),v();else{let e=r.unifiedLineStart-f.rangeSize,i=r.splitLineStart-f.rangeSize,a=u-f.rangeSize,o=d-f.rangeSize,p=s+1-f.rangeSize,m=c+1-f.rangeSize;if(pr(l,f.fromStart,t,t=>l.emit({hunkIndex:n,hunk:r,collapsedBefore:0,collapsedAfter:0,type:`context-expanded`,deletionLine:{lineNumber:p+t,lineIndex:a+t,noEOFCR:!1,unifiedLineIndex:e+t,splitLineIndex:i+t},additionLine:{unifiedLineIndex:e+t,splitLineIndex:i+t,lineIndex:o+t,lineNumber:m+t,noEOFCR:!1}}))||(e=r.unifiedLineStart-f.fromEnd,i=r.splitLineStart-f.fromEnd,a=u-f.fromEnd,o=d-f.fromEnd,p=s+1-f.fromEnd,m=c+1-f.fromEnd,pr(l,f.fromEnd,t,t=>l.emit({hunkIndex:n,hunk:r,collapsedBefore:v(),collapsedAfter:0,type:`context-expanded`,deletionLine:{lineNumber:p+t,lineIndex:a+t,noEOFCR:!1,unifiedLineIndex:e+t,splitLineIndex:i+t},additionLine:{unifiedLineIndex:e+t,splitLineIndex:i+t,lineIndex:o+t,lineNumber:m+t,noEOFCR:!1}}),()=>{v()})))break hunkIterator}let y=r.unifiedLineStart,b=r.splitLineStart,x=u,S=d,C=s+1,w=c+1,T=r.hunkContent.at(-1);for(let e of r.hunkContent){if(l.shouldBreak())break hunkIterator;let i=e===T;if(e.type===`context`){if(l.shouldSkip(e.lines,e.lines))l.incrementCounts(e.lines,e.lines),v();else if(pr(l,e.lines,t,t=>{let a=i&&t===e.lines-1,o=y+t,s=b+t;return l.emit({hunkIndex:n,hunk:r,collapsedBefore:v(),collapsedAfter:g(o,s),type:`context`,hunkContent:e,deletionLine:{lineNumber:C+t,lineIndex:x+t,noEOFCR:a&&r.noEOFCRDeletions,unifiedLineIndex:o,splitLineIndex:s},additionLine:{unifiedLineIndex:o,splitLineIndex:s,lineIndex:S+t,lineNumber:w+t,noEOFCR:a&&r.noEOFCRAdditions}})},()=>{v()}))break hunkIterator;y+=e.lines,b+=e.lines,x+=e.lines,S+=e.lines,C+=e.lines,w+=e.lines}else{let a=Math.max(e.deletions,e.additions),o=e.deletions+e.additions;if(!l.shouldSkip(o,a)){let s=mr(l,e,t);(s[0]?.[0]??0)>0&&v();for(let[c,u]of s)for(let s=c;s<u;s++){let c=g(y+s,t===`unified`?b+(s<e.deletions?s:s-e.deletions):b+s);if(l.emit(hr({hunkIndex:n,hunk:r,collapsedBefore:v(),collapsedAfter:c,diffStyle:t,index:s,unifiedLineIndex:y,splitLineIndex:b,additionLineIndex:S,deletionLineIndex:x,additionLineNumber:w,deletionLineNumber:C,content:e,isLastContent:i,unifiedCount:o,splitCount:a}),!0))break hunkIterator}}v(),l.incrementCounts(o,a),y+=o,b+=a,x+=e.deletions,S+=e.additions,C+=e.deletions,w+=e.additions}}if(p!=null){let{collapsedLines:n,fromStart:r,fromEnd:i}=p,a=r+i;if(pr(l,a,t,t=>{let r=t===a-1;return l.emit({hunkIndex:e.hunks.length,hunk:void 0,collapsedBefore:0,collapsedAfter:r?n:0,type:`context-expanded`,deletionLine:{lineNumber:C+t,lineIndex:x+t,noEOFCR:!1,unifiedLineIndex:y+t,splitLineIndex:b+t},additionLine:{unifiedLineIndex:y+t,splitLineIndex:b+t,lineIndex:S+t,lineNumber:w+t,noEOFCR:!1}})},void 0,()=>l.shouldBreak()))break hunkIterator}if(o&&n===l.finalHunkIndex&&(p?.collapsedLines??0)===0&&lr(e,`additions`)){let n=p==null?0:p.fromStart+p.fromEnd,r={unifiedLineIndex:y+n,splitLineIndex:b+n,lineIndex:S+n,lineNumber:w+n,noEOFCR:!1},i={unifiedLineIndex:y+n,splitLineIndex:b+n,lineIndex:x+n,lineNumber:C+n,noEOFCR:!1},a={hunkIndex:e.hunks.length,hunk:void 0,collapsedBefore:0,collapsedAfter:0};if(pr(l,1,t,()=>l.emit(lr(e,`deletions`)?{...a,type:`context`,deletionLine:i,additionLine:r,hunkContent:{type:`context`,lines:1,additionLineIndex:r.lineIndex,deletionLineIndex:i.lineIndex}}:{...a,type:`change`,additionLine:r,hunkContent:{type:`change`,additions:1,deletions:0,additionLineIndex:r.lineIndex,deletionLineIndex:i.lineIndex}})))break hunkIterator}}}function lr(e,t){let n=t===`additions`?e.additionLines:e.deletionLines;if(n.length===0)return!1;if(e.isPartial){let n=e.hunks.at(-1);return n!=null&&!(t===`additions`?n.noEOFCRAdditions:n.noEOFCRDeletions)}return n.at(-1)?.endsWith(`
`)===!0}function ur({diff:e,diffStyle:t,startingLine:n,expandedHunks:r,collapsedContextThreshold:i,includeTrailingNewline:a=!1}){if(n<=0||t===`both`)return{hunkIndex:0,splitCount:0,unifiedCount:0};let o=dr({diff:e,expandedHunks:r,collapsedContextThreshold:i}),s=0,c=e.hunks.length-1,l=e.hunks.length;for(;s<=c;){let e=s+c>>1,r=o[e+1];if(r==null)throw Error(`iterateOverDiff: invalid hunk prefix index`);(t===`unified`?r.unifiedCount:r.splitCount)>n?(l=e,c=e-1):s=e+1}if(l>=e.hunks.length){if(a&&e.hunks.length>0)l=e.hunks.length-1;else{let t=o[e.hunks.length];if(t==null)throw Error(`iterateOverDiff: invalid terminal hunk prefix index`);return{hunkIndex:e.hunks.length,splitCount:t.splitCount,unifiedCount:t.unifiedCount}}}let u=o[l];if(u==null)throw Error(`iterateOverDiff: invalid selected hunk prefix index`);return{hunkIndex:l,splitCount:u.splitCount,unifiedCount:u.unifiedCount}}function dr({diff:e,expandedHunks:t,collapsedContextThreshold:n}){let r=0,i=0,a=e.hunks.length-1,o=[{splitCount:0,unifiedCount:0}];for(let s=0;s<e.hunks.length;s++){let c=e.hunks[s];if(c==null)throw Error(`iterateOverDiff: invalid hunk summary index`);let l=Zn({isPartial:e.isPartial,rangeSize:c.collapsedBefore,expandedHunks:t,hunkIndex:s,collapsedContextThreshold:n}),u=l.fromStart+l.fromEnd;r+=u+c.splitLineCount,i+=u+c.unifiedLineCount;let d=s===a?$n({fileDiff:e,hunkIndex:s,expandedHunks:t,collapsedContextThreshold:n,errorPrefix:`iterateOverDiff`}):void 0;if(d!=null){let e=d.fromStart+d.fromEnd;r+=e,i+=e}o.push({splitCount:r,unifiedCount:i})}return o}function fr(e,t,n){if(!e.isWindowedHighlight||t<=0)return[0,t];let r=[];function i(n){let i=Math.max(0,e.viewportStart-n),a=Math.min(t,e.viewportEnd-n);a>i&&r.push([i,a])}if(n!==`split`&&i(e.unifiedCount),n!==`unified`&&i(e.splitCount),r.length===0)return[0,0];let a=r[0][0],o=r[0][1];for(let e=1;e<r.length;e++){let t=r[e];a=Math.min(a,t[0]),o=Math.max(o,t[1])}return[a,o]}function pr(e,t,n,r,i,a){let[o,s]=fr(e,t,n);o>0&&(e.incrementCounts(o,o),i?.());let c=o;for(;c<t;){if(a?.()===!0)return!0;if(c>=s){e.incrementCounts(t-c,t-c);break}if(e.isInWindow(0,0)){if(r(c)===!0)return!0}else e.incrementCounts(1,1);c++}return!1}function mr(e,t,n){if(!e.isWindowedHighlight)return[[0,n===`unified`?t.deletions+t.additions:Math.max(t.deletions,t.additions)]];let r=n!==`split`,i=n!==`unified`,a=n===`unified`?`unified`:`split`,o=[];function s(t,n){if(t+n<=e.viewportStart||t>=e.viewportEnd)return;let r=Math.max(0,e.viewportStart-t),i=Math.min(n,e.viewportEnd-t);return i>r?[r,i]:void 0}function c(e,n){return a===`split`?e:n===`additions`?[e[0]+t.deletions,e[1]+t.deletions]:e}function l(e,t){if(e==null)return;let[n,r]=c(e,t);r>n&&o.push([n,r])}if(r&&(l(s(e.unifiedCount,t.deletions),`deletions`),l(s(e.unifiedCount+t.deletions,t.additions),`additions`)),i&&(l(s(e.splitCount,t.deletions),`deletions`),l(s(e.splitCount,t.additions),`additions`)),o.length===0)return o;o.sort((e,t)=>e[0]-t[0]);let u=[o[0]];for(let[e,t]of o.slice(1)){let n=u[u.length-1];e<=n[1]?n[1]=Math.max(n[1],t):u.push([e,t])}return u}function hr({hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,diffStyle:i,index:a,unifiedLineIndex:o,splitLineIndex:s,additionLineIndex:c,deletionLineIndex:l,additionLineNumber:u,deletionLineNumber:d,content:f,isLastContent:p,unifiedCount:m,splitCount:h}){let g=a<f.deletions?o+a:void 0,_=i===`unified`?a>=f.deletions?o+a:void 0:a<f.additions?o+f.deletions+a:void 0,v=i===`unified`?s+(a<f.deletions?a:a-f.deletions):s+a,y=a<f.deletions?l+a:void 0,b=a<f.deletions?d+a:void 0,x=i===`unified`?a>=f.deletions?c+(a-f.deletions):void 0:a<f.additions?c+a:void 0,S=i===`unified`?a>=f.deletions?u+(a-f.deletions):void 0:a<f.additions?u+a:void 0,C=i===`unified`?p&&a===f.deletions-1&&t.noEOFCRDeletions:p&&a===h-1&&t.noEOFCRDeletions,w=i===`unified`?p&&a===m-1&&t.noEOFCRAdditions:p&&a===h-1&&t.noEOFCRAdditions,T=y!=null&&b!=null&&g!=null?{lineNumber:b,lineIndex:y,noEOFCR:C,unifiedLineIndex:g,splitLineIndex:v}:void 0,E=x!=null&&S!=null&&_!=null?{unifiedLineIndex:_,splitLineIndex:v,lineIndex:x,lineNumber:S,noEOFCR:w}:void 0;if(T==null&&E!=null)return{type:`change`,hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,deletionLine:void 0,additionLine:E,hunkContent:f};if(T!=null&&E==null)return{type:`change`,hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,deletionLine:T,additionLine:void 0,hunkContent:f};if(T==null||E==null)throw Error(`iterateOverDiff: missing change line data`);return{type:`change`,hunkIndex:e,hunk:t,collapsedAfter:n,collapsedBefore:r,deletionLine:T,additionLine:E,hunkContent:f}}var gr,W,_r,G,vr,K,q,J;function yr(e,t){return e.host===t.host&&e.model===t.model&&e.rows===t.rows&&e.expandedHunks===t.expandedHunks&&e.deletionAnnotations===t.deletionAnnotations&&e.additionAnnotations===t.additionAnnotations&&e.annotationSlotName===t.annotationSlotName&&e.includeTrailingNewline===t.includeTrailingNewline&&e.showNoNewlineMarkers===t.showNoNewlineMarkers&&Qe(e.renderRange,t.renderRange)}var br=Object.freeze([]),xr=(gr=new WeakMap,W=new WeakMap,_r=new WeakMap,G=new WeakMap,vr=new WeakMap,K=new WeakMap,q=new WeakMap,J=new WeakSet,class{constructor(n){de(this,J),e(this,`options`,void 0),t(this,gr,void 0),t(this,W,new nt),t(this,_r,new WeakMap),t(this,G,new Map),t(this,vr,new Map),t(this,K,void 0),t(this,q,void 0),this.options=n,i(gr,this,new In(n.lineDiffType,n.maxLineDiffLength,n.preferredDiffLib))}setOptions(e){let t=this.options;(e.lineDiffType!==t.lineDiffType||e.maxLineDiffLength!==t.maxLineDiffLength||e.preferredDiffLib!==t.preferredDiffLib)&&i(gr,this,new In(e.lineDiffType,e.maxLineDiffLength,e.preferredDiffLib)),(e.diffStyle!==t.diffStyle||e.expandUnchanged!==t.expandUnchanged||e.expansionLineCount!==t.expansionLineCount||e.collapsedContextThreshold!==t.collapsedContextThreshold||e.hunkSeparators!==t.hunkSeparators||e.lineDiffType!==t.lineDiffType||e.maxLineDiffLength!==t.maxLineDiffLength||e.preferredDiffLib!==t.preferredDiffLib||e.canHydrateContext!==t.canHydrateContext)&&this.invalidateLines(),this.options=e}markLines(e){let t=n(q,this)??i(q,this,new Set);for(let n of e)t.add(n)}forgetLines(e){n(W,this).forgetLines(e);for(let t of e)n(G,this).delete(`a${t}`)}invalidateLines(){n(G,this).clear(),n(vr,this).clear(),i(K,this,void 0),i(q,this,void 0)}newFileLines(e){let t=n(K,this);if(t!=null&&yr(t.input,e))return t.result.newFileLines;let{diffStyle:r,expandUnchanged:i,collapsedContextThreshold:a}=this.options,o,s;return cr({diff:e.model.diff,diffStyle:r,startingLine:e.renderRange.startingLine,totalLines:e.renderRange.totalLines,expandedHunks:i?!0:e.expandedHunks,collapsedContextThreshold:a,includeTrailingNewline:e.includeTrailingNewline,callback:({additionLine:e})=>{e!=null&&(o??=e.lineNumber,s=e.lineNumber)}}),o==null||s==null?void 0:{first:o,last:s}}layout(e){let t=n(q,this);i(q,this,void 0);let a=n(K,this);if(t!=null&&a!=null&&yr(a.input,e))return r(J,this,Sr).call(this,a,t,e);let{host:o,model:s,renderRange:c,expandedHunks:l,includeTrailingNewline:u,showNoNewlineMarkers:d}=e,{diff:f}=s,{diffStyle:p,expandUnchanged:m,expansionLineCount:h,collapsedContextThreshold:g,hunkSeparators:_,canHydrateContext:v}=this.options,y=p===`unified`,b=!f.isPartial||v,x=this.options.lineDiffType!==`none`;n(G,this).clear(),n(vr,this).clear();let S={unified:rt(),deletions:rt(),additions:rt()},C=[],w=0,T,E,D={size:0,side:void 0},O=()=>{if(y)return;let{size:e,side:t}=D;if(D.size=0,D.side=void 0,e<=0||t==null)return;let r=S[t];n(W,this).fixedRow(r,Or(r),`${e}`,()=>({gutter:ne(void 0,`buffer`,e),content:Vn(e)}))},ee=e=>{O();let t=y?[`unified`]:[`deletions`,`additions`];for(let n of t)r(J,this,Cr).call(this,S[n],n,e,_,h,C)&&n!==`additions`&&w++},te=(e,t,r,i)=>{n(W,this).fixedRow(e,`ann:${t}`,`${i}|${r.hunkIndex},${r.lineIndex}|${r.annotations.join(`,`)}`,()=>({gutter:ne(i,`annotation`,1),content:it(o.createAnnotationElement(r))}))};r(J,this,Dr).call(this,e,S,te,()=>{w++});let k=Qn({fileDiff:f,errorPrefix:`DiffLayout.layout`});cr({diff:f,diffStyle:p,startingLine:c.startingLine,totalLines:c.totalLines,expandedHunks:m?!0:l,collapsedContextThreshold:g,includeTrailingNewline:u,callback:({hunkIndex:t,hunk:i,collapsedBefore:a,collapsedAfter:c,additionLine:l,deletionLine:u,type:p})=>{l!=null&&(T??=l.lineNumber,E=l.lineNumber);let m=u==null?l.splitLineIndex:u.splitLineIndex,h=l==null?u.unifiedLineIndex:l.unifiedLineIndex;!y&&p!==`change`&&O(),a>0&&ee({hunkIndex:t,collapsedLines:a,rangeSize:Math.max(i?.collapsedBefore??0,0),hunkSpecs:i?.hunkSpecs,isFirstHunk:t===0,isLastHunk:!1,isExpandable:b});let g=y?h:m,C={type:p,hunkIndex:t,lineIndex:g,unifiedLineIndex:h,splitLineIndex:m,deletionLine:u,additionLine:l},A=x&&p===`change`,re=l==null?void 0:`a${s.lineId(l.lineIndex)}`,j=u==null?void 0:`d${u.lineIndex}`,M=re??j,N=j??re,ie=re??j;if(y){let n=o.getUnifiedInjectedRowsForLine?.(C);n?.before!=null&&(w+=Ar(S.unified,n.before,`${M}:before`));let i=p===`change`?l==null?`change-deletion`:`change-addition`:p,a=o.getUnifiedLineDecoration({type:p,lineType:i,additionLineIndex:l?.lineIndex,deletionLineIndex:u?.lineIndex}),s=`${h},${m}`;r(J,this,wr).call(this,e,S.unified,l==null?{column:`unified`,key:M,side:`deletions`,lineIndex:u.lineIndex,marked:A,contentProperties:{...a.contentProperties,contenteditable:`false`},lineNumber:u.lineNumber,altLineNumber:void 0,lineIndexText:s,gutterLineType:a.gutterLineType,gutterProperties:a.gutterProperties}:{column:`unified`,key:M,side:`additions`,lineIndex:l.lineIndex,marked:A,contentProperties:a.contentProperties,lineNumber:l.lineNumber,altLineNumber:p===`change`?void 0:u?.lineNumber,lineIndexText:s,gutterLineType:a.gutterLineType,gutterProperties:a.gutterProperties});let c=Mr(e,u?.lineNumber,l?.lineNumber,t,g);c!=null&&(te(S.unified,M,c,i),w++),n?.after!=null&&(w+=Ar(S.unified,n.after,`${M}:after`))}else{let n=o.getSplitInjectedRowsForLine?.(C);n?.before!=null&&(w+=jr(S,n.before,`${M}:before`,D,O));let i=o.getSplitLineDecoration({side:`deletions`,type:p,lineIndex:u?.lineIndex}),a=o.getSplitLineDecoration({side:`additions`,type:p,lineIndex:l?.lineIndex}),s=p===`change`?l==null?`additions`:u==null?`deletions`:void 0:void 0;s==null?p===`change`&&O():(D.side!=null&&D.side!==s&&O(),D.side=s,D.size+=1);let c=Nr(e,u?.lineNumber,l?.lineNumber,t,g);c!=null&&D.size>0&&O(),u!=null&&r(J,this,wr).call(this,e,S.deletions,{column:`deletions`,key:N,side:`deletions`,lineIndex:u.lineIndex,marked:A,contentProperties:i.contentProperties,lineNumber:u.lineNumber,altLineNumber:p===`change`?void 0:l?.lineNumber,lineIndexText:`${u.unifiedLineIndex},${m}`,gutterLineType:i.gutterLineType,gutterProperties:i.gutterProperties}),l!=null&&r(J,this,wr).call(this,e,S.additions,{column:`additions`,key:ie,side:`additions`,lineIndex:l.lineIndex,marked:A,contentProperties:a.contentProperties,lineNumber:l.lineNumber,altLineNumber:p===`change`?void 0:u?.lineNumber,lineIndexText:`${l.unifiedLineIndex},${m}`,gutterLineType:a.gutterLineType,gutterProperties:a.gutterProperties}),c!=null&&(te(S.deletions,N,c.deletionSpan,p===`change`?u==null?`context`:`change-deletion`:p),te(S.additions,ie,c.additionSpan,p===`change`?l==null?`context`:`change-addition`:p),w++),n?.after!=null&&(w+=jr(S,n.after,`${M}:after`,D,O))}let ae=!y&&i!=null&&m===i.splitLineStart+i.splitLineCount-1,oe=t===f.hunks.length-1&&i!=null&&(y?h===i.unifiedLineStart+i.unifiedLineCount-1:m===i.splitLineStart+i.splitLineCount-1),se=(u?.noEOFCR??!1)||ae&&i.noEOFCRDeletions,ce=(l?.noEOFCR??!1)||ae&&i.noEOFCRAdditions;if(d&&(ce||se)){if(O(),se){let e=p===`context`||p===`context-expanded`?p:`change-deletion`;n(W,this).fixedRow(y?S.unified:S.deletions,`eof:d`,e,()=>{let t=Hn(e);return{gutter:ne(e,`metadata`,1),content:e===`change-deletion`?it(t):t}}),!y&&!ce&&n(W,this).fixedRow(S.additions,Or(S.additions),`1`,()=>({gutter:ne(void 0,`buffer`,1),content:Vn(1)}))}if(ce&&!(y&&se&&p!==`change`)){let e=p===`context`||p===`context-expanded`?p:`change-addition`;n(W,this).fixedRow(y?S.unified:S.additions,`eof:a`,e,()=>({gutter:ne(e,`metadata`,1),content:Hn(e)})),!y&&!se&&n(W,this).fixedRow(S.deletions,Or(S.deletions),`1`,()=>({gutter:ne(void 0,`buffer`,1),content:Vn(1)}))}w++}_!==`simple`&&_!==`metadata`&&(c>0||oe&&v)&&ee({hunkIndex:p===`context-expanded`?t:t+1,collapsedLines:oe&&v?`unknown`:c,rangeSize:k,hunkSpecs:void 0,isFirstHunk:!1,isLastHunk:!0,isExpandable:b}),w++}}),O();let A=Math.max(Kn(f.hunks),s.lineCount,f.deletionLines.length),re=c.bufferBefore>0||c.bufferAfter>0,j=w>0||re,M=!y&&f.type!==`deleted`,N=!y&&f.type!==`new`,ie={columns:{unified:y&&j?S.unified.specs:void 0,deletions:N&&j?S.deletions.specs:void 0,additions:M&&j?S.additions.specs:void 0},newFileLines:T==null||E==null?void 0:{first:T,last:E},patched:void 0,hunkData:C,rowCount:w,totalLines:A};return i(K,this,{input:e,result:ie}),ie}});function Sr(e,t,a){let{model:o}=a,s={...e.result.columns},c=new Set,l={unified:s.unified==null?void 0:[],deletions:s.deletions==null?void 0:[],additions:s.additions==null?void 0:[]},u=new Set,d=e=>{let t=n(G,this).get(e),i=n(vr,this).get(e);if(t==null||i==null||u.has(e))return;u.add(e);let o=s[t.column];if(o==null)throw Error(`DiffLayout: a kept row is in a column that was not laid out`);c.has(t.column)||(o=o.slice(),s[t.column]=o,c.add(t.column));let d=r(J,this,Tr).call(this,a,t);o[i]=d,l[t.column]?.push(d)};for(let e of t){if(e<0||e>=o.lineCount)continue;d(`a${o.lineId(e)}`);let t=o.pairFor(`additions`,e);t!=null&&d(`d${t}`)}let f={...e.result,columns:s,patched:l};return i(K,this,{input:a,result:f}),f}function Cr(e,t,{hunkIndex:r,collapsedLines:i,rangeSize:a,hunkSpecs:o,isFirstHunk:s,isLastHunk:c,isExpandable:l},u,d,f){if(typeof i==`number`&&i<=0)return!1;if(u===`metadata`){if(o==null)return!1;let i=()=>Wn({type:`metadata`,content:o,isFirstHunk:s,isLastHunk:c});return n(W,this).fixedRow(e,`sep:${t}:${r}`,`metadata|${o}|${s}|${c}`,()=>({gutter:i(),content:it(i())})),!0}if(u===`simple`){if(r<=0)return!1;let i=()=>Wn({type:`simple`,isFirstHunk:s,isLastHunk:!1});return n(W,this).fixedRow(e,`sep:${t}:${r}`,`simple|${s}`,()=>({gutter:i(),content:it(i())})),!0}let p=Gn(t,r),m=a>d,h=l?r:void 0,g=typeof i==`number`?I.t(`unmodifiedLines`,{count:i}):I.t(`unknownUnmodifiedLines`),_=()=>Wn({type:u,content:g,expandIndex:h,chunked:m,slotName:p,isFirstHunk:s,isLastHunk:c});return n(W,this).fixedRow(e,`sep:${p}`,`${u}|${g}|${h}|${m}|${s}|${c}`,()=>({gutter:_(),content:it(_())})),f.push({slotName:p,hunkIndex:r,lines:typeof i==`number`?i:0,lineCountKnown:typeof i==`number`,type:t,expandable:l?{up:!s,down:!c,chunked:m}:void 0}),!0}function wr(e,t,i){n(G,this).set(i.key,i),n(vr,this).set(i.key,t.specs.length),R(t,r(J,this,Tr).call(this,e,i))}function Tr({model:e,rows:t},i){let a=i.side===`additions`?t.additionRow(e,i.lineIndex):t.deletionRow(e,i.lineIndex),o=i.marked?Ln(e,i.side,i.lineIndex,n(gr,this)):br,s=r(J,this,Er).call(this,a,o,i.contentProperties,i.lineNumber,i.altLineNumber,i.lineIndexText);return{key:i.key,gutter:n(W,this).gutter(i.key,i.gutterLineType,i.lineNumber,i.lineIndexText,i.gutterProperties),content:s}}function Er(e,t,r,i,a,o){let s=e;if(t.length>0){let r=n(_r,this).get(e);r!=null&&Pr(r.ranges,t)?s=r.row:(s=Rn(e,t),n(_r,this).set(e,{ranges:t,row:s}))}return n(W,this).line(s,r,i,a,o)}function Dr(e,t,n,r){let{model:i,renderRange:a,deletionAnnotations:o,additionAnnotations:s}=e;if(!lt(a))return;let{diff:c}=i,l=t=>t?.map(t=>e.annotationSlotName(t))??[],u=c.type===`new`?[]:l(ct(o)),d=c.type===`deleted`?[]:l(ct(s));(u.length!==0||d.length!==0)&&(this.options.diffStyle===`unified`?n(t.unified,`file`,{type:`annotation`,hunkIndex:-1,lineIndex:-1,annotations:u.concat(d)},`context`):(n(t.deletions,`file`,{type:`annotation`,hunkIndex:-1,lineIndex:-1,annotations:u},`context`),n(t.additions,`file`,{type:`annotation`,hunkIndex:-1,lineIndex:-1,annotations:d},`context`)),r())}function Or(e){return`buf:${e.lastKey??`top`}`}function kr(e,t,n){return e.id==null?`inj:${t}:${n}`:`inj:${e.id}`}function Ar(e,t,n){for(let[r,i]of t.entries())R(e,{key:kr(i,n,r),gutter:i.gutter,content:i.content});return t.length}function jr(e,t,n,r,i){let a=0;for(let[o,{deletion:s,addition:c}]of t.entries()){if(s==null&&c==null)continue;let t=s!=null&&c!=null?void 0:s==null?`deletions`:`additions`;(t==null||r.side!==t)&&i(),s!=null&&R(e.deletions,{key:kr(s,n,o),gutter:s.gutter,content:s.content}),c!=null&&R(e.additions,{key:kr(c,n,o),gutter:c.gutter,content:c.content}),t!=null&&(r.side=t,r.size+=1),a++}return a}function Mr(e,t,n,r,i){let a=[];if(t!=null)for(let n of e.deletionAnnotations[t]??[])a.push(e.annotationSlotName(n));if(n!=null)for(let t of e.additionAnnotations[n]??[])a.push(e.annotationSlotName(t));return a.length>0?{type:`annotation`,hunkIndex:r,lineIndex:i,annotations:a}:void 0}function Nr(e,t,n,r,i){let a={type:`annotation`,hunkIndex:r,lineIndex:i,annotations:[]},o={type:`annotation`,hunkIndex:r,lineIndex:i,annotations:[]};if(t!=null)for(let n of e.deletionAnnotations[t]??[])a.annotations.push(e.annotationSlotName(n));if(n!=null)for(let t of e.additionAnnotations[n]??[])o.annotations.push(e.annotationSlotName(t));if(a.annotations.length!==0||o.annotations.length!==0)return{deletionSpan:a,additionSpan:o}}function Pr(e,t){return e===t||e.length===t.length&&e.every((e,n)=>e[0]===t[n][0]&&e[1]===t[n][1])}function Fr(e,t){let n=h({name:e.prevName??e.name,contents:e.deletionLines.join(``)},{name:e.name,contents:e.additionLines.join(``),lang:e.lang},t);return{hunks:n.hunks,splitLineCount:n.splitLineCount,unifiedLineCount:n.unifiedLineCount,additionLines:n.additionLines,deletionLines:e.deletionLines,additionCharacterCount:n.additionCharacterCount,deletionCharacterCount:n.deletionCharacterCount,type:n.type}}function Ir(e,t){let n=Math.max(e,1),r=Array.from({length:n},(e,t)=>`${` `.repeat(t+1)}\n`).join(``);return r===t&&(r=Array.from({length:n},(e,t)=>`\u0000${` `.repeat(t)}\n`).join(``)),r}function Lr(e){for(let t of e)if(t.trim().length>0)return!1;return!0}function Rr(e,t){return t.length>0&&t.length<e.deletionLines.length&&Lr(t)}function zr(e,t,n,r){let i=e.deletionLines.join(``),a=Ir(t.length,i),o=h({name:e.prevName??e.name,contents:i},{name:e.name,contents:a,lang:e.lang},r);return{hunks:o.hunks,splitLineCount:o.splitLineCount,unifiedLineCount:o.unifiedLineCount,additionLines:t,deletionLines:e.deletionLines,additionCharacterCount:n,deletionCharacterCount:o.deletionCharacterCount,type:o.type}}function Br(e,t){return zr(e,[``],0,t)}function Vr(e,t){return e.additionLines.length===0?Br(e,t):Rr(e,e.additionLines)?zr(e,e.additionLines,e.additionCharacterCount,t):Fr(e,t)}function Hr(e,t){let n=e.hunks[t];n!=null&&(n.noEOFCRAdditions=Ur(e.additionLines,n.additionLineIndex,n.additionCount),n.noEOFCRDeletions=Ur(e.deletionLines,n.deletionLineIndex,n.deletionCount))}function Ur(e,t,n){let r=e.at(-1);return t>=0&&t+n===e.length&&r!=null&&r!==``&&!r.endsWith(`
`)}function Wr(e,t,n){return{...e,additionLineIndex:e.additionLineIndex+t,deletionLineIndex:e.deletionLineIndex+n}}function Gr(e){let t=0,n=0;for(let r of e.hunkContent)r.type===`context`?(t+=r.lines,n+=r.lines):(t+=Math.max(r.additions,r.deletions),n+=r.additions+r.deletions);e.splitLineCount=t,e.unifiedLineCount=n}function Kr(e){let t=0,n=0,r=0;for(let i of e.hunks)i.collapsedBefore=Math.max(m(i.additionStart,i.additionCount)-r,0),i.splitLineStart=t+i.collapsedBefore,i.unifiedLineStart=n+i.collapsedBefore,Gr(i),t+=i.collapsedBefore+i.splitLineCount,n+=i.collapsedBefore+i.unifiedLineCount,r=C(i.additionStart,i.additionCount);if(e.hunks.length>0){let r=e.hunks[e.hunks.length-1],i=Math.max(e.additionLines.length-C(r.additionStart,r.additionCount),0);t+=i,n+=i}e.splitLineCount=t,e.unifiedLineCount=n}var qr=new WeakMap;function Jr(e,t){let n=Math.min(e.length,t.length),r=0;for(;r<n&&e[r]===t[r];)r++;let i=e.length,a=t.length;for(;i>r&&a>r&&e[i-1]===t[a-1];)i--,a--;if(r!==i||r!==a)return{start:r,deletionEnd:i,additionEnd:a}}function Yr(e,t,n){let r=e.hunks,i=oi(r,ii(e,t,n),e.deletionLines.length);if(e.hunks=li(e,i),e.editSessionDirty=!0,vi(e),fi(r,e.hunks))return{regions:i.map(e=>e.previousSpan)}}function Xr(e,t,n,r){let i=new Set(t),a=Array.from(i).filter(t=>t>=0&&t<e.additionLines.length).sort((e,t)=>e-t);if(a.length===0)return;let o=t=>i.has(t)?r?.get(t):e.additionLines[t],{hunks:s}=e,c,l=0;for(let t of a){for(;l<s.length;){let e=s[l];if(t<hi(e)+e.additionCount)break;l++}let r=s[l],i=r==null?void 0:hi(r);if(i==null||t<i||c!=null&&c!==l)return Yr(e,n,o);c=l}if(c!=null){if(Zr(e,a,c,r,n))e.editSessionDirty=!0;else return Yr(e,n,o)}}function Zr(e,t,n,r,i){if(r==null||i?.ignoreWhitespace===!0||i?.stripTrailingCr===!0)return!1;let a=Qr(e),o=e.hunks[n];if(o.hunkContent.some($r))return!1;for(let n of t){let t=r.get(n),i=e.additionLines[n];if(t==null||i==null||a.has(t)||a.has(i))return!1;let s=!1;for(let e of o.hunkContent)if(e.type===`change`&&e.additions===e.deletions&&n>=e.additionLineIndex&&n<e.additionLineIndex+e.additions){s=!0;break}if(!s)return!1}return!0}function Qr(e){let{deletionLines:t}=e,n=qr.get(t);return n??(n=new Set(t),qr.set(t,n)),n}function $r(e){return e?.type===`change`&&(e.additions===0||e.deletions===0)}function ei(e,t){let n=new Map,{regions:r}=t;for(let t=0;t<=r.length;t++){let i=r[t-1],a=r[t],o=t===0?e.get(0):i==null?void 0:e.get(i.lastIndex+1),s=a==null?void 0:e.get(a.firstIndex),c=o?.fromStart??0,l=s?.fromEnd??0;(c>0||l>0)&&n.set(t,{fromStart:c,fromEnd:l})}return n}function ti(e,t,n){let r=[];if(e.isPartial)return r;for(let[i,a]of e.hunks.entries()){let o=Zn({isPartial:e.isPartial,rangeSize:a.collapsedBefore,expandedHunks:t,hunkIndex:i,collapsedContextThreshold:n});if(o.rangeSize<=n)continue;let s=Y(a),c=s-o.rangeSize;o.fromStart>0&&r.push([c,c+o.fromStart]),o.fromEnd>0&&r.push([s-o.fromEnd,s])}let i=$n({fileDiff:e,hunkIndex:e.hunks.length-1,expandedHunks:t,collapsedContextThreshold:n,errorPrefix:`captureExpansionAnchors`});if(i!=null&&i.fromStart>0&&i.rangeSize>n){let t=e.hunks[e.hunks.length-1],n=Y(t)+t.deletionCount;r.push([n,n+i.fromStart])}return r}function ni(e,t){let n=new Map;if(t.length===0)return n;let r=(e,r,i)=>{if(i<=r)return;let a=0,o=0;for(let[e,n]of t)n<=r||e>=i||(e<=r&&(a=Math.max(a,Math.min(n,i)-r)),n>=i&&(o=Math.max(o,i-Math.max(e,r))));(a>0||o>0)&&n.set(e,{fromStart:a,fromEnd:o})};for(let[t,n]of e.hunks.entries()){let e=Y(n);r(t,e-Math.max(n.collapsedBefore,0),e)}let i=e.hunks[e.hunks.length-1];return i!=null&&!e.isPartial&&e.deletionLines.length>0&&r(e.hunks.length,Y(i)+i.deletionCount,e.deletionLines.length),n}function ri(e,t){return e.editSessionDirty===!0&&(delete e.editSessionDirty,Object.assign(e,e.additionLines.length<=1&&e.additionLines.join(``)===``?Fr(e,t):Vr(e,t)),!0)}function ii(e,t,n){if(Jr(e.deletionLines,e.additionLines)==null)return[];let r=h({name:e.prevName??e.name,contents:e.deletionLines.join(``)},{name:e.name,contents:e.additionLines.join(``),lang:e.lang},t),i,a=(t,a)=>{i??=ai(e.hunks);for(let e=0;e<=a;e++){let o=i.get(t.deletionLineIndex-e);if(o!=null&&o.additions===t.additions&&o.deletions===t.deletions){if(t.additions>0&&n!=null){for(let e=0;e<t.additions;e++)if(n(o.additionLineIndex+e)!==r.additionLines[t.additionLineIndex+e])return a}return e}}return a},o=[],s=0,c=0;for(let e of r.hunks){g(e,r,a);let t=e.additionCount>0?e.additionLineIndex-s:e.deletionLineIndex-c;s+=t,c+=t;for(let t of e.hunkContent){if(t.type===`context`){s+=t.lines,c+=t.lines;continue}let e=Wr(t,0,0);e.additions===0&&(e.additionLineIndex=s),e.deletions===0&&(e.deletionLineIndex=c),o.push(e),s+=e.additions,c+=e.deletions}}return o}function ai(e){let t=new Map;for(let n of e)for(let e of n.hunkContent)e.type===`change`&&(e.additions===0||e.deletions===0)&&t.set(e.deletionLineIndex,e);return t}function oi(e,t,n){let r=e.map((e,t)=>{let n=Y(e);return{deletionStart:n,deletionEnd:n+e.deletionCount,blocks:[],previousSpan:{firstIndex:t,lastIndex:t}}}),i=[],a=0;for(let e of t){let t=e.deletionLineIndex,o=t+e.deletions;for(;a<r.length&&r[a].deletionEnd<t;)i.push(r[a]),a++;let s=i.length>0&&si(t,o,i[i.length-1])?i.pop():void 0;for(;a<r.length&&r[a].deletionStart<=o;)s=ci(s,r[a]),a++;if(s==null){let c=t,l=o;if((e.deletions===0||e.additions===0)&&n>e.deletions){let e=i[i.length-1]?.deletionEnd??0,s=r[a]?.deletionStart??n;t>e?c--:o<s&&l++}s={deletionStart:c,deletionEnd:l,blocks:[],previousSpan:void 0}}s.deletionStart=Math.min(s.deletionStart,t),s.deletionEnd=Math.max(s.deletionEnd,o),s.blocks.push(e),i.push(s)}for(;a<r.length;)i.push(r[a]),a++;return i}function si(e,t,n){return e<=n.deletionEnd&&t>=n.deletionStart}function ci(e,t){return e==null?t:(e.deletionStart=Math.min(e.deletionStart,t.deletionStart),e.deletionEnd=Math.max(e.deletionEnd,t.deletionEnd),e.blocks.push(...t.blocks),t.previousSpan!=null&&(e.previousSpan??={...t.previousSpan},e.previousSpan.firstIndex=Math.min(e.previousSpan.firstIndex,t.previousSpan.firstIndex),e.previousSpan.lastIndex=Math.max(e.previousSpan.lastIndex,t.previousSpan.lastIndex)),e)}function li(e,t){let n=[],r=0,i=0;for(let a of t){let t=a.deletionStart-r;if(t<0)throw Error(`buildRegionHunks: overlapping old-side regions`);r+=t,i+=t;let o=i,s=[];for(let e of a.blocks){let t=e.deletionLineIndex-r,n=e.additionLineIndex-i;if(t<0||t!==n)throw Error(`buildRegionHunks: canonical block context mismatch`);di(s,t,i,r),r+=t,i+=n,s.push({...e}),r+=e.deletions,i+=e.additions}let c=a.deletionEnd-r;if(c<0)throw Error(`buildRegionHunks: block exceeds its old-side region`);di(s,c,i,r),r+=c,i+=c,n.push(ui(e,{additionStart:o,additionEnd:i,deletionStart:a.deletionStart,deletionEnd:a.deletionEnd},s))}if(e.deletionLines.length-r!==e.additionLines.length-i)throw Error(`buildRegionHunks: trailing context mismatch`);return n}function ui(e,t,n){let r=t.additionEnd-t.additionStart,i=t.deletionEnd-t.deletionStart,a=0,o=0;for(let e of n)e.type===`change`&&(a+=e.additions,o+=e.deletions);let s={collapsedBefore:0,additionStart:gi(t.additionStart,r),additionCount:r,additionLines:a,additionLineIndex:_i(t.additionStart,r),deletionStart:gi(t.deletionStart,i),deletionCount:i,deletionLines:o,deletionLineIndex:_i(t.deletionStart,i),hunkContent:n,hunkSpecs:`@@ -${gi(t.deletionStart,i)},${i} +${gi(t.additionStart,r)},${r} @@`,splitLineStart:0,splitLineCount:0,unifiedLineStart:0,unifiedLineCount:0,noEOFCRAdditions:!1,noEOFCRDeletions:!1};return Gr(s),s}function di(e,t,n,r){t>0&&e.push({type:`context`,lines:t,additionLineIndex:n,deletionLineIndex:r})}function fi(e,t){if(e.length!==t.length)return!0;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(Y(r)!==Y(i)||r.deletionCount!==i.deletionCount||hi(r)!==hi(i)||r.additionCount!==i.additionCount||r.splitLineCount!==i.splitLineCount||!pi(r,i))return!0}return!1}function pi(e,t){let n=mi(e),r=mi(t);for(;;){let e=n.next(),t=r.next();if(e.done===!0||t.done===!0)return e.done===t.done;if(e.value[0]!==t.value[0]||e.value[1]!==t.value[1])return!1}}function*mi(e){for(let t of e.hunkContent){if(t.type===`context`){for(let e=0;e<t.lines;e++)yield[t.deletionLineIndex+e,t.additionLineIndex+e];continue}let e=Math.max(t.deletions,t.additions);for(let n=0;n<e;n++)yield[n<t.deletions?t.deletionLineIndex+n:void 0,n<t.additions?t.additionLineIndex+n:void 0]}}function hi(e){return m(e.additionStart,e.additionCount)}function Y(e){return m(e.deletionStart,e.deletionCount)}function gi(e,t){return t===0?e:e+1}function _i(e,t){return t===0?e-1:e}function vi(e){Kr(e);for(let t=0;t<e.hunks.length;t++)Hr(e,t)}var X=new WeakMap,yi=new WeakMap,Z=new WeakMap,bi=new WeakSet,xi=class a{static fromDiff(e){return new a(e,void 0)}static startEditSession(e,t={}){let{document:n,snapshot:r,parseDiffOptions:i}=t;if(e.isPartial)throw Error(`DiffModel.startEditSession: the diff must not be partial`);let o=Je(e.additionLines.join(``)),s=n==null?void 0:Je(n.contents),c=r!=null&&wi(r,e);if(r!=null&&!c)throw Error(`DiffModel.startEditSession: the retained session was diffed against a different old file`);if(s!=null&&s!==o&&!c)throw Error(`DiffModel.startEditSession: retained edits are missing their diff session state`);let l={...e};delete l.cacheKey,o!==e.additionLines.join(``)&&(l.additionLines=On(o),l.additionCharacterCount=o.length,Yr(l,i),l.editSessionDirty=!0);let u=n==null||n.name===e.name&&n.lang===e.lang&&s===o;n!=null&&!u&&(l.name=n.name,l.lang=n.lang),c&&r!=null&&s!=null&&(l.additionLines=On(s),l.additionCharacterCount=s.length,l.type=r.type,l.hunks=r.hunks,l.editSessionDirty=!0,Kr(l));let d=new a(l,new xt(ht(l.additionLines.join(``))+1));return l.additionLines.length===0&&(Object.assign(l,Br(l,i)),l.editSessionDirty=!0),d}constructor(n,r){de(this,bi),e(this,`diff`,void 0),t(this,X,void 0),t(this,yi,void 0),t(this,Z,void 0),this.diff=n,i(X,this,r),i(yi,this,n.additionLines)}get live(){return n(X,this)!=null}get lineCount(){return n(X,this)?.lineCount??this.diff.additionLines.length}lineId(e){return n(X,this)?.idAt(e)??e}lineText(e){return this.diff.additionLines[e]??``}lineOf(e){return n(X,this)?.lineOf(e)??(e<this.diff.additionLines.length?e:void 0)}blockAt(e,t){let{starts:n,ends:i,blocks:a}=r(bi,this,Ci).call(this)[e],o=0,s=a.length;for(;o<s;){let e=o+s>>>1;i[e]<=t?o=e+1:s=e}return o<a.length&&n[o]<=t?a[o]:void 0}pairFor(e,t){let n=this.blockAt(e,t);if(n?.type!==`change`)return;let r=t-(e===`deletions`?n.deletionLineIndex:n.additionLineIndex);if(r>=Math.min(n.deletions,n.additions))return;let i=n.deletionLineIndex+r,a=n.additionLineIndex+r,{deletionLines:o,additionLines:s}=this.diff;if(o[i]!=null&&s[a]!=null)return e===`deletions`?a:i}editLineFor(e){for(let t of this.diff.hunks){let n=e-t.deletionStart;if(n<0||n>=t.deletionCount)continue;let r=t.deletionLineIndex+n,i=this.blockAt(`deletions`,r);if(i==null)throw Error(`DiffModel.editLineFor: old line ${e} is inside a hunk but outside its blocks`);return i.type===`context`?i.additionLineIndex+(r-i.deletionLineIndex):i.additionLineIndex}}applyChange(e,t,a={}){let o=n(X,this);if(o==null)throw Error(`DiffModel.applyChange: the model is not live`);let s=o.applyChange(e),{diff:c}=this,{parseDiffOptions:l}=a,u=a.expandedHunks??new Map,d=e.lineDelta===0,{hunks:f}=c,p,m=!1;if(d){p=[];let i=new Map,a=c.additionLines.length;for(let[r,o]of _t(t,e)){let e=r>0&&r===t.lineCount-1&&o===``;if(r<0||r>a||r===a&&(e||t.lineCount!==a+1))continue;let s=c.additionLines[r]??``;(e||s!==o)&&(c.additionLines===n(yi,this)&&(c.additionLines=c.additionLines.slice()),e?c.additionLines.pop():c.additionLines[r]=o,c.additionCharacterCount+=o.length-s.length,p.push(r),i.set(r,s))}if(p.length>0){if(Ti(c))r(bi,this,Si).call(this,Br(c,l)),m=!0;else if(Rr(c,c.additionLines))r(bi,this,Si).call(this,zr(c,c.additionLines,c.additionCharacterCount,l)),m=!0;else if(c.additionLines.length!==a){let e=Yr(c,l,e=>i.has(e)?i.get(e):c.additionLines[e]);u=Ei(u,e),m=e!=null}else{let e=Xr(c,p,l,i);u=Ei(u,e),m=e!=null}}}else{let n=c.additionLines,{lines:i,characterCount:a}=vt(t);i.length>1&&i.at(-1)===``&&i.pop(),c.additionLines=i,c.additionCharacterCount=a,Ti(c)?r(bi,this,Si).call(this,Br(c,l)):Rr(c,i)?r(bi,this,Si).call(this,zr(c,i,a,l)):u=Ei(u,Yr(c,l,e=>n[e])),m=!0,p=[];for(let[t,n]of e.changedLineRanges){let e=Math.min(n,c.additionLines.length-1);for(let n=t;n<=e;n++)p.push(n)}}return i(Z,this,void 0),{changedLines:p,hunksChanged:c.hunks!==f,removedLineIds:s,lineDelta:e.lineDelta,regionsChanged:m,expandedHunks:u}}lineIds(){return n(X,this)?.ids()??Array.from({length:this.lineCount},(e,t)=>t)}snapshot(){let{diff:e}=this;return{oldFile:e.type===`new`?null:{name:e.prevName??e.name,lines:[...e.deletionLines]},type:e.type,hunks:En(e.hunks)}}get hasChanges(){return this.diff.editSessionDirty===!0}finish(e,t={}){let{diff:n}=this,{parseDiffOptions:r}=t,a=t.expandedHunks??new Map;if(n.editSessionDirty!==!0)return{changed:!1,expandedHunks:a};let o=ti(n,a,e);return ri(n,r),i(Z,this,void 0),{changed:!0,expandedHunks:ni(n,o)}}};function Si(e){let{diff:t}=this,n=t.type;Object.assign(t,e),t.type=n,t.editSessionDirty=!0,i(Z,this,void 0)}function Ci(){let{hunks:e}=this.diff;if(n(Z,this)?.hunks===e)return n(Z,this);let t={starts:[],ends:[],blocks:[]},r={starts:[],ends:[],blocks:[]};for(let n of e)for(let e of n.hunkContent){let n=e.type===`context`?e.lines:e.deletions,i=e.type===`context`?e.lines:e.additions;n>0&&(t.starts.push(e.deletionLineIndex),t.ends.push(e.deletionLineIndex+n),t.blocks.push(e)),i>0&&(r.starts.push(e.additionLineIndex),r.ends.push(e.additionLineIndex+i),r.blocks.push(e))}return i(Z,this,{hunks:e,deletions:t,additions:r})}function wi(e,t){let{oldFile:n}=e;return n==null?t.type===`new`:t.type!==`new`&&n.name===(t.prevName??t.name)&&n.lines.length===t.deletionLines.length&&n.lines.every((e,n)=>e===t.deletionLines[n])}function Ti(e){return e.additionLines.length<=1&&e.additionLines.join(``)===``}function Ei(e,t){return t==null?e:ei(e,t)}function Q(e,t){return Ge(e.theme,t.theme)&&(e.preferredDiffLib??`jsdiff`)===(t.preferredDiffLib??`jsdiff`)&&e.useTokenTransformer===t.useTokenTransformer&&e.tokenizeMaxLineLength===t.tokenizeMaxLineLength&&e.lineDiffType===t.lineDiffType&&e.maxLineDiffLength===t.maxLineDiffLength}var Di={forcePlainText:!1};function Oi(e,t,n,{forcePlainText:r,lazyLineAST:i=!1,startingLine:a,totalLines:o,expandedHunks:s,collapsedContextThreshold:c=1}=Di){r?(a??=0,o??=1/0):(a=0,o=1/0);let l=a>0||o<1/0;i&&=!r&&!n.useTokenTransformer;let u=typeof n.theme==`string`?t.getTheme(n.theme).type:void 0,d=en({theme:n.theme,highlighter:t}),f={deletionLines:[],additionLines:[]},p=!r&&!e.isPartial,m=r?s:void 0,h=new Map;function g(e){let t=p?0:e,n=h.get(t)??ki();return h.set(t,n),n}function _(e,t,n,r){if(l){let e=n.at(-1);(e==null||e.targetIndex+e.count!==t)&&(e={targetIndex:t,originalOffset:r.length,count:0},n.push(e)),e.count++}r.push(e)}cr({diff:e,diffStyle:`both`,startingLine:a,totalLines:o,expandedHunks:!l||m,collapsedContextThreshold:c,callback:({hunkIndex:t,additionLine:n,deletionLine:r,type:i})=>{let a=g(t),o=n==null?r.splitLineIndex:n.splitLineIndex;r!=null&&(_(e.deletionLines[r.lineIndex],r.lineIndex,a.deletionSegments,a.deletionContent),a.deletionInfo.push({type:i===`change`?`change-deletion`:i,lineNumber:r.lineNumber,altLineNumber:i===`change`?void 0:n.lineNumber??void 0,lineIndex:`${r.unifiedLineIndex},${o}`})),n!=null&&(_(e.additionLines[n.lineIndex],n.lineIndex,a.additionSegments,a.additionContent),a.additionInfo.push({type:i===`change`?`change-addition`:i,lineNumber:n.lineNumber,altLineNumber:i===`change`?void 0:r.lineNumber??void 0,lineIndex:`${n.unifiedLineIndex},${o}`}))}});for(let a of h.values()){if(a.deletionContent.length===0&&a.additionContent.length===0)continue;let o={name:e.prevName??e.name,contents:a.deletionContent.value},s={name:e.name,contents:a.additionContent.value},{deletionLines:c,additionLines:l}=Ai({deletionFile:o,deletionInfo:a.deletionInfo,additionFile:s,additionInfo:a.additionInfo,highlighter:t,options:n,languageOverride:r?`text`:e.lang,lazyLineAST:i});if(p)f.deletionLines=c,f.additionLines=l;else for(let[e,t,n]of[[f.deletionLines,c,a.deletionSegments],[f.additionLines,l,a.additionSegments]])if(n.length>0)for(let r of n)for(let n=0;n<r.count;n++)e[r.targetIndex+n]=t[r.originalOffset+n];else if(i){let n=e.length;for(let r=0;r<t.length;r++)j(e,n+r,()=>t[r])}else le(e,t)}return{code:f,themeStyles:d,baseThemeType:u}}function ki(){return{deletionContent:{push(e){this.value+=e,this.length++},value:``,length:0},additionContent:{push(e){this.value+=e,this.length++},value:``,length:0},deletionInfo:[],additionInfo:[],deletionSegments:[],additionSegments:[]}}function Ai({lazyLineAST:e,deletionFile:t,additionFile:n,deletionInfo:r,additionInfo:i,highlighter:a,languageOverride:o,options:{theme:s,useTokenTransformer:c,tokenizeMaxLineLength:l}}){let u=(t,n)=>t.contents===``?[]:ie(a.codeToTokens(x(t.contents),on(o??me(t.name),s,l)).tokens,{state:{lineInfo:n},useTokenTransformer:c,lazyLineAST:e,cacheHtmlStyles:a.name===`highlights`});return{deletionLines:u(t,r),additionLines:u(n,i)}}function ji(e){let t=e.lang??me(e.name),n=e.lang??(e.prevName==null?`text`:me(e.prevName));return t===`text`&&n===`text`}var Mi=-1,Ni=class{constructor(t={theme:_},n=rn,r,i){e(this,`options`,void 0),e(this,`annotationSlotName`,void 0),e(this,`onRenderUpdate`,void 0),e(this,`workerManager`,void 0),e(this,`__id`,`diff-hunks-renderer:${++Mi}`),e(this,`diff`,void 0),e(this,`expandedHunks`,new Map),e(this,`annotationList`,[]),e(this,`deletionAnnotations`,{}),e(this,`additionAnnotations`,{}),e(this,`computedLangs`,[`text`]),e(this,`renderCache`,void 0),e(this,`pendingHighlightResult`,void 0),e(this,`layout`,void 0),e(this,`rowSource`,void 0),e(this,`model`,void 0),e(this,`editSessionActive`,!1),this.options=t,this.annotationSlotName=n,this.onRenderUpdate=r,this.workerManager=i}cleanUp(){this.endEditSession(),this.recycle(),this.expandedHunks.clear(),this.workerManager=void 0,this.onRenderUpdate=void 0}recycle(){this.diff=void 0,this.editSessionActive?(this.renderCache!=null&&(this.renderCache.renderRange=void 0),this.pendingHighlightResult=void 0):this.clearRenderCache(),this.annotationList=[],this.additionAnnotations={},this.deletionAnnotations={},this.workerManager?.cleanUpTasks(this)}startEditSession(e,t={}){let n=xi.startEditSession(e,{...t,parseDiffOptions:this.options.parseDiffOptions}),{rowSource:r}=this,i=this.promoteReadyResult(e)??this.renderCache;this.editSessionActive=!0,this.model=n,this.diff=n.diff,this.pendingHighlightResult=void 0;let{options:a}=this.getRenderOptions(n.diff);if(i?.result!=null&&i.highlighted&&n.diff.additionLines===e.additionLines&&U(i.diff,e)&&Q(i.options,a)){let{result:e}=i,t={ids:n.lineIds(),texts:n.diff.additionLines.slice()};this.renderCache={diff:n.diff,options:a,highlighted:!0,result:e,renderRange:i.renderRange,lines:t},r!=null&&r.result===e?(r.source.setHighlightRows({deletionRows:e.code.deletionLines,additionRows:e.code.additionLines,additionLines:t.texts,lineIds:t.ids}),this.layout?.invalidateLines(),r.model=n):this.rowSource=void 0}else i!=null&&i.options.useTokenTransformer!==!0&&n.diff.name,this.renderCache=void 0,this.rowSource=void 0;return n.diff}promoteReadyResult(e){let{options:t}=this.getRenderOptions(e),n=this.getReadyRenderResult(e,t);return n==null?void 0:{...n,diff:e,renderRange:void 0}}applyChange(e,t,n){let r=this.requireSession(),i=r.applyChange(e,t,{parseDiffOptions:this.options.parseDiffOptions,expandedHunks:this.expandedHunks});return this.expandedHunks=i.expandedHunks,i.removedLineIds.length>0&&(this.editSessionRows(r).source.forgetLines(i.removedLineIds),this.layout?.forgetLines(i.removedLineIds)),i.lineDelta!==0||i.removedLineIds.length>0||i.regionsChanged||i.hunksChanged?this.layout?.invalidateLines():this.layout?.markLines(i.changedLines),n!=null&&this.setTokens(n),i}setTokens(e){let t=this.requireSession(),n=this.editSessionRows(t).source,r=[];for(let[i,a]of e)n.setTokens(t.lineId(i),a)&&r.push(i);return this.layout?.markLines(r),r}lineKey(e){let t=this.requireSession();return e>=0&&e<t.lineCount?`a${t.lineId(e)}`:void 0}lineOfKey(e){let t=this.requireSession();return e.startsWith(`a`)?t.lineOf(Number(e.slice(1))):void 0}editLineFor(e){return this.requireSession().editLineFor(e)}endEditSession(){let e=this.editSessionActive?this.model:void 0,t=!1;if(e!=null){let{collapsedContextThreshold:n}=this.getOptionsWithDefaults(),r=e.finish(n,{parseDiffOptions:this.options.parseDiffOptions,expandedHunks:this.expandedHunks});t=r.changed,this.expandedHunks=r.expandedHunks}return this.editSessionActive=!1,this.pendingHighlightResult=void 0,this.diff??this.clearRenderCache(),t}requireSession(){let{model:e}=this;if(!this.editSessionActive||e==null||!e.live)throw Error(`DiffHunksRenderer: no edit session is active`);return e}editSessionRows(e){let{rowSource:t}=this;if(t!=null&&t.model===e)return t;let n=new kt({deletionRows:[],additionRows:[],additionLines:[],lineIds:[]});return this.rowSource={result:{code:{additionLines:[],deletionLines:[]},themeStyles:``,baseThemeType:void 0},source:n,model:e}}editorRenderReady(){let{renderCache:e,rowSource:t}=this;return e?.options.useTokenTransformer===!0&&e.highlighted&&e.result!=null&&t?.result===e.result}includesTrailingNewline(){return this.editSessionActive}hasTrailingNewlineRow(e){return this.includesTrailingNewline()&&lr(e,`additions`)}showsNoNewlineMarkers(){return!this.editSessionActive}refreshHighlightedResult(){let{diff:e,renderCache:t,workerManager:n}=this;return e==null||t==null||!U(t.diff,e)||ji(e)||$(e,this.getTokenizeMaxLength())?Promise.resolve():!this.editSessionActive&&n?.isWorkingPool()===!0&&e.cacheKey!=null?(n.evictDiffFromCache(e.cacheKey),n.primeDiffHighlightCache(e).then(()=>{this.applyRefreshedResult(e,n.getDiffResultCache(e))}).catch(e=>{yn(e)||this.onHighlightError(e)})):this.asyncHighlight(e).then(t=>this.applyRefreshedResult(e,t)).catch(e=>this.onHighlightError(e))}applyRefreshedResult(e,t){let{diff:n,renderCache:r}=this;if(t==null||n==null||r==null||!U(n,e)||!U(r.diff,e)||this.editSessionActive)return;let{options:i}=this.getRenderOptions(n);Q(i,t.options)&&(this.pendingHighlightResult={diff:n,options:t.options,highlighted:!0,result:t.result},this.onRenderUpdate?.())}get diffCache(){return this.renderCache?.diff??this.diff}clearRenderCache(){this.renderCache=void 0,this.pendingHighlightResult=void 0,this.layout=void 0,this.editSessionActive?this.rowSource?.source.forgetTokens():(this.rowSource=void 0,this.model=void 0)}setOptions(e){this.options=e}mergeOptions(e){this.options={...this.options,...e}}expandHunk(e,t,n=this.getOptionsWithDefaults().expansionLineCount){this.expandedHunks.set(e,Xn(this.expandedHunks.get(e),t,n)),this.handleExpansionChange()}handleExpansionChange(){this.renderCache?.highlighted!==!0&&this.clearRenderCache(),this.layout?.invalidateLines()}getExpandedHunk(e){return this.expandedHunks.get(e)??o}getExpandedHunksMap(){return this.expandedHunks}setExpandedHunksMap(e){this.expandedHunks=e,this.handleExpansionChange()}setLineAnnotations(e){let{annotationList:t}=this;if(!(e===t||e.length===0&&t.length===0)){this.annotationList=e,this.additionAnnotations={},this.deletionAnnotations={};for(let t of e){let e=(()=>{switch(t.side){case`deletions`:return this.deletionAnnotations;case`additions`:return this.additionAnnotations}})(),n=e[t.lineNumber]??[];e[t.lineNumber]=n,n.push(t)}}}getUnifiedLineDecoration({lineType:e}){return{gutterLineType:e,contentProperties:{"data-line-type":e}}}getSplitLineDecoration({side:e,type:t}){let n=t===`change`?e===`deletions`?`change-deletion`:`change-addition`:t;return{gutterLineType:n,contentProperties:{"data-line-type":n}}}createAnnotationElement(e){return $e(e)}getOptionsWithDefaults(){let{diffIndicators:e=`bars`,diffStyle:t=`split`,disableBackground:n=!1,disableFileHeader:r=!1,disableLineNumbers:i=!1,disableVirtualizationBuffers:a=!1,collapsed:o=!1,expandUnchanged:s=!1,collapsedContextThreshold:l=1,expansionLineCount:u=100,hunkSeparators:d=`line-info`,lineDiffType:f=`word-alt`,maxLineDiffLength:p=1e3,overflow:m=`scroll`,stickyHeader:h=!1,theme:g=_,headerRenderMode:v=`default`,tokenizeMaxLineLength:y=1e3,tokenizeMaxLength:b=c,useTokenTransformer:x=!1,useCSSClasses:S=!1}=this.options;return{diffIndicators:e,diffStyle:t,disableBackground:n,disableFileHeader:r,disableLineNumbers:i,disableVirtualizationBuffers:a,collapsed:o,expandUnchanged:s,collapsedContextThreshold:l,expansionLineCount:u,hunkSeparators:d,lineDiffType:f,maxLineDiffLength:p,overflow:m,stickyHeader:h,theme:this.workerManager?.getDiffRenderOptions().theme??g,headerRenderMode:v,tokenizeMaxLineLength:y,tokenizeMaxLength:b,useTokenTransformer:x,useCSSClasses:S}}initializeHighlighter(e=this.computedLangs){return fe(Lt(e,{theme:this.getLocalHighlightTheme(),preferredHighlighter:sn(this.workerManager,this.options)}))}hydrate(e){if(e==null)return;this.diff=e;let{options:t}=this.getRenderOptions(e),n=$(e,this.getTokenizeMaxLength()),r=this.workerManager?.getDiffResultCache(e);r!=null&&!Q(t,r.options)&&(r=void 0),this.renderCache??={diff:e,hydrated:!0,highlighted:!n&&!ji(e),options:t,result:n?void 0:r?.result,renderRange:void 0};let i=this.getHighlightWorkerManager(e);i==null?this.options.deferHydrationHighlight!==!0&&pe({theme:this.getLocalHighlightTheme()})==null&&(this.computedLangs=Fi(e),this.initializeHighlighter().catch(e=>{e instanceof E||this.onHighlightError(e)})):this.renderCache.result==null&&!n&&i.highlightDiffAST(this,this.diff)}awaitsPoolHighlight(e){let t=this.getHighlightWorkerManager(e);if(t==null||e.cacheKey==null||t.didHighlightFail(e))return!1;let n=t.getDiffRenderOptions();return n.useTokenTransformer===!0&&(e.additionLines.length>0||e.deletionLines.length>0)&&!ji(e)&&!$(e,this.getTokenizeMaxLength())&&!this.hasHighlightedRenderCache(e,n)&&this.getReadyRenderResult(e,n)==null}getHighlightWorkerManager(e){let{editSessionActive:t,workerManager:n}=this;return!t&&n?.isWorkingPool()===!0&&!n.shouldHighlightOnMainThread(e)?n:void 0}cacheHighlightResult(e,t){let{editSessionActive:n,workerManager:r}=this;!n&&r?.isWorkingPool()===!0&&r.setDiffResultCache(e.cacheKey,t)}getLocalHighlightTheme(){return this.workerManager?.getDiffRenderOptions().theme??this.options.theme??_}getEffectiveCodeOptions(){let e=this.workerManager?.isWorkingPool()===!0?this.workerManager.getDiffRenderOptions():void 0;return{theme:this.getLocalHighlightTheme(),tokenizeMaxLineLength:e?.tokenizeMaxLineLength??this.options.tokenizeMaxLineLength}}getRenderOptions(e){let t=(()=>{if(this.workerManager?.isWorkingPool()===!0){let e=this.workerManager.getDiffRenderOptions();return this.editSessionActive&&e.useTokenTransformer!==!0?{...e,useTokenTransformer:!0}:e}let{theme:e,tokenizeMaxLineLength:t,lineDiffType:n,maxLineDiffLength:r}=this.getOptionsWithDefaults();return{theme:e,useTokenTransformer:this.editSessionActive||this.options.useTokenTransformer===!0,tokenizeMaxLineLength:t,lineDiffType:n,preferredDiffLib:this.options.parseDiffOptions?.preferredDiffLib,maxLineDiffLength:r}})();this.getOptionsWithDefaults();let{renderCache:n}=this;return n?.result==null||!U(e,n.diff)||!Q(t,n.options)?{options:t,forceHighlight:!0}:{options:t,forceHighlight:!1}}getDiffForNextRender(e){let{options:t}=this.getRenderOptions(e);if(this.getReadyRenderResult(e,t)!=null||this.renderCache==null)return e;if(U(this.renderCache.diff,e))return this.renderCache.diff;let n=!(e.additionLines.length>0||e.deletionLines.length>0)||ji(e)||$(e,this.getTokenizeMaxLength());return this.canRenderDiff(e,t,n)?e:this.renderCache.diff}canRenderDiff(e,t,n){let{renderCache:r}=this;return r==null||U(r.diff,e)?!0:n?r.result==null&&r.hydrated!==!0||this.workerManager?.isWorkingPool()===!0&&!this.workerManager.shouldHighlightOnMainThread(e)||pe({theme:t.theme})!=null:r.result==null&&r.hydrated!==!0?!0:this.getHighlightWorkerManager(e)==null?pe({theme:t.theme})!=null:!r.highlighted}renderCollapsed(e){this.diff=e;let{renderCache:t}=this;t!=null&&(!U(t.diff,e)||t.hydrated===!0&&t.result==null)&&this.clearRenderCache();let n=this.getLocalHighlightTheme(),r=pe({theme:n});if(r==null){this.initializeHighlighter([`text`]).then(()=>this.onRenderUpdate?.()).catch(e=>{e instanceof E||this.onHighlightError(e)});return}let{disableFileHeader:i=!1}=this.options;return{headerElement:i?void 0:this.renderHeader(e),themeStyles:en({theme:n,highlighter:r}),baseThemeType:typeof n==`string`?r.getTheme(n).type:void 0}}renderDiff(e=this.diff,t=v){if(this.diff=e,e==null){this.pendingHighlightResult=void 0;return}let{expandUnchanged:n,collapsedContextThreshold:r}=this.getOptionsWithDefaults(),{options:i,forceHighlight:a}=this.getRenderOptions(e),o=this.getReadyRenderResult(e,i);this.pendingHighlightResult=void 0,o!=null&&(this.renderCache={...o,diff:e,renderRange:void 0,lines:this.lineSnapshot(e)},a=!1),this.renderCache??={diff:e,highlighted:!1,options:i,result:void 0,renderRange:void 0};let s=e.additionLines.length>0||e.deletionLines.length>0,c=!s||ji(e)||$(e,this.getTokenizeMaxLength()),l=this.canRenderDiff(e,i,c),u=!U(e,this.renderCache.diff),d=!Qe(this.renderCache.renderRange,t),f=this.getHighlightWorkerManager(e);if(f!=null){let o=this.renderCache.result==null&&this.renderCache.highlighted&&!c&&!u&&an(t);if(l&&!o&&(c||this.renderCache.result==null||!this.renderCache.highlighted&&(u||d))){if(this.renderCache.diff=e,this.renderCache.options=i,this.renderCache.highlighted=!1,this.renderCache.result==null||u||d||a){let i=f.getPlainDiffAST(e,t.startingLine,t.totalLines,an(t)||n?!0:this.expandedHunks,r),{result:o}=this.renderCache,s=o!=null&&i!=null&&!u&&!a?Pi(o,i):i;s!==o&&(this.renderCache.lines=this.lineSnapshot(e)),this.renderCache.result=s}this.renderCache.renderRange=t}!c&&s&&(!this.renderCache.highlighted||a)&&f.highlightDiffAST(this,e)}else{this.computedLangs=Fi(e);let n=pe(),r=n!=null&&ge(i.theme,n),o=n!=null&&Ze(this.computedLangs,n),s=!c&&o,u=Number.isFinite(t.totalLines);if(l&&n!=null&&r&&(a||!this.renderCache.highlighted&&s||this.renderCache.result==null)){let{result:t,options:r}=this.renderDiffWithHighlighter(e,n,c||!o,u);this.renderCache={diff:e,options:r,highlighted:s,result:t,renderRange:void 0,lines:this.lineSnapshot(e)},s&&this.cacheHighlightResult(e,{result:t,options:r})}r&&(c||o)||this.asyncHighlight(e,u).then(({result:t,options:n})=>{c||this.cacheHighlightResult(e,{result:t,options:n}),this.applyHighlightResult(e,t,n,!c)}).catch(e=>{e instanceof E||this.onHighlightError(e)})}if(this.renderCache.result!=null)return this.layoutResult(this.renderCache.diff,t,this.renderCache.result,this.renderCache.lines);if(!this.editSessionActive)return;let{result:p}=this.editSessionRows(this.requireSession());return this.layoutResult(this.renderCache.diff,t,p,{ids:[],texts:[]})}async asyncRender(e,t=v){this.diff=e;let{result:n}=await this.asyncHighlight(e,Number.isFinite(t.totalLines));return this.layoutResult(e,t,n)}createPreElement(e,t,n){let{diffIndicators:r,disableBackground:i,disableLineNumbers:a,overflow:o}=this.getOptionsWithDefaults();return Ft({type:`diff`,diffIndicators:r,disableBackground:i,disableLineNumbers:a,overflow:o,split:e,totalLines:t,customProperties:n})}async asyncHighlight(e,t=!1){let n=$(e,this.getTokenizeMaxLength());this.computedLangs=n?[`text`]:Fi(e);let r=pe(),i=r!=null&&ge(this.getLocalHighlightTheme(),r),a=n||r!=null&&Ze(this.computedLangs,r);return r!=null&&i&&a||(r=await this.initializeHighlighter()),this.renderDiffWithHighlighter(e,r,n,t)}renderDiffWithHighlighter(e,t,n=!1,r=!1){let{options:i}=this.getRenderOptions(e),{collapsedContextThreshold:a}=this.getOptionsWithDefaults();return{result:Oi(e,t,i,{forcePlainText:n,lazyLineAST:r,expandedHunks:n?!0:void 0,collapsedContextThreshold:a}),options:i}}onHighlightSuccess(e,t,n,r=!0){this.editSessionActive||this.applyHighlightResult(e,t,n,r)}applyHighlightResult(e,t,n,r=!0){let{diff:i,renderCache:a}=this;i!=null&&a!=null&&U(i,e)&&Q(n,this.getRenderOptions(i).options)&&(a.result!=null&&a.highlighted&&Q(a.options,n)&&U(a.diff,i)||(this.pendingHighlightResult={diff:i,options:n,highlighted:r,result:t},this.onRenderUpdate?.()))}getMatchingWorkerResultCache(e,t){if(this.editSessionActive)return;let n=this.workerManager?.getDiffResultCache(e);if(n!=null&&Q(t,n.options))return n}getReadyRenderResult(e,t){let{pendingHighlightResult:n}=this;if(n!=null&&U(n.diff,e)&&Q(n.options,t))return n;let r=this.getMatchingWorkerResultCache(e,t);if(!(r==null||this.hasHighlightedRenderCache(e,t)))return{diff:e,highlighted:!0,...r}}hasHighlightedRenderCache(e,t){let{renderCache:n}=this;return n?.result!=null&&n.highlighted&&U(e,n.diff)&&Q(t,n.options)}onHighlightError(e){console.error(e)}getTokenizeMaxLength(){return this.options.tokenizeMaxLength??1e5}layoutWithOptions(e){let{diffStyle:t,expandUnchanged:n,expansionLineCount:r,collapsedContextThreshold:i,hunkSeparators:a}=this.getOptionsWithDefaults(),{lineDiffType:o,maxLineDiffLength:s,preferredDiffLib:c}=this.getRenderOptions(e).options,l={diffStyle:t,expandUnchanged:n,expansionLineCount:r,collapsedContextThreshold:i,hunkSeparators:a,lineDiffType:o,maxLineDiffLength:s,preferredDiffLib:c,canHydrateContext:Ii(e,this.options.loadDiffFiles!=null)},u=this.layout??=new xr(l);return u.setOptions(l),u}editorRenderRange(e,t){if(t==null||e==null||an(t))return t;let n=this.model?.diff===e?this.model:this.model=xi.fromDiff(e),r=this.rowSource?.source??new kt({deletionRows:[],additionRows:[],additionLines:[],lineIds:[]}),i=this.layoutWithOptions(e).newFileLines(this.layoutInput(n,r,t));return i==null?{...t,startingLine:0,totalLines:0}:{...t,startingLine:i.first-1,totalLines:i.last-i.first+1}}layoutInput(e,t,n){return{host:this,model:e,rows:t,renderRange:n,expandedHunks:this.expandedHunks,deletionAnnotations:this.deletionAnnotations,additionAnnotations:this.additionAnnotations,annotationSlotName:this.annotationSlotName,includeTrailingNewline:this.includesTrailingNewline(),showNoNewlineMarkers:this.showsNoNewlineMarkers()}}layoutResult(e,t,n,r){let{themeStyles:i,baseThemeType:a}=n,{disableFileHeader:o}=this.getOptionsWithDefaults(),s=this.layoutWithOptions(e),c=this.model?.diff===e?this.model:this.model=xi.fromDiff(e),l=this.rowSource?.result,u=this.getRowSource(n,c,r),{columns:d,patched:f,hunkData:p,rowCount:m,totalLines:h}=s.layout(this.layoutInput(c,u,t));return{fileDiff:e,columns:d,allRowsChanged:l!==n,patched:f,hunkData:p,preNode:this.createPreElement(d.deletions!=null&&d.additions!=null,h),themeStyles:i,baseThemeType:a,headerElement:o?void 0:this.renderHeader(e),totalLines:h,rowCount:m,bufferBefore:t.bufferBefore,bufferAfter:t.bufferAfter}}lineSnapshot(e){let{model:t}=this;if(t!=null&&t.diff===e&&t.live)return{ids:t.lineIds(),texts:e.additionLines.slice()}}getRowSource(e,t,n){let{rowSource:r}=this;if(r!=null&&r.result===e)return r.source;if(t.live&&n==null)throw Error(`DiffHunksRenderer: a highlight result for an edited diff has no line snapshot`);let i={deletionRows:e.code.deletionLines,additionRows:e.code.additionLines,additionLines:n?.texts??t.diff.additionLines,lineIds:n?.ids};if(r!=null&&t.live&&r.model===t)return r.source.setHighlightRows(i),this.layout?.invalidateLines(),r.result=e,r.source;let a=new kt(i);return this.rowSource={result:e,source:a,model:t},a}renderCodeAST(e,t){let n=t.columns[e];if(n==null)return;let r=Xe(n),i=ue(r.gutter);return i.properties.style=`grid-row: span ${t.rowCount}`,[i,ln(r.content,t.rowCount)]}renderFullAST(e,t=[]){let n=this.getOptionsWithDefaults().hunkSeparators===`line-info`,r=this.renderCodeAST(`unified`,e);if(r!=null)return t.push(k({tagName:`code`,children:r,properties:{"data-code":``,"data-container-size":n?``:void 0,"data-unified":``}})),{...e.preNode,children:t};let i=this.renderCodeAST(`deletions`,e);i!=null&&t.push(k({tagName:`code`,children:i,properties:{"data-code":``,"data-container-size":n?``:void 0,"data-deletions":``}}));let a=this.renderCodeAST(`additions`,e);return a!=null&&t.push(k({tagName:`code`,children:a,properties:{"data-code":``,"data-container-size":n?``:void 0,"data-additions":``}})),{...e.preNode,children:t}}renderFullHTML(e,t=[]){return ee(this.renderFullAST(e,t))}renderPartialHTML(e,t){return ee(t==null?e:k({tagName:`code`,children:e,properties:{"data-code":``,"data-container-size":this.getOptionsWithDefaults().hunkSeparators===`line-info`?``:void 0,[`data-${t}`]:``}}))}renderHeader(e){let{headerRenderMode:t,stickyHeader:n}=this.getOptionsWithDefaults();return Mt({fileOrDiff:e,mode:t,stickyHeader:n})}};function Pi(e,t){return cn(e.code.deletionLines,t.code.deletionLines),cn(e.code.additionLines,t.code.additionLines),e}function Fi(e){if(e.lang!=null)return[e.lang];let t=me(e.prevName??e.name),n=me(e.name);return t===n?[n]:[t,n]}function $(e,t){return Math.max(e.additionLines.length,e.deletionLines.length)>t}function Ii(e,t){return e.isPartial&&t&&(e.type===`change`||e.type===`rename-changed`)}function Li({oldFile:e,newFile:t},n){if(e!==void 0||t!==void 0){if(e===void 0||t===void 0)throw Error(`${n}: Pass null for an intentionally missing oldFile or newFile side`);if(e===null){if(t===null)throw Error(`${n}: You must pass oldFile, newFile, or both`);return{oldFile:e,newFile:t}}return{oldFile:e,newFile:t}}}export{xt as $,fn as A,Ut as B,xn as C,Be as Ct,hn as D,Pe as Dt,pn as E,Ie as Et,sn as F,Wt as G,Yt as H,on as I,Kt as J,Jt as K,an as L,un as M,ln as N,yn as O,I as Ot,cn as P,kt as Q,rn as R,Sn as S,Ue as St,mn as T,Ve as Tt,qt as U,Ht as V,Gt as W,Ft as X,Lt as Y,Mt as Z,On as _,Ye as _t,Q as a,ot as at,U as b,Je as bt,cr as c,lt as ct,or as d,R as dt,vt as et,tr as f,it as ft,er as g,Xe as gt,Xn as h,Ze as ht,Oi as i,gt as it,dn as j,_n as k,_e as kt,Zn as l,nt as lt,sr as m,Qe as mt,Ni as n,mt as nt,ri as o,ct as ot,$n as p,$e as pt,V as q,ji as r,ht as rt,lr as s,st,Li as t,_t as tt,Yn as u,rt as ut,Dn as v,Ke as vt,wn as w,He as wt,bn as x,Ge as xt,En as y,qe as yt,en as z};