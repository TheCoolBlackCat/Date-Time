
# Date/Time
## Javascript Framework

Go to: [About](#about) | [Usage](#usage) | [Example](#example) | [Reference](#reference)

### About
Date/Time is a JavaScript framwork that allows easy incorporation of date and time within a webpage.

I created the framework quite simply because I needed a way to easily (and cleanly) display the date and time on my websites. Previously, I had used hideous-looking embeeded JavaScript copied from someone else, and I was unhappy with the space it used, and the fact I did not understand their code.

So, I wrote all the code in Date/Time from scratch, and it has kickstarted my learning of JavaScript.

Date/Time is currently in early development, and is very basic in terms of what it can display.

### Usage
#### Step 1: Attach the Framework

ALWAYS attach the JavaScript BELOW all of the content in the &lt;body&gt; tag!
The script refrences &lt;div&gt; ids, so they have to be parsed in the browser before the script!

	<script type="text/javascript" src="https://thecoolblackcat.github.io/DateTime/code.js"></script>

#### Step 2: Insert the &lt;div&gt; tags with the right ID

Insert the &lt;div&gt; tags with an id field that specifies what you wish to display.

Do not enter any other content in the div, should you need to enter text around it, use CSS to override the default margin/padding settings.

	<div id="PLACE ID HERE"></div>

&nbsp;

ID|Type|Result|Example
---|---|---|---
t-loc-h`:m`:s|Time|H:M:S (localised)|16:50:33
d-d_tmo_fy|Date|Date, Month as Text, Full Year|21 December 2016

### Example

	<!DOCTYPE html>
	<html>
		<head></head>
		<body>
			<div id="t-loc-h:m:s">
			<script type="text/javascript" src="https://thecoolblackcat.github.io/DateTime/code.js"></script>
		</body>
	</html>

### Reference
**Note: ** the following commands have to be used as defined above.
This is merely a breakdown of what the components of the ID name mean.

**t-** calls a Time

**-loc-** refers to "localisation"

**-h\:m\:s** specifies Hours : Minutes : Seconds

&nbsp;

**d-**  calls a Date

**d_tmo_fy** is similar to -h:m:s

**d** displays a numerical day

**tmo** displays the month as text

**fy** displays a full numerical year

Go to: [Top](#) | [About](#about) | [Usage](#usage) | [Example](#example) | [Reference](#reference)
