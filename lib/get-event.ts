// eslint-disable-next-line camelcase
import { unstable_cache } from "next/cache";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
