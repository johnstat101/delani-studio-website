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
        var $form = $("#subscribeForm");
        if (name != "" && email != "" && message != "") {
            register($form);
            // alert("Hello " + name + " we have received your message. Thank you for reaching out to us!");
        };
        event.preventDefault();
    });
});

//
function register($form) {
    $("#subscribeForm").val('Sending...');
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        error: function(err) { alert('Could not connect to the registration server. Please try again later.') },
        success: function(data) {
            $("#subscribeForm").val('subscribe')
            if (data.result === 'success') {
                //Success
                $('#subscribe-result').html('<p>Thank you for subscribing. We have sent you a confirmation email.</p>')
            } else {
                // if error
                $('#subscribe-result').html('<p>' + data.msg.substring(4) + '</p>')
            }
        }
    })
};