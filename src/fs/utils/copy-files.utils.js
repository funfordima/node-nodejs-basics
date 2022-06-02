import {
  writeFileSync,
  readFileSync,
  readdirSync,
} from 'fs';

export const copyFiles = (source, target) => {
  const files = readdirSync(`./${source}`);

  files.forEach((file) => {
    writeFileSync(`./${target}/${file}`, readFileSync(`./${source}/${file}`, 'utf-8'), 'utf8');
  });
};
