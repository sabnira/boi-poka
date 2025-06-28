import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);


    const { bookId: currentBookId, image, bookName, author, review, category, totalPages, publisher, yearOfPublishing, rating } = book;


    const HandleMarkAsRead = () => {
         
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12'>
            <div className='bg-gray-300 rounded-xl flex items-center'>
                <img className='md:h-screen mx-auto items-center' src={image} alt="" />
            </div>

            <div>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <h2>By: {author}</h2>
                <div className="divider"></div>
                <h3>{category}</h3>
                <div className="divider"></div>
                <h3><span className='font-bold'>Review: </span>{review}</h3>
                <div className="divider"></div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Number of Pages:</th>
                                <td>{totalPages}</td>
                            </tr>
                            <tr>
                                <th>Publisher:</th>
                                <td>{publisher}</td>
                            </tr>
                            <tr>
                                <th>Year of publishing:</th>
                                <td>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <th>Rating:</th>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="divider"></div>

                <button onClick={HandleMarkAsRead} className="btn btn-outline btn-accent mr-4">Mark as Read</button>
                <button className="btn btn-accent">Add to WishList</button>

            </div>
        </div>
    );
};

export default BookDetail;