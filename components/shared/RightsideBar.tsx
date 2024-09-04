import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopPopularTags } from "@/lib/actions/tags.action";

const RightsideBar = async () => {
  const hotQuestions = await getHotQuestions();

  const popularTags = await getTopPopularTags();

  return (
    <section className="top-0 right-0 w-[350px] h-screen background-light900_dark200 mt-[100px] pt-16 px-6 pb-[50px] max-xl:hidden light-border border-l sticky flex flex-col shadow-light-300 dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className="flex flex-col w-full body-medium mt-7 gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              className="flex items-center flex-row justify-between gap-7"
              href={`/question/${question._id}`}
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
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightsideBar;
