import { renameSync, existsSync } from 'fs';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const rename = async () => {
  const sourcePath = `${getPath(import.meta.url)}/${FILES}/wrongFilename.txt`;
  const targetPath = `${getPath(import.meta.url)}/${FILES}/properFilename.md`;

  try {
    const isSourceFileExist = existsSync(sourcePath);
    const isTargetFileExists = existsSync(targetPath);

    if (!isSourceFileExist || isTargetFileExists) {
      throw new CustomValidationError('FS operation failed');
    }

    renameSync(sourcePath, targetPath);
  } catch (err) {
    throw err;
  }
};

rename();
