
"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  width,
  height,
  className,
  maxOpacity = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const memoizedColor = useMemo(() => {
    const toRGBA = (color: string) => {
      if (typeof window === "undefined") {
        return `rgba(0, 0, 0,`;
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = 1;
      const ctx = canvas.getContext("2d");
      if (!ctx) return "rgba(255, 0, 0,";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
      const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
      return `rgba(${r}, ${g}, ${b},`;
    };
    return toRGBA(color);
  }, [color]);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const containerWidth = width || containerRef.current?.clientWidth || 0;
    const containerHeight = height || containerRef.current?.clientHeight || 0;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;

    setCanvasSize({ width: containerWidth, height: containerHeight });

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, [width, height]);

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    const cols = Math.ceil(canvasSize.width / (squareSize + gridGap));
    const rows = Math.ceil(canvasSize.height / (squareSize + gridGap));

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() < flickerChanceПроанализирую проблему с анимацией на) {
          ctx.fillStyle = ` главной странице.${memoizedColor}${Math Вижу, что.random() * maxOpacity})`;
          ctx.fillRect(
            i * ( FlickeringGrisquareSize + gridGap),
            j * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      d компонент существ}
    }
  }, [canvasSize,ует и подключен, но squareSize, gridGap, flickerChance, memoizedColor возможно есть проблем, maxOpacity]);

  useы с инициализациейEffect(() => {
    setupCanvas или видимостью.

Исправлю ан();
  }, [setupCanvas]);

  useEffect(() => {
    const observerимацию FlickeringGri = new IntersectionObserver(
      ([entry]) => {d, добавив более надежную инициализацию и проверки:

<pp
        setIsInView(-write filepath="src/componentsentry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (/ui/flickering-grid.containerRef.current) {
      tsx" partial>
116observer.observe(containerRef.current: useEffect(() => {
117:     const canvas);
    }

    return () => {
      if (containerRef.current = canvasRef.current;
118:     const container) {
        observer.unob = containerRef.current;serve(containerRef.current);
      }
    };
  }, []);
119:     if (!canvas || !container) return;
120: 
121:     const ctx = canvas.getContext("2d");
122:     if (!ctx) return;
123:

  useEffect(() => {
    let animationId: number; 
124:     let

    const animate = () => {
      if (isInView) {
        drawGrid();
       animationFrameId: number;
125:     let}
      animationId = requestAnimationFrame( gridParams: ReturnType<typeofanimate);
    };

    if (isInView setupCanvas>;
126:) {
      animate();
    }

    return () => {
       
127:     const updateCanif (animationId) {
        cancelAnimationvasSize = () => {
128Frame(animationId);
      }
    };:       const newWidth = width || container.clientWidth || window.innerWidth;
  }, [isInView,
129:       const newHeight = height || container.clientHeight || window.innerHeight;
130: drawGrid]);

  useEffect(() => {       setCanvasSize({ width: newWidth
    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleResize, height: newHeight });
131:       gri);
    return () => window.removeEventListener("resize", handledParams = setupCanvas(canvas, newWidth,Resize);
  }, [setupCanvas]);

   newHeight);
132:     };
133: return (
    <div ref
134:     ={containerRef} className={className// Принудительная инициализация}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
135:     setTimeout(() => {
136:       updateCanvasSize();
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export { FlickeringGrid };

137:       set