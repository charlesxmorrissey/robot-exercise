import classNames from 'classnames'

import RobotRemoveConfirmationModal from 'components/Robots/RemoveConfirmationModal'
import { useModal } from 'hooks'

import { ReactComponent as RemoveIcon } from 'assets/svg/remove.svg'

import styles from './Card.module.css'

const RobotCard = ({ Icon, attack, defense, id, onClick = null, name, variant = null }) => {
  const {
    Modal: RemoveRobotConfirmationModal,
    hideModal: hideRobotConfirmationModal,
    showModal: showRobotConfirmationModal,
  } = useModal()

  return (
    <div
      className={classNames(styles.robotCard, {
        [styles.robotCardSmall]: variant,
      })}
      onClick={onClick}
    >
      <div className={styles.robotCardIconWrapper}>
        <Icon className={styles.robotCardIcon} />
      </div>

      <div className={styles.robotCardMetaWrapper}>
        <h2 className={styles.robotCardMetaTitle}>{name}</h2>

        {!onClick && (
          <>
            <button className={styles.robotCardRemoveButton} onClick={showRobotConfirmationModal} type='button'>
              <div className={styles.robotCardRemoveButtonContent}>
                <RemoveIcon className={styles.robotCardRemoveButtonIcon} />
              </div>
            </button>

            <RemoveRobotConfirmationModal
              ModalContent={<RobotRemoveConfirmationModal hideModal={hideRobotConfirmationModal} id={id} name={name} />}
            />
          </>
        )}

        <ul className={styles.robotCardMetaInfo}>
          <li className={styles.robotCardMetaInfoItem}>
            <span className={styles.robotCardMetaInfoLabel}>Attack:</span> {attack}
          </li>

          <li className={styles.robotCardMetaInfoItem}>
            <span className={styles.robotCardMetaInfoLabel}>Defense:</span> {defense}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RobotCard
