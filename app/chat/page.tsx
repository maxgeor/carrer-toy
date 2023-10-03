import { ArrowUpIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function Chat() {
  return (
    <main className="text-lg flex flex-col gap-4 justify-between min-h-screen max-w-2xl w-full mx-auto p-12">
      <div className="flex flex-col gap-4">
        <div className="rounded-full px-5 py-3 bg-[#4f72ff] text-white self-start">
          Why?
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input className="rounded-full px-5 py-3 bg-gray-200/75 w-full" />
        <button className="flex items-center justify-center rounded-full p-3 text-white bg-[#4f72ff] w-fit">
          <PaperAirplaneIcon className="-rotate-90 h-6 w-6 -translate-y-px" />
        </button>
      </div>
    </main>
  );
}
