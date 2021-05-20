import fs from 'fs';
import { resolve } from 'path';
import Jimp from 'jimp';

const iconsDir = resolve('dist/icons');
const images = fs.readdirSync(iconsDir);
if(images.includes('icon.png') || images.includes('icon.jpg')) {
    if(!images.includes('icon-16.png') || !images.includes('icon-48.png') || !images.includes('icon-128.png')) {
        let imgpath: string;
        if(images.includes('icon.png')) {
            imgpath = resolve(iconsDir, 'icon.png');
        } else {
            imgpath = resolve(iconsDir, 'icon.jpg');
        }

        Jimp.read(imgpath, (err, img) => {
            if(err) throw err;

            img.resize(128, 128).write(resolve(iconsDir, 'icon-128.png'))
            img.resize(48, 48).write(resolve(iconsDir, 'icon-48.png'))
            img.resize(16, 16).write(resolve(iconsDir, 'icon-16.png'))
            fs.unlinkSync(imgpath);
        })
    }
}