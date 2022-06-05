import { cpus } from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

import { getPath } from '../utils/get-path.util.js';

export const performCalculations = async () => {
  const sourcePath = path.resolve(getPath(import.meta.url), 'worker.js');

  let workerList = [];
  const resultList = cpus().map((_, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(sourcePath);
      workerList.push(worker);
      worker.postMessage(10 + i);
      worker.on("message", (data) => resolve({ status: 'resolved', data }));
      worker.on("error", () => reject({ status: 'error', data: null }));
    });
  });

  const result = JSON.stringify(await Promise.all(resultList));
  workerList.forEach((worker) => worker.terminate());
  process.stdout.write(result);
};

performCalculations();
