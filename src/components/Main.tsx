import Image from "next/image"
import Link from "next/link"

export const Main = () => {

    return (
        <main className="pt-48 pb-20">
            <section className="h-full md:flex justify-center items-center gap-20">
                <Link href="/masculino">
                    <div className="flex flex-col justify-center items-center gap-4 py-4 mb-10 md:mb-0">
                        <div className="w-60 min-[400px]:w-72 md:w-[300px]">
                            <Image
                                src={`/homepage1.png`}
                                width={300}
                                height={300}
                                alt="Image"
                            />
                        </div>
                        <Image
                            src={`/homepage/tagmasc.png`}
                            width={200}
                            height={200}
                            alt="Image"
                        />
                    </div>
                </Link>
                <Link href="/feminino">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="w-60 min-[400px]:w-72 md:w-[300px]">
                            <Image
                                src={`/homepage2.png`}
                                width={300}
                                height={300}
                                alt="Image"
                            />
                        </div>
                        <Image
                            src={`/homepage/tagfem.png`}
                            width={200}
                            height={200}
                            alt="Image" />
                    </div>
                </Link>
            </section>
        </main>
    )
}