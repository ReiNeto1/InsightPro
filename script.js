document.addEventListener('DOMContentLoaded', () => {
    // Gráficos com Chart.js

    // Gráfico de Funcionários
    const funcionariosCtx = document.getElementById('funcionariosChart').getContext('2d');
    const funcionariosChart = new Chart(funcionariosCtx, {
        type: 'bar',
        data: {
            labels: ['RH', 'TI', 'Vendas', 'Financeiro'],
            datasets: [{
                label: 'Funcionários por Departamento',
                data: [50, 20, 30, 10],
                backgroundColor: ['#2980B9', '#E74C3C', '#27AE60', '#8E44AD'],
            }]
        },
    });

    // Gráfico de Insumos
    const insumosCtx = document.getElementById('insumosChart').getContext('2d');
    const insumosChart = new Chart(insumosCtx, {
        type: 'pie',
        data: {
            labels: ['Matéria-prima', 'Tecnologia', 'Outros'],
            datasets: [{
                label: 'Insumos',
                data: [300, 200, 100],
                backgroundColor: ['#2980B9', '#E74C3C', '#27AE60'],
            }]
        },
    });

    // Gráfico de Ganhos
    const ganhosCtx = document.getElementById('ganhosChart').getContext('2d');
    const ganhosChart = new Chart(ganhosCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Ganhos ao longo do ano',
                data: [5000, 6000, 7000, 6500, 7200, 8000],
                borderColor: '#27AE60',
                fill: false,
            }]
        },
    });

    // Gráfico de Riscos
    const riscosCtx = document.getElementById('riscosChart').getContext('2d');
    const riscosChart = new Chart(riscosCtx, {
        type: 'radar',
        data: {
            labels: ['Financeiro', 'Operacional', 'Tecnológico', 'Mercado'],
            datasets: [{
                label: 'Risco',
                data: [80, 50, 30, 70],
                backgroundColor: 'rgba(231, 76, 60, 0.2)',
                borderColor: '#E74C3C',
            }]
        },
    });
});
