import { mkdirSync } from 'fs';

export const createDirectory = (target) => {
  mkdirSync(target, (err) => {
    if (err) {
      throw err;
    }
  });
};
