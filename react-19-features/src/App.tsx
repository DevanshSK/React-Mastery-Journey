import ActionIntro from "./components/actions/ActionIntro"
import ContextIntro from "./components/contexts/ContextIntro"
import ActionStateIntro from "./components/use-action-state/ActionStateIntro"
import UseFormStatusDemo from "./components/use-form-status/UseFormStatusDemo"
import UseTransitionIntro from "./components/use-transition-hook/UseTransitionIntro"
import UseIntro from "./components/use/UseIntro"

const App = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      {/* Data Fetching by use hook. */}
      <div className="hidden">
        <UseIntro />
      </div>

      {/* Context with React 19 */}
      <div className="hidden">
        <ContextIntro />
      </div>

      {/* Actions in React 19 */}
      <div className="hidden">
        <ActionIntro />
      </div>

      {/* useFormStatus hook */}
      <div className="hidden">
        <UseFormStatusDemo />
      </div>

      {/* useActionState demo */}
      <div className="hidden">
        <ActionStateIntro />
      </div>

      {/* useTransition hook demo */}
      <UseTransitionIntro />

    </div>
  )
}

export default App