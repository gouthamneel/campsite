var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
     name: "Cloud's Rest",
     image: "https://cdn-www.trails.com/images/final/articles/32.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt risus sit amet tincidunt molestie. Nam molestie leo in neque aliquet, eu tempus arcu aliquet. Donec vestibulum turpis nec imperdiet interdum. Vivamus in elementum sem. Vivamus eu bibendum massa, quis sagittis lacus. Nam sagittis non lectus quis ultricies. In hac habitasse platea dictumst."
     },
     {
     name: "Desert Fly",
     image: "http://res.cloudinary.com/simpleview/image/upload/v1460743623/clients/roanoke/Roanoke_Camping_0834e03c-8e39-4cb2-9365-47120180f959.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt risus sit amet tincidunt molestie. Nam molestie leo in neque aliquet, eu tempus arcu aliquet. Donec vestibulum turpis nec imperdiet interdum. Vivamus in elementum sem. Vivamus eu bibendum massa, quis sagittis lacus. Nam sagittis non lectus quis ultricies. In hac habitasse platea dictumst."
     },
     {
     name: "Canyon Float",
     image: "https://s-media-cache-ak0.pinimg.com/originals/c5/59/a2/c559a2b8e85fc99e73b719d94bc5e56a.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt risus sit amet tincidunt molestie. Nam molestie leo in neque aliquet, eu tempus arcu aliquet. Donec vestibulum turpis nec imperdiet interdum. Vivamus in elementum sem. Vivamus eu bibendum massa, quis sagittis lacus. Nam sagittis non lectus quis ultricies. In hac habitasse platea dictumst."
     },
 ]

function seedDB(){
 // Remove all campgrounds
 Campground.remove({}, function(err){
    if(err){
     console.log(err);
          }
      console.log("removed campgrounds!");
      // add a few campgrounds
        data.forEach(function(seed){
         Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
            } else {
            console.log("added a new campground");
            // add comments
            Comment.create(
                 {
                  text: "This place is awesome, I wish it we had restrooms!",
                  author: "Blake"
                  }, function(err, comment){
                    if (err){
                    console.log(err);
                    } else {
                     campground.comments.push(comment);
                     campground.save();
                     console.log("Created a new comment");
                         }
                      });                 
                  }
              });
          });
     });
 }
 
 module.exports = seedDB;
 
