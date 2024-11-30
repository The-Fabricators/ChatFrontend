<template>
  <div id="paymentBrick_container"></div>
</template>
<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const Public_Key = import.meta.env.VITE_MP_PUBLIC_KEY

const mp = new window.MercadoPago(Public_Key, {
  locale: 'pt-BR',
});
const bricksBuilder = mp.bricks();

const renderCardPaymentBrick = async (bricksBuilder) => {
  try {
    const settings = {
        initialization: {
          amount: 1,
          preferenceId: "<PREFERENCE_ID>",
          payer: {
            firstName: "",
            lastName: "",
            email: "",
          },
        },
customization: {
          visual: {
            style: {
              theme: "bootstrap",
            },
          },
          paymentMethods: {
            creditCard: "all",
										debitCard: "all",
										ticket: "all",
										atm: "all",
										bankTransfer: "all",
            maxInstallments: 1
          },
        },
      callbacks: {
        onSubmit: async (cardFormData) => {
          try {
            console.log(cardFormData);
            await axios.post('http://172.25.44.90:8000/api/payments/', {
                token: cardFormData?.token,
                issuer_id: cardFormData?.issuer_id,
                description: cardFormData.description || 'Pagamento de teste',
                payment_method_id: cardFormData.payment_method_id,
                transaction_amount: cardFormData.transaction_amount,
                installments: cardFormData?.installments,
                payment_email: cardFormData.payer?.email,
                payment_identification_number: cardFormData.payer?.identification.number,
                payment_identification_type: cardFormData.payer?.identification.type,
                user: 1,
              })
          } catch (error) {
            console.error(error);
            alert("fudeu: " + error.message);
            throw error; // Repassa o erro para callbacks, se necessário
          }
        },
        onReady: () => {
          alert("tá pronto");
        },
        onError: (error) => {
          console.error(error);
          alert("deu pau");
        },
      },
    };

    await bricksBuilder.create('payment', 'paymentBrick_container', settings);
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
<style scoped>

</style>
