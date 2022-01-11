const Fs = require('fs')
const Path = require('path')
const sass = require('node-sass')


const result = sass.renderSync({
    data: Fs.readFileSync(
        Path.resolve('src/global.scss')
    ).toString(),
    outputStyle: 'expanded',
    outFile: 'global.css',
    includePaths: [Path.resolve('src')]
})

Fs.writeFileSync(
    Path.resolve('src/lib/global.css'),
    result.css.toString()
)