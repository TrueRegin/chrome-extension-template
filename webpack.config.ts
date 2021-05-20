import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import fs from 'fs';

export default {
    mode: "production",
    context: resolve('src'),
    entry: {
        onpage: './onpage.ts',
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                ...fs.existsSync(resolve('dist/icons/icon-128.png')) ? [] : [{ from: 'icons/*\.(png|jpg)', to: '.' }],
                { from: 'manifest.json', to: 'manifest.json' },
                { from: 'mod.css', to: 'mod.css' },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    
} as webpack.Configuration;
