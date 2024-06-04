import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Notebook } from "@/types/Notebook"
import { Modal } from "@/components/modal"

type Props = { item: Notebook }

export const ProductItem = ({ item }: Props) => {

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-1 w-72">
                <Carousel className="w-64 h-[290px] mb-2 flex flex-col justify-center items-center">
                    <div className="text-center text-lg font-bold text-bg-[#002372]">{item.linha}
                    </div>
                    <CarouselContent className="w-[300px]">
                        <CarouselItem className="w-52 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                            <div className="w-52">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[0]}`} width={170} height={170} alt="Image" className="w-full h-full" priority />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-52 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                            <div className="w-52">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[1]}`} width={170} height={170} alt="Image" className="w-full h-full" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-52 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-44 md:h-64">
                            <div className="w-52">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[2]}`} width={170} height={170} alt="Image" className="w-full h-full" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className="w-52 h-60 p-0 flex justify-center items-center sm:w-48 sm:h-60 md:w-52 md:h-64">
                            <div className="w-52">
                                <Image src={`/assets/linhas/${item.linha}/${item.url[3]}`} width={170} height={170} alt="Image" className="w-full h-full" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
                <Modal item={item} image={item.url.map(url => `/assets/linhas/${item.linha}/${url}`)} />
            </div>
        </div>
    )
}