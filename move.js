document.addEventListener('DOMContentLoaded', function() {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix';
    const bg = document.createElement('div');
    bg.id = 'matrix-bg';
    bg.appendChild(canvas);
    document.body.insertBefore(bg, document.body.firstChild);

    // Get canvas context
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#¤%&/()=?±@£$€{[]}*<>-_,.;:';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Drawing function
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.12)'; // Ajustar opacidad para mejor visibilidad
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(0, 255, 0, 1)'; // Hacer los caracteres más brillantes
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Animation loop
    setInterval(draw, 35); // Hacer la animación más rápida
});
