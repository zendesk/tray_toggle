(function() {

  return {
    events: {
      'app.created':'hideTheTray'
    },

    hideTheTray: function() {
      _.delay( function() { services.appsTray().hide(); }, 2000 );
    }
  };

}());
