//banner form ajax
$(function () {
  // Get the form.
  var form = $("#hero-form");

  // Get the messages div.
  var formMessageSuccess = $("#hero-form-message-success");
  var formMessageFail = $("#hero-form-message-fail");
  var formContainer = $("#hero-form-container");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        $(formContainer).addClass("d-none");
        // Make sure that the formMessages div has the 'success' class.
        $(formMessageSuccess).removeClass("d-none");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessageFail).removeClass("d-none");
      });
  });
});

//banner form ajax
$(function () {
  // Get the form.
  var form = $("#contact-form");

  // Get the messages div.
  var formMessageSuccess = $("#contact-form-message-success");
  var formMessageFail = $("#contact-form-message-fail");
  var formContainer = $("#contact-form-container");

  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        $(formContainer).addClass("d-none");
        // Make sure that the formMessages div has the 'success' class.
        $(formMessageSuccess).removeClass("d-none");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessageFail).removeClass("d-none");
      });
  });
});
