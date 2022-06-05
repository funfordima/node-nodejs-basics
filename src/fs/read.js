import path from 'path';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const read = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'fileToRead.txt');

  try {
    const isFilesExists = existsSync(sourcePath);

    if (!isFilesExists) {
      throw new CustomValidationError('FS operation failed');
    }

    const file = await readFile(sourcePath);

    process.stdout.write(file);
  } catch (err) {
    throw err;
  }
};

read();
