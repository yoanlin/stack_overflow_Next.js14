import Answer from "@/components/forms/Answer";
import AllAnswers from "@/components/shared/AllAnswers";
import Metric from "@/components/shared/Metric";
import ParseHTML from "@/components/shared/ParseHTML";
import RenderTag from "@/components/shared/RenderTag";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params, searchParams }: any) => {
  const result = await getQuestionById({ questionId: params._id });
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              alt="profile"
              width={22}
              height={22}
              className="rounded-full"
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Image
            src="/assets/icons/upvote.svg"
            alt="upvote"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <span className="small-regular background-light800_dark400 w-fit p-[2px]">
            {result.upvotes.length}
          </span>
          <Image
            src="/assets/icons/downvote.svg"
            alt="downvote"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <span className="small-regular background-light800_dark400 w-fit p-[2px]">
            {result.downvotes.length}
          </span>
          <Image
            src="/assets/icons/star-red.svg"
            alt="star"
            width={18}
            height={18}
          />
        </div>
      </div>
      <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
        {result.title}
      </h2>
      <div className="mt-5 mb-8 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clock"
          value={`asked ${getTimestamp(result.createdAt)}`}
          title=" Asked"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="like"
          value="Votes"
          title={``}
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatAndDivideNumber(result.answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="view"
          value={formatAndDivideNumber(result.views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
      <ParseHTML data={result.content} />
      <div className="flex flex-wrap gap-2 mt-8">
        {result.tags.map((tag: any) => (
          <RenderTag
            key={tag.id}
            _id={tag._id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
      <AllAnswers
        questionId={result._id}
        userId={JSON.stringify(mongoUser._id)}
        totalAnswers={result.answers.length}
      />
      <Answer
        question={result.content}
        questionId={JSON.stringify(result._id)}
        authorId={JSON.stringify(mongoUser._id)}
      />
    </>
  );
};

export default Page;
