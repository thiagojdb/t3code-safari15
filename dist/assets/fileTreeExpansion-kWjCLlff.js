import{c as e}from"./legacyColor-C5BGferB.js";import{r as t}from"./Icon-QjMt6TC9.js";import{Sa as n}from"./utils-C04APqPL.js";import{t as r}from"./defineProperty-BbfpZ9Tg.js";import{i,n as a,r as o,t as s}from"./classPrivateFieldSet2-BE9xOnOO.js";import{t as c}from"./classPrivateMethodInitSpec-Dhc_bQPo.js";import{c as l,l as u,s as d,u as f}from"./pierre-icons-C86JAUsn.js";var p=`file-tree-container`,m=`data-file-tree-style`,h=`data-file-tree-unsafe-css`,g=`data-file-tree-scrollbar-measure`,_=`data-file-tree-scrollbar-gutter-measured`,v=`--trees-scrollbar-gutter-measured`,y=`header`,b=`context-menu`,x=`context-menu-trigger`,S=e(t(),1),C=e(n(),1),ee=typeof window>`u`?S.useEffect:S.useLayoutEffect;function te(e,t,n){let r=e==null?null:(0,C.jsx)(`div`,{slot:y,children:e}),i=t!=null&&n!=null?(0,C.jsx)(`div`,{slot:b,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,C.jsxs)(C.Fragment,{children:[r,i]})}function w(e,t){return typeof window>`u`&&t!=null?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,C.jsx)(C.Fragment,{children:e})}function T(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement||e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function ne(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function re({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,S.useState)(null),[c,l]=(0,S.useState)(null),u=(0,S.useRef)(n.getComposition()),d=(0,S.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,m=(0,S.useCallback)(()=>{s(null)},[]),h=(0,S.useCallback)((e,t)=>{s({context:t,item:e})},[]),g=u.current,_=(0,S.useMemo)(()=>ne(g,e,f,m,h),[g,m,h,f,e]),v=(0,S.useCallback)(e=>{l(e)},[]);(0,S.useEffect)(()=>{f||s(null)},[f]),ee(()=>{n.setComposition(_)},[_,n]),ee(()=>{if(c!=null)return r!=null&&T(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(g)}},[g,c,n,r]);let y=w(te(e,i,o),r),b=t??r?.id,x={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,C.jsx)(p,{...a,id:b,ref:v,style:x,suppressHydrationWarning:r!=null,children:y})}var ie={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}};function ae(e,t){if(typeof e==`number`)return{itemHeight:t??ie.default.itemHeight,factor:e};let n=ie[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var oe=ie.default.itemHeight,se=`@layer base {
  :host {
    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(--trees-fg-override, var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1)));
    --trees-fg-muted: var(--trees-fg-muted-override, var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a)));
    --trees-bg: var(--trees-bg-override, var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415)));
    --trees-bg-muted: var(--trees-bg-muted-override, var(--trees-theme-list-hover-bg, light-dark(color-mix(in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)), color-mix(in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)))));
    --trees-input-bg: var(--trees-input-bg-override, light-dark(#f8f8f8, #070707));
    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;
    --trees-border-color: var(--trees-border-color-override, var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707)));
    --trees-indent-guide-bg: var(--trees-indent-guide-bg-override, color-mix(in lab, var(--trees-fg-muted) 25%, transparent));
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(--trees-border-radius-override, calc(6px * var(--trees-density)));
    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(--trees-font-weight-semibold-override, 600);
    --trees-focus-ring-color: var(--trees-focus-ring-color-override, var(--trees-theme-focus-ring, var(--trees-accent)));
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);
    --trees-search-fg: var(--trees-search-fg-override, var(--trees-theme-input-fg, var(--trees-fg)));
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(--trees-search-bg-override, var(--trees-theme-input-bg, var(--trees-input-bg)));
    --trees-scrollbar-thumb: var(--trees-scrollbar-thumb-override, var(--trees-theme-scrollbar-thumb, color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))));
    --trees-selected-fg: var(--trees-selected-fg-override, var(--trees-theme-list-active-selection-fg, var(--trees-fg)));
    --trees-selected-bg: var(--trees-selected-bg-override, var(--trees-theme-list-active-selection-bg, light-dark(color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)), color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg)))));
    --trees-selected-focused-border-color: var(--trees-selected-focused-border-color-override, var(--trees-theme-focus-ring, var(--trees-accent)));
    --trees-status-added: var(--trees-status-added-override, var(--trees-theme-git-added-fg, light-dark(var(--trees-added-light), var(--trees-added-dark))));
    --trees-status-ignored: var(--trees-status-ignored-override, var(--trees-theme-git-ignored-fg, light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))));
    --trees-status-modified: var(--trees-status-modified-override, var(--trees-theme-git-modified-fg, light-dark(var(--trees-modified-light), var(--trees-modified-dark))));
    --trees-status-renamed: var(--trees-status-renamed-override, var(--trees-theme-git-renamed-fg, light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))));
    --trees-status-untracked: var(--trees-status-untracked-override, var(--trees-theme-git-untracked-fg, light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))));
    --trees-status-deleted: var(--trees-status-deleted-override, var(--trees-theme-git-deleted-fg, light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))));
    --trees-git-modified-color: var(--trees-git-modified-color-override, var(--trees-status-modified));
    --trees-git-added-color: var(--trees-git-added-color-override, var(--trees-status-added));
    --trees-git-ignored-color: var(--trees-git-ignored-color-override, var(--trees-status-ignored));
    --trees-git-deleted-color: var(--trees-git-deleted-color-override, var(--trees-status-deleted));
    --trees-git-renamed-color: var(--trees-git-renamed-color-override, var(--trees-status-renamed));
    --trees-git-untracked-color: var(--trees-git-untracked-color-override, var(--trees-status-untracked));
    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);
    --trees-file-icon-color-default: var(--trees-file-icon-color, var(--trees-icon-gray));
    --trees-file-icon-color-astro: var(--trees-file-icon-color, var(--trees-icon-purple));
    --trees-file-icon-color-babel: var(--trees-file-icon-color, var(--trees-icon-yellow));
    --trees-file-icon-color-bash: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-biome: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-bootstrap: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-browserslist: var(--trees-file-icon-color, var(--trees-icon-yellow));
    --trees-file-icon-color-bun: var(--trees-file-icon-color, var(--trees-icon-mauve));
    --trees-file-icon-color-c: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-cpp: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-claude: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-css: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-database: var(--trees-file-icon-color, var(--trees-icon-purple));
    --trees-file-icon-color-docker: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-eslint: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-git: var(--trees-file-icon-vermilion, var(--trees-icon-vermilion));
    --trees-file-icon-color-go: var(--trees-file-icon-color, var(--trees-icon-cyan));
    --trees-file-icon-color-graphql: var(--trees-file-icon-color, var(--trees-icon-pink));
    --trees-file-icon-color-html: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-image: var(--trees-file-icon-color, var(--trees-icon-pink));
    --trees-file-icon-color-javascript: var(--trees-file-icon-color, var(--trees-icon-yellow));
    --trees-file-icon-color-json: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-markdown: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-mcp: var(--trees-file-icon-color, var(--trees-icon-teal));
    --trees-file-icon-color-npm: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-oxc: var(--trees-file-icon-cyan, var(--trees-icon-cyan));
    --trees-file-icon-color-postcss: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-prettier: var(--trees-file-icon-color, var(--trees-icon-teal));
    --trees-file-icon-color-python: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-react: var(--trees-file-icon-color, var(--trees-icon-cyan));
    --trees-file-icon-color-ruby: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-rust: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-sass: var(--trees-file-icon-color, var(--trees-icon-pink));
    --trees-file-icon-color-svg: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-svelte: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-svgo: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-swift: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-table: var(--trees-file-icon-color, var(--trees-icon-teal));
    --trees-file-icon-color-text: var(--trees-file-icon-color, var(--trees-icon-gray));
    --trees-file-icon-color-tailwind: var(--trees-file-icon-color, var(--trees-icon-cyan));
    --trees-file-icon-color-terraform: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-typescript: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-vite: var(--trees-file-icon-color, var(--trees-icon-purple));
    --trees-file-icon-color-vscode: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-vue: var(--trees-file-icon-color, var(--trees-icon-green));
    --trees-file-icon-color-wasm: var(--trees-file-icon-color, var(--trees-icon-indigo));
    --trees-file-icon-color-webpack: var(--trees-file-icon-color, var(--trees-icon-blue));
    --trees-file-icon-color-yml: var(--trees-file-icon-color, var(--trees-icon-red));
    --trees-file-icon-color-zig: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-file-icon-color-zip: var(--trees-file-icon-color, var(--trees-icon-orange));
    --trees-level-gap: var(--trees-level-gap-override, calc(8px * var(--trees-density)));
    --trees-item-padding-x: var(--trees-item-padding-x-override, calc(8px * var(--trees-density)));
    --trees-item-margin-x: var(--trees-item-margin-x-override, calc(2px * var(--trees-density)));
    --trees-item-row-gap: var(--trees-item-row-gap-override, calc(6px * var(--trees-density)));
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(--trees-icon-nudge-override, calc(1px * var(--trees-density)));
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(--trees-action-lane-width-override, calc(var(--trees-icon-width) + 2px));
    --trees-context-menu-trigger-inline-offset: calc(var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width));
    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);
    color-scheme: light dark;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
    flex-direction: column;
    display: flex;
  }

  :host([data-file-tree-virtualized="true"]) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper="true"], [data-file-tree-virtualized-root="true"] {
    flex-direction: column;
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll="true"], [data-file-tree-scrollbar-measure="true"] {
    --trees-scrollbar-thumb-current: transparent;
    scrollbar-gutter: stable;
    overflow-y: auto;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
      background-clip: content-box;
      border: 1px solid #0000;
    }

    &::-webkit-scrollbar-corner {
      background-color: #0000;
    }
  }

  [data-file-tree-scrollbar-measure="true"] {
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }

  @supports ((-moz-appearance: none)) {
    [data-file-tree-virtualized-scroll="true"], [data-file-tree-scrollbar-measure="true"] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll="true"] {
    min-height: 0;
    padding-inline: max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px)
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(--trees-scrollbar-gutter-measured, var(--trees-scrollbar-gutter))),
        0px);
    flex: 1 1 0;
    position: relative;
    overflow-y: auto;
  }

  @supports ((-moz-appearance: none)) {
    [data-file-tree-virtualized-scroll="true"] {
      padding-inline: max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px)
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(calc(var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)),
          0px);
    }
  }

  [data-file-tree-sticky-overlay="true"] {
    z-index: 4;
    pointer-events: none;
    height: 0;
    position: sticky;
    top: 0;
    overflow: visible;
  }

  [data-file-tree-virtualized-root="true"][data-scroll-at-top="true"]:not([data-overlay-reveal]) [data-file-tree-sticky-overlay="true"] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content="true"] {
    background-color: var(--trees-bg);
    pointer-events: none;
    position: relative;
  }

  [data-file-tree-virtualized-list="true"] {
    background-color: var(--trees-bg);
    overflow-anchor: none;
    width: 100%;
    min-height: 100%;
    position: relative;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset="true"] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky="true"] {
    isolation: isolate;
    will-change: transform;
    flex-direction: column;
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
  }

  [data-file-tree-search-container] {
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
    display: flex;
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    height: var(--trees-row-height);
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;
    flex: 1;
    margin-block: 1px;

    &::placeholder {
      color: color-mix(in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg));
    }

    &:focus-visible, &[data-file-tree-search-input-fake-focus="true"] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  [role="tree"] {
    gap: var(--trees-gap-override, 0);
    flex-direction: column;
    display: flex;
    position: relative;
  }

  [data-type="item"] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    background-color: var(--trees-bg);
    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    flex: 0 0 var(--trees-row-height);
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    align-items: center;
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;
    border: none;
    outline: none;
    display: flex;
    position: relative;

    &:hover, &[data-item-context-hover="true"] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused="true"], &:focus-visible {
      z-index: 2;

      & [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &:before {
        content: "";
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
        display: block;
        position: absolute;
        inset: 0;
      }

      &[data-item-selected="true"]:before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected="true"] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      & [data-item-section="icon"] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match="true"] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type="item"][data-file-tree-sticky-row="true"] {
    pointer-events: auto;
  }

  [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="item"][data-file-tree-sticky-row="true"] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="item"][data-file-tree-sticky-row="true"]:hover:not([data-item-selected="true"]), [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="item"][data-file-tree-sticky-row="true"][data-item-context-hover="true"]:not([data-item-selected="true"]) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected="true"]:has( + [data-item-selected="true"]) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  [data-item-selected="true"] + [data-item-selected="true"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  [data-item-flattened-subitems] {
    align-items: center;
    gap: 2px;
    display: inline-flex;
  }

  [data-item-flattened-subitem]:hover, [data-item-flattened-subitem-drag-target="true"] {
    text-decoration: underline;
  }

  [data-item-section="icon"] {
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  :where([data-item-section="icon"] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons="true"] {
    & [data-icon-token="astro"] {
      color: var(--trees-file-icon-color-astro);
    }

    & [data-icon-token="babel"] {
      color: var(--trees-file-icon-color-babel);
    }

    & [data-icon-token="bash"] {
      color: var(--trees-file-icon-color-bash);
    }

    & [data-icon-token="biome"] {
      color: var(--trees-file-icon-color-biome);
    }

    & [data-icon-token="bootstrap"] {
      color: var(--trees-file-icon-color-bootstrap);
    }

    & [data-icon-token="browserslist"] {
      color: var(--trees-file-icon-color-browserslist);
    }

    & [data-icon-token="bun"] {
      color: var(--trees-file-icon-color-bun);
    }

    & [data-icon-token="c"] {
      color: var(--trees-file-icon-color-c);
    }

    & [data-icon-token="cpp"] {
      color: var(--trees-file-icon-color-cpp);
    }

    & [data-icon-token="claude"] {
      color: var(--trees-file-icon-color-claude);
    }

    & [data-icon-token="css"] {
      color: var(--trees-file-icon-color-css);
    }

    & [data-icon-token="database"] {
      color: var(--trees-file-icon-color-database);
    }

    & [data-icon-token="default"] {
      color: var(--trees-file-icon-color-default);
    }

    & [data-icon-token="docker"] {
      color: var(--trees-file-icon-color-docker);
    }

    & [data-icon-token="eslint"] {
      color: var(--trees-file-icon-color-eslint);
    }

    & [data-icon-token="git"] {
      color: var(--trees-file-icon-color-git);
    }

    & [data-icon-token="go"] {
      color: var(--trees-file-icon-color-go);
    }

    & [data-icon-token="graphql"] {
      color: var(--trees-file-icon-color-graphql);
    }

    & [data-icon-token="html"] {
      color: var(--trees-file-icon-color-html);
    }

    & [data-icon-token="image"] {
      color: var(--trees-file-icon-color-image);
    }

    & [data-icon-token="javascript"] {
      color: var(--trees-file-icon-color-javascript);
    }

    & [data-icon-token="json"] {
      color: var(--trees-file-icon-color-json);
    }

    & [data-icon-token="markdown"] {
      color: var(--trees-file-icon-color-markdown);
    }

    & [data-icon-token="mcp"] {
      color: var(--trees-file-icon-color-mcp);
    }

    & [data-icon-token="npm"] {
      color: var(--trees-file-icon-color-npm);
    }

    & [data-icon-token="oxc"] {
      color: var(--trees-file-icon-color-oxc);
    }

    & [data-icon-token="postcss"] {
      color: var(--trees-file-icon-color-postcss);
    }

    & [data-icon-token="prettier"] {
      color: var(--trees-file-icon-color-prettier);
    }

    & [data-icon-token="python"] {
      color: var(--trees-file-icon-color-python);
    }

    & [data-icon-token="react"] {
      color: var(--trees-file-icon-color-react);
    }

    & [data-icon-token="ruby"] {
      color: var(--trees-file-icon-color-ruby);
    }

    & [data-icon-token="rust"] {
      color: var(--trees-file-icon-color-rust);
    }

    & [data-icon-token="sass"] {
      color: var(--trees-file-icon-color-sass);
    }

    & [data-icon-token="svg"] {
      color: var(--trees-file-icon-color-svg);
    }

    & [data-icon-token="svelte"] {
      color: var(--trees-file-icon-color-svelte);
    }

    & [data-icon-token="svgo"] {
      color: var(--trees-file-icon-color-svgo);
    }

    & [data-icon-token="swift"] {
      color: var(--trees-file-icon-color-swift);
    }

    & [data-icon-token="table"] {
      color: var(--trees-file-icon-color-table);
    }

    & [data-icon-token="text"] {
      color: var(--trees-file-icon-color-text);
    }

    & [data-icon-token="tailwind"] {
      color: var(--trees-file-icon-color-tailwind);
    }

    & [data-icon-token="terraform"] {
      color: var(--trees-file-icon-color-terraform);
    }

    & [data-icon-token="typescript"] {
      color: var(--trees-file-icon-color-typescript);
    }

    & [data-icon-token="vite"] {
      color: var(--trees-file-icon-color-vite);
    }

    & [data-icon-token="vscode"] {
      color: var(--trees-file-icon-color-vscode);
    }

    & [data-icon-token="vue"] {
      color: var(--trees-file-icon-color-vue);
    }

    & [data-icon-token="wasm"] {
      color: var(--trees-file-icon-color-wasm);
    }

    & [data-icon-token="webpack"] {
      color: var(--trees-file-icon-color-webpack);
    }

    & [data-icon-token="yml"] {
      color: var(--trees-file-icon-color-yml);
    }

    & [data-icon-token="zig"] {
      color: var(--trees-file-icon-color-zig);
    }

    & [data-icon-token="zip"] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  [data-icon-name="file-tree-icon-chevron"] {
    &[data-align-capitals="false"] {
      transform: translate(0, var(--trees-icon-nudge));
    }

    &[data-align-capitals="true"] {
      transform: translate(0);
    }
  }

  [data-item-section="content"] {
    text-align: start;
    text-overflow: ellipsis;
    flex: 0 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }

  [data-item-section="decoration"] {
    text-align: end;
    min-width: 0;
    color: var(--trees-fg-muted);
    flex: 1 1 0;
    justify-content: flex-end;
    display: flex;
    overflow: hidden;
  }

  [data-item-section="decoration"] > span {
    text-overflow: ellipsis;
    white-space: nowrap;
    justify-content: flex-end;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    overflow: hidden;
  }

  [data-item-section="git"], [data-item-section="action"] {
    flex: none;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  [data-item-section="git"] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section="action"] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section="git"] > span, [data-item-section="action"] > span {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: inline-flex;
  }

  [data-item-action-affordance="decorative"] {
    opacity: .85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    box-sizing: border-box;
    background-color: #0000;
    border: 0;
    outline: none;
    padding-inline: 6px;
  }

  [data-item-section="content"]:has([data-item-rename-input]) ~ [data-item-section="action"], [data-item-section="content"]:has([data-item-rename-input]) ~ [data-item-section="decoration"] {
    display: none;
  }

  [aria-expanded="false"][data-item-type="folder"] > [data-item-section="icon"] > [data-icon-name="file-tree-icon-chevron"] {
    &[data-align-capitals="true"] {
      transform: rotate(-90deg)
        translate(calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2));
    }

    &[data-align-capitals="false"] {
      transform: rotate(-90deg)
        translate(calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2));
    }
  }

  [data-item-section="spacing"] {
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - .5px);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;

    &:empty {
      padding-left: 0;
    }
  }

  [data-item-section="spacing-item"] {
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity .15s;
    display: inline-block;
    transform: translateX(-.25px);

    & + & {
      margin-left: calc(var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - .5px);
    }
  }

  :host(:hover) [data-item-section="spacing-item"] {
    opacity: .75;
  }

  [data-item-contains-git-change="true"] > [data-item-section="git"] {
    color: var(--trees-git-modified-color);
    opacity: .5;
    fill: currentColor;
  }

  [data-item-git-status] {
    & > :where([data-item-section="icon"]) > :where(:not([data-icon-name="file-tree-icon-chevron"])), & > [data-item-section="content"] {
      color: var(--trees-item-git-status-color);
    }

    & > [data-item-section="git"] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status="added"] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status="deleted"] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status="ignored"] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section="icon"] {
      opacity: .5;
    }
  }

  [data-item-section="git"] [data-icon-name="file-tree-icon-dot"] {
    transform: translateY(calc(.65ex - 50%));
  }

  [data-item-git-status="modified"] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status="renamed"] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status="untracked"] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  [data-item-drag-target="true"] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging="true"] {
    opacity: .5;
  }

  [data-item-section="lock"] {
    color: var(--trees-fg-muted);
    flex: none;
    align-items: center;
    margin-left: auto;
    display: flex;
  }

  [data-item-section="lock"] svg {
    display: block;
  }

  [data-type="header-slot"] {
    flex: none;
    display: block;
  }

  [data-type="context-menu-wash"] {
    z-index: 3;
    touch-action: none;
    background-color: #0000;
    position: absolute;
    inset: 0;
  }

  [data-type="context-menu-anchor"] {
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    align-items: center;
    display: none;
    position: absolute;

    &[data-visible="true"] {
      display: flex;
    }
  }

  [data-file-tree-virtualized-root="true"][data-is-scrolling] [data-type="context-menu-anchor"] {
    display: none;
  }

  [data-type="context-menu-anchor"] > slot[name="context-menu"] {
    flex: 0 0 0;
    width: 0;
    min-width: 0;
    display: block;
    overflow: visible;
  }

  [data-type="context-menu-trigger"] {
    all: unset;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    justify-content: center;
    align-items: center;
    transition: color .12s;
    display: flex;
  }

  [data-type="context-menu-trigger"]:hover, [data-type="context-menu-trigger"][aria-expanded="true"] {
    color: var(--trees-fg);
  }

  [data-truncate-container] {
    --truncate-internal-marker-fade-width: var(--truncate-marker-fade-width, 2px);
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    --truncate-internal-middle-marker-opacity: var(--truncate-middle-marker-opacity, 80%);
    --truncate-internal-marker-background-color: var(--truncate-marker-background-color, light-dark(#fff, #000));
    --truncate-internal-marker-background-overlay-color: var(--truncate-marker-background-overlay-color, transparent);
    --truncate-internal-marker-block-inset: var(--truncate-marker-block-inset, 0px);
    --truncate-internal-marker-fade-out-duration: var(--truncate-marker-fade-out-duration, 0s);
    --truncate-internal-marker-fade-in-duration: var(--truncate-marker-fade-in-duration, .1s);
    --truncate-internal-fade-marker-color: var(--truncate-fade-marker-color, #000);
    --truncate-internal-fade-marker-width: var(--truncate-fade-marker-width, .2lh);
    --truncate-internal-single-line-height: 1lh;
    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    margin-top: -1px;
    margin-bottom: -1px;
    overflow: hidden;
  }

  [data-truncate-marker] {
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    z-index: 2;
    color: color-mix(in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent);
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
    background-clip: content-box;
    align-items: center;
    display: flex;
    position: absolute;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content="visible"] {
    white-space: nowrap;
  }

  [data-truncate-content="overflow"] {
    opacity: 0;
    pointer-events: none;
    user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    user-select: none;
    pointer-events: none;
    overflow: visible;
    container: measure / size;
  }

  [data-truncate-container="truncate"] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }

    & [data-truncate-marker] {
      right: 0;
    }

    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container="fruncate"] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }

    & [data-truncate-content] {
      direction: rtl;
    }

    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }

    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant="default"] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color));
    }

    & [data-truncate-marker]:after, & [data-truncate-marker]:before {
      content: "";
      width: calc(var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap));
      height: max(0px,
        calc(var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2));
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color));
      -webkit-mask-image: linear-gradient(var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%);
      mask-image: linear-gradient(var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%);
      position: absolute;
      inset-block-start: var(--truncate-internal-marker-block-inset);
    }

    & [data-truncate-marker]:after {
      --truncate-internal-fade-dir: to right;
      right: calc(-1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          ));
    }

    & [data-truncate-marker]:before {
      --truncate-internal-fade-dir: to left;
      left: calc(-1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          ));
    }
  }

  [data-truncate-variant="fade"] {
    & [data-truncate-marker] {
      background: none;
    }
  }

  [data-truncate-fade] {
    box-shadow: 0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2));
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container="middle"] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    min-width: 0;
    display: flex;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority="1"] {
      flex: 0 1 max-content;
    }

    & > div[data-truncate-segment-priority="2"] {
      flex: 0 999999 max-content;
    }
  }
}

@layer theme, unsafe;
`,E=`@layer base, unsafe;`;function ce(e){return`${E}
@layer base {
  ${e}
}`}function le(e){return`${E}
@layer unsafe {
  ${e}
}`}var ue=new WeakMap;function de(e){let t=ue.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(g,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),ue.set(e,i),i}function fe(e,t){if(!e.isConnected)return;let n=de(t);if(n==null)return;let r=t.querySelector(`style[${_}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(_,``),t.appendChild(i)),i.textContent=`:host { ${v}: ${n}px; }`}var pe;function me(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){pe??(pe=new CSSStyleSheet,pe.replaceSync(ce(se)));let t=!1;try{e.adoptedStyleSheets=[pe],t=!0}catch{}if(t){e.querySelector(`style[${m}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute(m,``),t.textContent=ce(se),e.prepend(t)}}function he(e,t){ge(e,t),me(t),fe(e,t)}function ge(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}if(typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});he(this,e)}}if(customElements.define(p,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(p)))e instanceof HTMLElement&&he(e,e.shadowRoot??e.attachShadow({mode:`open`}))}var _e=5,ve=32,ye=128;function be(){return{childIdByNameId:new Map,childIds:[],childPositionById:new Map,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function xe(){return{childIdByNameId:null,childIds:[],childPositionById:null,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function Se(e,t){if(t.childIdByNameId!=null)return t.childIdByNameId;let n=new Map;for(let r of t.childIds){let t=e[r];t!=null&&n.set(t.nameId,r)}return t.childIdByNameId=n,n}function Ce(e){if(e.childPositionById!=null)return e.childPositionById;let t=new Map;for(let n=0;n<e.childIds.length;n++){let r=e.childIds[n];r!=null&&t.set(r,n)}return e.childPositionById=t,t}function we(e,t){e.childPositionById!=null&&e.childPositionById.set(t,e.childIds.length),e.childIds.push(t)}function Te(e,t){if(e.childPositionById!=null)for(let n=t;n<e.childIds.length;n++){let t=e.childIds[n];t!=null&&e.childPositionById.set(t,n)}}function Ee(e,t){let n=0,r=0;for(let i of t.childIds){let t=e[i];t!=null&&(n+=t.subtreeNodeCount,r+=t.visibleSubtreeCount)}t.totalChildSubtreeNodeCount=n,t.totalChildVisibleSubtreeCount=r,Ae(e,t)}function De(e,t,n,r){if(e.totalChildSubtreeNodeCount+=n,e.totalChildVisibleSubtreeCount+=r,e.childVisibleChunkSums==null||r===0)return;let i=Ce(e).get(t);if(i===void 0)return;let a=i>>_e;e.childVisibleChunkSums[a]+=r}function Oe(e,t,n){let r=t.childVisibleChunkSums;if(r!=null){let i=n,a=0;for(let o of r){if(i<o){let r=je(e,t,a,i);return{...r,childVisibleIndex:n-r.localVisibleIndex}}i-=o,a+=ve}throw Error(`Visible child index ${String(n)} is out of range`)}let i=n;for(let r=0;r<t.childIds.length;r++){let a=t.childIds[r];if(a==null)continue;let o=e[a];if(o!=null){if(i<o.visibleSubtreeCount)return{childIndex:r,childVisibleIndex:n-i,localVisibleIndex:i};i-=o.visibleSubtreeCount}}throw Error(`Visible child index ${String(n)} is out of range`)}function ke(e,t,n){let r=0,i=t.childVisibleChunkSums,a=0;if(i!=null){let e=n>>_e;for(let t=0;t<e;t+=1)r+=i[t]??0;a=e<<_e}for(let i=a;i<n;i+=1){let n=t.childIds[i];if(n==null)continue;let a=e[n];a!=null&&(r+=a.visibleSubtreeCount)}return r}function Ae(e,t){if(t.childIds.length<ye){t.childVisibleChunkSums=null;return}let n=Math.ceil(t.childIds.length/ve),r=new Int32Array(n);for(let n=0;n<t.childIds.length;n++){let i=t.childIds[n];if(i==null)continue;let a=e[i];a!=null&&(r[n>>_e]+=a.visibleSubtreeCount)}t.childVisibleChunkSums=r}function je(e,t,n,r){let i=Math.min(t.childIds.length,n+ve),a=r;for(let r=n;r<i;r++){let n=t.childIds[r];if(n==null)continue;let i=e[n];if(i!=null){if(a<i.visibleSubtreeCount)return{childIndex:r,localVisibleIndex:a};a-=i.visibleSubtreeCount}}throw Error(`Visible child index ${String(r)} is out of range`)}var Me=7,Ne=3,Pe=8,Fe=4;function Ie(e,t,n=0){return e<<Fe|n<<Ne|t}function Le(e){return e.depthAndFlags>>>Fe}function Re(e){return(e.depthAndFlags&Pe)>>Ne}function D(e){return(e.depthAndFlags&Pe)!==0}function O(e){return e.depthAndFlags&Me}function k(e,t){return(O(e)&t)!==0}function ze(e,t){e.depthAndFlags|=t}function Be(e,t){e.depthAndFlags=Ie(t,O(e),Re(e))}var Ve=Symbol(`benchmarkInstrumentation`);function He(e,t){return t==null||Object.defineProperty(e,Ve,{configurable:!0,enumerable:!1,value:t,writable:!1}),e}function Ue(e){return e==null?null:e[Ve]??null}function A(e,t,n){return e==null?n():e.measurePhase(t,n)}function We(e,t,n){Number.isFinite(n)&&e!=null&&e.setCounter(t,n)}function Ge(e){return e>=48&&e<=57}function Ke(e){let t=[],n=0,r=0;for(;r<e.length;){for(;r<e.length&&!Ge(e.charCodeAt(r));)r+=1;if(r>=e.length)break;r>n&&t.push(e.slice(n,r));let i=0;for(;r<e.length&&Ge(e.charCodeAt(r));)i=i*10+(e.charCodeAt(r)-48),r+=1;t.push(i),n=r}return(n<e.length||t.length===0)&&t.push(e.slice(n)),t}function qe(e){let t=e.toLowerCase();return{lowerValue:t,tokens:Ke(t)}}function Je(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e[r],i=t[r];if(n===i)continue;if(typeof n==`number`&&typeof i==`number`)return n<i?-1:1;let a=String(n),o=String(i);if(a!==o)return a<o?-1:1}return e.length===t.length?0:e.length<t.length?-1:1}function Ye(e,t){if(e.tokens.length===1&&t.tokens.length===1&&typeof e.tokens[0]==`string`&&typeof t.tokens[0]==`string`)return e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1;let n=Je(e.tokens,t.tokens);return n===0?e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1:n}function Xe(e,t,n){let r=Ye(n(e),n(t));return r===0?e===t?0:e<t?-1:1:r}function Ze(e,t){return Xe(e,t,qe)}function Qe(e,t){return t===e.segments.length-1?+!!e.isDirectory:1}function $e(e,t){let n=Math.min(e.segments.length,t.segments.length);for(let r=0;r<n;r++){let n=e.segments[r],i=t.segments[r];if(n===i)continue;let a=Qe(e,r);return a===Qe(t,r)?Ze(n,i):a===1?-1:1}return e.segments.length===t.segments.length?e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1:e.segments.length<t.segments.length?-1:1}function et(e,t){return $e(e,t)}function tt(e,t,n){let r=e=>{let t=n.get(e);if(t!=null)return t;let r=qe(e);return n.set(e,r),r},i=Math.min(e.segments.length,t.segments.length);for(let n=0;n<i;n++){let i=e.segments[n],a=t.segments[n];if(i===a)continue;let o=Qe(e,n);return o===Qe(t,n)?Xe(i,a,r):o===1?-1:1}return e.segments.length===t.segments.length?e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1:e.segments.length<t.segments.length?-1:1}function nt(e,t){let n=e.sortKeyById[t];if(n!==void 0)return n;let r=e.valueById[t],i=qe(r);return e.sortKeyById[t]=i,i}function rt(e={}){return{flattenEmptyDirectories:e.flattenEmptyDirectories!==!1,sort:e.sort??`default`}}function it(e){let t=e.length>0&&e.charCodeAt(e.length-1)===47,n=t?e.length-1:e.length,r=[],i=0;for(let t=0;t<n;t++)e.charCodeAt(t)===47&&(r.push(e.slice(i,t)),i=t+1);return r.push(e.slice(i,n)),{hasTrailingSlash:t,segments:r}}function at(e){let{hasTrailingSlash:t,segments:n}=it(e);return{basename:n[n.length-1]??``,isDirectory:t,path:e,segments:n}}function ot(e){if(e.length===0)return{requiresDirectory:!1,segments:[]};let{hasTrailingSlash:t,segments:n}=it(e);return{requiresDirectory:t,segments:n}}function st(){let e=new Map;return e.set(``,0),{idByValue:e,valueById:[``],sortKeyById:[qe(``)]}}function ct(e,t){let n=e.idByValue.get(t);if(n!==void 0)return n;let r=e.valueById.length;return e.idByValue.set(t,r),e.valueById.push(t),r}function lt(e,t){let n=e.valueById[t];if(n===void 0)throw Error(`Unknown segment ID: ${String(t)}`);return n}var ut=Symbol(`pathStorePreparedInputKind`);function dt(e,t){return e[ut]=t,e}function ft(e){return{basename:e.basename,depth:e.segments.length,isDirectory:e.isDirectory,path:e.path,segments:e.segments}}function pt(e,t,n){return n==="default"?et(e,t):n(ft(e),ft(t))}function mt(){return{depthAndFlags:Ie(0,3,1),nameId:0,parentId:0,subtreeNodeCount:1,visibleSubtreeCount:1}}function ht(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return r;return n}function gt(e){return e.isDirectory?e.segments.length:e.segments.length-1}function _t(e){return Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&typeof e.path==`string`&&Array.isArray(e.segments)&&typeof e.basename==`string`&&typeof e.isDirectory==`boolean`)}function vt(e){return Array.isArray(e)&&e.every(e=>typeof e==`string`)}function j(e,t={}){return Ct(e,t).map(e=>e.path)}function M(e,t={}){let n=Ct(e,t);return dt({paths:n.map(e=>e.path),preparedPaths:n},`prepared`)}function yt(e){let t=e.length,n=!1;for(let r=0;r<t;r+=1){let t=e[r];if(t.length>0&&t.charCodeAt(t.length-1)===47){n=!0;break}}return dt({paths:e,presortedPaths:e,presortedPathsContainDirectories:n},`presorted`)}function bt(e){let t=e,n=t.preparedPaths;if(t[ut]===`prepared`&&n!=null)return n;if(!_t(n))throw Error(`preparedInput must come from PathStore.prepareInput()`);return n}function xt(e){let t=e;return t[ut]===`presorted`&&t.presortedPaths!=null||vt(t.presortedPaths)?t.presortedPaths:null}function St(e){let t=e;return typeof t.presortedPathsContainDirectories==`boolean`?t.presortedPathsContainDirectories:null}function Ct(e,t={}){let n=rt(t),r=Ue(t);We(r,`workload.inputFiles`,e.length);let i=A(r,`store.preparePathEntries.parse`,()=>e.map(e=>at(e)));return A(r,`store.preparePathEntries.sort`,()=>i.sort((e,t)=>pt(e,t,n.sort))),i}var wt=class{constructor(e={}){r(this,`directories`,new Map),r(this,`directoryStack`,[0]),r(this,`presortedDirectoryNodeIds`,[]),r(this,`initialExpandedPathSet`,void 0),r(this,`createdDirectoriesAllExpanded`,!1),r(this,`createdDirectoryCount`,0),r(this,`lastPreparedPath`,null),r(this,`nodes`,[mt()]),r(this,`options`,void 0),r(this,`instrumentation`,void 0),r(this,`segmentSortKeyCache`,new Map),r(this,`segmentTable`,st()),r(this,`hasDeferredDirectoryIndexes`,!1),this.instrumentation=Ue(e),this.options=rt(e);let t=e.initialExpandedPaths??null;if(t==null||t.length===0)this.initialExpandedPathSet=null;else{let e=new Set,n=t.length;for(let r=0;r<n;r+=1){let n=t[r],i=n.length;e.add(i>0&&n.charCodeAt(i-1)===47?n.slice(0,i-1):n)}this.initialExpandedPathSet=e,this.createdDirectoriesAllExpanded=!0}this.directories.set(0,be())}appendPaths(e){return A(this.instrumentation,`store.builder.appendPaths.parse`,()=>this.appendPreparedPaths(e.map(e=>at(e))))}appendPreparedPaths(e,t=!0){return this.createdDirectoriesAllExpanded=!1,A(this.instrumentation,`store.builder.appendPreparedPaths`,()=>{for(let n of e)this.appendPreparedPath(n,t)}),this}appendPresortedPaths(e,t=null){return A(this.instrumentation,`store.builder.appendPresortedPaths`,()=>{if(t===!1){this.appendPresortedFilePaths(e);return}this.createdDirectoriesAllExpanded=!1;let n=null,r=0,i=this.nodes,a=this.segmentTable,o=a.idByValue,s=a.valueById,c=this.directoryStack,l=0,u=``,d=0;for(let t of e){if(n===t)throw Error(`Duplicate path: "${t}"`);let e=t.length>0&&t.charCodeAt(t.length-1)===47,a=e?t.length-1:t.length,f=0,p=0;if(n!=null){if(u.length>0&&t.length>u.length&&t.startsWith(u))f=d,p=u.length;else{let r=Math.min(a,n.length),i=!0;for(let e=0;e<r;e++){let r=t.charCodeAt(e);if(r!==n.charCodeAt(e)){i=!1;break}r===47&&(f++,p=e+1)}i&&e&&r===a&&n.length>a&&n.charCodeAt(a)===47&&(f++,p=a+1)}}l=f,r=f;let m=p,h=t.indexOf(`/`,m);for(;h>=0&&h<a;){let e=c[l];if(e===void 0)throw Error(`Directory stack underflow while building the path store`);r++;let n=t.slice(m,h),a=o.get(n);a===void 0&&(a=s.length,o.set(n,a),s.push(n));let u=i.length;i.push({depthAndFlags:Ie(r,0,1),nameId:a,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(t.slice(0,h)),l++,c[l]=u,m=h+1,h=t.indexOf(`/`,m)}if(e){if(m<a){let e=c[l];if(e===void 0)throw Error(`Unable to resolve directory parent for "${t}"`);r++;let n=t.slice(m,a),u=o.get(n);u===void 0&&(u=s.length,o.set(n,u),s.push(n));let d=i.length;i.push({depthAndFlags:Ie(r,0,1),nameId:u,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),l++,c[l]=d,m=a+1}let e=c[l];if(e===void 0)throw Error(`Unable to resolve directory node for "${t}"`);this.promoteDirectoryToExplicit(e,t)}else{let e=c[l];if(e===void 0)throw Error(`Unable to resolve file parent for "${t}"`);let n=t.slice(m),a=o.get(n);a===void 0&&(a=s.length,o.set(n,a),s.push(n)),i.push({depthAndFlags:Ie(r+1,0),nameId:a,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1})}m!==u.length&&(u=t.substring(0,m),d=r),n=t}c.length=l+1,n!=null&&(this.lastPreparedPath=at(n)),this.hasDeferredDirectoryIndexes=!0}),this}appendPresortedFilePaths(e){let t=null,n=0,r=this.nodes,i=this.segmentTable,a=i.idByValue,o=i.valueById,s=this.directoryStack,c=0,l=``,u=0;for(let i of e){if(t===i)throw Error(`Duplicate path: "${i}"`);let e=i.length,d=0,f=0;if(t!=null){if(l.length>0&&i.length>l.length&&i.startsWith(l))d=u,f=l.length;else{let n=Math.min(e,t.length);for(let e=0;e<n;e++){let n=i.charCodeAt(e);if(n!==t.charCodeAt(e))break;n===47&&(d++,f=e+1)}}}c=d,n=d;let p=f,m=i.indexOf(`/`,p);for(;m>=0;){let e=s[c];if(e===void 0)throw Error(`Directory stack underflow while building the path store`);n++;let t=i.slice(p,m),l=a.get(t);l===void 0&&(l=o.length,a.set(t,l),o.push(t));let u=r.length;r.push({depthAndFlags:Ie(n,0,1),nameId:l,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(i.slice(0,m)),this.presortedDirectoryNodeIds.push(u),c++,s[c]=u,p=m+1,m=i.indexOf(`/`,p)}let h=s[c];if(h===void 0)throw Error(`Unable to resolve file parent for "${i}"`);let g=i.slice(p),_=a.get(g);_===void 0&&(_=o.length,a.set(g,_),o.push(g)),r.push({depthAndFlags:Ie(n+1,0),nameId:_,parentId:h,subtreeNodeCount:1,visibleSubtreeCount:1}),p!==l.length&&(l=i.substring(0,p),u=n),t=i}s.length=c+1,t!=null&&(this.lastPreparedPath=at(t)),this.hasDeferredDirectoryIndexes=!0}finish(e={}){let t=e.skipSubtreeCountPass===!0;return this.hasDeferredDirectoryIndexes?(A(this.instrumentation,`store.builder.buildDirectoryIndexes`,()=>this.buildPresortedFinish(t)),this.hasDeferredDirectoryIndexes=!1):t||A(this.instrumentation,`store.builder.computeSubtreeCounts`,()=>this.computeSubtreeCounts(0)),{directories:this.directories,nodes:this.nodes,options:this.options,rootId:0,segmentTable:this.segmentTable,presortedDirectoryNodeIds:this.presortedDirectoryNodeIds.length>0?this.presortedDirectoryNodeIds:null}}didMatchAllInitialExpandedPaths(){return this.createdDirectoriesAllExpanded&&this.initialExpandedPathSet!=null&&this.createdDirectoryCount===this.initialExpandedPathSet.size}appendPreparedPath(e,t){if(this.hasDeferredDirectoryIndexes&&=(this.buildDirectoryIndexes(),!1),this.lastPreparedPath!=null){if(e.path===this.lastPreparedPath.path)throw Error(`Duplicate path: "${e.path}"`);if(t&&(this.options.sort==="default"?tt(this.lastPreparedPath,e,this.segmentSortKeyCache):pt(this.lastPreparedPath,e,this.options.sort))>0)throw Error(`Builder input must be sorted before appendPaths(): "${e.path}"`)}let n=this.lastPreparedPath,r=gt(e),i=n==null?0:gt(n),a=n==null?0:ht(n.segments,e.segments),o=Math.min(a,r,i);this.directoryStack.length=o+1;for(let n=o;n<r;n++){let r=this.directoryStack[this.directoryStack.length-1];if(r===void 0)throw Error(`Directory stack underflow while building the path store`);let i=t?this.getOrCreateDirectoryChild(r,e.segments[n]):this.createDirectoryChild(r,e.segments[n]);this.directoryStack.push(i)}if(e.isDirectory){let t=this.directoryStack[this.directoryStack.length-1];if(t===void 0)throw Error(`Unable to resolve directory node for "${e.path}"`);this.promoteDirectoryToExplicit(t,e.path),this.lastPreparedPath=e;return}let s=this.directoryStack[this.directoryStack.length-1];if(s===void 0)throw Error(`Unable to resolve file parent for "${e.path}"`);t?this.createFileChild(s,e.basename,e.path):this.createFileChildUnchecked(s,e.basename),this.lastPreparedPath=e}recordCreatedDirectoryPath(e){this.createdDirectoriesAllExpanded&&this.initialExpandedPathSet!=null&&(this.createdDirectoryCount+=1,this.initialExpandedPathSet.has(e)||(this.createdDirectoriesAllExpanded=!1))}createFileChild(e,t,n){let r=ct(this.segmentTable,t),i=this.getDirectoryIndex(e),a=i.childIdByNameId;if(a!=null&&a.get(r)!==void 0)throw Error(`Path collides with an existing entry: "${n}"`);let o=this.nodes[e];if(o===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let s=this.nodes.length;return this.nodes.push({depthAndFlags:Ie(Le(o)+1,0),nameId:r,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),a?.set(r,s),we(i,s),s}createFileChildUnchecked(e,t){let n=ct(this.segmentTable,t),r=this.getDirectoryIndex(e),i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:Ie(Le(i)+1,0),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),we(r,a),a}getOrCreateDirectoryChild(e,t){let n=ct(this.segmentTable,t),r=this.getDirectoryIndex(e);if(r.childIdByNameId!=null){let e=r.childIdByNameId.get(n);if(e!==void 0){let n=this.nodes[e];if(n!=null&&!D(n))throw Error(`Path collides with an existing file while creating directory "${t}"`);return e}}let i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:Ie(Le(i)+1,0,1),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),we(r,a),this.directories.set(a,be()),a}createDirectoryChild(e,t){let n=ct(this.segmentTable,t),r=this.getDirectoryIndex(e),i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:Ie(Le(i)+1,0,1),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),we(r,a),this.directories.set(a,be()),a}promoteDirectoryToExplicit(e,t){let n=this.nodes[e];if(n===void 0)throw Error(`Unknown directory node ID: ${String(e)}`);if(!D(n))throw Error(`Path is not a directory: "${t}"`);if(k(n,1))throw Error(`Duplicate path: "${t}"`);ze(n,1)}getDirectoryIndex(e){let t=this.directories.get(e);if(t!==void 0)return t;throw Error(`Unknown directory child index for node ${String(e)}`)}buildPresortedFinish(e){let t=this.nodes,n=this.directories;n.set(0,xe());let r=-1,i=null;for(let e=1;e<t.length;e++){let a=t[e];if(a==null)continue;if(D(a)){let t=xe();n.set(e,t),r=e,i=t}let o;a.parentId===r?o=i:(o=n.get(a.parentId),r=a.parentId,i=o??null),o?.childIds.push(e)}if(!e)for(let e=t.length-1;e>=1;e--){let n=t[e];if(n==null)continue;let r=t[n.parentId];r!=null&&(r.subtreeNodeCount+=n.subtreeNodeCount,r.visibleSubtreeCount+=n.visibleSubtreeCount)}}buildDirectoryIndexes(){let e=this.nodes;for(let t=1;t<e.length;t++){let n=e[t];if(n==null)continue;D(n)&&this.directories.set(t,be());let r=this.directories.get(n.parentId);r!=null&&(r.childIdByNameId!=null&&r.childIdByNameId.set(n.nameId,t),we(r,t))}}computeSubtreeCounts(e){let t=this.nodes[e];if(t===void 0)throw Error(`Unknown node ID: ${String(e)}`);if(!D(t))return t.subtreeNodeCount=1,t.visibleSubtreeCount=1,1;let n=this.getDirectoryIndex(e),r=1;for(let e of n.childIds)r+=this.computeSubtreeCounts(e);return Ee(this.nodes,n),t.subtreeNodeCount=r,t.visibleSubtreeCount=r,r}};function Tt(e,t=`closed`,n=null){let r=Dt(t);return{activeNodeCount:e.nodes.length-1,collapsedDirectoryIds:new Set,collapseNewDirectoriesByDefault:!1,defaultExpansion:r,directoriesOpenByDefault:r===`open`,hasCollapsedDirectoryOverrides:!1,directoryLoadInfoById:new Map,expandedDirectoryIds:new Set,instrumentation:n,listeners:new Map,pathCacheByNodeId:new Map([[e.rootId,{path:``,version:0}]]),pathCacheVersion:0,snapshot:e,transactionStack:[]}}function Et(){return{affectedAncestorIds:new Set,affectedNodeIds:new Set,events:[]}}function Dt(e){if(typeof e!=`number`)return e;if(!Number.isInteger(e)||e<0)throw Error(`initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`);return e}function N(e,t){return k(t,2)||e.defaultExpansion===`open`?!0:e.defaultExpansion!==`closed`&&Le(t)<=e.defaultExpansion}function P(e,t,n=e.snapshot.nodes[t]){return n==null||!D(n)?!1:e.directoriesOpenByDefault&&!e.hasCollapsedDirectoryOverrides?!0:e.collapsedDirectoryIds.has(t)?!1:e.expandedDirectoryIds.has(t)?!0:N(e,n)}function F(e,t,n,r=e.snapshot.nodes[t]){if(r==null||!D(r))return;let i=N(e,r);if(n){if(i){e.collapsedDirectoryIds.delete(t),e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0;return}e.expandedDirectoryIds.add(t);return}if(i){e.collapsedDirectoryIds.add(t),e.hasCollapsedDirectoryOverrides=!0;return}e.expandedDirectoryIds.delete(t)}function Ot(e,t){let n=e.directoryLoadInfoById.get(t);if(n!=null)return n;let r={activeAttemptId:null,errorMessage:null,nextAttemptId:1,state:`loaded`};return e.directoryLoadInfoById.set(t,r),r}function kt(e,t){return e.directoryLoadInfoById.get(t)?.state??`loaded`}function At(e,t){let n=Ot(e,t);if(n.state===`loading`&&n.activeAttemptId!=null)return{attemptId:n.activeAttemptId,nodeId:t,reused:!0};let r=n.nextAttemptId;return n.activeAttemptId=r,n.errorMessage=null,n.nextAttemptId+=1,n.state=`loading`,{attemptId:r,nodeId:t,reused:!1}}function jt(e,t){let n=Ot(e,t);n.activeAttemptId=null,n.errorMessage=null,n.state=`unloaded`}function Mt(e,t,n){let r=e.directoryLoadInfoById.get(t);return r==null||r.activeAttemptId!==n?!1:(r.activeAttemptId=null,r.errorMessage=null,r.state=`loaded`,!0)}function Nt(e,t,n){return e.directoryLoadInfoById.get(t)?.activeAttemptId===n}function Pt(e,t,n,r){let i=e.directoryLoadInfoById.get(t);return i==null||i.activeAttemptId!==n?!1:(i.activeAttemptId=null,i.errorMessage=r??null,i.state=`error`,!0)}function Ft(e,t){e.directoryLoadInfoById.delete(t)}function It(e,t,n){let r=n,i=e.listeners.get(t);return i==null?e.listeners.set(t,new Set([r])):i.add(r),()=>{let n=e.listeners.get(t);n!=null&&(n.delete(r),n.size===0&&e.listeners.delete(t))}}function Lt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`add`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Rt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`remove`,path:e.path,projectionChanged:e.projectionChanged,recursive:e.recursive,visibleCountDelta:null}}function zt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,from:e.from,operation:`move`,projectionChanged:e.projectionChanged,to:e.to,visibleCountDelta:null}}function Bt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`expand`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Vt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`collapse`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Ht(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`mark-directory-unloaded`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Ut(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`begin-child-load`,path:e.path,projectionChanged:e.projectionChanged,reused:e.reused,visibleCountDelta:null}}function Wt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:e.childEvents.some(e=>e.canonicalChanged),childEvents:e.childEvents,operation:`apply-child-patch`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Gt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`complete-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function Kt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,errorMessage:e.errorMessage,operation:`fail-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function qt(e){return{activeNodeCountAfter:e.activeNodeCountAfter,activeNodeCountBefore:e.activeNodeCountBefore,affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],cachedPathEntryCountAfter:e.cachedPathEntryCountAfter,cachedPathEntryCountBefore:e.cachedPathEntryCountBefore,canonicalChanged:!1,idsPreserved:e.idsPreserved,loadInfoEntryCountAfter:e.loadInfoEntryCountAfter,loadInfoEntryCountBefore:e.loadInfoEntryCountBefore,mode:e.mode,operation:`cleanup`,projectionChanged:e.projectionChanged,reclaimedCachedPathEntryCount:e.reclaimedCachedPathEntryCount,reclaimedLoadInfoEntryCount:e.reclaimedLoadInfoEntryCount,reclaimedNodeSlotCount:e.reclaimedNodeSlotCount,reclaimedSegmentCount:e.reclaimedSegmentCount,segmentCountAfter:e.segmentCountAfter,segmentCountBefore:e.segmentCountBefore,totalNodeSlotCountAfter:e.totalNodeSlotCountAfter,totalNodeSlotCountBefore:e.totalNodeSlotCountBefore,visibleCountDelta:null}}function Jt(e,t,n){return{...n,visibleCountDelta:on(e)-t}}function Yt(e,t){let n=on(e),r=Et();e.transactionStack.push(r);try{t()}catch(t){throw Qt(e,r,!1),t}Qt(e,r,!0,on(e)-n)}function Xt(e,t){let n=e.instrumentation;if(n==null){Zt(e,t);return}A(n,`store.events.record`,()=>Zt(e,t))}function Zt(e,t){let n=e.transactionStack[e.transactionStack.length-1]??null;if(n==null){rn(e,t);return}n.events.push(t),nn(n,t)}function Qt(e,t,n,r=null){if(e.transactionStack.pop()!==t)throw Error(`Transaction stack underflow`);if(!n)return;let i=e.transactionStack[e.transactionStack.length-1]??null;if(i!=null){let n=e.instrumentation;n==null?tn(i,t):A(n,`store.events.batch.merge`,()=>tn(i,t));return}let a=$t(t,r),o=e.instrumentation;if(o==null){rn(e,a);return}A(o,`store.events.batch.commit`,()=>rn(e,a))}function $t(e,t){return{affectedAncestorIds:[...e.affectedAncestorIds],affectedNodeIds:[...e.affectedNodeIds],canonicalChanged:e.events.some(e=>e.canonicalChanged),events:[...e.events],operation:`batch`,projectionChanged:e.events.some(e=>e.projectionChanged),visibleCountDelta:t}}function en(e,t){for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n);for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n)}function tn(e,t){for(let n of t.events)e.events.push(n);en(e,t)}function nn(e,t){for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n);for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n)}function rn(e,t){let n=e.instrumentation;if(n==null){an(e,t);return}A(n,`store.events.emit`,()=>an(e,t))}function an(e,t){e.listeners.get(t.operation)?.forEach(e=>e(t)),e.listeners.get(`*`)?.forEach(e=>e(t))}function on(e){return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount??0}function sn(e,t){if(e.snapshot.options.flattenEmptyDirectories!==!0)return null;let n=e.snapshot.nodes[t];if(n==null||!D(n)||k(n,2))return null;let r=e.snapshot.directories.get(t);if(r==null||r.childIds.length!==1)return null;let i=r.childIds[0];if(i==null)return null;let a=e.snapshot.nodes[i];return a==null||!D(a)?null:i}function cn(e,t){let n=t;for(;;){let t=sn(e,n);if(t==null)return n;n=t}}function ln(e,t){let n=[t],r=t;for(;;){let t=sn(e,r);if(t==null)return n;n.push(t),r=t}}function un(e,t){let n=t==null?e.snapshot.rootId:yn(e,t);return n==null?[]:xn(e,n)}function dn(e,t){let n=at(t),r=n.isDirectory?n.segments:n.segments.slice(0,-1),i=In(e,Fn(e,r)),{createdNodeIds:a,directoryId:o}=Sn(e,r),s=new Set(a),c=o;if(n.isDirectory){let n=R(e,o);if(k(n,1))throw Error(`Path already exists: "${t}"`);ze(n,1),e.pathCacheByNodeId.set(o,{path:t,version:e.pathCacheVersion}),s.add(o)}else c=wn(e,o,n.basename),s.add(c);gn(e,o);let l=In(e,o);return Lt({affectedAncestorIds:vn(e,c),affectedNodeIds:[...s],path:t,projectionChanged:Ln(i,l)})}function fn(e,t,n){let r=yn(e,t);if(r==null)throw Error(`Path does not exist: "${t}"`);let i=R(e,r);if(k(i,2))throw Error(`The root node cannot be removed`);if(D(i)&&L(e,r).childIds.length>0&&n.recursive!==!0)throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);let a=i.parentId,o=In(e,a),s=Nn(e,r);Dn(e,a,r,i.nameId),Pn(e,a),gn(e,a);let c=In(e,a);return Rt({affectedAncestorIds:vn(e,a),affectedNodeIds:s,path:t,projectionChanged:Ln(o,c),recursive:n.recursive===!0})}function pn(e,t,n,r){let i=yn(e,t);if(i==null)throw Error(`Source path does not exist: "${t}"`);let a=R(e,i);if(k(a,2))throw Error(`The root node cannot be moved`);let o=r.collision??`error`,s=jn(e,i,n),c=In(e,a.parentId),l=In(e,s.parentId),u=lt(e.snapshot.segmentTable,a.nameId),d=ct(e.snapshot.segmentTable,s.basename);if(s.parentId===a.parentId&&u===s.basename)return null;if(D(a)&&Vn(e,i,s.parentId))throw Error(`Cannot move a directory into one of its descendants`);let f=Se(e.snapshot.nodes,L(e,s.parentId)).get(d),p=s.existingNodeId??f??null;if(p!=null&&p!==i&&Mn(e,p,o,Re(a))===`skip`)return null;let m=a.parentId;Dn(e,m,i,a.nameId),a.parentId=s.parentId,a.nameId=d,e.pathCacheByNodeId.delete(i),Bn(e,i),En(e,s.parentId,i),Pn(e,m),e.pathCacheVersion++,gn(e,m),s.parentId!==m&&gn(e,s.parentId);let h=In(e,m),g=In(e,s.parentId);return zt({affectedAncestorIds:[...new Set([...vn(e,m),...vn(e,s.parentId)])],affectedNodeIds:[i],from:t,projectionChanged:Rn([c,l],[h,g]),to:I(e,i)})}function mn(e,t){let n=e.pathCacheByNodeId.get(t);return n!=null&&n.version===e.pathCacheVersion?n.path:null}function hn(e,t,n){return e.pathCacheByNodeId.set(t,{path:n,version:e.pathCacheVersion}),n}function I(e,t){let n=R(e,t),r=mn(e,t);if(r!=null)return r;if(k(n,2))return hn(e,t,``);let i=I(e,n.parentId),a=lt(e.snapshot.segmentTable,n.nameId),o=i.length===0?a:`${i}${a}`;return hn(e,t,D(n)?`${o}/`:o)}function gn(e,t){let n=e.instrumentation;if(n==null){Un(e,t);return}A(n,`store.recomputeCountsUpwardFrom`,()=>Un(e,t))}function _n(e,t){let n=[[t,0]],{nodes:r,directories:i}=e.snapshot;for(;n.length>0;){let t=n[n.length-1],a=t[0],o=r[a];if(o==null||!D(o)){Hn(e,a,o,!0),n.pop();continue}let s=i.get(a);if(s==null||t[1]>=s.childIds.length){Hn(e,a,o,!0),n.pop();continue}let c=s.childIds[t[1]++];n.push([c,0])}}function vn(e,t){let n=[],r=t;for(;r!=null;){let t=R(e,r);if(n.push(r),r===e.snapshot.rootId)break;r=t.parentId}return n}function yn(e,t){if(t.length===0)return e.snapshot.rootId;let n=ot(t);return bn(e,n.segments,n.requiresDirectory)}function bn(e,t,n){let r=e.snapshot.rootId;for(let n of t){let t=e.snapshot.segmentTable.idByValue.get(n);if(t===void 0)return null;let i=L(e,r),a=Se(e.snapshot.nodes,i).get(t);if(a===void 0)return null;r=a}let i=R(e,r);return n&&!D(i)?null:r}function L(e,t){let n=e.snapshot.directories.get(t);if(n===void 0)throw Error(`Unknown directory child index for node ${String(t)}`);return n}function R(e,t){let n=e.snapshot.nodes[t];if(n===void 0||k(n,4))throw Error(`Unknown node ID: ${String(t)}`);return n}function xn(e,t){let n=e.snapshot.nodes[t];if(n===void 0||k(n,4))return[];if(!D(n))return[I(e,t)];if(L(e,t).childIds.length===0)return k(n,1)&&!k(n,2)?[I(e,t)]:[];let r=[],i=[{childIndex:0,nodeId:t}];for(;i.length>0;){let t=i[i.length-1];if(t==null)break;let n=e.snapshot.nodes[t.nodeId];if(n===void 0||k(n,4)){i.pop();continue}if(!D(n)){r.push(I(e,t.nodeId)),i.pop();continue}let a=L(e,t.nodeId);if(a.childIds.length===0){k(n,1)&&!k(n,2)&&r.push(I(e,t.nodeId)),i.pop();continue}let o=a.childIds[t.childIndex];if(o==null){i.pop();continue}t.childIndex++,i.push({childIndex:0,nodeId:o})}return r}function Sn(e,t){let n=[],r=e.snapshot.rootId;for(let i of t){let t=ct(e.snapshot.segmentTable,i),a=L(e,r),o=Se(e.snapshot.nodes,a).get(t);if(o!==void 0){if(!D(R(e,o)))throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);r=o;continue}r=Cn(e,r,t),n.push(r)}return{createdNodeIds:n,directoryId:r}}function Cn(e,t,n){let r=R(e,t),i=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:Ie(Le(r)+1,0,1),nameId:n,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),e.snapshot.directories.set(i,be()),En(e,t,i),e.collapseNewDirectoriesByDefault&&(e.collapsedDirectoryIds.add(i),e.hasCollapsedDirectoryOverrides=!0),e.activeNodeCount++,i}function wn(e,t,n){let r=ct(e.snapshot.segmentTable,n),i=L(e,t);if(Se(e.snapshot.nodes,i).has(r))throw Error(`Path already exists: "${Gn(e,t,n)}"`);let a=R(e,t),o=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:Ie(Le(a)+1,0),nameId:r,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),En(e,t,o),e.activeNodeCount++,o}function Tn(e,t,n){let r=0,i=t.childIds.length;for(;r<i;){let a=r+i>>>1,o=t.childIds[a];if(o==null){i=a;continue}On(e,n,o)<0?i=a:r=a+1}return r}function En(e,t,n){let r=L(e,t),i=R(e,n);Se(e.snapshot.nodes,r).set(i.nameId,n),De(r,n,i.subtreeNodeCount,i.visibleSubtreeCount);let a=Tn(e,r,n);r.childIds.splice(a,0,n),Te(r,a),Ae(e.snapshot.nodes,r)}function Dn(e,t,n,r){let i=L(e,t),a=Ce(i),o=a.get(n)??-1;Se(e.snapshot.nodes,i).delete(r),a.delete(n);let s=e.snapshot.nodes[n];s!=null&&De(i,n,-s.subtreeNodeCount,-s.visibleSubtreeCount),o>=0&&(i.childIds.splice(o,1),Te(i,o),Ae(e.snapshot.nodes,i))}function On(e,t,n){let r=e.snapshot.options.sort;return r==="default"?kn(e,t,n):r(An(e,t),An(e,n))}function kn(e,t,n){let r=R(e,t),i=R(e,n),a=D(r);if(a!==D(i))return a?-1:1;let o=Ye(nt(e.snapshot.segmentTable,r.nameId),nt(e.snapshot.segmentTable,i.nameId));if(o!==0)return o;let s=lt(e.snapshot.segmentTable,r.nameId),c=lt(e.snapshot.segmentTable,i.nameId);return s===c?t<n?-1:1:s<c?-1:1}function An(e,t){let n=R(e,t),r=I(e,t),i=D(n),a=i?r.slice(0,-1):r;return{basename:lt(e.snapshot.segmentTable,n.nameId),depth:Le(n),isDirectory:i,path:r,segments:a.length===0?[]:a.split(`/`)}}function jn(e,t,n){let r=R(e,t),i=yn(e,n);if(i!=null){let t=R(e,i);if(D(t))return{basename:lt(e.snapshot.segmentTable,r.nameId),existingNodeId:null,parentId:i};let a=ot(n).segments;return{basename:a[a.length-1]??``,existingNodeId:i,parentId:t.parentId}}let a=ot(n),o=a.segments[a.segments.length-1]??``,s=a.segments.slice(0,-1),c=s.length===0?e.snapshot.rootId:bn(e,s,!0);if(c==null)throw Error(`Destination parent does not exist: "${n}"`);return{basename:o,existingNodeId:null,parentId:c}}function Mn(e,t,n,r){if(n===`skip`)return`skip`;if(n===`error`)throw Error(`Destination already exists: "${I(e,t)}"`);let i=R(e,t);if(Re(i)!==r)throw Error(`replace collision requires the same source and destination kinds`);if(D(i)&&L(e,t).childIds.length>0)throw Error(`replace collision does not support non-empty directories`);let a=i.parentId,o=i.nameId;return Nn(e,t),Dn(e,a,t,o),Pn(e,a),gn(e,a),`handled`}function Nn(e,t){let n=[],r=[{nodeId:t,visitedChildren:!1}];for(;r.length>0;){let t=r.pop();if(t==null)break;let i=R(e,t.nodeId);if(t.visitedChildren||!D(i)){D(i)&&e.snapshot.directories.delete(t.nodeId),ze(i,4),e.pathCacheByNodeId.delete(t.nodeId),e.collapsedDirectoryIds.delete(t.nodeId)&&(e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0),e.expandedDirectoryIds.delete(t.nodeId),Ft(e,t.nodeId),e.activeNodeCount--,n.push(t.nodeId);continue}r.push({nodeId:t.nodeId,visitedChildren:!0});let a=L(e,t.nodeId);for(let e=a.childIds.length-1;e>=0;e--){let t=a.childIds[e];t!=null&&r.push({nodeId:t,visitedChildren:!1})}}return n}function Pn(e,t){let n=t;for(;n!=null;){let t=R(e,n);if(!D(t)||k(t,2)||L(e,n).childIds.length>0)return;ze(t,1),n=t.parentId===n?null:t.parentId}}function Fn(e,t){let n=e.snapshot.rootId;for(let r of t){let t=e.snapshot.segmentTable.idByValue.get(r);if(t==null)break;let i=Se(e.snapshot.nodes,L(e,n)).get(t);if(i==null||!D(R(e,i)))break;n=i}return n}function In(e,t){let n=zn(e,t);if(n==null)return null;let r=cn(e,n),i=R(e,r),a=n===r?null:ln(e,n).map(t=>I(e,t));return JSON.stringify({flattenedSegmentPaths:a,hasChildren:L(e,r).childIds.length>0,path:I(e,r),terminalKind:Re(i)})}function Ln(e,t){return Rn([e],[t])}function Rn(e,t){for(let n=0;n<e.length;n+=1){let r=e[n],i=t[n];if(r==null||i==null||r!==i)return!0}return!1}function zn(e,t){let n=t;for(;n!=null;){let t=R(e,n);if(!D(t)||k(t,2))return null;if(!P(e,n,t))return n;n=t.parentId}return null}function Bn(e,t){let n=R(e,t);if(Be(n,(t===e.snapshot.rootId?-1:Le(R(e,n.parentId)))+1),!D(n))return;let r=L(e,t);for(let t of r.childIds)Bn(e,t)}function Vn(e,t,n){let r=n;for(;r!=null;){if(r===t)return!0;let n=R(e,r);if(r===e.snapshot.rootId)return!1;r=n.parentId}return!1}function Hn(e,t,n=R(e,t),r=!1){let i=e.instrumentation;if(i==null){Wn(e,t,n,r);return}A(i,`store.recomputeNodeCounts`,()=>Wn(e,t,n,r))}function Un(e,t){let n=t;for(;n!=null;){let t=R(e,n),r=t.subtreeNodeCount,i=t.visibleSubtreeCount;if(Hn(e,n,t),n===e.snapshot.rootId)return;let a=t.subtreeNodeCount-r,o=t.visibleSubtreeCount-i,s=t.parentId;(a!==0||o!==0)&&De(L(e,s),n,a,o),n=s}}function Wn(e,t,n,r){if(!D(n)){n.subtreeNodeCount=1,n.visibleSubtreeCount=1;return}let i=L(e,t);if(r){let t=e.instrumentation;t==null?Ee(e.snapshot.nodes,i):A(t,`store.recomputeNodeCounts.rebuildChildAggregates`,()=>Ee(e.snapshot.nodes,i))}let a=1+i.totalChildSubtreeNodeCount,o=i.totalChildVisibleSubtreeCount;if(n.subtreeNodeCount=a,k(n,2)){n.visibleSubtreeCount=o;return}n.visibleSubtreeCount=sn(e,t)==null?P(e,t,n)?1+o:1:o}function Gn(e,t,n){let r=I(e,t);return r.length===0?n:`${r}${n}`}function Kn(e){return e!=null&&!k(e,4)}function qn(e,t){let n=e.snapshot.nodes[t];return!Kn(n)||!D(n)||k(n,2)?null:n}function Jn(e){let t=0;for(let[n,r]of e.pathCacheByNodeId)r.version===e.pathCacheVersion&&Kn(e.snapshot.nodes[n])&&(t+=1);return t}function Yn(e){return Math.max(0,e.valueById.length-1)}function Xn(e){return{activeNodeCount:e.activeNodeCount,cachedPathEntryCount:Jn(e),loadInfoEntryCount:e.directoryLoadInfoById.size,segmentCount:Yn(e.snapshot.segmentTable),totalNodeSlotCount:Math.max(0,e.snapshot.nodes.length-1)}}function Zn(e,t,n,r){return{activeNodeCountAfter:r.activeNodeCount,activeNodeCountBefore:n.activeNodeCount,cachedPathEntryCountAfter:r.cachedPathEntryCount,cachedPathEntryCountBefore:n.cachedPathEntryCount,idsPreserved:t,loadInfoEntryCountAfter:r.loadInfoEntryCount,loadInfoEntryCountBefore:n.loadInfoEntryCount,mode:e,reclaimedCachedPathEntryCount:n.cachedPathEntryCount-r.cachedPathEntryCount,reclaimedLoadInfoEntryCount:n.loadInfoEntryCount-r.loadInfoEntryCount,reclaimedNodeSlotCount:n.totalNodeSlotCount-r.totalNodeSlotCount,reclaimedSegmentCount:n.segmentCount-r.segmentCount,segmentCountAfter:r.segmentCount,segmentCountBefore:n.segmentCount,totalNodeSlotCountAfter:r.totalNodeSlotCount,totalNodeSlotCountBefore:n.totalNodeSlotCount}}function Qn(e){let t=[],n=[];for(let n of e.collapsedDirectoryIds)qn(e,n)!=null&&t.push(I(e,n));for(let t of e.expandedDirectoryIds)qn(e,t)!=null&&n.push(I(e,t));return{collapsedPaths:t,expandedPaths:n}}function $n(e){let t=[];for(let[n,r]of e.directoryLoadInfoById)qn(e,n)!=null&&kt(e,n)!==`loaded`&&t.push({info:{activeAttemptId:null,errorMessage:r.errorMessage,nextAttemptId:r.nextAttemptId,state:r.state},path:I(e,n)});return t}function er(e,t){e.collapsedDirectoryIds.clear(),e.hasCollapsedDirectoryOverrides=!1,e.expandedDirectoryIds.clear();for(let n of t.expandedPaths){let t=yn(e,n);t!=null&&F(e,t,!0,R(e,t))}for(let n of t.collapsedPaths){let t=yn(e,n);t!=null&&F(e,t,!1,R(e,t))}}function tr(e,t){e.directoryLoadInfoById.clear();for(let n of t){let t=yn(e,n.path);t!=null&&qn(e,t)!=null&&e.directoryLoadInfoById.set(t,{activeAttemptId:null,errorMessage:n.info.errorMessage,nextAttemptId:n.info.nextAttemptId,state:n.info.state})}}function nr(e){e.pathCacheVersion+=1,e.pathCacheByNodeId.clear(),e.pathCacheByNodeId.set(e.snapshot.rootId,{path:``,version:e.pathCacheVersion})}function rr(e){let t=e.snapshot.segmentTable,n=st();for(let r of e.snapshot.nodes)if(Kn(r)){if(k(r,2)){r.nameId=0;continue}r.nameId=ct(n,lt(t,r.nameId))}e.snapshot.segmentTable=n}function ir(e){for(let[t,n]of e.snapshot.directories){let r=e.snapshot.nodes[t];if(!Kn(r)||!D(r)){e.snapshot.directories.delete(t);continue}let i=n.childIds.filter(n=>{let r=e.snapshot.nodes[n];return Kn(r)&&r.parentId===t});n.childIds=i,n.childIdByNameId=new Map(i.map(t=>[R(e,t).nameId,t])),n.childPositionById=new Map(i.map((e,t)=>[e,t])),Ee(e.snapshot.nodes,n)}}function ar(e){let t=e.snapshot.nodes.length-1;for(;t>e.snapshot.rootId;){let n=e.snapshot.nodes[t];if(Kn(n))break;--t}e.snapshot.nodes.length=t+1}function or(e){let t=Qn(e),n=$n(e);A(e.instrumentation,`store.cleanup.stable.clearPathCaches`,()=>nr(e)),A(e.instrumentation,`store.cleanup.stable.rebuildSegmentTable`,()=>rr(e)),A(e.instrumentation,`store.cleanup.stable.rebuildDirectoryIndexes`,()=>ir(e)),A(e.instrumentation,`store.cleanup.stable.trimTrailingRemovedNodeSlots`,()=>ar(e)),A(e.instrumentation,`store.cleanup.stable.restoreExpansionOverrides`,()=>er(e,t)),A(e.instrumentation,`store.cleanup.stable.restoreDirectoryLoadInfos`,()=>tr(e,n)),A(e.instrumentation,`store.cleanup.stable.recomputeCounts`,()=>_n(e,e.snapshot.rootId))}function sr(e){let t=Qn(e),n=$n(e),r=A(e.instrumentation,`store.cleanup.aggressive.listPaths`,()=>un(e)),i=He({...e.snapshot.options},e.instrumentation),a=A(e.instrumentation,`store.cleanup.aggressive.rebuildSnapshot`,()=>{let e=new wt(i);return e.appendPaths(r),e.finish()});e.snapshot=a,e.activeNodeCount=a.nodes.length-1,e.pathCacheByNodeId=new Map([[a.rootId,{path:``,version:0}]]),e.pathCacheVersion=0,A(e.instrumentation,`store.cleanup.aggressive.restoreExpansionOverrides`,()=>er(e,t)),A(e.instrumentation,`store.cleanup.aggressive.restoreDirectoryLoadInfos`,()=>tr(e,n)),A(e.instrumentation,`store.cleanup.aggressive.recomputeCounts`,()=>_n(e,e.snapshot.rootId))}function cr(e){for(let t of e.directoryLoadInfoById.values())if(t.state===`loading`&&t.activeAttemptId!=null)return!0;return!1}function lr(e,t){let n=Xn(e);t===`stable`?A(e.instrumentation,`store.cleanup.stable`,()=>or(e)):A(e.instrumentation,`store.cleanup.aggressive`,()=>sr(e));let r=Xn(e);return Zn(t,t===`stable`,n,r)}var ur=64;function dr(e,t){let n=t+2;if(n<=e.length)return e;let r=e.length;for(;r<n;)r*=2;let i=new Int32Array(r);return i.fill(-1),i.set(e),i}function fr(e){return R(e,e.snapshot.rootId).visibleSubtreeCount}function pr(e,t,n,r){let i=R(e,t.terminalNodeId),a=Math.max(1,i.visibleSubtreeCount);return Math.min(r-1,n+a-1)}function mr(e,t,n,r){return{ancestorPaths:r,index:t.index,posInSet:t.posInSet,row:Nr(e,t.cursor),setSize:t.setSize,subtreeEndIndex:pr(e,t.cursor,t.index,n)}}function hr(e,t,n,r,i,a){let o=L(e,t),{childIndex:s,childVisibleIndex:c,localVisibleIndex:l}=Oe(e.snapshot.nodes,o,n),u=o.childIds[s];if(u==null)throw Error(`Visible index ${String(n)} is out of range`);return gr(e,u,l,r+c,i+1,s,o.childIds.length,a)}function gr(e,t,n,r,i,a,o,s){if(!D(R(e,t))){if(n===0)return{ancestors:s,cursor:{headNodeId:t,terminalNodeId:t,visibleDepth:i},index:r,posInSet:a,setSize:o};throw Error(`Visible index ${String(n)} is out of range for file`)}let c=Dr(e,t,i);if(n===0)return{ancestors:s,cursor:c,index:r,posInSet:a,setSize:o};let l=R(e,c.terminalNodeId);if(!D(l)||!P(e,c.terminalNodeId,l))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return hr(e,c.terminalNodeId,n-1,r+1,c.visibleDepth,[...s,{cursor:c,index:r,posInSet:a,setSize:o}])}function _r(e,t){let n=fr(e);if(t<0||t>=n)return null;let r=hr(e,e.snapshot.rootId,t,0,-1,[]),i=r.ancestors.map(t=>I(e,t.cursor.terminalNodeId)),a=null;return{ancestorPaths:i,get ancestorRows(){if(a!=null)return a;let t=[],i=[];for(let a of r.ancestors){let r=mr(e,a,n,[...i]);t.push(r),i.push(r.row.path)}return a=t,a},index:r.index,posInSet:r.posInSet,row:Nr(e,r.cursor),setSize:r.setSize,subtreeEndIndex:pr(e,r.cursor,r.index,n)}}function vr(e,t,n){let r=e.instrumentation,i=fr(e);if(i<=0||n<t)return[];let a=Math.max(0,Math.min(t,i-1)),o=Math.max(a,Math.min(n,i-1));if(r==null){if(a===0)return Mr(e,o+1);let t=[],n=wr(e,a);for(let r=a;r<=o&&n!=null;r++){let r=Nr(e,n);t.push(r),n=kr(e,n)}return t}let s=[],c=0,l=0,u=A(r,`store.getVisibleSlice.selectFirstRow`,()=>wr(e,a));for(let t=a;t<=o&&u!=null;t++){let t=A(r,`store.getVisibleSlice.materializeRow`,()=>Nr(e,u));s.push(t),t.isFlattened&&(c++,l+=t.flattenedSegments?.length??0),u=A(r,`store.getVisibleSlice.advanceCursor`,()=>kr(e,u))}return We(r,`workload.visibleRowsRead`,s.length),We(r,`workload.flattenedRowsRead`,c),We(r,`workload.flattenedSegmentsRead`,l),s}function yr(e,t=fr(e)){let n=e.instrumentation;return n==null?jr(e,t):A(n,`store.getVisibleTreeProjection`,()=>jr(e,t))}function br(e){return Ar(yr(e))}function xr(e,t){let n=yn(e,t);if(n==null||n===e.snapshot.rootId||D(R(e,n))&&cn(e,n)!==n)return null;let r=0,i=n,{nodes:a,rootId:o}=e.snapshot;for(;i!==o;){let t=R(e,i).parentId,n=L(e,t),s=Ce(n).get(i);if(s==null)throw Error(`Child ${String(i)} was not found in its parent index`);if(r+=ke(a,n,s),t!==o){let n=R(e,t),a=sn(e,t);if(!P(e,t,n)&&a!==i)return null;cn(e,t)===t&&(r+=1)}i=t}return r}function Sr(e,t){let n=yn(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=R(e,n);if(!D(r))throw Error(`Path is not a directory: "${t}"`);return P(e,n,r)?null:(F(e,n,!0,r),gn(e,n),Bt({affectedAncestorIds:vn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0}))}function Cr(e,t){let n=yn(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=R(e,n);if(!D(r))throw Error(`Path is not a directory: "${t}"`);return P(e,n,r)?(F(e,n,!1,r),gn(e,n),Vt({affectedAncestorIds:vn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0})):null}function wr(e,t){return t<0||t>=fr(e)?null:Tr(e,e.snapshot.rootId,t,-1)}function Tr(e,t,n,r){let i=L(e,t),a=e.instrumentation,{childIndex:o,localVisibleIndex:s}=a==null?Oe(e.snapshot.nodes,i,n):A(a,`store.getVisibleSlice.selectChildIndex`,()=>Oe(e.snapshot.nodes,i,n)),c=i.childIds[o];if(c!=null)return Er(e,c,s,r+1);throw Error(`Visible index ${String(n)} is out of range`)}function Er(e,t,n,r){if(!D(R(e,t))){if(n===0)return{headNodeId:t,terminalNodeId:t,visibleDepth:r};throw Error(`Visible index ${String(n)} is out of range for file`)}let i=Dr(e,t,r);if(n===0)return i;let a=R(e,i.terminalNodeId);if(!D(a)||!P(e,i.terminalNodeId,a))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Tr(e,i.terminalNodeId,n-1,i.visibleDepth)}function Dr(e,t,n){return D(R(e,t))?e.instrumentation==null?{headNodeId:t,terminalNodeId:cn(e,t),visibleDepth:n}:{headNodeId:t,terminalNodeId:A(e.instrumentation,`store.getVisibleSlice.flatten.resolveTerminalDirectory`,()=>cn(e,t)),visibleDepth:n}:{headNodeId:t,terminalNodeId:t,visibleDepth:n}}function Or(e,t){let n=R(e,t);if(!D(n))return!0;let r=n.parentId;return r===e.snapshot.rootId||sn(e,r)!==t}function kr(e,t){let n=R(e,t.terminalNodeId);if(D(n)){let r=L(e,t.terminalNodeId);if(P(e,t.terminalNodeId,n)&&r.childIds.length>0){let n=r.childIds[0];return n==null?null:Er(e,n,0,t.visibleDepth+1)}}let r=t.terminalNodeId,i=t.visibleDepth;for(;;){let t=R(e,r);if(r===e.snapshot.rootId)return null;let n=t.parentId,a=L(e,n),o=Ce(a).get(r)??-1;if(o<0)throw Error(`Child ${String(r)} was not found in its parent index`);let s=a.childIds[o+1]??null;if(s!=null)return Er(e,s,0,i);Or(e,r)&&i--,r=n}}function Ar(e){let t=e.paths.length,n=Array(t);for(let r=0;r<t;r+=1){let t=e.getParentIndex(r);n[r]={index:r,parentPath:t>=0?e.paths[t]??null:null,path:e.paths[r]??``,posInSet:e.posInSetByIndex[r]??0,setSize:e.setSizeByIndex[r]??0}}return{getParentIndex:e.getParentIndex,rows:n,get visibleIndexByPath(){return e.visibleIndexByPath}}}function jr(e,t){let n=Array(t),r=new Int32Array(t),i=new Int32Array(t),a=new Int32Array(t),o=new Int32Array(ur);o.fill(-1);let s=0,{nodes:c,directories:l,segmentTable:u}=e.snapshot,d=[[l.get(e.snapshot.rootId),0,-1,``]],f=e.snapshot.options.flattenEmptyDirectories,p=e.pathCacheByNodeId,m=e.pathCacheVersion,h=u.valueById;for(;d.length>0&&s<t;){let t=d[d.length-1],u=t[0];if(t[1]>=u.childIds.length){d.pop();continue}let g=t[1],_=u.childIds[t[1]++],v=c[_],y=t[2]+1,b=t[3];o=dr(o,y);let x,S=_;if(D(v))S=f?cn(e,_):_,x=S===_?`${b}${h[v.nameId]}/`:I(e,S);else{let e=p.get(_);x=e!=null&&e.version===m?e.path:`${b}${h[v.nameId]}`}r[s]=o[y],n[s]=x,i[s]=g,a[s]=u.childIds.length,o[y+1]=s,s+=1;let C=c[S];C!=null&&D(C)&&P(e,S,C)&&d.push([l.get(S),0,y,x])}s<t&&(n.length=s);let g=r.subarray(0,s),_=i.subarray(0,s),v=a.subarray(0,s),y=null;return{getParentIndex(e){return e<0||e>=s?-1:g[e]??-1},paths:n,posInSetByIndex:_,setSizeByIndex:v,get visibleIndexByPath(){if(y==null){y=new Map;for(let e=0;e<s;e+=1)y.set(n[e]??``,e)}return y}}}function Mr(e,t){let n=Array(t),r=0,{nodes:i,directories:a,segmentTable:o}=e.snapshot,s=[[a.get(e.snapshot.rootId),0,-1]],c=o.valueById,l=e.snapshot.options.flattenEmptyDirectories,u=e.pathCacheByNodeId,d=e.pathCacheVersion;for(;s.length>0&&r<t;){let t=s[s.length-1],o=t[0];if(t[1]>=o.childIds.length){s.pop();continue}let f=o.childIds[t[1]++],p=i[f],m=t[2]+1;if(!D(p)){let t=u.get(f);n[r++]={depth:m,flattenedSegments:void 0,hasChildren:!1,id:f,isExpanded:!1,isFlattened:!1,isLoading:!1,kind:`file`,loadState:void 0,name:c[p.nameId],path:t!=null&&t.version===d?t.path:I(e,f)};continue}let h=l?cn(e,f):f,g={headNodeId:f,terminalNodeId:h,visibleDepth:m};n[r++]=Nr(e,g);let _=i[h];_!=null&&D(_)&&P(e,h,_)&&s.push([a.get(h),0,m])}return r<t&&(n.length=r),n}function Nr(e,t){let n=R(e,t.terminalNodeId),r=D(n)?Pr(e,t):null,i=I(e,t.terminalNodeId),a=lt(e.snapshot.segmentTable,n.nameId),o=D(n)&&L(e,t.terminalNodeId).childIds.length>0,s=t.headNodeId!==t.terminalNodeId,c=e.instrumentation,l=s?c==null?ln(e,t.headNodeId).map(n=>{let r=R(e,n);return{isTerminal:n===t.terminalNodeId,name:lt(e.snapshot.segmentTable,r.nameId),nodeId:n,path:I(e,n)}}):A(c,`store.getVisibleSlice.flatten.collectSegments`,()=>ln(e,t.headNodeId).map(n=>{let r=R(e,n);return{isTerminal:n===t.terminalNodeId,name:lt(e.snapshot.segmentTable,r.nameId),nodeId:n,path:I(e,n)}})):void 0;return{depth:t.visibleDepth,flattenedSegments:l,hasChildren:o,id:t.terminalNodeId,isExpanded:D(n)&&P(e,t.terminalNodeId,n),isFlattened:s,isLoading:r===`loading`,kind:D(n)?`directory`:`file`,loadState:r==null||r===`loaded`?void 0:r,name:a,path:i}}function Pr(e,t){if(t.headNodeId===t.terminalNodeId)return kt(e,t.terminalNodeId);let n=ln(e,t.headNodeId),r=!1,i=!1;for(let t of n){let n=kt(e,t);if(n===`loading`)return`loading`;if(n===`error`){i=!0;continue}n===`unloaded`&&(r=!0)}return i?`error`:r?`unloaded`:`loaded`}var Fr=8;function Ir(e){let{nodes:t,directories:n,rootId:r,options:i}=e,a=t.length,o=new Int32Array(a),s=new Int32Array(a),c=new Int32Array(a),l=new Int32Array(a),u=new Int32Array(a),d=new Int32Array(a),f=new Int32Array(a);for(let e=0;e<a;e+=1){let n=t[e];n!=null&&(o[e]=n.parentId,s[e]=n.nameId,c[e]=n.depthAndFlags,l[e]=n.subtreeNodeCount,u[e]=n.visibleSubtreeCount)}let p=0;for(let e of n.values())p+=e.childIds.length;let m=new Int32Array(p),h=0;for(let[e,t]of n){let n=t.childIds;d[e]=h,f[e]=n.length;for(let e=0;e<n.length;e+=1)m[h]=n[e],h+=1}return{nodeCount:a,rootId:r,flattenEmptyDirectories:i.flattenEmptyDirectories===!0,parentId:o,nameId:s,depthAndFlags:c,subtreeNodeCount:l,visibleSubtreeCount:u,childStart:d,childCount:f,childIdsFlat:m}}function Lr(e){let{nodeCount:t,rootId:n,flattenEmptyDirectories:r,depthAndFlags:i,subtreeNodeCount:a,visibleSubtreeCount:o,childStart:s,childCount:c,childIdsFlat:l}=e;for(let e=t-1;e>=1;--e){if((i[e]&Fr)===0)continue;let t=s[e],n=c[e],u=0,d=0;for(let e=0;e<n;e+=1){let n=l[t+e];u+=a[n],d+=o[n]}a[e]=1+u;let f;f=r&&n===1?(i[l[t]]&Fr)===0?1+d:d:1+d,o[e]=f}let u=s[n],d=c[n],f=0,p=0;for(let e=0;e<d;e+=1){let t=l[u+e];f+=a[t],p+=o[t]}a[n]=1+f,o[n]=p}var z;function Rr(e){let{directories:t,nodes:n,options:r,rootId:i,presortedDirectoryNodeIds:a}=e.snapshot,o=r.flattenEmptyDirectories===!0,s=e=>{let r=n[e];if(r==null||!D(r))return;let i=t.get(e);if(i==null)throw Error(`Unknown directory child index for node ${String(e)}`);let a=i.childIds,s=a.length,c=0,l=0;for(let e=0;e<s;e++){let t=a[e];if(t==null)continue;let r=n[t];c+=r.subtreeNodeCount,l+=r.visibleSubtreeCount}i.totalChildSubtreeNodeCount=c,i.totalChildVisibleSubtreeCount=l,s>=128&&Ae(n,i),r.subtreeNodeCount=1+c;let u;if(o&&s===1){let e=n[a[0]];u=e!=null&&D(e)?l:1+l}else u=1+l;r.visibleSubtreeCount=u};if(a!=null)for(let e=a.length-1;e>=0;e--)s(a[e]);else for(let e=n.length-1;e>=1;e--)s(e);let c=n[i],l=t.get(i);if(c==null||l==null)return;let u=l.childIds,d=0,f=0;for(let e=0;e<u.length;e++){let t=u[e];if(t==null)continue;let r=n[t];d+=r.subtreeNodeCount,f+=r.visibleSubtreeCount}l.totalChildSubtreeNodeCount=d,l.totalChildVisibleSubtreeCount=f,Ae(n,l),c.subtreeNodeCount=1+d,c.visibleSubtreeCount=f}function zr(e){let{directories:t,nodes:n,rootId:r}=e.snapshot,i=Ir(e.snapshot);Lr(i);let a=i.subtreeNodeCount,o=i.visibleSubtreeCount;for(let e=0;e<n.length;e+=1){let t=n[e];t!=null&&(t.subtreeNodeCount=a[e],t.visibleSubtreeCount=o[e])}for(let[e,i]of t){let t=i.childIds,a=t.length,o=0,s=0;for(let e=0;e<a;e++){let r=t[e];if(r==null)continue;let i=n[r];o+=i.subtreeNodeCount,s+=i.visibleSubtreeCount}i.totalChildSubtreeNodeCount=o,i.totalChildVisibleSubtreeCount=s,(e===r||a>=128)&&Ae(n,i)}}function Br(e){return e.initialExpansion===`open`&&(e.initialExpandedPaths==null||e.initialExpandedPaths.length===0)}var Vr=(z=new WeakMap,class e{constructor(e={}){i(this,z,void 0);let t=Ue(e),n=A(t,`store.builder.create`,()=>new wt(e));if(e.preparedInput!=null){let t=xt(e.preparedInput);t==null?n.appendPreparedPaths(bt(e.preparedInput),!1):n.appendPresortedPaths(t,St(e.preparedInput))}else{let r=e.paths??[];e.presorted===!0?n.appendPaths(r):n.appendPreparedPaths(A(t,`store.preparePathEntries`,()=>Ct(r,e)))}let r=A(t,`store.builder.finish`,()=>n.finish({skipSubtreeCountPass:!0})),o=A(t,`store.state.detectAllDirectoriesExpanded`,()=>(e.initialExpansion??`closed`)===`closed`&&n.didMatchAllInitialExpandedPaths());s(z,this,A(t,`store.state.create`,()=>Tt(r,o?`open`:e.initialExpansion??`closed`,t))),o&&(a(z,this).collapseNewDirectoriesByDefault=!0);let c=o?a(z,this).snapshot.directories.size-1:A(t,`store.state.initializeExpandedPaths`,()=>this.initializeExpandedPaths(e.initialExpandedPaths));o||Br(e)||(e.initialExpansion??`closed`)===`closed`&&c===a(z,this).snapshot.directories.size-1||(e.initialExpandedPaths?.length??0)>0&&A(t,`store.state.checkAllDirectoriesExpanded`,()=>this.hasAllDirectoriesExpanded())?e.useSoaCountSweep===!0?A(t,`store.state.initializeOpenVisibleCountsViaSoa`,()=>zr(a(z,this))):A(t,`store.state.initializeOpenVisibleCounts`,()=>Rr(a(z,this))):A(t,`store.state.recomputeCounts`,()=>_n(a(z,this),a(z,this).snapshot.rootId))}static preparePaths(e,t={}){return j(e,t)}static prepareInput(e,t={}){return M(e,t)}static preparePresortedInput(e){return yt(e)}list(e){return A(a(z,this).instrumentation,`store.list`,()=>un(a(z,this),e))}add(e){A(a(z,this).instrumentation,`store.add`,()=>{let t=fr(a(z,this));Xt(a(z,this),Jt(a(z,this),t,dn(a(z,this),e)))})}remove(e,t={}){A(a(z,this).instrumentation,`store.remove`,()=>{let n=fr(a(z,this));Xt(a(z,this),Jt(a(z,this),n,fn(a(z,this),e,t)))})}move(e,t,n={}){A(a(z,this).instrumentation,`store.move`,()=>{let r=fr(a(z,this)),i=pn(a(z,this),e,t,n);i!=null&&Xt(a(z,this),Jt(a(z,this),r,i))})}batch(e){Yt(a(z,this),()=>{if(typeof e==`function`){e(this);return}for(let t of e)switch(t.type){case`add`:this.add(t.path);break;case`remove`:this.remove(t.path,{recursive:t.recursive});break;case`move`:this.move(t.from,t.to,{collision:t.collision})}})}getVisibleCount(){return A(a(z,this).instrumentation,`store.getVisibleCount`,()=>fr(a(z,this)))}getVisibleSlice(e,t){return A(a(z,this).instrumentation,`store.getVisibleSlice`,()=>vr(a(z,this),e,t))}getVisibleRowContext(e){return A(a(z,this).instrumentation,`store.getVisibleRowContext`,()=>_r(a(z,this),e))}getVisibleTreeProjection(){return br(a(z,this))}getVisibleTreeProjectionData(e){return yr(a(z,this),e)}getVisibleIndex(e){return A(a(z,this).instrumentation,`store.getVisibleIndex`,()=>xr(a(z,this),e))}getPathInfo(e){return A(a(z,this).instrumentation,`store.getPathInfo`,()=>{let t=yn(a(z,this),e);if(t==null)return null;let n=R(a(z,this),t);return{depth:Le(n),kind:D(n)?`directory`:`file`,path:I(a(z,this),t)}})}isExpanded(e){return A(a(z,this).instrumentation,`store.isExpanded`,()=>{let t=this.requireDirectoryNodeId(e),n=R(a(z,this),t);return P(a(z,this),t,n)})}expand(e){A(a(z,this).instrumentation,`store.expand`,()=>{let t=fr(a(z,this)),n=Sr(a(z,this),e);n!=null&&Xt(a(z,this),Jt(a(z,this),t,n))})}collapse(e){A(a(z,this).instrumentation,`store.collapse`,()=>{let t=fr(a(z,this)),n=Cr(a(z,this),e);n!=null&&Xt(a(z,this),Jt(a(z,this),t,n))})}on(e,t){return It(a(z,this),e,t)}getDirectoryLoadState(e){let t=this.requireDirectoryNodeId(e);return kt(a(z,this),t)}markDirectoryUnloaded(e){A(a(z,this).instrumentation,`store.markDirectoryUnloaded`,()=>{let t=this.requireDirectoryNodeId(e);if(L(a(z,this),t).childIds.length>0)throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);let n=fr(a(z,this));jt(a(z,this),t),Xt(a(z,this),Jt(a(z,this),n,Ht({affectedAncestorIds:vn(a(z,this),t),affectedNodeIds:[t],path:e,projectionChanged:this.isDirectoryProjectionVisible(t)})))})}beginChildLoad(e){return A(a(z,this).instrumentation,`store.beginChildLoad`,()=>{let t=this.requireDirectoryNodeId(e),n=fr(a(z,this)),r=At(a(z,this),t);return Xt(a(z,this),Jt(a(z,this),n,Ut({affectedAncestorIds:vn(a(z,this),t),affectedNodeIds:[t],attemptId:r.attemptId,path:e,projectionChanged:this.isDirectoryProjectionVisible(t),reused:r.reused}))),r})}applyChildPatch(e,t){return A(a(z,this).instrumentation,`store.applyChildPatch`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null||kt(a(z,this),n)!==`loading`||!Nt(a(z,this),n,e.attemptId))return!1;let r=I(a(z,this),n);this.validateChildPatch(r,t);let i=fr(a(z,this)),o=[];for(let e of t.operations){Hr(r,e);let t=fr(a(z,this));switch(e.type){case`add`:o.push(Jt(a(z,this),t,dn(a(z,this),e.path)));break;case`remove`:o.push(Jt(a(z,this),t,fn(a(z,this),e.path,{recursive:e.recursive})));break;case`move`:{let n=pn(a(z,this),e.from,e.to,{collision:e.collision});n!=null&&o.push(Jt(a(z,this),t,n));break}}}let s=o.some(e=>e.projectionChanged)||this.isDirectoryProjectionVisible(n);return Xt(a(z,this),Jt(a(z,this),i,Wt({affectedAncestorIds:vn(a(z,this),n),affectedNodeIds:[n],attemptId:e.attemptId,childEvents:o,path:I(a(z,this),n),projectionChanged:s}))),!0})}completeChildLoad(e){return A(a(z,this).instrumentation,`store.completeChildLoad`,()=>{let t=this.resolveActiveDirectoryNodeId(e.nodeId);if(t==null)return!1;let n=fr(a(z,this)),r=Mt(a(z,this),t,e.attemptId);return Xt(a(z,this),Jt(a(z,this),n,Gt({affectedAncestorIds:vn(a(z,this),t),affectedNodeIds:[t],attemptId:e.attemptId,path:I(a(z,this),t),projectionChanged:this.isDirectoryProjectionVisible(t),stale:!r}))),r})}failChildLoad(e,t){return A(a(z,this).instrumentation,`store.failChildLoad`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null)return!1;let r=fr(a(z,this)),i=Pt(a(z,this),n,e.attemptId,t);return Xt(a(z,this),Jt(a(z,this),r,Kt({affectedAncestorIds:vn(a(z,this),n),affectedNodeIds:[n],attemptId:e.attemptId,errorMessage:t,path:I(a(z,this),n),projectionChanged:this.isDirectoryProjectionVisible(n),stale:!i}))),i})}cleanup(e={}){return A(a(z,this).instrumentation,`store.cleanup`,()=>{if(a(z,this).transactionStack.length>0)throw Error(`Cleanup cannot run during an open batch or transaction.`);if(cr(a(z,this)))throw Error(`Cleanup cannot run while directory loads are active.`);let t=fr(a(z,this)),n=lr(a(z,this),e.mode??`stable`);return Xt(a(z,this),Jt(a(z,this),t,qt({...n,affectedAncestorIds:[],affectedNodeIds:[],projectionChanged:n.idsPreserved===!1}))),n})}getNodeCount(){return a(z,this).activeNodeCount}initializeExpandedPaths(e){if(e==null||e.length===0)return 0;let t=0,n=[],r=[],i=0,o=null,s=a(z,this).snapshot.segmentTable,c=s.valueById,l=a(z,this).snapshot.nodes,u=new Map;for(let d of e){o!=null&&d<o&&(o=null,i=0,n.length=0,r.length=0);let e=d.length>0&&d.charCodeAt(d.length-1)===47?d.length-1:d.length;if(e===0){o=d,i=e,n.length=0,r.length=0;continue}let f=0,p=0;if(o!=null){let t=Math.min(e,i),n=!0;for(let e=0;e<t;e+=1){let t=d.charCodeAt(e);if(t!==o.charCodeAt(e)){n=!1;break}t===47&&(f+=1,p=e+1)}n&&(t===i&&e>t&&d.charCodeAt(t)===47?(f+=1,p=t+1):t===e&&i>t&&o.charCodeAt(t)===47&&(f+=1,p=e+1)),f=Math.min(f,r.length)}let m=f===0?a(z,this).snapshot.rootId:r[f-1]??a(z,this).snapshot.rootId,h=f,g=!0,_=p;for(;_<=e;){let t=d.indexOf(`/`,_),i=t===-1||t>e?e:t,o=d.slice(_,i),p=L(a(z,this),m).childIds,v=h===f?n[h]??0:0,y=v,b,x=u.get(o)??qe(o);u.set(o,x);let S=(e,t)=>{for(y=e;y<t;y+=1){let e=p[y],t=l[e],n=c[t.nameId];if(n===o)return b=e,!0;let r=Ye(nt(s,t.nameId),x);if(r>0||r===0&&n>o)return!1}return!1};if(!S(v,p.length)&&v>0&&S(0,v),b===void 0){g=!1;break}if(!D(R(a(z,this),b))){g=!1;break}if(n[h]=y,r[h]=b,m=b,h+=1,i===e)break;_=i+1}if(o=d,i=e,n.length=h,r.length=h,!g){o=null,i=0,n.length=0,r.length=0;continue}for(let e=f;e<h;e+=1){let n=r[e];if(n==null)continue;let i=R(a(z,this),n);P(a(z,this),n,i)||(F(a(z,this),n,!0,i),t+=1)}}return t}hasAllDirectoriesExpanded(){for(let e of a(z,this).snapshot.directories.keys()){if(e===a(z,this).snapshot.rootId)continue;let t=R(a(z,this),e);if(!P(a(z,this),e,t))return!1}return!0}requireDirectoryNodeId(e){let t=yn(a(z,this),e);if(t==null)throw Error(`Path does not exist: "${e}"`);if(!D(R(a(z,this),t)))throw Error(`Path is not a directory: "${e}"`);return t}resolveActiveDirectoryNodeId(e){try{if(!D(R(a(z,this),e)))throw Error(`Node is not a directory: ${String(e)}`);return e}catch{return null}}isDirectoryProjectionVisible(e){let t=e;for(;t!==a(z,this).snapshot.rootId;){let e=R(a(z,this),t).parentId;if(e!==a(z,this).snapshot.rootId){let n=R(a(z,this),e),r=sn(a(z,this),e);if(!P(a(z,this),e,n)&&r!==t)return!1}t=e}return!0}validateChildPatch(t,n){new e({paths:this.list(t),presorted:!0,sort:a(z,this).snapshot.options.sort}).batch(n.operations)}});function Hr(e,t){switch(t.type){case`add`:case`remove`:if(!t.path.startsWith(e)||t.path===e)throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);break;case`move`:if(!t.from.startsWith(e)||!t.to.startsWith(e)||t.from===e||t.to===e)throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`)}}var Ur=e=>e.startsWith(`f::`)?e.slice(3):e;function Wr(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function Gr(e,t){return e===``?t:`${e}/${t}`}function Kr({files:e,path:t,isFolder:n,nextBasename:r}){let i=Ur(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=Wr(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=Gr(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}function qr(e){return e.endsWith(`/`)}function Jr(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function Yr(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function Xr(e,t){return t.includes(e)?Yr(t):[e]}function Zr(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function Qr(e,t){return{draggedPaths:e,target:t}}function $r(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(qr(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function ei(e,t){return t.kind===`root`||t.directoryPath==null?Jr(e):t.directoryPath}function ti(e,t){let n=e.map(e=>{let n=ei(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}function ni(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function ri(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!ni(Vr.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}function ii(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function ai(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function oi(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function si(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return oi(e,t.path)?n?e:null:e;case`move`:return ai(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=si(r,e,n),r==null)return null;return r}}}function ci(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function li(e){switch(e.operation){case`add`:return{...ci(e),operation:`add`,path:e.path};case`remove`:return{...ci(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...ci(e),from:e.from,operation:`move`,to:e.to}}}function ui(e){return{...ci(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>li(e)),operation:`batch`}}function di(e){switch(e.operation){case`add`:case`remove`:case`move`:return li(e);case`batch`:return ui(e);default:return null}}function fi(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function pi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function mi(e){return pi(e).at(-1)??null}function hi(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function gi(e){return e.endsWith(`/`)}var _i=e=>e.toLowerCase();function vi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function yi(e){return e.endsWith(`/`)?e.slice(0,-1):e}function bi(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var xi=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()},Si,Ci,wi,Ti,Ei,Di,Oi,ki,B,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,V,Ki,qi,Ji,Yi,Xi,Zi,H,Qi,$i,ea,ta,na,ra,ia,U,aa,W,oa,sa,G,ca,K,la,ua=Symbol(`FILE_TREE_RENAME_VIEW`),da=512,fa=512;function pa(e){return e===`top`||e===`center`?e:`nearest`}function ma(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=pi(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function ha(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:ma(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var ga=(Si=new WeakMap,Ci=new WeakMap,wi=new WeakMap,Ti=new WeakMap,Ei=new WeakMap,Di=new WeakMap,Oi=new WeakMap,ki=new WeakMap,B=new WeakMap,Ai=new WeakMap,ji=new WeakMap,Mi=new WeakMap,Ni=new WeakMap,Pi=new WeakMap,Fi=new WeakMap,Ii=new WeakMap,Li=new WeakMap,Ri=new WeakMap,zi=new WeakMap,Bi=new WeakMap,Vi=new WeakMap,Hi=new WeakMap,Ui=new WeakMap,Wi=new WeakMap,Gi=new WeakMap,V=new WeakMap,Ki=new WeakMap,qi=new WeakMap,Ji=new WeakMap,Yi=new WeakMap,Xi=new WeakMap,Zi=new WeakMap,H=new WeakMap,Qi=new WeakMap,$i=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ra=new WeakMap,ia=new WeakMap,U=new WeakMap,aa=new WeakMap,W=new WeakMap,oa=new WeakMap,sa=new WeakMap,G=new WeakMap,ca=new WeakMap,K=new WeakSet,la=class{constructor(e){c(this,K),i(this,Si,void 0),i(this,Ci,new Set),i(this,wi,new Map),i(this,Ti,null),i(this,Ei,null),i(this,Di,new Map),i(this,Oi,new Map),i(this,ki,-1),i(this,B,null),i(this,Ai,!1),i(this,ji,e=>-1),i(this,Mi,new Map),i(this,Ni,null),i(this,Pi,null),i(this,Fi,null),i(this,Ii,null),i(this,Li,null),i(this,Ri,void 0),i(this,zi,void 0),i(this,Bi,void 0),i(this,Vi,[]),i(this,Hi,new Int32Array),i(this,Ui,new Int32Array),i(this,Wi,void 0),i(this,Gi,!1),i(this,V,null),i(this,Ki,``),i(this,qi,!1),i(this,Ji,new Set),i(this,Yi,[]),i(this,Xi,void 0),i(this,Zi,null),i(this,H,null),i(this,Qi,null),i(this,$i,null),i(this,ea,null),i(this,ta,null),i(this,na,null),i(this,ra,0),i(this,ia,null),i(this,U,new Set),i(this,aa,0),i(this,W,void 0),i(this,oa,0),i(this,sa,!1),i(this,G,0),i(this,ca,void 0);let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:a,renaming:l,onSearchChange:u,paths:d,preparedInput:f,...p}=e,m=ri({paths:d,preparedInput:f},`constructor`,p.sort);s(Si,this,p),t!=null&&t!==!1&&s(Ti,this,t===!0?{}:t),s(Gi,this,l!=null&&l!==!1),l!=null&&l!==!1&&l!==!0&&(s(Wi,this,l.canRename),s(zi,this,l.onError),s(Ri,this,l.onRename)),s(Bi,this,u),s(Xi,this,n??`hide-non-matches`),s(W,this,o(K,this,Na).call(this,m.paths,m.preparedInput));let h=a?.map(e=>o(K,this,ro).call(this,e)).filter(e=>e!=null)??[],g=h.at(-1)??null;h.length>0&&(s(U,this,new Set(h)),s(ia,this,g),s(aa,this,1)),o(K,this,to).call(this,g,!1),r!=null&&o(K,this,Ya).call(this,r,!1),s(ca,this,o(K,this,co).call(this))}destroy(){a(ca,this)?.call(this),s(ca,this,null),a(wi,this).clear(),a(Ci,this).clear(),a(Mi,this).clear(),s(Ei,this,null),o(K,this,za).call(this)}focusFirstItem(){o(K,this,Wa).call(this).length>0&&o(K,this,ao).call(this,0)}focusLastItem(){a(G,this)<=0||(o(K,this,oo).call(this),o(K,this,ao).call(this,a(G,this)-1))}focusNextItem(){o(K,this,eo).call(this,1)}focusParentItem(){if(a(B,this)==null)return;let e=mi(a(B,this));if(e==null)return;let t=o(K,this,xa).call(this,e);t>=0&&o(K,this,ao).call(this,t)}focusPath(e){let t=a(W,this).getPathInfo(e)?.path??null;if(t==null)return;o(K,this,oo).call(this);let n=o(K,this,xa).call(this,t);n>=0&&o(K,this,ao).call(this,n)}scrollToPath(e,t){let n=a(W,this).getPathInfo(e)?.path??null;if(n==null)return;o(K,this,oo).call(this);let r=o(K,this,Ga).call(this,n);r<0||o(K,this,no).call(this,r)!=null&&(t?.focus!==!1&&o(K,this,ao).call(this,r,!1),s(na,this,{id:s(ra,this,a(ra,this)+1),offset:pa(t?.offset),visibleIndex:r}),o(K,this,Za).call(this))}focusMountedPathFromInput(e){let t=a(W,this).getPathInfo(e)?.path??null;if(t==null)return;let n=o(K,this,xa).call(this,t);n>=0&&o(K,this,ao).call(this,n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=o(K,this,xa).call(this,t);return n>=0?(o(K,this,ao).call(this,n),o(K,this,Wa).call(this)[n]??t):null}focusPreviousItem(){o(K,this,eo).call(this,-1)}getFocusedIndex(){return a(ki,this)}getFocusedItem(){return a(B,this)==null?null:o(K,this,Sa).call(this,a(B,this))}getFocusedPath(){return a(B,this)}getScrollRequest(){return a(na,this)}clearScrollRequest(e){a(na,this)?.id===e&&s(na,this,null)}resolveNearestVisiblePath(e){let t=o(K,this,Wa).call(this);if(a(G,this)===0)return null;if(e==null)return a(B,this)??t[0]??null;let n=a(W,this).getPathInfo(e)?.path??e,r=o(K,this,xa).call(this,n);return r>=0?t[r]??n:o(K,this,ba).call(this,n)??a(B,this)??t[0]??null}getSelectedPaths(){return[...a(U,this)]}getSelectionVersion(){return a(aa,this)}getVisibleCount(){return a(G,this)}getVisibleRows(e,t){if(t<e||a(G,this)===0)return[];let n=Math.max(0,e),r=Math.min(a(G,this)-1,t);if(r<n)return[];let i=r-n+1;if(a(ea,this)==null&&!a(Ai,this)&&r>=a(Vi,this).length&&i<=fa){let e=[];for(let t=n;t<=r;t+=1){let n=a(W,this).getVisibleRowContext(t);if(n==null)break;e.push(o(K,this,wa).call(this,n))}return e}if(!a(Ai,this)&&r>=a(Vi,this).length&&o(K,this,oo).call(this),a(ea,this)!=null){let e=Array.from({length:r-n+1},(e,t)=>o(K,this,Ka).call(this,n+t)),t=new Map,i=e[0]??-1,s=i;for(let n=1;n<=e.length;n+=1){let r=e[n];if(r!=null&&r===s+1){s=r;continue}if(i>=0&&a(W,this).getVisibleSlice(i,s).forEach((e,n)=>{t.set(i+n,e)}),r==null){i=-1,s=-1;continue}i=r,s=r}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,s=o(K,this,Ka).call(this,i),c=t.get(s),l=a(Vi,this)[s];if(c==null||l==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return o(K,this,Ca).call(this,c,i,s,{ancestorPaths:o(K,this,Da).call(this,s),path:l})})}return a(W,this).getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=a(Vi,this)[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return o(K,this,Ca).call(this,e,r,r,{ancestorPaths:o(K,this,Da).call(this,r),path:i})})}getStickyRowCandidates(e,t){if(a(ea,this)!=null)return null;if(a(G,this)===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<a(G,this);r+=1){let i=e+r*t,s=Math.min(a(G,this)-1,Math.floor(i/t)),c=o(K,this,Ta).call(this,s,r)??(s>0?o(K,this,Ta).call(this,s-1,r):void 0);if(c==null)break;n.push({row:o(K,this,wa).call(this,c),subtreeEndIndex:c.subtreeEndIndex})}return n}getItem(e){let t=a(W,this).getPathInfo(e);return t==null?null:o(K,this,Sa).call(this,t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=a(W,this).getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&o(K,this,lo).call(this,t)}selectAllVisiblePaths(){o(K,this,oo).call(this);let e=[...o(K,this,Wa).call(this)];o(K,this,ka).call(this,e,a(B,this)??a(ia,this))}selectOnlyPath(e){let t=o(K,this,ro).call(this,e);t!=null&&o(K,this,ka).call(this,[t],t)}selectOnlyMountedPathFromInput(e){o(K,this,ka).call(this,[e],e)}selectPath(e){let t=o(K,this,ro).call(this,e);t==null||a(U,this).has(t)||o(K,this,ka).call(this,[...a(U,this),t])}deselectPath(e){let t=o(K,this,ro).call(this,e);t!=null&&a(U,this).has(t)&&o(K,this,ka).call(this,[...a(U,this)].filter(e=>e!==t))}toggleFocusedSelection(){a(B,this)!=null&&this.togglePathSelectionFromInput(a(B,this))}togglePathSelection(e){let t=o(K,this,ro).call(this,e);if(t!=null){if(a(U,this).has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){let t=o(K,this,ro).call(this,e);if(t!=null){if(a(U,this).has(t)){o(K,this,ka).call(this,[...a(U,this)].filter(e=>e!==t),t);return}o(K,this,ka).call(this,[...a(U,this),t],t)}}selectPathRange(e,t){let n=o(K,this,ro).call(this,e);if(n==null)return;o(K,this,oo).call(this);let r=a(ia,this),i=r==null?-1:o(K,this,qa).call(this,r),s=o(K,this,qa).call(this,n);if(i===-1||s===-1){let e=t?[...a(U,this),n]:[n];o(K,this,ka).call(this,e,n);return}let[c,l]=i<=s?[i,s]:[s,i],u=o(K,this,Wa).call(this).slice(c,l+1),d=t?[...a(U,this),...u]:u;o(K,this,ka).call(this,d,r)}extendSelectionFromFocused(e){if(a(B,this)==null)return;let t=a(ki,this);if(t===-1)return;let n=Math.min(a(G,this)-1,Math.max(0,t+e));if(n===t)return;!a(Ai,this)&&n>=a(Vi,this).length&&o(K,this,oo).call(this);let r=o(K,this,Wa).call(this),i=r[t]??null,s=r[n]??null;if(i==null||s==null)return;let c=new Set(a(U,this));c.has(i)&&c.has(s)?c.delete(i):c.add(s),o(K,this,ka).call(this,[...c],a(ia,this)??i,!1),o(K,this,ao).call(this,n)}getDragAndDropConfig(){return a(Ti,this)}isDragAndDropEnabled(){return a(Ti,this)!=null}getDragSession(){return a(Ei,this)==null?null:{draggedPaths:[...a(Ei,this).draggedPaths],primaryPath:a(Ei,this).primaryPath,target:a(Ei,this).target==null?null:{...a(Ei,this).target}}}startDrag(e){if(a(Ti,this)==null)return!1;let t=o(K,this,ro).call(this,e);if(t==null||a(H,this)!=null&&a(H,this).length>0)return!1;let n=this.getSelectedPaths(),r=Xr(t,n);return a(Ti,this).canDrag?.(r)!==!1&&(n.includes(t)||o(K,this,ka).call(this,[t],t,!1),o(K,this,io).call(this,t),s(Ei,this,{draggedPaths:r,primaryPath:t,target:null}),o(K,this,Za).call(this),!0)}setDragTarget(e){let t=a(Ei,this);if(t==null)return;let n=e;if(n!=null){let e=Qr(t.draggedPaths,n);($r(t.draggedPaths,n)||a(Ti,this)?.canDrop?.(e)===!1)&&(n=null)}Zr(t.target,n)||(s(Ei,this,{...t,target:n}),o(K,this,Za).call(this))}cancelDrag(){a(Ei,this)!=null&&(s(Ei,this,null),o(K,this,Za).call(this))}completeDrag(){let e=a(Ei,this);if(e==null)return!1;s(Ei,this,null);let t=e.target==null?null:{...e.target};if(t==null)return o(K,this,Za).call(this),!1;let n=Qr(e.draggedPaths,t);if($r(e.draggedPaths,t)||a(Ti,this)?.canDrop?.(n)===!1)return o(K,this,Za).call(this),!1;let r=ti(e.draggedPaths,t);if(r==null)return o(K,this,Za).call(this),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);a(W,this).move(e.from,e.to,{collision:e.collision})}else o(K,this,Ma).call(this,r.operations),a(W,this).batch(r.operations)}catch(e){return o(K,this,Za).call(this),a(Ti,this)?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return a(Ti,this)?.onDropComplete?.(r.result),!0}subscribe(e){return a(Ci,this).add(e),e(),()=>{a(Ci,this).delete(e)}}add(e){a(W,this).add(e)}remove(e,t={}){a(W,this).remove(e,t)}move(e,t,n={}){a(W,this).move(e,t,n)}batch(e){a(W,this).batch(e)}onMutation(e,t){let n=e,r=t,i=a(wi,this).get(n);return i??(i=new Set,a(wi,this).set(n,i)),i.add(r),()=>{let e=a(wi,this).get(n);e?.delete(r),e?.size===0&&a(wi,this).delete(n)}}setSearch(e){o(K,this,Ya).call(this,e,!0)}openSearch(e=``){o(K,this,Ya).call(this,e,!0)}closeSearch(){o(K,this,Ya).call(this,null,!0)}isSearchOpen(){return a(H,this)!==null}getSearchValue(){return a(H,this)??``}getSearchMatchingPaths(){return a(Yi,this)}focusNextSearchMatch(){o(K,this,Ja).call(this,1)}focusPreviousSearchMatch(){o(K,this,Ja).call(this,-1)}startRenaming(e=a(B,this)??``,t={}){if(!a(Gi,this))return!1;let n=a(W,this).getPathInfo(e);if(n==null)return!1;let r=n.path,i=gi(r),c=yi(r);if(a(Wi,this)?.call(this,{isFolder:i,path:c})===!1)return!1;for(let e of pi(r))a(W,this).isExpanded(e)||a(W,this).expand(e);return o(K,this,ka).call(this,[r],r,!1),a(H,this)!=null&&(o(K,this,Ya).call(this,null,!1),a(Bi,this)?.call(this,a(H,this))),o(K,this,io).call(this,r),s(V,this,r),s(Ki,this,vi(r)),s(qi,this,t.removeIfCanceled??!1),o(K,this,Za).call(this),!0}resetPaths(e,t={}){let n=!Array.isArray(e),r=n?void 0:e,i=n?e:t,c=a(W,this).list().length,l=a(G,this),u=ri({paths:r,preparedInput:i.preparedInput},`resetPaths`,a(Si,this).sort),d=o(K,this,Na).call(this,u.paths,u.preparedInput,i.initialExpandedPaths),f=a(B,this),p=a(V,this),m=this.getSelectedPaths(),h=a(ia,this);a(ca,this)?.call(this),s(W,this,d),a(Mi,this).clear(),o(K,this,za).call(this);let g=m.map(e=>d.getPathInfo(e)?.path??null).filter(e=>e!=null),_=!fi(a(U,this),g);s(U,this,new Set(g)),_&&s(aa,this,a(aa,this)+1),s(ia,this,h==null?null:d.getPathInfo(h)?.path??null),s(V,this,p==null?null:d.getPathInfo(p)?.path??null),a(V,this)??(s(Ki,this,``),s(qi,this,!1)),o(K,this,to).call(this,f,f!=null||g.length>0||a(ia,this)!=null),s(ca,this,o(K,this,co).call(this)),o(K,this,Za).call(this),o(K,this,Qa).call(this,{canonicalChanged:!0,operation:`reset`,pathCountAfter:u.paths.length,pathCountBefore:c,projectionChanged:!0,usedPreparedInput:i.preparedInput!=null,visibleCountDelta:a(G,this)-l})}},Object.defineProperty(la.prototype,ua,{configurable:!0,value(){return{cancel:()=>{o(K,this,_a).call(this)},commit:()=>{o(K,this,va).call(this)},getPath:()=>a(V,this),getValue:()=>a(Ki,this),isActive:()=>a(V,this)!=null,setValue:e=>{o(K,this,ya).call(this,e)}}},writable:!0}),la);function _a(){if(a(V,this)==null)return;let e=a(V,this),t=a(qi,this);if(s(V,this,null),s(Ki,this,``),s(qi,this,!1),t){this.remove(e,gi(e)?{recursive:!0}:void 0);return}o(K,this,io).call(this,e),o(K,this,Za).call(this)}function va(){let e=a(V,this);if(e==null)return;if(a(qi,this)&&a(Ki,this).trim().length===0){s(V,this,null),s(Ki,this,``),s(qi,this,!1),this.remove(e,gi(e)?{recursive:!0}:void 0);return}let t=gi(e),n=Kr({files:a(W,this).list(),isFolder:t,nextBasename:a(Ki,this),path:yi(e)});if(s(V,this,null),s(Ki,this,``),s(qi,this,!1),`error`in n){o(K,this,io).call(this,e),a(zi,this)?.call(this,n.error),o(K,this,Za).call(this);return}if(n.sourcePath===n.destinationPath){o(K,this,io).call(this,e),o(K,this,Za).call(this);return}a(Ri,this)?.call(this,{destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(bi(n.sourcePath,t),bi(n.destinationPath,t))}function ya(e){a(V,this)!=null&&a(Ki,this)!==e&&(s(Ki,this,e),o(K,this,Za).call(this))}function ba(e){o(K,this,oo).call(this);let t=mi(e),n=hi(e,t),r=null,i=null;for(let e of o(K,this,Wa).call(this)){if(mi(e)!==t)continue;let a=hi(e,t);if(a<n){r=e;continue}if(a>n){i=e;break}}return r??i}function xa(e){let t=o(K,this,qa).call(this,e);if(t!==-1)return t;let n=pi(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=o(K,this,qa).call(this,t);if(r!==-1)return r}return o(K,this,Wa).call(this).length>0?0:-1}function Sa(e,t){let n=a(Mi,this).get(e);if(n!=null)return n;let r=t??a(W,this).getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?o(K,this,Aa).call(this,r.path):o(K,this,ja).call(this,r.path);return a(Mi,this).set(r.path,i),i}function Ca(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===a(B,this),isSelected:a(U,this).has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??a(Hi,this)[n]??0,setSize:r.setSize??a(Ui,this)[n]??0}}function wa(e){return o(K,this,Ca).call(this,e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}function Ta(e,t){let n=a(W,this).getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}function Ea(e){let t=a(Di,this).get(e);if(t!=null)return t;let n=a(ji,this).call(this,e),r=n<0?[]:[...o(K,this,Ea).call(this,n),n];return a(Di,this).set(e,r),r}function Da(e){let t=a(Oi,this).get(e);if(t!=null)return t;let n=o(K,this,Ea).call(this,e).map(e=>a(Vi,this)[e]??``).filter(e=>e!==``);return a(Oi,this).set(e,n),n}function Oa(e){a(W,this).collapse(e)}function ka(e,t=a(ia,this),n=!0){let r=[...new Set(e)],i=!fi(a(U,this),r),c=a(ia,this)!==t;(i||c)&&(s(U,this,new Set(r)),s(ia,this,t),i&&s(aa,this,a(aa,this)+1),n&&o(K,this,Za).call(this))}function Aa(e){return{collapse:()=>{o(K,this,Oa).call(this,e)},deselect:()=>{this.deselectPath(e)},expand:()=>{o(K,this,$a).call(this,e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>a(W,this).isExpanded(e),isFocused:()=>a(B,this)===e,isSelected:()=>a(U,this).has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{o(K,this,lo).call(this,e)}}}function ja(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>a(B,this)===e,isSelected:()=>a(U,this).has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}function Ma(e){let t=a(W,this).list();o(K,this,Na).call(this,t).batch(e)}function Na(e,t,n){return new Vr({...a(Si,this),paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}function Pa(){return a(Ii,this)??s(Ii,this,a(W,this).list()),a(Ii,this)}function Fa(){if(a(Fi,this)!=null)return a(Fi,this);let e=new Set;for(let t of o(K,this,Pa).call(this)){e.add(t);for(let n of pi(t))e.add(n)}return s(Fi,this,[...e].sort()),a(Fi,this)}function Ia(){return a(Li,this)??s(Li,this,o(K,this,Pa).call(this).map(_i)),a(Li,this)}function La(){return a(Ni,this)??s(Ni,this,o(K,this,Fa).call(this).filter(e=>e.endsWith(`/`))),a(Ni,this)}function Ra(){return a(Pi,this)??s(Pi,this,o(K,this,La).call(this).map(_i)),a(Pi,this)}function za(){s(Ni,this,null),s(Pi,this,null),s(Fi,this,null),s(Ii,this,null),s(Li,this,null)}function Ba(){return o(K,this,La).call(this).filter(e=>a(W,this).isExpanded(e))}function Va(e){let t=new Set(a(Zi,this)??[]);if(e)for(let e of a(U,this))for(let n of pi(e))t.add(n);o(K,this,Ha).call(this,t)}function Ha(e){s(sa,this,!0);try{for(let t of o(K,this,La).call(this)){let n=e.has(t),r=a(W,this).isExpanded(t);n&&!r?a(W,this).expand(t):!n&&r&&a(W,this).collapse(t)}}finally{s(sa,this,!1)}}function Ua(){if(a(H,this)==null||a(H,this).length===0){s(Yi,this,[]),s(ea,this,null),s(ta,this,null),s($i,this,null),s(G,this,a(oa,this));return}let e=a(Vi,this);if(s(Yi,this,e.filter(e=>a(Ji,this).has(e))),a(Xi,this)!==`hide-non-matches`||a(Ji,this).size===0){s(ea,this,null),s(ta,this,null),s($i,this,null),s(G,this,a(oa,this));return}let t=[],n=[],r=new Map;for(let[i,o]of e.entries())a(Qi,this)?.has(o)===!0&&(r.set(o,n.length),t.push(i),n.push(o));s(ea,this,t),s(ta,this,n),s($i,this,r),s(G,this,n.length)}function Wa(){return a(ta,this)??a(Vi,this)}function Ga(e){return a(ta,this)==null?a(W,this).getVisibleIndex(e)??-1:a($i,this)?.get(e)??-1}function Ka(e){return a(ea,this)?.[e]??e}function qa(e){return a($i,this)?.get(e)??a(W,this).getVisibleIndex(e)??-1}function Ja(e){let t=a(Yi,this);if(t.length===0)return;let n=a(B,this),r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}function Ya(e,t){let n=e==null?null:xi(e),r=a(H,this);if(r!==n){if(r==null&&n!=null&&s(Zi,this,o(K,this,Ba).call(this)),s(H,this,n),n==null)o(K,this,Va).call(this,!0),s(Zi,this,null),a(Ji,this).clear(),s(Qi,this,null),o(K,this,to).call(this,a(B,this),!0);else if(n.length===0)o(K,this,Va).call(this,!1),a(Ji,this).clear(),s(Qi,this,null),o(K,this,to).call(this,a(B,this),!0);else{let e=o(K,this,Xa).call(this);o(K,this,to).call(this,e,!0)}t&&(a(Bi,this)?.call(this,a(H,this)),o(K,this,Za).call(this))}}function Xa(){if(a(H,this)==null||a(H,this).length===0)return a(Ji,this).clear(),a(B,this);let e=a(H,this),t=o(K,this,Pa).call(this),n=o(K,this,Ia).call(this),r=[],i=new Set,c=null;for(let a=0;a<t.length;a+=1){if(!n[a].includes(e))continue;let o=t[a];r.push(o),i.add(o),c??=o}let l=o(K,this,La).call(this),u=o(K,this,Ra).call(this);for(let t=0;t<l.length;t+=1){if(!u[t].includes(e))continue;let n=l[t];i.has(n)||(r.push(n),i.add(n),c??=n)}s(Ji,this,i);let d=a(Xi,this)===`hide-non-matches`&&r.length>0?new Set:null;s(Qi,this,d);let f=a(Xi,this)===`expand-matches`?new Set(a(Zi,this)??[]):new Set;for(let e of r){d?.add(e),e.endsWith(`/`)&&f.add(e);for(let t of pi(e))f.add(t),d?.add(t)}return o(K,this,Ha).call(this,f),c??a(B,this)}function Za(){for(let e of a(Ci,this))e()}function Qa(e){a(wi,this).get(e.operation)?.forEach(t=>{t(e)}),a(wi,this).get(`*`)?.forEach(t=>{t(e)})}function $a(e){for(let t of pi(e))a(W,this).isExpanded(t)||a(W,this).expand(t);a(W,this).isExpanded(e)||a(W,this).expand(e)}function eo(e){let t=a(G,this);if(t===0)return;let n=a(ki,this)===-1?0:a(ki,this),r=Math.min(t-1,Math.max(0,n+e));(r!==n||a(ki,this)===-1)&&(!a(Ai,this)&&a(ea,this)==null&&r>=a(Vi,this).length&&o(K,this,oo).call(this),o(K,this,ao).call(this,r))}function to(e,t=!0){let n=a(W,this).getVisibleCount();s(oa,this,n);let r=ha(a(W,this).getVisibleTreeProjectionData(t?void 0:Math.min(n,da)),e,t?e=>a(W,this).getVisibleIndex(e):void 0);a(Di,this).clear(),a(Oi,this).clear(),s(Ai,this,r.paths.length>=n),s(ji,this,r.getParentIndex),s(Vi,this,r.paths),s(Hi,this,r.posInSetByIndex),s(Ui,this,r.setSizeByIndex),o(K,this,Ua).call(this),s(ki,this,e==null?o(K,this,Wa).call(this).length>0?0:-1:o(K,this,xa).call(this,e)),s(B,this,a(ki,this)<0?null:o(K,this,no).call(this,a(ki,this)))}function no(e){return o(K,this,Wa).call(this)[e]??(a(ea,this)==null?a(W,this).getVisibleRowContext(e)?.row.path??null:null)}function ro(e){return a(W,this).getPathInfo(e)?.path??null}function io(e){if(e==null)return;let t=o(K,this,xa).call(this,e);t>=0&&o(K,this,ao).call(this,t,!1)}function ao(e,t=!0){let n=o(K,this,no).call(this,e);n!=null&&(a(ki,this)!==e||a(B,this)!==n)&&(s(ki,this,e),s(B,this,n),t&&o(K,this,Za).call(this))}function oo(){a(Ai,this)||o(K,this,to).call(this,a(B,this),!0)}function so(e){let t=si(a(V,this),e);t==null&&a(V,this)!=null&&s(Ki,this,``),s(V,this,t);let n=si(a(B,this),e,!0),r=[...a(U,this)].map(t=>si(t,e)).filter(e=>e!=null).map(e=>a(W,this).getPathInfo(e)?.path??null).filter(e=>e!=null),i=si(a(ia,this),e),o=i==null?null:a(W,this).getPathInfo(i)?.path??null,c=[...new Set(r)];return fi(a(U,this),c)||(s(U,this,new Set(c)),s(aa,this,a(aa,this)+1)),s(ia,this,o),n}function co(){return a(W,this).on(`*`,e=>{if(a(sa,this))return;e.canonicalChanged&&(a(Mi,this).clear(),o(K,this,za).call(this)),a(Ei,this)!=null&&ii(e)&&s(Ei,this,null);let t=ii(e)?o(K,this,so).call(this,e):a(B,this),n=a(H,this)!=null&&a(H,this).length>0?o(K,this,Xa).call(this):a(H,this)===``?a(B,this):t,r=a(H,this)!=null||e.operation!==`expand`&&e.operation!==`collapse`;o(K,this,to).call(this,n,r),o(K,this,Za).call(this);let i=di(e);i!=null&&o(K,this,Qa).call(this,i)})}function lo(e){if(a(W,this).isExpanded(e)){o(K,this,Oa).call(this,e);return}o(K,this,$a).call(this,e)}var uo=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t};function fo(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1){if(e[t]!==`/`&&t!==e.length){r===-1&&(r=t);continue}r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1)}return n===``?null:{isDirectory:t,path:n}}function po(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=[],r=0;for(;;){let e=t.indexOf(`/`,r);if(e===-1)break;n.push(t.slice(0,e+1)),r=e+1}return n}function mo(e,t){return t?`${e}/`:e}function ho(e,t=null){let n=uo(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set,o=new Map;for(let t of e??[]){let e=_o(t);e!=null&&bo({canonicalPath:e.canonicalPath,changeCountByDirectoryPath:o,directoriesWithChanges:i,ignoredDirectoryPaths:a,isDirectory:e.isDirectory,status:t.status,statusByPath:r})}return r.size===0?null:{changeCountByDirectoryPath:o,directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}function go(e,t){let n=t?.remove??[],r=t?.set??[];if(n.length===0&&r.length===0)return e;let i=new Map(e?.statusByPath),a=new Set(e?.directoriesWithChanges),o=new Set(e?.ignoredDirectoryPaths),s=new Map(e?.changeCountByDirectoryPath),c=!1;for(let e of n){let t=vo(e);t!=null&&(c=yo({canonicalPath:t.canonicalPath,changeCountByDirectoryPath:s,directoriesWithChanges:a,ignoredDirectoryPaths:o,statusByPath:i})||c)}for(let e of r){let t=_o(e);t!=null&&(c=bo({canonicalPath:t.canonicalPath,changeCountByDirectoryPath:s,directoriesWithChanges:a,ignoredDirectoryPaths:o,isDirectory:t.isDirectory,status:e.status,statusByPath:i})||c)}return c?i.size===0?null:{changeCountByDirectoryPath:s,directoriesWithChanges:a,ignoredDirectoryPaths:o,signature:Co(i),statusByPath:i}:e}function _o(e){return vo(e.path)}function vo(e){let t=fo(e);if(t!=null)return{canonicalPath:mo(t.path,t.isDirectory),isDirectory:t.isDirectory}}function yo({canonicalPath:e,changeCountByDirectoryPath:t,directoriesWithChanges:n,ignoredDirectoryPaths:r,statusByPath:i}){let a=i.get(e);return a!=null&&(i.delete(e),a===`ignored`&&e.endsWith(`/`)&&r.delete(e),So(t,n,e),!0)}function bo({canonicalPath:e,changeCountByDirectoryPath:t,directoriesWithChanges:n,ignoredDirectoryPaths:r,isDirectory:i,status:a,statusByPath:o}){let s=o.get(e);return s!==a&&(s??xo(t,n,e),o.set(e,a),a===`ignored`&&i?r.add(e):i&&r.delete(e),!0)}function xo(e,t,n){for(let r of po(n))e.set(r,(e.get(r)??0)+1),t.add(r)}function So(e,t,n){for(let r of po(n)){let n=(e.get(r)??0)-1;n>0?e.set(r,n):(e.delete(r),t.delete(r))}}function Co(e){let t=`${e.size}`;for(let[n,r]of e)t+=`\0${n}\0${r}`;return t}var q,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No={},Po=[],Fo=Array.isArray,Io=Po.slice,Lo=Object.assign;function Ro(e){e&&e.parentNode&&e.remove()}function zo(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?Io.call(arguments,2):n),Bo(e,o,r,i,null)}function Bo(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++wo,__i:-1,__u:0};return i==null&&q.vnode!=null&&q.vnode(a),a}function Vo(e){return e.children}function Ho(e,t){this.props=e,this.context=t,this.__g=0}function Uo(e,t){if(t==null)return e.__?Uo(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Uo(e):null}function Wo(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return Wo(e)}}function Go(e){(8&e.__g||!(e.__g|=8)||!To.push(e)||Do++)&&Eo==q.debounceRendering||((Eo=q.debounceRendering)||queueMicrotask)(Ko)}function Ko(){for(var e,t,n,r,i,a,o,s,c=1;To.length;)To.length>c&&To.sort(Oo),e=To.shift(),c=To.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=Lo({},r)).__v=r.__v+1,q.vnode&&q.vnode(n),es(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??Uo(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,ns(a,n,o),n.__e!=i&&Wo(n)));Do=0}function qo(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||Po,b=t.length;for(c=Jo(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?No:y[m.__i]||No,m.__i=f,_=es(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&as(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=Yo(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function Jo(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?Bo(null,o,null,null,null):Fo(o)?Bo(Vo,{children:o},null,null,null):o.constructor==null&&o.__b>0?Bo(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=Xo(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Uo(s)),os(s,s));return r}function Yo(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Yo(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Uo(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Xo(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function Zo(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function Qo(e,t,n,r,i){var a;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||Zo(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||Zo(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(ko,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=Ao,e.addEventListener(t,a?Mo:jo,a)):e.removeEventListener(t,a?Mo:jo,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function $o(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=Ao++;else if(t.u<n.l)return;return n(q.event?q.event(t):t)}}}function es(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,ee,te,w,T,ne,re,ie,ae,oe=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=q.__b)&&d(t);n:if(typeof oe==`function`)try{if(v=t.props,y=`prototype`in oe&&oe.prototype.render,b=(d=oe.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new oe(v,x):(t.__c=f=new Ho(v,x),f.constructor=oe,f.render=ss),b&&b.sub(f),f.props=v,f.state||(f.state={}),f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&oe.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Lo({},f.__s)),Lo(f.__s,oe.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&oe.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&oe.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=q.__r,ee=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),te=0;te<f._sb.length;te++)f.__h.push(f._sb[te]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=Lo({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),w=d,d!=null&&d.type===Vo&&d.key==null&&(w=rs(d.props.children)),s=qo(e,Fo(w)?w:[w],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null){if(e.then){for(T=0,ne=!1,t.__u|=c?160:128,t.__c.__z=[],re=0;re<a.length;re++)(ie=a[re])==null||ne||(ie.nodeType==8&&ie.data==`$s`?(T>0&&t.__c.__z.push(ie),T++,a[re]=null):ie.nodeType==8&&ie.data==`/$s`?(--T>0&&t.__c.__z.push(ie),ne=T===0,s=a[re],a[re]=null):T>0&&(t.__c.__z.push(ie),a[re]=null));if(!ne){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(ae=a.length;ae--;)Ro(a[ae]);ts(t)}}else t.__e=n.__e,t.__k=n.__k,e.then||ts(t);q.__e(e,t,n)}else s=t.__e=is(n.__e,t,n,r,i,a,o,c,l,u);return(d=q.diffed)&&d(t),128&t.__u?void 0:s}function ts(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(ts)}function ns(e,t,n){for(var r=0;r<n.length;r++)as(n[r],n[++r],n[++r]);q.__c&&q.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){q.__e(e,t.__v)}})}function rs(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:Fo(e)?e.map(rs):Lo({},e)}function is(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(q.__m&&q.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=Io.call(e.childNodes),v=n.props||No,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;Qo(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||Qo(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),qo(b==`template`?e.content:e,Fo(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Uo(n,0),s,c,l),a!=null)for(u=a.length;u--;)Ro(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||Qo(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&Qo(e,u,g,v[u],i))}return e}function as(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){q.__e(e,n)}}function os(e,t,n){var r,i;if(q.unmount&&q.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||as(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){q.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&os(r[i],t,n||typeof e.type!=`function`);n||Ro(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function ss(e,t,n){return this.constructor(e,n)}function cs(e,t){var n,r,i,a;t==document&&(t=document.documentElement),q.__&&q.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=zo(Vo,null,[e]),i=[],a=[],es(t,e,r||No,No,t.namespaceURI,r?null:t.firstChild?Io.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),ns(i,e,a)}function ls(e,t){e.__u|=32,cs(e,t)}q={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw Do=0,e}},wo=0,Ho.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Lo({},this.state);typeof e==`function`&&(e=e(Lo({},n),this.props)),e&&Lo(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Go(this))},Ho.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Go(this))},Ho.prototype.render=Vo,To=[],Do=0,Oo=function(e,t){return e.__v.__b-t.__v.__b},ko=/(PointerCapture)$|Capture$/i,Ao=0,jo=$o(!1),Mo=$o(!0);var us=0;Array.isArray;function J(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--us,__i:-1,__u:0,__source:i,__self:a};return q.vnode&&q.vnode(l),l}var ds=16,fs=16,ps={};function ms({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=ps[e]??{width:ds,height:fs},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`;return J(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`},viewBox:m,width:f,height:p,children:J(`use`,{href:c})})}var hs=e=>e!==void 0&&/\s/.test(e),gs=(e,t)=>{let n=t=>hs(e[t-1])||hs(e[t]);if(!n(t))return t;for(let r=1;r<e.length;r++){let i=t-r;if(i>0&&!n(i))return i;let a=t+r;if(a<e.length&&!n(a))return a}return t},_s=e=>gs(e,Math.ceil(e.length/2)),vs=e=>{if(e.length<2)return[e,``];let t=_s(e);return[e.slice(0,t),e.slice(t)]},ys=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:_s(e);return[e.slice(0,r),e.slice(r)]},bs=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},xs=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},Ss=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},Cs=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]};function ws({children:e,marker:t,variant:n=`default`}){"use no memo";return J(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:J(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):n===`fade`?J(`span`,{"data-truncate-fade":!0}):t})})}function Ts(e){"use no memo";let{mode:t,children:n}=e;return J(`div`,{children:[J(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?J(`span`,{children:n}):n}),J(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?J(`span`,{children:n}):n})]})}function Es({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=J(Ts,{mode:t,children:e},`content`),o=J(ws,{marker:n,mode:t,variant:r},`marker`),s=J(`div`,{"data-truncate-fill":!0},`fill`);return J(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:J(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function Ds({children:e,...t}){"use no memo";return J(Es,{mode:`truncate`,...t,children:e})}function Os({children:e,...t}){"use no memo";return J(Es,{mode:`fruncate`,...t,children:e})}function ks({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=J(Ds,{...s,children:t[0]}),l=J(Os,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return J(`div`,{className:a,style:o});if(e.length<i)return J(n===`end`?Os:Ds,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=vs:r===`extension`?t=ys:r===`leaf-path`&&(t=bs);else if(typeof r==`number`)t=xs,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=Ss:e===`first`&&(t=Cs)}else typeof r==`function`&&(t=r);t??=vs;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=J(Ds,{...s,..._,children:f}),l=J(Os,{...s,...v,children:p})}return J(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[J(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),J(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var As={endIndex:-1,startIndex:-1};function js(e,t,n){return Math.min(Math.max(e,t),n)}function Ms(e,t){return e<0||t<e?As:{endIndex:t,startIndex:e}}function Ns(e){return e.startIndex<0||e.endIndex<e.startIndex}function Ps(e,t){return Ns(e)?0:(e.endIndex-e.startIndex+1)*t}function Fs(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function Is(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function Ls(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);if(i==null){t.set(r,[n]);return}i.push(n)}),t}function Rs(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;if(o<=t){i=a,n=a+1;continue}r=a-1}return i}function zs(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function Bs(e,t,n){if(e.length===0||t<=0)return[];let r=zs(e),i=Ls(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=Rs(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function Vs(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=js(t.scrollTop,0,o),c=t.stickyRows??Bs(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=Fs(s,n,t.itemHeight),m=Fs(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?As:Ms(m,Is(u+d,n,t.itemHeight)),y=g+1,b=Ns(v)?As:Ms(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=Ps(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:Ns(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var Hs={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},Us={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},Ws=`Contains git status items`;function Gs(e){return e.current?!0:(e.current=!0,!1)}function Ks(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function qs(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return Ks({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function Js(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}function Ys(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function Xs(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function Zs(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function Qs(e,t){return e!=null&&e>0?e:t}function $s(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function ec(e,t,n,r,i=0){let a=Ks({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a!=null&&(e.scrollTop=a,!0)}function tc(e,t,n,r,i,a,o=0){let s=qs({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s!=null&&(e.scrollTop=s,!0)}function nc(e,t,n,r,i,a){let o=Js({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o!=null&&(e.scrollTop=o,!0)}function rc(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function ic(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}function ac({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return J(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}function oc(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}function sc(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}var cc,Y,lc,uc,dc=Object.is,fc=0,pc=[],X=q,mc=X.__b,hc=X.__r,gc=X.diffed,_c=X.__c,vc=X.unmount,yc=X.__;function bc(e,t){X.__h&&X.__h(Y,e,fc||t),fc=0;var n=Y.__H||(Y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function xc(e){return fc=1,Sc(Nc,e)}function Sc(e,t,n){var r=bc(cc++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Nc(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);dc(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Y,!Y.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,dc(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};Y.__f=!0;var a=Y.shouldComponentUpdate,o=Y.componentWillUpdate;Y.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Y.shouldComponentUpdate=i}return r.__N||r.__}function Cc(e,t){var n=bc(cc++,3);!X.__s&&Mc(n.__H,t)&&(n.__=e,n.u=t,Y.__H.__h.push(n))}function wc(e,t){var n=bc(cc++,4);!X.__s&&Mc(n.__H,t)&&(n.__=e,n.u=t,Y.__h.push(n))}function Z(e){return fc=5,Tc(function(){return{current:e}},[])}function Tc(e,t){var n=bc(cc++,7);return Mc(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ec(e,t){return fc=8,Tc(function(){return e},t)}function Dc(){for(var e;e=pc.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ac),e.__H.__h.forEach(jc),e.__H.__h=[]}catch(t){e.__H.__h=[],X.__e(t,e.__v)}}X.__b=function(e){Y=null,mc&&mc(e)},X.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),yc&&yc(e,t)},X.__r=function(e){hc&&hc(e),cc=0;var t=(Y=e.__c).__H;t&&(lc===Y?(t.__h=[],Y.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(Ac),t.__h.forEach(jc),t.__h=[],cc=0)),lc=Y},X.diffed=function(e){gc&&gc(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(pc.push(t)!==1&&uc===X.requestAnimationFrame||((uc=X.requestAnimationFrame)||kc)(Dc)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),lc=Y=null},X.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Ac),e.__h=e.__h.filter(function(e){return!e.__||jc(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],X.__e(n,e.__v)}}),_c&&_c(e,t)},X.unmount=function(e){vc&&vc(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Ac(e)}catch(e){t=e}}),n.__H=void 0,t&&X.__e(t,n.__v))};var Oc=typeof requestAnimationFrame==`function`;function kc(e){var t,n=function(){clearTimeout(r),Oc&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Oc&&(t=requestAnimationFrame(n))}function Ac(e){var t=Y,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Y=t}function jc(e){var t=Y;e.__c=e.__(),Y=t}function Mc(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!dc(t,e[n])})}function Nc(e,t){return typeof t==`function`?t(e):t}function Pc(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:J(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return J(Vo,{children:[J(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:J(Ds,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function Fc(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function Ic(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function Lc(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function Rc({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=Vs(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:Lc(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?Lc(u,1,t,o):i&&r<=0&&c.length>0?Bs(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}var zc=400,Bc=40,Vc=18;function Hc(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?Uc(e,t,n):a instanceof HTMLElement?a:null}function Uc(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function Wc(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function Gc(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function Kc(){return navigator.vendor!==`Apple Computer, Inc.`}function qc(e,t){let n=e-t.top;if(n<Bc)return-Math.ceil((Bc-Math.max(0,n))/Bc*Vc);let r=t.bottom-e;return r<Bc?Math.ceil((Bc-Math.max(0,r))/Bc*Vc):0}function Jc(e,t){if(e!=null){let t=Hs[e];return t==null?null:{text:t,title:Us[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:Ws}:null}function Yc(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function Xc(e){return e!=null&&`toggle`in e}function Zc(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function Qc(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function $c(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function el(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function tl(e,t){return t&&el(e)||(e.ctrlKey||e.metaKey)&&Zc(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}var nl=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`]);function rl(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function il(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function al(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function ol(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function sl(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function cl(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function ll(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function ul(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function dl(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=ul(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function fl(e,t){return{kind:e.kind,name:Ic(e),path:t}}function pl(e){return e==null?void 0:`${e}__tree`}function ml(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function hl(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function gl(e,t){if(e==null)return null;if(`text`in e)return e.parts==null?J(`span`,{title:e.title,children:e.text}):J(`span`,{title:e.title,children:e.parts.map((e,t)=>J(`span`,{style:{color:e.color},children:e.text},t))});let n=typeof e.icon==`string`?hl(e.icon)?t(e.icon):{name:e.icon}:hl(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return J(`span`,{title:e.title,children:J(ms,{...n})})}function _l(e){e!=null&&Ys(e.querySelector([`button:not([disabled])`,`[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `))??e)}function vl(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=Fc(e);return J(Vo,{children:[e.depth>0?J(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>J(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,J(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?J(ms,{...t(`file-tree-icon-chevron`)}):J(ms,{...t(`file-tree-icon-file`,u)})}),J(`div`,{"data-item-section":`content`,children:e.isFlattened?Pc(e,c,a):c??J(ks,{minimumLength:5,split:`extension`,children:e.name})}),i?J(`div`,{"data-item-section":`decoration`,children:r==null?null:gl(r,t)}):null,s?J(`div`,{"data-item-section":`git`,children:gl(o,t)}):null,n?J(`div`,{"data-item-section":`action`,children:l?J(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:J(ms,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function yl(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:ee,contextMenuButtonVisibility:te,contextMenuRightClickEnabled:w,registerRenameInput:T,registerButton:ne,resolveIcon:re,renderDecorationForRow:ie,openContextMenuForRow:ae,onRowClick:oe,onKeyDown:se}=e,E=Fc(t),{isParked:ce=!1,mode:le=`flow`,style:ue}=r,de=le===`sticky`,fe=_?.get(E)??null??Yc(t.ancestorPaths,v,y),pe=t.kind===`directory`&&(b?.has(E)??!1),me=ie(t,E),he=Jc(fe,pe),ge=S&&ee,_e=me!=null||x||ge,ve=ge&&te===`always`,ye=a.getPath()===E,be=ye?a.getValue():``,xe=de||!ye?null:J(ac,{ref:T,ariaLabel:`Rename ${Ic(t)}`,isFlattened:t.isFlattened,value:be,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),Se=vl(t,re,{actionLaneEnabled:ge,customDecoration:me,decorationLaneEnabled:_e,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:he,gitLaneActive:x,renameInput:xe,showDecorativeActionAffordance:ve}),Ce={...oc({ariaLabel:Ic(t),domId:t.isFocused?ml(h,E,ce):void 0,extraStyle:ue,features:{actionLaneEnabled:ge,contextMenuButtonVisibility:ge?te:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:ce,itemHeight:g,mode:le,row:t,state:{containsGitChange:pe,effectiveGitStatus:fe,isContextHovered:s===E,isDragTarget:l?.kind===`directory`&&l.directoryPath===E,isDragging:c?.has(E)===!0,isFocusRinged:t.isFocused&&o===E},targetPath:E}),key:n,onContextMenu:S||u?e=>{if(d()){e.preventDefault();return}S&&(e.preventDefault(),w&&(i.focusMountedPathFromInput(E),ae(t,E,{anchorRect:al(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:de?void 0:()=>{i.focusMountedPathFromInput(E)},onKeyDown:de?void 0:se,ref:e=>{ne(E,e)}};return!de&&ye?J(`div`,{...Ce,children:Se}):J(`button`,{...Ce,type:`button`,draggable:u&&!ce,onDragEnd:u&&!ce?p:void 0,onDragStart:u&&!ce?e=>{f(e,t,E)}:void 0,onMouseDown:e=>{if(de){e.preventDefault();return}i.isSearchOpen()&&e.preventDefault()},onTouchStart:u&&!ce?e=>{m(e,t,E)}:void 0,onClick:e=>{oe(e,t,E,le)},children:Se})}function bl(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(Fc(e))).map((n,r)=>yl(e,n,t.start+r))}function xl({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=oe,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:f=`close`,searchEnabled:p=!1,searchFakeFocus:m=!1,slotHost:h,stickyFolders:g=!1,initialViewportHeight:_=420}){"use no memo";let v=Z(null),S=Z(null),C=Z(!1),ee=Z(null),te=Z(null),w=Z(null),T=Z(null),ne=Z(null),re=Z(new Map),ie=Z(new Map),ae=Z(()=>{}),se=Z(null),E=Z(0),ce=Z(!1),le=Z(null);le.current!==t&&(ce.current=!1,le.current=t);let ue=Z(!1),de=Z(null),fe=Z(null),pe=Z(!1),me=Z(null),he=Z(null),ge=Z(null),_e=Z(null),ve=Z(null),ye=Z(null),be=Z(null),xe=Z(null),Se=Z(!1),Ce=Z(null),we=Z(null),Te=Z(null),Ee=Z(null),De=Tc(()=>new Map,[]),[,Oe]=xc(0),ke=Z(!1),[Ae,je]=xc(null),[Me,Ne]=xc(null),[Pe,Fe]=xc(null),[Ie,Le]=xc(null),[Re,D]=xc(0),[O,k]=xc(null),ze=Z(O);ze.current=O;let Be=Z(null),Ve=Z(null),He=Z(null),Ue=Z(null),A=Z(null),We=Z(!1),Ge=()=>{Ve.current=null,He.current=null,Ue.current=null},Ke=(e,t)=>{Ve.current=e,He.current=null,Ue.current=t==null?null:{path:e,scrollTop:t}},qe=(e,t)=>{Ve.current=null,He.current={path:e,viewportOffset:t},Ue.current=null},Je=Z(f===`retain`&&t.isSearchOpen()),[Ye,Xe]=xc(m);Cc(()=>{m||Xe(!1)},[m]);let Ze=Z(!1),Qe=Ec(()=>{Ze.current=!0,Xe(e=>e&&!1)},[]),[$e,et]=xc(()=>Rc({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:g,viewportHeight:_})),[tt,nt]=xc(!1);Cc(()=>{nt(!0)},[]);let rt=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,it=e?.contextMenu?.triggerMode??(rt?`right-click`:`both`),at=it===`both`||it===`button`,ot=e?.contextMenu?.buttonVisibility??`when-needed`,st=it===`both`||it===`right-click`;wc(()=>{let e=w.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;A.current=t,Ne(t),Le(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(We.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let ct=Ec((e,t)=>{sl(re.current,e,t)},[]),lt=Ec((e,t)=>{sl(ie.current,e,t)},[]),ut=Ec(e=>{te.current=e},[]),dt=Ec(e=>cl(e,ie.current,re.current),[]),ft=n!=null||r!=null||i!=null,{resolveIcon:pt}=Tc(()=>d(a),[a]),mt=t[ua](),ht=mt.getPath(),gt=ht!=null,_t=t.isSearchOpen(),vt=t.getSearchValue(),j=t.getFocusedPath(),M=t.getFocusedIndex(),yt=t.getScrollRequest(),bt=t.isDragAndDropEnabled(),xt=t.getDragSession(),St=Tc(()=>xt==null?null:new Set(xt.draggedPaths),[xt]),Ct=xt?.target??null,wt=xt?.primaryPath??null,Tt=pl(o),{overlayHeight:Et,overlayRows:Dt,snapshot:N,visibleRows:P}=$e,F=N.physical.viewportHeight,Ot=Tc(()=>({end:N.window.endIndex,start:N.window.startIndex}),[N.window.endIndex,N.window.startIndex]),kt=Dt,At=N.sticky.rows,jt=N.physical.totalHeight,Mt=N.sticky.height,Nt=Tc(()=>new Set(At.map(e=>Fc(e.row))),[At]),Pt=M>=0&&M>=Ot.start&&M<=Ot.end,Ft=Ec((e,t)=>u?.({item:fl(e,t),row:e})??null,[u]),It=Ec(e=>Ys(e==null?null:re.current.get(e)??null)?!0:Ys(w.current),[]),Lt=Ec(e=>{It(t.focusNearestPath(e))},[t,It]),Rt=Z(Lt);Rt.current=Lt;let zt=Z(!0),Bt=Z(()=>{}),Vt=Ec((t=!0)=>{let n=ze.current;n!=null&&(zt.current=zt.current&&t,k(null),e?.contextMenu?.onClose?.(),zt.current&&Lt(n.path))},[e?.contextMenu,Lt]);Bt.current=Vt;let Ht=Ec(e=>{let t=e==null?null:ol(w.current,e);Fe(e=>e===t?e:t)},[]),Ut=Ec((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=dt(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=T.current;Ke(n,e?.scrollTop??null),ue.current=!0,je(e=>e===n?e:n)}i.focus(),Ht(a),zt.current=!0,k({anchorRect:r?.anchorRect??null,item:fl(e,n),path:n,source:r?.source??`keyboard`})},[t,dt,Ht]),Wt=Ec(e=>{if(l){if(t.isSearchOpen()){let e=T.current,t=Zs(e,F);me.current=M<0||e==null?null:Math.max(0,Math.min(M*s-e.scrollTop,Math.max(0,t-s))),pe.current=!0}t.startRenaming(e)!==!1&&(Le(`focus`),Oe(e=>e+1))}},[t,M,s,l,F]),Gt=Ec((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=T.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=Zs(i,F),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:Rc({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:g,viewportHeight:l}).snapshot.sticky.height;return ue.current=!0,nc(i,a,s,l,u,d),ae.current(),Be.current=n?e:null,!0},[t,s,c,F,g]),Kt=()=>C.current===!0||Ee.current!=null||Se.current===!0,qt=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),Jt=e=>{if(e!=null){if(typeof window.cancelAnimationFrame==`function`){window.cancelAnimationFrame(e);return}window.clearTimeout(e)}},Yt=()=>{_e.current!=null&&(clearTimeout(_e.current),_e.current=null),ge.current=null},Xt=()=>{ye.current?.remove(),ye.current=null},Zt=()=>{Jt(he.current),he.current=null,ve.current=null},Qt=e=>{let t=w.current?.getRootNode();if(t instanceof ShadowRoot){t.append(e);return}document.body.append(e)},$t=()=>{xe.current?.(),xe.current=null,Ee.current!=null&&(clearTimeout(Ee.current),Ee.current=null),Se.current=!1,Ce.current=null,Te.current=null,we.current!=null&&(we.current.setAttribute(`draggable`,`true`),we.current.style.removeProperty(`touch-action`),we.current=null),Xt(),Yt(),Zt(),be.current=null},en=(e,n)=>{let r=w.current?.getRootNode(),i=Wc(Hc(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},tn=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){Yt();return}let r=t.getItem(e.directoryPath),i=Xc(r)?r:null;if(i==null||i.isExpanded()){Yt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;ge.current!==a&&(Yt(),ge.current=a,_e.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind===`directory`&&n.directoryPath===e.directoryPath&&n.flattenedSegmentPath===e.flattenedSegmentPath&&i.expand()},n))},nn=()=>{he.current=null;let e=ve.current,n=T.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=qc(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,ae.current()),tn(en(e.clientX,e.clientY)),he.current=qt(nn)},rn=(e,t)=>{ve.current={clientX:e,clientY:t},he.current??=qt(nn)},an=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if($t(),Xt(),Yt(),Zt(),t.startDrag(r)===!1){e.preventDefault();return}if(be.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),Kc())){let t=Gc(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Qt(t),ye.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},on=()=>{Xt(),Yt(),Zt(),be.current=null,t.cancelDrag()},sn=(e,n,r)=>{if(Ee.current!=null||Se.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;Te.current={clientX:i.clientX,clientY:i.clientY},we.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!Se.current;Ee.current!=null&&(clearTimeout(Ee.current),Ee.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),xe.current===o&&(xe.current=null),t&&(a.setAttribute(`draggable`,`true`),we.current===a&&(we.current=null),Te.current=null)},s=e=>{let t=e.touches[0],n=Te.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=100||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),xe.current=o,Ee.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),we.current===a&&(we.current=null),Te.current=null;return}Se.current=!0,we.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),be.current=n;let e=a.getBoundingClientRect(),s=Gc(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Qt(s),ye.current=s,Ce.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=Ce.current;n!=null&&ye.current!=null&&(ye.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),tn(en(t.clientX,t.clientY)),rn(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&en(n.clientX,n.clientY),t.completeDrag(),$t()},u=()=>{t.cancelDrag(),$t()};xe.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},zc)},cn=e=>{if(O!=null){if(e.key===`Escape`){Vt(),e.preventDefault(),e.stopPropagation();return}nl.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if(mt.isActive()){if(e.isComposing||e.keyCode===229)return;if(e.key===`Escape`)mt.cancel();else if(e.key===`Enter`)mt.commit();else return;Le(`focus`),Oe(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){Wt(j??void 0),e.preventDefault(),e.stopPropagation();return}if(_t){if(e.key===`Escape`)pe.current=!1,me.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=T.current,r=Zs(n,F);me.current=M<0||n==null?null:Math.max(0,Math.min(M*s-n.scrollTop,Math.max(0,r-s))),pe.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;Le(`focus`),Oe(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(p&&Qc(e)){t.openSearch(e.key),Oe(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=rt&&el(e),r=tl(e,rt),i=r&&w.current!=null?Xs(w.current):null,a=r?new Set(ll(w.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==j&&a.has(o)){let e=T.current;Ke(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),f=t.getFocusedItem();if(f==null)return;let m=Xc(f)?f:null,h=u!=null&&(Nt.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=T.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=cl(u,ie.current,re.current);e==null||n==null?y=!1:Ut(e,u)}else if((e.ctrlKey||e.metaKey)&&Zc(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;Le(`focus`);let b=t.getFocusedPath(),x=b!=null&&(Nt.has(b)||a.has(b)),S=g&&b!==u,C=n&&c&&o===u&&b===u;if((h||C)&&b!=null&&(S&&x||C))Ke(b,v?.scrollTop??null),ue.current=!0,je(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(qe(b,dl(w.current,v,i,u,s,Mt,F)),ue.current=!0,je(e=>e===b?e:b)):Ge()}Oe(e=>e+1),e.preventDefault(),e.stopPropagation()};wc(()=>{if(p&&_t){if(Je.current){Je.current=!1;return}Ys(ne.current)}},[_t,p]),wc(()=>{let e=te.current;switch(ic({hasRenderedInput:e!=null,previousRenamingPath:fe.current,renamingPath:ht})){case`reset`:fe.current=null;return;case`reveal-canonical`:ht!=null&&Gt(ht,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(Be.current=null,fe.current=ht,Ys(e),e.select());return}},[Ot.end,Ot.start,ht,Gt,Nt]),wc(()=>{let e=w.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=Xs(e)?.dataset.itemPath??null;je(e=>e===t?e:t)},i=()=>{n(),ue.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{if(t=null,Xs(e)!=null){r();return}ue.current=!1,je(null)},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),ue.current=!1,je(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;je(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),wc(()=>{let e=w.current;e!=null&&(N.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[N.physical.scrollTop]),wc(()=>{let e=null,n=T.current,r=ee.current,i=w.current;if(n==null)return;se.current=Zs(n,_);let a=()=>{let e=t.getVisibleCount(),r=Qs(se.current,_),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),et(Rc({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:g,viewportHeight:r}))};if(!ce.current){ce.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=Qs(se.current,_),i=t.getVisibleRows(e,e)[0]??null;ec(n,e,s,r,g&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}ae.current=a;let o=t.subscribe(()=>{Gs(ke)&&Oe(e=>e+1),a()}),l=()=>{We.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),C.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,C.current=!1,D(e=>e+1),e=null},50))},u=null,d=()=>{i!=null&&delete i.dataset.overlayReveal,u!=null&&(clearTimeout(u),u=null)},f=()=>{i!=null&&We.current!==!0&&(n.scrollTop>0||(i.dataset.overlayReveal=`true`,u!=null&&clearTimeout(u),u=setTimeout(()=>{d()},200)))},p=()=>{if(a(),n.scrollTop>0&&d(),ze.current!=null&&C.current&&Bt.current(),We.current===!0){C.current=!1;return}Ne(e=>e==null?e:null),l()},m=()=>{l(),f()},h=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),v=e=>{h.has(e.key)&&m()};n.addEventListener(`scroll`,p,{passive:!0}),n.addEventListener(`wheel`,m,{passive:!0}),n.addEventListener(`touchmove`,m,{passive:!0}),n.addEventListener(`keydown`,v);let y=typeof ResizeObserver<`u`?new ResizeObserver(e=>{se.current=(e[0]==null?null:$s(e[0]))??Zs(n,_),a()}):null;return y?.observe(n),()=>{ae.current=()=>{},o(),n.removeEventListener(`scroll`,p),n.removeEventListener(`wheel`,m),n.removeEventListener(`touchmove`,m),n.removeEventListener(`keydown`,v),e!=null&&clearTimeout(e),u!=null&&clearTimeout(u),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),C.current=!1,se.current=null,y?.disconnect()}},[t,_,s,c,g]),wc(()=>{rt||O==null||Vt(!1)},[Vt,rt,O]);let ln=Tc(()=>O==null?null:`${O.path}::${O.source}`,[O]);wc(()=>{if(ln==null){h?.clearSlotContent(b);return}let t=ze.current;if(t==null)return;let n=S.current??v.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??il(n.getBoundingClientRect()),close:e=>{Bt.current(e?.restoreFocus??!0)},restoreFocus:()=>{zt.current&&Rt.current(ze.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return h?.setSlotContent(b,i),e?.contextMenu?.onOpen?.(t.item,r),_l(i),queueMicrotask(()=>{i!=null&&i.isConnected&&document.activeElement===i&&_l(i)}),()=>{h?.clearSlotContent(b)}},[ln,e?.contextMenu,h]),wc(()=>{O!=null&&t.getItem(O.path)==null&&Vt()},[Vt,O,t]),wc(()=>{if(O==null)return;let e=w.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:w.current,n=e=>{let n=e.target;n instanceof Node&&(rl(e)||v.current?.contains(n)!==!0&&t?.contains(n)!==!0&&Vt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),Vt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[Vt,O]),wc(()=>{let e=T.current,n=w.current;if(e==null||n==null){de.current=j;return}let r=j==null?null:re.current.get(j)??null,i=Xs(n),a=i?.dataset.itemPath??null,o=gt&&te.current===i,c=p&&ne.current===i,l=pe.current&&!_t,u=me.current??0,d=Be.current,f=Ve.current,m=He.current,h=Ue.current,_=i!=null,v=ue.current||_,y=de.current!==j,b=f!=null&&f===j&&j!=null,x=!1,S=!1;if(yt!=null&&yt.id!==E.current){E.current=yt.id;let n=yt.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=g?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,F-s))):Mt;x=!0,S=tc(e,n,s,F,jt,yt.offset,t)}t.clearScrollRequest(yt.id)}let C=!x&&l&&nc(e,M,s,F,jt,u),ee=!x&&d!=null&&d===j&&nc(e,M,s,F,jt,Mt),ie=!x&&m!=null&&m.path===j&&nc(e,M,s,F,jt,m.viewportOffset),oe=!x&&h!=null&&h.path===j&&e.scrollTop!==h.scrollTop;if(oe&&(e.scrollTop=h.scrollTop),(oe||S||ee||ie||C||v&&y&&d!==j&&!b&&ec(e,M,s,F,Mt))&&ae.current(),x){de.current=j;return}if(!v){de.current=j;return}if(o){de.current=j;return}if(c&&!l){de.current=j;return}if(r==null){l&&M>=0&&(nc(e,M,s,F,jt,u),ae.current()),de.current=j;return}(y||l||d===j||f===j||m?.path===j||h?.path===j||a==null||a!==j)&&(Ys(r),d===j&&(Be.current=null),f===j&&(Ve.current=null),m?.path===j&&(He.current=null),h?.path===j&&(Ue.current=null),pe.current=!1,me.current=null),de.current=j},[t,M,j,Pt,s,gt,_t,Ot,F,p,yt,g,Mt,jt,P]);let un=M>=0&&M>=N.visible.startIndex&&M<=N.visible.endIndex,dn=j!=null&&kt.some(e=>Fc(e.row)===j),fn=un||dn,pn=at&&ue.current===!0&&fn?j:null,mn=Ie===`pointer`?Me:null,hn=O?.path??A.current??mn??pn??Me,I=O?.source===`right-click`;wc(()=>{C.current&&O==null||Ht(dt(hn))},[O,dt,Ot,F,Re,kt,hn,Ht,P]);let gn=Ec(e=>{if(C.current||rl(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&Le(e=>e===`pointer`?e:`pointer`),Ne(e=>e===i?e:i)},[]),_n=Ec(()=>{Ne(null)},[]);wc(()=>{if(!bt)return;let e=()=>{$t(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),$t(),t.cancelDrag()}},[t,bt]);let vn=e=>{if(!bt||t.getDragSession()==null||Se.current)return;let n=Wc(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),tn(t.getDragSession()?.target??null),rn(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},yn=e=>{if(!bt||t.getDragSession()==null||Se.current)return;let n=e.relatedTarget;n instanceof Node&&w.current?.contains(n)===!0||(Yt(),Zt(),t.setDragTarget(null))},bn=e=>{bt&&t.getDragSession()!=null&&!Se.current&&(e.preventDefault(),en(e.clientX,e.clientY),t.completeDrag(),Xt(),Yt(),Zt(),be.current=null)},L=N.window.height,R=N.window.offsetTop,xn=Math.min(0,F-L),Sn=Math.min(0,F-L-Mt),Cn=Ae===j||pe.current,wn=j!=null&&Cn&&!Pt&&M>=0?P[M]??t.getVisibleRows(M,M)[0]??null:null,Tn=wn==null?null:rc(M,s,Ot,L),En=be.current,Dn=wt!=null&&En!=null&&En.path===wt&&En.index>=Ot.start&&En.index<=Ot.end,On=wt!=null&&En!=null&&En.path===wt&&!Dn&&En.path!==wn?.path?En:null,kn=On==null?null:rc(On.index,s,Ot,L),An=$c((M>=0?P[M]??t.getVisibleRows(M,M)[0]??null:null)?.ancestorPaths.at(-1)??null),jn=_t&&j!=null?ml(o,j,!Pt):void 0,Mn=O?.path??(_t?j:Ae),Nn=O?.path??Me,Pn=dt(hn),Fn=rt&&at&&!I&&!gt&&Pn!=null&&Pe!=null&&hn!=null,In=rt&&(Fn||O!=null),Ln=O?.anchorRect,Rn=Ln==null&&Pn!=null&&Pe!=null&&(O!=null||Fn)?Pe:null,zn=Ln==null?Rn==null?void 0:{top:`${Rn}px`}:{left:`${Ln.left}px`,position:`fixed`,right:`auto`,top:`${Ln.top}px`},Bn=I?{opacity:`0`}:void 0,Vn=Ec((e,n,r,i)=>{let a=sc({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:_t,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c)}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=N.visible.startIndex&&n.index<=N.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(ue.current=!0,je(e=>e===c?e:c),Le(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Gt(c,{targetOffset:`sticky-parents`})},[t,_t,N.visible.endIndex,N.visible.startIndex,Gt]),Hn=()=>{if(C.current||!at||hn==null||Pn==null)return;let e=t.getItem(hn);e!=null&&(Ht(Pn),zt.current=!0,k({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:Pn.getAttribute(`aria-label`)??hn,path:e.getPath()},path:e.getPath(),source:`button`}))},Un={contextHoverPath:Nn,contextMenuButtonTriggerEnabled:at,contextMenuButtonVisibility:ot,contextMenuEnabled:rt,contextMenuRightClickEnabled:st,contextMenuTriggerMode:it,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:bt,draggedPathSet:St,dragTarget:Ct,gitLaneActive:ft,gitStatusByPath:n,handleRowDragEnd:on,handleRowDragStart:an,handleRowTouchStart:sn,ignoredGitDirectories:r,ignoredInheritanceCache:De,instanceId:o,itemHeight:s,onKeyDown:cn,onRowClick:Vn,openContextMenuForRow:Ut,registerButton:ct,registerRenameInput:ut,renameView:mt,renderDecorationForRow:Ft,resolveIcon:pt,shouldSuppressContextMenu:Kt,visualFocusPath:Mn},Wn={...Un,registerButton:lt};return J(`div`,{ref:w,id:Tt,"data-file-tree-context-menu-button-visibility":rt&&at?ot:void 0,"data-file-tree-context-menu-trigger-mode":rt?it:void 0,"data-file-tree-has-context-menu-action-lane":rt&&at?`true`:void 0,"data-file-tree-has-git-lane":ft?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:bt?yn:void 0,onDragOver:bt?vn:void 0,onDrop:bt?bn:void 0,onKeyDown:cn,onPointerLeave:rt?_n:void 0,onPointerOver:rt?gn:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[J(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:An}}),J(`slot`,{name:y,"data-type":`header-slot`}),p?J(`div`,{"data-file-tree-search-container":!0,"data-open":_t?`true`:`false`,children:J(`input`,{ref:ne,"aria-activedescendant":jn,"aria-controls":Tt,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":Ye?`true`:void 0,value:vt,onBlur:()=>{(f!==`retain`||Ze.current)&&t.closeSearch()},onFocus:Qe,onPointerDown:Qe,onInput:e=>{Qe();let n=e.currentTarget;t.setSearch(n.value)}})}):null,J(`div`,{ref:T,"data-file-tree-virtualized-scroll":`true`,children:[g&&tt&&kt.length>0?J(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:J(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${Et}px`},children:kt.map((e,t)=>yl(Wn,e.row,`sticky:${Fc(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${kt.length-t}`}}))})}):null,J(`div`,{ref:ee,"data-file-tree-virtualized-list":`true`,style:{height:`${jt}px`},children:[J(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${R}px`}}),J(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${L}px`,top:`${xn}px`,bottom:`${Sn}px`},children:[bl(Un,Ot,Nt),wn!=null&&Tn!=null?yl(Un,wn,`parked:${wn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:wt===wn.path?`none`:void 0,position:`absolute`,right:`0`,top:`${Tn}px`}}):null,On!=null&&kn!=null?yl(Un,On,`parked-drag:${On.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${kn}px`}}):null]})]})]}),rt?J(`div`,{ref:v,"data-type":`context-menu-anchor`,"data-visible":In?`true`:`false`,style:zn,children:[J(`button`,{ref:S,type:`button`,"data-type":x,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":O==null?`false`:`true`,"data-visible":Fn?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(e.preventDefault(),e.stopPropagation(),O!=null){Vt();return}Hn()},tabIndex:-1,style:Bn,children:J(ms,{...pt(`file-tree-icon-ellipsis`)})}),O==null?null:J(`slot`,{name:b})]}):null,O==null?null:J(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),Vt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),Vt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var Sl={hydrateRoot:(e,t)=>{ls(zo(xl,t),e)},renderRoot:(e,t)=>{cs(zo(xl,t),e)},unmountRoot:e=>{cs(null,e)}};function Cl(e,t){Sl.renderRoot(e,t)}function wl(e,t){Sl.hydrateRoot(e,t)}function Tl(e){Sl.unmountRoot(e)}var El=new WeakMap,Dl=new WeakMap,Ol=new WeakSet,kl=class{constructor(){c(this,Ol),i(this,El,new Map),i(this,Dl,null)}clearAll(){for(let e of a(El,this).values())e.remove();a(El,this).clear()}clearSlotContent(e){let t=o(Ol,this,Al).call(this,e);t!=null&&(t.remove(),a(El,this).delete(e))}setHost(e){if(s(Dl,this,e),e!=null){o(Ol,this,Ml).call(this,e);for(let[e,t]of a(El,this))o(Ol,this,jl).call(this,e,t)}}setSlotContent(e,t){let n=o(Ol,this,Al).call(this,e);if(n===t){t!=null&&(a(El,this).set(e,t),o(Ol,this,jl).call(this,e,t));return}if(n?.remove(),t==null){a(El,this).delete(e);return}a(El,this).set(e,t),o(Ol,this,jl).call(this,e,t)}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=o(Ol,this,Al).call(this,e);if(r!=null&&r.innerHTML===n){a(El,this).set(e,r),o(Ol,this,jl).call(this,e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}};function Al(e){let t=a(El,this).get(e)??null;if(t!=null)return t;let n=a(Dl,this);if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}function jl(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,a(Dl,this)!=null&&t.parentNode!==a(Dl,this)&&a(Dl,this).appendChild(t)}function Ml(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||a(El,this).has(e)||a(El,this).set(e,t)}}Array.isArray;var Nl,Pl,Q,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,$,nu=0;function ru(e){return e!=null&&e.length>0?e:(nu+=1,`pst_ft_${nu}`)}function iu({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??oe)}function au(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function ou(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function su(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var cu=(Pl=new WeakMap,Q=new WeakMap,Fl=new WeakMap,Il=new WeakMap,Ll=new WeakMap,Rl=new WeakMap,zl=new WeakMap,Bl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Ul=new WeakMap,Wl=new WeakMap,Gl=new WeakMap,Kl=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,$=new WeakSet,Nl=class{constructor(e){c(this,$),i(this,Pl,void 0),i(this,Q,void 0),i(this,Fl,void 0),i(this,Il,void 0),i(this,Ll,void 0),i(this,Rl,void 0),i(this,zl,void 0),i(this,Bl,void 0),i(this,Vl,void 0),i(this,Hl,new kl),i(this,Ul,void 0),i(this,Wl,void 0),i(this,Gl,void 0),i(this,Kl,void 0),i(this,ql,void 0),i(this,Jl,void 0),i(this,Yl,void 0),i(this,Xl,void 0),i(this,Zl,void 0),i(this,Ql,null),i(this,$l,void 0),i(this,eu,!1),i(this,tu,!1);let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:l,id:u,initialSearchQuery:d,icons:f,itemHeight:p,onSearchChange:m,onSelectionChange:h,overscan:g,renderRowDecoration:_,renaming:v,search:y,searchBlurBehavior:b,searchFakeFocus:x,stickyFolders:S,unsafeCSS:C,initialVisibleRowCount:ee,...te}=e;s(Pl,this,t),s(Fl,this,ru(u)),s(Kl,this,ho(l)),s(ql,this,f),s(Jl,this,C),s(Il,this,h),s(Ll,this,_),s(Rl,this,v!=null&&v!==!1),s(zl,this,b),s(Bl,this,y===!0),s(Vl,this,x===!0),s(Ul,this,ae(n,p)),s(Wl,this,{itemHeight:a(Ul,this).itemHeight,overscan:g,stickyFolders:S,initialVisibleRowCount:ee}),s(Q,this,new ga({...te,fileTreeSearchMode:r,initialSearchQuery:d,onSearchChange:m,renaming:v})),s(Zl,this,a(Q,this).getSelectionVersion()),s(Ql,this,a(Il,this)==null?null:this.subscribe(()=>{o($,this,pu).call(this)}))}unmount(){a($l,this)!=null&&(Tl(a($l,this)),delete a($l,this).dataset.fileTreeVirtualizedWrapper,s($l,this,void 0)),a(Hl,this).clearAll(),a(Hl,this).setHost(null),a(Gl,this)!=null&&(delete a(Gl,this).dataset.fileTreeVirtualized,o($,this,Su).call(this,a(Gl,this)),s(Gl,this,void 0))}cleanUp(){this.unmount(),a(Ql,this)?.call(this),s(Ql,this,null),a(Q,this).destroy()}getFileTreeContainer(){return a(Gl,this)}getItem(e){return a(Q,this).getItem(e)}getFocusedItem(){return a(Q,this).getFocusedItem()}getFocusedPath(){return a(Q,this).getFocusedPath()}getFocusedIndex(){return a(Q,this).getFocusedIndex()}getVisibleCount(){return a(Q,this).getVisibleCount()}getVisibleRows(e,t){return a(Q,this).getVisibleRows(e,t)}getSelectedPaths(){return a(Q,this).getSelectedPaths()}getComposition(){return a(Pl,this)}getItemHeight(){return a(Ul,this).itemHeight}getDensityFactor(){return a(Ul,this).factor}subscribe(e){let t=!1;return a(Q,this).subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){a(Q,this).focusPath(e)}focusFirstItem(){a(Q,this).focusFirstItem()}focusLastItem(){a(Q,this).focusLastItem()}focusNextItem(){a(Q,this).focusNextItem()}focusPreviousItem(){a(Q,this).focusPreviousItem()}focusParentItem(){a(Q,this).focusParentItem()}scrollToPath(e,t){a(Q,this).scrollToPath(e,t)}focusNearestPath(e){return a(Q,this).focusNearestPath(e)}add(e){a(Q,this).add(e)}batch(e){a(Q,this).batch(e)}applyGitStatusPatch(e){let t=go(a(Kl,this),e);if(t===a(Kl,this))return;s(Kl,this,t);let n=o($,this,du).call(this);n!=null&&Cl(n.wrapper,o($,this,uu).call(this))}move(e,t,n){a(Q,this).move(e,t,n)}onMutation(e,t){return a(Q,this).onMutation(e,t)}setSearch(e){a(Q,this).setSearch(e)}openSearch(e){a(Q,this).openSearch(e)}closeSearch(){a(Q,this).closeSearch()}isSearchOpen(){return a(Q,this).isSearchOpen()}getSearchValue(){return a(Q,this).getSearchValue()}getSearchMatchingPaths(){return a(Q,this).getSearchMatchingPaths()}focusNextSearchMatch(){a(Q,this).focusNextSearchMatch()}focusPreviousSearchMatch(){a(Q,this).focusPreviousSearchMatch()}startRenaming(e,t){return a(Q,this).startRenaming(e,t)}remove(e,t){a(Q,this).remove(e,t)}resetPaths(e,t){Array.isArray(e)?a(Q,this).resetPaths(e,t):a(Q,this).resetPaths(e)}setComposition(e){s(Pl,this,e);let t=o($,this,du).call(this);t!=null&&(o($,this,mu).call(this),Cl(t.wrapper,o($,this,uu).call(this)))}setGitStatus(e){let t=ho(e,a(Kl,this));if(t===a(Kl,this))return;s(Kl,this,t);let n=o($,this,du).call(this);n!=null&&Cl(n.wrapper,o($,this,uu).call(this))}setIcons(e){s(ql,this,e);let t=o($,this,du).call(this);t!=null&&(o($,this,fu).call(this,t.host,t.wrapper),Cl(t.wrapper,o($,this,uu).call(this)))}hydrate({fileTreeContainer:e}){let t=o($,this,bu).call(this,e),n=o($,this,yu).call(this,t);o($,this,mu).call(this),wl(n,o($,this,uu).call(this))}render({containerWrapper:e,fileTreeContainer:t}){let n=o($,this,bu).call(this,t??a(Gl,this),e),r=o($,this,yu).call(this,n);o($,this,mu).call(this),Cl(r,o($,this,uu).call(this))}},r(Nl,`LoadedCustomComponent`,!0),Nl);function lu(){return{initialViewportHeight:iu({initialVisibleRowCount:a(Wl,this).initialVisibleRowCount,itemHeight:a(Wl,this).itemHeight}),itemHeight:a(Wl,this).itemHeight,overscan:a(Wl,this).overscan,stickyFolders:a(Wl,this).stickyFolders}}function uu(){return{composition:a(Pl,this),controller:a(Q,this),gitStatusByPath:a(Kl,this)?.statusByPath,ignoredGitDirectories:a(Kl,this)?.ignoredDirectoryPaths,directoriesWithGitChanges:a(Kl,this)?.directoriesWithChanges,icons:a(ql,this),instanceId:a(Fl,this),renamingEnabled:a(Rl,this),renderRowDecoration:a(Ll,this),searchBlurBehavior:a(zl,this),searchEnabled:a(Bl,this),searchFakeFocus:a(Vl,this),slotHost:a(Hl,this),...o($,this,lu).call(this)}}function du(){let e=a(Gl,this),t=a($l,this);return e==null||t==null?null:{host:e,wrapper:t}}function fu(e,t){let n=e.shadowRoot;n!=null&&(o($,this,hu).call(this,n),o($,this,gu).call(this,n)),o($,this,_u).call(this,t)}function pu(){let e=a(Il,this);if(e==null)return;let t=a(Q,this).getSelectionVersion();t!==a(Zl,this)&&(s(Zl,this,t),e(a(Q,this).getSelectedPaths()))}function mu(){let e=a(Pl,this)?.header?.render;if(e!=null){a(Hl,this).setSlotContent(y,e());return}a(Hl,this).setSlotHtml(y,a(Pl,this)?.header?.html??null)}function hu(e){let t=su(e).find(e=>ou(e)),n=au(u(l(a(ql,this)).set));n!=null&&(t==null||t.outerHTML!==n.outerHTML)&&(t==null?e.prepend(n):t.replaceWith(n))}function gu(e){let t=su(e),n=t.find(e=>ou(e)),r=t.filter(e=>e!==n),i=l(a(ql,this)).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let o=au(i);if(o==null){for(let e of r)e.remove();return}if(r.length!==1||r[0].outerHTML!==o.outerHTML){for(let e of r)e.remove();e.appendChild(o)}}function _u(e){let t=l(a(ql,this));t.colored&&f(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}function vu(e){let t=e.querySelector(`style[${h}]`);if(a(Yl,this)==null&&t instanceof HTMLStyleElement&&s(Yl,this,t),a(Jl,this)==null||a(Jl,this)===``){a(Yl,this)?.remove(),s(Yl,this,void 0),s(Xl,this,void 0);return}(a(Yl,this)?.parentNode!==e||a(Xl,this)!==a(Jl,this))&&(a(Yl,this)??s(Yl,this,document.createElement(`style`)),a(Yl,this).setAttribute(h,``),a(Yl,this).parentNode!==e&&e.appendChild(a(Yl,this)),a(Yl,this).textContent=le(a(Jl,this)),s(Xl,this,a(Jl,this)))}function yu(e){if(a($l,this)!=null)return a($l,this);let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===a(Fl,this))??n[0];return r!=null&&s(Fl,this,r.dataset.fileTreeId??a(Fl,this)),s($l,this,r??document.createElement(`div`)),a($l,this).dataset.fileTreeId=a(Fl,this),a($l,this).dataset.fileTreeVirtualizedWrapper=`true`,o($,this,fu).call(this,e,a($l,this)),a($l,this).parentNode!==t&&t.appendChild(a($l,this)),a($l,this)}function bu(e,t){let n=e??a(Gl,this)??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return he(n,r),o($,this,vu).call(this,r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,o($,this,xu).call(this,n),a(Hl,this).setHost(n),s(Gl,this,n),n}function xu(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(a(Ul,this).itemHeight)}px`),s(eu,this,!0)),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(a(Ul,this).factor)),s(tu,this,!0))}function Su(e){a(eu,this)&&(e.style.removeProperty(`--trees-item-height`),s(eu,this,!1)),a(tu,this)&&(e.style.removeProperty(`--trees-density-override`),s(tu,this,!1))}function Cu(e){let[t]=(0,S.useState)(()=>new cu(e)),n=(0,S.useRef)({timeout:null,model:t});return(0,S.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}function wu(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!Object.is(e[n],t[n]))return!1;return!0}function Tu(e,t,n){return Object.is(e,t)||n?.(e,t)===!0}function Eu(e,t,n){let r=(0,S.useRef)({hasValue:!1,model:null,selector:null,value:void 0}),i=(0,S.useCallback)(t=>e.subscribe(t),[e]),a=(0,S.useCallback)(()=>{let i=r.current,a=t(e);if(i.model!==e||i.selector!==t||!i.hasValue)return i.hasValue=!0,i.model=e,i.selector=t,i.value=a,a;let o=i.value;return Tu(o,a,n)?o:(i.value=a,a)},[n,e,t]);return(0,S.useSyncExternalStore)(i,a,a)}var Du=`
  :host {
    --trees-bg-override: transparent;
    --trees-selected-bg-override: color-mix(in srgb, currentColor 12%, transparent);
    --trees-hover-bg-override: color-mix(in srgb, currentColor 7%, transparent);
    --trees-border-color-override: color-mix(in srgb, currentColor 14%, transparent);
    --trees-font-family-override: var(--font-sans);
    --trees-font-size-override: 0.75rem;
  }
  button[data-type='item'], button[data-type='item']::before { border-radius: var(--radius-md); }
  svg[data-icon-name='t3-tree-icon-loading'] { opacity: 0.6; }
  @media (prefers-reduced-motion: no-preference) {
    svg[data-icon-name='t3-tree-icon-loading'] { animation: t3-tree-spin 1s linear infinite; }
  }
  @keyframes t3-tree-spin { to { transform: rotate(360deg); } }
`;function Ou(e){return{colorScheme:e,"--trees-fg-override":`var(--contrast-foreground)`}}function ku(e){return typeof e!=`object`||!e||!(`isDirectory`in e)||typeof e.isDirectory!=`function`||!e.isDirectory()||!(`isExpanded`in e)||typeof e.isExpanded!=`function`||!(`expand`in e)||typeof e.expand!=`function`||!(`collapse`in e)||typeof e.collapse!=`function`?null:e}function Au(e,t){return t.length>0&&t.every(t=>{let n=ku(e.getItem(t));return n!==null&&n.isExpanded()})}function ju(e,t,n){for(let r of t){let t=ku(e.getItem(r));t!==null&&t.isExpanded()!==n&&(n?t.expand():t.collapse())}}export{wu as a,re as c,Ou as i,ju as n,Eu as o,Du as r,Cu as s,Au as t};