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

function Content() {
  const [countdown, setcountdown] = useState(180);
  useEffect(() => {
    setInterval(() => {
      setcountdown((prevDown) => prevDown - 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}

export default Content;
