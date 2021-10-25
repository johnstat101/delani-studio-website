// toggle effect function on "what-We-Do" section
$(document).ready(function() {
    $("#design").click(function() {
        $("#design-icon").toggle();
        $("#design-text").toggle();
    });
    $("#development").click(function() {
        $("#development-icon").toggle();
        $("#development-text").toggle();
    });
    $("#product").click(function() {
        $("#product-icon").toggle();
        $("#product-text").toggle();
    });
});


// Portfolio section


// User Inputs form section
$(document).ready(function() {
    $("form").submit(function() {
        var name = $("input#user-name").val();
        var email = $("input#user-email").val();
        var message = $("input#user-message").val();
        if (name != "" && email != "" && message != "") {
            alert("Hello " + name + " we have received your message. Thank you for reaching out to us!");
        };
        event.preventDefault();
    });
});