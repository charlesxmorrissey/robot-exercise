import React, { useContext } from 'react'

import { AppContext } from 'components/AppProvider'
import RobotCard from 'components/Robots/Card'
import RobotAddModal from 'components/Robots/AddModal'
import { useModal } from 'hooks'

import { ReactComponent as AddIcon } from 'assets/svg/add.svg'

import styles from './List.module.css'

const RobotsList = () => {
  const { state } = useContext(AppContext)
  const { Modal: AddRobotModal, hideModal: hideRobotModal, showModal: showRobotModal } = useModal()

  const { robots } = state

  return (
    <>
      <div className={styles.robotsListWrapper}>
        {!!robots.length ? (
          <div className={styles.robotsListContainer}>
            {robots.map(({ Icon, attack, defense, id, name }, index) => (
              <RobotCard Icon={Icon} attack={attack} defense={defense} id={id} key={`robot-${index}`} name={name} />
            ))}
          </div>
        ) : (
          <p>No robots have been added to your collection. Click the plus button to add.</p>
        )}
      </div>

      <button className={styles.robotsListAddButton} onClick={showRobotModal} type='button'>
        <AddIcon className={styles.robotsListAddButtonIcon} />
      </button>

      <AddRobotModal ModalContent={<RobotAddModal hideModal={hideRobotModal} />} />
    </>
  )
}

export default RobotsList
