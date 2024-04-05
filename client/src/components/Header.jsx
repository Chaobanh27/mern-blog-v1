/* eslint-disable no-console */
import { Button, Navbar, TextInput, Dropdown, Avatar } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice'
import { toggleTheme } from '../redux/theme/themeSlice'
import { useEffect, useState } from 'react'

const Header = () => {
  const path = useLocation().pathname
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const { currentUser } = useSelector(state => state.user)
  const { theme } = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParam.get('searchTerm')
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParam = new URLSearchParams(location.search)
    urlParam.set('searchTerm', searchTerm)
    const searchQuery = urlParam.toString()
    navigate(`/search?${searchQuery}`)
  }

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST'
      })
      const data = await res.json()
      if (!res.ok) {
        console.log(data.message)
      } else {
        navigate('/sign-in')
        dispatch(signoutSuccess())
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Navbar className='border-b-2'>
        <Link
          to='/'
          className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
        >
          <span className='px-2 py-1 bg-gradient-to-r bg-blue-500 rounded-lg text-white'>
          ChaoBanh
          </span>
        Blog
        </Link>
        <form onSubmit={handleSubmit} >
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button
            className='w-12 h-10 hidden sm:inline'
            color='gray'
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt='user' img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className='block text-sm'>@{currentUser.username}</span>
                <span className='block text-sm font-medium truncate'>
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to='/sign-in'>
              <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header