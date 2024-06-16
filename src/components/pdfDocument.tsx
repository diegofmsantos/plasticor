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

  const { cliente, cnpj, cep, rua, numero, complemento, bairro, cidade, email, telefone, frete, transportadora, pagamento } = checkoutState;
  const { cart, subtotal, desconto, totalFinal, totalItems } = cartState;

  let pedidos = [];
  for (let item of cart) {
    pedidos.push(`[${item.product.codigos[item.selectedMaterialIndex]}] ${item.quantity} x ${item.product.linha} (${item.product.materias[item.selectedMaterialIndex]}): R$ ${(item.quantity * item.price).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  }
  const subtotalFormatado = subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const descontoReais = (subtotal * (desconto / 100)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const totalFinalFormatado = totalFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const currentDate = new Date();
  const date = currentDate.toLocaleDateString('pt-BR', {
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
            <Text>PLASTICOR BRINDES INDÚSTRIA E COMÉRCIO LTDA</Text>
            <Text>RUA ARTUR AZEVEDO, 79</Text>
            <Text>ENCRUZILHADA - CEP 52021190 - RECIFE-PE</Text>
            <Text>Fone: (81)3241-2410 / 3241-6276 - Fax: (81)3241-2410</Text>
            <Text>CNPJ/CPF: 097.573.189/0001-86 - Inscr. Estadual: 011226-45</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10 }}>Data de emissão:{date}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>CLIENTE:</Text> {cliente}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>CNPJ/CPF:</Text> {cnpj}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>CEP:</Text> {cep}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>RUA:</Text> {rua}, Nº: {numero}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>COMPLEMENTO:</Text> {complemento}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>BAIRRO:</Text> {bairro}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>CIDADE:</Text> {cidade}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>E-MAIL:</Text> {email}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>TELEFONE:</Text> {telefone}</Text>
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>FRETE:</Text> {frete}</Text>
          {frete === 'FOB' && <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>TRANSPORTADORA:</Text> {transportadora}</Text>}
          <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>FORMA DE PAGAMENTO:</Text> {pagamento}</Text>
        </View>
        <View>
          <Text><Text>Pedido</Text></Text>
          <View style={styles.itemList}>
            {pedidos.map((pedido, index) => (
              <Text key={index} style={styles.text}>{pedido}</Text>
            ))}
          </View>
        </View>
        <View style={styles.total}>
          <Text><Text>CAIXAS:</Text> {totalItems}</Text>
          <Text><Text>SUBTOTAL:</Text> R$ {subtotalFormatado}</Text>
          <Text><Text>DESCONTO:</Text> {desconto}% (-R$ {descontoReais})</Text>
          <Text><Text>TOTAL:</Text> R$ {totalFinalFormatado}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
