import { ThemeProvider } from '@/components/theme/theme-provider'
import './App.css'
import { NewOrderButton } from './components/NewOrderButton'
import { Orders } from './components/Orders'
import { ModeToggle } from './components/theme/mode-toggle'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>
      <main className="flex h-screen w-screen gap-10 p-5">
        <Orders />
        <NewOrderButton />
      </main>
    </ThemeProvider>
  )
}

export default App
