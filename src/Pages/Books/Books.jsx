import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks]= useState([])

  console.log(data);
  /**
   * !data load by useEffect
   */
  // useEffect(()=>{
  //   fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
  //     .then(res=>res.json())
  //     .then(data=>{
  //       console.log(data)
  //     })
  // },[])

  /**
   * !Data load by usePromise
   */
  // const dataPromise = fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json").then(res=>res.json())

  return (
    <div className="w-10/12 mx-auto ">
      <h1 className="text-center text-5xl">Books</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
