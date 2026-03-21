import React from "react"

interface RetroSliderProps {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
  label: string
}

const KNOB_ROTATION_RANGE = 270
const KNOB_ROTATION_OFFSET = -135

export default function RetroSlider({
  min,
  max,
  value,
  onChange,
  label,
}: RetroSliderProps) {
  const normalizedRotation =
    ((value - min) / (max - min)) * KNOB_ROTATION_RANGE + KNOB_ROTATION_OFFSET

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="knob-indicator"
        style={{ transform: `rotate(${normalizedRotation}deg)` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="retro-slider w-24"
      />
      <span
        className="text-gray-400 text-center leading-tight"
        style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: "7px",
        }}
      >
        {label}
      </span>
    </div>
  )
}
