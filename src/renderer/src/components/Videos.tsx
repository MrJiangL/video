function Videos(): JSX.Element {
  const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '6', '7', '8', '9', '10']
  return (
    <main className="mt-5 overflow-y-auto h-80">
      {list.map((item, index) => (
        <section
          className="bg-white px-3 py-1 rounded-lg mb-2 mx-3 text-xs text-slate-600"
          key={index}
        >
          {item}
        </section>
      ))}
    </main>
  )
}

export default Videos
