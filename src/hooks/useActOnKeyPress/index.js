import { useCallback, useEffect } from 'react'

export const useActOnKeyPress = (action, targetKey, condition) => {
  const upHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) {
        action()
      }
    },
    [action, targetKey]
  )

  useEffect(() => {
    if (condition) {
      window.addEventListener('keyup', upHandler)

      return () => {
        window.removeEventListener('keyup', upHandler)
      }
    }

    return
  }, [condition, upHandler])
}
