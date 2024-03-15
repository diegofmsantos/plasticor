import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { NoteListMasc } from "@/data/noteListMasc";
import { useScreenWidth } from "@/hooks/useScreenWith";
import Image from "next/image";

type Props = {
    params: {
        linha: string
    }
}

export const CarouselMasc= ({ params }: Props) => {

    const linhaCode = NoteListMasc.filter((item) => item.linha === 'CODE')
    const linhaDaijobu = NoteListMasc.filter((item) => item.linha === 'DAIJOBU')
    const linhaEpic = NoteListMasc.filter((item) => item.linha === 'EPIC-GAMES')
    const linhaFight = NoteListMasc.filter((item) => item.linha === 'FIGHT-CLUB')
    const linhaGol = NoteListMasc.filter((item) => item.linha === 'GOL')
    const linhaGospel = NoteListMasc.filter((item) => item.linha === 'GOSPEL')
    const linhaGrafitti = NoteListMasc.filter((item) => item.linha === 'GRAFITTI')
    const linhaHeroes = NoteListMasc.filter((item) => item.linha === 'HEROES')
    const linhaHigh = NoteListMasc.filter((item) => item.linha === 'HIGH')
    const linhaKingdom = NoteListMasc.filter((item) => item.linha === 'KINGDOM')
    const linhaMotorcycles = NoteListMasc.filter((item) => item.linha === 'MOTORCYCLES')
    const linhaSk8 = NoteListMasc.filter((item) => item.linha === 'SK8')
    const linhaSkull = NoteListMasc.filter((item) => item.linha === 'SKULL')
    const linhaSport = NoteListMasc.filter((item) => item.linha === 'SPORT-MIX')
    const linhaVelozes = NoteListMasc.filter((item) => item.linha === 'VELOZES-E-TUNADOS')

    const screenWidth = useScreenWidth()

    return (
        <div>
            {params.linha === 'CODE' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaCode.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'DAIJOBU' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaDaijobu.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'EPIC-GAMES' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaEpic.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'FIGHT-CLUB' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaFight.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'GOL' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaGol.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'GOSPEL' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaGospel.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'GRAFITTI' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaGrafitti.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'HEROES' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaHeroes.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'HIGH' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaHigh.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'KINGDOM' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaKingdom.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'MOTORCYCLES' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaMotorcycles.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'SK8' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaSk8.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'SKULL' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaSkull.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'SPORT-MIX' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaSport.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="w-10 h-10" />
                    <CarouselNext className="w-10 h-10" />
                </Carousel>
            }
            {params.linha === 'VELOZES-E-TUNADOS' &&
                <Carousel orientation={screenWidth >= 768 ? "horizontal" : "vertical"} className="xl:mb-8" >
                    <CarouselContent className="h-[350px] border-none min-[375px]:h-[400px] min-[425px]:h-[450px]">
                        {linhaVelozes.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card className="border-none">
                                    <CardContent className="flex items-center justify-center p-0">
                                        <Image src={`/linhas-masculinas/${item.linha}/${item.url}`} width={350} height={450} alt="Notebook" />
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