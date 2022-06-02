import fs from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

const callback = (err) => {
  if (err) throw err;
};

export const create = async () => {
  const filePath = `./${FILES}/fresh.txt`;

  fs.stat(filePath, (err) => {
    if (err == null) {
      throw new CustomValidationError('FS operation failed');
    } else if (err.code === 'ENOENT') {
      fs.writeFile(filePath, 'I am fresh and young', callback);
    } else {
      throw err;
    }
  });
};

create();
