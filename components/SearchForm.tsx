"use client";

import { useRouter } from "next/navigation";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";

export const SearchFormSchema = z.object({
  zSearchText: z.string().min(3),
});

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SearchFormSchema>>({
    resolver: zodResolver(SearchFormSchema),
    mode: "onChange",
    defaultValues: {
      zSearchText: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof SearchFormSchema>> = (
    data,
    e,
  ) => {
    e?.preventDefault();

    if (!searchText) return;
    console.log(data);

    router.push(`/events/${searchText}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w-[580px]">
        <input
          className="ring-accent/50 h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none transition focus:bg-white/10 focus:ring-2"
          placeholder="Search events in any city..."
          spellCheck={false}
          {...register("zSearchText", {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(e.target.value);
            },
          })}
        />
        {errors.zSearchText && (
          <span className="text-red-500">{errors.zSearchText.message}</span>
        )}
        <br />
        <button type="submit">Add to List</button>
      </form>
    </>
  );
}
