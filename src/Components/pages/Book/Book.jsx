import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({book}) => {
    const { bookId, image, author, bookName, rating, category, tags,totalPages } = book;
    
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border border-gray-300 p-4 h-[450px]">
                <figure className=" bg-[#1313130d] py-6 rounded-xl">
                    <img src={image} alt="Book Cover" className="h-[200px]" />
                </figure>
                <div className="">
                    <div className="flex items-center gap-2 mt-2">
                        {tags.map((tag) => (
                            <div className="px-2 rounded-full bg-[#23be0a0d] text-[#23BE0A]">{tag}</div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <h2 className="card-title font-serif mt-2">{bookName}</h2>
                    </div>
                    <p className="text-gray-500">By : {author}</p>
                    <div className="px-2 rounded-full bg-[#23be0a0d] text-[#23BE0A] w-[40px]">{totalPages}</div>
                    <div className="border-t-2 border-dashed border-gray-300 w-full my-2"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 ">{category}</span>
                        <span className="text-gray-400 mr-2 flex items-center">
                            {rating}{" "}
                            <span className="ml-1 text-gray-600">
                                <FaStarHalfAlt />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
