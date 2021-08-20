$(function($){
    // Goodey Menu
    $("#gooey-upper").gooeymenu({
      bgColor: "#4C280D",
      contentColor: "white",
      style: "circle",
      horizontal: {
        menuItemPosition: "glue"
      },
      vertical: {
        menuItemPosition: "spaced",
        direction: "up"
      },
      circle: {
        radius: 80
       },
       margin: "small",
       size: 90,
       bounce: true,
       bounceLength: "small",
       transitionStep: 100,
       hover: "#996633"
     });
    //Horizontal menu
    $("#gooey-h").gooeymenu({
      bgColor: "#68d099",
      contentColor: "white",
      style: "horizontal",
      horizontal: {
        menuItemPosition: "glue"
      },
      vertical: {
        menuItemPosition: "spaced",
        direction: "up"
      },
      circle: {
        radius: 90
      },
      margin: "small",
      size: 80,
      bounce: true,
      bounceLength: "small",
      transitionStep: 100,
      hover: "#5dbb89"
    });
    //Round Menu
    $("#gooey-round").gooeymenu({
      bgColor: "#8068db",
      contentColor: "white",
      style: "circle",
      horizontal: {
        menuItemPosition: "spaced"
      },
      vertical: {
        menuItemPosition: "spaced",
        direction: "up"
      },
      circle: {
        radius: 85
      },
      margin: "small",
      size: 80,
      bounce: true,
      bounceLength: "small",
      transitionStep: 100,
      hover: "#8498db"
    });
    // Vertical Menu
    $("#gooey-v").gooeymenu({
      bgColor: "#e97b7a",
      contentColor: "white",
      style: "vertical",
      horizontal: {
        menuItemPosition: "glue"
      },
      vertical: {
        menuItemPosition: "spaced",
        direction: "down"
      },
      circle: {
        radius: 90
      },
      margin: "small",
      size: 70,
      bounce: true,
      bounceLength: "small",
      transitionStep: 100,
      hover: "#e67b7a"
    });
    //Enter Api
    $("#gooey-API").gooeymenu({
      bgColor: "#68d099",
      contentColor: "white",
      style: "circle",
      circle: {
        radius: 85
      },
      margin: "small",
      size: 70,
      bounce: true,
      bounceLength: "small",
      transitionStep: 100,
      hover: "#5dbb89",
      open: function() {                     
        $(this).find(".gooey-menu-item").css("background-color", "steelblue");
        $(this).find(".open-button").css("background-color", "steelblue");
      },
      close: function() {
        $(this).find(".gooey-menu-item").css("background-color", "#ffdf00");
        $(this).find(".open-button").css("background-color", "#ffdf00");
      }
    });
  });