import { useCallback, useEffect, useState } from "react"

function useScreenResize() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: 0,
    screenHeight: 0,
  })

  const handleResize = useCallback(() => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    })
  }, [screenSize])

  useEffect(() => {
    handleResize()
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [screenSize])

  return screenSize
}

export default useScreenResize
