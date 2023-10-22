export default function Chat() {
  return (
    <main className="font-serif  flex flex-col gap-4 justify-between min-h-screen max-w-2xl w-full mx-auto p-12">
      <div className="flex flex-col gap-4">
        <div className="self-start">Why?</div>
      </div>
      <form className="flex items-center gap-4">
        <input className="p-2 bg-gray-200/75 w-full" />
        <button className="flex items-center justify-center h-9 w-9 text-white bg-black"></button>
      </form>
    </main>
  );
}
