import { Header } from "@/components/composed/header";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <>
      <Header />
      <h1>My Page</h1>
    </>
  );
}
