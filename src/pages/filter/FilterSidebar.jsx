import { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FilterSidebar = () => {
    const [openAccordions, setOpenAccordions] = useState({1:true});

    const handleToggle = (id) => {
        setOpenAccordions((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the clicked accordion's state
        }));
    };
    console.log('accout', openAccordions);
    console.log('accout property get', openAccordions[1]);
    

    const Icon = ({ id }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${openAccordions[id] ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );

    return (
        <>
            <Accordion open={openAccordions[1]} icon={<Icon id={1} />}>
                <AccordionHeader onClick={() => handleToggle(1)}>
                    Brands
                </AccordionHeader>
                <AccordionBody>
                    <div className="overflow-y-auto list-none list max-h-60">
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>Samsung</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>Motorola</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={openAccordions[2]} icon={<Icon id={2} />}>
                <AccordionHeader onClick={() => handleToggle(2)}>
                    Categories
                </AccordionHeader>
                <AccordionBody>
                    <div className="overflow-y-auto list-none list max-h-60">
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>Samsung</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>Motorola</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>I-Phone</li>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={openAccordions[3]} icon={<Icon id={3} />}>
                <AccordionHeader onClick={() => handleToggle(3)}>
                    Availability
                </AccordionHeader>
                <AccordionBody>
                <div className="overflow-y-auto list-none list max-h-60">
                        <li className='p-3 cursor-pointer hover:text-secondary'>Is Stock(254)</li>
                        <li className='p-3 cursor-pointer hover:text-secondary'>Out of Stock(50)</li>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={openAccordions[4]} icon={<Icon id={4} />}>
                <AccordionHeader onClick={() => handleToggle(4)}>
                    Price
                </AccordionHeader>
                <AccordionBody>
                   <form action="" className='p-3'>
                        <div className='flex gap-2'>
                        <div className="flex flex-col flex-1 group">
                            <label className="mb-1 text-sm font-medium text-gray-700">From</label>
                            <input 
                                type="text" 
                                placeholder="form" 
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col flex-1 group">
                            <label className="mb-1 text-sm font-medium text-gray-700">To</label>
                            <input 
                                type="text" 
                                placeholder="form" 
                                className="w-full p-4 border border-gray-300 rounded-md w focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        </div>
                        <button className='p-3 mx-auto mt-3 text-center text-white float-end bg-secondary'>Filter</button>
                   </form>
                </AccordionBody>
            </Accordion>
        </>
    );
};

export default FilterSidebar;
