import { Navigate, Route, Routes } from "react-router-dom"
import { VerticalNavbar } from "../ui/components/VerticalNavbar"
import { HomePage } from "../bukin/pages/HomePage"
import { BookPage } from "../bukin/pages/BookPage"
import { MobileNavbar } from "../ui/components/MobileNavbar"
import { Test1 } from "../bukin/pages/Test1"
import { Test2 } from "../bukin/pages/Test2"

export const AppRouter = () => {
    return (
        <>
            <MobileNavbar />

            <div className="container">
                <Routes>
                    <Route path="inicio" element={<HomePage />} />
                    <Route path="reservar" element={<BookPage />} />
                    <Route path="test1" element={<Test1 />} />
                    <Route path="test2" element={<Test2 />} />


                    <Route path="/" element={<Navigate to="/inicio" />} />
                    <Route path="/*" element={<Navigate to="/inicio" />} />
                </Routes>
            </div>
        </>
    )
}