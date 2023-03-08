import { useEffect, useMemo, useState } from "react"

function useMouseMove() {
  const [mousePostion, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  })

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event
      setMousePosition({ clientX, clientY })
    })
  }, [mousePostion])
  return useMemo(() => mousePostion, [mousePostion])
}

export default useMouseMove
