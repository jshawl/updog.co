---
layout: post
title: "CSS with Superpowers"
---
# CSS with SuperPowers

## The Instructor

Jesse Shawl is a front end developer at nclud: http://nclud.com/team/jesse-shawl/

Personal blog at http://jesse.sh/awl/

Upcoming Events:

1. Git for Designers - http://www.eventbrite.com/e/git-for-designers-registration-9441386441
2. Front End Web Development - https://generalassemb.ly/education/front-end-web-development/washington-dc

## The Art of Preprocessing

Sass a language that compiles into CSS. This let's us do some pretty cool things that would be near impossible
to edit vanilla CSS by hand. 

We're writing Sass on our development machines and compiling the source code into CSS, which gets delivered to the client's browser.

**ProTip!** - rtfm: Read the forgotten manual. 

There's plenty of great documentation out there on Sass and Compass:

* http://sass-lang.com/
* http://compass-style.org/
* `$ sass -h`
* `$ compass -h`

### Sassmeister

Sassmeister is an easy way to test your Sass to make sure it's being compiled correctly.

Here are a few of the cool things you can do with Sass: 

1. http://sassmeister.com/gist/7628123
2. Forest - http://codepen.io/jshawl/pen/cJjIm
3. 3d buttons - http://codepen.io/jshawl/pen/bcjyH

### Codepen

We'll be learning the basics of Sass and Compass. Please sign up for an account here: https://codepen.io/signup

## What is Sass?

Create a new pen.

### Variables

I often use variables in Sass for dealing with Hex values. If you're using one color in several places in your CSS, using a 
variable means you only have to change it in one place.

    $green:#bada55;
  
Variables can be just about anything:

    $font-size:1.25em;
    $border-width:5px;
    $wrapper-width:90%;

What often changes in your CSS? Let's make a thing. It can be anything you want.

Or quiz:

Make three square boxes with different border colors. What do I need to do to change the border widths in just one place?

http://codepen.io/jshawl/professor/opzEc


### Nesting

Nesting allows us to visually represent the cascade in our code. 

Be careful! Don't get too carried away with nesting. If it's too closely connected to the DOM structure, your code will
break when the HTML changes. This is too tightly coupled. Try limiting your nesting to 3 levels deep.

    div {
      border-right:5px solid red;
      a {
        p {
          text-decoration:underline;
          &:after{
            clear:both;
          }
        }
      }
    }

Nesting is good for re-usable CSS patterns. Widgets are a good example:

http://codepen.io/jshawl/pen/qzhfI

What else would be a good use for nesting CSS? Make it! Share it!

### Mixins

Mixins are an easy tool to prevent us from repeating code. How about that super groovy text-shadow you have:

    @mixin text-shadow(){
        text-shadow:1px 1px 0px green,
                    2px 2px 0px red,
                    3px 3px 0px blue;
    }

But also, mixins can have arguments:

    @mixin box-sizing($boxsizing){
	-webkit-box-sizing:$boxsizing;
	   -moz-box-sizing:$boxsizing;
		box-sizing:$boxsizing;
    }

    *{
      @include box-sizing(border-box);
      /* _or_ 
	@include(content-box | padding-box | border-box)
      */
    }

## What is Compass?

Compass is a collection of mixins like the box-sizing mixins we authored above.

I like Compass mostly for handling vendor prefixes.

## There's no place like 127.0.0.1

Getting setup locally:

1. Open terminal
2. `$ sudo gem install sass`
3. `$ sudo gem install compass`

Create a config.rb file

Add:

    css_dir = "css"
    sass_dir = "scss"

    $ compass watch
  
### Importing files

You can import files, which lets you separate out styles into different files.

There are several things you can add to this config.rb file: http://compass-style.org/help/tutorials/configuration-reference/

I often add line comments and two useful plugins:

https://github.com/jshawl/vanilla/blob/e2815bc0637567f869c197214e261b021c56a050/scss/config.rb#L5-17

* Autoprefixer - https://github.com/ai/autoprefixer/blob/master/README.md
* Csso - https://github.com/ai/autoprefixer#compass 

Options for working locally:

1. The command line
2. CodeKit
