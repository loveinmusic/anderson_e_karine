// Contador de Tempo Decorrido
const startDate = new Date("2023-12-10T00:00:00").getTime();

setInterval(() => {
    const now = new Date();
    const start = new Date("2023-12-10T00:00:00");

    // Calcula a diferença em anos, meses e dias
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    // Ajusta meses e anos se necessário
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate(); // Dias restantes no mês anterior
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Calcula horas, minutos e segundos
    const timeElapsed = now.getTime() - start.getTime();
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Atualiza o DOM
    document.getElementById("years").textContent = years.toString().padStart(2, "0");
    document.getElementById("months").textContent = months.toString().padStart(2, "0");
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);