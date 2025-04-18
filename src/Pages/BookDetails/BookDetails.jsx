import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDb } from "../../Utility/AddtoDb";

import { ToastContainer, toast } from 'react-toastify';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
  const { id } = useParams();
  const Id = parseInt(id);
  const data = useLoaderData();

  const SingleBook = data.find((book) => book.bookId === Id);
  

  const { bookName, image, author,category } = SingleBook;

  const handleMarkAsRead =(id)=>{
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    })

    toast("Wow so easy!")



      addToStoreDb(id)
  }

  return (
    <div className="flex justify-center gap-8 items-center bg-gray-600 w-5/12 mx-auto my-10 p-10 rounded-lg">
      <div>
        <img className="w-70" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-2xl">{bookName}</h1>
        <h3>{author}</h3>
        <p>{category}</p>
        <button onClick={()=>handleMarkAsRead(id)} className="btn m-2">Mark as Read</button>
        <button className="btn m-2">Wishlist</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
