import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NotebookSkeleton } from "@/components/produtcts/skeleton";
import { NotebookTabs } from "@/components/produtcts/tabs";
import { Suspense } from "react";


const Page = () => {

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <div className="mx-3">
        <Suspense fallback={<NotebookSkeleton />}>
          <NotebookTabs />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default Page;