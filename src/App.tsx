import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipProvider } from './components/ui/TooltipProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
     <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />
          <Route path="*" element={<NotFound   />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  )
}

export default App
