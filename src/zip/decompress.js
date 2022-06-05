import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import zlib from 'zlib';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const decompress = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'archive.gz');
  const targetPath = path.resolve(getPath(import.meta.url), FILES, 'fileToCompress.txt');
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath);

  pipeline(
    readStream,
    zlib.createGunzip(),
    writeStream,
    (err) => {
      if (err) {
        process.stderr.write(err);
      }
    });
};

decompress();
