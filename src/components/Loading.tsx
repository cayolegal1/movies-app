export function Loading() {
  return (
    <div className="flex flex-col">
        <div className="h-10 flex justify-center items-center">
            <div style={{ width: `${30}px`, height: `${30}px` }} className="animate-spin">
                <div className="h-full w-full border-4 rounded-[50%] border-t-purple-500 border-b-purple-700 "></div>
            </div>
        </div>
        <h2 className="ml-5 mt-1">Loading movies...</h2>
    </div>
  )
}
