$(function() {
    $("#survey form").submit(function(event) {

      var scent = $("#scent").val();
      var color = $("input:radio[name=color]:checked").val();


      $(".scent").text(scent);
      $(".color").text(color);
      $("#survey-results").show();

      event.preventDefault();

    });
});
