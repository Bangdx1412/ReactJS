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
// 3. Cleanup function luôn được gọi trước khi callback được gọi(trừ lần mounted đầu)

const lessons = [
  { id: 1, name: "React JS" },
  { id: 2, name: "SPA/MPA la gi?" },
  { id: 3, name: "Arrouw function" },
];
function Content() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
