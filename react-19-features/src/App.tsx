import ContextIntro from "./components/contexts/ContextIntro"
import UseIntro from "./components/use/UseIntro"

const App = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      {/* Data Fetching by use hook. */}
      <UseIntro />

      {/* Context with React 19 */}
      <ContextIntro />

    </div>
  )
}

export default App