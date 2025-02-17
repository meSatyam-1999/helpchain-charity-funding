import { Button } from 'antd';

import './App.css'
import ThemeProvider from './providers/themeProvider';

function App() {
  

  return (
    <ThemeProvider>
      <div>
     
     <h1 className="text-3xl font-bold underline bg-red-500 text-black">
     Hello Satyam - The founder of @HelpChain
  </h1>
  <Button type="primary">Primary Button</Button>
    </div>
    </ThemeProvider>
  )
}

export default App
