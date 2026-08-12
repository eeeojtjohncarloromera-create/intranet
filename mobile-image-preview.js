(() => {
    const modal = document.getElementById('activityImageModal');
    const image = document.getElementById('activityImagePreview');
    const closeButton = modal?.querySelector('.activity-image-modal-close');

    if (!modal || !image || !closeButton) return;

    const closePreview = () => {
        modal.hidden = true;
        image.removeAttribute('src');
        image.alt = '';
    };

    document.addEventListener('click', (event) => {
        const slideImage = event.target.closest('.slider .slide img');
        if (!slideImage) return;

        image.src = slideImage.currentSrc || slideImage.src;
        image.alt = slideImage.alt || 'Activity image preview';
        modal.hidden = false;
        closeButton.focus();
    });

    closeButton.addEventListener('click', closePreview);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closePreview();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) closePreview();
    });
})();
