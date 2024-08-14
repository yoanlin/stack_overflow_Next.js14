"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import RenderTag from "./RenderTag";

const RightsideBar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    { _id: 2, title: "Is it only me or the font is bolder than necessary?" },
    { _id: 3, title: "Redux Toolkit Not Updating State as Expected" },
    { _id: 4, title: "Async/Await Function Not Handling Errors Properly" },
    { _id: 5, title: "Can I get the course for free?" },
  ];

  const popularTags = [
    { _id: 1, name: "javascript", totalQuestions: 5 },
    { _id: 2, name: "react", totalQuestions: 8 },
    { _id: 3, name: "next", totalQuestions: 10 },
    { _id: 4, name: "vue", totalQuestions: 6 },
    { _id: 5, name: "redux", totalQuestions: 9 },
  ];
  return (
    <section className="top-0 right-0 w-[350px] h-screen background-light900_dark200 mt-[100px] pt-16 px-6 pb-[50px] max-xl:hidden light-border border-l sticky flex flex-col shadow-light-300 dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="flex flex-col w-full body-medium mt-7 gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              className="flex items-center flex-row justify-between gap-7"
              href={`/questions/${question._id}`}
              key={question._id}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right.svg"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightsideBar;
