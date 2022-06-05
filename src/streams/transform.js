import { pipeline } from 'stream';
import { reverseTransformer } from './utils/reverse-transformer.js';

export const transform = async () => {
  pipeline(
    process.stdin,
    reverseTransformer,
    process.stdout,
    (err) => {
      if (err) {
        process.stderr.write(err);
      }
    });
};

transform();
