var Profile = require("./profile.js");


var studentProfile = new Profile("chalkers");

/**
When the JSON body is fully received from the Treehouse API the "end" event is triggered and the full bodyis given to the handler or callback (which is console.dir in this case)
**/
studentProfile.on("end", console.dir);

/**
If a parsing, network or HTTP error occurs an error object is passed in to the handler or callback (which is console.error in this case)
**/
studentProfile.on("error", console.error);