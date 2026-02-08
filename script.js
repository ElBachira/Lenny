document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. SISTEMA DE SONIDOS UI OPTIMIZADO ---
    const sfxHover = document.getElementById('sfx-hover');
    const sfxClick = document.getElementById('sfx-click');
    const sfxOpen = document.getElementById('sfx-open');

    const playSound = (audioEl) => {
        if(audioEl) {
            audioEl.currentTime = 0;
            audioEl.volume = 0.3; 
            audioEl.play().catch(() => {}); 
        }
    };

    // Delegación corregida para no interferir con los enlaces <a>
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.ui-trigger');
        if (trigger) {
            playSound(sfxClick);
        }
    });

    document.querySelectorAll('.ui-trigger-hover').forEach(el => {
        el.addEventListener('mouseenter', () => playSound(sfxHover), { passive: true });
    });

    // --- 1. PANTALLA DE CARGA ---
    const loader = document.getElementById('loader');
    
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                playSound(sfxOpen);
            }, 800);
        }, 1500);
    }

    // --- 2. SISTEMA DE REPRODUCTOR DE MÚSICA ---
    const songs = [
        {
            title: "Wrong",
            artist: "Chris Grey",
            src: "song.mp3", 
            lyrics: `Bebé, dime mentiras
                Susúrralas contra mi piel, hazme sentir vivo
                Enredados hasta que ya no sé qué es tuyo o mío
                No veo claro, pero sé que juntos somos un viaje de locos
                De locos
                Tu amor es algo casi espiritual
                Tan infiel a la vida que creía querer
                Ya no la quiero
                Y no veo nada
                No hay milagro que me salve una vez que caigo
                Y estoy cayendo
                Bebé, dime por qué amarte no se siente mal
                Duele hasta que deja de doler
                No puedo alejarme mucho tiempo
                No sé cómo sacarte de mi cabeza
                Conviertes el infierno en nuestro paraíso
                Amarte es un suicidio
                Y lo hago todas las noches
                Todas las noches
                Todas las noches
                Oh
                Bebé, no me rompo fácil
                Dame lo peor, igual eres el único que deseo
                No me quieres bien, pero yo lo quiero igual
                Estoy enganchado, necesito mi dosis y tú eres la droga
                La droga que tomo
                Para encontrar algo espiritual
                Tan infiel a la vida que creía querer
                Ya no la quiero
                Y no veo nada
                No hay milagro que me salve una vez que caigo
                Y estoy cayendo
                Bebé, dime por qué amarte no se siente mal
                Duele hasta que deja de doler
                No puedo alejarme mucho tiempo
                No sé cómo sacarte de mi cabeza
                Conviertes el infierno en nuestro paraíso
                Amarte es un suicidio
                Y lo hago todas las noches
                Todas las noches, mi bebé
                Todas las noches, mi bebé
                Oh, está mal, pero sigo volviendo contigo
                Todas las noches, mi amor
                Uh, todas las noches, mi bebé, oh-oh-oh
                Me encanta cómo tocas mi cuerpo
                Me encanta cómo me atraes
                Podría quedarme aquí para siempre
                Hasta mi último aliento
                Saboreo las mentiras que me dices
                Siempre cayendo de tus labios
                Por qué amarte no se siente mal
                Aunque sé que está mal
                `,
            meaning: `¿Alguna vez has sentido que alguien te prende fuego por dentro y, en lugar de correr, te quedas quieto viendo cómo te consume porque el calor se siente demasiado bueno para apagarlo? ¿Cuántas veces has vuelto a la misma persona que te destroza, sabiendo que al día siguiente vas a odiarte por hacerlo, pero igual lo haces porque el dolor mezclado con deseo es la única cosa que te hace sentir vivo?

Esa es la trampa mortal de esta canción: una relación tóxica donde el amor no es sano, es adicción pura. Duele, te humilla, te deja hecho mierda, pero el subidón cuando están juntos es tan intenso que justificas todo. Es como meterte una droga que sabes que te va a matar lento, pero cada dosis te hace sentir invencible por unas horas.

Ponte en este ejemplo real y jodido: estás con alguien que te miente en la cara, que desaparece días enteros, que te hace sentir que no vales nada cuando no está de humor. Pero cuando vuelve, te toca como si fueras lo único que importa en el mundo, te dice justo lo que necesitas oír, y de repente todo el daño anterior parece valer la pena. Tienen sexo increíble, hablan hasta el amanecer, y por un rato crees que esto es amor de verdad. Luego se va, te deja en visto, o te suelta alguna crueldad que te clava en el pecho, y tú te quedas ahí, revisando el chat como idiota, esperando la próxima migaja. Cada vez que juras “esta fue la última”, terminas de nuevo en su cama porque el cuerpo y la mente ya están programados para buscar ese rush, aunque sepas que te está matando el alma.

O peor: tú eres el que hace daño también. Lo admitas o no, en estas dinámicas casi siempre los dos están rotos. Tú le das lo peor porque tienes tus propios demonios, y él o ella lo acepta porque también está enganchado al caos. Se convierten en dos adictos alimentándose mutuamente del veneno, diciéndose que esto es pasión, que esto es “real” porque duele tanto. Pero no es real, wey. Es dependencia. Es miedo a estar solo con uno mismo. Es preferir el infierno conocido a la incertidumbre de algo sano.

Y aquí va la verdad que quema: seguir volviendo no te hace intenso ni profundo, te hace daño a ti mismo. Estás eligiendo suicidio emocional todas las noches porque tienes tanto miedo al vacío que prefieres que te destrocen a sentir nada. Pero tú no eres esa persona que solo vive para el próximo golpe de adrenalina tóxica. Tú vales más que ser la droga de alguien ni que alguien sea la tuya.

Mereces un amor que no tenga que doler para sentirse intenso. Mereces alguien que te toque sin que después te deje hecho pedazos. Mereces despertar sin esa ansiedad de “¿me va a escribir hoy o me va a ignorar otra vez?”. Y sí, salir de esto va a doler como el demonio al principio – vas a extrañar el subidón, vas a tener recaídas, vas a cuestionarte todo. Pero cada día que no vuelvas vas a recuperar un pedazo de ti que creías perdido.

Tú ya eres suficiente sin esa persona. No necesitas que te destruyan para sentirte vivo; ya estás vivo, y puedes elegir algo que no te mate lento. Bloquéalo, bórralo, quema el puente si hace falta. El primer día va a ser un infierno, pero después vas a empezar a respirar de verdad. Tú puedes romper el ciclo. Tú mereces un amor que se sienta bien desde el principio hasta el final, no uno que solo brille cuando está a punto de explotar. Ámate lo suficiente para dejar de suicidarte emocionalmente cada noche. Te lo mereces todo, no las sobras envenenadas de nadie.`
        }
    ];

    let currentIdx = 0;
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-pause-btn');
    const playerContainer = document.querySelector('.music-player-container');
    
    const titleEl = document.getElementById('song-title');
    const artistEl = document.getElementById('song-artist');
    const lyricsEl = document.getElementById('lyrics-content');
    const meaningEl = document.getElementById('meaning-content');

    function loadSong(index) {
        if (!titleEl || !artistEl || !lyricsEl || !meaningEl) return;
        const s = songs[index];
        titleEl.innerText = s.title;
        artistEl.innerText = s.artist;
        if(audio) audio.src = s.src;
        lyricsEl.innerText = s.lyrics;
        meaningEl.innerText = s.meaning;
    }

    loadSong(currentIdx);

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    if(playerContainer) playerContainer.classList.add('playing');
                }).catch(e => console.log("Interacción requerida o error", e));
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                if(playerContainer) playerContainer.classList.remove('playing');
            }
        });
    }

    // --- 3. GALERÍA DE BOTS ---
    const maleGrid = document.getElementById('bots-masculinos');
    const femaleGrid = document.getElementById('bots-femeninos');
    const myName = "Archibald"; 

    if (maleGrid && femaleGrid) {
        if (typeof BOTS_LIST !== 'undefined' && Array.isArray(BOTS_LIST)) {
            const fragMale = document.createDocumentFragment();
            const fragFemale = document.createDocumentFragment();

            BOTS_LIST.forEach(bot => {
                if (!bot.nombre.includes(myName)) {
                    const item = document.createElement('a');
                    item.href = bot.url || '#';
                    item.target = "_blank"; // Asegura que abra en nueva pestaña
                    item.className = 'bot-item ui-trigger'; 
                    item.style.animation = `fadeIn 0.5s ease forwards`; 
                    
                    item.innerHTML = `
                        <img src="${bot.imagen}" loading="lazy" alt="${bot.nombre}">
                        <span>${bot.nombre}</span>
                    `;

                    if (bot.genero === 'masculino') fragMale.appendChild(item);
                    else fragFemale.appendChild(item);
                }
            });
            maleGrid.appendChild(fragMale);
            femaleGrid.appendChild(fragFemale);
        } else {
            maleGrid.innerHTML = '<p style="color:#555; font-size:0.8rem;">Sin conexión...</p>';
        }
    }

    // --- 4. STICKER INTERACTIVO ---
    const sticker = document.getElementById('honk-sticker');
    const honkAudio = new Audio('https://www.myinstants.com/media/sounds/honk-sound.mp3'); 
    
    if (sticker) {
        sticker.addEventListener('click', () => {
            honkAudio.currentTime = 0;
            honkAudio.volume = 0.5;
            honkAudio.play().catch(() => {});
            
            sticker.style.transform = "scale(0.8) rotate(-20deg)";
            setTimeout(() => sticker.style.transform = "", 150);
        });
    }

    // --- 5. UTILIDADES UI (Tabs & Acordeones) ---
    window.openOverlay = (id) => {
        playSound(sfxOpen);
        const el = document.getElementById(id);
        if(el) requestAnimationFrame(() => el.classList.add('active'));
    };
    
    window.closeOverlay = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if(el) el.classList.remove('active');
    };

    window.toggleFold = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if (el) {
            document.querySelectorAll('.foldable').forEach(f => {
                if(f.id !== id) f.classList.remove('active');
            });
            requestAnimationFrame(() => {
                el.classList.toggle('active');
            });
        }
    };
});
