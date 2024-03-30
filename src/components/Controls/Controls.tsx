interface IControls {
  isTimerActive: boolean
  setIsTimerActive: (value: boolean) => void
}

const Controls: React.FC<IControls> = ({ isTimerActive, setIsTimerActive }) => {
  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Stop
      </button>
    </div>
  )
}

export default Controls
