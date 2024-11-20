import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MegaMenu from "../../components/MegaMenu";
import ProductsCard from "../../components/ProductsCard";
import FilterSidebar from "./FilterSidebar";

const ProductFilter = () => {
    return (
        <>
        <header>
        <Header/> 
        </header>
        <nav>
            <MegaMenu/>
        </nav>    
        <main className="w-5/6 mx-auto">
            <div className="container flex items-start gap-10">
                <div className="flex-none w-80 sidebar">
                    <FilterSidebar/>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 products">
                    <div className="grid grid-cols-3 gap-4">
                        <ProductsCard/>                        
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default ProductFilter;