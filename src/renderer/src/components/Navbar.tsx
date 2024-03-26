import { Link } from 'react-router-dom'

function Navbar(): JSX.Element {
  return (
    <main className="text-slate-600 border-b bg-gray-200 text-xs flex justify-between p-1">
      <section className="opacity-80"></section>
      <section className="flex justify-between gap-2">
        <Link to="/">转码</Link>
        <Link to="/config">配置</Link>
      </section>
    </main>
  )
}

export default Navbar
