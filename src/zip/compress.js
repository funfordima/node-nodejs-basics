import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import zlib from 'zlib';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const compress = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'fileToCompress.txt');
  const targetPath = path.resolve(getPath(import.meta.url), FILES, 'archive.gz');
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath);

  pipeline(
    readStream,
    zlib.createGzip(),
    writeStream,
    (err) => {
      if (err) {
        process.stderr.write(err);
      }
    });
};

compress();
