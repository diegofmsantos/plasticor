import { Skeleton } from "@/components/ui/skeleton"

export const NotebookSkeleton = () => {

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-20 p-4">
                {Array.from({ length: 12 }, (item, index) => (
                    <div key={index} className="flex justify-center items-center flex-col gap-4 p-4">
                        <Skeleton className="w-52 h-60" />
                        <Skeleton className="w-40 h-8" />
                    </div>
                ))}
            </div>
        </div>
    )
}