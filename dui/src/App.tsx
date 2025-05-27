
const App = () => {
  return (
    <div className='m-10'>
      <h1>Hello There</h1>

      <div className="flex gap-3 mt-5">
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="btn btn-soft btn-neutral">Neutral</button>
        <button className="btn btn-soft btn-primary">Primary</button>
        <button className="btn btn-soft btn-secondary btn-wide">Secondary</button>
        <button className="btn btn-soft btn-accent">Accent</button>
      </div>

      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
    </div>
  )
}

export default App