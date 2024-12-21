import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '@/app/routes/home.tsx'
import Header from '@/components/header.tsx'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>{' '}
            </BrowserRouter>
        </>
    )
}

export default App
