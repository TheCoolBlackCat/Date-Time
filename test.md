
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

	&lt;div id="PLACE ID HERE"&gt;&lt;/div&gt;

<table>
	<tr>
		<th>ID</th>
		<th>Type</th>
		<th>Result</th>
		<th>Example</th>
	</tr>
	<tr>
		<th>t-loc-h:m:s</th>
		<td>Time</td>
		<td>
			H:M:S<br />
			(localised)
		</td>
		<td><div id="t-loc-h:m:s"></div></td>
	</tr>
	<tr>
		<th>d-d_tmo_fy</th>
		<td>Date</td>
		<td>
			Date<br />
			Month as Text<br />
			Full Year
		</td>
		<td><div id="d-d_tmo_fy"></div></td>
	</tr>
</table>

<script src="https://thecoolblackcat.github.io/DateTime/code.js"></script>

### Example
<p>
		&lt;!DOCTYPE html&gt;<br />
		&nbsp;&nbsp;&lt;html&gt;<br />
		&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;<br /><br />
		<strong>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="t-loc-h:m:s"&gt;<br /><br />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;script type="text/javascript" src="https://thecoolblackcat.github.io/DateTime/code.js"&gt;&lt;/script&gt;<br /><br />
		</strong>
		&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br />
		&nbsp;&nbsp;&lt;/html&gt;
</p>
<div id="resultFullExample">
	<div div id="t-loc-h:m:s"></div>
	<script src="https://thecoolblackcat.github.io/DateTime/code.js"></script>
</div>

### Reference
**Note: **the following commands have to be used as defined above.
This is merely a breakdown of what the components of the ID name mean.

**t-** calls a Time

**-loc-** refers to "localisation"

**-h:m:s** specifies Hours : Minutes : Seconds


**d-**  calls a Date

**d_tmo_fy** is similar to -h:m:s

**d** displays a numerical day

**tmo** displays the month as text

**fy** displays a full numerical year

Go to: [Top](#top) | [About](#about) | [Usage](#usage) | [Example](#example) | [Reference](#reference)
