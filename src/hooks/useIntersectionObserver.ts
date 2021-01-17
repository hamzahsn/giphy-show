import { useRef, useCallback } from 'react'

export function useIntersectionObserver(
  callback: (isVisible: boolean) => void,
  dependencies: React.DependencyList
): (node: any) => void {
  const observer = useRef<IntersectionObserver | null>(null)
  return useCallback(node => {
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting)
    })
    if (node) observer.current.observe(node)
  }, dependencies)
}
