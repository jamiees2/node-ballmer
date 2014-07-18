var Readable = require('stream').Readable;

var randomizeCase = function(str) {
	var n = "";
	for (var i=0;i<str.length;i++){
		n += (Math.random() >= 0.5 ? str[i].toLowerCase() : str[i].toUpperCase());
	}
	return n;
}

var generateCancer = function() {
  return "Linux is not in the public domain. Linux is a cancer that attaches" +
         " itself in an intellectual property sense to everything it touches.";
}

exports.ballmer = function(options) {
  options.flavor = options.flavor || "developers";
	options.total = options.total || -1;
	options.newlines = options.newlines || false;
	options.casing = options.casing || "uppercase";

  var loremContent;

  if (options.flavor == "cancer") {
    loremContent = generateCancer();
  } else {
    loremContent = "developers";
  }

	var rs = Readable(), count = 0, content = loremContent;

	if (options.casing !== "randomcase") {
		content = (options.casing === "lowercase" ? loremContent : loremContent.toUpperCase());
	}
	rs._read = function(){
		if (options.casing === "randomcase") {
			content = randomizeCase(loremContent);
		}
		rs.push(content + (options.newlines ? "\n" : ""));
		count++;
		if (options.total > 0 && count >= options.total) rs.push(null);
	}
	return rs;
}
// console.log(randomizeCase("DEVELOPERS"))
//exports.ballmertest({
//  total: 10,
//  newlines: true,
//  casing: "randomcase"
//}).pipe(process.stdout);
