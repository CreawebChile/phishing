document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix';
    const bg = document.createElement('div');
    bg.id = 'matrix-bg';
    bg.appendChild(canvas);
    document.body.insertBefore(bg, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isScrolling = false;
    let scrollTimeout;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!"#¤%&/()=?±@£$€{[]}*<>-_,.;:';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Implementar throttle para optimizar rendimiento
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;

    function draw(currentTime) {
        animationFrameId = requestAnimationFrame(draw);

        // Control de FPS para mejor rendimiento
        const deltaTime = currentTime - lastTime;
        if (deltaTime < frameInterval) return;
        lastTime = currentTime - (deltaTime % frameInterval);

        const isMobile = window.innerWidth <= 768;
        const opacity = isMobile ? 0.15 : 0.1;
        
        // Aplicar un efecto de fade más suave
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(0, 255, 0, 0.95)';
        ctx.shadowBlur = isMobile ? 2 : 5;
        ctx.shadowColor = '#0F0';
        ctx.font = fontSize + 'px monospace';

        const skipFrames = isMobile ? 2 : 1;
        
        for (let i = 0; i < drops.length; i += skipFrames) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            const y = drops[i] * fontSize;
            
            // Solo renderizar caracteres visibles en pantalla
            if (y < canvas.height + fontSize) {
                ctx.fillText(text, i * fontSize, y);
            }

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Optimizar el scroll sin detener la animación
    const handleScroll = () => {
        if (!canvas.style.opacity || canvas.style.opacity === '1') {
            canvas.style.opacity = '0.7';
            canvas.style.transition = 'opacity 0.2s ease';
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                canvas.style.opacity = '1';
            }, 100);
        }
    };

    // Usar passive true para mejor rendimiento en scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Optimizar el resize con debounce
    const handleResize = debounce(() => {
        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
        
        resizeCanvas();
        
        // Ajustar drops al nuevo tamaño
        const ratio = canvas.width / oldWidth;
        const newColumns = Math.ceil(canvas.width / fontSize);
        
        if (newColumns > drops.length) {
            for (let i = drops.length; i < newColumns; i++) {
                drops[i] = 1;
            }
        }
        
        // Reajustar posiciones existentes
        drops.length = newColumns;
    }, 250);

    window.addEventListener('resize', handleResize);

    // Función debounce para optimización
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Iniciar animación con requestAnimationFrame
    animationFrameId = requestAnimationFrame(draw);

    // Cleanup
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
});
