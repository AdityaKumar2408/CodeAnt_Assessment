
import * as React from "react"

const THRESHOLD = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${THRESHOLD - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < THRESHOLD)
    }
    setIsMobile(window.innerWidth < THRESHOLD)

    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
