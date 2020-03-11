# Gulp framework project

This small front-end framework has been made during class to learn to optimise front-end development and learn gulp.

## Dev Depencies

* gulp
* gulp-autoprefixer
* gulp-clean-css
* gulp-group-css-media-queries
* gulp-load-plugins
* gulp-sass
* gulp-sourcemaps
* browser-sync

## How to start

1. Clone the repo 
2. Run the command `` npm install ``
3. Then run `` glup `` to start watching files

## Basics usages

* default
* build

### default

The commands `` gulp default `` or `` gulp `` will run browserSync and watch every files in the src directory. If any file change it will compile all files in a dist directory.

### build

`` gulp build `` will compile all files from src directory in dist directory and minify them

## Available styles

* Variables
* Colors Handler
* Flex Grids
* Offsets Handler

### Variables

You will be able to choose variables to customise the framework. These variables are used to generate all classes and so are needed to it to work.

### Colors Handler

Colors Handler needs colors variables to work. It will generate your colors for **background-color**, **text color** and **border-color** letting you chose what amount of opacity you want. 

They can be use like so:

    class="border-YOUR-VARIABLE-50"       // border-color with 50% opacity 
    class="text-YOUR-VARIABLE-30"         // text-color with 30% opacity 
    class="background-YOUR-VARIABLE-100"  // background-color with 100% opacity 

### Flex Grids

Create a grid with flex is super easy with the framework. Just tel the number of columns you want in the variable file and it will generate css classes for you.

Here is an exemple of how to use it:

    // in variable file
    $columnNumber : 12;

    // in html
    <section class="flex-grid">
      <div>
        <article class="
          sm-col-12
          md-col-6  
          col-12
        ">
        </article>

It will also create responsive classe based on your responsive variables.

### Offsets Handler

If you want to create gaps between your blocks you may do like so:

    <section class="flex-grid">
      <div>
        <article class="
          sm-col-12
          md-col-6  
          col-12
          sm-offset-l-2
          sm-offset-r-6
        ">
        </article>

Once again it is based on your responsive and columns variables.
