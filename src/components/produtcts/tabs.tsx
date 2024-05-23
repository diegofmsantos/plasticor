import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getNoteFem, getNoteInfant, getNoteMasc } from "@/services/product"
import { Notebook } from "@/types/Notebook"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Modal } from "../modal"

type Tab = { title: string, value: string, products: Notebook[] }

export const NotebookTabs = async () => {

    const [noteMasc, noteFem, noteInfant] =
        await Promise.all([getNoteMasc(), getNoteFem(), getNoteInfant()])

    const tabs: Tab[] = [
        { title: 'MASCULINO', value: 'masculino', products: noteMasc.map(item => item) },
        { title: 'FEMININO', value: 'feminino', products: noteFem.map(item => item) },
        { title: 'INFANTIL', value: 'infantil', products: noteInfant.map(item => item) }
    ]

    return (
        <Tabs defaultValue="masculino">
            <TabsList className="flex mb-8">
                {tabs.map(item => (
                    <TabsTrigger key={item.value} value={item.value} className="flex-1">
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {noteMasc.map(item => (
                    <TabsContent value="masculino" className="flex flex-col items-center gap-3">
                        <Carousel key={item.id} className="w-56 h-[270px]">
                            <div className="text-center text-xl font-bold text-bg-[#002372]">{item.linha}</div>
                            <CarouselContent className="w-[250px]">
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-masculina/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" priority />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-masculina/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-masculina/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-masculina/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="w-14 border border-black" />
                            <CarouselNext className="w-14 border border-black" />
                        </Carousel>
                        <Modal name={item.linha} image={item.url.map(url => `/assets/linha-masculina/${item.linha}/${url}`)} materias={item.materias} valores={item.valores} />
                    </TabsContent>
                ))}
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {noteFem.map(item => (
                    <TabsContent value="feminino" className="flex flex-col items-center gap-3">
                        <Carousel key={item.id} className="w-56 h-[270px]">
                            <div className="text-center text-xl font-bold text-bg-[#002372]">{item.linha}</div>
                            <CarouselContent className="w-[250px]">
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-feminina/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" priority />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-feminina/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-feminina/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-feminina/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="w-14 border border-black" />
                            <CarouselNext className="w-14 border border-black" />
                        </Carousel>
                        <Modal name={item.linha} image={item.url.map(url => `/assets/linha-feminina/${item.linha}/${url}`)} materias={item.materias} valores={item.valores} />
                    </TabsContent>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {noteInfant.map(item => (
                    <TabsContent value="infantil" className="flex flex-col items-center gap-3">
                        <Carousel key={item.id} className="w-56 h-[270px]">
                            <div className="text-center text-xl font-bold text-bg-[#002372]">{item.linha}</div>
                            <CarouselContent className="w-[250px]">
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-infantil/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" priority />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-infantil/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-infantil/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                                    <div className="w-48">
                                        <Image src={`/assets/linha-infantil/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="w-14 border border-black" />
                            <CarouselNext className="w-14 border border-black" />
                        </Carousel>
                        <Modal name={item.linha} image={item.url.map(url => `/assets/linha-infantil/${item.linha}/${url}`)} materias={item.materias} valores={item.valores} />
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}