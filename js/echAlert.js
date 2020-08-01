function close_alert() {

}

function createAlert(message, state,direction) {
    var echAlert = $("<div></div>").attr("class", "echAlert");
    echAlert.css("margin-left", "20px");
    var flexLayout = $("<div></div>").attr("class", "flexLayout");
    var alertBody = $("<div></div>").attr("class", "body-alert");
    var iconClose = $("<i></i>").click(function () {

        alertBody.fadeOut(function () {
            (this).remove();
        });

    });
    iconClose.attr("class", "material-icons close-alart");
    iconClose.html("close");
    var Message = $("<p></p>").attr("class", "text-alert");
    Message.html(message);
    var iconAlert = $("<i></i>");

    switch (state) {

        case -1:
            iconAlert.attr("class", "material-icons icon-alert-error");
            iconAlert.html("error_outline");
            break;
        case 0:
            iconAlert.attr("class", "material-icons icon-alert-warning");
            iconAlert.html("warning");
            break;
        case 1:
            iconAlert.attr("class", "material-icons icon-alert-success");
            iconAlert.html("done");
            break;

    }
    if(direction==="RTL" || direction==="rtl"){
        alertBody.append(iconAlert, Message,iconClose );
    }else if(direction==="LTR" || direction==="ltr"){
        alertBody.append(iconClose, Message, iconAlert);
    }

    if ($('body .echAlert').length === 0) {
        flexLayout.append(alertBody);
        alertBody.hide().fadeIn(600);
        echAlert.append(flexLayout);
        $('body').append(echAlert);
    } else {
        $('.flexLayout').append(alertBody);
        alertBody.hide().fadeIn(600);
    }

}

/**
 * Alert to display a successful message
 *
 *The method inputs are as follows:
 *
 *Input 1: Message text to display
 *
 *Input 2: Position in the pan:
 *
 *1: Top left
 *
 *2: Top right
 *
 *3: Bottom right
 *
 *4: Bottom left
 *
 * Input 3: "RTL" or "LTR"
 */
function alert_success(message, position,direction) {
    createAlert(message, 1,direction);
    switch (position) {
        case 1:
            $(".echAlert").css("top", "20px");
            $(".echAlert").css("left", "20px");
            $(".flexLayout").addClass("flexLayout-left");
            break;
        case 2:
            $(".echAlert").css("top", "20px");
            $(".echAlert").css("right", "20px");
            break;
        case 3:
            $(".echAlert").css("bottom", "20px");
            $(".echAlert").css("right", "20px");
            break;
        case 4:
            $(".echAlert").css("bottom", "20px");
            $(".echAlert").css("left", "20px");
            $(".flexLayout").addClass("flexLayout-left");
            break;
    }
    $(".body-alert:last-child").addClass("body-success");
}

/**
 * Alert to display a warning message
 *
 *The method inputs are as follows:
 *
 *Input 1: Message text to display
 *
 *Input 2: Position in the pan:
 *
 *1: Top left
 *
 *2: Top right
 *
 *3: Bottom right
 *
 *4: Bottom left
 */
function alert_warning(message, position,direction) {
    createAlert(message, 0,direction);
    switch (position) {
        case 1:
            $(".echAlert").css("top", "20px");
            $(".echAlert").css("left", "20px");
            break;
        case 2:
            $(".echAlert").css("top", "20px");
            $(".echAlert").css("right", "20px");
            break;
        case 3:
            $(".echAlert").css("bottom", "20px");
            $(".echAlert").css("right", "20px");
            break;
        case 4:
            $(".echAlert").css("bottom", "20px");
            $(".echAlert").css("left", "20px");
            break;
    }
    $(".body-alert:last-child").addClass("body-warning");
}

/**
 * Alert to display a error message
 *
 *The method inputs are as follows:
 *
 *Input 1: Message text to display
 *
 *Input 2: Position in the pan:
 *
 *1: Top left
 *
 *2: Top right
 *
 *3: Bottom right
 *
 *4: Bottom left
 */
function alaet_error(message, position,direction) {
    createAlert(message, -1,direction);
    switch (position) {
        case 1:
            $(".echAlert").css("top", "20px");
            $(".echAlert").css("left", "20px");
            break;
        case 2:
            $(".echAlert").css("top", "20px");
            $(".echAlert").css("right", "20px");
            break;
        case 3:
            $(".echAlert").css("bottom", "20px");
            $(".echAlert").css("right", "20px");
            break;
        case 4:
            $(".echAlert").css("bottom", "20px");
            $(".echAlert").css("left", "20px");
            break;
    }
    $(".body-alert:last-child").addClass("body-error");
}
