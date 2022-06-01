import fs from 'fs';

import CustomValidationError from '../errors/custom-validation-error.js';

export const create = async () => {
    const filePath = './files/fresh.txt';

    fs.stat(filePath, (err) => {
        if (err == null) {
            throw new CustomValidationError('FS operation failed');
        } else if (err.code === 'ENOENT') {
            fs.writeFile(filePath, 'I am fresh and young', (err) => {
                if (err) throw err;

                console.log('File is created successfully.');
            });
        } else {
            console.log('Some other error: ', err.code);
        }
    });
};

create();