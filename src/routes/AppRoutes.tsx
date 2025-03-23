import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Resume from '../pages/Resume';
import LinkedIn from '../pages/LinkedIn';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="resume" element={<Resume />} />
      <Route path="linkedin" element={<LinkedIn />} />
    </Route>
  </Routes>
);

export default AppRoutes;
