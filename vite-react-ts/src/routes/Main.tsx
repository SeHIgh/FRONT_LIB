import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="w-full h-full p-8 flex flex-col justify-start items-center gap-4 overflow-y-auto">
      <h1>FRONT LIBRARY</h1>
      <p>By SeHIgh</p>
      <div
        className="p-2 flex flex-col justify-start items-center gap-4"
      >
        {/* tailwindcss 테스트 목록 으로 ... */}
        <Link to="/tailwindLib">
          <button>tailwindcss Library</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
