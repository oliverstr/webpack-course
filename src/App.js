import React, { useState } from 'react';
const Warning = React.lazy(() => import('./Warning'));

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello World</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            {count > 5 && (
                <React.Suspense fallback={null}>
                    <Warning />
                </React.Suspense>
            )}
        </div>
    )
}

export default App;