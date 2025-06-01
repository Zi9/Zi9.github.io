var input = document.getElementById("in");
var output = document.getElementById("out");

input.addEventListener("input", britishify)

function britishify()
{
    output.value = input.value.replace(/t/g, "'");
}