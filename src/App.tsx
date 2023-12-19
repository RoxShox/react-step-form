import React from "react"
import Main from "./screens/Main/Main"
import StepsForm from "./screens/StepsForm/StepsForm"
import { Route, Routes } from "react-router"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/form" element={<StepsForm />} />
			</Routes>
		</div>
	)
}

export default App
