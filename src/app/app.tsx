import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '@/app/routes/home.tsx'
import NotFound from '@/app/routes/not-found.tsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
