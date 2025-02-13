import { useEffect, useState } from "react";

// Side effects

// Events: Add / removve event listener
//  Obsever pattern: Subscribe/ unsubscribe
//  Closure
//  Timers: setInterval, setTimeout, clearInterval, clearTimeout
//  useState
//  Mounted/ unmounted
// ===
// Call API

/**
 1. Update Dom
 -F8 blog title
 2. Call API
 3. Listen DOM Events
  - Scroll
  - Resize
 4. Cleanup
 - Remove listener / Unsuubscribe
 - Clear timer 
 */

// 1. useEffect(callback)
// -Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào Dom
// 2. useEffect(callback,[])
// - Chỉ gọi callback 1 lần sau khi component được mounted
// 3. useEffect(callback,[dependency ])

// ----------------------

// 1. Callback luôn được gọi Sau khi component mounted

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
