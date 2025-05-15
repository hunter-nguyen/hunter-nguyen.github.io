import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import LinkedIn from './pages/LinkedIn';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="linkedin" element={<LinkedIn />} />
      </Route>
    </Routes>
  );
}

export default App;
