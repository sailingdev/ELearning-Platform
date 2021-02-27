const mix = require('laravel-mix')
require('laravel-mix-merge-manifest')
let tailwindcss = require('tailwindcss');
require('dotenv').config();

/*
 *_______________
 * Mix Asset Management for backOffice
 *
 */

mix.js('resources/js/app.js', 'public/js/admin')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/src'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass'),
            }
        }
    })
    .sass('resources/sass/app.scss', 'public/css').options({
    postCss:[require('autoprefixer'), require('postcss-rtl')]
})
    .postCss('resources/assets/css/main.css', 'public/css', [
        tailwindcss('tailwind.js'), require('postcss-rtl')()
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css') // Vuesax framework css
    .copy('resources/assets/css/iconfont.css', 'public/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/assets/fonts', 'public/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/assets/images', 'public/images') // Copy all images from resources to public folder

    .mergeManifest()
mix.webpackConfig({
    output: {
        chunkFilename: 'js/admin/chunks/[name].js',
    }
});
