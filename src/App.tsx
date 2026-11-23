import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(1)
    const isReset = count === 0

    function handleReset() {
        setCount(0)
    }

    function increaseCount(){
        setCount(count => count + step)
    }

    function decreaseCount() {
        setCount(count => count - step)
    }

    return (
        <main className="card">
            <div className="header">
                <h1 className="title">Counter</h1>
                <button type="button" className="reset" id="reset" aria-label="Reset count to zero"
                        onClick={handleReset} disabled={isReset}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 12a9 9 0 1 0 3-6.7"/>
                        <path d="M3 4v5h5"/>
                    </svg>
                </button>
            </div>

            <div className="stepper-wrap">
                <div className="pill" role="group" aria-label="Counter">
                    <button type="button" className="pill-btn" id="dec" aria-label="Decrease count" onClick={decreaseCount}>−</button>
                    <output className="count" id="count" aria-live="polite">{count}</output>
                    <button type="button" className="pill-btn" id="inc" aria-label="Increase count" onClick={increaseCount}>+</button>
                </div>
                <span className="hint">Each tap changes the count by <strong id="hintStep">{step}</strong></span>
            </div>

            <div className="step-section">
                <div className="step-head">
                    <label className="step-label" htmlFor="step">Step size</label>
                    <span className="step-value" id="stepValue">{step}</span>
                </div>
                <input className="slider" id="step" type="range" min="1" max="10" step="1" value={step}
                       onChange={(event) => setStep(event.currentTarget.valueAsNumber)}/>
                <div className="scale"><span>1</span><span>10</span></div>
            </div>
        </main>
    )
}

export default App
