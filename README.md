# T3 Code nightly for Safari 15

Personal static frontend build based on nightly `0.0.46-nightly.20261012.3035`, upstream commit `511d20c6f20c2ed6ff787aba068d7d673e2949b9`.

https://thiagojdb.github.io/t3code-safari15/

Connect to an existing T3 Code server using its HTTPS pairing link through Settings / Connections. No backend, credentials or user data are included. T3 Connect cloud sign-in is not configured on this custom origin.

Includes JavaScript API and constructable stylesheet polyfills, Safari 15.6 output, RGB theme colours and simplified CSS effects. Browser verification has not been performed; actual iOS 15 testing remains necessary.

This is a pinned nightly snapshot, not an automatic daily rebuild.

The compatibility patch is in `safari15.patch`. Build from the upstream commit with the patch applied, install dependencies, then run in `apps/web`:

```
T3CODE_LEGACY_BROWSER=1 T3CODE_WEB_SOURCEMAP=0 VITE_HOSTED_APP_CHANNEL=nightly APP_VERSION=0.0.46-nightly.20261012.3035 ../../node_modules/.bin/vp build --base ./
```

Third-party notices are shipped with the application. Upstream: https://github.com/pingdotgg/t3code
