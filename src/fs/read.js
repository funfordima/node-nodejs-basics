import { existsSync, readFileSync } from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from './utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const read = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}/fileToRead.txt`;

  try {
    const isFilesExists = existsSync(sourcePath);

    if (!isFilesExists) {
      throw new CustomValidationError('FS operation failed');
    }
  } catch (err) {
    throw err;
  }

  const file = readFileSync(sourcePath, 'utf-8');

  process.stdout.write(file);
};

read();
