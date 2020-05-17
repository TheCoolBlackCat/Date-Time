function date() {
	var now = new Date(),
			d = arguments[0][0], m = arguments[0][1], y = arguments[0][2],
			delim = arguments[1],
			options = arguments[2],
			months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			date = [];

	if (d) {
		var x = now.getDate();
		if (d === 'p') x = (x < 10 ? String(0+x): x); // Prefix zeroes < 10
		if (options && options.sup) { // st/nd/rd/th superscript
			x += "<sup>";
			if (x === 1 || x === 21 || x === 31) x += "st";
			else if (x === 2 || x === 22) x += "nd";
			else if (x === 3 || x === 23) x += "rd";
			else x += "th";
			x += "</sup>"
		}
		date.push(x);
	}

	if (m) {
		var x = now.getMonth();
		if (m === 't') x = months[x]; // Text month
		if (m === 'st') x = months[x].slice(0, 3); // Short text month
		date.push(x);
	}

	if (y) {
		var x = now.getFullYear();
		if (y === 's') x = String(x).slice(2); // Short year
		date.push(x);
	}

	return date.join(delim);
}

function time() {
	var now = new Date(),
			h = arguments[0][0], m = arguments[0][1], s = arguments[0][2],
			ms = arguments[0][3],
			delim = arguments[1],
			options = arguments[2],
			time = [];

			if (h) {
				var x = now.getHours();
				if (h === 'p' && x < 10) x = 0+String(x);
				time.push(x);
			}

			if (m) {
				var x = now.getMinutes();
				if (m === 'p' && x < 10) x = 0+String(x);
				time.push(x);
			}

			if (s) {
				var x = now.getSeconds();
				if (s === 'p' && x < 10) x = 0+String(x);
				time.push(x);
			}

			if (ms) { // Won't work...yet (called every second)
				var x = now.getMilliseconds();
				time.push(x);
			}

			return time.join(delim);
}

function formatDateTime (str) {

}

function insertDateTime (el, func) {
	el.innerHTML = func();
	setInterval(function () {
		el.innerHTML = func();
	}, 1000);
}

var tests = document.getElementsByClassName("test");
insertDateTime(tests[0], date.bind(this, [1, 1, 1], '/')); // d/m/yyyy
insertDateTime(tests[1], date.bind(this, [1, 1, 1], '-')); // d-m-yyyy
insertDateTime(tests[2], date.bind(this, [1, 1, 's'], ' ')); // d m yy
insertDateTime(tests[3], date.bind(this, [1, 't', 's'], ' ')); // d Month yy
insertDateTime(tests[3], date.bind(this, [1, 't', 1], ' ', {sup: true})); // d^th Month yy
insertDateTime(tests[4], time.bind(this, [1, 1, 1, 0], ':')); // h:m:s
insertDateTime(tests[5], time.bind(this, [1, 1, 1, 1], ':')); // h:m:s:ms
insertDateTime(tests[6], time.bind(this, ['p', 'p', 'p', 0], ':')); // hh:mm:ss
insertDateTime(tests[6], time.bind(this, ['p', 'p', 'p', 0], ':', {tz: "utc"})); // hh:mm:ss
// insertDateTime(tests[7], date.bind(this, [1])); // d
insertDateTime(tests[8], date.bind(this, [0,1])); // m
insertDateTime(tests[9], date.bind(this, [0,0,1])); // yyyy
insertDateTime(tests[10], time.bind(this, ['p'])); // hh
insertDateTime(tests[11], time.bind(this, [0,'p'])); // mm
insertDateTime(tests[12], time.bind(this, [0,0,'p'])); // ss

var ids = {
	// Backward Compatability
	"d-d_tmo_fy": date.bind(this, [1,'t',1], ' '),
	"t-loc-h:m:s": time.bind(this, ['p', 'p', 'p', 0], ':'),

	// Upgraded Versions
	"DateTime-d_month_yyyy": date.bind(this, [1,'t',1], ' '),
	"DateTime-h:m:s": time.bind(this, ['p', 'p', 'p', 0], ':'),

	"DateTime-dd/mm/yyyy": date.bind(this, [1,1,1], '/'),
	"DateTime-dd^_month_yyyy": date.bind(this, [1,'t',1], ' ', {sup: true}),
	"DateTime-dd": date.bind(this, [1]),
	"DateTime-DD": date.bind(this, ['p']),
}

for (var id in ids) {
	var el = document.getElementById(id);
	if (el) insertDateTime(el, ids[id]);
}
