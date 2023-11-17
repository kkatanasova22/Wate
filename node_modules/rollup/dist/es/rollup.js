/*
  @license
	Rollup.js v4.4.1
	Tue, 14 Nov 2023 05:24:21 GMT - commit 01d8c9d1b68919c2c429427ae7e60f503a8bb5f4

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
export { version as VERSION, defineConfig, rollup, watch } from './shared/node-entry.js';
import './shared/parseAst.js';
import '../native.js';
import 'node:path';
import 'path';
import 'node:process';
import 'node:perf_hooks';
import 'node:fs/promises';
import 'tty';
