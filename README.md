# drinkingAge
A client side implementation of an age resitriction gateway to filter visitors by drinking age. 

## Purpose
This script was developed specifically for alcohol related sites. When a user inputs their birthday, their age is calculated, and then compared with the drinking age of their selected location. This allows the site owner's to determine if visitors are of legal age in their place of residence.
Esentially, this goes slightly further than asking "Are you of Drinking Age, Yes/No" or simply enforcing a 21 and over policy.
### Why not server side?

Search engine crawlers will not be restricted from viewing the site's content with a client side gateway such as this. which is pretty important.


## Installation
1. Include Dependencies
   1. [jQuery](https://jquery.com/download/)
   2. [Bootstrap 3](http://getbootstrap.com/getting-started/)

2. Insert bouncer script and style 
   1. Place bouncer.css in site's head `<link href="css/bouncer.css" rel="stylesheet">`
   2. Place bouncer.js before the close of the body `<script src="js/bouncer.js"></script>`

3. Initialize and Configure
```
$(function() {

	//Settings for drinkingAge Plugin
        var settings = {
                        "image" : 'http://placehold.it/350x150',
                        "message" : "As part of our commitment to responsible drinking, we just need to check that you're of legal drinking age.",
                        "redirect" : 'http://responsibility.org',
                        "deny_message" : "Sorry, but you are not of legal drinking age.<br>You'll be redirected soon...",
                        "deny_timeout": 5000,
                        "link_terms" : '/terms',
                        "link_privacy" : '/privacy'
                    };
	//Initiate bouncer.js (drinkingAge)
	drinkingAge(settings);
});
```


## How it works
The value of each option for the location selection is the legal drinking age for each corresponding country.
Drinking ages were derived from the alphabetized list found on  [Procon.org](http://drinkingage.procon.org/view.resource.php?resourceID=004294). If the user's birthday is greater than the drinking age of the country, an access cookie is generated. 

* United States, 21 Years or Older `<option value="21" selected>United States</option>`
* Afganistan, Alcohol Prohibited `<option value="1000">Afghanistan</option>`
* Denmark, 18 Years or Older `<option value="18">Denmark</option>`
* Cambodia, just gotta be alive `<option value="0">Cambodia</option>`



## Demo
[Example](https://rawgit.com/d0n601/drinkingAge/master/example/index.html)
