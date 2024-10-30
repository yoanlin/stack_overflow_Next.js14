import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  jobId: string;
  companyIcon: string | null;
  jobTitle: string;
  jobLocation: string;
  jobDescription: string;
  jobType: string;
  jobPaidCurrency: string | null;
  jobDetailLink: string;
}

const JobCard = ({
  jobId,
  companyIcon,
  jobTitle,
  jobLocation,
  jobDescription,
  jobDetailLink,
  jobPaidCurrency,
  jobType,
}: Props) => {
  return (
    <div className="w-full h-fit background-light900_dark200 rounded-lg card-wrapper text-dark100_light900 p-8 min-w-[425px]">
      <div className="flex gap-5 items-start max-sm:flex-col">
        <Image
          src={companyIcon || "/assets/images/site-logo.svg"}
          alt="comany_icon"
          width={55}
          height={55}
          className="rounded-2xl flex-none"
        />
        <div className="flex flex-col">
          <div className="flex justify-between flex-wrap gap-3 max-sm:flex-col">
            <h3 className="base-bold">{jobTitle}</h3>
            <p className="background-light800_dark300 body-regular flex items-center w-fit py-0.5 px-4 rounded-2xl max-sm:self-end max-h-7 flex-none max-sm:order-first">
              {jobLocation}
            </p>
          </div>

          <p className="line-clamp-2 body-regular mt-2">{jobDescription}</p>

          <div className="flex justify-between mt-8 flex-wrap gap-8">
            <div className="flex gap-2">
              <Image
                src="/assets/icons/clock-2.svg"
                alt="clock"
                width={20}
                height={20}
              />
              <p className="body-regular text-slate-500">{jobType}</p>
              <Image
                src="/assets/icons/currency-dollar-circle.svg"
                alt="dollar-circle"
                width={20}
                height={20}
                className="ml-5"
              />
              <p className="body-regular text-slate-500">{jobPaidCurrency}</p>
            </div>

            <Link href={jobDetailLink} className="flex">
              <span className="text-primary-500 body-semibold">View job</span>
              <Image
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow sign"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
