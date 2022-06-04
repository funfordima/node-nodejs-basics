import { reverseTransformer } from './utils/reverse-transformer.js';

export const transform = async () => {
  process.stdin.pipe(reverseTransformer).pipe(process.stdout);
};

transform();
