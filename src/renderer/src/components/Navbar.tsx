function Navbar(): JSX.Element {
  return (
    <main className="text-slate-600 border-b bg-gray-200 text-xs flex justify-between">
      <section className="opacity-80"></section>
      <section className="flex justify-between gap-2">
        <div>转码</div>
        <div>配置</div>
      </section>
    </main>
  )
}

export default Navbar
