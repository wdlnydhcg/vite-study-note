// import json from '@rollup/plugin-json';
//
// export default {
//     input: 'index.js',
//     output: {
//         file: 'dist/bundle.js',
//         format: 'umd',
//         name: 'MyBundle'
//     },
//     plugins: [json()]
//
//
// }

import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
export default [{
    input: 'index.js',
    external: ['react'],
    output: {
        file: 'dist/bundle.umd.js',
        format: 'umd',
        name: 'MyBundle'
    },
    plugins: [nodeResolve(), alias({
        entries: {
            a:"./funA",
        }
    }),commonjs()
    ],
    }, {
    input: 'index.js',
    output: {
        file: 'dist/bundle.es.js',
        format: 'es',

    },
    plugins: [nodeResolve(), commonjs()]

    }]
