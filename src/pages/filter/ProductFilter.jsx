import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MegaMenu from "../../components/MegaMenu";
import Pagination from "../../components/Pagination";
import ProductsCard from "../../components/ProductsCard";
import ProductSlider from "../../components/ProductSlider";
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
                <div className="flex flex-col items-center justify-center flex-1 products ">
                    <div className="grid grid-cols-3 gap-8">
                        <ProductsCard/>                 
                        <ProductsCard/>                 
                        <ProductsCard/>                 
                        <ProductsCard/>                 
                        <ProductsCard/>                 
                        <ProductsCard/>                 
                        <ProductsCard/>                 
                    </div>
                    <div className="my-10 pagination">
                        <Pagination/>
                    </div>
                </div>
            </div>
        </main>
        <section className="w-5/6 mx-auto my-9">
            <div className="my-10 header">
                <h2 className="my-5 text-4xl font-bold text-center">Featured Collection</h2>
                <p className="text-center">There are many variations of passages</p>
            </div>
            <ProductSlider/>
        </section>
        <Footer/>
        </>
    );
};

export default ProductFilter;