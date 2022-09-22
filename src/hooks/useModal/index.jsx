import React, { useCallback } from 'react'

import { Modal } from 'components/Modal'

import { useActOnKeyPress, useDisableBodyScroll, useToggleVisibility } from 'hooks'

export const useModal = ({ isClosableOnClickOutside = false, isDismissable = true, onDismiss, variant } = {}) => {
  const { hide, isVisible, show } = useToggleVisibility()

  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss()
    }

    hide()
  }, [hide, onDismiss])

  useDisableBodyScroll(isVisible)
  useActOnKeyPress(handleDismiss, 'Escape', isDismissable ? isVisible : isDismissable)

  const ModalComponent = (props) => (
    <>
      {isVisible && (
        <Modal
          ModalContent={props.ModalContent}
          hideModal={handleDismiss}
          isClosableOnClickOutside={isClosableOnClickOutside}
          isDismissable={isDismissable}
          title={props.title}
        />
      )}
    </>
  )

  return {
    Modal: ModalComponent,
    hideModal: handleDismiss,
    modalIsVisible: isVisible,
    showModal: show,
  }
}
