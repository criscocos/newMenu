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