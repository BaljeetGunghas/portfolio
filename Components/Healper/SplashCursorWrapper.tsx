'use client'

import dynamic from 'next/dynamic'

const SplashCursor = dynamic(() => import('./ScrollFloat'), {
  ssr: false,
})

export default function SplashCursorWrapper() {
  return <SplashCursor />
}
