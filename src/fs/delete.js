import path from 'path';
import { existsSync } from 'fs';
import { unlink } from 'fs/promises';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const remove = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'fileToRemove.txt');

  try {
    const isSourceFileExist = existsSync(sourcePath);

    if (!isSourceFileExist) {
      throw new CustomValidationError('FS operation failed');
    }
    await unlink(sourcePath);
  } catch (err) {
    throw err;
  }
};

remove();
