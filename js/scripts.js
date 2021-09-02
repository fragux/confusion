$(document).ready(function(){
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
    })


    $("a.login").on('click', function () {
        $('#loginModal').modal('show');
        $("button.close").on('click', function(){
            $('#loginModal').modal('hide');
        })
        $("button.cancel").on('click', function(){
            $('#loginModal').modal('hide');
        })
    })
    $("a.btn.reserve").on('click', function () {
        $('#reserveModal').modal('show');
        $("button.close").on('click', function(){
            $('#reserveModal').modal('hide');
        })
        $("button.cancel").on('click', function(){
            $('#reserveModal').modal('hide');
        })
    })
});

