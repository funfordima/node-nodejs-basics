import fs from 'fs';
const {
  createHash
} = await import('crypto');

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../fs/utils/get-path.util.js';

export const calculateHash = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}\\fileToCalculateHashFor.txt`;
  const fileBuffer = fs.readFileSync(sourcePath);
  const hash = createHash('sha256');
  hash.update(fileBuffer);

  const hex = `${hash.digest('hex')}`;

  return hex;
};

calculateHash();
