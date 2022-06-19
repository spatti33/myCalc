$(".dark-icon").on("click", function (event) {
    $("body").toggleClass("dark");
    $("h1").toggleClass("dark-h1");
})

$(".btn").on("click", function (event) {
    var button = event.target.id;

    if (button === "AC") {
        $("h1").text("");
    }

    if (isFinite(button)) {
        $("h1").append(button);
        $("h1").removeClass("hidden");
    }

    if ((button === "-" || button === "+" || button === "*" || button === "/" || button === ".")) {
        var title = $("h1").text();
        var lastChar = title[title.length - 1];
        if (($("h1").text() !== "") && (lastChar !== "-" && lastChar !== "+" && lastChar !== "*" && lastChar !== "/" && lastChar !== ".")) {
            $("h1").append(button);
        }
    }

    if (button === "%") {
        var title = $("h1").text();
        $("h1").text("");
        Enter(title, 1);
    }

    if (button === "=") {
        var title = $("h1").text();
        $("h1").text("");
        Enter(title, 0);
    }

    if (button === "dark-mode") {
        $("body").toggleClass("dark");
        $("h1").toggleClass("dark-h1");
    }
});

$(".btn").mouseup(function(){
    $(this).blur();
})

$(document).on("keypress", function (event) {
    var key = event.originalEvent.key;

    if (isFinite(key)) {
        $("h1").append(key);
        $("h1").removeClass("hidden");
    }

    if ((key === "-" || key === "+" || key === "*" || key === "/" || key === ".")) {
        var title = $("h1").text();
        var lastChar = title[title.length - 1];
        if (($("h1").text() !== "") && (lastChar !== "-" && lastChar !== "+" && lastChar !== "*" && lastChar !== "/" && lastChar !== ".")) {
            $("h1").append(key);
        }
    }

    if (key === "%") {
        var title = $("h1").text();
        $("h1").text("");
        Enter(title, 1);
    }

    if (key === "Enter" || key === "=") {
        var title = $("h1").text();
        $("h1").text("");
        Enter(title, 0);
    }
})

function Enter (equation, percent) {
    var lastChar = equation[equation.length - 1];

    if (lastChar === "-" || lastChar === "+" || lastChar === "*" || lastChar === "/" || lastChar === ".") {
        $("h1").text("Error: Invalid Function");
        setTimeout(function () {
            $("h1").text("");
        }, 1500);
    } else {
        if (percent === 1) {
            var answer = eval(equation);
            answer = Math.round(answer * 100) / 100;
            $("h1").text(answer/100);
        } else {
            var answer = eval(equation);
            answer = Math.round(answer * 100) / 100;
            $("h1").text(answer);
        }
    }

    
}
