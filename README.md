# Ballmer Stream
An infinite stream of developers!

###You can install this with the following command
```
npm install node-ballmer
```

###How to use
```
var ballmer = require("node-ballmer").ballmer
ballmer({
	total: 10, // leave this out for an infinite stream
	newlines: true, // leave this out for a pure string stream
	case: "randomcase" // lower-case, UPPER-CASE and RaNdoMCaSe
});
```

By @jamiees2. Licensed under the MIT license.