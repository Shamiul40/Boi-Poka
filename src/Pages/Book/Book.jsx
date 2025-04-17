import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  // console.log(book)
  /**
   * !use promise for data load
   */
  // const data = use(dataPromise)
  // console.log(data)

  const { bookId, bookName, author, image, tags, category, rating } = book;

  return (
    
      <Link to={`/bookdetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-lg border p-4 my-4">
        <figure className="bg-gray-600 p-6 mx-auto">
          <img className="w-40 h-60" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-start gap-20 ">
            {tags.map((tag, index) => (
              <h1 key={index} className="text-lg">
                {tag}
              </h1>
            ))}
          </div>
          <h2 className="card-title text-3xl">{bookName}</h2>
          <p className="text-lg">By : {author}</p>
          <hr className="border-1 border-dashed border-gray-600 my-2" />
          <div className="card-actions justify-between ">
            <h1 className="text-lg">{category}</h1>
            <h1 className="text-lg flex justify-center items-center gap-2">
              {rating}
              <FaStarHalfAlt />{" "}
            </h1>
          </div>
        </div>
      </div>
      </Link>
    
  );
};

export default Book;
