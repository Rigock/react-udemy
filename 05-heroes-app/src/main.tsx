import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Holaaaa Lufffyyyyy</h1>
    <Button>Rey Pirata</Button>
  </StrictMode>,
)
