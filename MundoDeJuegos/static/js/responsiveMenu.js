var menu = null;

if (window.innerWidth >= 1000) {
    var phone = true
}
else {
    var phone = false
}

setInterval(function() {
    if (phone) {
        if (window.innerWidth >= 1000) {
            if (document.getElementsByClassName("normalMenuCont").length == 0) {
                document.getElementById("menuUltraCont").appendChild(menu);
                document.getElementById("menuUltraCont").style.height = "80px";
                $(".menuButtonText").css("font-size", "30px");
            }
            document.getElementsByClassName("normalMenuCont")[0].style.visibility = "visible";
            menu = document.getElementById("pmenu");
            document.getElementById("pmenu").remove();
            
            phone = false;
        }
    }
    else {
        if (window.innerWidth < 1000) {
            if (document.getElementById("pmenu") == null){
                document.getElementById("phoneMenuUltraCont").appendChild(menu);
            }
            document.getElementById("pmenu").style.visibility = "visible";
            menu = document.getElementsByClassName("normalMenuCont")[0];
            $(".menuButtonText").css("font-size", "15vw");
            document.getElementsByClassName("normalMenuCont")[0].remove();
            document.getElementById("menuUltraCont").style.height = "0px";

            //Title
            document.getElementsByClassName("title")[0].style["font-size"] = "60px";

            buttonsFunction();
            
            phone = true;
        }
    }
}, 500)

function openMenu() {
    console.log($("#phoneMenu").css("left"));
    if ($("#phoneMenu").css("left")=="0px") {
        $("#phoneMenu").animate({left: "-100%"}, 500, function() {
            $("#phoneMenu").css("left", "-100%");
        })
    }
    else {
        $("#phoneMenu").animate({left: "0%"}, 500, function() {
            $("#phoneMenu").css("left", "0%");
        })
    }
}

function buttonsFunction() {

    //Ubicacion
    $("#ubicacion").on("click", function() {
        openMenu();
        $("html, body").animate({
            scrollTop: $("#ubicacionSection").offset().top+$("#ubicacionSection").height()-window.innerHeight+100
        }, 1000)
        $("html, body").animate({
            scrollTop: $("#ubicacionSection").offset().top-100
        }, 2000)
    })

    //Boton de contacto
    $("#contacto").on("click", function() {
        openMenu();
        $("html, body").animate({
            scrollTop: $("#footer").closest("div").offset().top
        }, 2000)
    })

    //Boton de quienes somos
    $("#about").on("click", function() {
        openMenu();
        $("html, body").animate({
            scrollTop: $("#principios").offset().top+$("#principios").height()-window.innerHeight+50
        }, 1000)
        $("html, body").animate({
            scrollTop: $("#infoAboutUs").offset().top-100
        }, 3000)
    })

    //Boton de inicio
    $("#inicio").on("click", function() {
        openMenu();
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })

    //Boton de avisos
    $("#avisosButton").on("click", function() {
        openMenu();
        console.log("Prueba")
        $("html, body").animate({
            scrollTop: $("#infoAvisos").offset().top+$("#infoAvisos").height()-window.innerHeight+50
        }, 1000)
        $("html, body").animate({
            scrollTop: $("#infoAvisos").offset().top-100
        }, 3000)
    })

}