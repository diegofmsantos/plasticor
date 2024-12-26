import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getNoteList } from "@/services/product"
import { Notebook } from "@/types/Notebook"
import { ProductItem } from "@/components/produtcts/item"

type Tab = {
    title: string
    value: string
    products: Notebook[]
}

export const NotebookTabs = async () => {

    const [noteList] =
        await Promise.all([getNoteList()])

    const tabs: Tab[] = [
        { title: 'MASCULINO', value: 'masculino', products: noteList.filter(item => item.modelo === 'masculino') },
        { title: 'FEMININO', value: 'feminino', products: noteList.filter(item => item.modelo === 'feminino') },
        { title: 'BASIC', value: 'basic', products: noteList.filter(item => item.modelo === 'basic') },
        { title: 'INFANTIL', value: 'infantil', products: noteList.filter(item => item.modelo === 'infantil') }
    ]

    return (
        <Tabs defaultValue="masculino">
            <TabsList className="mt-4 flex gap-3 w-full fixed z-50 pr-5 min-[375px]:gap-1">
                {tabs.map(item => (
                    <TabsTrigger key={item.value} value={item.value} className="flex-1 font-bold rounded-xl">
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="my-8 pt-28">
                {tabs.map(item => (
                    <TabsContent key={item.value} value={item.value}>
                        {item.products.length > 0 &&
                            <div className="flex flex-wrap justify-center m-auto items-center gap-14 px-8">
                                {item.products.map(product => (
                                    <ProductItem key={product.id} item={product} />
                                ))}
                            </div>
                        }
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}