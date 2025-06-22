export default function Terminal({ children }) {
  return (
    <div className=" flex items-center justify-center bg-black ">
      <div
        id="main-section"
        className="relative w-screen h-screen overflow-auto [&::-webkit-scrollbar]:w-3  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500  rounded-lg shadow-lg bg-gradient-to-r from-[#1e1e2f] via-[#232336] to-[#2c2c4a] border-b border-[#3e3e5c]"
      >
        <div className="w-full bg-[#424040] rounded-t-lg">
          <div className="absolute flex space-x-2 px-2 pt-1">
            <span className="rounded-full bg-red-500 w-3 h-3 cursor-pointer"></span>
            <span className="rounded-full bg-yellow-400 w-3 h-3 cursor-pointer"></span>
            <span className="rounded-full bg-green-500 w-3 h-3 cursor-pointer"></span>
          </div>
          <div className="text-end items-end justify-items-end font-mono text-[#9c9c9c] px-2">
            <a href="https://github.com/Mansiverma30/codeNest" target="_blank">
              codeNest.js
            </a>
          </div>
        </div>
        <div className="p-4 font-mono text-white">{children}</div>
      </div>
    </div>
  );
}
