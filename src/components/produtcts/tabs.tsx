import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getNoteFem, getNoteKids, getNoteMasc } from "@/services/product"
import { Notebook } from "@/types/Notebook"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

type Tab = {
    title: string,
    value: string,
    products: Notebook[]
}

export const NotebookTabs = async () => {

    const [noteMasc, noteFem, noteKids] =
        await Promise.all([getNoteMasc(), getNoteFem(), getNoteKids()])


    const tabs: Tab[] = [
        { title: 'MASCULINO', value: 'masculino', products: noteMasc.map(item => item) },
        { title: 'FEMININO', value: 'feminino', products: noteFem.map(item => item) },
        { title: 'KIDS', value: 'kids', products: noteKids.map(item => item) }
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {noteMasc.map(item => (
                    <TabsContent value="masculino" className="m-auto">
                        <Carousel key={item.id} className="w-56 h-60 my-8">
                            <CarouselContent className="w-[250px]">
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-masculinas/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-masculinas/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-masculinas/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-masculinas/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="w-14 border border-black" />
                            <CarouselNext className="w-14 border border-black" />
                        </Carousel>
                    </TabsContent>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {noteFem.map(item => (
                    <TabsContent value="feminino" className="m-auto">
                        <Carousel key={item.id} className="w-56 my-8 flex justify-center items-center flex-col gap-2">
                            <CarouselContent className="w-[200px]">
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-femininas/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-femininas/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-femininas/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-femininas/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="w-14 border border-black" />
                            <CarouselNext className="w-14 border border-black" />
                        </Carousel>

                    </TabsContent>
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {noteKids.map(item => (
                    <TabsContent value="kids" className="m-auto">
                        <Carousel key={item.id} className="w-56 my-8 flex justify-center items-center flex-col gap-2">
                            <CarouselContent className="w-[250px]">
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-kids/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-kids/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-kids/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-52 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linhas-kids/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="w-14 border border-black" />
                            <CarouselNext className="w-14 border border-black" />
                        </Carousel>

                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}