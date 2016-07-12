(function ( $ ) {
  $.fn.flippo = function( options) {
    this.addClass("flippo");
    this.addClass("flippoed");
    this.children().each(function () {
      $this = $(this);
      $this.addClass("flippo");
      $this.addClass("flippoed");
    });
    return this;
  };

  $.fn.unFlippo = function( options) {
    this.children().each(function () {
      $this = $(this);
      $this.removeClass("flippo");
      $this.removeClass("flippoed");
    });
    this.removeClass("flippo");
    this.removeClass("flippoed");
    return this;
  };
 
}( jQuery ));