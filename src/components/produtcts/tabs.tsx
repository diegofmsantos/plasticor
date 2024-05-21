import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getNoteFem, getNoteKids, getNoteMasc } from "@/services/product"
import { Notebook } from "@/types/Notebook"
import Image from "next/image"

type Tab = {
    title: string,
    value: string,
    products: Notebook[]
}

export const NotebookTabs = async () => {

    const [noteMasc, noteFem, noteKids] =
        await Promise.all([getNoteMasc(), getNoteFem(), getNoteKids()])


    const tabs: Tab[] = [
        {
            title: 'MASCULINO',
            value: 'masculino',
            products: noteMasc.map(item => item)
        },
        {
            title: 'FEMININO',
            value: 'feminino',
            products: noteFem.map(item => item)
        },
        {
            title: 'KIDS',
            value: 'kids',
            products: noteKids.map(item => item)
        }

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
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 p-4">
                {tabs[0].products.map(item => (
                    <TabsContent value="masculino" className="mt-6">
                        <div key={item.id} className="flex justify-center items-center flex-col gap-2 p-4">
                            <div className="w-52 h-60">
                                <Image src={`/assets/linhas-masculinas/${item.linha}/${item.url}`} width={150} height={150} alt="Image" className="w-full h-full"/>
                            </div>
                            <div className="w-40 h-8 text-center">{item.name}</div>
                        </div>
                    </TabsContent>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 p-4">
                {tabs[1].products.map(item => (
                    <TabsContent value="feminino" className="mt-6">
                        <div key={item.id} className="flex justify-center items-center flex-col gap-2 p-4">
                            <div className="w-52 h-60">
                                <Image src={`/assets/linhas-femininas/${item.linha}/${item.url}`} width={150} height={150} alt="Image" className="w-full h-full"/>
                            </div>
                            <div className="w-40 h-8 text-center">{item.name}</div>
                        </div>
                    </TabsContent>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 p-4">
                {tabs[2].products.map(item => (
                    <TabsContent value="kids" className="mt-6">
                        <div key={item.id} className="flex justify-center items-center flex-col gap-2 p-4">
                            <div className="w-52 h-60">
                                <Image src={`/assets/linhas-kids/${item.linha}/${item.url}`} width={150} height={150} alt="Image" className="w-full h-full"/>
                            </div>
                            <div className="w-40 h-8 text-center">{item.name}</div>
                        </div>
                    </TabsContent>
                ))}
            </div>

        </Tabs>
    )
}