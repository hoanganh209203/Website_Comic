import React, { createContext, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import View from './layouts/View';
import spinnerAction from './action/spinner';
import DetailPage from './pages/DetailPage';
import NotFound from './components/NotFound';
import Admin from './layouts/Admin';
import AddComic from './pages/AddComic';
import ListComic from './pages/ListComic';
export const spinnerCT = createContext([(e: any) => {}]);
function App() {
  const [state, dispatch] = useReducer(spinnerAction, false);
  return (
    <spinnerCT.Provider value={[dispatch]}>
    <Routes>
      <Route path='/' element={<View/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path="comic/:id" element={<DetailPage/>} />
      <Route path='*' element={<NotFound/>}/>
      </Route>
      <Route path='admin' element={<Admin/>}>
      <Route path='add' element={<AddComic/>}/>
      <Route index element={<ListComic/>}/>
      </Route>
    </Routes>
    </spinnerCT.Provider>
  );
}

export default App;
