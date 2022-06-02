import { existsSync } from 'fs';

import { FILES, FILES_COPY } from '../constants/path-files.constants.js';
import { copyFiles } from './utils/copy-files.utils.js';
import { createDirectory } from './utils/create-directory.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const copy = async () => {
  try {
    const isFilesExists = existsSync(FILES);
    const isFilesCopyExists = existsSync(FILES_COPY);

    if (!isFilesExists || isFilesCopyExists) {
      throw new CustomValidationError('FS operation failed');
    } else if (!isFilesCopyExists) {
      createDirectory(FILES_COPY);
    }
  } catch (err) {
    throw err;
  }

  copyFiles(FILES, FILES_COPY);
};

copy();
