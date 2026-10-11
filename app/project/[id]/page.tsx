import { portfolioData } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    id: p.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailClient id={id} />;
}
