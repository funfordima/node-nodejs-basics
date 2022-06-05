import path from 'path';
import { existsSync } from 'fs';
import { rename as renamePromise } from 'fs/promises';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';
import { CustomValidationError } from '../errors/custom-validation-error.js';

export const rename = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), FILES, 'wrongFilename.txt');
  const targetPath = path.resolve(getPath(import.meta.url), FILES, 'properFilename.md');

  try {
    const isSourceFileExist = existsSync(sourcePath);
    const isTargetFileExists = existsSync(targetPath);

    if (!isSourceFileExist || isTargetFileExists) {
      throw new CustomValidationError('FS operation failed');
    }

    await renamePromise(sourcePath, targetPath);
  } catch (err) {
    throw err;
  }
};

rename();
