import { Schema } from "mongoose";
import React from "react";

interface Props {
  tag: {
    name: string;
    description: string;
    questions: Schema.Types.ObjectId;
  };
}

const TagCard = ({ tag }: Props) => {
  return (
    <article className="background-light900_dark200 w-full flex light-border flex-col rouned-2xl border px-8 py-10 sm:w-[260px]">
      <div className="background-light800_dark300 mt-10 ">
        <p className="text-dark200_light900 base-bold px-7 py-2">{tag.name}</p>
      </div>
      <p></p>
    </article>
  );
};

export default TagCard;
