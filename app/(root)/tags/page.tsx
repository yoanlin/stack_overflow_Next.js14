import TagCard from "@/components/cards/TagCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tags.action";
import { SearchParamsProps } from "@/types";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllTags({ searchQuery: searchParams.q });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>
      <div className="mt-11 flex gap-5 justify-between max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/tags"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by tag name..."
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] w-[170px] focus:ring-1 focus:ring-black light-border-2 max-sm:w-full"
        />
      </div>
      <section className="flex flex-wrap gap-4 mt-12">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              href={`/tags/${tag._id}`}
              key={tag._id}
              className="shadow-light100_darknone"
            >
              <article className="background-light900_dark200 w-full flex light-border flex-col rouned-2xl border px-8 py-10 sm:w-[260px]">
                <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
                  <p className="paragraph-semibold text-dark300_light900">
                    {tag.name}
                  </p>
                </div>
                <p className="small-medium text-dark400_light500 mt-3.5">
                  <span className="body-semibold primary-text-gradient mr-2.5">
                    {tag.questions.length} +
                  </span>
                  Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="No Tags Found"
            description="It looks like there are not tags found."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </div>
  );
};

export default page;
