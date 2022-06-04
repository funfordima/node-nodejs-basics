import { existsSync } from 'fs';

import { FILES, FILES_COPY } from '../constants/path-files.constants.js';
import { copyFiles } from './utils/copy-files.util.js';
import { createDirectory } from './utils/create-directory.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';
import { getPath } from '../utils/get-path.util.js';

export const copy = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}`;
  const targetPath = `${getPath(import.meta.url)}\\${FILES_COPY}`;

  try {
    const isFilesExists = existsSync(sourcePath);
    const isFilesCopyExists = existsSync(targetPath);

    if (!isFilesExists || isFilesCopyExists) {
      throw new CustomValidationError('FS operation failed');
    } else if (!isFilesCopyExists) {
      createDirectory(targetPath);
    }
  } catch (err) {
    throw err;
  }

  copyFiles(sourcePath, targetPath);
};

copy();
