import path from 'path';
import { readdir, writeFile, readFile } from 'fs/promises';

export const copyFiles = async (source, target) => {
  const files = await readdir(source);

  files.forEach((file) => {
    const sourcePath = path.resolve(source, file);
    const targetPath = path.resolve(target, file);

    try {
      (async () => {
        const fileToRead = await readFile(sourcePath, { encoding: 'utf-8' });
        await writeFile(targetPath, fileToRead);
      })();
    } catch (err) {
      process.stderr.write(err);
    }
  });
};
