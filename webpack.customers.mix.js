const mix = require('laravel-mix')
require('laravel-mix-merge-manifest')
let tailwindcss = require('tailwindcss');
require('dotenv').config();

/*
 *_______________
 * Mix Asset Management for backOffice
 *
 */

mix.js('resources/js/frontend/frontend.js', 'public/js/frontend')
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
    // Copy for landing pages to public folder
    .copy('resources/assets/frontend/js/popper.min.js', 'public/frontend/js/popper.min.js')
    .copy('resources/assets//frontend/js/bootstrap.min.js', 'public/frontend/js/bootstrap.min.js')
    .copy('resources/assets/frontend/js/jquery.min.js', 'public/frontend/js/jquery.min.js')
    .copy('resources/assets/frontend/js/default/classy-nav.min.js', 'public/frontend/js/default/classy-nav.min.js')
    .copy('resources/assets/frontend/js/waypoints.min.js', 'public/frontend/js/waypoints.min.js')
    .copy('resources/assets/frontend/js/jquery.easing.min.js', 'public/frontend/js/jquery.easing.min.js')
    .copy('resources/assets/frontend/js/default/jquery.scrollup.min.js', 'public/frontend/js/default/jquery.scrollup.min.js')
    .copy('resources/assets/frontend/js/owl.carousel.min.js', 'public/frontend/js/owl.carousel.min.js')
    .copy('resources/assets/frontend/js/wow.min.js', 'public/frontend/js/wow.min.js')
    .copy('resources/assets/frontend/js/jarallax.min.js', 'public/frontend/js/jarallax.min.js')
    .copy('resources/assets/frontend/js/jarallax-video.min.js', 'public/frontend/js/jarallax-video.min.js')
    .copy('resources/assets/frontend/js/default/cookiealert.js', 'public/frontend/js/default/cookiealert.js')
    .copy('resources/assets/frontend/js/default/jquery.passwordstrength.js', 'public/frontend/js/default/jquery.passwordstrength.js')
    .copy('resources/assets/frontend/js/jquery.countdown.min.js', 'public/frontend/js/jquery.countdown.min.js')
    .copy('resources/assets/frontend/js/default/active.js', 'public/frontend/js/default/active.js')
    .copy('resources/assets/frontend/css/style.css', 'public/frontend/css/style.css')
    .copy('resources/assets/frontend/css/bootstrap.min.css', 'public/frontend/css/bootstrap.min.css')
    .copy('resources/assets/frontend/css/default/classy-nav.min.css', 'public/frontend/css/default/classy-nav.min.css')
    .copy('resources/assets/frontend/css/animate.css', 'public/frontend/css/animate.css')
    .copy('resources/assets/frontend/css/owl.carousel.min.css', 'public/frontend/css/owl.carousel.min.css')
    .copy('resources/assets/frontend/css/magnific-popup.css', 'public/frontend/css/magnific-popup.css')
    .copy('resources/assets/frontend/css/jquery.animatedheadline.css', 'public/frontend/css/jquery.animatedheadline.css')
    .copy('resources/assets/frontend/css/default/lineicons.min.css', 'public/frontend/css/default/lineicons.min.css')
    .copy('resources/assets/frontend/css/font-awesome.min.css', 'public/frontend/css/font-awesome.min.css')
    .copy('resources/assets/frontend/css/flag-icon.min.css', 'public/frontend/css/flag-icon.min.css')
    .copyDirectory('resources/assets/frontend/img', 'public/frontend/img')
    .copyDirectory('resources/assets/frontend/flags', 'public/frontend/flags')
    .copyDirectory('resources/assets/frontend/fonts', 'public/frontend/fonts')
    .mergeManifest()

mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js',
    }
});
