import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { NoteListFem } from "@/data/noteListFem";
import { useScreenWidth } from "@/hooks/useScreenWith";
import Image from "next/image";

type Props = {
    params: {
        linha: string
    }
}

export const CarouselFem = ({ params }: Props) => {

    const linhaAspects = NoteListFem.filter((item) => item.linha === 'ASPECTS')
    const linhaCapriche = NoteListFem.filter((item) => item.linha === 'CAPRICHE')
    const linhaCharm = NoteListFem.filter((item) => item.linha === 'CHARM')
    const linhaColour = NoteListFem.filter((item) => item.linha === 'COLOUR')
    const linhaCosmus = NoteListFem.filter((item) => item.linha === 'COSMUS')
    const linhaCute = NoteListFem.filter((item) => item.linha === 'CUTE')
    const linhaFlys = NoteListFem.filter((item) => item.linha === 'FLYS')
    const linhaLove = NoteListFem.filter((item) => item.linha === 'LOVE')
    const linhaMoments = NoteListFem.filter((item) => item.linha === 'MOMENTS')
    const linhaPets = NoteListFem.filter((item) => item.linha === 'PETS')
    const linhaTropicaliente = NoteListFem.filter((item) => item.linha === 'TROPICALIENTE')
    const linhaUnicorn = NoteListFem.filter((item) => item.linha === 'UNICORN-WORLD')
    const linhaWeird = NoteListFem.filter((item) => item.linha === 'WEIRD')

    const screenWidth = useScreenWidth()

    return (
        <div>
            {params.linha === 'ASPECTS' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaAspects.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'CAPRICHE' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaCapriche.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'CHARM' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaCharm.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'COLOUR' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaColour.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'COSMUS' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaCosmus.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'CUTE' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaCute.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'FLYS' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaFlys.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'LOVE' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaLove.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'MOMENTS' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaMoments.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'PETS' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaPets.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'TROPICALIENTE' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaTropicaliente.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'UNICORN-WORLD' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaUnicorn.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'WEIRD' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaWeird.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-femininas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
        </div>
    )
}