"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import { Button } from "../ui/button";
import page from "@/app/(root)/(home)/page";

interface Props {
  pageNumber: number;
  isNext: boolean;
}

const Pagination = ({ pageNumber, isNext }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleNavigation = (direction: string) => {
    const nextPageNumber =
      direction === "prev" ? pageNumber - 1 : pageNumber + 1;
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value: nextPageNumber.toString(),
    });
    router.push(newUrl, { scroll: true });
  };

  if (!isNext && pageNumber === 1) return null;
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        disabled={pageNumber === 1}
        onClick={() => {
          handleNavigation("prev");
        }}
        className="gap-2 btn min-h-[36px]  background-light800_dark400  border light-border-2 shadow shadow-light100_darknone"
      >
        <span className="body-medium text-dark200_light800">Prev</span>
      </Button>
      <div className="bg-primary-500 flex justify-center items-center px-3.5 py-2 rounded-md">
        <p className="body-semibold text-light-900">{pageNumber}</p>
      </div>
      <Button
        disabled={!isNext}
        onClick={() => {
          handleNavigation("next");
        }}
        className="gap-2 btn min-h-[36px]  background-light800_dark400  border light-border-2 shadow shadow-light100_darknone"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
