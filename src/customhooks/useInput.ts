/**********************
 * Hook for storing a users input value as a UseState *
 **********************/
// Referenced from: https://qnrjs42.blog/react/typescript-useinput-hooks
import { useState, useCallback, ChangeEvent } from 'react'
type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void
const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue)
  const handler = useCallback((e: any) => {
    setValue(e.target.value)
  }, [])
  return [value, handler, setValue] as [string, onChangeType, typeof setValue]
}
export default useInput
