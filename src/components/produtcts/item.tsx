import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Notebook } from "@/types/Notebook"
import { Modal } from "@/components/modal"

type Props = { item: Notebook }

export const ProductItem = ({ item }: Props) => {

    return (
        <div>
            <div className="flex flex-col items-center gap-3 w-72">
                <Carousel className="w-56 h-[270px]">
                    <div className="text-center text-xl font-bold text-bg-[#002372]">{item.linha}
                    </div>
                    <CarouselContent className="w-[250px]">
                        <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                            <div className="w-48">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[0]}`} width={150} height={150} alt="Image" className="w-full h-full" priority />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                            <div className="w-48">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[1]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                            <div className="w-48">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[2]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-40 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                            <div className="w-48">
                                <Image src={`/assets/linha-reduzida/${item.linha}/${item.url[3]}`} width={150} height={150} alt="Image" className="w-full h-full" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10 bg-[#002372] text-white border border-black" />
                    <CarouselNext className="w-10 h-10 bg-[#002372] text-white border border-black" />
                </Carousel>
                <Modal name={item.linha} image={item.url.map(url => `/assets/linha-masculina/${item.linha}/${url}`)} materias={item.materias} valores={item.valores} />
            </div>
        </div>
    )
}