const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const fs = require('fs')
const path = require('path')

// CSS minifier
fs.readFile(path.join(__dirname, '../public/css/style.css'), (err, buffer) => {
  postcss([autoprefixer, cssnano])
    .process(buffer, {
      from: path.join(__dirname, '../public/css/style.css'),
      to: path.join(__dirname, '../public/css/style.min.css'),
    })
    .then((result) => {
      fs.writeFile(
        path.join(__dirname, '../public/css/style.min.css'),
        result.css,
        () => true
      )
    })
})
