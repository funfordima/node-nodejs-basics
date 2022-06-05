import { Transform } from 'stream';

const reversText = (text) => text.split('').reverse().join('').concat('\n');

export const reverseTransformer = new Transform({
  transform(chunk, encoding, callback) {
    this.push(reversText(chunk.toString()));
    callback();
  }
});
