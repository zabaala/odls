let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    // .webpackConfig({
    //     module: {
    //         loaders: [
    //             {
    //                 test: /\.scss$/,
    //                 loader: 'style!css!resolve-url!sass?sourceMap'
    //             }
    //         ]
    //     },
    // })

    .react('docs/components/App.jsx', 'docs/assets/js/app.js');
