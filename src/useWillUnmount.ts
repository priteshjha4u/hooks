import useUpdatedRef from './useUpdatedRef'
import { useEffect } from 'react'

/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 */
export default function useWillUnmount(fn: () => void) {
  const onUnmount = useUpdatedRef(fn)

  useEffect(() => () => onUnmount.current(), [])
}
