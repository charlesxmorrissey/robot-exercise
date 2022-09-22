import { useEffect } from 'react'

export const useActOnClickOutside = (action, ref, condition = true) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target) && condition) {
      action()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  })
}
