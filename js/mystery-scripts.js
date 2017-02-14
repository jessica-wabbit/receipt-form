$(function() {
    $("#survey form").submit(function(event) {

      var scent = $("#scent").val();
      var color = $("input:radio[name=color]:checked").val();
      var dob = $("#born").val();


      $(".scent").text(scent);
      $(".color").text(color);
      $(".dob").text(dob);

      $("#survey-results").show();

      event.preventDefault();

    });
});
