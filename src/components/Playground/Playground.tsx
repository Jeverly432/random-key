import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

import { setCurrentStep } from "../../store/reducers/playgroundSlice/slices"
import { ITERVAL_TIME } from "./const"

import { Controls } from "../Controls"

const Playground: React.FC = () => {
  const state = useAppSelector((state) => state.playground)
  const dispatch = useAppDispatch()
  const refreshInterval = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshInterval.current = setInterval(() => {
        dispatch(setCurrentStep())
      }, ITERVAL_TIME)
    } else {
      clearInterval(refreshInterval.current as ReturnType<typeof setInterval>)
    }

    return () => {
      clearInterval(refreshInterval.current as ReturnType<typeof setInterval>)
    }
  }, [isTimerActive, dispatch])

  return (
    <div>
      {state.currentStep}
      <Controls
        setIsTimerActive={setIsTimerActive}
        isTimerActive={isTimerActive}
      />
    </div>
  )
}

export default Playground
