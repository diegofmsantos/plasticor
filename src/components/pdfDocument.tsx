import React, { useEffect, useState } from 'react';
import { Document, Page, View, Text, Image } from '@react-pdf/renderer';
import { useCheckoutStore } from '@/stores/checkout-store';
import { useCartStore } from '@/stores/cart-store';
import { styles } from '@/lib/styles';

const PdfDocument = () => {

  const [checkoutState, setCheckoutState] = useState(useCheckoutStore.getState());
  const [cartState, setCartState] = useState(useCartStore.getState());

  useEffect(() => {
    const unsubscribeCheckout = useCheckoutStore.subscribe(setCheckoutState);
    const unsubscribeCart = useCartStore.subscribe(setCartState);

    return () => {
      unsubscribeCheckout();
      unsubscribeCart();
    };
  }, []);

  const {
    cliente, cnpj, cep, rua, numero, complemento, bairro, cidade, email, telefone, frete, transportadora, pagamento
  } = checkoutState;
  const { cart, subtotal, desconto, totalFinal, totalItems } = cartState;

  let pedidos = [];
  for (let item of cart) {
    pedidos.push(`[${item.product.codigos[item.selectedMaterialIndex]}] ${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  }
  const subtotalFormatado = subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const descontoReais = (subtotal * (desconto / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const totalFinalFormatado = totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Obtém a data atual
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image src="/assets/logo.png" style={styles.logo} />
          <View style={styles.companyInfo}>
            <Text style={styles.bold}>PLASTICOR BRINDES INDÚSTRIA E COMÉRCIO LTDA</Text>
            <Text style={styles.bold}>RUA ARTUR AZEVEDO, 79</Text>
            <Text style={styles.bold}>ENCRUZILHADA - CEP 52021190 - RECIFE-PE</Text>
            <Text>Fone: (81)3241-2410 / 3241-6276 - Fax: (81)3241-2410</Text>
            <Text style={styles.bold}>CNPJ/CPF: 097.573.189/0001-86 - Inscr. Estadual: 011226-45</Text>
          </View>
          <View>
            <Text style={styles.emissao}>Data de Emissão: {formattedDate}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={[styles.text, styles.bold]}>CLIENTE: {cliente}</Text>
          <Text style={[styles.text, styles.bold]}>CNPJ/CPF: {cnpj}</Text>
          <Text style={[styles.text, styles.bold]}>CEP: {cep}</Text>
          <Text style={[styles.text, styles.bold]}>RUA: {rua}, Nº: {numero}</Text>
          <Text style={[styles.text, styles.bold]}>COMPLEMENTO: {complemento}</Text>
          <Text style={[styles.text, styles.bold]}>BAIRRO: {bairro}</Text>
          <Text style={[styles.text, styles.bold]}>CIDADE: {cidade}</Text>
          <Text style={[styles.text, styles.bold]}>E-MAIL: {email}</Text>
          <Text style={[styles.text, styles.bold]}>TELEFONE: {telefone}</Text>
          <Text style={[styles.text, styles.bold]}>FRETE: {frete}</Text>
          {frete === 'FOB' && <Text style={[styles.text, styles.bold]}>TRANSPORTADORA: {transportadora}</Text>}
          <Text style={[styles.text, styles.bold]}>FORMA DE PAGAMENTO: {pagamento}</Text>
        </View>
        <View>
          <Text>Pedido</Text>
          <View style={styles.itemList}>
            {pedidos.map((pedido, index) => (
              <Text key={index} style={[styles.item, styles.bold]}>{pedido}</Text>
            ))}
          </View>
        </View>
        <View style={styles.total}>
          <Text>CAIXAS: {totalItems}</Text>
          <Text>SUBTOTAL: R$ {subtotalFormatado}</Text>
          <Text>DESCONTO: {desconto}% (-R$ {descontoReais})</Text>
          <Text>TOTAL: R$ {totalFinalFormatado}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
