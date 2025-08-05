import { TonConnect } from '@tonconnect/sdk';

export const tonConnect = new TonConnect({
  manifestUrl: 'https://yourdomain.com/tonconnect-manifest.json',
});

export async function connectWallet() {
  try {
    await tonConnect.connectWallet();
    const wallet = tonConnect.wallet;
    alert('Cüzdan Bağlandı: ' + wallet.account.address);
    return wallet;
  } catch (err) {
    alert('Cüzdan bağlantı hatası: ' + err.message);
  }
}

export async function sendPayment(amountTon) {
  const tx = {
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [
      {
        address: 'UQBdCzXMRUn_-Ahrna9PjweEvWcBek3xyeNbjQYHndnBicuZ',
        amount: (amountTon * 1e9).toString(),
      },
    ],
  };
  try {
    await tonConnect.sendTransaction(tx);
    alert('Ödeme Başarılı');
  } catch (err) {
    alert('Ödeme Başarısız: ' + err.message);
  }
}
