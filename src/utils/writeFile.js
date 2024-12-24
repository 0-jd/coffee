import fs from 'fs/promises';
import path from 'path';

export async function writeFile(filepath, content) {
    const dirPath = path.dirname(filepath);

    try {
        await fs.mkdir(dirPath, { recursive: true });
    } catch (error) {
        console.warn(`| CREATE DIR ERROR | Caught an error while trying to create: ${dirPath}. Reason: ${error.message}`);
        throw error;
    }

    try {
        await fs.writeFile(filepath, content, 'utf8');
    } catch (error) {
        console.warn(`| WRITE FILE ERROR | Encountered an error while creating ${filepath}. Reason: ${error.message}`);
        throw error;
    }
}
