import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  lifespan: number;
  age: number;
  isUserGenerated?: boolean;
}

interface InteractiveBackgroundProps {
  isDarkMode?: boolean;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ isDarkMode = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const isInitializedRef = useRef<boolean>(false);

  const colorPaletteRef = useRef<string[]>(['#38b6ff', '#ff3366', '#7b42f5', '#4CAF50']);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const createParticle = (x: number, y: number, isUserGenerated = false): Particle => {
      const size = isUserGenerated ? Math.random() * 8 + 4 : Math.random() * 5 + 1;
      const speedX = (Math.random() - 0.5) * (isUserGenerated ? 1.5 : 1);
      const speedY = (Math.random() - 0.5) * (isUserGenerated ? 1.5 : 1);
      const color = colorPaletteRef.current[Math.floor(Math.random() * colorPaletteRef.current.length)];
      const lifespan = isUserGenerated ? 200 : Infinity; // User particles last 200 frames

      return {
        x, y, size, speedX, speedY, color, lifespan, age: 0, isUserGenerated
      };
    };

    if (!isInitializedRef.current) {
      const initParticles = () => {
        const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30));
        const particles: Particle[] = [];

        for (let i = 0; i < numberOfParticles; i++) {
          particles.push(createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          ));
        }

        particlesRef.current = particles;
      };

      initParticles();
      isInitializedRef.current = true;
    }

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      for (let i = 0; i < 8; i++) {
        particlesRef.current.push(createParticle(x, y, true));
      }
    };

    canvas.addEventListener('click', handleClick);

    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      for (let i = 0; i < 8; i++) {
        particlesRef.current.push(createParticle(x, y, true));
      }
    };

    canvas.addEventListener('touchstart', handleTouch);

    // convert hex color to RGB
    const hexToRgb = (hex: string): [number, number, number] => {
      hex = hex.replace('#', '');

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      return [r, g, b];
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.age++;

        if (particle.age > particle.lifespan) {
          return false;
        }

        const opacity = particle.isUserGenerated
          ? 1 - (particle.age / particle.lifespan)
          : 1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        if (particle.isUserGenerated) {
          const [r, g, b] = hexToRgb(particle.color);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        } else {
          ctx.fillStyle = particle.color;
        }

        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        return true;
      });

      connectParticles();

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    const connectParticles = () => {
      const maxDistance = 150;

      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const colorOpacity = isDarkMode ? 0.15 : 0.1;

            const particleOpacity =
              (particlesRef.current[a].isUserGenerated || particlesRef.current[b].isUserGenerated)
                ? Math.min(
                    1 - (particlesRef.current[a].age / particlesRef.current[a].lifespan),
                    1 - (particlesRef.current[b].age / particlesRef.current[b].lifespan)
                  )
                : 1;

            ctx.beginPath();
            ctx.strokeStyle = isDarkMode
              ? `rgba(255, 255, 255, ${opacity * colorOpacity * particleOpacity})`
              : `rgba(0, 0, 0, ${opacity * colorOpacity * particleOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(drawParticles);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('click', handleClick);
      canvas.removeEventListener('touchstart', handleTouch);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-auto z-0"
      aria-label="Interactive background"
    />
  );
};

export default InteractiveBackground;