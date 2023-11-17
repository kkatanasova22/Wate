/*
  @license
	Rollup.js v4.4.1
	Tue, 14 Nov 2023 05:24:21 GMT - commit 01d8c9d1b68919c2c429427ae7e60f503a8bb5f4

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const rollup = require('./shared/rollup.js');
const watchProxy = require('./shared/watch-proxy.js');
require('./shared/parseAst.js');
require('./native.js');
require('node:path');
require('node:process');
require('tty');
require('path');
require('node:perf_hooks');
require('node:fs/promises');
require('./shared/fsevents-importer.js');



exports.VERSION = rollup.version;
exports.defineConfig = rollup.defineConfig;
exports.rollup = rollup.rollup;
exports.watch = watchProxy.watch;
//# sourceMappingURL=rollup.js.map
