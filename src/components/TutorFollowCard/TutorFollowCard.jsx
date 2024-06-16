import React from "react";

const TutorFollowCard = ({ avatar, name, username }) => {
  return (
    <div className="rounded-lg bg-slate-100 flex items-center p-2 gap-3 w-60 cursor-pointer">
      <img src={avatar} width={50} height={50} className="rounded-lg" alt="" />
      <div>
        <p className="font-bold">{name}</p>
        <p>@{username}</p>
      </div>
      <div className="ml-auto rounded-full bg-white w-7 h-7 flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-plus"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </div>
    </div>
  );
};

export default TutorFollowCard;
