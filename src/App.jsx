import React from "react";
import "./App.css";

import Home from "./views/Home";
import ContactMe from "./views/ContactMe";
import NotFound from "./views/NotFound";
import Books from "./views/Books";

import NewBook from "./components/NewBook";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path=':id' element={<Home />}></Route>
				</Route>
				<Route path='/books'>
					<Route index element={<Books />} />
					<Route path=':id' element={<Books />} />
					<Route path='new' element={<NewBook />} />
				</Route>
				<Route path='/contact-me' element={<ContactMe />} />
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
