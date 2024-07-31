import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import theme from "./theme/theme"
import Navbar from "./components/navbar/Navbar"
import Truck from "./components/truck/Truck"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Box sx={{ display: 'flex' }}>
                      <Navbar />
                      <Truck />
                    </Box>
                } />
                <Route path="/*" element={
                    <Box sx={{ display: 'flex' }} >

                        <Navbar />

                        <Box sx={{
                            flexGrow: 1, backgroundSize: 'auto'
                        }}>
                            <Routes>
                                <Route path="/truck" element={
                                    < Truck />
                                } />
                            </Routes>
                        </Box>
                    </Box>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App