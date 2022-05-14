const input = document.getElementById("input");
input.src = "sample.png";

document.getElementById("execute").onclick = (e) => {
  const canvas = document.createElement("canvas");
  canvas.width = input.width;
  canvas.height = input.height;
  canvas.getContext("2d").drawImage(input, 0, 0, canvas.width, canvas.height);
  const base64 = canvas.toDataURL("image/png");

  document.getElementById("sandbox").contentWindow.postMessage(base64, "*");
};

window.addEventListener("message", (event) => {
  // 結果受け取り
  document.getElementById("output").src = event.data.result;
});
