"use client";

import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";

export default function Home() {
  const {
    data: books,
    error,
    isLoading,
  } = useFetch({
    url: "http://localhost:1337/api/books",
  });

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error ...</div>;

  return (
    <>
      lol
    </>
  );
}
