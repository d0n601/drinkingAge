# drinkingAge
A client side implementation of an age resitriction gateway to filter visitors by drinking age. 

## Purpose
This script was developed specifically for alcohol related sites. When a user inputs their birthday, their age is calculated, and then compared with the drinking age of their selected location. This allows the site owner's to determine if visitors are of legal age in their place of residence.
Esentially, this goes slightly further than asking "Are you of Drinking Age, Yes/No" or simply enforcing a 21 and over policy.


## Installation
1. Include Depencencies
   1. jQuery
   2. Bootstrap 3

2. Insert bouncer script and style 
   1. Place bouncer.css in site's head `<link href="css/bouncer.css" rel="stylesheet">`
   2. Place bouncer.js before the close of the body `<script src="js/bouncer.js"></script>`

3. Initialize and Configure
`
$(function() {

	//Settings for drinkingAge Plugin
	var settings = {
					"image"	: 'assets/img/logo-small.png',
					"message" : "As part of our commitment to responsible drinking, we just need to check that you're of legal drinking age.",
					"redirect" : 'http://responsibility.org',
					"deny_message" : "Sorry, but you are not of legal drinking age.",
					"link_terms" : '/terms',
					"link_privacy" : '/privacy'
				};
	//Initiate bouncer.js (drinkingAge)
	drinkingAge(settings);

});
`


## How it works
The value of each option for the location selection is the legal drinking age for each corresponding country.
Drinking ages were derived from the alphabetized list found on  [Procon.org](http://drinkingage.procon.org/view.resource.php?resourceID=004294)

* United States, 21 Years or Older `<option value="21" selected>United States</option>`
* Afganistan, Alcohol Prohibited `<option value="1000">Afghanistan</option>`
* Denmark, 18 Years or Older `<option value="18">Denmark</option>`
* Cambodia, just gotta be alive `<option value="0">Cambodia</option>`



## Demo
