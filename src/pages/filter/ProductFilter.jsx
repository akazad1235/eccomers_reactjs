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
        <main className="w-4/6 mx-auto">
            <div className="my-10 new-arrivals">
                <div className="flex ">
                    <div className="flex-1 info">
                        <h2 className="text-4xl font-bold">New Arrivals</h2>
                        <p className="my-4">Rem laudantium unde et debitis illo qui repellendus quibusdam aut animi galisum non impedit recusandae a nihil quos et facilis officia? Et repellendus ullam aut sint illum At placeat repudiandae cum eligendi reprehenderit sed error dolore. Aut adipisci eaque aut magnam doloremque eum tempora magni ad veniam ratione et rerum quasi. </p>
                        <div className="mt-20 button">
                            <button className="p-4 text-white bg-secondary">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex-1 img">
                        <img className="w-96 float-end" src="https://new-99.myshopify.com/cdn/shop/collections/bol-removebg-preview_270x.png?v=1667903970" alt="" />
                    </div>
                </div>
            </div>
            <div className="container flex items-start gap-10">
                <div className="flex-none w-80 sidebar">
                    <FilterSidebar/>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 products">
                    <div className="flex items-center w-full py-3 header">
                        <div className="flex-1 select">
                            <select name="" id="" className="p-3 ">
                                <option value="">best selling</option>
                                <option value="">date, new to old</option>
                                <option value="">price, hight to low</option>
                                <option value="">price, low to high</option>
                            </select>
                        </div>
                        <div className="flex-1 ">
                            <p className="text-end">Showing 1 - 15 of 27 result</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
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