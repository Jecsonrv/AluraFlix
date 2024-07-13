const { default: Footer } = require("Components/Footer");
const { default: Header } = require("Components/Header");
const { Outlet } = require("react-router-dom");

function PaginaBase(){
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default PaginaBase