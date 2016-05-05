function setVersion() {
    var width = $(window).width();
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $("#mheader").show();
                $("#header").hide();
            }
            
            else {
                $("#mheader").hide();
                $("#header").show();
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