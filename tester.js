// This file is a sample use case and can safely be deleted.

var ballmer = require("./ballmer.js").ballmer;

ballmer({
  flavor: "cancer",
  total: 10,
  newlines: true,
  casing: "randomcase"
}).pipe(process.stdout);
