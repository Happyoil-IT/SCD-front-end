import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import theme from "./theme/theme"
import Dashboard from "./components/dashboard/Dashboard"
import Navbar from "./components/navbar/Navbar"
import Customers from "./components/customer/Customers"
import Product from "./components/product/Product"
import Truck from "./components/truck/Truck"
import Seller from "./components/seller/Seller"
import Restpoint from "./components/respoint/Restpoint"
import Order from "./components/order/Order"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Box sx={{ display: 'flex' }}>
                      <Navbar />
                      <Dashboard />
                    </Box>
                } />
                <Route path="/*" element={
                    <Box sx={{ display: 'flex' }} >

                        <Navbar />

                        <Box sx={{
                            flexGrow: 1, backgroundSize: 'auto'
                        }}>
                            <Routes>
                                <Route path="/order" element={
                                    < Order />
                                } />
                                <Route path="/customers" element={
                                    < Customers />
                                } />
                                <Route path="/product" element={
                                    < Product />
                                } />
                                <Route path="/truck" element={
                                    < Truck />
                                } />
                                <Route path="/seller" element={
                                    < Seller />
                                } />
                                <Route path="/respoint" element={
                                    < Restpoint />
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