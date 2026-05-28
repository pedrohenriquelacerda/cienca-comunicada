import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlatformLayout, PublicLayout } from './components/Layout'

// Screens
import LandingPage from './screens/LandingPage'
import Dashboard from './screens/Dashboard'
import Modulos from './screens/Modulos'
import PainelAluna from './screens/PainelAluna'
import Hubs from './screens/Hubs'
import Infraestrutura from './screens/Infraestrutura'

function App() {
    return (
        <BrowserRouter basename="/cienca-comunicada">
            <Routes>
                <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />

                {/* Platform Routes */}
                <Route path="/app" element={<PlatformLayout><Dashboard /></PlatformLayout>} />
                <Route path="/app/modulos" element={<PlatformLayout><Modulos /></PlatformLayout>} />
                <Route path="/app/painel" element={<PlatformLayout><PainelAluna /></PlatformLayout>} />
                <Route path="/app/hubs" element={<PlatformLayout><Hubs /></PlatformLayout>} />
                <Route path="/app/infraestrutura" element={<PlatformLayout><Infraestrutura /></PlatformLayout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
