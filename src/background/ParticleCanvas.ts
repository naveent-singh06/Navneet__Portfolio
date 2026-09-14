export interface ParticleCanvasOptions {
  isTouch: boolean;
  reduceMotion: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  ph: number;
}

/**
 * The exact "live crystal network background" engine from the original
 * portfolio, extracted into a standalone class so it can be driven from a
 * React effect without changing its behaviour.
 */
export class ParticleCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private w = 0;
  private h = 0;
  private nodes: Node[] = [];
  private t = 0;
  private dpr = Math.min(window.devicePixelRatio || 1, 2);
  private count: number;
  private mx = -9999;
  private my = -9999;
  private mActive = false;
  private rafId = 0;
  private reduceMotion: boolean;

  private onMouseMove = (e: MouseEvent) => {
    const rect = this.canvas.getBoundingClientRect();
    this.mx = (e.clientX - rect.left) * this.dpr;
    this.my = (e.clientY - rect.top) * this.dpr;
    this.mActive = true;
  };
  private onMouseLeave = () => {
    this.mActive = false;
  };
  private onResize = () => this.init();

  constructor(canvas: HTMLCanvasElement, options: ParticleCanvasOptions) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.count = options.isTouch ? 60 : 240;
    this.reduceMotion = options.reduceMotion;
  }

  private theme() {
    const s = getComputedStyle(document.documentElement);
    return {
      line: s.getPropertyValue('--particle-line').trim() || '120,150,255',
      dot: s.getPropertyValue('--particle-dot').trim() || '180,200,255',
    };
  }

  private resize() {
    this.w = this.canvas.width = this.canvas.offsetWidth * this.dpr;
    this.h = this.canvas.height = this.canvas.offsetHeight * this.dpr;
  }

  private init() {
    this.resize();
    this.nodes = Array.from({ length: this.count }, () => ({
      x: Math.random() * this.w,
      y: Math.random() * this.h,
      vx: (Math.random() - 0.5) * 0.22 * this.dpr,
      vy: (Math.random() - 0.5) * 0.22 * this.dpr,
      r: (Math.random() * 1.5 + 0.5) * this.dpr,
      ph: Math.random() * Math.PI * 2,
    }));
  }

  private draw = () => {
    this.t += 0.012;
    const col = this.theme();
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
    const breathe = 0.85 + Math.sin(this.t * 0.6) * 0.15;

    this.nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > this.w) n.vx *= -1;
      if (n.y < 0 || n.y > this.h) n.vy *= -1;
      if (this.mActive) {
        const dx = n.x - this.mx,
          dy = n.y - this.my;
        const dist = Math.hypot(dx, dy);
        const rad = 140 * this.dpr;
        if (dist < rad && dist > 0.001) {
          const force = (1 - dist / rad) * 1.1;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
        }
      }
    });

    const maxD = 148 * this.dpr;
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i],
          b = this.nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < maxD) {
          ctx.strokeStyle = `rgba(${col.line},${(1 - d / maxD) * 0.26 * breathe})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    this.nodes.forEach((n) => {
      const glow = 0.4 + Math.sin(this.t * 1.4 + n.ph) * 0.25;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col.dot},${0.06 * breathe})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col.dot},${0.5 + glow * 0.3})`;
      ctx.fill();
    });

    if (!this.reduceMotion) this.rafId = requestAnimationFrame(this.draw);
  };

  start() {
    this.init();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseleave', this.onMouseLeave);
    this.draw();
    requestAnimationFrame(() => this.canvas.classList.add('ready'));
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseleave', this.onMouseLeave);
  }
}
