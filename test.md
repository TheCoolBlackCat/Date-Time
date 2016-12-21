
# Date/Time
## Javascript Framework

### About
Date/Time is a JavaScript framwork that allows easy incorporation of date and time within a webpage.

I created the framework quite simply because I needed a way to easily (and cleanly) display the date and time on my websites. Previously, I had used hideous-looking embeeded JavaScript copied from someone else, and I was unhappy with the space it used, and the fact I did not understand their code.

So, I wrote all the code in Date/Time from scratch, and it has kickstarted my learning of JavaScript.

Date/Time is currently in early development, and is very basic in terms of what it can display.

### Usage
<h4>Step 1: Attach the Framework</h4>
<p>
	ALWAYS attach the JavaScript BELOW all of the content in the &lt;body&gt; tag!
	The script refrences &lt;div&gt; ids, so they have to be parsed in the browser before the script!
</p>
<code>
	&lt;script type="text/javascript" src="https://thecoolblackcat.github.io/DateTime/code.js"&gt;&lt;/script&gt;
</code>

<h4>Step 2: Insert the &lt;div&gt; tags with the right ID</h4>
<p>
	Insert the &lt;div&gt; tags with an id field that specifies what you wish to display.
	Do not enter any other content in the div, should you need to enter text around it, use CSS to override the default margin/padding settings.
</p>
<code>
	&lt;div id="PLACE ID HERE"&gt;&lt;/div&gt;
</code>
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

<h3 id="fullexample">Full Example</h3>
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
<!--
<h3>Result</h3>
<div id="result">
			<div id="t-loc-h:m:s"></div>
			<div id="t-loc-h:m:s"></div>
			<script type="text/javascript" src="code.js" />
</div>-->
<h3 id="reference">Reference</h3>
<p>
	<strong>Note: </strong>the following commands have to be used as defined <a class="intext" href="#usage">above</a>.
	This is merely a breakdown of what the components of the ID name mean.
</p>
<p>
<strong>t-</strong> calls a Time <br />
<strong>-loc-</strong> refers to "localisation" <br />
<strong>-h:m:s</strong> specifies Hours : Minutes : Seconds <br/>
</p>
<p>
<strong>d-</strong>  calls a Date <br />
<strong>d_tmo_fy</strong> is similar to -h:m:s <br />
<strong>d</strong> displays a numerical day <br />
<strong>tmo</strong> displays the month as text <br />
<strong>fy</strong> displays a full numerical year <br />
</p>
<div id="nav">
Jump to:
<a href="#top">Top</a>
<a href="#about">About</a>
<a href="#usage">Usage</a>
<a href="#fullexample">Example</a>
<a href="#reference">Reference</a>
</div>
<span id="bottom"></span>
</body>
</html>
