import React, { useState } from 'react'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const defaultPosts = [
  {title:"React Hooks", content:"The greatest thing since sliced bread", author:"blehbleh"},
  {title:"React Moops", content:"The worst thing since sliced bread",author:"blehbleah"}
]

export default function App () {
  const [ user, setUser ] = useState('')
  const [ posts, setPosts ] = useState(defaultPosts)

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}