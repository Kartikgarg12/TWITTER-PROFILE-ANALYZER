var express = require('express');
var twitter = require('twitter');


client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites.
  console.log(response);  // Raw response object.
});


client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

module.exports = 