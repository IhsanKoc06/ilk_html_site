/**
 * Kullanıcıdan ismini alan ve ekrana yazdıran fonksiyon
 */
function askName() {
    let name = prompt("Lütfen adınızı giriniz:");
    let myName = document.querySelector("#myName");

    // Eğer kullanıcı isim girmezse veya iptal ederse 'Misafir' yazalım
    if (name) {
        myName.innerHTML = name;
    } else {
        myName.innerHTML = "Misafir";
    }
}

/**
 * Saati ve günü hesaplayıp ekrana yazdıran fonksiyon
 */
function showTime() {
    let date = new Date(); // Güncel tarih objesi
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    // Günleri Türkçe isimleriyle diziye ekliyoruz
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[date.getDay()];

    // Saat, dakika veya saniye 10'dan küçükse başına "0" ekleyelim (Örn: 08:05:02)
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // HTML içindeki saati göstereceğimiz div'i seçiyoruz
    let clock = document.querySelector("#myClock");
    
    // İçeriği birleştirip yazdırıyoruz
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;
    
    // Fonksiyonun her saniye (1000 ms) kendini tekrar etmesini sağlıyoruz
    setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde fonksiyonları çalıştırıyoruz
askName();
showTime();