$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("#hightlight").click(function() {
    // $("#hightlight").removeClass();
    $("#hightlight").addClass("box");
  });

  // $("button#red").click(function() {
  //   $("body").removeClass();
  //   $("body").addClass("red-background");
  // });
});



