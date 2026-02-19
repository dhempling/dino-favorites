import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Comic Sans MS, cursive' }}>
      <h1 style={{ color: 'blue', fontSize: '50px' }}>My Super Cool Favorites!</h1>
      <ul style={{ listStyle: 'none', fontSize: '30px', margin: '40px 0' }}>
        <li>🍦 Ice cream</li>
        <li>🦖 Dinosaurs</li>
        <li>🌳 Playing outside</li>
        <li>🎮 Video games</li>
      </ul>
      <p style={{ fontSize: '24px' }}>Add more later when you're bigger! 🚀</p>
    </div>
  );
}
