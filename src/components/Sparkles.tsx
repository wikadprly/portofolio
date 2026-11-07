import type { CSSProperties } from 'react'
import { useEffect, useRef } from 'react'

type Sparkle = { top: string; left: string; size: number; delay: number; depth: number }

const starPath = 'M12 0c.55 6.5 4.95 10.9 12 12-7.05 1.1-11.45 5.5-12 12-.55-6.5-4.95-10.9-12-12 7.05-1.1 11.45-5.5 12-12Z'

const heroSparkles: Sparkle[] = [
  { top: '10%', left: '2%', size: 15, delay: 0, depth: 16 },
  { top: '31%', left: '41%', size: 9, delay: 1.4, depth: 8 },
  { top: '72%', left: '5%', size: 12, delay: 2.4, depth: 20 },
  { top: '86%', left: '47%', size: 8, delay: 0.8, depth: 10 },
  { top: '15%', left: '63%', size: 10, delay: 1.9, depth: 12 },
  { top: '58%', left: '96%', size: 13, delay: 3, depth: 22 },
]

const panelSparkles: Sparkle[] = [
  { top: '14%', left: '7%', size: 12, delay: 0.3, depth: 14 },
  { top: '77%', left: '17%', size: 9, delay: 1.6, depth: 22 },
  { top: '21%', left: '82%', size: 14, delay: 2.2, depth: 18 },
  { top: '65%', left: '93%', size: 8, delay: 0.9, depth: 10 },
  { top: '46%', left: '53%', size: 7, delay: 2.8, depth: 6 },
  { top: '89%', left: '67%', size: 10, delay: 1.1, depth: 16 },
]

export function Sparkles({ variant = 'hero', interactive = false }: { variant?: 'hero' | 'panel'; interactive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!interactive) return
    const layer = ref.current
    const container = layer?.parentElement
    if (!layer || !container) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia?.('(hover: none)').matches) return

    let frame = 0
    const apply = (x: number, y: number) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        container.style.setProperty('--px', x.toFixed(3))
        container.style.setProperty('--py', y.toFixed(3))
      })
    }
    const onMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      apply((event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5)
    }
    const reset = () => apply(0, 0)

    container.addEventListener('pointermove', onMove)
    container.addEventListener('pointerleave', reset)

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener('pointermove', onMove)
      container.removeEventListener('pointerleave', reset)
      container.style.removeProperty('--px')
      container.style.removeProperty('--py')
    }
  }, [interactive])

  const items = variant === 'panel' ? panelSparkles : heroSparkles

  return (
    <div className={`sparkles sparkles-${variant}`} ref={ref} aria-hidden="true">
      {items.map((sparkle, index) => (
        <svg
          key={index}
          className="sparkle"
          viewBox="0 0 24 24"
          style={
            {
              top: sparkle.top,
              left: sparkle.left,
              width: sparkle.size,
              height: sparkle.size,
              animationDelay: `${sparkle.delay}s`,
              '--depth': sparkle.depth,
            } as CSSProperties
          }
        >
          <path d={starPath} />
        </svg>
      ))}
    </div>
  )
}
