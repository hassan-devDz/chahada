


//forms================
var forms = document.querySelector(".needs-validation");
let validationTooltip01 = document.getElementById("validationTooltip01"),
    validationTooltip02 = document.getElementById("validationTooltip02"),
    validationTooltip03 = document.getElementById("validationTooltip03"),
    validationTooltip04 = document.getElementById("validationTooltip04");
var said;
function cnv() {
    if (validationTooltip03.value == "ذكر") {
        said = "السيد"
    }
    if (validationTooltip03.value == "أنثى") {
        said = "السيدة"
    }

    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    var input;
    let text = new Array();
    text = [
        `الى ${said}  ${validationTooltip01.value}  ${validationTooltip02.value}  ${validationTooltip04.value}`,
        " بمناسبة اليوم العالمي للمعلم الموافق لـ 5 أكتوبر 2020 -18 صفر 1446 هـ",
        "وزارة التربية الوطنية",
        "أن تتقدم لكم بوافر الشكر والتقدير نظير جهدكم المبارك في إنجاح عملية التعليم المصاحبة لجائحة ",
        "كورونا سائلين الله أن يرفع البلاء ويجزل لكم العطاء",
        "الوزير",
    ];
    let height = 60;

    const image = new Image();
    image.onload = drawImageActualSize; // Draw when image has loaded

    // Load an image of intrinsic size 300x227 in CSS pixels
    image.src = "img/charf.png";
    const FONT_NAME = 'Amiri';
    let font = new FontFaceObserver('Amiri');
    function renderText() {

        ctx.font = `400 40px ${FONT_NAME}`;
        ctx.fillStyle = "black";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        text.forEach((x, i) => {
            if (i == text.length - 1) {
                ctx.fillText(
                    x + "\n",
                    canvas.width / 3,
                    canvas.height / 2 + height * (i + 1)
                );
            } else {
                ctx.fillText(
                    x + "\n",
                    canvas.width / 2,
                    canvas.height / 2 + height * i
                );
            }
        });

    }


    function drawImageActualSize() {
        // Use the intrinsic size of image in CSS pixels for the canvas element
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;


        // Will draw the image as 300x227, ignoring the custom size of 60x45
        // given in the constructor
        ctx.drawImage(this, 0, 0);

        // To use the custom size we'll have to specify the scale parameters
        // using the element's width and height properties - lets draw one
        // on top in the corner:
        ctx.drawImage(this, 0, 0, this.width, this.height);


        font.load().then(renderText);


    }
}
var clic = document.getElementById('click');

clic.addEventListener("click", cnv)
if (forms.checkValidity()) {

}


var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), { show: false })


// Loop over them and prevent submission
forms.addEventListener(
    "submit",
    function (event) {

        if (!forms.checkValidity()) {

            event.preventDefault();
            event.stopPropagation();

        }
        if (forms.checkValidity()) {
            validationTooltip01.value = ""
            // Using optional size for image
            myModal.show()
            event.preventDefault()






        }

        forms.classList.add("was-validated");
    },
    false)







function save() {

    var gh = canvas.toDataURL("png");

    var a = document.createElement("a");
    a.href = gh;
    a.download = "النقابة المستقلة لعمال التربية والتكوين.png";

    a.click();
}