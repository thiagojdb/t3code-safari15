# T3 Code nightly for Safari 15

A static frontend for iOS Safari 15.6, based on T3 Code nightly
`0.1.11-nightly.20261119.4954` (upstream commit
`b0b2c4f952d3a12a886e915ad8ffe7e82ebc1fb4`).

https://thiagojdb.github.io/t3code-safari15/

Connect to an existing T3 Code server using its HTTPS pairing link in
Settings → Connections. The ⋯ button next to a thread opens its actions on
touch devices. T3 Connect cloud sign-in is unavailable on this custom origin.

This is a pinned snapshot. The compatibility patch targets Safari 15.6
JavaScript and CSS, adds browser API polyfills, and preserves the site's
subpath for pairing, routing, and the Home Screen app.

To reproduce the build, apply `safari15.patch` to the upstream commit and use
Node 26.13.1 and pnpm 12.14.0:

```sh
pnpm install --frozen-lockfile --ignore-scripts --filter '@t3tools/web...' --filter '@t3tools/monorepo'
cd apps/web
T3CODE_LEGACY_BROWSER=1 T3CODE_WEB_SOURCEMAP=0 VITE_HOSTED_APP_CHANNEL=nightly \
  APP_VERSION=0.1.11-nightly.20261119.4954 ../../node_modules/.bin/vp build --base /t3code-safari15/
cp dist/index.html dist/404.html
touch dist/.nojekyll
```

The Pages workflow publishes the checked-in `dist` directory. The frontend
includes third-party notices and ships no backend or credentials.
