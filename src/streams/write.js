import { createWriteStream } from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const write = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}\\fileToWrite.txt`;
  const writable = createWriteStream(sourcePath);

  process.stdin.pipe(writable);
  process.on('SIGINT', () => {
    writable.end();
    process.exit();
  });
};

write();
