// libs
import { Routes, Route} from 'react-router-dom';
import { DefaultLayout } from './layouts/default-layout';

//pages
import { Home } from './pages/home';
import { ArticlesList } from './pages/articles-list';

export function Router(){
  
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles-list" element={<ArticlesList />} />
      </Route>
    </Routes>
  );
}