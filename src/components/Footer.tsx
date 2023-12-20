import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

    return (
        <footer className="w-full h-[690px] bg-[#002372] flex justify-center items-end border-t">
            <div className="w-full h-[680px] bg-[#FF0000] flex flex-col gap-10 p-4 lg:p-16">
                <iframe className="w-full h-[400px] border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.620141199162!2d-34.89389772601896!3d-8.03804108026281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18f622fb65a3%3A0xea4c97d2d74d801d!2sPlasticor%20Brindes%20Ind%C3%BAstria%20e%20Com%C3%A9rcio!5e0!3m2!1spt-PT!2sbr!4v1701913607382!5m2!1spt-PT!2sbr" loading="lazy" ></iframe>
                <div className="flex-col md:flex md:flex-row justify-center gap-4 text-white text-2xl font-bold">
                    <div className="border-r-2 pr-5 text-[18px] mb-4 lg:text-3xl flex flex-col justify-center gap-3 lg:gap-2">
                        <div className="flex justify-center">
                            <div className="flex lg:items-baseline">FONE
                                <div className="w-7 h-5 flex justify-center items-center mx-2">
                                    <Image src={`/telefone1.png`} width={35} height={25} alt="Telefone" />
                                </div>
                            </div>
                            <div>(81) 3241 2410</div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex lg:items-baseline">Wapp
                                <div className="w-7 h-5 flex justify-center items-center mx-1">
                                    <Image src={`/whatsapp.svg`} width={35} height={25} alt="Whatsapp" />
                                </div>
                            </div>
                            <div>(81) 99986 4189</div>
                        </div>
                    </div>
                    <div className="text-[20px] text-center lg:text-2xl">
                        <div>Rua Artur Azevedo, 79</div>
                        <div>Encruzilhada - Recife, PE</div>
                        <div>CEP: 52.021-190</div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="w-72 h-16 flex justify-center items-center text-[#002372] bg-gray-200">
                        <Image src={`/brasil.png`} width={35} height={25} className="mr-2" alt="Telefone" />
                        <p>CNPJ: 09.573.189/0001-86</p>
                    </div>
                    <div className="w-72 h-16 flex flex-col justify-center items-center font-bold text-[#002372] bg-gray-200">
                        <div className="flex justify-center items-center">
                            <p className="text-xl mr-1">EMAIL</p>
                            <Image src={`/email1.png`} width={25} height={25} className="mr-2" alt="Telefone" />
                        </div>
                        <p>plasticorvendas@yahoo.com.br</p>
                    </div>
                </div>
            </div>

            <Link
                href="https://wa.me/+5581986565939"
                className="w-36 h-10 fixed bottom-2 right-0 hover:bg-whatsapp-dark text-white font-semibold  hover:border-transparent rounded text-2xl"
                target="_blank"
            >
                <Image src={`/homepage/whatsapp.png`} width={170} height={170} alt="Botão Whatsapp" />
            </Link>
        </footer>
    )

}