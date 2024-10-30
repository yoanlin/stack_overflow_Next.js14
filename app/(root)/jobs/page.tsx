import JobCard from "@/components/cards/JobCard";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { JobFilters } from "@/constants/filters";
import React from "react";
import Filter from "@/components/shared/Filter";
import { getAllJobs } from "@/lib/actions/job.action";
import { SearchParamsProps } from "@/types";
import Pagination from "@/components/shared/Pagination";

const page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getAllJobs({
    query: searchParams.q,
    location: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });
  // const { data } = result;

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      <div className="mt-12 flex flex-1 gap-5 max-sm:flex-col">
        <LocalSearchbar
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Job Title, Company, or Keywords"
        />
        <Filter
          filters={JobFilters}
          containerClasses=""
          otherClasses="min-w-[210px] min-h-[56px] flex"
          isJob={true}
        />
      </div>

      {/* <div className="mt-10">
        <div className="flex flex-col w-full gap-10">
          {data.length > 0 ? (
            data.map((job: any) => (
              <JobCard
                key={job.job_id}
                jobId={job.job_id}
                companyIcon={job.employer_logo}
                jobTitle={job.job_title}
                jobLocation={`${job.job_city ? job.job_city + "," : ""} ${
                  job.job_country
                }`}
                jobDescription={job.job_description}
                jobType={job.job_employment_type}
                jobPaidCurrency={job.job_salary_currency || "Not disclosed"}
                jobDetailLink={job.job_apply_link}
              />
            ))
          ) : (
            <div className="flex justify-center">
              "Oops! We couldn't find any jobs at the moment. Please try again
              later"
            </div>
          )}
        </div>
      </div>
      {data.length > 0 && (
        <div className="mt-10">
          <Pagination
            pageNumber={searchParams.page ? +searchParams.page : 1}
            isNext={true}
          />
        </div>
      )} */}
    </div>
  );
};

export default page;
