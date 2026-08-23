// Array that store a list of quotes and their author
const quote = [
    {
        text: "Saya akan lawan.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Jangan menyerah, kecuali memang sudah capek.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Hidup itu pilihan. Saya pilih rebahan.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kalau tidak bisa menjadi yang terbaik, jadilah yang paling santai.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya bukan malas. Saya sedang menghemat energi.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kita tidak gagal. Kita hanya belum berhasil.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kalau masalah bisa diselesaikan besok, kenapa harus hari ini?",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya sudah mencoba yang terbaik. Ternyata terbaik saya segini.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Jangan takut bermimpi. Takutlah kalau alarm tidak bunyi.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Hidup memang berat. Makanya jangan ditambah berat badan.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya tidak mengejar kesuksesan. Saya menunggu dia datang sendiri.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kalau dunia tidak menerimamu, mungkin kamu belum bayar WiFi.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Tetap semangat, karena menyerah juga tidak mengubah keadaan.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya punya prinsip: kalau bisa nanti, kenapa sekarang?",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Jangan bandingkan hidupmu dengan orang lain. Mereka belum tentu punya cicilanmu.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kesuksesan dimulai dari langkah pertama. Setelah itu terserah.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya bukan overthinking. Saya hanya berpikir dengan kualitas 4K.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kalau kamu merasa sendirian, ingatlah: ada tagihan yang selalu menemanimu.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Tidak semua yang berkilau itu emas. Kadang cuma layar HP kena matahari.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya akan berjuang sampai titik darah penghabisan. Setelah itu tidur.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Jangan takut gagal. Takutlah kalau gagal tapi tetap ngulang.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Hari ini harus lebih baik dari kemarin. Kalau tidak bisa, ya besok.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya tidak terlambat. Saya datang dengan timing yang berbeda.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Rencana saya sederhana: sukses, kaya, lalu bingung mau ngapain.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Jangan menyerah pada keadaan. Serahkan saja pada keadaan.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Kalau hidup memberimu lemon, bikin es teh. Lemon mahal.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya tahu apa yang saya mau. Masalahnya, saya lupa naruhnya di mana.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Diam bukan berarti tidak tahu. Bisa jadi memang tidak tahu mau ngomong apa.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Jadilah dirimu sendiri. Versi yang sudah mandi kalau bisa.",
        author: "Vieto Budi Utomo"
    },
    {
        text: "Saya akan lawan semua tantangan. Tapi besok, hari ini saya ada urusan.",
        author: "Vieto Budi Utomo"
    }
];

// Get HTML elements by their id
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// function to generate a random quote
function generateQuote(){
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quote.length);
    const randomQuote = quote[randomIndex];

    // Update the quote text and author in the Element HTML
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;

}

// Add Event Listener for the button
newQuoteButton.addEventListener('click', generateQuote)

// Call generate quote when page first loader
generateQuote()