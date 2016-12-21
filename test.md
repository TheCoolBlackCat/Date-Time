
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Date/Time Javascript Framework</title>

		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
		<link rel="apple-touch-icon-precomposed" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
		<link rel="apple-touch-icon-precomposed" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon-precomposed" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon-precomposed" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
		<link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
		<link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
		<link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
		<link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
		<link rel="icon" type="image/png" href="favicon/favicon-128.png" sizes="128x128" />
		<meta name="application-name" content="&nbsp;"/>
		<meta name="msapplication-TileColor" content="#FFFFFF" />
		<meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
		<meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
		<meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
		<meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
		<meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />

		<style>
			@import 'https://fonts.googleapis.com/css?family=Raleway:400,700';

			html, body{
				margin: none;
				padding: none;
			}

			h1 {
				font-family: 'Raleway', sans-serif;
				font-weight: 700;
				font-size 48px;

				border-left: 2px solid #1976D2;

				margin-top: 50px;;
				margin-left: 20px;
				padding-left: 20px;
			}

			h2{
				font-family: 'Raleway', sans-serif;
				font-weight: 400;
				font-size 36px;

				border-left: 2px solid #2196F3;

				margin-left: 20px;
					padding-left: 20px;

			}

			h3{
				font-family: 'Raleway', sans-serif;
				font-weight: 700;
				font-size 26px;

				border-left: 2px solid #64B5F6;

				margin-left: 20px;
				padding-left: 20px;
			}
			h4{
				font-family: 'Raleway', sans-serif;
				font-weight: 400;
				font-size 20px;

				border-left: 2px solid #90CAF9;

				margin-left: 20px;
				padding-left: 20px;
			}
			p{
				font-family: 'Raleway', sans-serif;
				font-weight: 400;
				margin-left: 20px;
				padding-left: 20px;
			}

			table{
				border: #BBDEFB solid 1px;
				font-family: 'Raleway', sans-serif;
				border-collapse: collapse;
				margin: 40px;
				padding: none;
				min-width: 500px;
				max-width: 100%;
			}
			tr{
				border: #BBDEFB solid 1px;
			}
			th{
				border: #BBDEFB solid 1px;
				font-weight: 700;
				text-align: center;
				vertical-align: middle;
			}
			td{
				border: #BBDEFB solid 1px;
				font-weight: 400;
				text-align: center;
				vertical-align: middle;
			}
			ul{
				text-align: left;
				vertical-align: top;
				padding: none;
				margin: none;
				line-height: normal;
			}
			code{
				margin-left: 20px;
				padding-left: 20px;
			}
			#resultFullExample{
				background-color: #BBDEFB;
			}
			#nav{
				font-family: 'Raleway', sans-serif;
				font-weight: 400;
				color: #90A4AE;
				text-align: center;
			}
			a{
				color: inherit;
				text-decoration: none;;
				-webkit-transition-duration: .5s; /* Chrome, Safari, Opera */
    		transition-duration: .5s;
			}
			a:hover{
				color: #82B1FF;
			}
			.intext{
				color: #000;
				text-decoration: underline;
			}

			::selection {
					color: #E3F2FD;
					background: #82B1FF;
			}
			::-moz-selection { /* Code for Firefox */
					color: #E3F2FD;
					background: #82B1FF;
			}
		</style>
	</head>
	<body>
		<span id="top"></span>
		<h1>Date/Time</h1>
		<h2>Javascript Framework</h2>
		<div id="nav">
		Jump to:
		<a href="#about">About</a>
		<a href="#usage">Usage</a>
		<a href="#fullexample">Example</a>
		<a href="#reference">Reference</a>
		<a href="#bottom">Bottom</a>
		</div>
		<h3 id="about">About</h3>
		<p>
			Date/Time is a JavaScript framwork that allows easy incorporation of date and time within a webpage.
		</p>
		<p>
			I created the framework quite simply because I needed a way to easily (and cleanly) display the date and time on my websites.
			Previously, I had used hideous-looking embeeded JavaScript copied from someone else, and I was unhappy with the space it used, and the fact I did not understand their code.
			So, I wrote all the code in Date/Time from scratch, and it has kickstarted my learning of JavaScript.
		</p>
		<p>
			Date/Time is currently in early development, and is very basic in terms of what it can display.
		</p>

		<h3 id="usage">Usage</h3>
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
