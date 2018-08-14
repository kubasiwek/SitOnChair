var photoes = document.querySelectorAll('.photoes li'),
    articles = document.querySelectorAll('.articles li'),
    next = document.querySelector('.arrow__right'),
    prev = document.querySelector('.arrow__left'),
    which = 0;

photoes[which].className = "visible";
articles[which].className = "visible";

prev.addEventListener('click', function () {
    articles[which].className = "";
    photoes[which].className = "";
    which--;
    if (which < 0) {
        which = photoes.length - 1;

    }
    photoes[which].className = "visible";
    articles[which].className = "visible";
});

next.addEventListener('click', function () {
    articles[which].className = "";
    photoes[which].className = "";
    which++;
    if (which > 1) {
        which = 0;

    }
    photoes[which].className = "visible";
    articles[which].className = "visible";
});

var lists = document.querySelectorAll('.drop_down_list');
var drops = document.querySelectorAll('.list_panel');
var label = document.querySelectorAll('.list_label');

var title = document.querySelector('.panel_left .title');
var color = document.querySelector('.panel_left .color');
var pattern = document.querySelector('.panel_left .pattern');
var transport = document.querySelector('.panel_left .transport');
var titleValue = document.querySelector('.panel_right .title');
var colorValue = document.querySelector('.panel_right .color');
var patternValue = document.querySelector('.panel_right .pattern');
var transportValue = document.querySelector('.panel_right .transport');

var sum = document.querySelector('.sum');
sum.innerText = "0";

var checkbox = document.getElementById('transport');

checkbox.addEventListener('change', function () {
    var traVal = checkbox.dataset.price;
    if (this.checked) {
        transport.innerText = "Transport";
        transportValue.innerText = traVal;
        sum.innerText = Number(sum.innerText) + Number(transportValue.innerText);
    }
    else if (!this.checked) {
        transport.innerText = "";
        transportValue.innerText = "";
        sum.innerText = Number(sum.innerText) - traVal;
    }

});


lists.forEach(function (list, index) {
    list.addEventListener('click', function () {
        if (drops[index].style.display === "none") {
            drops[index].style.display = "block";
            var drop = drops[index].querySelectorAll('li');

            drop.forEach(function (element) {
                element.addEventListener('click', function () {
                    var tmp = element.innerText;
                    var tmpVal = element.dataset.price;
                    label[index].innerText = tmp;
                    console.log(label[index].innerText);
                    console.log(tmpVal);

                    switch (index) {
                        case 0:
                            title.innerText = tmp;
                            titleValue.innerText = tmpVal;
                            break;
                        case 1:
                            color.innerText = tmp;
                            colorValue.innerText = tmpVal;
                            break;
                        case 2:
                            pattern.innerText = tmp;
                            patternValue.innerText = tmpVal;
                            break;
                    }
                })
            })
        }
        else {
            drops[index].style.display = "none";
        }
        sum.innerText = Number(transportValue.innerText) + Number(titleValue.innerText) + Number(colorValue.innerText) + Number(patternValue.innerText);
    })
});


var sum = document.querySelector('.sum');
console.log(titleValue.innerText);

var button = document.querySelector('.green_button');

button.addEventListener('click', function (e) {

    var error = false;
    var errorMessages = [];
    var errors = document.querySelector('.errors');
    label.forEach(function (element, index) {
        var inner = element.innerText;

        if (inner.indexOf("Wybierz")!==-1){
            error = true;

            switch(index) {
                case 0:
                    errorMessages.push("Wybierz rodzaj");
                    break;
                case 1:
                    errorMessages.push("Wybierz kolor");
                    break;
                case 2:
                    errorMessages.push("Wybierz materiał");
                    break;
            }
        }
            })

    if(error) {
        e.preventDefault();

        if(errors.children.length>0){
            var lenght = errors.children.length;
            for(var i=0;i<lenght;i++){
                console.log("usuwam");
                errors.removeChild(errors.lastElementChild);
            }
        }
        console.table(errorMessages);
        errorMessages.forEach(function (errorMessage) {
            var p = document.createElement('p');
            p.innerText = errorMessage;
            errors.appendChild(p);
        });
    }
})

var accept =document.querySelector('.accept');
var pick = document.getElementById('img');

accept.addEventListener('click', function(){
    if(pick.backgroundImage === "White"){
        pick.backgroundImage = 'url("../images/form_ok.jpg")';
    } else {
        pick.backgroundImage = "White";
    }
})


//strasznie mi się nie chciało już robić walidacji formularza do kontatku :(



