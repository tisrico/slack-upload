# slack-upload

## Install

npm install slack-upload -g 

## usage

$ slack-upload --help

  Usage: slack-upload [options]

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    -f, --file [value]     name of file to be uploaded
    -k, --token [value]    slack api token
    -c, --channel [value]  channel name
    -t, --title [value]    title of post
    -m, --comment [value]  inital comment
    -v, --verbose          show detail result

## Slack API token

An api token can be set in SLACK TOKEN environment variable as well as given through --token.
Guide on how to generate a [slack api token](https://get.slack.help/hc/en-us/articles/215770388-Create-and-regenerate-API-tokens)