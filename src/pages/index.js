import Layout from "@import/components/layout";
import Home from "@import/routes/home/home";
import { useState } from 'react';
const Page = () => {
  return (
    <>
      <Layout>
        <main className="bg-[#f4f5f7] dark:bg-[#101010] min-h-[calc(100vh-(4rem+5.313rem))] sm:min-h-[calc(100vh-(5rem+8.75rem))] mt-[4rem] pt-[1rem] pb-[2.5rem] sm:mt-[5rem] sm:pt-[2.5rem]">
          <Home/>
        </main>
      </Layout>
    </>
  )
}
export default Page;