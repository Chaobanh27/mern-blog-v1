import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { Blockquote, Button } from 'flowbite-react'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts')
      const data = await res.json()
      setPosts(data.posts)
    }
    fetchPosts()
  }, [])
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to my Blog</h1>
        <Blockquote>
          Here you will find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </Blockquote>
        <Button
          as={Link}
          href="/search"
          className='w-80'
          gradientDuoTone='purpleToBlue'
          outline
        >
        View all posts
        </Button>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
