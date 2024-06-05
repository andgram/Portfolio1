document.addEventListener('DOMContentLoaded', (event) => {
    const emInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const minWidthEm = 50;
    const minWidthPx = minWidthEm * emInPixels;

    const isDesktop = window.innerWidth >= minWidthPx;
    if (!isDesktop) {
        return; // Exit if the screen width is less than 50em
    }

    const frameRate = 30; 
    const frameCount = 72;
    const canvas = document.getElementById('animationCanvas');
    const context = canvas.getContext('2d');
    let currentFrame = 1;

    function loadImage(frame) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = `images/frames/logo-anim${String(frame).padStart(2, '0')}.png`;
            img.onload = () => resolve(img);
            img.onerror = (err) => {
                console.error(`Error loading image: ${img.src}`);
                reject(err);
            };
        });
    }

    async function playAnimation() {
        for (let i = 0; i < frameCount; i++) {
            try {
                const img = await loadImage(currentFrame);
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
                currentFrame = (currentFrame % frameCount) + 1;
                await new Promise(resolve => setTimeout(resolve, 1000 / frameRate));
            } catch (err) {
                console.error('Animation error:', err);
            }
        }
    }

    playAnimation();
});