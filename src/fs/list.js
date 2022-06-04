import { existsSync, readdirSync } from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const list = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}`;

  try {
    const isFilesExists = existsSync(sourcePath);

    if (!isFilesExists) {
      throw new CustomValidationError('FS operation failed');
    }
  } catch (err) {
    throw err;
  }

  const files = readdirSync(`${sourcePath}`);
  process.stdout.write(JSON.stringify(files));
};

list();
