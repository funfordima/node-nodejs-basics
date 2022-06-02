import fs from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from './utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';
import { errorCallback } from './utils/error-callback.util.js';

export const create = async () => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}\\fresh.txt`;

  fs.stat(sourcePath, (err) => {
    if (err == null) {
      throw new CustomValidationError('FS operation failed');
    } else if (err.code === 'ENOENT') {
      fs.writeFile(sourcePath, 'I am fresh and young', errorCallback);
    } else {
      throw err;
    }
  });
};

create();
