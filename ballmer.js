var Readable = require('stream').Readable;

var randomizeCase = function(str) {
	var n = "";
	for (var i=0;i<str.length;i++){
		n += (Math.random() >= 0.5 ? str[i].toLowerCase() : str[i].toUpperCase());
	}
	return n;
}

exports.ballmer = function(options) {
	options.total = options.total || -1;
	options.newlines = options.newlines || false;
	options.case = options.case || "uppercase";


	var rs = Readable(), count = 0, developers = "";
	if (options.case !== "randomcase") {
		developers = (options.case === "lowercase" ? "developers" : "DEVELOPERS");
	}
	rs._read = function(){
		if (options.case === "randomcase") {
			developers = randomizeCase("developers");
		}
		rs.push(developers + (options.newlines ? "\n" : ""));
		count++;
		if (options.total > 0 && count >= options.total) rs.push(null);
	}
	return rs;
}
// console.log(randomizeCase("DEVELOPERS"))
exports.ballmer({total: 10, newlines: true, case: "randomcase"}).pipe(process.stdout);