import { createWriteStream } from 'fs';
import path from 'path';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const write = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'fileToWrite.txt');
  const writable = createWriteStream(sourcePath);

  process.stdin.pipe(writable).on('error', (err) => process.stderr.write(err));
  process.on('SIGINT', () => {
    writable.end();
    process.exit();
  });
};

write();
