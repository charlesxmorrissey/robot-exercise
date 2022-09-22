import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import { useActOnClickOutside } from 'hooks'
import { getPortalRootElement } from 'utils'

import { ReactComponent as CloseIcon } from 'assets/svg/close.svg'
import styles from './Modal.module.css'

export const Modal: React = ({
  hideModal,
  isClosableOnClickOutside = true,
  isDismissable = true,
  ModalContent,
  title = '',
}) => {
  const portalRootElement = getPortalRootElement()
  const modalRef = useRef(null)

  useActOnClickOutside(hideModal, modalRef, isDismissable && isClosableOnClickOutside)

  if (!portalRootElement) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalOverlay} />
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer} ref={modalRef}>
          {isDismissable && (
            <button className={styles.modalCloseButton} onClick={hideModal}>
              <CloseIcon aria-label='close' className={styles.modalCloseButtonIcon} />
            </button>
          )}

          {title && (
            <div className={styles.modalTitleContainer}>
              <h2>{title}</h2>
            </div>
          )}

          <div className={styles.modalContentContainer}>{ModalContent}</div>
        </div>
      </div>
    </>,
    portalRootElement
  )
}
