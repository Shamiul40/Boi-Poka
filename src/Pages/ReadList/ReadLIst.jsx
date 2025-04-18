import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../Utility/AddtoDb";
import Book from "../Book/Book";

const ReadLIst = () => {
  const [readlist, setReadlist] = useState([]);
  const [sort, setSort] = useState("")
  console.log(readlist)
  const data = useLoaderData();

  useEffect(() => {
    const storeBookData = getStoreBook();
    const convertedStoreBookData = storeBookData.map((id) => parseInt(id));
    const myReadlist = data.filter((book) =>
      convertedStoreBookData.includes(book.bookId)
    );
    setReadlist(myReadlist);
  }, []);


  const handleSort=(type)=>{
    setSort(type)
    if(type === "pages") {
      const sortedByPages = [...readlist].sort((a,b)=>a.totalPages-b.totalPages)
      setReadlist(sortedByPages);
      
    }

    if(type==="ratings") {
      const sortedByRatings = [...readlist].sort((a,b)=>a.rating -b.rating)
      setReadlist(sortedByRatings);
      console.log(sortedByRatings)
    }


  }

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort By : {sort ? sort : "" }</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>My read List book is : {readlist.length}</h2>

          {readlist.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadLIst;
