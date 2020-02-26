# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.


Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages.  For our homepage we need:

k# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
kk# Intro  
This is a series of tutorials about how I built the RocketWeb site, written in realtime as I build the site, using RocketWeb to write this tutorial. Actually, as I haven't built the site yet I am writing this first tutorial useing [[stackedit.io](http://stackedit.io/)]([https://stackedit.io/app#](https://stackedit.io/app#)). As soon as possible we'll be in the site itself!  

Pretty much every part of the stack is new to me so we'll be learning and stuffing up together.  Where applicable, I'll share links to resources I used through the process.

Oh, there is faster ways to get going using templates, starter kits etc etc, but I really want to get my head around these things so why not reinvent the wheel fo learning purposes!
  
# The stack  
I've done the research, it is flawless and immutable, and i'm going to build the site using:  
  
- GoHugo as the Static Site Generator (SSG)  
- Netlify to host RocketWeb  
- NetlifyCMS to manage content  
- GitHub for source control  
- Tailwind CSS as my CSS framework

Feel free to drop me a message if you want me to tell you why I chose this stack or maybe I'll write a blog about it!

# Dev Tools
- Mac OS
- Visual studio code
- - Some plugins I guess

# Let's Go (get it?)
## Objectives
I want to get GoHugo and GitHub working together so I can use my brand spanking new site to continue writing this tutorial.

## Install GoHugo
This is easy and below is pretty much exactly as documented here [GoHugo Quick Start](https://gohugo.io/getting-started/quick-start/) 

    brew install hugo
   
## Create our hugo site

In the console navigate to a location where you want hugo to create your site i.e project folder 
the hugo command will be like this
	
	hugo new site your-site-name
where 'your-site-name' will be whatever you want to call your site.  In my case it is rocketweb:

    hugo new site rocketweb

Ok, that was quick :)
What's has happened? You will see a new folder called rocketweb (or at least I will, you'll see what ever you called it).

I'm a curious chap, I'll peek inside.

    cd rocketweb
    ls

Enter Screen shot here

So, there's a bunch of stuff here. Cool. We'll get into that later (when I figure it out).  

I want to see the site now, just can't wait.
We will start the server

    hugo server -D

hmm, it kinda worked but there's a bunch of warnings:
TODO: INSERT Screen Shot

At this stage we could install a custom theme which will take care of these errors, but we're too good for that so let's sort it ourselves...

### Warning 1
WARN 2020/02/26 12:38:39 found no layout file for "HTML" for kind "home": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

I think we need a home page. BRB...yep, we do.  Lets create it:

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site. These are markdown files .md

### layouts
Pretty much all your .html files go here. 

Content and layouts work magically together to create your pages.  For our homepage we need:
content/_index.md
layouts/index.html

We'll use the command line to create the content.

    hugo new _index.md

---
title: ""
date: 2020-02-26T13:48:43+11:00
draft: true
---

To

---
title: "RocketWeb Home"
date: 2020-02-26T13:48:43+11:00
---

now create an index.html in the root of layouts.  To prove that the html and markdown are talking to each other let's reference the title


WARN 2020/02/26 15:23:04 found no layout file for "HTML" for kind "page": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.

this is all dandy, but if we look at the page source from our browser it's not really up to spec no html tags, head etc.  We will fix that by utilising base templates.

inside our layouts folder create anothe rfolder call "_default"

create the head partial


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.


It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.

## Create a home page
Sounds simple enough, right?
Yeah, I guss it is.  First though we need to understand a few things!
Remember the folders and stuff that the hugo cli created for us?  It turns out they are important.  I'll cover off on a couple of them (see [here](https://gohugo.io/getting-started/directory-structure/) for the official docs)

### content
All your site content goes here, you know, the reason people come to your site.!!   

### layouts
Pretty much all your .html files go here.  Simple really, so for us, right now, we care about our home page.

Content and layouts work magically together to create your pages



It turns out that this is simply a file called index.html in the root of the layouts folder.
let's create it:


Cool, that got rid of one warning and we have a home page, a lame one but we'll sort that out.

## Warning 2
WARN 2020/02/26 13:00:09 found no layout file for "HTML" for kind "taxonomyTerm": You should create a template file which matches Hugo Layouts Lookup Rules for this combination

### Update the site's configuration page
the config is all nicely kept in the config.toml (what's 'toml'? another, easy, format for writing config files)
By default it looks like this:

    baseURL = "http://example.org/"
    languageCode = "en-us"
    title = "My New Hugo Site"

I'm going to change it to better reflect my new site:

     baseURL = "http://example.org/"
     languageCode = "en-us"
     title = "RocketWeb"
     disableKinds = ["taxonomy", "taxonomyTerm"]
We'll figure out taxonomy and taxonomy terms later, so for now, lets disable so we can get rid of those pesky warning.

Now when you look at the out put you have no warning and our site is rendering an incrediby lame home page.  Good job!

# Add to source control (git hub).
Oops, probably should have done this first.  Oh well, better late than never.
Feel free to do this however you like.
