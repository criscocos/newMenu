//Will set the current version 
function setVersion() {
    var width = $(window).width();
    if(width > 469) {
                $("#header").show();
                $("#mheader").hide();
            }
            
            else {
                $("#header").hide();
                $("#mheader").show();
            }
        
        $(window).resize(function () {
            width = $(window).width();
            
            if(width > 469) {
                $("#header").show();
                $("#mheader").hide();
            }
            
            else {
                $("#header").hide();
                $("#mheader").show();
            }
        });
}


//call this function everytime for every webpage (Do NOT call the above function. It is included in this function) 
function masterFunction() {
    $('body').prepend("<div id='header'></div>");
    $('body').prepend("<div id='mheader'></div>");
    $('body').append("<div id='footer'></div>");
    
    $("#mheader").load('mtm/master-header-mobile.html');
    $("#header").load('mtm/master-header.html');
    $("#footer").load('mtm/master-footer.html');
    
    setVersion();
}