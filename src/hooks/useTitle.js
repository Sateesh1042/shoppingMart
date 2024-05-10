import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} |Shopping Mart`
  },[title])
  return (
    null
  )
}

export default useTitle
