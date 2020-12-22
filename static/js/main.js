$(function () {
    $(window).scroll(function () {
        $(".backtop").show(4000)
    })

    $(".backtop").click(function(){
        $(this).hide()
    })
})


// function to copy image url to clipboard
function copyToClipboard(id) {
    var takeText = document.getElementById(id);
    var createAttribute = takeText.textContent;
    console.log(createAttribute);

    var inputElement = document.createElement("input");
    document.body.appendChild(inputElement);
    inputElement.setAttribute("value", createAttribute);
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Image url copied to clipboard");
    inputElement.setAttribute("hidden", true);
    document.removeChild(inputElement);
  }
