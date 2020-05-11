---
title: "Jamstack"
date: 2020-05-10T12:46:26+10:00
draft: false

descption: "Jamstack is changing the way we develop for the web and it is at the core of RockitWeb"
---
## Intro
The Jamstack forms the basis for our web development architecture so it only seems right that we talk about it a little.  

We will discuss some overarching concepts and ideas but this is not a deep dive or anything too technical.  Instead, I will focus more on the business benefits of the approach and why it is core to our development philosophy at RockitWeb.

Hopefully, after reading this, if your from "technical" you can better explain to the business, and, conversely, if you're from "business" you can better understand technical.   

## Jamstack 101
Ok, so we do need a little bit of an explanation.  Let's hear straight from the horse's mouth from the good people at [jamstack.org](https://jamstack.org/)

> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

and then they go a little bit further:

> The Jamstack is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.

Hmmm, well that explains everything, right?  Ok, let's dig a little deeper (not too deep).

### What's the J-A-M
First thing first, J-A-M stands for:

**JavaScript**
JavaScript is responsible for handling anything dynamic AT THE CLIENT. 

**APIs**
We've ditched the servers, but it doesn't mean we don't need server like behaviour.  APIs replace our servers, whether it be SaaS, third party or custom services you've built yourself.  The key is you're not managing servers/DBs etc someone else is - love it.

**Markup**
Whenever possible markup should be pre built at build time.  Think Static Site Generators for content sites and build tools for apps.



## Learning 1 - No Servers, WTF?
Let's pause here and consider the fact that there are no servers (I'll qualify this later).  This is **huge** news.  I mean absolutley massive.  Before we talk about how we do this from everything like CMS to Forms, let's accept it as fact and then reflect on what this means:

* No server infrustructure to build, secure, manage, monitor, upgrade, BCP
* No applications to sit on said infrustructure.  Development, security, bugs, deploys, backups, patches etc, etc
* No sub optimal solutions.  You or your team is great but no one is an expert in everything.   

and don't even start me on load balancers, CDN's, caching, perfomance monitoring.  My head literally hurts thinking of all this stuff.  It's so hard.

## Business Impact 1 - No Servers.
There's so much to say here but the word I think best sums it up is **Reliability**.  I used to have a senior business executive who would love saying (whenever something went wrong) "We need robust systems that simply don't fail".  Whilst his dream of "never fail" was a little unrealistic I got what he said, the problem was it was just so hard.  So many links (complex links) in the chain that created many points of failure it was almost impossible to plug all the holes all the time.

By removing our servers we have removed our complexity and consequently there is far less that can go wrong at runtime - when our clients are actually using the site/app.




