import { useState } from "react";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

const accordionData = [
  {
    id: 1,
    title: 'Getting Started with JavaScript',
    content: 'Learn the basics of JavaScript, including variables, data types, and basic control flow. Dive into the fundamentals of programming and start building simple applications.'
  },
  {
    id: 2,
    title: 'Web Development with HTML and CSS',
    content: 'Explore the world of web development by mastering HTML and CSS. Understand how to structure web pages and style them to create visually appealing and responsive designs.'
  },
  {
    id: 3,
    title: 'Building Dynamic Websites with Node.js',
    content: 'Take your web development skills to the next level with Node.js. Learn how to build dynamic and scalable web applications using JavaScript on both the client and server sides.'
  },
  {
    id: 4,
    title: 'Database Design and Management with MongoDB',
    content: 'Delve into the world of databases by learning MongoDB. Understand the principles of NoSQL databases and how to design, query, and manage data efficiently.'
  },
  {
    id: 5,
    title: 'Frontend Frameworks: React.js',
    content: 'Master the popular frontend library React.js. Build interactive and dynamic user interfaces with reusable components, state management, and the power of virtual DOM.'
  },

];


export default function Accordian() {

  const [expandedId, setExpandedId] = useState<number | null>(null);




  const handleExpand = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));

  }



  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      {accordionData.map((data: AccordionItem) => {
        return <>
          <div key={data.id} style={{ width: '500px' }}>
            <div style={{ cursor: 'pointer', borderBottom: '1px solid black' }} onClick={() => handleExpand(data.id)}>
              <h3>{data.title}</h3>
            </div>

            <p>{expandedId === data.id && data.content}</p>
          </div>

        </>
      })}
    </div>
  )
}