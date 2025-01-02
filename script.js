document.addEventListener('DOMContentLoaded', function() {
    const phishingInfo = {
        'como-funciona': {
            title: '¿Cómo funciona el Phishing?',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <h3 class="mb-4 text-center">El Proceso del Phishing:</h3>
                            
                            <!-- Paso 1: Creación de sitios falsos -->
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Paso 1: Preparación del Engaño</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-12">
                                            <h5>¿Qué hacen los estafadores?</h5>
                                            <ul class="fs-5">
                                                <li>Crean copias casi idénticas de sitios web conocidos</li>
                                                <li>Imitan logos y diseños de empresas legítimas</li>
                                                <li>Compran dominios similares a los originales</li>
                                                <li>Preparan mensajes convincentes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Paso 2: Distribución -->
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Paso 2: Distribución del Anzuelo</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-12">
                                            <h5>Métodos de Distribución:</h5>
                                            <ul class="fs-5">
                                                <li>Envían correos electrónicos masivos</li>
                                                <li>Mandan mensajes SMS fraudulentos</li>
                                                <li>Crean publicidad engañosa</li>
                                                <li>Utilizan redes sociales</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Paso 3: Engaño -->
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Paso 3: Tácticas de Manipulación</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-12">
                                            <div class="alert alert-warning">
                                                <h5>Técnicas de engaño:</h5>
                                                <ul>
                                                    <li>Crean sensación de urgencia</li>
                                                    <li>Utilizan amenazas de consecuencias</li>
                                                    <li>Ofrecen premios o recompensas falsas</li>
                                                    <li>Suplantan la identidad de personas conocidas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="alert alert-danger">
                                <h4>¡Importante!</h4>
                                <p class="mb-0">Las empresas legítimas nunca te pedirán datos sensibles por correo o mensaje. 
                                Si tienes dudas, siempre contacta directamente a la empresa por los canales oficiales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'senales': {
            title: 'Señales de Alerta Detalladas',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="alert alert-danger">
                                <h4>¡Cuidado con estas señales! 🚨</h4>
                                <ul>
                                    <li>Correos con errores de ortografía</li>
                                    <li>Enlaces sospechosos</li>
                                    <li>Solicitudes urgentes de información</li>
                                    <li>Ofertas increíbles o premios inesperados</li>
                                    <li>Amenazas o consecuencias graves</li>
                                </ul>
                            </div>

                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">⚠️ Nueva Modalidad de Estafa con Tarjetas</h4>
                                </div>
                                <div class="card-body">
                                    <h5 class="text-danger mb-3">¿Cómo funciona esta estafa?</h5>
                                    <div class="alert alert-warning">
                                        <ul class="mb-0">
                                            <li class="mb-2">Te piden ingresar tu tarjeta para cobrar un monto mínimo y "canjear" algún producto</li>
                                            <li class="mb-2">Al ingresar los datos, te dirán que la tarjeta "no funciona" o que "no se pudo procesar el cobro"</li>
                                            <li class="mb-2">Este es un engaño: tus datos ya quedaron registrados en la base de datos del ciberdelincuente</li>
                                            <li class="mb-2">Con esta información pueden realizar compras en negocios ficticios</li>
                                        </ul>
                                    </div>

                                    <h5 class="text-danger mt-4 mb-3">Estafas con Sitios Bancarios Falsos</h5>
                                    <div class="alert alert-warning">
                                        <ul class="mb-0">
                                            <li class="mb-2">Crean sitios web idénticos a los bancos reales</li>
                                            <li class="mb-2">Te piden "actualizar" o "cambiar" tu contraseña</li>
                                            <li class="mb-2">Al ingresar tus datos, quedan registrados para el delincuente</li>
                                            <li class="mb-2">Pueden realizar transferencias a cuentas ficticias con tu información</li>
                                        </ul>
                                    </div>

                                    <div class="alert alert-info mt-4">
                                        <h5 class="mb-3">🛡️ ¿Cómo protegerte?</h5>
                                        <ul class="mb-0">
                                            <li>Nunca ingreses datos de tarjeta en sitios no verificados</li>
                                            <li>Desconfía de ofertas que requieren un "pago mínimo"</li>
                                            <li>Accede a tu banco escribiendo directamente la URL</li>
                                            <li>Verifica siempre la dirección web (URL) del sitio</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'consejos': {
            title: 'Consejos de Seguridad',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="alert alert-success mb-4">
                                <h4>Protégete siguiendo estos consejos:</h4>
                                <ul>
                                    <li>Nunca des clics en enlaces sospechosos</li>
                                    <li>Verifica siempre la dirección del remitente</li>
                                    <li>No descargues archivos de fuentes desconocidas</li>
                                    <li>Usa contraseñas diferentes para cada servicio</li>
                                    <li>Mantén tu software y antivirus actualizado</li>
                                </ul>
                            </div>

                            <div class="card">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Verificación de Legitimidad</h4>
                                </div>
                                <div class="card-body">
                                    <p class="lead">Si desconfía de un sitio web o de un correo electrónico, lo más importante es contactar directamente a la empresa oficial para verificar la legitimidad del mensaje. A continuación, le brindamos algunos pasos clave:</p>
                                    
                                    <div class="alert alert-warning mt-4">
                                        <h5 class="text-danger">⚠️ NO LLAME A NÚMEROS SOSPECHOSOS</h5>
                                        <p>No llame al número del enlace o del correo recibido. Muchas veces, los atacantes incluyen números de teléfono falsos que conducen directamente a ellos, lo que podría derivar en otro intento de estafa, esta vez vía telefónica.</p>
                                    </div>

                                    <div class="alert alert-info mt-4">
                                        <h5>✅ PASOS SEGUROS A SEGUIR</h5>
                                        <ol class="mb-0">
                                            <li class="mb-3">
                                                <strong>Llame al número oficial de la empresa.</strong>
                                                <p>Puede encontrarlo en su sitio web legítimo (asegúrese de escribir la URL manualmente en el navegador o buscarla en fuentes confiables). Pregunte si el correo o mensaje es auténtico y explique la situación para que puedan verificarlo.</p>
                                            </li>
                                            <li>
                                                <strong>Reporte el incidente si resulta ser falso.</strong>
                                                <p>Si la empresa confirma que el correo o mensaje no es legítimo, hágales saber todos los detalles, como el remitente, el contenido del mensaje y los enlaces incluidos. Esto ayudará a la empresa a estar al tanto de estos intentos de fraude y a tomar medidas para proteger a otros usuarios.</p>
                                            </li>
                                        </ol>
                                    </div>

                                    <div class="alert alert-success mt-4">
                                        <h5>💡 Recuerde:</h5>
                                        <p class="mb-0">Al seguir estos pasos no solo protege su información personal, sino que también contribuye a combatir estas prácticas fraudulentas y evitar que más personas caigan en este tipo de engaños.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'ejemplos': {
            title: 'Métodos Reales de Phishing',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <h3 class="mb-4 text-center">Métodos más comunes de Phishing:</h3>
                            
                            <!-- Método 1: SMS -->
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Método 1: SMS Fraudulentos</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <img src="images/sms.png" alt="Ejemplo de SMS phishing" class="img-fluid rounded shadow mb-3">
                                        </div>
                                        <div class="col-md-6">
                                            <h5>¿Cómo funciona este método?</h5>
                                            <ol class="text-muted mb-4">
                                                <li>Envían SMS masivos haciéndose pasar por bancos o servicios</li>
                                                <li>Usan mensajes que generan urgencia o miedo</li>
                                                <li>Incluyen enlaces cortos que ocultan la URL real</li>
                                                <li>Al hacer clic, redirigen a sitios falsos idénticos al original</li>
                                            </ol>
                                            <div class="alert alert-warning">
                                                <strong>¡Cuidado!</strong> Estos mensajes suelen alertar sobre:
                                                <ul>
                                                    <li>Bloqueo de cuentas</li>
                                                    <li>Activación de tarjetas</li>
                                                    <li>Premios o reembolsos pendientes</li>
                                                    <li>Verificación de identidad urgente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="alert alert-info mt-4">
                                        <h5>Cómo verificar URLs:</h5>
                                        <div class="url-comparison mb-3">
                                            <p class="text-danger">❌ Falso: https://www.entelcss.cl</p>
                                            <p class="text-success">✅ Real: https://www.entel.cl</p>
                                        </div>
                                        <ul>
                                            <li>Verifica siempre la URL completa antes de ingresar datos</li>
                                            <li>Los estafadores usan nombres similares a sitios legítimos</li>
                                            <li>Si tienes dudas, busca la URL oficial en Google</li>
                                            <li>El candado HTTPS no garantiza que el sitio sea legítimo</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Método 2: Correos -->
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Método 2: Correos Fraudulentos</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <img src="images/correo.png" alt="Ejemplo de correo phishing" class="img-fluid rounded shadow mb-3">
                                        </div>
                                        <div class="col-md-6">
                                            <h5>¿Cómo funciona este método?</h5>
                                            <ol class="text-muted mb-4">
                                                <li>Crean correos que imitan perfectamente a empresas reales</li>
                                                <li>Usan logos y formatos oficiales para ganar confianza</li>
                                                <li>Incluyen enlaces que parecen legítimos pero son falsos</li>
                                                <li>Solicitan verificar o actualizar información sensible</li>
                                            </ol>
                                            <div class="alert alert-warning">
                                                <strong>Tácticas comunes:</strong>
                                                <ul>
                                                    <li>Problemas de seguridad falsos</li>
                                                    <li>Actualizaciones de datos urgentes</li>
                                                    <li>Confirmación de transacciones sospechosas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Método 3: Netflix -->
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h4 class="mb-0">Método 3: Correos Fraudulentos de Netflix</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <img src="images/netflix.png" alt="Ejemplo de correo phishing de Netflix" class="img-fluid rounded shadow mb-3">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="alert alert-danger mb-4">
                                                <h5>⚠️ Cómo funciona este engaño:</h5>
                                                <p>Los estafadores envían correos falsos imitando perfectamente el diseño oficial de Netflix, usando logotipos y colores idénticos para ganar tu confianza.</p>
                                            </div>

                                            <div class="alert alert-warning">
                                                <h6>🚩 Señales de alarma:</h6>
                                                <ul>
                                                    <li>Mensajes sobre "problemas con tu pago"</li>
                                                    <li>Solicitudes de "actualizar forma de pago"</li>
                                                    <li>Alertas de "cuenta suspendida"</li>
                                                    <li>Presión para actuar inmediatamente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="alert alert-info mt-4">
                                        <h5>🔍 Uso de Enlaces Manipulados:</h5>
                                        <p class="mb-3">Los estafadores utilizan una técnica engañosa con los enlaces:</p>
                                        <div class="card bg-light mb-3">
                                            <div class="card-body">
                                                <h6>👆 Lo que ves al hacer clic:</h6>
                                                <p class="text-success mb-2">www.netflix.com/YourAccountPayment</p>
                                                <h6>👀 La URL real al pasar el cursor:</h6>
                                                <p class="text-danger">https://www.netflix.ml/worldd****/Login.php</p>
                                            </div>
                                        </div>
                                        <div class="alert alert-warning">
                                            <h6>⚠️ ¿Por qué es peligroso?</h6>
                                            <ul>
                                                <li>El texto del enlace parece legítimo para ganar tu confianza</li>
                                                <li>La URL real está oculta hasta que pasas el cursor</li>
                                                <li>Usan dominios similares (.ml en vez de .com)</li>
                                                <li>La página falsa puede robar tus datos personales</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="card bg-light mt-4">
                                        <div class="card-body">
                                            <h5 class="text-danger">📌 ¿Qué hacer si recibes este correo?</h5>
                                            <ol>
                                                <li>No hagas clic en ningún enlace del correo</li>
                                                <li>Accede a Netflix escribiendo manualmente netflix.com en tu navegador</li>
                                                <li>Contacta directamente con el servicio al cliente de Netflix</li>
                                                <li>Reporta el correo fraudulento para ayudar a otros usuarios</li>
                                            </ol>
                                            <p class="text-muted mb-0"><strong>Recuerda:</strong> Netflix nunca te pedirá información sensible por correo electrónico.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Verificación de Autenticidad -->
                            <div class="card mb-4">
                                <div class="card-header bg-info text-white">
                                    <h4 class="mb-0">¿Cómo verificar si es legítimo?</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="alert alert-warning mb-4">
                                                <h5>🚨 Ante la duda, verifica</h5>
                                                <p>Si recibes un mensaje o correo sospechoso, sigue estos pasos:</p>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <h5>✅ Qué hacer:</h5>
                                                    <ul class="list-group mb-4">
                                                        <li class="list-group-item">
                                                            <strong>1.</strong> Busca el número oficial de la empresa en Google
                                                        </li>
                                                        <li class="list-group-item">
                                                            <strong>2.</strong> Llama directamente a la empresa para confirmar
                                                        </li>
                                                        <li class="list-group-item">
                                                            <strong>3.</strong> Reporta el intento de phishing a la empresa
                                                        </li>
                                                        <li class="list-group-item">
                                                            <strong>4.</strong> Guarda capturas de pantalla como evidencia
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <h5>❌ Qué NO hacer:</h5>
                                                    <ul class="list-group">
                                                        <li class="list-group-item text-danger">
                                                            No uses números proporcionados en el mensaje
                                                        </li>
                                                        <li class="list-group-item text-danger">
                                                            No hagas clic en ningún enlace del mensaje
                                                        </li>
                                                        <li class="list-group-item text-danger">
                                                            No proporciones información personal
                                                        </li>
                                                        <li class="list-group-item text-danger">
                                                            No ignores mensajes sospechosos sin reportarlos
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="alert alert-success mt-4">
                                                <h5>💡 Recuerda:</h5>
                                                <p class="mb-0">Es mejor perder unos minutos verificando que ser víctima de una estafa. 
                                                Las empresas legítimas agradecerán tu reporte de intentos de phishing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'origen': {
            title: '¿Por qué se llama Phishing?',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h4 class="mb-4">El origen del nombre 🎣</h4>
                                    <p class="fs-5">La palabra "phishing" viene de "fishing" (pescar), pero con una "ph" al estilo de los hackers de los 90.</p>
                                    
                                    <div class="alert alert-info mt-4">
                                        <h5>¿Por qué pescar? 🎣</h5>
                                        <p>La idea es que los ciberdelincuentes "lanzan un anzuelo" digital para engañar a las personas y que revelen datos importantes, como si fueran peces mordiendo un cebo.</p>
                                    </div>

                                    <div class="alert alert-warning mt-4">
                                        <h5>Un dato curioso 💡</h5>
                                        <p>El cambio de "f" por "ph" era común en la cultura hacker de los años 90, como un guiño a la palabra "phone phreaking", que se refería a la piratería telefónica.</p>
                                    </div>

                                    <p class="text-muted mt-4">¡Así de creativos y tramposos pueden ser los ciberdelincuentes!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'correos': {
            title: 'Correos Electrónicos Fraudulentos',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h4>Ejemplo de Correo Fraudulento:</h4>
                                    <img src="images/correo.png" alt="Ejemplo de correo phishing" class="img-fluid mb-3 rounded shadow">
                                    
                                    <div class="alert alert-warning mt-4">
                                        <h5>⚠️ Características típicas:</h5>
                                        <ul>
                                            <li>Enlaces con textos engañosos como "Haga clic acá"</li>
                                            <li>La URL real se oculta tras textos como "Activar tarjeta"</li>
                                            <li>Mensajes alarmantes y amenazantes</li>
                                            <li>Presión para actuar rápidamente</li>
                                        </ul>
                                    </div>

                                    <div class="alert alert-info mt-4">
                                        <h5>🛡️ ¿Qué hacer si recibes un correo sospechoso?</h5>
                                        <ol>
                                            <li>No hagas clic en ningún enlace del correo</li>
                                            <li>Llama directamente a la empresa para verificar</li>
                                            <li>Si es falso, repórtalo a la empresa afectada</li>
                                            <li>Marca el correo como spam</li>
                                        </ol>
                                    </div>

                                    <p class="text-danger mt-4">
                                        <strong>Recuerda:</strong> Las empresas legítimas nunca te amenazarán 
                                        con cancelar servicios por no hacer clic en un enlace.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'dudas': {
            title: '¿No estás seguro si es phishing?',
            content: `
                <div class="container py-4">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="card mb-4">
                                <div class="card-header bg-info text-white">
                                    <h4 class="mb-0">Pasos a seguir si tienes dudas</h4>
                                </div>
                                <div class="card-body">
                                    <div class="alert alert-warning mb-4">
                                        <h5>🚨 ¡No actúes de inmediato!</h5>
                                        <p>Si recibiste un mensaje sospechoso, toma un momento para verificar su autenticidad.</p>
                                    </div>

                                    <ol class="fs-5 mb-4">
                                        <li class="mb-3">
                                            <strong>Busca el número oficial:</strong>
                                            <ul>
                                                <li>Busca en Google el número oficial de la empresa</li>
                                                <li>Verifica en el sitio web oficial de la empresa</li>
                                                <li>No uses números proporcionados en el mensaje sospechoso</li>
                                            </ul>
                                        </li>
                                        <li class="mb-3">
                                            <strong>Contacta a la empresa:</strong>
                                            <ul>
                                                <li>Llama desde el número oficial verificado</li>
                                                <li>Pregunta si han enviado ese mensaje o correo</li>
                                                <li>No menciones datos sensibles durante la llamada</li>
                                            </ul>
                                        </li>
                                        <li class="mb-3">
                                            <strong>Reporta el incidente:</strong>
                                            <ul>
                                                <li>Informa a la empresa sobre el intento de phishing</li>
                                                <li>Guarda capturas de pantalla como evidencia</li>
                                                <li>Marca el correo como spam si es el caso</li>
                                            </ul>
                                        </li>
                                    </ol>

                                    <div class="alert alert-success">
                                        <h5>💡 Recuerda:</h5>
                                        <p>Es mejor perder unos minutos verificando que ser víctima de una estafa. Las empresas legítimas agradecerán tu reporte de intentos de phishing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    };

    // Agregar el overlay al body
    document.body.innerHTML += `
        <div id="fullscreen-overlay" class="overlay">
            <div class="overlay-content">
                <div class="overlay-header">
                    <h2 class="overlay-title"></h2>
                    <button class="close-btn" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="overlay-body"></div>
            </div>
        </div>
    `;

    const overlay = document.getElementById('fullscreen-overlay');
    const closeBtn = document.querySelector('.close-btn');
    let scrollPosition = 0;

    function showOverlay(type) {
        const info = phishingInfo[type];
        
        // Guardar posición del scroll antes de bloquear
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Bloquear scroll del body
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        
        // Mostrar y animar overlay
        overlay.style.display = 'block';
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        // Actualizar contenido
        document.querySelector('.overlay-title').innerHTML = info.title;
        document.querySelector('.overlay-body').innerHTML = info.content;
    }

    function closeOverlay() {
        // Remover clase active
        overlay.classList.remove('active');
        
        // Restaurar scroll
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);
        
        // Ocultar overlay después de la animación
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }

    // Event Listeners
    document.querySelectorAll('.info-btn').forEach(button => {
        button.addEventListener('click', function() {
            showOverlay(this.getAttribute('data-type'));
        });
    });

    closeBtn.addEventListener('click', closeOverlay);

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    // Prevenir scroll del body cuando el overlay está activo
    overlay.addEventListener('wheel', (e) => {
        const overlayContent = overlay.querySelector('.overlay-content');
        const scrollTop = overlayContent.scrollTop;
        const scrollHeight = overlayContent.scrollHeight;
        const height = overlayContent.clientHeight;

        // Permitir scroll solo dentro del contenido del overlay
        if ((scrollTop === 0 && e.deltaY < 0) || 
            (scrollTop + height >= scrollHeight && e.deltaY > 0)) {
            e.preventDefault();
        }
    });
});
