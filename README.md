# drinkingAge
A client side implementation of an age resitriction gateway to filter visitors by drinking age in their region. 

## Purpose
This script was developed specifically for alcohol related sites. When a user inputs their birthday, their age is calculated, and then compared with the drinking age of their selected location. This allows the site owner's to determine if visitors are of legal age in their place of residence.
Esentially, this goes slightly further than asking "Are you of Drinking Age, Yes/No" or simply enforcing a 21 and over policy.


## Installation

####Depencencies
*jQuery
*Bootstrap 3

####Include files
`<link href="css/bouncer.css" rel="stylesheet">`
and
`<script src="js/bouncer.js"></script>`

####Initialize and Configure
`$(function() {

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

});`


## How it works
The value of each option for the location selection is the legal drinking age for each corresponding country.
Drinking ages were derived from the alphabetized list found on  [Procon.org](http://drinkingage.procon.org/view.resource.php?resourceID=004294)

`<option value="21" selected>United States</option>`
`<option value="1000">Afghanistan</option>`
`<option value="18">Denmark</option>`
`<option value="0">Cambodia</option>`



## Demo
