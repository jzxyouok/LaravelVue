var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    //mix.sass('app.scss');
    //mix.sass('style.scss');
    mix.scripts([
        'vue/dist/vue.js',
        'vue-resource/dist/vue-resource.js',
        'app.js'
    ], 'public/js/bundle.js')
});

elixir(function(mix) {
    mix.sass([
        'app.scss',
        'style.scss'
    ], 'public/css/style.css');
});
