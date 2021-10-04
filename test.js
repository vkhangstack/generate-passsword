const p4ssw0rd = require("p4ssw0rd");

const password = "password";
// p4ssw0rd.simulate();
const hash = p4ssw0rd.hash(password, { cost: 13 });
console.log(hash);
