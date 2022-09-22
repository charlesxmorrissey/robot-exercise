import { useEffect } from 'react'

export const useDisableBodyScroll = (isOpen) => {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflowY = 'unset'
    }
  }, [isOpen])
}
