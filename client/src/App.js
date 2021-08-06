import React from 'react'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'

const user = "blehbleh"
const posts = [
  {title:"React Hooks", content:"The greatest thing since sliced bread", author:"blehbleh"},
  {title:"React Moops", content:"The worst thing since sliced bread",author:"blehbleah"}
]

export default function App () {
  return (
    <div style={{ padding: 8 }}>
      <UserBar />
      <br />
      <CreatePost user={user} />
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}