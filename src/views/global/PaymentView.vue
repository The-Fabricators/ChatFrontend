<template>
  <div id="cardPaymentBrick_container"></div>
  <div id="bankTransferBrick_container"></div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const api_key = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;
const authStore = useAuthStore();
const mp = new window.MercadoPago(api_key);
const bricksBuilder = mp.bricks();

const renderCardPaymentBrick = async (bricksBuilder) => {
  try {
    const settings = {
      initialization: {
        amount: 1, // valor do pagamento a ser processado
        payer: {
          type: 'cpf',
          number: '82133948953',
        },
      },
      customization: {
        visual: {
          style: {
            theme: 'bootstrap', // 'default' | 'dark' | 'bootstrap' | 'flat'
          },
        },
        paymentMethod: {
          creditCard: 'all',
          bankTransfer: 'all',
          minInstallments: 1,
          maxInstallments: 12,
        },
      },
      callbacks: {
        onSubmit: async (cardFormData) => {
          try {
            console.log(cardFormData);
            await axios.post('http://172.25.44.90:8000/api/payments/', {
                token: cardFormData.token,
                issuer_id: cardFormData.issuer_id,
                description: cardFormData.description || 'Pagamento de teste',
                payment_method_id: cardFormData.payment_method_id,
                transaction_amount: cardFormData.transaction_amount,
                installments: cardFormData.installments,
                payment_email: cardFormData.payer.email,
                payment_identification_number: cardFormData.payer.identification.number,
                payment_identification_type: cardFormData.payer.identification.type,
                user: authStore.user?.id,
              })
            } catch (error) {
            alert("Pagamento realizado com sucesso!");
            router.push('/')
            console.error(error);
          }
        },
        onReady: () => {
        },
        onError: (error) => {
          console.error(error);
        },
      },
    };

    await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
  } catch (error) {
    console.error("Erro ao renderizar o cardPaymentBrick:", error);
    alert("Erro ao inicializar o pagamento.");
  }
};

onMounted(async () => {
  try {
    await renderCardPaymentBrick(bricksBuilder);
  } catch (error) {
    console.error("Erro no onMounted:", error);
    alert("Erro ao montar o componente.");
  }
});
</script>
