import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {bookId, image, bookName, author, tags, category, rating } = book;

    return (
        <Link to={`/books/${bookId}`}>
        <div className="card bg-base-300 w-96 shadow-xl p-6">
            <figure className='bg-gray-300 py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt="book" />
            </figure>
            <div className="card-body space-y-3">

                <div className='flex justify-center gap-4'>
                    {
                        tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-800">{tag}</button>)
                    }
                </div>

                <h2 className="card-title">
                    {bookName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed text-gray-500"></div>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    
                    <div className='flex gap-2'>
                        <div>{rating}</div>
                        <div className="rating rating-sm">
                            <div className="mask mask-star bg-green-500"  aria-current="true" aria-label="1 star"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;