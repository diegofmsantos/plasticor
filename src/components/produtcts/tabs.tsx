import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getNoteFem, getNoteInfant, getNoteMasc } from "@/services/product"
import { Notebook } from "@/types/Notebook"
import { ProductItem } from "@/components/produtcts/item"

type Tab = {
    title: string, value: string, products: Notebook[]
}

export const NotebookTabs = async () => {

    const [noteMasc, noteFem, noteInfant] =
        await Promise.all([getNoteMasc(), getNoteFem(), getNoteInfant()])

    const tabs: Tab[] = [
        { title: 'MASCULINO', value: 'masculino', products: noteMasc.map(item => item) },
        { title: 'FEMININO', value: 'feminino', products: noteFem.map(item => item) },
        { title: 'REDUZIDO', value: 'reduzido', products: noteInfant.map(item => item) },
        { title: 'INFANTIL', value: 'infantil', products: noteInfant.map(item => item) }
    ]

    return (
        <Tabs defaultValue="masculino">
            <TabsList className="flex">
                {tabs.map(item => (
                    <TabsTrigger key={item.value} value={item.value} className="flex-1">
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="my-8">
                {tabs.map(item => (
                    <TabsContent key={item.value} value={item.value}>
                        {item.products.length > 0 &&
                            <div className="flex flex-wrap justify-around items-center gap-14 px-8">
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

/*
  */