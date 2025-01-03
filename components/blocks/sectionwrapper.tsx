import React from "react";

export default async function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="px-4 font-inter">{children}</section>;
}
