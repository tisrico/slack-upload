#!/usr/bin/env node

var Slack = require('node-slack-upload');
var fs = require('fs');
var program = require('commander');

program
  .version('1.0.5')
  .option('-f, --file [value]', 'name of file to be uploaded')
  .option('-k, --token [value]', 'slack api token')
  .option('-c, --channel [value]', 'channel name')
  .option('-t, --title [value]', 'title of post')
  .option('-m, --comment [value]', 'inital comment')
  .option('-v, --verbose', 'show detail result')
  .parse(process.argv);
  
var slack = new Slack(program.token?program.token:process.env.SLACK_TOKEN);

slack.uploadFile({
    file: fs.createReadStream(program.file),
    title: program.title,
    initialComment: program.comment,
    channels: program.channel
}, function(err, data) {
    if (err) {
        console.error(err);
    }
    else {
		console.log('Uploaded : %s', program.file);
		if(program.verbose) {
			console.log('Uploaded file details: ', data);
		}
	}
});
