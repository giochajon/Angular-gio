// Workaround for old webpack4-era tooling (Angular <=12 toolchains) calling
// crypto.createHash('md4') which OpenSSL 3 (bundled with modern Node) no
// longer supports. Falls back to sha256 for any unsupported digest so the
// legacy build pipeline keeps working without needing a global OpenSSL
// provider flag.
"use strict";
const crypto = require("crypto");
const originalCreateHash = crypto.createHash;
crypto.createHash = function patchedCreateHash(algorithm, options) {
  try {
    return originalCreateHash(algorithm, options);
  } catch (err) {
    return originalCreateHash("sha256", options);
  }
};
