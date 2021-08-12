import React, { useState, useReducer } from 'react'
import PostList from './post/PostList'
import CreatePost from './post/CreatePost'
import UserBar from './user/UserBar'
import appReducer from './reducers'

const defaultPosts = [
  { title: "React Hooks", content: "The greatest thing since sliced bread", author: "blehbleh" },
  { title: "React Moops", content: "The worst thing since sliced bread", author: "blehbleah" }
]

export default function App() {
  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: defaultPosts })
  const { user, posts } = state

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}