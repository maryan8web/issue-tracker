"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount < 2) {
    return null;
  }

  const changePage = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
        className="hover:cursor-pointer disabled:cursor-not-allowed"
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="hover:cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
        className="hover:cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronRightIcon />
      </Button>
      <Button
        variant="soft"
        color="gray"
        disabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
        className="hover:cursor-pointer disabled:cursor-not-allowed"
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
