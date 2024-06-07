import Image from "next/image"

export const Message = () => {

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="w-36 h-16">
                    <Image src="/assets/logo.png" width={150} height={80} alt="Logo" className="w-full h-full" priority />
                </div>
                <div>
                    <div>PLASTICOR BRINDES INDÚSTRIA E COMÉRCIO LTDA</div>
                    <div>RUA ARTUR AZEVEDO, 79</div>
                    <div>ENCRUZILHADA - CEP 52021190 - RECIFE-PE</div>
                    <div>Fone: (81)3241-2410 / 3241-6276 - Fax: (81)3241-2410</div>
                    <div>CNPJ/CPF: 097.573.189/0001-86 - Inscr. Estadual: 011226-45</div>
                </div>
            </div>
        </div>
    )
}

/*
`
*DADOS DO CLIENTE:*
   
*CLIENTE:* ${cliente}

*CNPJ/CPF:* ${cnpj}

*CEP:* ${cep}

*RUA:* ${rua}

*Nº:* ${numero}

*COMPLEMENTO:* ${complemento}

*BAIRRO:* ${bairro}

*CIDADE:* ${cidade}

*E-MAIL:* ${email}

*TELEFONE:* ${telefone}

*FRETE:* ${frete}

*TRANSPORTADORA:* ${transportadora}

*FORMA DE PAGAMENTO:* ${pagamento}

--------------------------------------

*PEDIDO:*

${pedidos.join("\n")}

*CAIXAS:* ${totalItems}

*SUBTOTAL:* R$ ${subtotalFormatado}

*DESCONTO:* ${desconto}% (-R$${descontoReais})

*TOTAL:* R$ ${totalFinalFormatado}
`
*/