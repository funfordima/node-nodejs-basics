import path from 'path';
import { URL } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';

import { getPath } from '../fs/utils/get-path.util.js';
import * as file from './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  // unknownObject = await import('./files/a.json', { assert: { type: 'json' } });
  unknownObject = JSON.parse(
    await readFile(
      new URL('./files/a.json', import.meta.url)
    )
  );
} else {
  // unknownObject = await import('./files/b.json', { assert: { type: 'json' } });
  unknownObject = JSON.parse(
    await readFile(
      new URL('./files/b.json', import.meta.url)
    )
  );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const __filename = new URL('', import.meta.url).pathname;
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${getPath(import.meta.url)}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export {
  unknownObject,
  createMyServer,
}
