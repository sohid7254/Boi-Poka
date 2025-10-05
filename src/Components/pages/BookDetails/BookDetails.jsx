import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../../utility/addToDB';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import { ToastContainer, toast } from "react-toastify";
const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleData = data.find(book => book.bookId === bookId)
    console.log(singleData)
    const {image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = singleData
    const handleMarkAsRead = id => {
        addToStoreDB(id)
        toast.success("Added to Read List")
        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success",
        // });
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 my-10">
            <figure className=" bg-[#1313130d] flex items-center justify-center  rounded-xl">
                <img src={image} alt="Book Cover" className="w-[400px] rounded-lg" />
            </figure>
            <div>
                <p className="text-4xl font-bold">{bookName}</p>
                <p className="text-xl text-gray-500 my-2">By : {author}</p>
                <div className="border-t-2 border-dashed border-gray-300 w-full my-2"></div>
                <p className="text-xl font-semibold">{category}</p>
                <div className="border-t-2 border-dashed border-gray-300 w-full my-2"></div>
                <p className="text-2xl font-bold">
                    Review : <span className="text-xl text-gray-400 font-semibold">{review}</span>
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-semibold">Tag :</span>
                    {tags.map((tag) => (
                        <div className="px-2 rounded-full bg-[#23be0a0d] text-[#23BE0A]">{tag}</div>
                    ))}
                </div>
                <div className="border-t-2 border-dashed border-gray-300 w-full my-2"></div>
                <div class="">
                    <table class="table table-md w-[300px]">
                        <tbody>
                            <tr>
                                <td class="text-gray-600 border-none px-0 py-2">Number of Pages:</td>
                                <td class="font-bold border-none px-0 py-2 text-right">{totalPages}</td>
                            </tr>
                            <tr>
                                <td class="text-gray-600 border-none px-0 py-2">Publisher:</td>
                                <td class="font-bold border-none px-0 py-2 text-right">{publisher}</td>
                            </tr>
                            <tr>
                                <td class="text-gray-600 border-none px-0 py-2">Year of Publishing:</td>
                                <td class="font-bold border-none px-0 py-2 text-right">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td class="text-gray-600 border-none px-0 py-2">Rating:</td>
                                <td class="font-bold border-none px-0 py-2 text-right">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={()=>handleMarkAsRead(id)} className="btn mr-5 text-xl">Read</button>
                    <button className="btn text-xl hover:bg-sky-300">WhiteList</button>
                    
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;
