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
// 3. useEffect(callback,[deps])

// ----------------------

// 1. Callback luôn được gọi Sau khi component mounted

function Content() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}

export default Content;
