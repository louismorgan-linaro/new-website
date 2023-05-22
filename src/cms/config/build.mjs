/* 
    build.mjs
    Custom Vite build script for extension files,
    to execute after default build finishes its work.
*/
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extScripts = [
    {
        entry: path.resolve(__dirname, 'index.js'),
        fileName: 'netlify-config'
    },
];

extScripts.forEach(async (scr) => {
    await build({
        build: {
            // Weather to add sourcemap or not
            // make it false if not required
            sourcemap: false,
            outDir: './public/admin',
            lib: {
                ...scr,
                formats: ['es']
            },
            emptyOutDir: false
        },
        configFile: false
    });
});
