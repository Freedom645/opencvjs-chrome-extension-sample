window.addEventListener("message", (event) => {
  // 受け取ったbase64を読み込み
  const srcImg = document.createElement("img");
  srcImg.src = event.data;

  srcImg.onload = () => {
    // imgタグからMatに読み込んで色空間変換
    const src = cv.imread(srcImg);
    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);

    // Canvaに描画
    const outputCanvas = document.createElement("canvas");
    cv.imshow(outputCanvas, src);
    src.delete();

    // base64に変換して返信
    event.source.postMessage({ result: outputCanvas.toDataURL("image/png") }, event.origin);
  };
});
