$(window).on('keydown', function(e) {
    console.log("Pressed enter")
    if (e.which == 13) {
      insertMessage();
      return false;
    }
  })
  