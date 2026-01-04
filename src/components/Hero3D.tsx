import { useEffect, useRef } from "react";

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.01;

      // Draw grid
      ctx.strokeStyle = "hsla(215, 90%, 50%, 0.08)";
      ctx.lineWidth = 1;

      const gridSize = 60;
      const offsetX = (time * 20) % gridSize;
      const offsetY = (time * 10) % gridSize;

      for (let x = -gridSize + offsetX; x < canvas.offsetWidth + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
      }

      for (let y = -gridSize + offsetY; y < canvas.offsetHeight + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
        ctx.stroke();
      }

      // Draw particles and connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1;

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(215, 90%, 50%, ${0.15 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `hsla(215, 90%, 50%, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw glowing orbs
      const orb1X = canvas.offsetWidth * 0.3 + Math.sin(time) * 30;
      const orb1Y = canvas.offsetHeight * 0.4 + Math.cos(time * 0.8) * 20;
      const orb2X = canvas.offsetWidth * 0.7 + Math.cos(time * 0.7) * 40;
      const orb2Y = canvas.offsetHeight * 0.6 + Math.sin(time * 0.9) * 30;

      // Orb 1
      const gradient1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 80);
      gradient1.addColorStop(0, "hsla(215, 90%, 50%, 0.3)");
      gradient1.addColorStop(1, "hsla(215, 90%, 50%, 0)");
      ctx.fillStyle = gradient1;
      ctx.beginPath();
      ctx.arc(orb1X, orb1Y, 80, 0, Math.PI * 2);
      ctx.fill();

      // Orb 2
      const gradient2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 60);
      gradient2.addColorStop(0, "hsla(195, 95%, 50%, 0.25)");
      gradient2.addColorStop(1, "hsla(195, 95%, 50%, 0)");
      ctx.fillStyle = gradient2;
      ctx.beginPath();
      ctx.arc(orb2X, orb2Y, 60, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
