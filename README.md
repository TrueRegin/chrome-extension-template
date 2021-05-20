# Chrome Extension Template.
- Start coding in `src/onpage.ts` to begin a project.
    **NOTE:** The `onpage.ts` script like the name implies runs on a page your extension is running on.

- Modify `src/manifest.json` to specify what pages your extension should run on.

- Add CSS to `src/mod.css` to change how pages your extension run on work.

## Setting up the Icon
1. Place an image called `icon.png` or`icon.jpg` inside of `src/icons`
2. Run `build:icons` to build the icons. (Or run build:all to build the code + icons)

## Scripts
`build` - Script to bundle code + manifest into `dist`
`build:all` - To build code + extension icons
`build:icons` - To compress your icons into 16x16, 48x48, & 128x128