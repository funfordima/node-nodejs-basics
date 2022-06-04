import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const compress = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}\\fileToCompress.txt`;
  const targetPath = `${getPath(import.meta.url)}\\${FILES}\\archive.gz`;
  const stream = createReadStream(sourcePath);

  stream.pipe(zlib.createGzip())
    .pipe(createWriteStream(targetPath));
};

compress();
