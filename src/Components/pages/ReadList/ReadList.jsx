import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from '../../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [short, setShort] = useState("")
    const [readlist, setReadList] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [])

    const handleShort = (short) => {
        setShort(short)
        if(short === "pages"){
            const shortedByPage = [...readlist].short((a, b) => a.totalPages - b.totalPages);
            setReadList(shortedByPage)
        }
        if (short === "ratings"){
            const sortedByRatings = [...readlist].short((a, b) => a.rating - b.rating);
            setReadList(sortedByRatings)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Short By: {short? short:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <a onClick={() => handleShort("pages")}>Pages Number</a>
                    </li>
                    <li>
                        <a onClick={() => handleShort("ratings")}>Ratings</a>
                    </li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>My wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read {readlist.length}</h2>
                    {readlist.map((b) => (
                        <Book key={b.bookID} book={b}></Book>
                    ))}
                </TabPanel>
                <TabPanel>
                    <h2>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
