'use client'

import { useEffect, useRef } from 'react'

export default function VideoPlayer({
  src,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  width,
  className = '',
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.defaultMuted = muted
    video.muted = muted

    if (autoPlay) {
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Otomatik oynatma engellendi:', error)
        })
      }
    }
  }, [src, autoPlay, muted])

  return (
    <div
      className={className}
      style={width ? { maxWidth: `${width}px`, width: '100%', margin: '0 auto' } : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        className="w-full h-full object-cover"
      >
        Tarayiciniz video formatini desteklemiyor.
      </video>
    </div>
  )
}
