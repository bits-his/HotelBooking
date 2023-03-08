import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import AppNavigation from './Routes/AppNavigation'
import { init } from './redux/actions/authActions'
function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const initUser = useCallback(() => {
    dispatch(
      init(
        () => {
          navigate(`${location.pathname}${location.search}`)
        },
        () => {
          navigate('')
        },
      ),
    )
  }, [])

  useEffect(() => {
    initUser()
  }, [initUser])
  return (
    <div>
      <AppNavigation />
    </div>
  )
}

export default App
