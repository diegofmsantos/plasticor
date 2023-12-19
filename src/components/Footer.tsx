import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

    return (
        <footer className="w-full h-[600px] flex justify-center items-end border-t">
            <div className="w-full h-full flex flex-col gap-6 p-10 bg-gray-100">
                <Link
                    href="https://wa.me/+5581986565939"
                    className="w-36 h-10 fixed bottom-2 right-0 hover:bg-whatsapp-dark text-white font-semibold  hover:border-transparent rounded text-2xl"
                    target="_blank"
                >
                    <Image src={`/homepage/whatsapp.png`} width={170} height={170} alt="Botão Whatsapp" />
                </Link>
                <iframe className="w-full h-[400px] border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.620141199162!2d-34.89389772601896!3d-8.03804108026281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18f622fb65a3%3A0xea4c97d2d74d801d!2sPlasticor%20Brindes%20Ind%C3%BAstria%20e%20Com%C3%A9rcio!5e0!3m2!1spt-PT!2sbr!4v1701913607382!5m2!1spt-PT!2sbr" loading="lazy" ></iframe>
                <div className="bg-gray-100 border text-white flex justify-between flex-wrap p-4">
                    <div>
                        <h2 className="text-[#002372] font-bold text-md tracking-widest ">
                            ENDEREÇO
                        </h2>
                        <p className="mt-1 text-[#002372] ">
                            R. Artur Azevedo, 79 - Encruzilhada, Recife - PE,
                            52021-190
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <h2 className="text-[#002372] font-bold text-md">
                            EMAIL
                        </h2>
                        <a className="text-[#002372]">
                            plasticorvendas@yahoo.com.br
                        </a>
                        <h2 className="text-[#002372] font-bold text-md mt-4">
                            TELEFONE
                        </h2>
                        <p className="leading-relaxed text-[#002372]">
                            (81) 3241 2410
                        </p>
                        <p className="leading-relaxed text-[#002372]">
                            (81) 9 9986 4189
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )

}