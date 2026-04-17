// Simpan kodingan ini dengan nama: telegram-bot.js

async function sendToTelegram(message) {
    // 1. Ganti dengan Token Bot Anda dari @BotFather
    const token = "8188377638:AAEwKxv5JhzzmGd_OHef6qXIicC5efToIo4"; 
    
    // 2. Ganti dengan Chat ID Anda dari @userinfobot (Berupa angka)
    const chatId = "6446267815"; 
    
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        if (!result.ok) {
            console.error("Gagal mengirim pesan:", result.description);
        }
    } catch (error) {
        console.error("Kesalahan Koneksi:", error);
    }
}