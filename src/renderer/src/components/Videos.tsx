import { CloseOne } from '@icon-park/react'

function Videos(): JSX.Element {
  const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '6', '7', '8', '9', '10']
  return (
    <main className="mt-5 overflow-y-auto h-80">
      {list.map((item, index) => (
        <section
          className="bg-white px-3 py-1 rounded-lg mb-2 mx-3 text-xs text-slate-600 flex
          justify-between items-center "
          key={index}
        >
          {item}
          <div
            className="text-slate-500 opacity-50 hover:scale-125 duration-300 hover:text-red-500
            hover:opacity-90 hover:cursor-pointer"
          >
            <CloseOne size="12" theme="outline"></CloseOne>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Videos
