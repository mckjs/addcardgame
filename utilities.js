import {readFileSync, promises as fsPromises} from 'fs';
import fs from 'fs';

export default class Utilities {
    syncReadFile(filename) {
        try {
            const contents = readFileSync(filename, 'utf-8');

            const arr = contents.split(/\r?\n/);

            return arr;
        } catch (err) {
            console.log(err);
        }
    }

    syncWriteFile(sOutputFileName, sData) {
        fs.writeFile(sOutputFileName, sData, (err) => {
            // In case of a error throw err.
            if (err) throw err;
        })
    }
}