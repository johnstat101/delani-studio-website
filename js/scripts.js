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


// Portfolio section/ Hover effect **DRY code
$(document).ready(function() {
    var imagesWork = ["img-work1", "img-work2", "img-work3", "img-work4", "img-work5", "img-work6", "img-work7", "img-work8"];
    imagesWork.forEach(function(img) {
        $("#" + img).hover(function() {
            $("#" + img + "-text").toggle();
        })
    })
})



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