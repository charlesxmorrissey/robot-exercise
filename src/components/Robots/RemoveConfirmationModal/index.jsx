import React, { useContext } from 'react'

import { AppContext } from 'components/AppProvider'
import { deleteAction } from 'reducer'

import styles from './RemoveConfirmationModal.module.css'

const RobotRemoveConfirmationModal = ({ hideModal, id, name }) => {
  const { dispatch } = useContext(AppContext)

  const handleClickRemoveRobot = () => {
    dispatch(deleteAction({ id }))
    hideModal()
  }

  return (
    <div className={styles.robotRemoveModalWrapper}>
      <p className={styles.robotRemoveModalCopy}>
        Are you sure you want to remove <strong>{name}</strong> from your collection?
      </p>

      <div className={styles.robotRemoveModalActions}>
        <button className={styles.robotRemoveModalButton} onClick={handleClickRemoveRobot} type='button'>
          <div className={styles.robotRemoveModalButtonContent}>Remove</div>
        </button>

        <button className={styles.robotRemoveModalButton} onClick={hideModal} type='button'>
          <div className={styles.robotRemoveModalButtonContent}>Cancel</div>
        </button>
      </div>
    </div>
  )
}

export default RobotRemoveConfirmationModal
