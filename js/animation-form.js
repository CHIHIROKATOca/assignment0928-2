$(function(){
    //animation for form
    $(".content-box").click(function(){
        $(".content-box").animate({
            "width" : "500px",
            "height" : "300px"
        },500)
        $(".content-after").slideDown().animate({opacity:1},300);
        $(".content-before").css({
            "color" : "white",
            "background-color": "#fba8a4",
            "background-image":"llinear-gradient(315deg, #fba8a4 0%, #dad2f3 74%)"
        })
    });



//For showing password <----> hideing
let viewPass = false;

    $("#hide-eye").click(function(){
        if(viewPass === false){
            $("#password-input").attr("type","text");
            $("#hide-eye").removeClass("fa-eye");
            $("#hide-eye").addClass("fa-eye-slash");
            viewPass = true;
        }else{
            $("#password-input").attr("type","password");
            $("#hide-eye").removeClass("fa-eye-slash");
            $("#hide-eye").addClass("fa-eye");
            viewPass = false;
        }
    });

//Validation
    $(".btn-submit").click(e => {
        e.preventDefault();
        let errors = [];
        let email = $("#email-input");
        let password = $("#password-input");

        if(email.val() === ""){
            email.parent().addClass("error");
            errors.push("email is required!");
        }else{
            email.parent().removeClass("error");
        }

        if(password.val() === ""){
            password.parent().addClass("error");
            errors.push("password is required!");
        }else{
            password.parent().removeClass("error");
        }

        $(".error-message").hide();
        if(errors.length > 0){
            for(const err of errors){
                let msg = $("<p></p>").text(err).css({
                    "font-size":"12px",
                    "color":"rgb(208, 109, 109)",
                    "margin":0,
                    "text-align":"right"
                }).addClass("error-message");

                if(err.includes("email")){
                    $(".input-box:first").after(msg);
                }else if (err.includes("password")){
                    $(".input-box:last").after(msg);
                }
            }
            errors = [];
        }

    })

})
