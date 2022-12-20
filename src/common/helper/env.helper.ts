import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
    const fallback: string = resolve(`${dest}/.env`);
    const filename: string = 'development.env';
    let filePath: string = resolve(`${dest}/${filename}`);

    if (!existsSync(filePath)) {
        filePath = fallback;
    }

    return filePath;
}