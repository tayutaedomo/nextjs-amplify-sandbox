"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import { Post } from "../types"

interface ClientComponentProps {
  posts: Post[]
}

export default function ClientPosts({ posts }: ClientComponentProps) {
  const [displayedPosts, setDisplayedPosts] = useState(posts.slice(0, 5))

  const handleLoadMore = () => {
    setDisplayedPosts(posts.slice(0, displayedPosts.length + 5))
  }

  return (
    <div>
      <ul>
        {displayedPosts.map((post, index) => (
          <li key={post.id}>
            <h3>
              {index + 1}: {post.title}
            </h3>
          </li>
        ))}
      </ul>
      {displayedPosts.length < posts.length && (
        <Button onClick={handleLoadMore}>もっと見る</Button>
      )}
    </div>
  )
}
