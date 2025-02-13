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
  - Scroll (Sự kiện cuộn trang)
  - Resize (Sự kiện thay đổi kích thước màn hình)
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
//  - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// ----------------------

// 1. Callback luôn được gọi Sau khi component mounted
// 2. Cleanup function sẽ được gọi trước khi component bị unmounted

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        // Hien nut button
        setShowButton(true);
      } else {
        // An nut button
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    console.log("add");

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("remove");
    };
  }, []);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={type === tab ? { color: "fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {showButton && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;
