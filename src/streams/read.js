import { createReadStream } from 'fs';
import path from 'path';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const read = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'fileToRead.txt');
  const stream = createReadStream(sourcePath);
  stream.pipe(process.stdout, { end: false });
};

read();
