"use client";

export default function GeometricBgPattern() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* === LEFT SIDE: Triangles pointing RIGHT === */}
      <div className="absolute left-0 top-1/2 -translate-y-1/3 transform origin-center scale-150 md:scale-200">
        <svg
          width="150"
          height="500"
          viewBox="0 0 160 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A5F3FC" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </linearGradient>
            <linearGradient id="grad2" x1="10%" y1="0%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="grad3" x1="20%" y1="10%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#014B70" />
            </linearGradient>
          </defs>

          {/* Layer 1: Lightest – high, wide, irregular */}
          <path d="M10 0 L110 80 L20 160 Z" fill="url(#grad1)" opacity="0.6" />

          {/* Layer 2: Medium-light – shifted left, stretched */}
          <path d="M-15 70 L95 150 L15 240 Z" fill="url(#grad2)" opacity="0.7" />

          {/* Layer 3: Medium-dark */}
          <path d="M-10 130 L90 200 L10 290 Z" fill="url(#grad3)" opacity="0.75" />

          {/* Layer 4: Darkest – grounded */}
          <path d="M-20 180 L80 240 L0 360 Z" fill="url(#grad3)" opacity="0.8" />
        </svg>
      </div>

      {/* === RIGHT SIDE: Mirrored version pointing LEFT === */}
      <div className="absolute right-0 top-1/2 -translate-y-1/3 transform origin-center scale-150 md:scale-200">
        <svg
          width="150"
          height="500"
          viewBox="0 0 160 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A5F3FC" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </linearGradient>
            <linearGradient id="grad2" x1="10%" y1="0%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="grad3" x1="20%" y1="10%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#014B70" />
            </linearGradient>
          </defs>

          {/* Group to flip horizontally: mirror across Y-axis */}
          <g transform="translate(160, 0) scale(-1, 1)">
            {/* Layer 1: Lightest */}
            <path d="M10 0 L110 80 L20 160 Z" fill="url(#grad1)" opacity="0.6" />

            {/* Layer 2: Medium-light */}
            <path d="M-15 70 L95 150 L15 240 Z" fill="url(#grad2)" opacity="0.7" />

            {/* Layer 3: Medium-dark */}
            <path d="M-10 130 L90 200 L10 290 Z" fill="url(#grad3)" opacity="0.75" />

            {/* Layer 4: Darkest */}
            <path d="M-20 180 L80 240 L0 360 Z" fill="url(#grad3)" opacity="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}