import React, { useContext } from 'react'

import { AppContext } from 'components/AppProvider'
import RobotCard from 'components/Robots/Card'
import { robotsLibrary } from 'constant'
import { addAction } from 'reducer'

import styles from './AddModal.module.css'

const RobotAddModal = ({ hideModal }) => {
  const { dispatch, state } = useContext(AppContext)

  const availableRobots = robotsLibrary.filter(
    (robot) => !state.robots.find((rm) => rm.name === robot.name && robot.id === rm.id)
  )

  const handleClickAddRobot = (data) => {
    dispatch(addAction(data))
    hideModal()
  }

  return (
    <div className={styles.robotAddModalWrapper}>
      {!!availableRobots.length ? (
        <div className={styles.robotAddModalContainer}>
          {availableRobots.map(({ Icon, attack, defense, id, name }, index) => (
            <RobotCard
              Icon={Icon}
              attack={attack}
              defense={defense}
              onClick={() => handleClickAddRobot({ Icon, attack, defense, id, name })}
              key={`robot-${index}`}
              name={name}
              variant='small'
            />
          ))}
        </div>
      ) : (
        <p className={styles.robotAddModalNoResults}>You've collected all of the robots.</p>
      )}
    </div>
  )
}

export default RobotAddModal
