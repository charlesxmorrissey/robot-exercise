import { useCallback, useState } from 'react'

export const useToggleVisibility = ({ initialVisibility = false } = {}) => {
  const [isVisible, setIsVisible] = useState(initialVisibility)
  const show = useCallback(() => {
    setIsVisible(true)
  }, [setIsVisible])
  const hide = () => setIsVisible(false)
  const toggle = () => setIsVisible(!isVisible)

  return { hide, isVisible, show, toggle }
}
