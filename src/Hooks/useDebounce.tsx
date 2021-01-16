import { useState, useEffect } from 'react'

const useDebounce = (value: any, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(()=> {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debouncedValue
}

export default useDebounce;