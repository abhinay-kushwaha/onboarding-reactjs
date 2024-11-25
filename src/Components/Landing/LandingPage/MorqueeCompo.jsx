import React from 'react';
import Marquee from 'react-fast-marquee';

// Utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Review data
const reviews = [
  {
    name: "Abhinay",
    username: "@abhinay",
            
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat. ",
    img: "https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2023/02/14001322/Effective-Lead-Management-Process.png",
  },
  {
    name: "Ajeet",
    username: "@ajeet",
            
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat. ",
    img: "https://www.activecampaign.com/wp-content/uploads/2022/11/8-Step-Lead-Management-Process-1889x1080.png",
  },
  {
    name: "Kajal",
    username: "@kajal",
            
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat. ",
    img: "https://blog.thomasnet.com/hs-fs/hubfs/lead-generation.jpeg?width=691&height=418&name=lead-generation.jpeg",
  },
  {
    name: "Pooja",
    username: "@pooja",
            
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat. ",
    img: "https://trackobit.com/wp-content/uploads/Steps-in-the-Lead-Management-Process.png",
  },
  {
    name: "Sejal",
    username: "@sejal",
            
    body: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat.",
    img: "https://trackobit.com/wp-content/uploads/Steps-in-the-Lead-Management-Process.png",
  },
  {
    name: "Shivangi",
    username: "@shivangi",
            
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, repellat. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTTk8yRbKKDfijlCwSp0TDDA9uq5_diGJLQ&s",
  },
];

// ReviewCard component
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-72 shadow-md m-2  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="border-md w-52 h-28 bg-cover object-cover"  alt="" src={img} />
        <div className="flex flex-col">
          <div className="text-sm font-medium  text-black">
            {name} 
          </div>
          <p className="text-xs font-medium  text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-wrap">{body}</blockquote>
    </figure>
  );
};

const MorqueeCompo = () => {
  return (
    <div className=''>
      <div className="relative flex h-52 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MorqueeCompo;

