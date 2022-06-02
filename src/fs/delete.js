import { existsSync, unlink } from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from './utils/get-path.util.js';
import { errorCallback } from './utils/error-callback.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const remove = async () => {
  const sourcePath = `${getPath(import.meta.url)}/${FILES}/fileToRemove.txt`;

  try {
    const isSourceFileExist = existsSync(sourcePath);

    if (!isSourceFileExist) {
      throw new CustomValidationError('FS operation failed');
    }
  } catch (err) {
    throw err;
  }

  unlink(sourcePath, errorCallback);
};

remove();
