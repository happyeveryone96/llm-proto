import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const setCanvasSize = () => {
      const tempCanvas = document.createElement("canvas");
      const tempContext = tempCanvas.getContext("2d");

      // 원래 크기로 tempCanvas에 기존 그림 복사
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempContext.drawImage(canvas, 0, 0);

      // 새로운 캔버스 크기 설정
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;

      // 스케일 계산 (비율 계산)
      const scaleX = newWidth / tempCanvas.width;
      const scaleY = newHeight / tempCanvas.height;
      setScale({ x: scaleX, y: scaleY });

      // 기존 그림을 스케일에 맞게 다시 그리기
      context.scale(scaleX, scaleY);
      context.drawImage(tempCanvas, 0, 0);
    };

    setCanvasSize();

    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.lineCap = "round";

    const getCanvasCoordinates = (event) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * (canvas.width / rect.width),
        y: (event.clientY - rect.top) * (canvas.height / rect.height),
      };
    };

    const handlePointerDown = (e) => {
      setIsDrawing(true);
      const { x, y } = getCanvasCoordinates(e);

      context.beginPath();
      context.moveTo(x, y);
    };

    const handlePointerMove = (e) => {
      if (isDrawing) {
        const { x, y } = getCanvasCoordinates(e);

        context.lineTo(x, y);
        context.stroke();
      }
    };

    const handlePointerUp = () => {
      setIsDrawing(false);
    };

    window.addEventListener("resize", setCanvasSize);

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDrawing]);

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");
    uploadImage(dataURL);
  };

  const uploadImage = async (dataURL) => {
    const response = await fetch("/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: dataURL }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="canvas-box">
      <canvas className="canvas" ref={canvasRef} />
      <button onClick={saveCanvas}>Save and Upload</button>
    </div>
  );
};

export default Canvas;
