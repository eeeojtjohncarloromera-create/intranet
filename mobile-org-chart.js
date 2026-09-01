(function () {
    const mobileQuery = window.matchMedia('(max-width: 768px), (max-height: 500px) and (orientation: landscape)');

    function fitChart(chart, container) {
        chart.classList.remove('is-mobile-fitted');
        chart.style.removeProperty('--mobile-chart-scale');
        container.style.removeProperty('height');

        const scale = Math.min(1, container.clientWidth / chart.scrollWidth);
        chart.style.setProperty('--mobile-chart-scale', scale);
        chart.classList.add('is-mobile-fitted');
        container.style.height = `${Math.ceil(chart.offsetHeight * scale)}px`;

    }

    function fitMobileCharts() {
        if (!mobileQuery.matches) return;
        document.querySelectorAll('.org-chart-mobile-container > .org-chart').forEach((chart) => {
            fitChart(chart, chart.parentElement);
        });
    }

    function updateCharts() {
        document.querySelectorAll('.org-chart').forEach((chart) => {
            const container = chart.parentElement.classList.contains('org-chart-mobile-container')
                ? chart.parentElement
                : null;

            if (mobileQuery.matches && !container) {
                const parent = chart.parentNode;
                const scrollContainer = document.createElement('div');

                scrollContainer.className = 'org-chart-mobile-container';
                scrollContainer.setAttribute('aria-label', 'Organizational chart. Pinch to zoom if needed.');

                parent.insertBefore(scrollContainer, chart);
                scrollContainer.appendChild(chart);
                window.requestAnimationFrame(() => fitChart(chart, scrollContainer));
            } else if (!mobileQuery.matches && container) {
                const parent = container.parentNode;
                parent.insertBefore(chart, container);
                chart.classList.remove('is-mobile-fitted');
                chart.style.removeProperty('--mobile-chart-scale');
                container.remove();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', updateCharts);
    mobileQuery.addEventListener('change', updateCharts);
    window.addEventListener('resize', fitMobileCharts);
}());
