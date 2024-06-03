import { useCheckoutStore } from '@/stores/checkout-store'
import { useCartStore } from '@/stores/cart-store'

export const generateMessage = () => {
    const { cliente, cnpj, cep, rua, numero, complemento, bairro, cidade, email, telefone, frete, transportadora, pagamento } = useCheckoutStore.getState()
    const { cart, subtotal, desconto, totalFinal, totalItems } = useCartStore.getState()

    let pedidos = []
    for (let item of cart) {
        pedidos.push(`${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    }
    const subtotalFormatado = subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const descontoReais = (subtotal * (desconto / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const totalFinalFormatado = totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return `
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
}
