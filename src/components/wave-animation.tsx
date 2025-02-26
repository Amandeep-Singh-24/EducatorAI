"use client"

import { useEffect, useRef } from "react"

export function WaveAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Wave properties
    const waves = [
      { frequency: 0.02, amplitude: 20, speed: 0.05, color: "#8b5cf6", phase: 0 },
      { frequency: 0.03, amplitude: 15, speed: 0.03, color: "#06b6d4", phase: 2 },
      { frequency: 0.01, amplitude: 25, speed: 0.02, color: "#3b82f6", phase: 4 },
    ]

    // Animation
    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw each wave
      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        // Update phase
        wave.phase += wave.speed
        if (wave.phase > Math.PI * 2) wave.phase = 0

        // Draw wave
        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin(x * wave.frequency + wave.phase) * wave.amplitude * (0.8 + 0.2 * Math.sin(time * 0.005)) +
            canvas.height / 2
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = wave.color
        ctx.lineWidth = 3
        ctx.stroke()
      })

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-64" style={{ maxWidth: "900px" }} />
    </div>
  )
}

