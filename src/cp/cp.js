import { fork } from 'child_process';

import { FILES } from '../constants/path-files.constants.js';
import { getPath } from '../utils/get-path.util.js';

export const spawnChildProcess = async (args) => {
  const sourcePath = `${getPath(import.meta.url)}\\${FILES}\\script.js`;

  fork(sourcePath, args);
};

spawnChildProcess(['RsSchool', 'NodeJS']);
