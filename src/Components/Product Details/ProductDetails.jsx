import { LuDollarSign } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';




const ProductDetails = () => {


    const form = useRef();

    const modal = document.getElementById('my_modal_5');



    


    const handleOrder = e => {

        e.preventDefault();

        const orderForm = e.target;

        const name = orderForm.name.value;

        const number = orderForm.number.value;

        const address = orderForm.address.value;

        const color = orderForm.color.value;

        console.log(name, number, address, color);




        if (number > 11) {

            Swal.fire({

                icon: "error",

                title: "Oops...",

                text: "There is a Problem in Your Number. Please Check Your Number Carefully. ",

            });

            modal.close()

            return;

        }

        console.log(form.current);


        emailjs.sendForm('service_mbny68j', 'template_lbj1yll', form.current, '9LrSKpR3m9Okel3MG')

            .then((result) => {

                console.log(result.text);

            }, (error) => {

                console.log(error.text);

            });

            orderForm.reset();

    }



    return (
        <>
            <div className="mb-8">
                <div>
                    <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-12">PRODUCT DETAILS</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center md:justify-normal gap-5">
                    <div className="flex-1">
                        <div>
                            <img className="w-full rounded-lg max-h-[570px] " src="https://i.ibb.co/GJ6brwX/20240111-153544.png?fbclid=IwAR3RdYI2F_4LRE_VOrEs60QFk8iOCaxG9vu7MpYjEElxGh_nPbQhU5NKIsU" alt="Product Image" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 md:space-y-2 lg:space-y-8 w-full">
                        <div className=" py-4 bg-base-300 px-6 rounded-md">
                            <h1 className=" text-xl lg:text-2xl xl:text-3xl font-semibold ">Luxury Diamond Checker Bag</h1>
                        </div>
                        <p className="text-[14px] md:text-[14px] lg:text-[16px] leading-6 md:leading-7 lg:leading-8 ">একটি স্টাইলিশ ও ফ্যাশনেবল ব্যাগ, যা আপনাকে করে তুলবে  অনন্য এবং অসাধারণ!</p>
                        <div className="flex items-center gap-4">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F5C332]" checked />
                            </div>
                            <div>(257 Reviews)</div>
                        </div>
                        <div className="flex items-center gap-3 font-bold xl:text-lg flex-wrap">
                            <IoColorPaletteOutline></IoColorPaletteOutline>
                            <h1>COLORS :</h1>
                            <form className="flex items-center gap-3 ">
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <span className="label-text">BLACK</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-[#F5C332]" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <span className="label-text">WHITE</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-[#F5C332]" checked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <span className="label-text">BLACK & WHITE</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-[#F5C332] " checked />
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center gap-3 font-bold lg:text-lg">
                            <LuDollarSign></LuDollarSign>
                            <h1>PRICE :</h1>
                            <span>1390 <span className="text-yellow-500">TAKA</span></span>
                        </div>
                        <div className="flex items-center justify-center md:justify-normal gap-5">
                            <button className=" text-[12px] md:text-[14px] lg:text-[16px] font-semibold px-6 py-4 bg-[#F5C332] rounded-md flex items-center gap-3 text-black hover:py-3.5 hover:bg-transparent hover:border-[#F5C332] hover:border-2 hover:text-[#F5C332]  duration-300 " onClick={() => document.getElementById('my_modal_5').showModal()}> BUY NOW <AiOutlineShoppingCart className=" text-lg md:text-xl"></AiOutlineShoppingCart></button>
                            <button className=" text-[12px] md:text-[14px] lg:text-[16px] font-semibold px-6 py-3.5 border-2 border-[#F5C332] rounded-md flex items-center gap-3 hover:bg-[#F5C332] hover:text-black text-[#F5C332]  duration-500 " disabled>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 text-sm xl:text-base">
                        <li className="flex justify-between  py-4 border-y">
                            <b>BODY</b>
                            <span>Premium Quality PU Leather</span>
                        </li>
                        <li className="flex justify-between py-4 border-b">
                            <b>MATERIAL ORIGIN </b>
                            <span>China</span>
                        </li>
                        <li className="flex justify-between py-4 border-b">
                            <b>LINING</b>
                            <span> Leather</span>
                        </li>
                        <li className="flex justify-between py-4 border-b">
                            <b>SIZE</b>
                            <span>25*18 CM</span>
                        </li>
                        <li className="flex justify-between gap-6 py-4 border-b">
                            <b>POCKET </b>
                            <span>Three Inner Pockets with Two Metal Chain Pockets.</span>
                        </li>
                        <li className="flex justify-between py-4 border-b">
                            <b>BELT</b>
                            <span>Adjustable High Quality Long Belt.</span>
                        </li>
                        <li className="flex justify-between py-4 border-b">
                            <b>LOCK </b>
                            <span> Alloy Plating Metal Push Lock</span>
                        </li>
                        <li className="flex justify-between py-4 border-b">
                            <b>PRICE </b>
                            <span> 1390 TAKA</span>
                        </li>
                    </ul>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form ref={form} onSubmit={handleOrder}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Your Phone Number" name="number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">E-mail</span>
                                </label>
                                <input type="email" placeholder="Your E-mail" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Your Home Address" name="address" className="input input-bordered" required />
                            </div>
                            <div className="flex items-center gap-1 font-bold xl:text-lg my-6">
                                <IoColorPaletteOutline></IoColorPaletteOutline> :
                                <div className="flex items-center gap-2 ">
                                    <div className="form-control">
                                        <label className="label cursor-pointer gap-0 md:gap-3">
                                            <span className="label-text">BLACK</span>
                                            <input type="radio" name="color" className="radio checked:bg-[#F5C332]" value="black" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer gap-2">
                                            <span className="label-text">WHITE</span>
                                            <input type="radio" name="color" className="radio checked:bg-[#F5C332]" value="white" checked />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer gap-2">
                                            <span className="label-text">BLACK & WHITE</span>
                                            <input type="radio" name="color" className="radio checked:bg-[#F5C332]" value="black & white" checked />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-8">
                                <button className=" text-[12px] md:text-[14px] lg:text-[16px] font-semibold px-6 py-4 bg-[#F5C332] rounded-md flex items-center gap-3 text-black hover:py-3.5 hover:bg-transparent hover:border-[#F5C332] hover:border-2 hover:text-[#F5C332]  duration-300 " onClick={() => document.getElementById('my_modal_5').showModal()}> BUY NOW <AiOutlineShoppingCart className=" text-lg md:text-xl"></AiOutlineShoppingCart></button>

                                <div className="modal-action mt-0">
                                    <form method="dialog">
                                        <button className=" text-[12px] md:text-[14px] lg:text-[16px] font-semibold px-6 py-3.5 border-2 border-[#F5C332] rounded-md flex items-center gap-3 hover:bg-[#F5C332] hover:text-black text-[#F5C332]  duration-500 ">CLOSE</button>
                                    </form>
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
};


export default ProductDetails;