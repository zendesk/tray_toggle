(function() {

  return {
    events: {
      'app.created':'toggleTray'
    },

    toggleTray: function() {
      // TODO make this conditional on a setting
      this.showTray();
    },
    showTray: function() {
      _.delay( function() { services.appsTray().show(); }, 100 );
    },
    hideTray: function() {
      _.delay( function() { services.appsTray().hide(); }, 100 );
    }
  };

}());
