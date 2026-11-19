import{c as e}from"./legacyColor-DJMcM4Vu.js";import{t}from"./react-Co0EIINb.js";import{n,t as r}from"./jsx-runtime-DacOblfc.js";import{t as i}from"./defineProperty-BbfpZ9Tg.js";import{$u as a,Xg as o,Xu as s,t as c}from"./utils-DpR458RZ.js";import{Iu as l,Ru as u,gu as d}from"./network-kYv6gdjc.js";import{i as f,n as p,r as m,t as h}from"./classPrivateFieldSet2-BE9xOnOO.js";import{t as g}from"./classPrivateMethodInitSpec-Dhc_bQPo.js";import{t as _}from"./observeResize-CHEpF96t.js";import{c as v,d as y,l as b,u as x}from"./pierre-icons-DCJlfNAK.js";import{n as S,r as C,t as ee}from"./useResizableWidth-BMiaAt1i.js";var w=`file-tree-container`,te=`data-file-tree-style`,T=`data-file-tree-unsafe-css`,ne=`data-file-tree-scrollbar-measure`,E=`data-file-tree-scrollbar-gutter-measured`,re=`--trees-scrollbar-gutter-measured`,ie=`header`,D=`context-menu`,ae=`context-menu-trigger`,O=e(t(),1),k=e(r(),1),oe=typeof window>`u`?O.useEffect:O.useLayoutEffect;function se(e,t,n){let r=e==null?null:(0,k.jsx)(`div`,{slot:ie,children:e}),i=t!=null&&n!=null?(0,k.jsx)(`div`,{slot:D,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,k.jsxs)(k.Fragment,{children:[r,i]})}function ce(e,t){return typeof window>`u`&&t!=null?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,k.jsx)(k.Fragment,{children:e})}function le(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement||e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function ue(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function de({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,O.useState)(null),[c,l]=(0,O.useState)(null),u=(0,O.useRef)(n.getComposition()),d=(0,O.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,p=(0,O.useCallback)(()=>{s(null)},[]),m=(0,O.useCallback)((e,t)=>{s({context:t,item:e})},[]),h=u.current,g=(0,O.useMemo)(()=>ue(h,e,f,p,m),[h,p,m,f,e]),_=(0,O.useCallback)(e=>{l(e)},[]);(0,O.useEffect)(()=>{f||s(null)},[f]),oe(()=>{n.setComposition(g)},[g,n]),oe(()=>{if(c!=null)return r!=null&&le(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(h)}},[h,c,n,r]);let v=ce(se(e,i,o),r),y=t??r?.id,b={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,k.jsx)(w,{...a,id:y,ref:_,style:b,suppressHydrationWarning:r!=null,children:v})}var fe={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}};function pe(e,t){if(typeof e==`number`)return{itemHeight:t??fe.default.itemHeight,factor:e};let n=fe[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var me=fe.default.itemHeight,he=`@layer base {
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
`,ge=`@layer base, unsafe;`;function _e(e){return`${ge}
@layer base {
  ${e}
}`}function ve(e){return`${ge}
@layer unsafe {
  ${e}
}`}var ye=new WeakMap;function be(e){let t=ye.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(ne,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),ye.set(e,i),i}function xe(e,t){if(!e.isConnected)return;let n=be(t);if(n==null)return;let r=t.querySelector(`style[${E}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(E,``),t.appendChild(i)),i.textContent=`:host { ${re}: ${n}px; }`}var Se;function Ce(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){Se??(Se=new CSSStyleSheet,Se.replaceSync(_e(he)));let t=!1;try{e.adoptedStyleSheets=[Se],t=!0}catch{}if(t){e.querySelector(`style[${te}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute(te,``),t.textContent=_e(he),e.prepend(t)}}function we(e,t){Te(e,t),Ce(t),xe(e,t)}function Te(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}if(typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});we(this,e)}}if(customElements.define(w,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(w)))e instanceof HTMLElement&&we(e,e.shadowRoot??e.attachShadow({mode:`open`}))}var Ee=5,De=32,Oe=128;function ke(){return{childIdByNameId:new Map,childIds:[],childPositionById:new Map,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function Ae(){return{childIdByNameId:null,childIds:[],childPositionById:null,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function je(e,t){if(t.childIdByNameId!=null)return t.childIdByNameId;let n=new Map;for(let r of t.childIds){let t=e[r];t!=null&&n.set(t.nameId,r)}return t.childIdByNameId=n,n}function Me(e){if(e.childPositionById!=null)return e.childPositionById;let t=new Map;for(let n=0;n<e.childIds.length;n++){let r=e.childIds[n];r!=null&&t.set(r,n)}return e.childPositionById=t,t}function Ne(e,t){e.childPositionById!=null&&e.childPositionById.set(t,e.childIds.length),e.childIds.push(t)}function Pe(e,t){if(e.childPositionById!=null)for(let n=t;n<e.childIds.length;n++){let t=e.childIds[n];t!=null&&e.childPositionById.set(t,n)}}function Fe(e,t){let n=0,r=0;for(let i of t.childIds){let t=e[i];t!=null&&(n+=t.subtreeNodeCount,r+=t.visibleSubtreeCount)}t.totalChildSubtreeNodeCount=n,t.totalChildVisibleSubtreeCount=r,Re(e,t)}function Ie(e,t,n,r){if(e.totalChildSubtreeNodeCount+=n,e.totalChildVisibleSubtreeCount+=r,e.childVisibleChunkSums==null||r===0)return;let i=Me(e).get(t);if(i===void 0)return;let a=i>>Ee;e.childVisibleChunkSums[a]+=r}function A(e,t,n){let r=t.childVisibleChunkSums;if(r!=null){let i=n,a=0;for(let o of r){if(i<o){let r=ze(e,t,a,i);return{...r,childVisibleIndex:n-r.localVisibleIndex}}i-=o,a+=De}throw Error(`Visible child index ${String(n)} is out of range`)}let i=n;for(let r=0;r<t.childIds.length;r++){let a=t.childIds[r];if(a==null)continue;let o=e[a];if(o!=null){if(i<o.visibleSubtreeCount)return{childIndex:r,childVisibleIndex:n-i,localVisibleIndex:i};i-=o.visibleSubtreeCount}}throw Error(`Visible child index ${String(n)} is out of range`)}function Le(e,t,n){let r=0,i=t.childVisibleChunkSums,a=0;if(i!=null){let e=n>>Ee;for(let t=0;t<e;t+=1)r+=i[t]??0;a=e<<Ee}for(let i=a;i<n;i+=1){let n=t.childIds[i];if(n==null)continue;let a=e[n];a!=null&&(r+=a.visibleSubtreeCount)}return r}function Re(e,t){if(t.childIds.length<Oe){t.childVisibleChunkSums=null;return}let n=Math.ceil(t.childIds.length/De),r=new Int32Array(n);for(let n=0;n<t.childIds.length;n++){let i=t.childIds[n];if(i==null)continue;let a=e[i];a!=null&&(r[n>>Ee]+=a.visibleSubtreeCount)}t.childVisibleChunkSums=r}function ze(e,t,n,r){let i=Math.min(t.childIds.length,n+De),a=r;for(let r=n;r<i;r++){let n=t.childIds[r];if(n==null)continue;let i=e[n];if(i!=null){if(a<i.visibleSubtreeCount)return{childIndex:r,localVisibleIndex:a};a-=i.visibleSubtreeCount}}throw Error(`Visible child index ${String(r)} is out of range`)}var Be=7,Ve=3,He=8,Ue=4;function We(e,t,n=0){return e<<Ue|n<<Ve|t}function Ge(e){return e.depthAndFlags>>>Ue}function Ke(e){return(e.depthAndFlags&He)>>Ve}function j(e){return(e.depthAndFlags&He)!==0}function qe(e){return e.depthAndFlags&Be}function M(e,t){return(qe(e)&t)!==0}function Je(e,t){e.depthAndFlags|=t}function Ye(e,t){e.depthAndFlags=We(t,qe(e),Ke(e))}var Xe=Symbol(`benchmarkInstrumentation`);function Ze(e,t){return t==null||Object.defineProperty(e,Xe,{configurable:!0,enumerable:!1,value:t,writable:!1}),e}function Qe(e){return e==null?null:e[Xe]??null}function N(e,t,n){return e==null?n():e.measurePhase(t,n)}function $e(e,t,n){Number.isFinite(n)&&e!=null&&e.setCounter(t,n)}function et(e){return e>=48&&e<=57}function tt(e){let t=[],n=0,r=0;for(;r<e.length;){for(;r<e.length&&!et(e.charCodeAt(r));)r+=1;if(r>=e.length)break;r>n&&t.push(e.slice(n,r));let i=0;for(;r<e.length&&et(e.charCodeAt(r));)i=i*10+(e.charCodeAt(r)-48),r+=1;t.push(i),n=r}return(n<e.length||t.length===0)&&t.push(e.slice(n)),t}function nt(e){let t=e.toLowerCase();return{lowerValue:t,tokens:tt(t)}}function rt(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e[r],i=t[r];if(n===i)continue;if(typeof n==`number`&&typeof i==`number`)return n<i?-1:1;let a=String(n),o=String(i);if(a!==o)return a<o?-1:1}return e.length===t.length?0:e.length<t.length?-1:1}function it(e,t){if(e.tokens.length===1&&t.tokens.length===1&&typeof e.tokens[0]==`string`&&typeof t.tokens[0]==`string`)return e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1;let n=rt(e.tokens,t.tokens);return n===0?e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1:n}function at(e,t,n){let r=it(n(e),n(t));return r===0?e===t?0:e<t?-1:1:r}function ot(e,t){return at(e,t,nt)}function st(e,t){return t===e.segments.length-1?+!!e.isDirectory:1}function ct(e,t){let n=Math.min(e.segments.length,t.segments.length);for(let r=0;r<n;r++){let n=e.segments[r],i=t.segments[r];if(n===i)continue;let a=st(e,r);return a===st(t,r)?ot(n,i):a===1?-1:1}return e.segments.length===t.segments.length?e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1:e.segments.length<t.segments.length?-1:1}function lt(e,t){return ct(e,t)}function ut(e,t,n){let r=e=>{let t=n.get(e);if(t!=null)return t;let r=nt(e);return n.set(e,r),r},i=Math.min(e.segments.length,t.segments.length);for(let n=0;n<i;n++){let i=e.segments[n],a=t.segments[n];if(i===a)continue;let o=st(e,n);return o===st(t,n)?at(i,a,r):o===1?-1:1}return e.segments.length===t.segments.length?e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1:e.segments.length<t.segments.length?-1:1}function dt(e,t){let n=e.sortKeyById[t];if(n!==void 0)return n;let r=e.valueById[t],i=nt(r);return e.sortKeyById[t]=i,i}function ft(e={}){return{flattenEmptyDirectories:e.flattenEmptyDirectories!==!1,sort:e.sort??`default`}}function pt(e){let t=e.length>0&&e.charCodeAt(e.length-1)===47,n=t?e.length-1:e.length,r=[],i=0;for(let t=0;t<n;t++)e.charCodeAt(t)===47&&(r.push(e.slice(i,t)),i=t+1);return r.push(e.slice(i,n)),{hasTrailingSlash:t,segments:r}}function mt(e){let{hasTrailingSlash:t,segments:n}=pt(e);return{basename:n[n.length-1]??``,isDirectory:t,path:e,segments:n}}function ht(e){if(e.length===0)return{requiresDirectory:!1,segments:[]};let{hasTrailingSlash:t,segments:n}=pt(e);return{requiresDirectory:t,segments:n}}function P(){let e=new Map;return e.set(``,0),{idByValue:e,valueById:[``],sortKeyById:[nt(``)]}}function F(e,t){let n=e.idByValue.get(t);if(n!==void 0)return n;let r=e.valueById.length;return e.idByValue.set(t,r),e.valueById.push(t),r}function gt(e,t){let n=e.valueById[t];if(n===void 0)throw Error(`Unknown segment ID: ${String(t)}`);return n}var _t=Symbol(`pathStorePreparedInputKind`);function vt(e,t){return e[_t]=t,e}function yt(e){return{basename:e.basename,depth:e.segments.length,isDirectory:e.isDirectory,path:e.path,segments:e.segments}}function bt(e,t,n){return n==="default"?lt(e,t):n(yt(e),yt(t))}function xt(){return{depthAndFlags:We(0,3,1),nameId:0,parentId:0,subtreeNodeCount:1,visibleSubtreeCount:1}}function St(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return r;return n}function Ct(e){return e.isDirectory?e.segments.length:e.segments.length-1}function wt(e){return Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&typeof e.path==`string`&&Array.isArray(e.segments)&&typeof e.basename==`string`&&typeof e.isDirectory==`boolean`)}function I(e){return Array.isArray(e)&&e.every(e=>typeof e==`string`)}function Tt(e,t={}){return jt(e,t).map(e=>e.path)}function Et(e,t={}){let n=jt(e,t);return vt({paths:n.map(e=>e.path),preparedPaths:n},`prepared`)}function Dt(e){let t=e.length,n=!1;for(let r=0;r<t;r+=1){let t=e[r];if(t.length>0&&t.charCodeAt(t.length-1)===47){n=!0;break}}return vt({paths:e,presortedPaths:e,presortedPathsContainDirectories:n},`presorted`)}function Ot(e){let t=e,n=t.preparedPaths;if(t[_t]===`prepared`&&n!=null)return n;if(!wt(n))throw Error(`preparedInput must come from PathStore.prepareInput()`);return n}function kt(e){let t=e;return t[_t]===`presorted`&&t.presortedPaths!=null||I(t.presortedPaths)?t.presortedPaths:null}function At(e){let t=e;return typeof t.presortedPathsContainDirectories==`boolean`?t.presortedPathsContainDirectories:null}function jt(e,t={}){let n=ft(t),r=Qe(t);$e(r,`workload.inputFiles`,e.length);let i=N(r,`store.preparePathEntries.parse`,()=>e.map(e=>mt(e)));return N(r,`store.preparePathEntries.sort`,()=>i.sort((e,t)=>bt(e,t,n.sort))),i}var Mt=class{constructor(e={}){i(this,`directories`,new Map),i(this,`directoryStack`,[0]),i(this,`presortedDirectoryNodeIds`,[]),i(this,`initialExpandedPathSet`,void 0),i(this,`createdDirectoriesAllExpanded`,!1),i(this,`createdDirectoryCount`,0),i(this,`lastPreparedPath`,null),i(this,`nodes`,[xt()]),i(this,`options`,void 0),i(this,`instrumentation`,void 0),i(this,`segmentSortKeyCache`,new Map),i(this,`segmentTable`,P()),i(this,`hasDeferredDirectoryIndexes`,!1),this.instrumentation=Qe(e),this.options=ft(e);let t=e.initialExpandedPaths??null;if(t==null||t.length===0)this.initialExpandedPathSet=null;else{let e=new Set,n=t.length;for(let r=0;r<n;r+=1){let n=t[r],i=n.length;e.add(i>0&&n.charCodeAt(i-1)===47?n.slice(0,i-1):n)}this.initialExpandedPathSet=e,this.createdDirectoriesAllExpanded=!0}this.directories.set(0,ke())}appendPaths(e){return N(this.instrumentation,`store.builder.appendPaths.parse`,()=>this.appendPreparedPaths(e.map(e=>mt(e))))}appendPreparedPaths(e,t=!0){return this.createdDirectoriesAllExpanded=!1,N(this.instrumentation,`store.builder.appendPreparedPaths`,()=>{for(let n of e)this.appendPreparedPath(n,t)}),this}appendPresortedPaths(e,t=null){return N(this.instrumentation,`store.builder.appendPresortedPaths`,()=>{if(t===!1){this.appendPresortedFilePaths(e);return}this.createdDirectoriesAllExpanded=!1;let n=null,r=0,i=this.nodes,a=this.segmentTable,o=a.idByValue,s=a.valueById,c=this.directoryStack,l=0,u=``,d=0;for(let t of e){if(n===t)throw Error(`Duplicate path: "${t}"`);let e=t.length>0&&t.charCodeAt(t.length-1)===47,a=e?t.length-1:t.length,f=0,p=0;if(n!=null){if(u.length>0&&t.length>u.length&&t.startsWith(u))f=d,p=u.length;else{let r=Math.min(a,n.length),i=!0;for(let e=0;e<r;e++){let r=t.charCodeAt(e);if(r!==n.charCodeAt(e)){i=!1;break}r===47&&(f++,p=e+1)}i&&e&&r===a&&n.length>a&&n.charCodeAt(a)===47&&(f++,p=a+1)}}l=f,r=f;let m=p,h=t.indexOf(`/`,m);for(;h>=0&&h<a;){let e=c[l];if(e===void 0)throw Error(`Directory stack underflow while building the path store`);r++;let n=t.slice(m,h),a=o.get(n);a===void 0&&(a=s.length,o.set(n,a),s.push(n));let u=i.length;i.push({depthAndFlags:We(r,0,1),nameId:a,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(t.slice(0,h)),l++,c[l]=u,m=h+1,h=t.indexOf(`/`,m)}if(e){if(m<a){let e=c[l];if(e===void 0)throw Error(`Unable to resolve directory parent for "${t}"`);r++;let n=t.slice(m,a),u=o.get(n);u===void 0&&(u=s.length,o.set(n,u),s.push(n));let d=i.length;i.push({depthAndFlags:We(r,0,1),nameId:u,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),l++,c[l]=d,m=a+1}let e=c[l];if(e===void 0)throw Error(`Unable to resolve directory node for "${t}"`);this.promoteDirectoryToExplicit(e,t)}else{let e=c[l];if(e===void 0)throw Error(`Unable to resolve file parent for "${t}"`);let n=t.slice(m),a=o.get(n);a===void 0&&(a=s.length,o.set(n,a),s.push(n)),i.push({depthAndFlags:We(r+1,0),nameId:a,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1})}m!==u.length&&(u=t.substring(0,m),d=r),n=t}c.length=l+1,n!=null&&(this.lastPreparedPath=mt(n)),this.hasDeferredDirectoryIndexes=!0}),this}appendPresortedFilePaths(e){let t=null,n=0,r=this.nodes,i=this.segmentTable,a=i.idByValue,o=i.valueById,s=this.directoryStack,c=0,l=``,u=0;for(let i of e){if(t===i)throw Error(`Duplicate path: "${i}"`);let e=i.length,d=0,f=0;if(t!=null){if(l.length>0&&i.length>l.length&&i.startsWith(l))d=u,f=l.length;else{let n=Math.min(e,t.length);for(let e=0;e<n;e++){let n=i.charCodeAt(e);if(n!==t.charCodeAt(e))break;n===47&&(d++,f=e+1)}}}c=d,n=d;let p=f,m=i.indexOf(`/`,p);for(;m>=0;){let e=s[c];if(e===void 0)throw Error(`Directory stack underflow while building the path store`);n++;let t=i.slice(p,m),l=a.get(t);l===void 0&&(l=o.length,a.set(t,l),o.push(t));let u=r.length;r.push({depthAndFlags:We(n,0,1),nameId:l,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(i.slice(0,m)),this.presortedDirectoryNodeIds.push(u),c++,s[c]=u,p=m+1,m=i.indexOf(`/`,p)}let h=s[c];if(h===void 0)throw Error(`Unable to resolve file parent for "${i}"`);let g=i.slice(p),_=a.get(g);_===void 0&&(_=o.length,a.set(g,_),o.push(g)),r.push({depthAndFlags:We(n+1,0),nameId:_,parentId:h,subtreeNodeCount:1,visibleSubtreeCount:1}),p!==l.length&&(l=i.substring(0,p),u=n),t=i}s.length=c+1,t!=null&&(this.lastPreparedPath=mt(t)),this.hasDeferredDirectoryIndexes=!0}finish(e={}){let t=e.skipSubtreeCountPass===!0;return this.hasDeferredDirectoryIndexes?(N(this.instrumentation,`store.builder.buildDirectoryIndexes`,()=>this.buildPresortedFinish(t)),this.hasDeferredDirectoryIndexes=!1):t||N(this.instrumentation,`store.builder.computeSubtreeCounts`,()=>this.computeSubtreeCounts(0)),{directories:this.directories,nodes:this.nodes,options:this.options,rootId:0,segmentTable:this.segmentTable,presortedDirectoryNodeIds:this.presortedDirectoryNodeIds.length>0?this.presortedDirectoryNodeIds:null}}didMatchAllInitialExpandedPaths(){return this.createdDirectoriesAllExpanded&&this.initialExpandedPathSet!=null&&this.createdDirectoryCount===this.initialExpandedPathSet.size}appendPreparedPath(e,t){if(this.hasDeferredDirectoryIndexes&&=(this.buildDirectoryIndexes(),!1),this.lastPreparedPath!=null){if(e.path===this.lastPreparedPath.path)throw Error(`Duplicate path: "${e.path}"`);if(t&&(this.options.sort==="default"?ut(this.lastPreparedPath,e,this.segmentSortKeyCache):bt(this.lastPreparedPath,e,this.options.sort))>0)throw Error(`Builder input must be sorted before appendPaths(): "${e.path}"`)}let n=this.lastPreparedPath,r=Ct(e),i=n==null?0:Ct(n),a=n==null?0:St(n.segments,e.segments),o=Math.min(a,r,i);this.directoryStack.length=o+1;for(let n=o;n<r;n++){let r=this.directoryStack[this.directoryStack.length-1];if(r===void 0)throw Error(`Directory stack underflow while building the path store`);let i=t?this.getOrCreateDirectoryChild(r,e.segments[n]):this.createDirectoryChild(r,e.segments[n]);this.directoryStack.push(i)}if(e.isDirectory){let t=this.directoryStack[this.directoryStack.length-1];if(t===void 0)throw Error(`Unable to resolve directory node for "${e.path}"`);this.promoteDirectoryToExplicit(t,e.path),this.lastPreparedPath=e;return}let s=this.directoryStack[this.directoryStack.length-1];if(s===void 0)throw Error(`Unable to resolve file parent for "${e.path}"`);t?this.createFileChild(s,e.basename,e.path):this.createFileChildUnchecked(s,e.basename),this.lastPreparedPath=e}recordCreatedDirectoryPath(e){this.createdDirectoriesAllExpanded&&this.initialExpandedPathSet!=null&&(this.createdDirectoryCount+=1,this.initialExpandedPathSet.has(e)||(this.createdDirectoriesAllExpanded=!1))}createFileChild(e,t,n){let r=F(this.segmentTable,t),i=this.getDirectoryIndex(e),a=i.childIdByNameId;if(a!=null&&a.get(r)!==void 0)throw Error(`Path collides with an existing entry: "${n}"`);let o=this.nodes[e];if(o===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let s=this.nodes.length;return this.nodes.push({depthAndFlags:We(Ge(o)+1,0),nameId:r,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),a?.set(r,s),Ne(i,s),s}createFileChildUnchecked(e,t){let n=F(this.segmentTable,t),r=this.getDirectoryIndex(e),i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:We(Ge(i)+1,0),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),Ne(r,a),a}getOrCreateDirectoryChild(e,t){let n=F(this.segmentTable,t),r=this.getDirectoryIndex(e);if(r.childIdByNameId!=null){let e=r.childIdByNameId.get(n);if(e!==void 0){let n=this.nodes[e];if(n!=null&&!j(n))throw Error(`Path collides with an existing file while creating directory "${t}"`);return e}}let i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:We(Ge(i)+1,0,1),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),Ne(r,a),this.directories.set(a,ke()),a}createDirectoryChild(e,t){let n=F(this.segmentTable,t),r=this.getDirectoryIndex(e),i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:We(Ge(i)+1,0,1),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),Ne(r,a),this.directories.set(a,ke()),a}promoteDirectoryToExplicit(e,t){let n=this.nodes[e];if(n===void 0)throw Error(`Unknown directory node ID: ${String(e)}`);if(!j(n))throw Error(`Path is not a directory: "${t}"`);if(M(n,1))throw Error(`Duplicate path: "${t}"`);Je(n,1)}getDirectoryIndex(e){let t=this.directories.get(e);if(t!==void 0)return t;throw Error(`Unknown directory child index for node ${String(e)}`)}buildPresortedFinish(e){let t=this.nodes,n=this.directories;n.set(0,Ae());let r=-1,i=null;for(let e=1;e<t.length;e++){let a=t[e];if(a==null)continue;if(j(a)){let t=Ae();n.set(e,t),r=e,i=t}let o;a.parentId===r?o=i:(o=n.get(a.parentId),r=a.parentId,i=o??null),o?.childIds.push(e)}if(!e)for(let e=t.length-1;e>=1;e--){let n=t[e];if(n==null)continue;let r=t[n.parentId];r!=null&&(r.subtreeNodeCount+=n.subtreeNodeCount,r.visibleSubtreeCount+=n.visibleSubtreeCount)}}buildDirectoryIndexes(){let e=this.nodes;for(let t=1;t<e.length;t++){let n=e[t];if(n==null)continue;j(n)&&this.directories.set(t,ke());let r=this.directories.get(n.parentId);r!=null&&(r.childIdByNameId!=null&&r.childIdByNameId.set(n.nameId,t),Ne(r,t))}}computeSubtreeCounts(e){let t=this.nodes[e];if(t===void 0)throw Error(`Unknown node ID: ${String(e)}`);if(!j(t))return t.subtreeNodeCount=1,t.visibleSubtreeCount=1,1;let n=this.getDirectoryIndex(e),r=1;for(let e of n.childIds)r+=this.computeSubtreeCounts(e);return Fe(this.nodes,n),t.subtreeNodeCount=r,t.visibleSubtreeCount=r,r}};function Nt(e,t=`closed`,n=null){let r=Ft(t);return{activeNodeCount:e.nodes.length-1,collapsedDirectoryIds:new Set,collapseNewDirectoriesByDefault:!1,defaultExpansion:r,directoriesOpenByDefault:r===`open`,hasCollapsedDirectoryOverrides:!1,directoryLoadInfoById:new Map,expandedDirectoryIds:new Set,instrumentation:n,listeners:new Map,pathCacheByNodeId:new Map([[e.rootId,{path:``,version:0}]]),pathCacheVersion:0,snapshot:e,transactionStack:[]}}function Pt(){return{affectedAncestorIds:new Set,affectedNodeIds:new Set,events:[]}}function Ft(e){if(typeof e!=`number`)return e;if(!Number.isInteger(e)||e<0)throw Error(`initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`);return e}function It(e,t){return M(t,2)||e.defaultExpansion===`open`?!0:e.defaultExpansion!==`closed`&&Ge(t)<=e.defaultExpansion}function Lt(e,t,n=e.snapshot.nodes[t]){return n==null||!j(n)?!1:e.directoriesOpenByDefault&&!e.hasCollapsedDirectoryOverrides?!0:e.collapsedDirectoryIds.has(t)?!1:e.expandedDirectoryIds.has(t)?!0:It(e,n)}function Rt(e,t,n,r=e.snapshot.nodes[t]){if(r==null||!j(r))return;let i=It(e,r);if(n){if(i){e.collapsedDirectoryIds.delete(t),e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0;return}e.expandedDirectoryIds.add(t)}else i?(e.collapsedDirectoryIds.add(t),e.hasCollapsedDirectoryOverrides=!0):e.expandedDirectoryIds.delete(t)}function zt(e,t){let n=e.directoryLoadInfoById.get(t);if(n!=null)return n;let r={activeAttemptId:null,errorMessage:null,nextAttemptId:1,state:`loaded`};return e.directoryLoadInfoById.set(t,r),r}function Bt(e,t){return e.directoryLoadInfoById.get(t)?.state??`loaded`}function Vt(e,t){let n=zt(e,t);if(n.state===`loading`&&n.activeAttemptId!=null)return{attemptId:n.activeAttemptId,nodeId:t,reused:!0};let r=n.nextAttemptId;return n.activeAttemptId=r,n.errorMessage=null,n.nextAttemptId+=1,n.state=`loading`,{attemptId:r,nodeId:t,reused:!1}}function Ht(e,t){let n=zt(e,t);n.activeAttemptId=null,n.errorMessage=null,n.state=`unloaded`}function Ut(e,t,n){let r=e.directoryLoadInfoById.get(t);return r==null||r.activeAttemptId!==n?!1:(r.activeAttemptId=null,r.errorMessage=null,r.state=`loaded`,!0)}function Wt(e,t,n){return e.directoryLoadInfoById.get(t)?.activeAttemptId===n}function Gt(e,t,n,r){let i=e.directoryLoadInfoById.get(t);return i==null||i.activeAttemptId!==n?!1:(i.activeAttemptId=null,i.errorMessage=r??null,i.state=`error`,!0)}function Kt(e,t){e.directoryLoadInfoById.delete(t)}function qt(e,t,n){let r=n,i=e.listeners.get(t);return i==null?e.listeners.set(t,new Set([r])):i.add(r),()=>{let n=e.listeners.get(t);n!=null&&(n.delete(r),n.size===0&&e.listeners.delete(t))}}function Jt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`add`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Yt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`remove`,path:e.path,projectionChanged:e.projectionChanged,recursive:e.recursive,visibleCountDelta:null}}function Xt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,from:e.from,operation:`move`,projectionChanged:e.projectionChanged,to:e.to,visibleCountDelta:null}}function Zt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`expand`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Qt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`collapse`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function $t(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`mark-directory-unloaded`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function en(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`begin-child-load`,path:e.path,projectionChanged:e.projectionChanged,reused:e.reused,visibleCountDelta:null}}function tn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:e.childEvents.some(e=>e.canonicalChanged),childEvents:e.childEvents,operation:`apply-child-patch`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function nn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`complete-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function rn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,errorMessage:e.errorMessage,operation:`fail-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function an(e){return{activeNodeCountAfter:e.activeNodeCountAfter,activeNodeCountBefore:e.activeNodeCountBefore,affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],cachedPathEntryCountAfter:e.cachedPathEntryCountAfter,cachedPathEntryCountBefore:e.cachedPathEntryCountBefore,canonicalChanged:!1,idsPreserved:e.idsPreserved,loadInfoEntryCountAfter:e.loadInfoEntryCountAfter,loadInfoEntryCountBefore:e.loadInfoEntryCountBefore,mode:e.mode,operation:`cleanup`,projectionChanged:e.projectionChanged,reclaimedCachedPathEntryCount:e.reclaimedCachedPathEntryCount,reclaimedLoadInfoEntryCount:e.reclaimedLoadInfoEntryCount,reclaimedNodeSlotCount:e.reclaimedNodeSlotCount,reclaimedSegmentCount:e.reclaimedSegmentCount,segmentCountAfter:e.segmentCountAfter,segmentCountBefore:e.segmentCountBefore,totalNodeSlotCountAfter:e.totalNodeSlotCountAfter,totalNodeSlotCountBefore:e.totalNodeSlotCountBefore,visibleCountDelta:null}}function on(e,t,n){return{...n,visibleCountDelta:_n(e)-t}}function sn(e,t){let n=_n(e),r=Pt();e.transactionStack.push(r);try{t()}catch(t){throw un(e,r,!1),t}un(e,r,!0,_n(e)-n)}function cn(e,t){let n=e.instrumentation;n==null?ln(e,t):N(n,`store.events.record`,()=>ln(e,t))}function ln(e,t){let n=e.transactionStack[e.transactionStack.length-1]??null;n==null?hn(e,t):(n.events.push(t),mn(n,t))}function un(e,t,n,r=null){if(e.transactionStack.pop()!==t)throw Error(`Transaction stack underflow`);if(!n)return;let i=e.transactionStack[e.transactionStack.length-1]??null;if(i!=null){let n=e.instrumentation;n==null?pn(i,t):N(n,`store.events.batch.merge`,()=>pn(i,t));return}let a=dn(t,r),o=e.instrumentation;o==null?hn(e,a):N(o,`store.events.batch.commit`,()=>hn(e,a))}function dn(e,t){return{affectedAncestorIds:[...e.affectedAncestorIds],affectedNodeIds:[...e.affectedNodeIds],canonicalChanged:e.events.some(e=>e.canonicalChanged),events:[...e.events],operation:`batch`,projectionChanged:e.events.some(e=>e.projectionChanged),visibleCountDelta:t}}function fn(e,t){for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n);for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n)}function pn(e,t){for(let n of t.events)e.events.push(n);fn(e,t)}function mn(e,t){for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n);for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n)}function hn(e,t){let n=e.instrumentation;n==null?gn(e,t):N(n,`store.events.emit`,()=>gn(e,t))}function gn(e,t){e.listeners.get(t.operation)?.forEach(e=>e(t)),e.listeners.get(`*`)?.forEach(e=>e(t))}function _n(e){return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount??0}function vn(e,t){if(e.snapshot.options.flattenEmptyDirectories!==!0)return null;let n=e.snapshot.nodes[t];if(n==null||!j(n)||M(n,2))return null;let r=e.snapshot.directories.get(t);if(r==null||r.childIds.length!==1)return null;let i=r.childIds[0];if(i==null)return null;let a=e.snapshot.nodes[i];return a==null||!j(a)?null:i}function yn(e,t){let n=t;for(;;){let t=vn(e,n);if(t==null)return n;n=t}}function bn(e,t){let n=[t],r=t;for(;;){let t=vn(e,r);if(t==null)return n;n.push(t),r=t}}function xn(e,t){let n=t==null?e.snapshot.rootId:An(e,t);return n==null?[]:Mn(e,n)}function Sn(e,t){let n=mt(t),r=n.isDirectory?n.segments:n.segments.slice(0,-1),i=qn(e,Kn(e,r)),{createdNodeIds:a,directoryId:o}=Nn(e,r),s=new Set(a),c=o;if(n.isDirectory){let n=z(e,o);if(M(n,1))throw Error(`Path already exists: "${t}"`);Je(n,1),e.pathCacheByNodeId.set(o,{path:t,version:e.pathCacheVersion}),s.add(o)}else c=Fn(e,o,n.basename),s.add(c);Dn(e,o);let l=qn(e,o);return Jt({affectedAncestorIds:kn(e,c),affectedNodeIds:[...s],path:t,projectionChanged:Jn(i,l)})}function Cn(e,t,n){let r=An(e,t);if(r==null)throw Error(`Path does not exist: "${t}"`);let i=z(e,r);if(M(i,2))throw Error(`The root node cannot be removed`);if(j(i)&&R(e,r).childIds.length>0&&n.recursive!==!0)throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);let a=i.parentId,o=qn(e,a),s=Wn(e,r);Rn(e,a,r,i.nameId),Gn(e,a),Dn(e,a);let c=qn(e,a);return Yt({affectedAncestorIds:kn(e,a),affectedNodeIds:s,path:t,projectionChanged:Jn(o,c),recursive:n.recursive===!0})}function wn(e,t,n,r){let i=An(e,t);if(i==null)throw Error(`Source path does not exist: "${t}"`);let a=z(e,i);if(M(a,2))throw Error(`The root node cannot be moved`);let o=r.collision??`error`,s=Hn(e,i,n),c=qn(e,a.parentId),l=qn(e,s.parentId),u=gt(e.snapshot.segmentTable,a.nameId),d=F(e.snapshot.segmentTable,s.basename);if(s.parentId===a.parentId&&u===s.basename)return null;if(j(a)&&Qn(e,i,s.parentId))throw Error(`Cannot move a directory into one of its descendants`);let f=je(e.snapshot.nodes,R(e,s.parentId)).get(d),p=s.existingNodeId??f??null;if(p!=null&&p!==i&&Un(e,p,o,Ke(a))===`skip`)return null;let m=a.parentId;Rn(e,m,i,a.nameId),a.parentId=s.parentId,a.nameId=d,e.pathCacheByNodeId.delete(i),Zn(e,i),Ln(e,s.parentId,i),Gn(e,m),e.pathCacheVersion++,Dn(e,m),s.parentId!==m&&Dn(e,s.parentId);let h=qn(e,m),g=qn(e,s.parentId);return Xt({affectedAncestorIds:[...new Set([...kn(e,m),...kn(e,s.parentId)])],affectedNodeIds:[i],from:t,projectionChanged:Yn([c,l],[h,g]),to:L(e,i)})}function Tn(e,t){let n=e.pathCacheByNodeId.get(t);return n!=null&&n.version===e.pathCacheVersion?n.path:null}function En(e,t,n){return e.pathCacheByNodeId.set(t,{path:n,version:e.pathCacheVersion}),n}function L(e,t){let n=z(e,t),r=Tn(e,t);if(r!=null)return r;if(M(n,2))return En(e,t,``);let i=L(e,n.parentId),a=gt(e.snapshot.segmentTable,n.nameId),o=i.length===0?a:`${i}${a}`;return En(e,t,j(n)?`${o}/`:o)}function Dn(e,t){let n=e.instrumentation;n==null?er(e,t):N(n,`store.recomputeCountsUpwardFrom`,()=>er(e,t))}function On(e,t){let n=[[t,0]],{nodes:r,directories:i}=e.snapshot;for(;n.length>0;){let t=n[n.length-1],a=t[0],o=r[a];if(o==null||!j(o)){$n(e,a,o,!0),n.pop();continue}let s=i.get(a);if(s==null||t[1]>=s.childIds.length){$n(e,a,o,!0),n.pop();continue}let c=s.childIds[t[1]++];n.push([c,0])}}function kn(e,t){let n=[],r=t;for(;r!=null;){let t=z(e,r);if(n.push(r),r===e.snapshot.rootId)break;r=t.parentId}return n}function An(e,t){if(t.length===0)return e.snapshot.rootId;let n=ht(t);return jn(e,n.segments,n.requiresDirectory)}function jn(e,t,n){let r=e.snapshot.rootId;for(let n of t){let t=e.snapshot.segmentTable.idByValue.get(n);if(t===void 0)return null;let i=R(e,r),a=je(e.snapshot.nodes,i).get(t);if(a===void 0)return null;r=a}let i=z(e,r);return n&&!j(i)?null:r}function R(e,t){let n=e.snapshot.directories.get(t);if(n===void 0)throw Error(`Unknown directory child index for node ${String(t)}`);return n}function z(e,t){let n=e.snapshot.nodes[t];if(n===void 0||M(n,4))throw Error(`Unknown node ID: ${String(t)}`);return n}function Mn(e,t){let n=e.snapshot.nodes[t];if(n===void 0||M(n,4))return[];if(!j(n))return[L(e,t)];if(R(e,t).childIds.length===0)return M(n,1)&&!M(n,2)?[L(e,t)]:[];let r=[],i=[{childIndex:0,nodeId:t}];for(;i.length>0;){let t=i[i.length-1];if(t==null)break;let n=e.snapshot.nodes[t.nodeId];if(n===void 0||M(n,4)){i.pop();continue}if(!j(n)){r.push(L(e,t.nodeId)),i.pop();continue}let a=R(e,t.nodeId);if(a.childIds.length===0){M(n,1)&&!M(n,2)&&r.push(L(e,t.nodeId)),i.pop();continue}let o=a.childIds[t.childIndex];o==null?i.pop():(t.childIndex++,i.push({childIndex:0,nodeId:o}))}return r}function Nn(e,t){let n=[],r=e.snapshot.rootId;for(let i of t){let t=F(e.snapshot.segmentTable,i),a=R(e,r),o=je(e.snapshot.nodes,a).get(t);if(o!==void 0){if(!j(z(e,o)))throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);r=o}else r=Pn(e,r,t),n.push(r)}return{createdNodeIds:n,directoryId:r}}function Pn(e,t,n){let r=z(e,t),i=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:We(Ge(r)+1,0,1),nameId:n,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),e.snapshot.directories.set(i,ke()),Ln(e,t,i),e.collapseNewDirectoriesByDefault&&(e.collapsedDirectoryIds.add(i),e.hasCollapsedDirectoryOverrides=!0),e.activeNodeCount++,i}function Fn(e,t,n){let r=F(e.snapshot.segmentTable,n),i=R(e,t);if(je(e.snapshot.nodes,i).has(r))throw Error(`Path already exists: "${nr(e,t,n)}"`);let a=z(e,t),o=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:We(Ge(a)+1,0),nameId:r,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),Ln(e,t,o),e.activeNodeCount++,o}function In(e,t,n){let r=0,i=t.childIds.length;for(;r<i;){let a=r+i>>>1,o=t.childIds[a];o==null||zn(e,n,o)<0?i=a:r=a+1}return r}function Ln(e,t,n){let r=R(e,t),i=z(e,n);je(e.snapshot.nodes,r).set(i.nameId,n),Ie(r,n,i.subtreeNodeCount,i.visibleSubtreeCount);let a=In(e,r,n);r.childIds.splice(a,0,n),Pe(r,a),Re(e.snapshot.nodes,r)}function Rn(e,t,n,r){let i=R(e,t),a=Me(i),o=a.get(n)??-1;je(e.snapshot.nodes,i).delete(r),a.delete(n);let s=e.snapshot.nodes[n];s!=null&&Ie(i,n,-s.subtreeNodeCount,-s.visibleSubtreeCount),o>=0&&(i.childIds.splice(o,1),Pe(i,o),Re(e.snapshot.nodes,i))}function zn(e,t,n){let r=e.snapshot.options.sort;return r==="default"?Bn(e,t,n):r(Vn(e,t),Vn(e,n))}function Bn(e,t,n){let r=z(e,t),i=z(e,n),a=j(r);if(a!==j(i))return a?-1:1;let o=it(dt(e.snapshot.segmentTable,r.nameId),dt(e.snapshot.segmentTable,i.nameId));if(o!==0)return o;let s=gt(e.snapshot.segmentTable,r.nameId),c=gt(e.snapshot.segmentTable,i.nameId);return s===c?t<n?-1:1:s<c?-1:1}function Vn(e,t){let n=z(e,t),r=L(e,t),i=j(n),a=i?r.slice(0,-1):r;return{basename:gt(e.snapshot.segmentTable,n.nameId),depth:Ge(n),isDirectory:i,path:r,segments:a.length===0?[]:a.split(`/`)}}function Hn(e,t,n){let r=z(e,t),i=An(e,n);if(i!=null){let t=z(e,i);if(j(t))return{basename:gt(e.snapshot.segmentTable,r.nameId),existingNodeId:null,parentId:i};let a=ht(n).segments;return{basename:a[a.length-1]??``,existingNodeId:i,parentId:t.parentId}}let a=ht(n),o=a.segments[a.segments.length-1]??``,s=a.segments.slice(0,-1),c=s.length===0?e.snapshot.rootId:jn(e,s,!0);if(c==null)throw Error(`Destination parent does not exist: "${n}"`);return{basename:o,existingNodeId:null,parentId:c}}function Un(e,t,n,r){if(n===`skip`)return`skip`;if(n===`error`)throw Error(`Destination already exists: "${L(e,t)}"`);let i=z(e,t);if(Ke(i)!==r)throw Error(`replace collision requires the same source and destination kinds`);if(j(i)&&R(e,t).childIds.length>0)throw Error(`replace collision does not support non-empty directories`);let a=i.parentId,o=i.nameId;return Wn(e,t),Rn(e,a,t,o),Gn(e,a),Dn(e,a),`handled`}function Wn(e,t){let n=[],r=[{nodeId:t,visitedChildren:!1}];for(;r.length>0;){let t=r.pop();if(t==null)break;let i=z(e,t.nodeId);if(t.visitedChildren||!j(i)){j(i)&&e.snapshot.directories.delete(t.nodeId),Je(i,4),e.pathCacheByNodeId.delete(t.nodeId),e.collapsedDirectoryIds.delete(t.nodeId)&&(e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0),e.expandedDirectoryIds.delete(t.nodeId),Kt(e,t.nodeId),e.activeNodeCount--,n.push(t.nodeId);continue}r.push({nodeId:t.nodeId,visitedChildren:!0});let a=R(e,t.nodeId);for(let e=a.childIds.length-1;e>=0;e--){let t=a.childIds[e];t!=null&&r.push({nodeId:t,visitedChildren:!1})}}return n}function Gn(e,t){let n=t;for(;n!=null;){let t=z(e,n);if(!j(t)||M(t,2)||R(e,n).childIds.length>0)return;Je(t,1),n=t.parentId===n?null:t.parentId}}function Kn(e,t){let n=e.snapshot.rootId;for(let r of t){let t=e.snapshot.segmentTable.idByValue.get(r);if(t==null)break;let i=je(e.snapshot.nodes,R(e,n)).get(t);if(i==null||!j(z(e,i)))break;n=i}return n}function qn(e,t){let n=Xn(e,t);if(n==null)return null;let r=yn(e,n),i=z(e,r),a=n===r?null:bn(e,n).map(t=>L(e,t));return JSON.stringify({flattenedSegmentPaths:a,hasChildren:R(e,r).childIds.length>0,path:L(e,r),terminalKind:Ke(i)})}function Jn(e,t){return Yn([e],[t])}function Yn(e,t){for(let n=0;n<e.length;n+=1){let r=e[n],i=t[n];if(r==null||i==null||r!==i)return!0}return!1}function Xn(e,t){let n=t;for(;n!=null;){let t=z(e,n);if(!j(t)||M(t,2))return null;if(!Lt(e,n,t))return n;n=t.parentId}return null}function Zn(e,t){let n=z(e,t);if(Ye(n,(t===e.snapshot.rootId?-1:Ge(z(e,n.parentId)))+1),!j(n))return;let r=R(e,t);for(let t of r.childIds)Zn(e,t)}function Qn(e,t,n){let r=n;for(;r!=null;){if(r===t)return!0;let n=z(e,r);if(r===e.snapshot.rootId)return!1;r=n.parentId}return!1}function $n(e,t,n=z(e,t),r=!1){let i=e.instrumentation;i==null?tr(e,t,n,r):N(i,`store.recomputeNodeCounts`,()=>tr(e,t,n,r))}function er(e,t){let n=t;for(;n!=null;){let t=z(e,n),r=t.subtreeNodeCount,i=t.visibleSubtreeCount;if($n(e,n,t),n===e.snapshot.rootId)return;let a=t.subtreeNodeCount-r,o=t.visibleSubtreeCount-i,s=t.parentId;(a!==0||o!==0)&&Ie(R(e,s),n,a,o),n=s}}function tr(e,t,n,r){if(!j(n)){n.subtreeNodeCount=1,n.visibleSubtreeCount=1;return}let i=R(e,t);if(r){let t=e.instrumentation;t==null?Fe(e.snapshot.nodes,i):N(t,`store.recomputeNodeCounts.rebuildChildAggregates`,()=>Fe(e.snapshot.nodes,i))}let a=1+i.totalChildSubtreeNodeCount,o=i.totalChildVisibleSubtreeCount;n.subtreeNodeCount=a,n.visibleSubtreeCount=M(n,2)?o:vn(e,t)==null?Lt(e,t,n)?1+o:1:o}function nr(e,t,n){let r=L(e,t);return r.length===0?n:`${r}${n}`}function rr(e){return e!=null&&!M(e,4)}function ir(e,t){let n=e.snapshot.nodes[t];return!rr(n)||!j(n)||M(n,2)?null:n}function ar(e){let t=0;for(let[n,r]of e.pathCacheByNodeId)r.version===e.pathCacheVersion&&rr(e.snapshot.nodes[n])&&(t+=1);return t}function or(e){return Math.max(0,e.valueById.length-1)}function sr(e){return{activeNodeCount:e.activeNodeCount,cachedPathEntryCount:ar(e),loadInfoEntryCount:e.directoryLoadInfoById.size,segmentCount:or(e.snapshot.segmentTable),totalNodeSlotCount:Math.max(0,e.snapshot.nodes.length-1)}}function cr(e,t,n,r){return{activeNodeCountAfter:r.activeNodeCount,activeNodeCountBefore:n.activeNodeCount,cachedPathEntryCountAfter:r.cachedPathEntryCount,cachedPathEntryCountBefore:n.cachedPathEntryCount,idsPreserved:t,loadInfoEntryCountAfter:r.loadInfoEntryCount,loadInfoEntryCountBefore:n.loadInfoEntryCount,mode:e,reclaimedCachedPathEntryCount:n.cachedPathEntryCount-r.cachedPathEntryCount,reclaimedLoadInfoEntryCount:n.loadInfoEntryCount-r.loadInfoEntryCount,reclaimedNodeSlotCount:n.totalNodeSlotCount-r.totalNodeSlotCount,reclaimedSegmentCount:n.segmentCount-r.segmentCount,segmentCountAfter:r.segmentCount,segmentCountBefore:n.segmentCount,totalNodeSlotCountAfter:r.totalNodeSlotCount,totalNodeSlotCountBefore:n.totalNodeSlotCount}}function lr(e){let t=[],n=[];for(let n of e.collapsedDirectoryIds)ir(e,n)!=null&&t.push(L(e,n));for(let t of e.expandedDirectoryIds)ir(e,t)!=null&&n.push(L(e,t));return{collapsedPaths:t,expandedPaths:n}}function ur(e){let t=[];for(let[n,r]of e.directoryLoadInfoById)ir(e,n)!=null&&Bt(e,n)!==`loaded`&&t.push({info:{activeAttemptId:null,errorMessage:r.errorMessage,nextAttemptId:r.nextAttemptId,state:r.state},path:L(e,n)});return t}function dr(e,t){e.collapsedDirectoryIds.clear(),e.hasCollapsedDirectoryOverrides=!1,e.expandedDirectoryIds.clear();for(let n of t.expandedPaths){let t=An(e,n);t!=null&&Rt(e,t,!0,z(e,t))}for(let n of t.collapsedPaths){let t=An(e,n);t!=null&&Rt(e,t,!1,z(e,t))}}function fr(e,t){e.directoryLoadInfoById.clear();for(let n of t){let t=An(e,n.path);t!=null&&ir(e,t)!=null&&e.directoryLoadInfoById.set(t,{activeAttemptId:null,errorMessage:n.info.errorMessage,nextAttemptId:n.info.nextAttemptId,state:n.info.state})}}function pr(e){e.pathCacheVersion+=1,e.pathCacheByNodeId.clear(),e.pathCacheByNodeId.set(e.snapshot.rootId,{path:``,version:e.pathCacheVersion})}function mr(e){let t=e.snapshot.segmentTable,n=P();for(let r of e.snapshot.nodes)rr(r)&&(r.nameId=M(r,2)?0:F(n,gt(t,r.nameId)));e.snapshot.segmentTable=n}function hr(e){for(let[t,n]of e.snapshot.directories){let r=e.snapshot.nodes[t];if(!rr(r)||!j(r)){e.snapshot.directories.delete(t);continue}let i=n.childIds.filter(n=>{let r=e.snapshot.nodes[n];return rr(r)&&r.parentId===t});n.childIds=i,n.childIdByNameId=new Map(i.map(t=>[z(e,t).nameId,t])),n.childPositionById=new Map(i.map((e,t)=>[e,t])),Fe(e.snapshot.nodes,n)}}function gr(e){let t=e.snapshot.nodes.length-1;for(;t>e.snapshot.rootId;){let n=e.snapshot.nodes[t];if(rr(n))break;--t}e.snapshot.nodes.length=t+1}function _r(e){let t=lr(e),n=ur(e);N(e.instrumentation,`store.cleanup.stable.clearPathCaches`,()=>pr(e)),N(e.instrumentation,`store.cleanup.stable.rebuildSegmentTable`,()=>mr(e)),N(e.instrumentation,`store.cleanup.stable.rebuildDirectoryIndexes`,()=>hr(e)),N(e.instrumentation,`store.cleanup.stable.trimTrailingRemovedNodeSlots`,()=>gr(e)),N(e.instrumentation,`store.cleanup.stable.restoreExpansionOverrides`,()=>dr(e,t)),N(e.instrumentation,`store.cleanup.stable.restoreDirectoryLoadInfos`,()=>fr(e,n)),N(e.instrumentation,`store.cleanup.stable.recomputeCounts`,()=>On(e,e.snapshot.rootId))}function vr(e){let t=lr(e),n=ur(e),r=N(e.instrumentation,`store.cleanup.aggressive.listPaths`,()=>xn(e)),i=Ze({...e.snapshot.options},e.instrumentation),a=N(e.instrumentation,`store.cleanup.aggressive.rebuildSnapshot`,()=>{let e=new Mt(i);return e.appendPaths(r),e.finish()});e.snapshot=a,e.activeNodeCount=a.nodes.length-1,e.pathCacheByNodeId=new Map([[a.rootId,{path:``,version:0}]]),e.pathCacheVersion=0,N(e.instrumentation,`store.cleanup.aggressive.restoreExpansionOverrides`,()=>dr(e,t)),N(e.instrumentation,`store.cleanup.aggressive.restoreDirectoryLoadInfos`,()=>fr(e,n)),N(e.instrumentation,`store.cleanup.aggressive.recomputeCounts`,()=>On(e,e.snapshot.rootId))}function yr(e){for(let t of e.directoryLoadInfoById.values())if(t.state===`loading`&&t.activeAttemptId!=null)return!0;return!1}function br(e,t){let n=sr(e);t===`stable`?N(e.instrumentation,`store.cleanup.stable`,()=>_r(e)):N(e.instrumentation,`store.cleanup.aggressive`,()=>vr(e));let r=sr(e);return cr(t,t===`stable`,n,r)}var xr=64;function Sr(e,t){let n=t+2;if(n<=e.length)return e;let r=e.length;for(;r<n;)r*=2;let i=new Int32Array(r);return i.fill(-1),i.set(e),i}function Cr(e){return z(e,e.snapshot.rootId).visibleSubtreeCount}function wr(e,t,n,r){let i=z(e,t.terminalNodeId),a=Math.max(1,i.visibleSubtreeCount);return Math.min(r-1,n+a-1)}function Tr(e,t,n,r){return{ancestorPaths:r,index:t.index,posInSet:t.posInSet,row:Wr(e,t.cursor),setSize:t.setSize,subtreeEndIndex:wr(e,t.cursor,t.index,n)}}function Er(e,t,n,r,i,a){let o=R(e,t),{childIndex:s,childVisibleIndex:c,localVisibleIndex:l}=A(e.snapshot.nodes,o,n),u=o.childIds[s];if(u==null)throw Error(`Visible index ${String(n)} is out of range`);return Dr(e,u,l,r+c,i+1,s,o.childIds.length,a)}function Dr(e,t,n,r,i,a,o,s){if(!j(z(e,t))){if(n===0)return{ancestors:s,cursor:{headNodeId:t,terminalNodeId:t,visibleDepth:i},index:r,posInSet:a,setSize:o};throw Error(`Visible index ${String(n)} is out of range for file`)}let c=Rr(e,t,i);if(n===0)return{ancestors:s,cursor:c,index:r,posInSet:a,setSize:o};let l=z(e,c.terminalNodeId);if(!j(l)||!Lt(e,c.terminalNodeId,l))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Er(e,c.terminalNodeId,n-1,r+1,c.visibleDepth,[...s,{cursor:c,index:r,posInSet:a,setSize:o}])}function Or(e,t){let n=Cr(e);if(t<0||t>=n)return null;let r=Er(e,e.snapshot.rootId,t,0,-1,[]),i=r.ancestors.map(t=>L(e,t.cursor.terminalNodeId)),a=null;return{ancestorPaths:i,get ancestorRows(){if(a!=null)return a;let t=[],i=[];for(let a of r.ancestors){let r=Tr(e,a,n,[...i]);t.push(r),i.push(r.row.path)}return a=t,a},index:r.index,posInSet:r.posInSet,row:Wr(e,r.cursor),setSize:r.setSize,subtreeEndIndex:wr(e,r.cursor,r.index,n)}}function kr(e,t,n){let r=e.instrumentation,i=Cr(e);if(i<=0||n<t)return[];let a=Math.max(0,Math.min(t,i-1)),o=Math.max(a,Math.min(n,i-1));if(r==null){if(a===0)return Ur(e,o+1);let t=[],n=Fr(e,a);for(let r=a;r<=o&&n!=null;r++){let r=Wr(e,n);t.push(r),n=Br(e,n)}return t}let s=[],c=0,l=0,u=N(r,`store.getVisibleSlice.selectFirstRow`,()=>Fr(e,a));for(let t=a;t<=o&&u!=null;t++){let t=N(r,`store.getVisibleSlice.materializeRow`,()=>Wr(e,u));s.push(t),t.isFlattened&&(c++,l+=t.flattenedSegments?.length??0),u=N(r,`store.getVisibleSlice.advanceCursor`,()=>Br(e,u))}return $e(r,`workload.visibleRowsRead`,s.length),$e(r,`workload.flattenedRowsRead`,c),$e(r,`workload.flattenedSegmentsRead`,l),s}function Ar(e,t=Cr(e)){let n=e.instrumentation;return n==null?Hr(e,t):N(n,`store.getVisibleTreeProjection`,()=>Hr(e,t))}function jr(e){return Vr(Ar(e))}function Mr(e,t){let n=An(e,t);if(n==null||n===e.snapshot.rootId||j(z(e,n))&&yn(e,n)!==n)return null;let r=0,i=n,{nodes:a,rootId:o}=e.snapshot;for(;i!==o;){let t=z(e,i).parentId,n=R(e,t),s=Me(n).get(i);if(s==null)throw Error(`Child ${String(i)} was not found in its parent index`);if(r+=Le(a,n,s),t!==o){let n=z(e,t),a=vn(e,t);if(!Lt(e,t,n)&&a!==i)return null;yn(e,t)===t&&(r+=1)}i=t}return r}function Nr(e,t){let n=An(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=z(e,n);if(!j(r))throw Error(`Path is not a directory: "${t}"`);return Lt(e,n,r)?null:(Rt(e,n,!0,r),Dn(e,n),Zt({affectedAncestorIds:kn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0}))}function Pr(e,t){let n=An(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=z(e,n);if(!j(r))throw Error(`Path is not a directory: "${t}"`);return Lt(e,n,r)?(Rt(e,n,!1,r),Dn(e,n),Qt({affectedAncestorIds:kn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0})):null}function Fr(e,t){return t<0||t>=Cr(e)?null:Ir(e,e.snapshot.rootId,t,-1)}function Ir(e,t,n,r){let i=R(e,t),a=e.instrumentation,{childIndex:o,localVisibleIndex:s}=a==null?A(e.snapshot.nodes,i,n):N(a,`store.getVisibleSlice.selectChildIndex`,()=>A(e.snapshot.nodes,i,n)),c=i.childIds[o];if(c!=null)return Lr(e,c,s,r+1);throw Error(`Visible index ${String(n)} is out of range`)}function Lr(e,t,n,r){if(!j(z(e,t))){if(n===0)return{headNodeId:t,terminalNodeId:t,visibleDepth:r};throw Error(`Visible index ${String(n)} is out of range for file`)}let i=Rr(e,t,r);if(n===0)return i;let a=z(e,i.terminalNodeId);if(!j(a)||!Lt(e,i.terminalNodeId,a))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Ir(e,i.terminalNodeId,n-1,i.visibleDepth)}function Rr(e,t,n){return j(z(e,t))?e.instrumentation==null?{headNodeId:t,terminalNodeId:yn(e,t),visibleDepth:n}:{headNodeId:t,terminalNodeId:N(e.instrumentation,`store.getVisibleSlice.flatten.resolveTerminalDirectory`,()=>yn(e,t)),visibleDepth:n}:{headNodeId:t,terminalNodeId:t,visibleDepth:n}}function zr(e,t){let n=z(e,t);if(!j(n))return!0;let r=n.parentId;return r===e.snapshot.rootId||vn(e,r)!==t}function Br(e,t){let n=z(e,t.terminalNodeId);if(j(n)){let r=R(e,t.terminalNodeId);if(Lt(e,t.terminalNodeId,n)&&r.childIds.length>0){let n=r.childIds[0];return n==null?null:Lr(e,n,0,t.visibleDepth+1)}}let r=t.terminalNodeId,i=t.visibleDepth;for(;;){let t=z(e,r);if(r===e.snapshot.rootId)return null;let n=t.parentId,a=R(e,n),o=Me(a).get(r)??-1;if(o<0)throw Error(`Child ${String(r)} was not found in its parent index`);let s=a.childIds[o+1]??null;if(s!=null)return Lr(e,s,0,i);zr(e,r)&&i--,r=n}}function Vr(e){let t=e.paths.length,n=Array(t);for(let r=0;r<t;r+=1){let t=e.getParentIndex(r);n[r]={index:r,parentPath:t>=0?e.paths[t]??null:null,path:e.paths[r]??``,posInSet:e.posInSetByIndex[r]??0,setSize:e.setSizeByIndex[r]??0}}return{getParentIndex:e.getParentIndex,rows:n,get visibleIndexByPath(){return e.visibleIndexByPath}}}function Hr(e,t){let n=Array(t),r=new Int32Array(t),i=new Int32Array(t),a=new Int32Array(t),o=new Int32Array(xr);o.fill(-1);let s=0,{nodes:c,directories:l,segmentTable:u}=e.snapshot,d=[[l.get(e.snapshot.rootId),0,-1,``]],f=e.snapshot.options.flattenEmptyDirectories,p=e.pathCacheByNodeId,m=e.pathCacheVersion,h=u.valueById;for(;d.length>0&&s<t;){let t=d[d.length-1],u=t[0];if(t[1]>=u.childIds.length){d.pop();continue}let g=t[1],_=u.childIds[t[1]++],v=c[_],y=t[2]+1,b=t[3];o=Sr(o,y);let x,S=_;if(j(v))S=f?yn(e,_):_,x=S===_?`${b}${h[v.nameId]}/`:L(e,S);else{let e=p.get(_);x=e!=null&&e.version===m?e.path:`${b}${h[v.nameId]}`}r[s]=o[y],n[s]=x,i[s]=g,a[s]=u.childIds.length,o[y+1]=s,s+=1;let C=c[S];C!=null&&j(C)&&Lt(e,S,C)&&d.push([l.get(S),0,y,x])}s<t&&(n.length=s);let g=r.subarray(0,s),_=i.subarray(0,s),v=a.subarray(0,s),y=null;return{getParentIndex(e){return e<0||e>=s?-1:g[e]??-1},paths:n,posInSetByIndex:_,setSizeByIndex:v,get visibleIndexByPath(){if(y==null){y=new Map;for(let e=0;e<s;e+=1)y.set(n[e]??``,e)}return y}}}function Ur(e,t){let n=Array(t),r=0,{nodes:i,directories:a,segmentTable:o}=e.snapshot,s=[[a.get(e.snapshot.rootId),0,-1]],c=o.valueById,l=e.snapshot.options.flattenEmptyDirectories,u=e.pathCacheByNodeId,d=e.pathCacheVersion;for(;s.length>0&&r<t;){let t=s[s.length-1],o=t[0];if(t[1]>=o.childIds.length){s.pop();continue}let f=o.childIds[t[1]++],p=i[f],m=t[2]+1;if(!j(p)){let t=u.get(f);n[r++]={depth:m,flattenedSegments:void 0,hasChildren:!1,id:f,isExpanded:!1,isFlattened:!1,isLoading:!1,kind:`file`,loadState:void 0,name:c[p.nameId],path:t!=null&&t.version===d?t.path:L(e,f)};continue}let h=l?yn(e,f):f,g={headNodeId:f,terminalNodeId:h,visibleDepth:m};n[r++]=Wr(e,g);let _=i[h];_!=null&&j(_)&&Lt(e,h,_)&&s.push([a.get(h),0,m])}return r<t&&(n.length=r),n}function Wr(e,t){let n=z(e,t.terminalNodeId),r=j(n)?Gr(e,t):null,i=L(e,t.terminalNodeId),a=gt(e.snapshot.segmentTable,n.nameId),o=j(n)&&R(e,t.terminalNodeId).childIds.length>0,s=t.headNodeId!==t.terminalNodeId,c=e.instrumentation,l=s?c==null?bn(e,t.headNodeId).map(n=>{let r=z(e,n);return{isTerminal:n===t.terminalNodeId,name:gt(e.snapshot.segmentTable,r.nameId),nodeId:n,path:L(e,n)}}):N(c,`store.getVisibleSlice.flatten.collectSegments`,()=>bn(e,t.headNodeId).map(n=>{let r=z(e,n);return{isTerminal:n===t.terminalNodeId,name:gt(e.snapshot.segmentTable,r.nameId),nodeId:n,path:L(e,n)}})):void 0;return{depth:t.visibleDepth,flattenedSegments:l,hasChildren:o,id:t.terminalNodeId,isExpanded:j(n)&&Lt(e,t.terminalNodeId,n),isFlattened:s,isLoading:r===`loading`,kind:j(n)?`directory`:`file`,loadState:r==null||r===`loaded`?void 0:r,name:a,path:i}}function Gr(e,t){if(t.headNodeId===t.terminalNodeId)return Bt(e,t.terminalNodeId);let n=bn(e,t.headNodeId),r=!1,i=!1;for(let t of n){let n=Bt(e,t);if(n===`loading`)return`loading`;n===`error`?i=!0:n===`unloaded`&&(r=!0)}return i?`error`:r?`unloaded`:`loaded`}var Kr=8;function qr(e){let{nodes:t,directories:n,rootId:r,options:i}=e,a=t.length,o=new Int32Array(a),s=new Int32Array(a),c=new Int32Array(a),l=new Int32Array(a),u=new Int32Array(a),d=new Int32Array(a),f=new Int32Array(a);for(let e=0;e<a;e+=1){let n=t[e];n!=null&&(o[e]=n.parentId,s[e]=n.nameId,c[e]=n.depthAndFlags,l[e]=n.subtreeNodeCount,u[e]=n.visibleSubtreeCount)}let p=0;for(let e of n.values())p+=e.childIds.length;let m=new Int32Array(p),h=0;for(let[e,t]of n){let n=t.childIds;d[e]=h,f[e]=n.length;for(let e=0;e<n.length;e+=1)m[h]=n[e],h+=1}return{nodeCount:a,rootId:r,flattenEmptyDirectories:i.flattenEmptyDirectories===!0,parentId:o,nameId:s,depthAndFlags:c,subtreeNodeCount:l,visibleSubtreeCount:u,childStart:d,childCount:f,childIdsFlat:m}}function Jr(e){let{nodeCount:t,rootId:n,flattenEmptyDirectories:r,depthAndFlags:i,subtreeNodeCount:a,visibleSubtreeCount:o,childStart:s,childCount:c,childIdsFlat:l}=e;for(let e=t-1;e>=1;--e){if((i[e]&Kr)===0)continue;let t=s[e],n=c[e],u=0,d=0;for(let e=0;e<n;e+=1){let n=l[t+e];u+=a[n],d+=o[n]}a[e]=1+u;let f;f=r&&n===1?(i[l[t]]&Kr)===0?1+d:d:1+d,o[e]=f}let u=s[n],d=c[n],f=0,p=0;for(let e=0;e<d;e+=1){let t=l[u+e];f+=a[t],p+=o[t]}a[n]=1+f,o[n]=p}var B;function Yr(e){let{directories:t,nodes:n,options:r,rootId:i,presortedDirectoryNodeIds:a}=e.snapshot,o=r.flattenEmptyDirectories===!0,s=e=>{let r=n[e];if(r==null||!j(r))return;let i=t.get(e);if(i==null)throw Error(`Unknown directory child index for node ${String(e)}`);let a=i.childIds,s=a.length,c=0,l=0;for(let e=0;e<s;e++){let t=a[e];if(t==null)continue;let r=n[t];c+=r.subtreeNodeCount,l+=r.visibleSubtreeCount}i.totalChildSubtreeNodeCount=c,i.totalChildVisibleSubtreeCount=l,s>=128&&Re(n,i),r.subtreeNodeCount=1+c;let u;if(o&&s===1){let e=n[a[0]];u=e!=null&&j(e)?l:1+l}else u=1+l;r.visibleSubtreeCount=u};if(a!=null)for(let e=a.length-1;e>=0;e--)s(a[e]);else for(let e=n.length-1;e>=1;e--)s(e);let c=n[i],l=t.get(i);if(c==null||l==null)return;let u=l.childIds,d=0,f=0;for(let e=0;e<u.length;e++){let t=u[e];if(t==null)continue;let r=n[t];d+=r.subtreeNodeCount,f+=r.visibleSubtreeCount}l.totalChildSubtreeNodeCount=d,l.totalChildVisibleSubtreeCount=f,Re(n,l),c.subtreeNodeCount=1+d,c.visibleSubtreeCount=f}function Xr(e){let{directories:t,nodes:n,rootId:r}=e.snapshot,i=qr(e.snapshot);Jr(i);let a=i.subtreeNodeCount,o=i.visibleSubtreeCount;for(let e=0;e<n.length;e+=1){let t=n[e];t!=null&&(t.subtreeNodeCount=a[e],t.visibleSubtreeCount=o[e])}for(let[e,i]of t){let t=i.childIds,a=t.length,o=0,s=0;for(let e=0;e<a;e++){let r=t[e];if(r==null)continue;let i=n[r];o+=i.subtreeNodeCount,s+=i.visibleSubtreeCount}i.totalChildSubtreeNodeCount=o,i.totalChildVisibleSubtreeCount=s,(e===r||a>=128)&&Re(n,i)}}function Zr(e){return e.initialExpansion===`open`&&(e.initialExpandedPaths==null||e.initialExpandedPaths.length===0)}var Qr=(B=new WeakMap,class e{constructor(e={}){f(this,B,void 0);let t=Qe(e),n=N(t,`store.builder.create`,()=>new Mt(e));if(e.preparedInput!=null){let t=kt(e.preparedInput);t==null?n.appendPreparedPaths(Ot(e.preparedInput),!1):n.appendPresortedPaths(t,At(e.preparedInput))}else{let r=e.paths??[];e.presorted===!0?n.appendPaths(r):n.appendPreparedPaths(N(t,`store.preparePathEntries`,()=>jt(r,e)))}let r=N(t,`store.builder.finish`,()=>n.finish({skipSubtreeCountPass:!0})),i=N(t,`store.state.detectAllDirectoriesExpanded`,()=>(e.initialExpansion??`closed`)===`closed`&&n.didMatchAllInitialExpandedPaths());h(B,this,N(t,`store.state.create`,()=>Nt(r,i?`open`:e.initialExpansion??`closed`,t))),i&&(p(B,this).collapseNewDirectoriesByDefault=!0);let a=i?p(B,this).snapshot.directories.size-1:N(t,`store.state.initializeExpandedPaths`,()=>this.initializeExpandedPaths(e.initialExpandedPaths));i||Zr(e)||(e.initialExpansion??`closed`)===`closed`&&a===p(B,this).snapshot.directories.size-1||(e.initialExpandedPaths?.length??0)>0&&N(t,`store.state.checkAllDirectoriesExpanded`,()=>this.hasAllDirectoriesExpanded())?e.useSoaCountSweep===!0?N(t,`store.state.initializeOpenVisibleCountsViaSoa`,()=>Xr(p(B,this))):N(t,`store.state.initializeOpenVisibleCounts`,()=>Yr(p(B,this))):N(t,`store.state.recomputeCounts`,()=>On(p(B,this),p(B,this).snapshot.rootId))}static preparePaths(e,t={}){return Tt(e,t)}static prepareInput(e,t={}){return Et(e,t)}static preparePresortedInput(e){return Dt(e)}list(e){return N(p(B,this).instrumentation,`store.list`,()=>xn(p(B,this),e))}add(e){N(p(B,this).instrumentation,`store.add`,()=>{let t=Cr(p(B,this));cn(p(B,this),on(p(B,this),t,Sn(p(B,this),e)))})}remove(e,t={}){N(p(B,this).instrumentation,`store.remove`,()=>{let n=Cr(p(B,this));cn(p(B,this),on(p(B,this),n,Cn(p(B,this),e,t)))})}move(e,t,n={}){N(p(B,this).instrumentation,`store.move`,()=>{let r=Cr(p(B,this)),i=wn(p(B,this),e,t,n);i!=null&&cn(p(B,this),on(p(B,this),r,i))})}batch(e){sn(p(B,this),()=>{if(typeof e==`function`)e(this);else for(let t of e)switch(t.type){case`add`:this.add(t.path);break;case`remove`:this.remove(t.path,{recursive:t.recursive});break;case`move`:this.move(t.from,t.to,{collision:t.collision})}})}getVisibleCount(){return N(p(B,this).instrumentation,`store.getVisibleCount`,()=>Cr(p(B,this)))}getVisibleSlice(e,t){return N(p(B,this).instrumentation,`store.getVisibleSlice`,()=>kr(p(B,this),e,t))}getVisibleRowContext(e){return N(p(B,this).instrumentation,`store.getVisibleRowContext`,()=>Or(p(B,this),e))}getVisibleTreeProjection(){return jr(p(B,this))}getVisibleTreeProjectionData(e){return Ar(p(B,this),e)}getVisibleIndex(e){return N(p(B,this).instrumentation,`store.getVisibleIndex`,()=>Mr(p(B,this),e))}getPathInfo(e){return N(p(B,this).instrumentation,`store.getPathInfo`,()=>{let t=An(p(B,this),e);if(t==null)return null;let n=z(p(B,this),t);return{depth:Ge(n),kind:j(n)?`directory`:`file`,path:L(p(B,this),t)}})}isExpanded(e){return N(p(B,this).instrumentation,`store.isExpanded`,()=>{let t=this.requireDirectoryNodeId(e),n=z(p(B,this),t);return Lt(p(B,this),t,n)})}expand(e){N(p(B,this).instrumentation,`store.expand`,()=>{let t=Cr(p(B,this)),n=Nr(p(B,this),e);n!=null&&cn(p(B,this),on(p(B,this),t,n))})}collapse(e){N(p(B,this).instrumentation,`store.collapse`,()=>{let t=Cr(p(B,this)),n=Pr(p(B,this),e);n!=null&&cn(p(B,this),on(p(B,this),t,n))})}on(e,t){return qt(p(B,this),e,t)}getDirectoryLoadState(e){let t=this.requireDirectoryNodeId(e);return Bt(p(B,this),t)}markDirectoryUnloaded(e){N(p(B,this).instrumentation,`store.markDirectoryUnloaded`,()=>{let t=this.requireDirectoryNodeId(e);if(R(p(B,this),t).childIds.length>0)throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);let n=Cr(p(B,this));Ht(p(B,this),t),cn(p(B,this),on(p(B,this),n,$t({affectedAncestorIds:kn(p(B,this),t),affectedNodeIds:[t],path:e,projectionChanged:this.isDirectoryProjectionVisible(t)})))})}beginChildLoad(e){return N(p(B,this).instrumentation,`store.beginChildLoad`,()=>{let t=this.requireDirectoryNodeId(e),n=Cr(p(B,this)),r=Vt(p(B,this),t);return cn(p(B,this),on(p(B,this),n,en({affectedAncestorIds:kn(p(B,this),t),affectedNodeIds:[t],attemptId:r.attemptId,path:e,projectionChanged:this.isDirectoryProjectionVisible(t),reused:r.reused}))),r})}applyChildPatch(e,t){return N(p(B,this).instrumentation,`store.applyChildPatch`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null||Bt(p(B,this),n)!==`loading`||!Wt(p(B,this),n,e.attemptId))return!1;let r=L(p(B,this),n);this.validateChildPatch(r,t);let i=Cr(p(B,this)),a=[];for(let e of t.operations){$r(r,e);let t=Cr(p(B,this));switch(e.type){case`add`:a.push(on(p(B,this),t,Sn(p(B,this),e.path)));break;case`remove`:a.push(on(p(B,this),t,Cn(p(B,this),e.path,{recursive:e.recursive})));break;case`move`:{let n=wn(p(B,this),e.from,e.to,{collision:e.collision});n!=null&&a.push(on(p(B,this),t,n));break}}}let o=a.some(e=>e.projectionChanged)||this.isDirectoryProjectionVisible(n);return cn(p(B,this),on(p(B,this),i,tn({affectedAncestorIds:kn(p(B,this),n),affectedNodeIds:[n],attemptId:e.attemptId,childEvents:a,path:L(p(B,this),n),projectionChanged:o}))),!0})}completeChildLoad(e){return N(p(B,this).instrumentation,`store.completeChildLoad`,()=>{let t=this.resolveActiveDirectoryNodeId(e.nodeId);if(t==null)return!1;let n=Cr(p(B,this)),r=Ut(p(B,this),t,e.attemptId);return cn(p(B,this),on(p(B,this),n,nn({affectedAncestorIds:kn(p(B,this),t),affectedNodeIds:[t],attemptId:e.attemptId,path:L(p(B,this),t),projectionChanged:this.isDirectoryProjectionVisible(t),stale:!r}))),r})}failChildLoad(e,t){return N(p(B,this).instrumentation,`store.failChildLoad`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null)return!1;let r=Cr(p(B,this)),i=Gt(p(B,this),n,e.attemptId,t);return cn(p(B,this),on(p(B,this),r,rn({affectedAncestorIds:kn(p(B,this),n),affectedNodeIds:[n],attemptId:e.attemptId,errorMessage:t,path:L(p(B,this),n),projectionChanged:this.isDirectoryProjectionVisible(n),stale:!i}))),i})}cleanup(e={}){return N(p(B,this).instrumentation,`store.cleanup`,()=>{if(p(B,this).transactionStack.length>0)throw Error(`Cleanup cannot run during an open batch or transaction.`);if(yr(p(B,this)))throw Error(`Cleanup cannot run while directory loads are active.`);let t=Cr(p(B,this)),n=br(p(B,this),e.mode??`stable`);return cn(p(B,this),on(p(B,this),t,an({...n,affectedAncestorIds:[],affectedNodeIds:[],projectionChanged:n.idsPreserved===!1}))),n})}getNodeCount(){return p(B,this).activeNodeCount}initializeExpandedPaths(e){if(e==null||e.length===0)return 0;let t=0,n=[],r=[],i=0,a=null,o=p(B,this).snapshot.segmentTable,s=o.valueById,c=p(B,this).snapshot.nodes,l=new Map;for(let u of e){a!=null&&u<a&&(a=null,i=0,n.length=0,r.length=0);let e=u.length>0&&u.charCodeAt(u.length-1)===47?u.length-1:u.length;if(e===0){a=u,i=e,n.length=0,r.length=0;continue}let d=0,f=0;if(a!=null){let t=Math.min(e,i),n=!0;for(let e=0;e<t;e+=1){let t=u.charCodeAt(e);if(t!==a.charCodeAt(e)){n=!1;break}t===47&&(d+=1,f=e+1)}n&&(t===i&&e>t&&u.charCodeAt(t)===47?(d+=1,f=t+1):t===e&&i>t&&a.charCodeAt(t)===47&&(d+=1,f=e+1)),d=Math.min(d,r.length)}let m=d===0?p(B,this).snapshot.rootId:r[d-1]??p(B,this).snapshot.rootId,h=d,g=!0,_=f;for(;_<=e;){let t=u.indexOf(`/`,_),i=t===-1||t>e?e:t,a=u.slice(_,i),f=R(p(B,this),m).childIds,v=h===d?n[h]??0:0,y=v,b,x=l.get(a)??nt(a);l.set(a,x);let S=(e,t)=>{for(y=e;y<t;y+=1){let e=f[y],t=c[e],n=s[t.nameId];if(n===a)return b=e,!0;let r=it(dt(o,t.nameId),x);if(r>0||r===0&&n>a)return!1}return!1};if(!S(v,f.length)&&v>0&&S(0,v),b===void 0||!j(z(p(B,this),b))){g=!1;break}if(n[h]=y,r[h]=b,m=b,h+=1,i===e)break;_=i+1}if(a=u,i=e,n.length=h,r.length=h,!g)a=null,i=0,n.length=0,r.length=0;else for(let e=d;e<h;e+=1){let n=r[e];if(n==null)continue;let i=z(p(B,this),n);Lt(p(B,this),n,i)||(Rt(p(B,this),n,!0,i),t+=1)}}return t}hasAllDirectoriesExpanded(){for(let e of p(B,this).snapshot.directories.keys()){if(e===p(B,this).snapshot.rootId)continue;let t=z(p(B,this),e);if(!Lt(p(B,this),e,t))return!1}return!0}requireDirectoryNodeId(e){let t=An(p(B,this),e);if(t==null)throw Error(`Path does not exist: "${e}"`);if(!j(z(p(B,this),t)))throw Error(`Path is not a directory: "${e}"`);return t}resolveActiveDirectoryNodeId(e){try{if(!j(z(p(B,this),e)))throw Error(`Node is not a directory: ${String(e)}`);return e}catch{return null}}isDirectoryProjectionVisible(e){let t=e;for(;t!==p(B,this).snapshot.rootId;){let e=z(p(B,this),t).parentId;if(e!==p(B,this).snapshot.rootId){let n=z(p(B,this),e),r=vn(p(B,this),e);if(!Lt(p(B,this),e,n)&&r!==t)return!1}t=e}return!0}validateChildPatch(t,n){new e({paths:this.list(t),presorted:!0,sort:p(B,this).snapshot.options.sort}).batch(n.operations)}});function $r(e,t){switch(t.type){case`add`:case`remove`:if(!t.path.startsWith(e)||t.path===e)throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);break;case`move`:if(!t.from.startsWith(e)||!t.to.startsWith(e)||t.from===e||t.to===e)throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`)}}var ei=e=>e.startsWith(`f::`)?e.slice(3):e;function ti(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function ni(e,t){return e===``?t:`${e}/${t}`}function ri({files:e,path:t,isFolder:n,nextBasename:r}){let i=ei(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=ti(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=ni(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}function ii(e){return e.endsWith(`/`)}function ai(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function oi(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function si(e,t){return t.includes(e)?oi(t):[e]}function ci(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function li(e,t){return{draggedPaths:e,target:t}}function ui(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(ii(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function di(e,t){return t.kind===`root`||t.directoryPath==null?ai(e):t.directoryPath}function fi(e,t){let n=e.map(e=>{let n=di(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}function pi(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function mi(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!pi(Qr.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}function hi(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function gi(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function _i(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function vi(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return _i(e,t.path)?n?e:null:e;case`move`:return gi(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=vi(r,e,n),r==null)return null;return r}}}function yi(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function bi(e){switch(e.operation){case`add`:return{...yi(e),operation:`add`,path:e.path};case`remove`:return{...yi(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...yi(e),from:e.from,operation:`move`,to:e.to}}}function xi(e){return{...yi(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>bi(e)),operation:`batch`}}function Si(e){switch(e.operation){case`add`:case`remove`:case`move`:return bi(e);case`batch`:return xi(e);default:return null}}function Ci(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function wi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function Ti(e){return wi(e).at(-1)??null}function Ei(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function Di(e){return e.endsWith(`/`)}var Oi=e=>e.toLowerCase();function ki(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function Ai(e){return e.endsWith(`/`)?e.slice(0,-1):e}function ji(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var Mi=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()},Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,V,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,H,ra,ia,aa,oa,sa,ca,U,la,ua,da,fa,pa,ma,ha,W,ga,G,_a,va,ya,ba,K,xa,Sa=Symbol(`FILE_TREE_RENAME_VIEW`),Ca=512,wa=512;function Ta(e){return e===`top`||e===`center`?e:`nearest`}function Ea(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=wi(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function Da(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:Ea(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var Oa=(Ni=new WeakMap,Pi=new WeakMap,Fi=new WeakMap,Ii=new WeakMap,Li=new WeakMap,Ri=new WeakMap,zi=new WeakMap,Bi=new WeakMap,V=new WeakMap,Vi=new WeakMap,Hi=new WeakMap,Ui=new WeakMap,Wi=new WeakMap,Gi=new WeakMap,Ki=new WeakMap,qi=new WeakMap,Ji=new WeakMap,Yi=new WeakMap,Xi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,$i=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,H=new WeakMap,ra=new WeakMap,ia=new WeakMap,aa=new WeakMap,oa=new WeakMap,sa=new WeakMap,ca=new WeakMap,U=new WeakMap,la=new WeakMap,ua=new WeakMap,da=new WeakMap,fa=new WeakMap,pa=new WeakMap,ma=new WeakMap,ha=new WeakMap,W=new WeakMap,ga=new WeakMap,G=new WeakMap,_a=new WeakMap,va=new WeakMap,ya=new WeakMap,ba=new WeakMap,K=new WeakSet,xa=class{constructor(e){g(this,K),f(this,Ni,void 0),f(this,Pi,new Set),f(this,Fi,new Map),f(this,Ii,null),f(this,Li,null),f(this,Ri,new Map),f(this,zi,new Map),f(this,Bi,-1),f(this,V,null),f(this,Vi,!1),f(this,Hi,e=>-1),f(this,Ui,new Map),f(this,Wi,null),f(this,Gi,null),f(this,Ki,null),f(this,qi,null),f(this,Ji,null),f(this,Yi,void 0),f(this,Xi,void 0),f(this,Zi,void 0),f(this,Qi,[]),f(this,$i,new Int32Array),f(this,ea,new Int32Array),f(this,ta,void 0),f(this,na,!1),f(this,H,null),f(this,ra,``),f(this,ia,!1),f(this,aa,new Set),f(this,oa,[]),f(this,sa,void 0),f(this,ca,null),f(this,U,null),f(this,la,null),f(this,ua,null),f(this,da,null),f(this,fa,null),f(this,pa,null),f(this,ma,0),f(this,ha,null),f(this,W,new Set),f(this,ga,0),f(this,G,void 0),f(this,_a,0),f(this,va,!1),f(this,ya,0),f(this,ba,void 0);let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:i,renaming:a,onSearchChange:o,paths:s,preparedInput:c,...l}=e,u=mi({paths:s,preparedInput:c},`constructor`,l.sort);h(Ni,this,l),t!=null&&t!==!1&&h(Ii,this,t===!0?{}:t),h(na,this,a!=null&&a!==!1),a!=null&&a!==!1&&a!==!0&&(h(ta,this,a.canRename),h(Xi,this,a.onError),h(Yi,this,a.onRename)),h(Zi,this,o),h(sa,this,n??`hide-non-matches`),h(G,this,m(K,this,Ga).call(this,u.paths,u.preparedInput));let d=i?.map(e=>m(K,this,go).call(this,e)).filter(e=>e!=null)??[],p=d.at(-1)??null;d.length>0&&(h(W,this,new Set(d)),h(ha,this,p),h(ga,this,1)),m(K,this,mo).call(this,p,!1),r!=null&&m(K,this,so).call(this,r,!1),h(ba,this,m(K,this,xo).call(this))}destroy(){p(ba,this)?.call(this),h(ba,this,null),p(Fi,this).clear(),p(Pi,this).clear(),p(Ui,this).clear(),h(Li,this,null),m(K,this,Za).call(this)}focusFirstItem(){m(K,this,no).call(this).length>0&&m(K,this,vo).call(this,0)}focusLastItem(){p(ya,this)<=0||(m(K,this,yo).call(this),m(K,this,vo).call(this,p(ya,this)-1))}focusNextItem(){m(K,this,po).call(this,1)}focusParentItem(){if(p(V,this)==null)return;let e=Ti(p(V,this));if(e==null)return;let t=m(K,this,Na).call(this,e);t>=0&&m(K,this,vo).call(this,t)}focusPath(e){let t=p(G,this).getPathInfo(e)?.path??null;if(t==null)return;m(K,this,yo).call(this);let n=m(K,this,Na).call(this,t);n>=0&&m(K,this,vo).call(this,n)}scrollToPath(e,t){let n=p(G,this).getPathInfo(e)?.path??null;if(n==null)return;m(K,this,yo).call(this);let r=m(K,this,ro).call(this,n);r<0||m(K,this,ho).call(this,r)!=null&&(t?.focus!==!1&&m(K,this,vo).call(this,r,!1),h(pa,this,{id:h(ma,this,p(ma,this)+1),offset:Ta(t?.offset),visibleIndex:r}),m(K,this,lo).call(this))}focusMountedPathFromInput(e){let t=p(G,this).getPathInfo(e)?.path??null;if(t==null)return;let n=m(K,this,Na).call(this,t);n>=0&&m(K,this,vo).call(this,n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=m(K,this,Na).call(this,t);return n>=0?(m(K,this,vo).call(this,n),m(K,this,no).call(this)[n]??t):null}focusPreviousItem(){m(K,this,po).call(this,-1)}getFocusedIndex(){return p(Bi,this)}getFocusedItem(){return p(V,this)==null?null:m(K,this,Pa).call(this,p(V,this))}getFocusedPath(){return p(V,this)}getScrollRequest(){return p(pa,this)}clearScrollRequest(e){p(pa,this)?.id===e&&h(pa,this,null)}resolveNearestVisiblePath(e){let t=m(K,this,no).call(this);if(p(ya,this)===0)return null;if(e==null)return p(V,this)??t[0]??null;let n=p(G,this).getPathInfo(e)?.path??e,r=m(K,this,Na).call(this,n);return r>=0?t[r]??n:m(K,this,Ma).call(this,n)??p(V,this)??t[0]??null}getSelectedPaths(){return[...p(W,this)]}getSelectionVersion(){return p(ga,this)}getVisibleCount(){return p(ya,this)}getVisibleRows(e,t){if(t<e||p(ya,this)===0)return[];let n=Math.max(0,e),r=Math.min(p(ya,this)-1,t);if(r<n)return[];let i=r-n+1;if(p(da,this)==null&&!p(Vi,this)&&r>=p(Qi,this).length&&i<=wa){let e=[];for(let t=n;t<=r;t+=1){let n=p(G,this).getVisibleRowContext(t);if(n==null)break;e.push(m(K,this,Ia).call(this,n))}return e}if(!p(Vi,this)&&r>=p(Qi,this).length&&m(K,this,yo).call(this),p(da,this)!=null){let e=Array.from({length:r-n+1},(e,t)=>m(K,this,io).call(this,n+t)),t=new Map,i=e[0]??-1,a=i;for(let n=1;n<=e.length;n+=1){let r=e[n];r!=null&&r===a+1?a=r:(i>=0&&p(G,this).getVisibleSlice(i,a).forEach((e,n)=>{t.set(i+n,e)}),r==null?(i=-1,a=-1):(i=r,a=r))}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,a=m(K,this,io).call(this,i),o=t.get(a),s=p(Qi,this)[a];if(o==null||s==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return m(K,this,Fa).call(this,o,i,a,{ancestorPaths:m(K,this,za).call(this,a),path:s})})}return p(G,this).getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=p(Qi,this)[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return m(K,this,Fa).call(this,e,r,r,{ancestorPaths:m(K,this,za).call(this,r),path:i})})}getStickyRowCandidates(e,t){if(p(da,this)!=null)return null;if(p(ya,this)===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<p(ya,this);r+=1){let i=e+r*t,a=Math.min(p(ya,this)-1,Math.floor(i/t)),o=m(K,this,La).call(this,a,r)??(a>0?m(K,this,La).call(this,a-1,r):void 0);if(o==null)break;n.push({row:m(K,this,Ia).call(this,o),subtreeEndIndex:o.subtreeEndIndex})}return n}getItem(e){let t=p(G,this).getPathInfo(e);return t==null?null:m(K,this,Pa).call(this,t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=p(G,this).getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&m(K,this,So).call(this,t)}selectAllVisiblePaths(){m(K,this,yo).call(this);let e=[...m(K,this,no).call(this)];m(K,this,Va).call(this,e,p(V,this)??p(ha,this))}selectOnlyPath(e){let t=m(K,this,go).call(this,e);t!=null&&m(K,this,Va).call(this,[t],t)}selectOnlyMountedPathFromInput(e){m(K,this,Va).call(this,[e],e)}selectPath(e){let t=m(K,this,go).call(this,e);t==null||p(W,this).has(t)||m(K,this,Va).call(this,[...p(W,this),t])}deselectPath(e){let t=m(K,this,go).call(this,e);t!=null&&p(W,this).has(t)&&m(K,this,Va).call(this,[...p(W,this)].filter(e=>e!==t))}toggleFocusedSelection(){p(V,this)!=null&&this.togglePathSelectionFromInput(p(V,this))}togglePathSelection(e){let t=m(K,this,go).call(this,e);t!=null&&(p(W,this).has(t)?this.deselectPath(t):this.selectPath(t))}togglePathSelectionFromInput(e){let t=m(K,this,go).call(this,e);t!=null&&(p(W,this).has(t)?m(K,this,Va).call(this,[...p(W,this)].filter(e=>e!==t),t):m(K,this,Va).call(this,[...p(W,this),t],t))}selectPathRange(e,t){let n=m(K,this,go).call(this,e);if(n==null)return;m(K,this,yo).call(this);let r=p(ha,this),i=r==null?-1:m(K,this,ao).call(this,r),a=m(K,this,ao).call(this,n);if(i===-1||a===-1){let e=t?[...p(W,this),n]:[n];m(K,this,Va).call(this,e,n);return}let[o,s]=i<=a?[i,a]:[a,i],c=m(K,this,no).call(this).slice(o,s+1),l=t?[...p(W,this),...c]:c;m(K,this,Va).call(this,l,r)}extendSelectionFromFocused(e){if(p(V,this)==null)return;let t=p(Bi,this);if(t===-1)return;let n=Math.min(p(ya,this)-1,Math.max(0,t+e));if(n===t)return;!p(Vi,this)&&n>=p(Qi,this).length&&m(K,this,yo).call(this);let r=m(K,this,no).call(this),i=r[t]??null,a=r[n]??null;if(i==null||a==null)return;let o=new Set(p(W,this));o.has(i)&&o.has(a)?o.delete(i):o.add(a),m(K,this,Va).call(this,[...o],p(ha,this)??i,!1),m(K,this,vo).call(this,n)}getDragAndDropConfig(){return p(Ii,this)}isDragAndDropEnabled(){return p(Ii,this)!=null}getDragSession(){return p(Li,this)==null?null:{draggedPaths:[...p(Li,this).draggedPaths],primaryPath:p(Li,this).primaryPath,target:p(Li,this).target==null?null:{...p(Li,this).target}}}startDrag(e){if(p(Ii,this)==null)return!1;let t=m(K,this,go).call(this,e);if(t==null||p(U,this)!=null&&p(U,this).length>0)return!1;let n=this.getSelectedPaths(),r=si(t,n);return p(Ii,this).canDrag?.(r)!==!1&&(n.includes(t)||m(K,this,Va).call(this,[t],t,!1),m(K,this,_o).call(this,t),h(Li,this,{draggedPaths:r,primaryPath:t,target:null}),m(K,this,lo).call(this),!0)}setDragTarget(e){let t=p(Li,this);if(t==null)return;let n=e;if(n!=null){let e=li(t.draggedPaths,n);(ui(t.draggedPaths,n)||p(Ii,this)?.canDrop?.(e)===!1)&&(n=null)}ci(t.target,n)||(h(Li,this,{...t,target:n}),m(K,this,lo).call(this))}cancelDrag(){p(Li,this)!=null&&(h(Li,this,null),m(K,this,lo).call(this))}completeDrag(){let e=p(Li,this);if(e==null)return!1;h(Li,this,null);let t=e.target==null?null:{...e.target};if(t==null)return m(K,this,lo).call(this),!1;let n=li(e.draggedPaths,t);if(ui(e.draggedPaths,t)||p(Ii,this)?.canDrop?.(n)===!1)return m(K,this,lo).call(this),!1;let r=fi(e.draggedPaths,t);if(r==null)return m(K,this,lo).call(this),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);p(G,this).move(e.from,e.to,{collision:e.collision})}else m(K,this,Wa).call(this,r.operations),p(G,this).batch(r.operations)}catch(e){return m(K,this,lo).call(this),p(Ii,this)?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return p(Ii,this)?.onDropComplete?.(r.result),!0}subscribe(e){return p(Pi,this).add(e),e(),()=>{p(Pi,this).delete(e)}}add(e){p(G,this).add(e)}remove(e,t={}){p(G,this).remove(e,t)}move(e,t,n={}){p(G,this).move(e,t,n)}batch(e){p(G,this).batch(e)}onMutation(e,t){let n=e,r=t,i=p(Fi,this).get(n);return i??(i=new Set,p(Fi,this).set(n,i)),i.add(r),()=>{let e=p(Fi,this).get(n);e?.delete(r),e?.size===0&&p(Fi,this).delete(n)}}setSearch(e){m(K,this,so).call(this,e,!0)}openSearch(e=``){m(K,this,so).call(this,e,!0)}closeSearch(){m(K,this,so).call(this,null,!0)}isSearchOpen(){return p(U,this)!==null}getSearchValue(){return p(U,this)??``}getSearchMatchingPaths(){return p(oa,this)}focusNextSearchMatch(){m(K,this,oo).call(this,1)}focusPreviousSearchMatch(){m(K,this,oo).call(this,-1)}startRenaming(e=p(V,this)??``,t={}){if(!p(na,this))return!1;let n=p(G,this).getPathInfo(e);if(n==null)return!1;let r=n.path,i=Di(r),a=Ai(r);if(p(ta,this)?.call(this,{isFolder:i,path:a})===!1)return!1;for(let e of wi(r))p(G,this).isExpanded(e)||p(G,this).expand(e);return m(K,this,Va).call(this,[r],r,!1),p(U,this)!=null&&(m(K,this,so).call(this,null,!1),p(Zi,this)?.call(this,p(U,this))),m(K,this,_o).call(this,r),h(H,this,r),h(ra,this,ki(r)),h(ia,this,t.removeIfCanceled??!1),m(K,this,lo).call(this),!0}resetPaths(e,t={}){let n=!Array.isArray(e),r=n?void 0:e,i=n?e:t,a=p(G,this).list().length,o=p(ya,this),s=mi({paths:r,preparedInput:i.preparedInput},`resetPaths`,p(Ni,this).sort),c=m(K,this,Ga).call(this,s.paths,s.preparedInput,i.initialExpandedPaths),l=p(V,this),u=p(H,this),d=this.getSelectedPaths(),f=p(ha,this);p(ba,this)?.call(this),h(G,this,c),p(Ui,this).clear(),m(K,this,Za).call(this);let g=d.map(e=>c.getPathInfo(e)?.path??null).filter(e=>e!=null),_=!Ci(p(W,this),g);h(W,this,new Set(g)),_&&h(ga,this,p(ga,this)+1),h(ha,this,f==null?null:c.getPathInfo(f)?.path??null),h(H,this,u==null?null:c.getPathInfo(u)?.path??null),p(H,this)??(h(ra,this,``),h(ia,this,!1)),m(K,this,mo).call(this,l,l!=null||g.length>0||p(ha,this)!=null),h(ba,this,m(K,this,xo).call(this)),m(K,this,lo).call(this),m(K,this,uo).call(this,{canonicalChanged:!0,operation:`reset`,pathCountAfter:s.paths.length,pathCountBefore:a,projectionChanged:!0,usedPreparedInput:i.preparedInput!=null,visibleCountDelta:p(ya,this)-o})}},Object.defineProperty(xa.prototype,Sa,{configurable:!0,value(){return{cancel:()=>{m(K,this,ka).call(this)},commit:()=>{m(K,this,Aa).call(this)},getPath:()=>p(H,this),getValue:()=>p(ra,this),isActive:()=>p(H,this)!=null,setValue:e=>{m(K,this,ja).call(this,e)}}},writable:!0}),xa);function ka(){if(p(H,this)==null)return;let e=p(H,this),t=p(ia,this);h(H,this,null),h(ra,this,``),h(ia,this,!1),t?this.remove(e,Di(e)?{recursive:!0}:void 0):(m(K,this,_o).call(this,e),m(K,this,lo).call(this))}function Aa(){let e=p(H,this);if(e==null)return;if(p(ia,this)&&p(ra,this).trim().length===0){h(H,this,null),h(ra,this,``),h(ia,this,!1),this.remove(e,Di(e)?{recursive:!0}:void 0);return}let t=Di(e),n=ri({files:p(G,this).list(),isFolder:t,nextBasename:p(ra,this),path:Ai(e)});h(H,this,null),h(ra,this,``),h(ia,this,!1),`error`in n?(m(K,this,_o).call(this,e),p(Xi,this)?.call(this,n.error),m(K,this,lo).call(this)):n.sourcePath===n.destinationPath?(m(K,this,_o).call(this,e),m(K,this,lo).call(this)):(p(Yi,this)?.call(this,{destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(ji(n.sourcePath,t),ji(n.destinationPath,t)))}function ja(e){p(H,this)!=null&&p(ra,this)!==e&&(h(ra,this,e),m(K,this,lo).call(this))}function Ma(e){m(K,this,yo).call(this);let t=Ti(e),n=Ei(e,t),r=null,i=null;for(let e of m(K,this,no).call(this)){if(Ti(e)!==t)continue;let a=Ei(e,t);if(a<n)r=e;else if(a>n){i=e;break}}return r??i}function Na(e){let t=m(K,this,ao).call(this,e);if(t!==-1)return t;let n=wi(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=m(K,this,ao).call(this,t);if(r!==-1)return r}return m(K,this,no).call(this).length>0?0:-1}function Pa(e,t){let n=p(Ui,this).get(e);if(n!=null)return n;let r=t??p(G,this).getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?m(K,this,Ha).call(this,r.path):m(K,this,Ua).call(this,r.path);return p(Ui,this).set(r.path,i),i}function Fa(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===p(V,this),isSelected:p(W,this).has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??p($i,this)[n]??0,setSize:r.setSize??p(ea,this)[n]??0}}function Ia(e){return m(K,this,Fa).call(this,e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}function La(e,t){let n=p(G,this).getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}function Ra(e){let t=p(Ri,this).get(e);if(t!=null)return t;let n=p(Hi,this).call(this,e),r=n<0?[]:[...m(K,this,Ra).call(this,n),n];return p(Ri,this).set(e,r),r}function za(e){let t=p(zi,this).get(e);if(t!=null)return t;let n=m(K,this,Ra).call(this,e).map(e=>p(Qi,this)[e]??``).filter(e=>e!==``);return p(zi,this).set(e,n),n}function Ba(e){p(G,this).collapse(e)}function Va(e,t=p(ha,this),n=!0){let r=[...new Set(e)],i=!Ci(p(W,this),r),a=p(ha,this)!==t;(i||a)&&(h(W,this,new Set(r)),h(ha,this,t),i&&h(ga,this,p(ga,this)+1),n&&m(K,this,lo).call(this))}function Ha(e){return{collapse:()=>{m(K,this,Ba).call(this,e)},deselect:()=>{this.deselectPath(e)},expand:()=>{m(K,this,fo).call(this,e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>p(G,this).isExpanded(e),isFocused:()=>p(V,this)===e,isSelected:()=>p(W,this).has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{m(K,this,So).call(this,e)}}}function Ua(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>p(V,this)===e,isSelected:()=>p(W,this).has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}function Wa(e){let t=p(G,this).list();m(K,this,Ga).call(this,t).batch(e)}function Ga(e,t,n){return new Qr({...p(Ni,this),paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}function Ka(){return p(qi,this)??h(qi,this,p(G,this).list()),p(qi,this)}function qa(){if(p(Ki,this)!=null)return p(Ki,this);let e=new Set;for(let t of m(K,this,Ka).call(this)){e.add(t);for(let n of wi(t))e.add(n)}return h(Ki,this,[...e].sort()),p(Ki,this)}function Ja(){return p(Ji,this)??h(Ji,this,m(K,this,Ka).call(this).map(Oi)),p(Ji,this)}function Ya(){return p(Wi,this)??h(Wi,this,m(K,this,qa).call(this).filter(e=>e.endsWith(`/`))),p(Wi,this)}function Xa(){return p(Gi,this)??h(Gi,this,m(K,this,Ya).call(this).map(Oi)),p(Gi,this)}function Za(){h(Wi,this,null),h(Gi,this,null),h(Ki,this,null),h(qi,this,null),h(Ji,this,null)}function Qa(){return m(K,this,Ya).call(this).filter(e=>p(G,this).isExpanded(e))}function $a(e){let t=new Set(p(ca,this)??[]);if(e)for(let e of p(W,this))for(let n of wi(e))t.add(n);m(K,this,eo).call(this,t)}function eo(e){h(va,this,!0);try{for(let t of m(K,this,Ya).call(this)){let n=e.has(t),r=p(G,this).isExpanded(t);n&&!r?p(G,this).expand(t):!n&&r&&p(G,this).collapse(t)}}finally{h(va,this,!1)}}function to(){if(p(U,this)==null||p(U,this).length===0){h(oa,this,[]),h(da,this,null),h(fa,this,null),h(ua,this,null),h(ya,this,p(_a,this));return}let e=p(Qi,this);if(h(oa,this,e.filter(e=>p(aa,this).has(e))),p(sa,this)!==`hide-non-matches`||p(aa,this).size===0){h(da,this,null),h(fa,this,null),h(ua,this,null),h(ya,this,p(_a,this));return}let t=[],n=[],r=new Map;for(let[i,a]of e.entries())p(la,this)?.has(a)===!0&&(r.set(a,n.length),t.push(i),n.push(a));h(da,this,t),h(fa,this,n),h(ua,this,r),h(ya,this,n.length)}function no(){return p(fa,this)??p(Qi,this)}function ro(e){return p(fa,this)==null?p(G,this).getVisibleIndex(e)??-1:p(ua,this)?.get(e)??-1}function io(e){return p(da,this)?.[e]??e}function ao(e){return p(ua,this)?.get(e)??p(G,this).getVisibleIndex(e)??-1}function oo(e){let t=p(oa,this);if(t.length===0)return;let n=p(V,this),r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}function so(e,t){let n=e==null?null:Mi(e),r=p(U,this);if(r!==n){if(r==null&&n!=null&&h(ca,this,m(K,this,Qa).call(this)),h(U,this,n),n==null)m(K,this,$a).call(this,!0),h(ca,this,null),p(aa,this).clear(),h(la,this,null),m(K,this,mo).call(this,p(V,this),!0);else if(n.length===0)m(K,this,$a).call(this,!1),p(aa,this).clear(),h(la,this,null),m(K,this,mo).call(this,p(V,this),!0);else{let e=m(K,this,co).call(this);m(K,this,mo).call(this,e,!0)}t&&(p(Zi,this)?.call(this,p(U,this)),m(K,this,lo).call(this))}}function co(){if(p(U,this)==null||p(U,this).length===0)return p(aa,this).clear(),p(V,this);let e=p(U,this),t=m(K,this,Ka).call(this),n=m(K,this,Ja).call(this),r=[],i=new Set,a=null;for(let o=0;o<t.length;o+=1){if(!n[o].includes(e))continue;let s=t[o];r.push(s),i.add(s),a??=s}let o=m(K,this,Ya).call(this),s=m(K,this,Xa).call(this);for(let t=0;t<o.length;t+=1){if(!s[t].includes(e))continue;let n=o[t];i.has(n)||(r.push(n),i.add(n),a??=n)}h(aa,this,i);let c=p(sa,this)===`hide-non-matches`&&r.length>0?new Set:null;h(la,this,c);let l=p(sa,this)===`expand-matches`?new Set(p(ca,this)??[]):new Set;for(let e of r){c?.add(e),e.endsWith(`/`)&&l.add(e);for(let t of wi(e))l.add(t),c?.add(t)}return m(K,this,eo).call(this,l),a??p(V,this)}function lo(){for(let e of p(Pi,this))e()}function uo(e){p(Fi,this).get(e.operation)?.forEach(t=>{t(e)}),p(Fi,this).get(`*`)?.forEach(t=>{t(e)})}function fo(e){for(let t of wi(e))p(G,this).isExpanded(t)||p(G,this).expand(t);p(G,this).isExpanded(e)||p(G,this).expand(e)}function po(e){let t=p(ya,this);if(t===0)return;let n=p(Bi,this)===-1?0:p(Bi,this),r=Math.min(t-1,Math.max(0,n+e));(r!==n||p(Bi,this)===-1)&&(!p(Vi,this)&&p(da,this)==null&&r>=p(Qi,this).length&&m(K,this,yo).call(this),m(K,this,vo).call(this,r))}function mo(e,t=!0){let n=p(G,this).getVisibleCount();h(_a,this,n);let r=Da(p(G,this).getVisibleTreeProjectionData(t?void 0:Math.min(n,Ca)),e,t?e=>p(G,this).getVisibleIndex(e):void 0);p(Ri,this).clear(),p(zi,this).clear(),h(Vi,this,r.paths.length>=n),h(Hi,this,r.getParentIndex),h(Qi,this,r.paths),h($i,this,r.posInSetByIndex),h(ea,this,r.setSizeByIndex),m(K,this,to).call(this),h(Bi,this,e==null?m(K,this,no).call(this).length>0?0:-1:m(K,this,Na).call(this,e)),h(V,this,p(Bi,this)<0?null:m(K,this,ho).call(this,p(Bi,this)))}function ho(e){return m(K,this,no).call(this)[e]??(p(da,this)==null?p(G,this).getVisibleRowContext(e)?.row.path??null:null)}function go(e){return p(G,this).getPathInfo(e)?.path??null}function _o(e){if(e==null)return;let t=m(K,this,Na).call(this,e);t>=0&&m(K,this,vo).call(this,t,!1)}function vo(e,t=!0){let n=m(K,this,ho).call(this,e);n!=null&&(p(Bi,this)!==e||p(V,this)!==n)&&(h(Bi,this,e),h(V,this,n),t&&m(K,this,lo).call(this))}function yo(){p(Vi,this)||m(K,this,mo).call(this,p(V,this),!0)}function bo(e){let t=vi(p(H,this),e);t==null&&p(H,this)!=null&&h(ra,this,``),h(H,this,t);let n=vi(p(V,this),e,!0),r=[...p(W,this)].map(t=>vi(t,e)).filter(e=>e!=null).map(e=>p(G,this).getPathInfo(e)?.path??null).filter(e=>e!=null),i=vi(p(ha,this),e),a=i==null?null:p(G,this).getPathInfo(i)?.path??null,o=[...new Set(r)];return Ci(p(W,this),o)||(h(W,this,new Set(o)),h(ga,this,p(ga,this)+1)),h(ha,this,a),n}function xo(){return p(G,this).on(`*`,e=>{if(p(va,this))return;e.canonicalChanged&&(p(Ui,this).clear(),m(K,this,Za).call(this)),p(Li,this)!=null&&hi(e)&&h(Li,this,null);let t=hi(e)?m(K,this,bo).call(this,e):p(V,this),n=p(U,this)!=null&&p(U,this).length>0?m(K,this,co).call(this):p(U,this)===``?p(V,this):t,r=p(U,this)!=null||e.operation!==`expand`&&e.operation!==`collapse`;m(K,this,mo).call(this,n,r),m(K,this,lo).call(this);let i=Si(e);i!=null&&m(K,this,uo).call(this,i)})}function So(e){p(G,this).isExpanded(e)?m(K,this,Ba).call(this,e):m(K,this,fo).call(this,e)}var Co=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t};function wo(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1)e[t]!==`/`&&t!==e.length?r===-1&&(r=t):r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1);return n===``?null:{isDirectory:t,path:n}}function To(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=[],r=0;for(;;){let e=t.indexOf(`/`,r);if(e===-1)break;n.push(t.slice(0,e+1)),r=e+1}return n}function Eo(e,t){return t?`${e}/`:e}function Do(e,t=null){let n=Co(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set,o=new Map;for(let t of e??[]){let e=ko(t);e!=null&&Mo({canonicalPath:e.canonicalPath,changeCountByDirectoryPath:o,directoriesWithChanges:i,ignoredDirectoryPaths:a,isDirectory:e.isDirectory,status:t.status,statusByPath:r})}return r.size===0?null:{changeCountByDirectoryPath:o,directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}function Oo(e,t){let n=t?.remove??[],r=t?.set??[];if(n.length===0&&r.length===0)return e;let i=new Map(e?.statusByPath),a=new Set(e?.directoriesWithChanges),o=new Set(e?.ignoredDirectoryPaths),s=new Map(e?.changeCountByDirectoryPath),c=!1;for(let e of n){let t=Ao(e);t!=null&&(c=jo({canonicalPath:t.canonicalPath,changeCountByDirectoryPath:s,directoriesWithChanges:a,ignoredDirectoryPaths:o,statusByPath:i})||c)}for(let e of r){let t=ko(e);t!=null&&(c=Mo({canonicalPath:t.canonicalPath,changeCountByDirectoryPath:s,directoriesWithChanges:a,ignoredDirectoryPaths:o,isDirectory:t.isDirectory,status:e.status,statusByPath:i})||c)}return c?i.size===0?null:{changeCountByDirectoryPath:s,directoriesWithChanges:a,ignoredDirectoryPaths:o,signature:Fo(i),statusByPath:i}:e}function ko(e){return Ao(e.path)}function Ao(e){let t=wo(e);if(t!=null)return{canonicalPath:Eo(t.path,t.isDirectory),isDirectory:t.isDirectory}}function jo({canonicalPath:e,changeCountByDirectoryPath:t,directoriesWithChanges:n,ignoredDirectoryPaths:r,statusByPath:i}){let a=i.get(e);return a!=null&&(i.delete(e),a===`ignored`&&e.endsWith(`/`)&&r.delete(e),Po(t,n,e),!0)}function Mo({canonicalPath:e,changeCountByDirectoryPath:t,directoriesWithChanges:n,ignoredDirectoryPaths:r,isDirectory:i,status:a,statusByPath:o}){let s=o.get(e);return s!==a&&(s??No(t,n,e),o.set(e,a),a===`ignored`&&i?r.add(e):i&&r.delete(e),!0)}function No(e,t,n){for(let r of To(n))e.set(r,(e.get(r)??0)+1),t.add(r)}function Po(e,t,n){for(let r of To(n)){let n=(e.get(r)??0)-1;n>0?e.set(r,n):(e.delete(r),t.delete(r))}}function Fo(e){let t=`${e.size}`;for(let[n,r]of e)t+=`\0${n}\0${r}`;return t}var q,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go={},Ko=[],qo=Array.isArray,Jo=Ko.slice,Yo=Object.assign;function Xo(e){e&&e.parentNode&&e.remove()}function Zo(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?Jo.call(arguments,2):n),Qo(e,o,r,i,null)}function Qo(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Io,__i:-1,__u:0};return i==null&&q.vnode!=null&&q.vnode(a),a}function $o(e){return e.children}function es(e,t){this.props=e,this.context=t,this.__g=0}function ts(e,t){if(t==null)return e.__?ts(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?ts(e):null}function ns(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return ns(e)}}function rs(e){(8&e.__g||!(e.__g|=8)||!Lo.push(e)||zo++)&&Ro==q.debounceRendering||((Ro=q.debounceRendering)||queueMicrotask)(is)}function is(){for(var e,t,n,r,i,a,o,s,c=1;Lo.length;)Lo.length>c&&Lo.sort(Bo),e=Lo.shift(),c=Lo.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=Yo({},r)).__v=r.__v+1,q.vnode&&q.vnode(n),fs(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??ts(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,ms(a,n,o),n.__e!=i&&ns(n)));zo=0}function as(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||Ko,b=t.length;for(c=os(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?Go:y[m.__i]||Go,m.__i=f,_=fs(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&_s(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=ss(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function os(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?Qo(null,o,null,null,null):qo(o)?Qo($o,{children:o},null,null,null):o.constructor==null&&o.__b>0?Qo(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=cs(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=ts(s)),vs(s,s));return r}function ss(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=ss(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=ts(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function cs(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ls(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function us(e,t,n,r,i){var a;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ls(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ls(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(Vo,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=Ho,e.addEventListener(t,a?Wo:Uo,a)):e.removeEventListener(t,a?Wo:Uo,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function ds(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=Ho++;else if(t.u<n.l)return;return n(q.event?q.event(t):t)}}}function fs(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,ee,w,te,T,ne,E,re,ie,D=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=q.__b)&&d(t);n:if(typeof D==`function`)try{if(v=t.props,y=`prototype`in D&&D.prototype.render,b=(d=D.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new D(v,x):(t.__c=f=new es(v,x),f.constructor=D,f.render=ys),b&&b.sub(f),f.props=v,f.state||(f.state={}),f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&D.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Yo({},f.__s)),Yo(f.__s,D.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&D.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&D.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=q.__r,ee=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),w=0;w<f._sb.length;w++)f.__h.push(f._sb[w]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=Yo({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),te=d,d!=null&&d.type===$o&&d.key==null&&(te=hs(d.props.children)),s=as(e,qo(te)?te:[te],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null){if(e.then){for(T=0,ne=!1,t.__u|=c?160:128,t.__c.__z=[],E=0;E<a.length;E++)(re=a[E])==null||ne||(re.nodeType==8&&re.data==`$s`?(T>0&&t.__c.__z.push(re),T++,a[E]=null):re.nodeType==8&&re.data==`/$s`?(--T>0&&t.__c.__z.push(re),ne=T===0,s=a[E],a[E]=null):T>0&&(t.__c.__z.push(re),a[E]=null));if(!ne){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(ie=a.length;ie--;)Xo(a[ie]);ps(t)}}else t.__e=n.__e,t.__k=n.__k,e.then||ps(t);q.__e(e,t,n)}else s=t.__e=gs(n.__e,t,n,r,i,a,o,c,l,u);return(d=q.diffed)&&d(t),128&t.__u?void 0:s}function ps(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(ps)}function ms(e,t,n){for(var r=0;r<n.length;r++)_s(n[r],n[++r],n[++r]);q.__c&&q.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){q.__e(e,t.__v)}})}function hs(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:qo(e)?e.map(hs):Yo({},e)}function gs(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(q.__m&&q.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=Jo.call(e.childNodes),v=n.props||Go,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;us(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||us(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),as(b==`template`?e.content:e,qo(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&ts(n,0),s,c,l),a!=null)for(u=a.length;u--;)Xo(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||us(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&us(e,u,g,v[u],i))}return e}function _s(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){q.__e(e,n)}}function vs(e,t,n){var r,i;if(q.unmount&&q.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||_s(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){q.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&vs(r[i],t,n||typeof e.type!=`function`);n||Xo(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function ys(e,t,n){return this.constructor(e,n)}function bs(e,t){var n,r,i,a;t==document&&(t=document.documentElement),q.__&&q.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=Zo($o,null,[e]),i=[],a=[],fs(t,e,r||Go,Go,t.namespaceURI,r?null:t.firstChild?Jo.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),ms(i,e,a)}function xs(e,t){e.__u|=32,bs(e,t)}q={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw zo=0,e}},Io=0,es.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Yo({},this.state);typeof e==`function`&&(e=e(Yo({},n),this.props)),e&&Yo(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),rs(this))},es.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),rs(this))},es.prototype.render=$o,Lo=[],zo=0,Bo=function(e,t){return e.__v.__b-t.__v.__b},Vo=/(PointerCapture)$|Capture$/i,Ho=0,Uo=ds(!1),Wo=ds(!0);var Ss=0;Array.isArray;function J(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ss,__i:-1,__u:0,__source:i,__self:a};return q.vnode&&q.vnode(l),l}var Cs=16,ws=16,Ts={};function Es({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=Ts[e]??{width:Cs,height:ws},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`;return J(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`},viewBox:m,width:f,height:p,children:J(`use`,{href:c})})}var Ds=e=>e!==void 0&&/\s/.test(e),Os=(e,t)=>{let n=t=>Ds(e[t-1])||Ds(e[t]);if(!n(t))return t;for(let r=1;r<e.length;r++){let i=t-r;if(i>0&&!n(i))return i;let a=t+r;if(a<e.length&&!n(a))return a}return t},ks=e=>Os(e,Math.ceil(e.length/2)),As=e=>{if(e.length<2)return[e,``];let t=ks(e);return[e.slice(0,t),e.slice(t)]},js=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:ks(e);return[e.slice(0,r),e.slice(r)]},Ms=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},Ns=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},Ps=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},Fs=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]};function Is({children:e,marker:t,variant:n=`default`}){"use no memo";return J(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:J(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):n===`fade`?J(`span`,{"data-truncate-fade":!0}):t})})}function Ls(e){"use no memo";let{mode:t,children:n}=e;return J(`div`,{children:[J(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?J(`span`,{children:n}):n}),J(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?J(`span`,{children:n}):n})]})}function Rs({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=J(Ls,{mode:t,children:e},`content`),o=J(Is,{marker:n,mode:t,variant:r},`marker`),s=J(`div`,{"data-truncate-fill":!0},`fill`);return J(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:J(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function zs({children:e,...t}){"use no memo";return J(Rs,{mode:`truncate`,...t,children:e})}function Bs({children:e,...t}){"use no memo";return J(Rs,{mode:`fruncate`,...t,children:e})}function Vs({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=J(zs,{...s,children:t[0]}),l=J(Bs,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return J(`div`,{className:a,style:o});if(e.length<i)return J(n===`end`?Bs:zs,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=As:r===`extension`?t=js:r===`leaf-path`&&(t=Ms);else if(typeof r==`number`)t=Ns,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=Ps:e===`first`&&(t=Fs)}else typeof r==`function`&&(t=r);t??=As;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=J(zs,{...s,..._,children:f}),l=J(Bs,{...s,...v,children:p})}return J(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[J(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),J(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var Hs={endIndex:-1,startIndex:-1};function Us(e,t,n){return Math.min(Math.max(e,t),n)}function Ws(e,t){return e<0||t<e?Hs:{endIndex:t,startIndex:e}}function Gs(e){return e.startIndex<0||e.endIndex<e.startIndex}function Ks(e,t){return Gs(e)?0:(e.endIndex-e.startIndex+1)*t}function qs(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function Js(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function Ys(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);i==null?t.set(r,[n]):i.push(n)}),t}function Xs(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;o<=t?(i=a,n=a+1):r=a-1}return i}function Zs(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function Qs(e,t,n){if(e.length===0||t<=0)return[];let r=Zs(e),i=Ys(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=Xs(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function $s(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=Us(t.scrollTop,0,o),c=t.stickyRows??Qs(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=qs(s,n,t.itemHeight),m=qs(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?Hs:Ws(m,Js(u+d,n,t.itemHeight)),y=g+1,b=Gs(v)?Hs:Ws(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=Ks(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:Gs(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var ec={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},tc={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},nc=`Contains git status items`;function rc(e){return e.current?!0:(e.current=!0,!1)}function ic(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function ac(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return ic({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function oc(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}function sc(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function cc(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function lc(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function uc(e,t){return e!=null&&e>0?e:t}function dc(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function fc(e,t,n,r,i=0){let a=ic({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a!=null&&(e.scrollTop=a,!0)}function pc(e,t,n,r,i,a,o=0){let s=ac({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s!=null&&(e.scrollTop=s,!0)}function mc(e,t,n,r,i,a){let o=oc({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o!=null&&(e.scrollTop=o,!0)}function hc(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function gc(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}function _c({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return J(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}function vc(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}function yc(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}var bc,Y,xc,Sc,Cc=Object.is,wc=0,Tc=[],X=q,Ec=X.__b,Dc=X.__r,Oc=X.diffed,kc=X.__c,Ac=X.unmount,jc=X.__;function Mc(e,t){X.__h&&X.__h(Y,e,wc||t),wc=0;var n=Y.__H||(Y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Nc(e){return wc=1,Pc(Gc,e)}function Pc(e,t,n){var r=Mc(bc++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Gc(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);Cc(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Y,!Y.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,Cc(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};Y.__f=!0;var a=Y.shouldComponentUpdate,o=Y.componentWillUpdate;Y.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Y.shouldComponentUpdate=i}return r.__N||r.__}function Fc(e,t){var n=Mc(bc++,3);!X.__s&&Wc(n.__H,t)&&(n.__=e,n.u=t,Y.__H.__h.push(n))}function Ic(e,t){var n=Mc(bc++,4);!X.__s&&Wc(n.__H,t)&&(n.__=e,n.u=t,Y.__h.push(n))}function Z(e){return wc=5,Lc(function(){return{current:e}},[])}function Lc(e,t){var n=Mc(bc++,7);return Wc(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Rc(e,t){return wc=8,Lc(function(){return e},t)}function zc(){for(var e;e=Tc.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Hc),e.__H.__h.forEach(Uc),e.__H.__h=[]}catch(t){e.__H.__h=[],X.__e(t,e.__v)}}X.__b=function(e){Y=null,Ec&&Ec(e)},X.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),jc&&jc(e,t)},X.__r=function(e){Dc&&Dc(e),bc=0;var t=(Y=e.__c).__H;t&&(xc===Y?(t.__h=[],Y.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(Hc),t.__h.forEach(Uc),t.__h=[],bc=0)),xc=Y},X.diffed=function(e){Oc&&Oc(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Tc.push(t)!==1&&Sc===X.requestAnimationFrame||((Sc=X.requestAnimationFrame)||Vc)(zc)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),xc=Y=null},X.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Hc),e.__h=e.__h.filter(function(e){return!e.__||Uc(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],X.__e(n,e.__v)}}),kc&&kc(e,t)},X.unmount=function(e){Ac&&Ac(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Hc(e)}catch(e){t=e}}),n.__H=void 0,t&&X.__e(t,n.__v))};var Bc=typeof requestAnimationFrame==`function`;function Vc(e){var t,n=function(){clearTimeout(r),Bc&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Bc&&(t=requestAnimationFrame(n))}function Hc(e){var t=Y,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Y=t}function Uc(e){var t=Y;e.__c=e.__(),Y=t}function Wc(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!Cc(t,e[n])})}function Gc(e,t){return typeof t==`function`?t(e):t}function Kc(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:J(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return J($o,{children:[J(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:J(zs,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function qc(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function Jc(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function Yc(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function Xc({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=$s(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:Yc(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?Yc(u,1,t,o):i&&r<=0&&c.length>0?Qs(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}var Zc=400,Qc=40,$c=18;function el(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?tl(e,t,n):a instanceof HTMLElement?a:null}function tl(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function nl(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function rl(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function il(){return navigator.vendor!==`Apple Computer, Inc.`}function al(e,t){let n=e-t.top;if(n<Qc)return-Math.ceil((Qc-Math.max(0,n))/Qc*$c);let r=t.bottom-e;return r<Qc?Math.ceil((Qc-Math.max(0,r))/Qc*$c):0}function ol(e,t){if(e!=null){let t=ec[e];return t==null?null:{text:t,title:tc[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:nc}:null}function sl(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function cl(e){return e!=null&&`toggle`in e}function ll(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function ul(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function dl(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function fl(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function pl(e,t){return t&&fl(e)||(e.ctrlKey||e.metaKey)&&ll(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}var ml=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`]);function hl(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function gl(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function _l(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function vl(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function yl(e,t,n){n==null?e.delete(t):e.set(t,n)}function bl(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function xl(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function Sl(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function Cl(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=Sl(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function wl(e,t){return{kind:e.kind,name:Jc(e),path:t}}function Tl(e){return e==null?void 0:`${e}__tree`}function El(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function Dl(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function Ol(e,t){if(e==null)return null;if(`text`in e)return e.parts==null?J(`span`,{title:e.title,children:e.text}):J(`span`,{title:e.title,children:e.parts.map((e,t)=>J(`span`,{style:{color:e.color},children:e.text},t))});let n=typeof e.icon==`string`?Dl(e.icon)?t(e.icon):{name:e.icon}:Dl(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return J(`span`,{title:e.title,children:J(Es,{...n})})}function kl(e){e!=null&&sc(e.querySelector(`button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)??e)}function Al(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=qc(e);return J($o,{children:[e.depth>0?J(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>J(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,J(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?J(Es,{...t(`file-tree-icon-chevron`)}):J(Es,{...t(`file-tree-icon-file`,u)})}),J(`div`,{"data-item-section":`content`,children:e.isFlattened?Kc(e,c,a):c??J(Vs,{minimumLength:5,split:`extension`,children:e.name})}),i?J(`div`,{"data-item-section":`decoration`,children:r==null?null:Ol(r,t)}):null,s?J(`div`,{"data-item-section":`git`,children:Ol(o,t)}):null,n?J(`div`,{"data-item-section":`action`,children:l?J(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:J(Es,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function jl(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:ee,contextMenuButtonVisibility:w,contextMenuRightClickEnabled:te,registerRenameInput:T,registerButton:ne,resolveIcon:E,renderDecorationForRow:re,openContextMenuForRow:ie,onRowClick:D,onKeyDown:ae}=e,O=qc(t),{isParked:k=!1,mode:oe=`flow`,style:se}=r,ce=oe===`sticky`,le=_?.get(O)??null??sl(t.ancestorPaths,v,y),ue=t.kind===`directory`&&(b?.has(O)??!1),de=re(t,O),fe=ol(le,ue),pe=S&&ee,me=de!=null||x||pe,he=pe&&w===`always`,ge=a.getPath()===O,_e=ge?a.getValue():``,ve=ce||!ge?null:J(_c,{ref:T,ariaLabel:`Rename ${Jc(t)}`,isFlattened:t.isFlattened,value:_e,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),ye=Al(t,E,{actionLaneEnabled:pe,customDecoration:de,decorationLaneEnabled:me,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:fe,gitLaneActive:x,renameInput:ve,showDecorativeActionAffordance:he}),be={...vc({ariaLabel:Jc(t),domId:t.isFocused?El(h,O,k):void 0,extraStyle:se,features:{actionLaneEnabled:pe,contextMenuButtonVisibility:pe?w:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:k,itemHeight:g,mode:oe,row:t,state:{containsGitChange:ue,effectiveGitStatus:le,isContextHovered:s===O,isDragTarget:l?.kind===`directory`&&l.directoryPath===O,isDragging:c?.has(O)===!0,isFocusRinged:t.isFocused&&o===O},targetPath:O}),key:n,onContextMenu:S||u?e=>{d()?e.preventDefault():S&&(e.preventDefault(),te&&(i.focusMountedPathFromInput(O),ie(t,O,{anchorRect:_l(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:ce?void 0:()=>{i.focusMountedPathFromInput(O)},onKeyDown:ce?void 0:ae,ref:e=>{ne(O,e)}};return!ce&&ge?J(`div`,{...be,children:ye}):J(`button`,{...be,type:`button`,draggable:u&&!k,onDragEnd:u&&!k?p:void 0,onDragStart:u&&!k?e=>{f(e,t,O)}:void 0,onMouseDown:e=>{(ce||i.isSearchOpen())&&e.preventDefault()},onTouchStart:u&&!k?e=>{m(e,t,O)}:void 0,onClick:e=>{D(e,t,O,oe)},children:ye})}function Ml(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(qc(e))).map((n,r)=>jl(e,n,t.start+r))}function Nl({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=me,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:d=`close`,searchEnabled:f=!1,searchFakeFocus:p=!1,slotHost:m,stickyFolders:h=!1,initialViewportHeight:g=420}){"use no memo";let _=Z(null),y=Z(null),b=Z(!1),x=Z(null),S=Z(null),C=Z(null),ee=Z(null),w=Z(null),te=Z(new Map),T=Z(new Map),ne=Z(()=>{}),E=Z(null),re=Z(0),O=Z(!1),k=Z(null);k.current!==t&&(O.current=!1,k.current=t);let oe=Z(!1),se=Z(null),ce=Z(null),le=Z(!1),ue=Z(null),de=Z(null),fe=Z(null),pe=Z(null),he=Z(null),ge=Z(null),_e=Z(null),ve=Z(null),ye=Z(!1),be=Z(null),xe=Z(null),Se=Z(null),Ce=Z(null),we=Lc(()=>new Map,[]),[,Te]=Nc(0),Ee=Z(!1),[De,Oe]=Nc(null),[ke,Ae]=Nc(null),[je,Me]=Nc(null),[Ne,Pe]=Nc(null),[Fe,Ie]=Nc(0),[A,Le]=Nc(null),Re=Z(A);Re.current=A;let ze=Z(null),Be=Z(null),Ve=Z(null),He=Z(null),Ue=Z(null),We=Z(!1),Ge=()=>{Be.current=null,Ve.current=null,He.current=null},Ke=(e,t)=>{Be.current=e,Ve.current=null,He.current=t==null?null:{path:e,scrollTop:t}},j=(e,t)=>{Be.current=null,Ve.current={path:e,viewportOffset:t},He.current=null},qe=Z(d===`retain`&&t.isSearchOpen()),[M,Je]=Nc(p);Fc(()=>{p||Je(!1)},[p]);let Ye=Z(!1),Xe=Rc(()=>{Ye.current=!0,Je(e=>e&&!1)},[]),[Ze,Qe]=Nc(()=>Xc({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:h,viewportHeight:g})),[N,$e]=Nc(!1);Fc(()=>{$e(!0)},[]);let et=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,tt=e?.contextMenu?.triggerMode??(et?`right-click`:`both`),nt=tt===`both`||tt===`button`,rt=e?.contextMenu?.buttonVisibility??`when-needed`,it=tt===`both`||tt===`right-click`;Ic(()=>{let e=C.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;Ue.current=t,Ae(t),Pe(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(We.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let at=Rc((e,t)=>{yl(te.current,e,t)},[]),ot=Rc((e,t)=>{yl(T.current,e,t)},[]),st=Rc(e=>{S.current=e},[]),ct=Rc(e=>bl(e,T.current,te.current),[]),lt=n!=null||r!=null||i!=null,{resolveIcon:ut}=Lc(()=>v(a),[a]),dt=t[Sa](),ft=dt.getPath(),pt=ft!=null,mt=t.isSearchOpen(),ht=t.getSearchValue(),P=t.getFocusedPath(),F=t.getFocusedIndex(),gt=t.getScrollRequest(),_t=t.isDragAndDropEnabled(),vt=t.getDragSession(),yt=Lc(()=>vt==null?null:new Set(vt.draggedPaths),[vt]),bt=vt?.target??null,xt=vt?.primaryPath??null,St=Tl(o),{overlayHeight:Ct,overlayRows:wt,snapshot:I,visibleRows:Tt}=Ze,Et=I.physical.viewportHeight,Dt=Lc(()=>({end:I.window.endIndex,start:I.window.startIndex}),[I.window.endIndex,I.window.startIndex]),Ot=wt,kt=I.sticky.rows,At=I.physical.totalHeight,jt=I.sticky.height,Mt=Lc(()=>new Set(kt.map(e=>qc(e.row))),[kt]),Nt=F>=0&&F>=Dt.start&&F<=Dt.end,Pt=Rc((e,t)=>u?.({item:wl(e,t),row:e})??null,[u]),Ft=Rc(e=>sc(e==null?null:te.current.get(e)??null)?!0:sc(C.current),[]),It=Rc(e=>{Ft(t.focusNearestPath(e))},[t,Ft]),Lt=Z(It);Lt.current=It;let Rt=Z(!0),zt=Z(()=>{}),Bt=Rc((t=!0)=>{let n=Re.current;n!=null&&(Rt.current=Rt.current&&t,Le(null),e?.contextMenu?.onClose?.(),Rt.current&&It(n.path))},[e?.contextMenu,It]);zt.current=Bt;let Vt=Rc(e=>{let t=e==null?null:vl(C.current,e);Me(e=>e===t?e:t)},[]),Ht=Rc((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=ct(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=ee.current;Ke(n,e?.scrollTop??null),oe.current=!0,Oe(e=>e===n?e:n)}i.focus(),Vt(a),Rt.current=!0,Le({anchorRect:r?.anchorRect??null,item:wl(e,n),path:n,source:r?.source??`keyboard`})},[t,ct,Vt]),Ut=Rc(e=>{if(l){if(t.isSearchOpen()){let e=ee.current,t=lc(e,Et);ue.current=F<0||e==null?null:Math.max(0,Math.min(F*s-e.scrollTop,Math.max(0,t-s))),le.current=!0}t.startRenaming(e)!==!1&&(Pe(`focus`),Te(e=>e+1))}},[t,F,s,l,Et]),Wt=Rc((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=ee.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=lc(i,Et),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:Xc({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:h,viewportHeight:l}).snapshot.sticky.height;return oe.current=!0,mc(i,a,s,l,u,d),ne.current(),ze.current=n?e:null,!0},[t,s,c,Et,h]),Gt=()=>b.current===!0||Ce.current!=null||ye.current===!0,Kt=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),qt=e=>{e!=null&&(typeof window.cancelAnimationFrame==`function`?window.cancelAnimationFrame(e):window.clearTimeout(e))},Jt=()=>{pe.current!=null&&(clearTimeout(pe.current),pe.current=null),fe.current=null},Yt=()=>{ge.current?.remove(),ge.current=null},Xt=()=>{qt(de.current),de.current=null,he.current=null},Zt=e=>{let t=C.current?.getRootNode();t instanceof ShadowRoot?t.append(e):document.body.append(e)},Qt=()=>{ve.current?.(),ve.current=null,Ce.current!=null&&(clearTimeout(Ce.current),Ce.current=null),ye.current=!1,be.current=null,Se.current=null,xe.current!=null&&(xe.current.setAttribute(`draggable`,`true`),xe.current.style.removeProperty(`touch-action`),xe.current=null),Yt(),Jt(),Xt(),_e.current=null},$t=(e,n)=>{let r=C.current?.getRootNode(),i=nl(el(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},en=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){Jt();return}let r=t.getItem(e.directoryPath),i=cl(r)?r:null;if(i==null||i.isExpanded()){Jt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;fe.current!==a&&(Jt(),fe.current=a,pe.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind===`directory`&&n.directoryPath===e.directoryPath&&n.flattenedSegmentPath===e.flattenedSegmentPath&&i.expand()},n))},tn=()=>{de.current=null;let e=he.current,n=ee.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=al(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,ne.current()),en($t(e.clientX,e.clientY)),de.current=Kt(tn)},nn=(e,t)=>{he.current={clientX:e,clientY:t},de.current??=Kt(tn)},rn=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if(Qt(),Yt(),Jt(),Xt(),t.startDrag(r)===!1)e.preventDefault();else if(_e.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),il())){let t=rl(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Zt(t),ge.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},an=()=>{Yt(),Jt(),Xt(),_e.current=null,t.cancelDrag()},on=(e,n,r)=>{if(Ce.current!=null||ye.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;Se.current={clientX:i.clientX,clientY:i.clientY},xe.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!ye.current;Ce.current!=null&&(clearTimeout(Ce.current),Ce.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),ve.current===o&&(ve.current=null),t&&(a.setAttribute(`draggable`,`true`),xe.current===a&&(xe.current=null),Se.current=null)},s=e=>{let t=e.touches[0],n=Se.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=100||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),ve.current=o,Ce.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),xe.current===a&&(xe.current=null),Se.current=null;return}ye.current=!0,xe.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),_e.current=n;let e=a.getBoundingClientRect(),s=rl(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Zt(s),ge.current=s,be.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=be.current;n!=null&&ge.current!=null&&(ge.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),en($t(t.clientX,t.clientY)),nn(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&$t(n.clientX,n.clientY),t.completeDrag(),Qt()},u=()=>{t.cancelDrag(),Qt()};ve.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},Zc)},sn=e=>{if(A!=null){if(e.key===`Escape`){Bt(),e.preventDefault(),e.stopPropagation();return}ml.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if(dt.isActive()){if(e.isComposing||e.keyCode===229)return;if(e.key===`Escape`)dt.cancel();else if(e.key===`Enter`)dt.commit();else return;Pe(`focus`),Te(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){Ut(P??void 0),e.preventDefault(),e.stopPropagation();return}if(mt){if(e.key===`Escape`)le.current=!1,ue.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=ee.current,r=lc(n,Et);ue.current=F<0||n==null?null:Math.max(0,Math.min(F*s-n.scrollTop,Math.max(0,r-s))),le.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;Pe(`focus`),Te(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(f&&ul(e)){t.openSearch(e.key),Te(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=et&&fl(e),r=pl(e,et),i=r&&C.current!=null?cc(C.current):null,a=r?new Set(xl(C.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==P&&a.has(o)){let e=ee.current;Ke(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),p=t.getFocusedItem();if(p==null)return;let m=cl(p)?p:null,h=u!=null&&(Mt.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=ee.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=bl(u,T.current,te.current);e==null||n==null?y=!1:Ht(e,u)}else if((e.ctrlKey||e.metaKey)&&ll(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;Pe(`focus`);let b=t.getFocusedPath(),x=b!=null&&(Mt.has(b)||a.has(b)),S=g&&b!==u,w=n&&c&&o===u&&b===u;if((h||w)&&b!=null&&(S&&x||w))Ke(b,v?.scrollTop??null),oe.current=!0,Oe(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(j(b,Cl(C.current,v,i,u,s,jt,Et)),oe.current=!0,Oe(e=>e===b?e:b)):Ge()}Te(e=>e+1),e.preventDefault(),e.stopPropagation()};Ic(()=>{f&&mt&&(qe.current?qe.current=!1:sc(w.current))},[mt,f]),Ic(()=>{let e=S.current;switch(gc({hasRenderedInput:e!=null,previousRenamingPath:ce.current,renamingPath:ft})){case`reset`:ce.current=null;return;case`reveal-canonical`:ft!=null&&Wt(ft,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(ze.current=null,ce.current=ft,sc(e),e.select());return}},[Dt.end,Dt.start,ft,Wt,Mt]),Ic(()=>{let e=C.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=cc(e)?.dataset.itemPath??null;Oe(e=>e===t?e:t)},i=()=>{n(),oe.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{t=null,cc(e)==null?(oe.current=!1,Oe(null)):r()},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),oe.current=!1,Oe(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;Oe(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),Ic(()=>{let e=C.current;e!=null&&(I.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[I.physical.scrollTop]),Ic(()=>{let e=null,n=ee.current,r=x.current,i=C.current;if(n==null)return;E.current=lc(n,g);let a=()=>{let e=t.getVisibleCount(),r=uc(E.current,g),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),Qe(Xc({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:h,viewportHeight:r}))};if(!O.current){O.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=uc(E.current,g),i=t.getVisibleRows(e,e)[0]??null;fc(n,e,s,r,h&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}ne.current=a;let o=t.subscribe(()=>{rc(Ee)&&Te(e=>e+1),a()}),l=()=>{We.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),b.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,b.current=!1,Ie(e=>e+1),e=null},50))},u=null,d=()=>{i!=null&&delete i.dataset.overlayReveal,u!=null&&(clearTimeout(u),u=null)},f=()=>{i!=null&&We.current!==!0&&(n.scrollTop>0||(i.dataset.overlayReveal=`true`,u!=null&&clearTimeout(u),u=setTimeout(()=>{d()},200)))},p=()=>{a(),n.scrollTop>0&&d(),Re.current!=null&&b.current&&zt.current(),We.current===!0?b.current=!1:(Ae(e=>e==null?e:null),l())},m=()=>{l(),f()},_=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),v=e=>{_.has(e.key)&&m()};n.addEventListener(`scroll`,p,{passive:!0}),n.addEventListener(`wheel`,m,{passive:!0}),n.addEventListener(`touchmove`,m,{passive:!0}),n.addEventListener(`keydown`,v);let y=typeof ResizeObserver<`u`?new ResizeObserver(e=>{E.current=(e[0]==null?null:dc(e[0]))??lc(n,g),a()}):null;return y?.observe(n),()=>{ne.current=()=>{},o(),n.removeEventListener(`scroll`,p),n.removeEventListener(`wheel`,m),n.removeEventListener(`touchmove`,m),n.removeEventListener(`keydown`,v),e!=null&&clearTimeout(e),u!=null&&clearTimeout(u),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),b.current=!1,E.current=null,y?.disconnect()}},[t,g,s,c,h]),Ic(()=>{et||A==null||Bt(!1)},[Bt,et,A]);let cn=Lc(()=>A==null?null:`${A.path}::${A.source}`,[A]);Ic(()=>{if(cn==null){m?.clearSlotContent(D);return}let t=Re.current;if(t==null)return;let n=y.current??_.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??gl(n.getBoundingClientRect()),close:e=>{zt.current(e?.restoreFocus??!0)},restoreFocus:()=>{Rt.current&&Lt.current(Re.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return m?.setSlotContent(D,i),e?.contextMenu?.onOpen?.(t.item,r),kl(i),queueMicrotask(()=>{i!=null&&i.isConnected&&document.activeElement===i&&kl(i)}),()=>{m?.clearSlotContent(D)}},[cn,e?.contextMenu,m]),Ic(()=>{A!=null&&t.getItem(A.path)==null&&Bt()},[Bt,A,t]),Ic(()=>{if(A==null)return;let e=C.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:C.current,n=e=>{let n=e.target;n instanceof Node&&(hl(e)||_.current?.contains(n)!==!0&&t?.contains(n)!==!0&&Bt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),Bt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[Bt,A]),Ic(()=>{let e=ee.current,n=C.current;if(e==null||n==null){se.current=P;return}let r=P==null?null:te.current.get(P)??null,i=cc(n),a=i?.dataset.itemPath??null,o=pt&&S.current===i,c=f&&w.current===i,l=le.current&&!mt,u=ue.current??0,d=ze.current,p=Be.current,m=Ve.current,g=He.current,_=i!=null,v=oe.current||_,y=se.current!==P,b=p!=null&&p===P&&P!=null,x=!1,T=!1;if(gt!=null&&gt.id!==re.current){re.current=gt.id;let n=gt.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=h?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,Et-s))):jt;x=!0,T=pc(e,n,s,Et,At,gt.offset,t)}t.clearScrollRequest(gt.id)}let E=!x&&l&&mc(e,F,s,Et,At,u),ie=!x&&d!=null&&d===P&&mc(e,F,s,Et,At,jt),D=!x&&m!=null&&m.path===P&&mc(e,F,s,Et,At,m.viewportOffset),ae=!x&&g!=null&&g.path===P&&e.scrollTop!==g.scrollTop;ae&&(e.scrollTop=g.scrollTop),(ae||T||ie||D||E||v&&y&&d!==P&&!b&&fc(e,F,s,Et,jt))&&ne.current(),x?se.current=P:v?o||c&&!l?se.current=P:r==null?(l&&F>=0&&(mc(e,F,s,Et,At,u),ne.current()),se.current=P):((y||l||d===P||p===P||m?.path===P||g?.path===P||a==null||a!==P)&&(sc(r),d===P&&(ze.current=null),p===P&&(Be.current=null),m?.path===P&&(Ve.current=null),g?.path===P&&(He.current=null),le.current=!1,ue.current=null),se.current=P):se.current=P},[t,F,P,Nt,s,pt,mt,Dt,Et,f,gt,h,jt,At,Tt]);let ln=F>=0&&F>=I.visible.startIndex&&F<=I.visible.endIndex,un=P!=null&&Ot.some(e=>qc(e.row)===P),dn=ln||un,fn=nt&&oe.current===!0&&dn?P:null,pn=Ne===`pointer`?ke:null,mn=A?.path??Ue.current??pn??fn??ke,hn=A?.source===`right-click`;Ic(()=>{b.current&&A==null||Vt(ct(mn))},[A,ct,Dt,Et,Fe,Ot,mn,Vt,Tt]);let gn=Rc(e=>{if(b.current||hl(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&Pe(e=>e===`pointer`?e:`pointer`),Ae(e=>e===i?e:i)},[]),_n=Rc(()=>{Ae(null)},[]);Ic(()=>{if(!_t)return;let e=()=>{Qt(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),Qt(),t.cancelDrag()}},[t,_t]);let vn=e=>{if(!_t||t.getDragSession()==null||ye.current)return;let n=nl(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),en(t.getDragSession()?.target??null),nn(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},yn=e=>{if(!_t||t.getDragSession()==null||ye.current)return;let n=e.relatedTarget;n instanceof Node&&C.current?.contains(n)===!0||(Jt(),Xt(),t.setDragTarget(null))},bn=e=>{_t&&t.getDragSession()!=null&&!ye.current&&(e.preventDefault(),$t(e.clientX,e.clientY),t.completeDrag(),Yt(),Jt(),Xt(),_e.current=null)},xn=I.window.height,Sn=I.window.offsetTop,Cn=Math.min(0,Et-xn),wn=Math.min(0,Et-xn-jt),Tn=De===P||le.current,En=P!=null&&Tn&&!Nt&&F>=0?Tt[F]??t.getVisibleRows(F,F)[0]??null:null,L=En==null?null:hc(F,s,Dt,xn),Dn=_e.current,On=xt!=null&&Dn!=null&&Dn.path===xt&&Dn.index>=Dt.start&&Dn.index<=Dt.end,kn=xt!=null&&Dn!=null&&Dn.path===xt&&!On&&Dn.path!==En?.path?Dn:null,An=kn==null?null:hc(kn.index,s,Dt,xn),jn=dl((F>=0?Tt[F]??t.getVisibleRows(F,F)[0]??null:null)?.ancestorPaths.at(-1)??null),R=mt&&P!=null?El(o,P,!Nt):void 0,z=A?.path??(mt?P:De),Mn=A?.path??ke,Nn=ct(mn),Pn=et&&nt&&!hn&&!pt&&Nn!=null&&je!=null&&mn!=null,Fn=et&&(Pn||A!=null),In=A?.anchorRect,Ln=In==null&&Nn!=null&&je!=null&&(A!=null||Pn)?je:null,Rn=In==null?Ln==null?void 0:{top:`${Ln}px`}:{left:`${In.left}px`,position:`fixed`,right:`auto`,top:`${In.top}px`},zn=hn?{opacity:`0`}:void 0,Bn=Rc((e,n,r,i)=>{let a=yc({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:mt,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c)}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=I.visible.startIndex&&n.index<=I.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(oe.current=!0,Oe(e=>e===c?e:c),Pe(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Wt(c,{targetOffset:`sticky-parents`})},[t,mt,I.visible.endIndex,I.visible.startIndex,Wt]),Vn=()=>{if(b.current||!nt||mn==null||Nn==null)return;let e=t.getItem(mn);e!=null&&(Vt(Nn),Rt.current=!0,Le({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:Nn.getAttribute(`aria-label`)??mn,path:e.getPath()},path:e.getPath(),source:`button`}))},Hn={contextHoverPath:Mn,contextMenuButtonTriggerEnabled:nt,contextMenuButtonVisibility:rt,contextMenuEnabled:et,contextMenuRightClickEnabled:it,contextMenuTriggerMode:tt,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:_t,draggedPathSet:yt,dragTarget:bt,gitLaneActive:lt,gitStatusByPath:n,handleRowDragEnd:an,handleRowDragStart:rn,handleRowTouchStart:on,ignoredGitDirectories:r,ignoredInheritanceCache:we,instanceId:o,itemHeight:s,onKeyDown:sn,onRowClick:Bn,openContextMenuForRow:Ht,registerButton:at,registerRenameInput:st,renameView:dt,renderDecorationForRow:Pt,resolveIcon:ut,shouldSuppressContextMenu:Gt,visualFocusPath:z},Un={...Hn,registerButton:ot};return J(`div`,{ref:C,id:St,"data-file-tree-context-menu-button-visibility":et&&nt?rt:void 0,"data-file-tree-context-menu-trigger-mode":et?tt:void 0,"data-file-tree-has-context-menu-action-lane":et&&nt?`true`:void 0,"data-file-tree-has-git-lane":lt?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:_t?yn:void 0,onDragOver:_t?vn:void 0,onDrop:_t?bn:void 0,onKeyDown:sn,onPointerLeave:et?_n:void 0,onPointerOver:et?gn:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[J(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:jn}}),J(`slot`,{name:ie,"data-type":`header-slot`}),f?J(`div`,{"data-file-tree-search-container":!0,"data-open":mt?`true`:`false`,children:J(`input`,{ref:w,"aria-activedescendant":R,"aria-controls":St,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":M?`true`:void 0,value:ht,onBlur:()=>{(d!==`retain`||Ye.current)&&t.closeSearch()},onFocus:Xe,onPointerDown:Xe,onInput:e=>{Xe();let n=e.currentTarget;t.setSearch(n.value)}})}):null,J(`div`,{ref:ee,"data-file-tree-virtualized-scroll":`true`,children:[h&&N&&Ot.length>0?J(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:J(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${Ct}px`},children:Ot.map((e,t)=>jl(Un,e.row,`sticky:${qc(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${Ot.length-t}`}}))})}):null,J(`div`,{ref:x,"data-file-tree-virtualized-list":`true`,style:{height:`${At}px`},children:[J(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${Sn}px`}}),J(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${xn}px`,top:`${Cn}px`,bottom:`${wn}px`},children:[Ml(Hn,Dt,Mt),En!=null&&L!=null?jl(Hn,En,`parked:${En.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:xt===En.path?`none`:void 0,position:`absolute`,right:`0`,top:`${L}px`}}):null,kn!=null&&An!=null?jl(Hn,kn,`parked-drag:${kn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${An}px`}}):null]})]})]}),et?J(`div`,{ref:_,"data-type":`context-menu-anchor`,"data-visible":Fn?`true`:`false`,style:Rn,children:[J(`button`,{ref:y,type:`button`,"data-type":ae,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":A==null?`false`:`true`,"data-visible":Pn?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{e.preventDefault(),e.stopPropagation(),A==null?Vn():Bt()},tabIndex:-1,style:zn,children:J(Es,{...ut(`file-tree-icon-ellipsis`)})}),A==null?null:J(`slot`,{name:D})]}):null,A==null?null:J(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),Bt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),Bt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var Pl={hydrateRoot:(e,t)=>{xs(Zo(Nl,t),e)},renderRoot:(e,t)=>{bs(Zo(Nl,t),e)},unmountRoot:e=>{bs(null,e)}};function Fl(e,t){Pl.renderRoot(e,t)}function Il(e,t){Pl.hydrateRoot(e,t)}function Ll(e){Pl.unmountRoot(e)}var Rl=new WeakMap,zl=new WeakMap,Bl=new WeakSet,Vl=class{constructor(){g(this,Bl),f(this,Rl,new Map),f(this,zl,null)}clearAll(){for(let e of p(Rl,this).values())e.remove();p(Rl,this).clear()}clearSlotContent(e){let t=m(Bl,this,Hl).call(this,e);t!=null&&(t.remove(),p(Rl,this).delete(e))}setHost(e){if(h(zl,this,e),e!=null){m(Bl,this,Wl).call(this,e);for(let[e,t]of p(Rl,this))m(Bl,this,Ul).call(this,e,t)}}setSlotContent(e,t){let n=m(Bl,this,Hl).call(this,e);n===t?t!=null&&(p(Rl,this).set(e,t),m(Bl,this,Ul).call(this,e,t)):(n?.remove(),t==null?p(Rl,this).delete(e):(p(Rl,this).set(e,t),m(Bl,this,Ul).call(this,e,t)))}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=m(Bl,this,Hl).call(this,e);if(r!=null&&r.innerHTML===n){p(Rl,this).set(e,r),m(Bl,this,Ul).call(this,e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}};function Hl(e){let t=p(Rl,this).get(e)??null;if(t!=null)return t;let n=p(zl,this);if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}function Ul(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,p(zl,this)!=null&&t.parentNode!==p(zl,this)&&p(zl,this).appendChild(t)}function Wl(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||p(Rl,this).has(e)||p(Rl,this).set(e,t)}}Array.isArray;var Gl,Kl,Q,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,$,mu=0;function hu(e){return e!=null&&e.length>0?e:(mu+=1,`pst_ft_${mu}`)}function gu({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??me)}function _u(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function vu(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function yu(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var bu=(Kl=new WeakMap,Q=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,au=new WeakMap,ou=new WeakMap,su=new WeakMap,cu=new WeakMap,lu=new WeakMap,uu=new WeakMap,du=new WeakMap,fu=new WeakMap,pu=new WeakMap,$=new WeakSet,Gl=class{constructor(e){g(this,$),f(this,Kl,void 0),f(this,Q,void 0),f(this,ql,void 0),f(this,Jl,void 0),f(this,Yl,void 0),f(this,Xl,void 0),f(this,Zl,void 0),f(this,Ql,void 0),f(this,$l,void 0),f(this,eu,new Vl),f(this,tu,void 0),f(this,nu,void 0),f(this,ru,void 0),f(this,iu,void 0),f(this,au,void 0),f(this,ou,void 0),f(this,su,void 0),f(this,cu,void 0),f(this,lu,void 0),f(this,uu,null),f(this,du,void 0),f(this,fu,!1),f(this,pu,!1);let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:i,id:a,initialSearchQuery:o,icons:s,itemHeight:c,onSearchChange:l,onSelectionChange:u,overscan:d,renderRowDecoration:_,renaming:v,search:y,searchBlurBehavior:b,searchFakeFocus:x,stickyFolders:S,unsafeCSS:C,initialVisibleRowCount:ee,...w}=e;h(Kl,this,t),h(ql,this,hu(a)),h(iu,this,Do(i)),h(au,this,s),h(ou,this,C),h(Jl,this,u),h(Yl,this,_),h(Xl,this,v!=null&&v!==!1),h(Zl,this,b),h(Ql,this,y===!0),h($l,this,x===!0),h(tu,this,pe(n,c)),h(nu,this,{itemHeight:p(tu,this).itemHeight,overscan:d,stickyFolders:S,initialVisibleRowCount:ee}),h(Q,this,new Oa({...w,fileTreeSearchMode:r,initialSearchQuery:o,onSearchChange:l,renaming:v})),h(lu,this,p(Q,this).getSelectionVersion()),h(uu,this,p(Jl,this)==null?null:this.subscribe(()=>{m($,this,Tu).call(this)}))}unmount(){p(du,this)!=null&&(Ll(p(du,this)),delete p(du,this).dataset.fileTreeVirtualizedWrapper,h(du,this,void 0)),p(eu,this).clearAll(),p(eu,this).setHost(null),p(ru,this)!=null&&(delete p(ru,this).dataset.fileTreeVirtualized,m($,this,Pu).call(this,p(ru,this)),h(ru,this,void 0))}cleanUp(){this.unmount(),p(uu,this)?.call(this),h(uu,this,null),p(Q,this).destroy()}getFileTreeContainer(){return p(ru,this)}getItem(e){return p(Q,this).getItem(e)}getFocusedItem(){return p(Q,this).getFocusedItem()}getFocusedPath(){return p(Q,this).getFocusedPath()}getFocusedIndex(){return p(Q,this).getFocusedIndex()}getVisibleCount(){return p(Q,this).getVisibleCount()}getVisibleRows(e,t){return p(Q,this).getVisibleRows(e,t)}getSelectedPaths(){return p(Q,this).getSelectedPaths()}getComposition(){return p(Kl,this)}getItemHeight(){return p(tu,this).itemHeight}getDensityFactor(){return p(tu,this).factor}subscribe(e){let t=!1;return p(Q,this).subscribe(()=>{t?e():t=!0})}focusPath(e){p(Q,this).focusPath(e)}focusFirstItem(){p(Q,this).focusFirstItem()}focusLastItem(){p(Q,this).focusLastItem()}focusNextItem(){p(Q,this).focusNextItem()}focusPreviousItem(){p(Q,this).focusPreviousItem()}focusParentItem(){p(Q,this).focusParentItem()}scrollToPath(e,t){p(Q,this).scrollToPath(e,t)}focusNearestPath(e){return p(Q,this).focusNearestPath(e)}add(e){p(Q,this).add(e)}batch(e){p(Q,this).batch(e)}applyGitStatusPatch(e){let t=Oo(p(iu,this),e);if(t===p(iu,this))return;h(iu,this,t);let n=m($,this,Cu).call(this);n!=null&&Fl(n.wrapper,m($,this,Su).call(this))}move(e,t,n){p(Q,this).move(e,t,n)}onMutation(e,t){return p(Q,this).onMutation(e,t)}setSearch(e){p(Q,this).setSearch(e)}openSearch(e){p(Q,this).openSearch(e)}closeSearch(){p(Q,this).closeSearch()}isSearchOpen(){return p(Q,this).isSearchOpen()}getSearchValue(){return p(Q,this).getSearchValue()}getSearchMatchingPaths(){return p(Q,this).getSearchMatchingPaths()}focusNextSearchMatch(){p(Q,this).focusNextSearchMatch()}focusPreviousSearchMatch(){p(Q,this).focusPreviousSearchMatch()}startRenaming(e,t){return p(Q,this).startRenaming(e,t)}remove(e,t){p(Q,this).remove(e,t)}resetPaths(e,t){Array.isArray(e)?p(Q,this).resetPaths(e,t):p(Q,this).resetPaths(e)}setComposition(e){h(Kl,this,e);let t=m($,this,Cu).call(this);t!=null&&(m($,this,Eu).call(this),Fl(t.wrapper,m($,this,Su).call(this)))}setGitStatus(e){let t=Do(e,p(iu,this));if(t===p(iu,this))return;h(iu,this,t);let n=m($,this,Cu).call(this);n!=null&&Fl(n.wrapper,m($,this,Su).call(this))}setIcons(e){h(au,this,e);let t=m($,this,Cu).call(this);t!=null&&(m($,this,wu).call(this,t.host,t.wrapper),Fl(t.wrapper,m($,this,Su).call(this)))}hydrate({fileTreeContainer:e}){let t=m($,this,Mu).call(this,e),n=m($,this,ju).call(this,t);m($,this,Eu).call(this),Il(n,m($,this,Su).call(this))}render({containerWrapper:e,fileTreeContainer:t}){let n=m($,this,Mu).call(this,t??p(ru,this),e),r=m($,this,ju).call(this,n);m($,this,Eu).call(this),Fl(r,m($,this,Su).call(this))}},i(Gl,`LoadedCustomComponent`,!0),Gl);function xu(){return{initialViewportHeight:gu({initialVisibleRowCount:p(nu,this).initialVisibleRowCount,itemHeight:p(nu,this).itemHeight}),itemHeight:p(nu,this).itemHeight,overscan:p(nu,this).overscan,stickyFolders:p(nu,this).stickyFolders}}function Su(){return{composition:p(Kl,this),controller:p(Q,this),gitStatusByPath:p(iu,this)?.statusByPath,ignoredGitDirectories:p(iu,this)?.ignoredDirectoryPaths,directoriesWithGitChanges:p(iu,this)?.directoriesWithChanges,icons:p(au,this),instanceId:p(ql,this),renamingEnabled:p(Xl,this),renderRowDecoration:p(Yl,this),searchBlurBehavior:p(Zl,this),searchEnabled:p(Ql,this),searchFakeFocus:p($l,this),slotHost:p(eu,this),...m($,this,xu).call(this)}}function Cu(){let e=p(ru,this),t=p(du,this);return e==null||t==null?null:{host:e,wrapper:t}}function wu(e,t){let n=e.shadowRoot;n!=null&&(m($,this,Du).call(this,n),m($,this,Ou).call(this,n)),m($,this,ku).call(this,t)}function Tu(){let e=p(Jl,this);if(e==null)return;let t=p(Q,this).getSelectionVersion();t!==p(lu,this)&&(h(lu,this,t),e(p(Q,this).getSelectedPaths()))}function Eu(){let e=p(Kl,this)?.header?.render;e==null?p(eu,this).setSlotHtml(ie,p(Kl,this)?.header?.html??null):p(eu,this).setSlotContent(ie,e())}function Du(e){let t=yu(e).find(e=>vu(e)),n=_u(x(b(p(au,this)).set));n!=null&&(t==null||t.outerHTML!==n.outerHTML)&&(t==null?e.prepend(n):t.replaceWith(n))}function Ou(e){let t=yu(e),n=t.find(e=>vu(e)),r=t.filter(e=>e!==n),i=b(p(au,this)).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let a=_u(i);if(a==null)for(let e of r)e.remove();else if(r.length!==1||r[0].outerHTML!==a.outerHTML){for(let e of r)e.remove();e.appendChild(a)}}function ku(e){let t=b(p(au,this));t.colored&&y(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}function Au(e){let t=e.querySelector(`style[${T}]`);p(su,this)==null&&t instanceof HTMLStyleElement&&h(su,this,t),p(ou,this)==null||p(ou,this)===``?(p(su,this)?.remove(),h(su,this,void 0),h(cu,this,void 0)):(p(su,this)?.parentNode!==e||p(cu,this)!==p(ou,this))&&(p(su,this)??h(su,this,document.createElement(`style`)),p(su,this).setAttribute(T,``),p(su,this).parentNode!==e&&e.appendChild(p(su,this)),p(su,this).textContent=ve(p(ou,this)),h(cu,this,p(ou,this)))}function ju(e){if(p(du,this)!=null)return p(du,this);let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===p(ql,this))??n[0];return r!=null&&h(ql,this,r.dataset.fileTreeId??p(ql,this)),h(du,this,r??document.createElement(`div`)),p(du,this).dataset.fileTreeId=p(ql,this),p(du,this).dataset.fileTreeVirtualizedWrapper=`true`,m($,this,wu).call(this,e,p(du,this)),p(du,this).parentNode!==t&&t.appendChild(p(du,this)),p(du,this)}function Mu(e,t){let n=e??p(ru,this)??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return we(n,r),m($,this,Au).call(this,r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,m($,this,Nu).call(this,n),p(eu,this).setHost(n),h(ru,this,n),n}function Nu(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(p(tu,this).itemHeight)}px`),h(fu,this,!0)),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(p(tu,this).factor)),h(pu,this,!0))}function Pu(e){p(fu,this)&&(e.style.removeProperty(`--trees-item-height`),h(fu,this,!1)),p(pu,this)&&(e.style.removeProperty(`--trees-density-override`),h(pu,this,!1))}function Fu(e){let[t]=(0,O.useState)(()=>new bu(e)),n=(0,O.useRef)({timeout:null,model:t});return(0,O.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}var Iu=`
  :host {
    --trees-bg-override: transparent;
    --trees-selected-bg-override: color-mix(in srgb, currentColor 12%, transparent);
    --trees-hover-bg-override: color-mix(in srgb, currentColor 7%, transparent);
    --trees-border-color-override: color-mix(in srgb, currentColor 14%, transparent);
    --trees-font-family-override: var(--font-sans);
    --trees-font-size-override: 0.75rem;
  }
  [data-truncate-content='visible'] { overflow: hidden; text-overflow: ellipsis; }
  [data-truncate-marker] { display: none; }
  button[data-type='item'], button[data-type='item']::before { border-radius: var(--radius-md); }
  svg[data-icon-name='t3-tree-icon-loading'] { opacity: 0.6; }
  @media (prefers-reduced-motion: no-preference) {
    svg[data-icon-name='t3-tree-icon-loading'] { animation: t3-tree-spin 1s linear infinite; }
  }
  @keyframes t3-tree-spin { to { transform: rotate(360deg); } }
`;function Lu(e){return{colorScheme:e,"--trees-fg-override":`var(--contrast-foreground)`,"--trees-fg-muted-override":`var(--contrast-muted-foreground)`,"--trees-status-ignored-override":`var(--contrast-muted-foreground)`}}function Ru(e){return typeof e!=`object`||!e||!(`isDirectory`in e)||typeof e.isDirectory!=`function`||!e.isDirectory()||!(`isExpanded`in e)||typeof e.isExpanded!=`function`||!(`expand`in e)||typeof e.expand!=`function`||!(`collapse`in e)||typeof e.collapse!=`function`?null:e}function zu(e,t){let n=!1,r=!0,i=e.subscribe(()=>{n||(n=!0,queueMicrotask(()=>{n=!1,r&&t()}))});return()=>{r=!1,i()}}function Bu(e,t){return t.length>0&&t.every(t=>{let n=Ru(e.getItem(t));return n!==null&&n.isExpanded()})}function Vu(e,t,n){for(let r of t){let t=Ru(e.getItem(r));t!==null&&t.isExpanded()!==n&&(n?t.expand():t.collapse())}}function Hu(e){let t=!1,n=!1;return()=>{if(t)n=!0;else{t=!0;try{do n=!1,e();while(n)}finally{t=!1}}}}var Uu=`t3code.fileTreeExpandedDirectories`,Wu=20,Gu=d(u({root:l,paths:d(l)}));function Ku(){try{return s(Uu,Gu)??[]}catch(e){return console.error(e),[]}}function qu(e){return Ku().find(t=>t.root===e)?.paths??[]}function Ju(e,t){let n=Ku().filter(t=>t.root!==e),r=t.length>0?[{root:e,paths:t},...n]:n;try{a(Uu,r.slice(0,Wu),Gu)}catch(e){console.error(e)}}var Yu=n(),Xu=160,Zu=560,Qu=256;function $u(e){let t=(0,Yu.c)(33),{resizable:n,children:r,storageKey:i,defaultWidth:a,defaultWidthFraction:s,minWidth:l,resizeLabel:u}=e,d=i===void 0?`t3code.fileExplorerWidth`:i,f=a===void 0?256:a,p=l===void 0?Xu:l,m=o(),[h,g]=(0,O.useState)(Zu),[v,y]=(0,O.useState)(f),b;t[0]!==h||t[1]!==p||t[2]!==v||t[3]!==d?(b={storageKey:d,defaultWidth:v,minWidth:p,maxWidth:h,edge:`left`},t[0]=h,t[1]=p,t[2]=v,t[3]=d,t[4]=b):b=t[4];let{width:x,setWidth:w,handlers:te}=S(b),T;t[5]!==f||t[6]!==s||t[7]!==p||t[8]!==n?(T=e=>{let t=e?.parentElement;if(!t||!n)return;let r=()=>{let e=Math.max(p,Math.min(f,t.clientWidth*(s??1))),n=Math.max(t.clientWidth-Qu,s===void 0?p:e);g(Math.max(p,Math.min(Zu,n))),y(e)};return r(),_(t,r)},t[5]=f,t[6]=s,t[7]=p,t[8]=n,t[9]=T):T=t[9];let ne;t[10]===m?ne=t[11]:(ne=m(`File explorer`),t[10]=m,t[11]=ne);let E=n?`border-l border-border/60`:`flex-1`,re;t[12]===E?re=t[13]:(re=c(`relative flex min-h-0 min-w-0 shrink-0 bg-background`,E),t[12]=E,t[13]=re);let ie;t[14]!==n||t[15]!==x?(ie=n?{[ee]:`${x}px`,width:`var(${ee})`}:void 0,t[14]=n,t[15]=x,t[16]=ie):ie=t[16];let D;t[17]!==m||t[18]!==te||t[19]!==h||t[20]!==p||t[21]!==n||t[22]!==u||t[23]!==w||t[24]!==x?(D=n?(0,k.jsx)(C,{handlers:te,label:u??m(`Resize file explorer`),tabIndex:0,"aria-valuenow":x,"aria-valuemin":p,"aria-valuemax":h,onKeyDown:e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;let t;bb62:switch(e.key){case`ArrowLeft`:t=x+16;break bb62;case`ArrowRight`:t=x-16;break bb62;case`Home`:t=p;break bb62;case`End`:t=h;break bb62;default:return}e.preventDefault(),e.stopPropagation(),w(t)}}):null,t[17]=m,t[18]=te,t[19]=h,t[20]=p,t[21]=n,t[22]=u,t[23]=w,t[24]=x,t[25]=D):D=t[25];let ae;return t[26]!==r||t[27]!==D||t[28]!==T||t[29]!==ne||t[30]!==re||t[31]!==ie?(ae=(0,k.jsxs)(`aside`,{ref:T,"aria-label":ne,className:re,style:ie,children:[D,r]}),t[26]=r,t[27]=D,t[28]=T,t[29]=ne,t[30]=re,t[31]=ie,t[32]=ae):ae=t[32],ae}export{Vu as a,Iu as c,de as d,qu as i,Lu as l,Bu as n,zu as o,Hu as r,Ju as s,$u as t,Fu as u};