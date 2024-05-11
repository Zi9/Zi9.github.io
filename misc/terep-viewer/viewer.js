function loadHeightmap() {
 $("#file-loader").click();
}
function loadTexmap() {
}
function loadTexture() {
}

var canvas = document.getElementById("viewer");
var gl = canvas.getContext("webgl");
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
