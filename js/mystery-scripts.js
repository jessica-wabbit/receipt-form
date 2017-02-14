$(function() {
    $("#survey form").submit(function(event) {

      var scent = $("#scent").val();

      $(".scent").text(scent);

      $("#survey-results").show();

      event.preventDefault();

    });
});
