import { notFound } from "next/navigation";
import { EVENTS } from "@/data/events";
import EventSingleClient from "./EventSingleClient";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = EVENTS.find((e) => e.slug === slug);
  if (!event) return notFound();

  return <EventSingleClient event={event} />;
}
