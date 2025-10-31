const translations = {
    ru: {
        home: "Главная",
        documentation: "Документация",
        blog: "Блог",
        settings: "Настройки",
        tab_appearance: "Оформление",
        // tab_general: "Общие", // Удалено
        // tab_sound: "Звук", // Удалено
        theme: "Тема оформления",
        theme_default: "Космическая",
        theme_gorebox: "GoreBox",
        theme_programmer: "Cozy",
        language: "Язык", // Используется для вкладки
        font: "Шрифт",
        font_default: "Segoe UI",
        font_wes_fy_black: "Wes FY Black",
        layout: "Расположение функций",
        two_columns: "Две колонки",
        // music: "Фоновая музыка", // Удалено
        // play_music: "Включить музыку", // Удалено
        // stop_music: "Выключить музыку", // Удалено
        visual_effects: "Визуальные эффекты",
        effects_enable: "Включить эффекты",
        effects_note: "Отключение может улучшить производительность.",
        lifecycle: "Жизненный цикл",
        global_functions: "Основные функции",
        gui_functions: "Функции GUI",
        resources: "Ресурсы",
        gameobject: "Объекты",
        transform: "Трансформы",
        physics: "Физика",
        audio: "Аудио",
        camera: "Камера",
        input: "Ввод",
        hero_subtitle: "Полная документация по созданию модов с помощью Lua скриптов. Создавайте свои игровые механики, предметы и многое другое.",
        start_learning: "Начать изучение",
        read_blog: "Читать блог",
        quick_start: "Быстрый старт",
        first_script: "Создание первого скрипта",
        first_script_desc: "Начните с создания простого Lua модуля для управления объектами в игре.",
        working_objects: "Работа с объектами",
        working_objects_desc: "Используйте функции для поиска и изменения игровых объектов.",
        latest_news: "Последние новости",
        copy_documentation: "Скопировать всю документацию",
        docs_copied: "Скопировано!",
        search_placeholder: "Поиск по документации...",
        badge_original: "Оригинал",

       
        desc_awake: "Инициализация Lua-среды перед запуском.",
        desc_start: "Вызывается при старте скрипта.",
        desc_update: "Обновление каждый кадр.",
        desc_late_update: "Выполняется после update().",
        desc_fixed_update: "Срабатывает с фиксированным интервалом (для физики).",
        desc_gui_update: "Используется для отрисовки GUI.",
        desc_onRPC: "Обрабатывает сетевые сообщения.",

        desc_log: "Выводит текст в консоль Unity.",
        desc_getModRoot: "Возвращает путь к папке мода.",
        desc_getDeltaTime: "Возвращает время между кадрами.",
        desc_getTime: "Возвращает время с начала игры.",
        desc_getLocalPlayer: "Возвращает объект (ID) игрока.",

        desc_gui_label: "Отображает текст.",
        desc_gui_space: "Отступ между элементами.",
        desc_gui_box: "Отображает изображение (текстуру).",
        desc_gui_button: "Кнопка, <span class=\"highlight\">возвращает true</span>, если нажата.",
        desc_gui_textField: "Поле ввода, <span class=\"highlight\">возвращает</span> измененный текст.",
        desc_gui_verticalSlider: "Вертикальный слайдер.",
        desc_gui_horizontalSlider: "Горизонтальный слайдер.",
        desc_gui_beginVertical: "Вертикальная группа элементов.",
        desc_gui_beginHorizontal: "Горизонтальная группа элементов.",

        desc_texture_load: "Загружает текстуру (<span class=\"highlight\">возвращает ID</span>).",
        desc_material_create: "Создает материал с текстурой (<span class=\"highlight\">возвращает ID</span>).",
        desc_material_createWithShader: "Создает материал с шейдером (<span class=\"highlight\">возвращает ID</span>).",
        desc_material_setColor: "Изменяет цвет материала.",
        desc_material_getColor: "<span class=\"highlight\">Возвращает</span> цвет (r, g, b, a).",
        desc_model_load: "Загружает 3D-модель (<span class=\"highlight\">возвращает ID</span>).",
        desc_gameObject_createWithModel: "Создает объект с моделью и текстурой (<span class=\"highlight\">возвращает ID</span>).",
        desc_audioClip_load: "Загружает аудио (<span class=\"highlight\">возвращает ID</span>).",

        desc_gameObject_create: "Создает новый пустой объект (<span class=\"highlight\">возвращает ID</span>).",
        desc_gameObject_find: "Ищет объект по имени (<span class=\"highlight\">возвращает ID</span>).",
        desc_gameObject_destroy: "Удаляет объект.",
        desc_gameObject_getTransform: "<span class=\"highlight\">Возвращает</span> Transform (ID) объекта.",
        desc_gameObject_setName: "Задает имя объекту.",
        desc_gameObject_setActive: "Активирует или деактивирует объект.",
        desc_gameObject_instantiate: "Клонирует объект (<span class=\"highlight\">возвращает ID</span> клона).",

        desc_transform_getPosition: "<span class=\"highlight\">Возвращает</span> позицию (x, y, z).",
        desc_transform_setPosition: "Устанавливает позицию.",
        desc_transform_translate: "Сдвигает объект (локально).",
        desc_transform_rotate: "Вращает объект.",
        desc_transform_lookAt: "Направляет объект на точку.",
        desc_transform_getForward: "<span class=\"highlight\">Возвращает</span> направление 'вперёд' (x, y, z).",
        
        desc_rigidbody_setVelocity: "Устанавливает скорость (<span class=\"highlight\">ID</span> объекта, не Rigidbody).",
        desc_rigidbody_addForce: "Прикладывает силу к объекту.",
        desc_rigidbody_setUseGravity: "Включает/выключает гравитацию.",
        desc_physics_raycast: "Пускает луч, <span class=\"highlight\">возвращает bool</span> (попал или нет).",
        desc_physics_overlapSphere: "<span class=\"highlight\">Возвращает таблицу ID</span> объектов в сфере.",

        desc_audioSource_play: "Воспроизводит звук (<span class=\"highlight\">ID</span> объекта с AudioSource).",
        desc_audioSource_stop: "Останавливает звук.",
        desc_audioSource_setVolume: "Устанавливает громкость (0.0 - 1.0).",
        desc_audioSource_isPlaying: "Проверяет, воспроизводится ли звук (<span class=\"highlight\">возвращает bool</span>).",

        desc_camera_setFieldOfView: "Устанавливает угол обзора (FOV).",
        desc_camera_worldToScreenPoint: "Мировые → экранные координаты (<span class=\"highlight\">возвращает</span> x, y, z).",
        desc_camera_screenToWorldPoint: "Экранные → мировые координаты (<span class=\"highlight\">возвращает</span> x, y, z).",

        desc_input_getKey: "Проверка, зажата ли клавиша (<span class=\"highlight\">возвращает bool</span>).",
        desc_input_getKeyDown: "Проверка нажатия клавиши (<span class=\"highlight\">возвращает bool</span>, срабатывает 1 раз).",
        desc_input_getMouse: "Нажатие кнопки мыши (<span class=\"highlight\">0=LMB, 1=RMB, 2=MMB</span>).",
        desc_input_getAxis: "<span class=\"highlight\">Возвращает</span> значение оси (напр., 'Mouse X', 'Vertical').",
        desc_input_setMouseLock: "Управление блокировкой курсора.",

        comment_game_logic: "-- Логика игры здесь",
        comment_camera_logic: "-- Логика камеры часто здесь",
        comment_physics_logic: "-- Логика физики здесь",
        comment_set_red: "-- Установить красный цвет",
        comment_hide_player: "-- Спрятать игрока",
        comment_teleport_roof: "-- Телепорт на крышу",
        comment_move_forward: "-- Движение вперед",
        comment_rotate_y: "-- Вращение по оси Y",
        comment_look_center: "-- Смотреть в центр мира",
        comment_jump: "-- Подпрыгнуть",
        comment_push_forward: "-- Толкнуть вперед",
        comment_fly_mode: "-- Режим полета",
        comment_z_depth: "-- z - это глубина от камеры",
        comment_show_cursor: "-- Показать курсор (для меню)"
    },
    en: {
        home: "Home",
        documentation: "Documentation",
        blog: "Blog",
        settings: "Settings",
        tab_appearance: "Appearance",
        // tab_general: "General", // Удалено
        // tab_sound: "Sound", // Удалено
        theme: "Theme",
        theme_default: "Cosmic",
        theme_gorebox: "GoreBox",
        theme_programmer: "Cozy",
        language: "Language", // Используется для вкладки
        font: "Font",
        font_default: "Segoe UI",
        font_wes_fy_black: "Wes FY Black",
        layout: "Function Layout",
        two_columns: "Two Columns",
        // music: "Background Music", // Удалено
        // play_music: "Play Music", // Удалено
        // stop_music: "Stop Music", // Удалено
        visual_effects: "Visual Effects",
        effects_enable: "Enable Effects",
        effects_note: "Disabling may improve performance.",
        lifecycle: "Lifecycle",
        global_functions: "Global Functions",
        gui_functions: "GUI Functions",
        resources: "Resources",
        gameobject: "GameObjects",
        transform: "Transforms",
        physics: "Physics",
        audio: "Audio",
        camera: "Camera",
        input: "Input",
        hero_subtitle: "Complete documentation for creating mods using Lua scripts. Create your own game mechanics, items and more.",
        start_learning: "Start Learning",
        read_blog: "Read Blog",
        quick_start: "Quick Start",
        first_script: "Creating First Script",
        first_script_desc: "Start by creating a simple Lua module to manage objects in the game.",
        working_objects: "Working with Objects",
        working_objects_desc: "Use functions to find and modify game objects.",
        latest_news: "Latest News",
        copy_documentation: "Copy All Documentation",
        docs_copied: "Copied!",
        search_placeholder: "Search documentation...",
        badge_original: "Original",

        desc_awake: "Lua environment initialization before launch.",
        desc_start: "Called when the script starts.",
        desc_update: "Updates every frame.",
        desc_late_update: "Executes after update().",
        desc_fixed_update: "Triggers at a fixed interval (for physics).",
        desc_gui_update: "Used for rendering GUI.",
        desc_onRPC: "Handles network messages.",

        desc_log: "Prints text to the Unity console.",
        desc_getModRoot: "Returns the path to the mod's folder.",
        desc_getDeltaTime: "Returns the time between frames.",
        desc_getTime: "Returns the time since the game started.",
        desc_getLocalPlayer: "Returns the player's object (ID).",

        desc_gui_label: "Displays text.",
        desc_gui_space: "Space between elements.",
        desc_gui_box: "Displays an image (texture).",
        desc_gui_button: "Button, <span class=\"highlight\">returns true</span> if pressed.",
        desc_gui_textField: "Input field, <span class=\"highlight\">returns</span> the modified text.",
        desc_gui_verticalSlider: "Vertical slider.",
        desc_gui_horizontalSlider: "Horizontal slider.",
        desc_gui_beginVertical: "Vertical group of elements.",
        desc_gui_beginHorizontal: "Horizontal group of elements.",

        desc_texture_load: "Loads a texture (<span class=\"highlight\">returns ID</span>).",
        desc_material_create: "Creates a material with a texture (<span class=\"highlight\">returns ID</span>).",
        desc_material_createWithShader: "Creates a material with a shader (<span class=\"highlight\">returns ID</span>).",
        desc_material_setColor: "Changes the material's color.",
        desc_material_getColor: "<span class=\"highlight\">Returns</span> the color (r, g, b, a).",
        desc_model_load: "Loads a 3D model (<span class=\"highlight\">returns ID</span>).",
        desc_gameObject_createWithModel: "Creates an object with a model and texture (<span class=\"highlight\">returns ID</span>).",
        desc_audioClip_load: "Loads an audio clip (<span class=\"highlight\">returns ID</span>).",

        desc_gameObject_create: "Creates a new empty object (<span class=\"highlight\">returns ID</span>).",
        desc_gameObject_find: "Finds an object by name (<span class=\"highlight\">returns ID</span>).",
        desc_gameObject_destroy: "Destroys an object.",
        desc_gameObject_getTransform: "<span class=\"highlight\">Returns</span> the object's Transform (ID).",
        desc_gameObject_setName: "Sets the object's name.",
        desc_gameObject_setActive: "Activates or deactivates an object.",
        desc_gameObject_instantiate: "Clones an object (<span class=\"highlight\">returns clone's ID</span>).",

        desc_transform_getPosition: "<span class=\"highlight\">Returns</span> the position (x, y, z).",
        desc_transform_setPosition: "Sets the position.",
        desc_transform_translate: "Moves the object (locally).",
        desc_transform_rotate: "Rotates the object.",
        desc_transform_lookAt: "Makes the object look at a point.",
        desc_transform_getForward: "<span class=\"highlight\">Returns</span> the forward direction (x, y, z).",

        desc_rigidbody_setVelocity: "Sets the velocity (<span class=\"highlight\">Object ID</span>, not Rigidbody).",
        desc_rigidbody_addForce: "Applies a force to the object.",
        desc_rigidbody_setUseGravity: "Enables/disables gravity.",
        desc_physics_raycast: "Casts a ray, <span class=\"highlight\">returns bool</span> (hit or not).",
        desc_physics_overlapSphere: "<span class=\"highlight\">Returns a table of object IDs</span> within a sphere.",

        desc_audioSource_play: "Plays a sound (<span class=\"highlight\">ID</span> of object with AudioSource).",
        desc_audioSource_stop: "Stops the sound.",
        desc_audioSource_setVolume: "Sets the volume (0.0 - 1.0).",
        desc_audioSource_isPlaying: "Checks if the sound is playing (<span class=\"highlight\">returns bool</span>).",

        desc_camera_setFieldOfView: "Sets the field of view (FOV).",
        desc_camera_worldToScreenPoint: "World → screen coordinates (<span class=\"highlight\">returns</span> x, y, z).",
        desc_camera_screenToWorldPoint: "Screen → world coordinates (<span class=\"highlight\">returns</span> x, y, z).",

        desc_input_getKey: "Checks if a key is held down (<span class=\"highlight\">returns bool</span>).",
        desc_input_getKeyDown: "Checks if a key was pressed down (<span class=\"highlight\">returns bool</span>, triggers once).",
        desc_input_getMouse: "Mouse button press (<span class=\"highlight\">0=LMB, 1=RMB, 2=MMB</span>).",
        desc_input_getAxis: "<span class=\"highlight\">Returns</span> the value of an axis (e.g., 'Mouse X', 'Vertical').",
        desc_input_setMouseLock: "Controls the cursor lock state.",

        comment_game_logic: "-- Game logic here",
        comment_camera_logic: "-- Camera logic often goes here",
        comment_physics_logic: "-- Physics logic here",
        comment_set_red: "-- Set red color",
        comment_hide_player: "-- Hide player",
        comment_teleport_roof: "-- Teleport to roof",
        comment_move_forward: "-- Move forward",
        comment_rotate_y: "-- Rotate on Y axis",
        comment_look_center: "-- Look at world center",
        comment_jump: "-- Jump",
        comment_push_forward: "-- Push forward",
        comment_fly_mode: "-- Fly mode",
        comment_z_depth: "-- z is depth from camera",
        comment_show_cursor: "-- Show cursor (for menu)"
    }
};


let currentLang = null;
// let selectedTrackId = '9XZPCAk4IYc'; // Удалено (музыка)

const typingTimers = new Map();

// ИЗМЕНЕНИЕ: Глобальная переменная для интервала комет
let cometInterval;

function typeAnimation(element, text) {
    if (typingTimers.has(element)) {
        clearTimeout(typingTimers.get(element));
        typingTimers.delete(element);
    }

    let i = 0;
    element.textContent = '';
    element.classList.add('typing-effect');

    const typing = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            const timer = setTimeout(typing, 15);
            typingTimers.set(element, timer);
        } else {
            element.classList.remove('typing-effect');
            typingTimers.delete(element);
        }
    };

    typing();
}

function changeLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;

    typingTimers.forEach((timer, element) => {
        clearTimeout(timer);
        element.classList.remove('typing-effect');
    });
    typingTimers.clear();

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            const newText = translations[lang][key];
            if (newText.includes('<')) {
                element.innerHTML = newText;
            } else {
                element.textContent = newText;
            }
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-translate-comment]').forEach(element => {
        const key = element.getAttribute('data-translate-comment');
        if (translations[lang] && translations[lang][key]) {
            const indent = element.getAttribute('data-indent') || '';
            const trailing = element.getAttribute('data-trailing') || '';
            element.textContent = indent + translations[lang][key] + trailing;
        }
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    localStorage.setItem('language', lang);

    loadBlogPreview();
    loadFullBlog();
}

function createStars() {
    const spaceBg = document.getElementById('spaceBackground');
    if (!spaceBg || document.body.classList.contains('effects-disabled')) return;
    
    // ИЗМЕНЕНИЕ: Оптимизация (уменьшено с 200)
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3;
        const starType = size < 1 ? 'small' : size < 2 ? 'medium' : 'large';

        star.classList.add('star', starType);
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 6}s`;

        spaceBg.appendChild(star);
    }
}

function createComets() {
    const spaceBg = document.getElementById('spaceBackground');
    if (!spaceBg || document.body.classList.contains('effects-disabled')) return;

    // ИЗМЕНЕНИЕ: Сохраняем ID интервала, чтобы его можно было остановить
    cometInterval = setInterval(() => {
        if (Math.random() < 0.4 && !document.body.classList.contains('effects-disabled')) {
            const duration = Math.random() * 2000 + 3000;

            const startX = Math.random() * 100;
            const startY = -5;
            const endX = startX + (Math.random() - 0.5) * 60;
            const endY = 105;

            const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

            const animationName = `fly-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
            const styleSheet = document.createElement("style");
            styleSheet.type = "text/css";
            styleSheet.innerText = `@keyframes ${animationName} { from { transform: translate(${startX}vw, ${startY}vh); } to { transform: translate(${endX}vw, ${endY}vh); } }`;
            
            // ИЗМЕНЕНИЕ: Добавляем data-attribute для поиска и удаления
            styleSheet.setAttribute('data-comet-style', 'true');
            document.head.appendChild(styleSheet);

            const head = document.createElement('div');
            head.className = 'comet-head';
            head.style.transform = `rotate(${angle}deg)`;
            head.style.animation = `${animationName} ${duration}ms linear forwards`;

            const trail = document.createElement('div');
            trail.className = 'comet-trail';
            trail.style.left = `${startX}vw`;
            trail.style.top = `${startY}vh`;
            trail.style.transform = `rotate(${angle}deg)`;
            trail.style.animation = `fadeOut 2s ease-out 0.2s forwards`;

            spaceBg.appendChild(trail);
            spaceBg.appendChild(head);

            setTimeout(() => {
                if (head.parentNode) head.remove();
                if (trail.parentNode) trail.remove();
                if (styleSheet.parentNode) styleSheet.remove();
            }, duration + 2000);
        }
    }, 2500);
}

function createBubbles() {
    const cityBg = document.getElementById('cityBackground');
    if (!cityBg || document.body.classList.contains('effects-disabled')) return;

    setInterval(() => {
        if (document.body.classList.contains('frutiger-aero') && Math.random() < 0.3 && !document.body.classList.contains('effects-disabled')) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';

            const size = Math.random() * 60 + 20;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDuration = `${Math.random() * 10 + 15}s`;

            cityBg.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.remove();
                }
            }, 20000);
        }
    }, 2000);
}

function createBloodEffect() {
    const container = document.getElementById('goreboxBackground');
    if (!container || document.body.classList.contains('effects-disabled')) return;

    // ИЗМЕНЕНИЕ: Оптимизация (уменьшено с 80)
    const pentagonCount = 40;
    const cornerDensity = 30;
    const cornerOffset = 5;

    for (let i = 0; i < pentagonCount; i++) {
        const pentagon = document.createElement('div');
        pentagon.className = 'blood-pentagon';

        if (i < pentagonCount / 2) {
            const top = Math.random() * cornerDensity - cornerOffset;
            const right = Math.random() * cornerDensity - cornerOffset;
            pentagon.style.top = `${top}vh`;
            pentagon.style.right = `${right}vw`;
        } else {
            const bottom = Math.random() * cornerDensity - cornerOffset;
            const left = Math.random() * cornerDensity - cornerOffset;
            pentagon.style.bottom = `${bottom}vh`;
            pentagon.style.left = `${left}vw`;
        }

        const size = Math.random() * 80 + 40;
        pentagon.style.width = `${size}px`;
        pentagon.style.height = `${size}px`;

        const startRotate = Math.random() * 360;
        const endRotate = startRotate + (Math.random() * 60 - 30);
        pentagon.style.setProperty('--r-start', `${startRotate}deg`);
        pentagon.style.setProperty('--r-end', `${endRotate}deg`);

        const duration = Math.random() * 20 + 25;
        const delay = Math.random() * -45;

        const driftType = `bloodDrift${Math.ceil(Math.random() * 3)}`;

        pentagon.style.animation = `
            ${driftType} ${duration}s ${delay}s infinite alternate ease-in-out,
            bloodFade ${duration * 0.7}s ${delay + (duration*0.1)}s infinite alternate ease-in-out
        `;

        container.appendChild(pentagon);
    }
}


function initParticles() {
    if (typeof particlesJS !== 'undefined' && !document.body.classList.contains('effects-disabled')) {
        // ИЗМЕНЕНИЕ: Оптимизация (уменьшено с 40)
        particlesJS('particles-js', { particles: { number: { value: 20, density: { enable: true, value_area: 800 } }, color: { value: "#6366f1" }, shape: { type: "circle" }, opacity: { value: 0.3, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, color: "#6366f1", opacity: 0.2, width: 1 }, move: { enable: true, speed: 1, direction: "none", random: true, out_mode: "out", bounce: false } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true } } });
    }
}

const blogPosts = [ { "id": "new-beginning", "title": { "ru": "Представляем новый Lua-моддинг для GoreBox!", "en": "Introducing the new Lua modding for GoreBox!" }, "summary": { "ru": "Начало чего-то грандиозного", "en": "The beginning of something big" }, "imageUrl": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", "content": { "ru": `<h1>Запуск Lua-моддинга и документации для GoreBox</h1><p><br></p><blockquote>Сообщаем о выходе нового моддинга на основе <strong>Lua </strong>для <strong>GoreBox</strong>. Этот инструмент позволит пользователям создавать собственные игровые элементы, включая механики и предметы</blockquote><p><br></p><h2>Техническая документация</h2><h2><br></h2><blockquote>Для поддержки моддеров мы подготовили техническую документацию, которая поможет в освоении скриптинга</blockquote><p><br></p><blockquote>Важно отметить, что документация будет регулярно обновляться. Мы планируем дополнять и изменять её на основе обратной связи от пользователей. Ваши предложения помогут сделать её более точной и понятной</blockquote><p><br></p><h2>Новости и обновления</h2><h2><br></h2><blockquote>Здесь будут публиковаться новости об изменениях в документации и улучшениях моддинга</blockquote>`, "en": `<h1><strong>Launch of Lua Modding and Documentation for GoreBox</strong></h1><p><br></p><blockquote>We are announcing the release of a new Lua-based modding system for GoreBox. This tool will allow users to create their own game elements, including mechanics and items</blockquote><p><br></p><h2><strong>Technical Documentation</strong></h2><p><br></p><blockquote>To support modders, we have prepared technical documentation that will help with learning the scripting process</blockquote><p><br></p><blockquote>It is important to note that the documentation will be updated regularly. We plan to supplement and change it based on user feedback. Your suggestions will help make it more accurate and understandable</blockquote><p><br></p><h2><strong>News and Updates</strong></h2><p><br></p><blockquote>News about changes to the documentation and improvements to the modding system will be published here</blockquote>` }, "date": "2025-09-13", "readTime": "1 min read" } ];

const functionsData = [
    { id: 'awake', name: 'awake()', descKey: 'desc_awake', code: 'function M.awake()\n    log("Module is awake!")\nend' },
    { id: 'start', name: 'start()', descKey: 'desc_start', code: 'function M.start()\n    log("Module has started!")\nend' },
    { id: 'update', name: 'update()', descKey: 'desc_update', code: 'function M.update()\n    --[[comment:game_logic]]\nend' },
    { id: 'late_update', name: 'late_update()', descKey: 'desc_late_update', code: 'function M.late_update()\n    --[[comment:camera_logic]]\nend' },
    { id: 'fixed_update', name: 'fixed_update()', descKey: 'desc_fixed_update', code: 'function M.fixed_update()\n    --[[comment:physics_logic]]\nend' },
    { id: 'gui_update', name: 'gui_update()', descKey: 'desc_gui_update', code: 'function M.gui_update()\n    gui.label("Hello from GUI!")\nend' },
    { id: 'onRPC', name: 'onRPC(message)', descKey: 'desc_onRPC', code: 'function M.onRPC(message)\n    if message == "Heal" then\n        log("Received Heal RPC")\n    end\nend' },

    { id: 'log', name: 'log(message)', descKey: 'desc_log', code: 'log("Mod started!")' },
    { id: 'getModRoot', name: 'getModRoot()', descKey: 'desc_getModRoot', code: 'local rootPath = getModRoot()\nlog("Mod path: " .. rootPath)' },
    { id: 'getDeltaTime', name: 'getDeltaTime()', descKey: 'desc_getDeltaTime', code: 'local dt = getDeltaTime()\ntransform:Translate(0, 0, 5 * dt)' },
    { id: 'getTime', name: 'time.getTime()', descKey: 'desc_getTime', code: 'local gameTime = time.getTime()\nlog("Game running for: " .. gameTime .. "s")' },
    { id: 'getLocalPlayer', name: 'getLocalPlayer()', descKey: 'desc_getLocalPlayer', code: 'local playerID = getLocalPlayer()\nlocal playerTransform = gameObject.getTransform(playerID)' },

    { id: 'gui_label', name: 'gui.label(text)', descKey: 'desc_gui_label', code: 'gui.label("Player Health: 100")' },
    { id: 'gui_space', name: 'gui.space(pixels)', descKey: 'desc_gui_space', code: 'gui.label("First line")\ngui.space(10)\ngui.label("Second line")' },
    { id: 'gui_box', name: 'gui.box(textureId, ...)', descKey: 'desc_gui_box', code: 'local myTexture = texture.load("images/icon.png")\ngui.box(myTexture, true)' },
    { id: 'gui_button', name: 'gui.button(text)', descKey: 'desc_gui_button', code: 'if gui.button("Click Me!") then\n    log("Clicked!")\nend' },
    { id: 'gui_textField', name: 'gui.textField(text)', descKey: 'desc_gui_textField', code: 'local inputText = "Hello"\ninputText = gui.textField(inputText)' },
    { id: 'gui_verticalSlider', name: 'gui.verticalSlider(value, min, max)', descKey: 'desc_gui_verticalSlider', code: 'local vSlider = 50\nvSlider = gui.verticalSlider(vSlider, 0, 100)' },
    { id: 'gui_horizontalSlider', name: 'gui.horizontalSlider(value, min, max)', descKey: 'desc_gui_horizontalSlider', code: 'local hSlider = 0.5\nhSlider = gui.horizontalSlider(hSlider, 0.0, 1.0)' },
    { id: 'gui_beginVertical', name: 'gui.beginVertical() / gui.endVertical()', descKey: 'desc_gui_beginVertical', code: 'gui.beginVertical()\ngui.label("Item 1")\ngui.label("Item 2")\ngui.endVertical()' },
    { id: 'gui_beginHorizontal', name: 'gui.beginHorizontal() / gui.endHorizontal()', descKey: 'desc_gui_beginHorizontal', code: 'gui.beginHorizontal()\ngui.label("Left")\ngui.label("Right")\ngui.endHorizontal()' },

    { id: 'texture_load', name: 'texture.load(path)', descKey: 'desc_texture_load', code: 'local texID = texture.load("images/my_texture.png")' },
    { id: 'material_create', name: 'material.create(texturePath)', descKey: 'desc_material_create', code: 'local matID = material.create("images/my_texture.png")' },
    { id: 'material_createWithShader', name: 'material.createWithShader(texturePath, shaderName)', descKey: 'desc_material_createWithShader', code: 'local glowMat = material.createWithShader("tex/glow.png", "Legacy Shaders/Additive")' },
    { id: 'material_setColor', name: 'material.setColor(id, prop, r, g, b, a)', descKey: 'desc_material_setColor', code: '--[[comment:set_red]]\nmaterial.setColor(matID, "_Color", 1, 0, 0, 1)' },
    { id: 'material_getColor', name: 'material.getColor(id, prop)', descKey: 'desc_material_getColor', code: 'local r, g, b, a = material.getColor(matID, "_Color")\nlog("Red: " .. r)' },
    { id: 'model_load', name: 'model.load(path)', descKey: 'desc_model_load', code: 'local modelID = model.load("models/my_model.obj")' },
    { id: 'gameObject_createWithModel', name: 'gameObject.createWithModel(name, model, texture)', descKey: 'desc_gameObject_createWithModel', code: 'local obj = gameObject.createWithModel("MyObject", "models/car.obj", "tex/car.png")' },
    { id: 'audioClip_load', name: 'audioClip.load(path)', descKey: 'desc_audioClip_load', code: 'local soundID = audioClip.load("sounds/shot.wav")' },

    { id: 'gameObject_create', name: 'gameObject.create(name)', descKey: 'desc_gameObject_create', code: 'local newObj = gameObject.create("EmptyHolder")' },
    { id: 'gameObject_find', name: 'gameObject.find(name)', descKey: 'desc_gameObject_find', code: 'local player = gameObject.find("MainPlayer")' },
    { id: 'gameObject_destroy', name: 'gameObject.destroy(id)', descKey: 'desc_gameObject_destroy', code: 'gameObject.destroy(newObj)' },
    { id: 'gameObject_getTransform', name: 'gameObject.getTransform(id)', descKey: 'desc_gameObject_getTransform', code: 'local player = gameObject.find("MainPlayer")\nlocal t = gameObject.getTransform(player)' },
    { id: 'gameObject_setName', name: 'gameObject.setName(id, name)', descKey: 'desc_gameObject_setName', code: 'gameObject.setName(player, "RenamedPlayer")' },
    { id: 'gameObject_setActive', name: 'gameObject.setActive(id, bool)', descKey: 'desc_gameObject_setActive', code: '--[[comment:hide_player]]\ngameObject.setActive(player, false)' },
    { id: 'gameObject_instantiate', name: 'gameObject.instantiate(id)', descKey: 'desc_gameObject_instantiate', code: 'local playerClone = gameObject.instantiate(player)' },

    { id: 'transform_getPosition', name: 'transform.getPosition(id)', descKey: 'desc_transform_getPosition', code: 'local x, y, z = transform.getPosition(t)\nlog("Y position: " .. y)' },
    { id: 'transform_setPosition', name: 'transform.setPosition(id, x, y, z)', descKey: 'desc_transform_setPosition', code: '--[[comment:teleport_roof]]\ntransform.setPosition(t, 10, 50, 20)' },
    { id: 'transform_translate', name: 'transform.translate(id, x, y, z)', descKey: 'desc_transform_translate', code: '--[[comment:move_forward]]\ntransform.translate(t, 0, 0, 1 * getDeltaTime())' },
    { id: 'transform_rotate', name: 'transform.rotate(id, x, y, z)', descKey: 'desc_transform_rotate', code: '--[[comment:rotate_y]]\ntransform.rotate(t, 0, 45 * getDeltaTime(), 0)' },
    { id: 'transform_lookAt', name: 'transform.lookAt(id, x, y, z)', descKey: 'desc_transform_lookAt', code: '--[[comment:look_center]]\ntransform.lookAt(t, 0, 0, 0)' },
    { id: 'transform_getForward', name: 'transform.getForward(id)', descKey: 'desc_transform_getForward', code: 'local fwdX, fwdY, fwdZ = transform.getForward(t)' },

    { id: 'rigidbody_setVelocity', name: 'rigidbody.setVelocity(id, x, y, z)', descKey: 'desc_rigidbody_setVelocity', code: '--[[comment:jump]]\nrigidbody.setVelocity(player, 0, 10, 0)' },
    { id: 'rigidbody_addForce', name: 'rigidbody.addForce(id, x, y, z)', descKey: 'desc_rigidbody_addForce', code: '--[[comment:push_forward]]\nrigidbody.addForce(player, 0, 0, 100)' },
    { id: 'rigidbody_setUseGravity', name: 'rigidbody.setUseGravity(id, bool)', descKey: 'desc_rigidbody_setUseGravity', code: '--[[comment:fly_mode]]\nrigidbody.setUseGravity(player, false)' },
    { id: 'physics_raycast', name: 'physics.raycast(x, y, z, dirX, dirY, dirZ)', descKey: 'desc_physics_raycast', code: 'local didHit = physics.raycast(0, 1, 0, 0, -1, 0)\nif didHit then log("Hit ground") end' },
    { id: 'physics_overlapSphere', name: 'physics.overlapSphere(x, y, z, r)', descKey: 'desc_physics_overlapSphere', code: 'local targets = physics.overlapSphere(0, 0, 0, 10)\nfor _, id in pairs(targets) do\n    log("Found: " .. id)\nend' },

    { id: 'audioSource_play', name: 'audioSource.play(id)', descKey: 'desc_audioSource_play', code: 'audioSource.play(player)' },
    { id: 'audioSource_stop', name: 'audioSource.stop(id)', descKey: 'desc_audioSource_stop', code: 'audioSource.stop(player)' },
    { id: 'audioSource_setVolume', name: 'audioSource.setVolume(id, v)', descKey: 'desc_audioSource_setVolume', code: 'audioSource.setVolume(player, 0.5)' },
    { id: 'audioSource_isPlaying', name: 'audioSource.isPlaying(id)', descKey: 'desc_audioSource_isPlaying', code: 'if audioSource.isPlaying(player) then\n    log("Music is playing")\nend' },

    { id: 'camera_setFieldOfView', name: 'camera.setFieldOfView(id, fov)', descKey: 'desc_camera_setFieldOfView', code: 'local cam = gameObject.find("MainCamera")\ncamera.setFieldOfView(cam, 90)' },
    { id: 'camera_worldToScreenPoint', name: 'camera.worldToScreenPoint(id, x, y, z)', descKey: 'desc_camera_worldToScreenPoint', code: 'local x, y, z = camera.worldToScreenPoint(cam, 0, 0, 0)\nlog("Center on screen: " .. x)' },
    { id: 'camera_screenToWorldPoint', name: 'camera.screenToWorldPoint(id, x, y, z)', descKey: 'desc_camera_screenToWorldPoint', code: '--[[comment:z_depth]]\nlocal worldX, _, _ = camera.screenToWorldPoint(cam, 100, 100, 10)' },

    { id: 'input_getKey', name: 'input.getKey(name)', descKey: 'desc_input_getKey', code: 'if input.getKey("Space") then\n    log("Space is held down")\nend' },
    { id: 'input_getKeyDown', name: 'input.getKeyDown(name)', descKey: 'desc_input_getKeyDown', code: 'if input.getKeyDown("F") then\n    log("Toggled flashlight")\nend' },
    { id: 'input_getMouse', name: 'input.getMouse(button)', descKey: 'desc_input_getMouse', code: 'if input.getMouse(0) then\n    log("Left mouse button pressed")\nend' },
    { id: 'input_getAxis', name: 'input.getAxis(name)', descKey: 'desc_input_getAxis', code: 'local v = input.getAxis("Vertical")\nif v > 0 then log("Moving forward") end' },
    { id: 'input_setMouseLock', name: 'input.setMouseLock(bool)', descKey: 'desc_input_setMouseLock', code: '--[[comment:show_cursor]]\ninput.setMouseLock(false)' }
];


document.addEventListener('DOMContentLoaded', function() {
    
    // ================================================
    // ИЗМЕНЕНИЕ: Глобальная функция для закрытия меню
    // ================================================
    let closeMobileMenu = () => {};


    document.querySelectorAll('.code-block .comment').forEach(element => {
        const text = element.textContent.trim();
        const match = text.match(/--\[\[comment:(.+)\]\]/);

        if (match && match[1]) {
            const key = match[1];

            element.setAttribute('data-translate-comment', 'comment_' + key);

            const originalText = element.textContent;
            const indentMatch = originalText.match(/^(\s*)/);
            const indent = indentMatch ? indentMatch[1] : '';
            element.setAttribute('data-indent', indent);

            const trailingMatch = originalText.match(/(\s*)$/);
            const trailing = trailingMatch ? trailingMatch[1] : '';
            element.setAttribute('data-trailing', trailing);
        }
    });

    // Загрузка настроек должна быть до создания эффектов
    loadSettings();
    
    loadBlogPreview();
    loadFullBlog();
    initSearch();
    initNavigation();
    initCodeCopy();
    initBlogModal();
    initMobileMenu(); // <-- Вызов новой функции
    // initMusicPlayer(); // Удалено
    initDocsCopy();
    initSettings();
    // loadSettings() уже вызвана выше

    const savedPage = localStorage.getItem('activePage') || 'home';
    if (savedPage !== 'home') {
        switchPage(savedPage);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === savedPage) {
            link.classList.add('active');
        }
    });

    // ================================================
    // ИЗМЕНЕНИЕ: Добавлен слушатель RESIZE
    // ================================================
    window.addEventListener('resize', () => {
        const sidebar = document.getElementById('sidebar');
        const docPage = document.getElementById('documentation-page');
        
        if (window.innerWidth > 1024) {
            // Если мы на десктопе, закроем мобильное меню на всякий случай
            if (typeof closeMobileMenu === 'function') {
                closeMobileMenu();
            }
            // И покажем десктопный сайдбар, если мы на странице доков
            if (docPage && docPage.classList.contains('active')) {
                sidebar.classList.add('active');
            }
        } else {
            // Если мы на мобильном, скроем десктопный сайдбар
            sidebar.classList.remove('active');
        }
    });

    // ================================================
    // ИЗМЕНЕНИЕ: Новая функция initMobileMenu
    // ================================================
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const panel = document.getElementById('mobileMenuPanel');
        const overlay = document.getElementById('mobileMenuOverlay');
        const closeBtn = document.getElementById('mobileMenuClose');
        const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
        const settingsPanel = document.getElementById('settingsPanel');
        
        // Ищем элементы только ВНУТРИ мобильной панели, чтобы не конфликтовать с десктопом
        const docItem = document.querySelector('#mobileMenuPanel .mobile-nav-item.has-submenu');
        const docLink = document.querySelector('#mobileMenuPanel .mobile-nav-link[data-page="documentation"]');
        const docToggle = document.querySelector('#mobileMenuPanel .mobile-submenu-toggle');
        const docSubmenu = document.getElementById('mobileSubmenuContent');

        if (!menuBtn || !panel || !overlay || !closeBtn) return;

        // Функция закрытия (теперь присваиваем)
        closeMobileMenu = function() {
            panel.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = ''; 

            // ИЗМЕНЕНИЕ: Мы по-прежнему сбрасываем max-height,
            // но НЕ сбрасываем 'active' class, который используется для сохранения состояния
            if (docItem) {
                if(docSubmenu) docSubmenu.style.maxHeight = '0px';
            }
        }

        // Открыть меню
        menuBtn.addEventListener('click', () => {
            panel.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            // ИЗМЕНЕНИЕ: Проверяем localStorage, чтобы восстановить состояние
            if (localStorage.getItem('docSubmenuOpen') === 'true') {
                docItem.classList.add('active');
                docSubmenu.style.maxHeight = docSubmenu.scrollHeight + 'px';
            } else {
                docItem.classList.remove('active');
                docSubmenu.style.maxHeight = '0px';
            }
        });

        // Закрыть меню (по кнопке 'X' или оверлею)
        closeBtn.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);

        // Открыть Настройки из меню
        if (mobileSettingsBtn && settingsPanel) {
            mobileSettingsBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeMobileMenu();
                setTimeout(() => {
                    settingsPanel.classList.add('active');
                }, 300); // 300ms, чтобы анимация закрытия не лагала
            });
        }

        // --- Логика подменю Документации ---

        // Клик по СТРЕЛКЕ (только раскрывает)
        if (docToggle && docItem && docSubmenu) {
            docToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isActive = docItem.classList.toggle('active');
                if (isActive) {
                    docSubmenu.style.maxHeight = docSubmenu.scrollHeight + "px";
                    localStorage.setItem('docSubmenuOpen', 'true'); // Сохраняем
                } else {
                    docSubmenu.style.maxHeight = "0px";
                    localStorage.setItem('docSubmenuOpen', 'false'); // Сохраняем
                }
            });
        }

        // Клик по ССЫЛКЕ "Documentation" (переходит и закрывает)
        if (docLink) {
            docLink.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage('documentation');
                closeMobileMenu();
                // Обновляем активную ссылку в десктоп-хедере
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                const desktopLink = document.querySelector('.nav-link[data-page="documentation"]');
                if(desktopLink) desktopLink.classList.add('active');
            });
        }

        // --- Логика остальных ссылок ---

        // Home, Blog (переходят и закрывают)
        panel.querySelectorAll('.mobile-nav-link[data-page]').forEach(link => {
            if (link.getAttribute('data-page') !== 'documentation') {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.getAttribute('data-page');
                    switchPage(page);
                    closeMobileMenu();
                    // Обновляем активную ссылку в десктоп-хедере
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    const desktopLink = document.querySelector(`.nav-link[data-page="${page}"]`);
                    if(desktopLink) desktopLink.classList.add('active');
                });
            }
        });

        // Ссылки на функции (внутри мобильного меню) УЖЕ ОБРАБАТЫВАЮТСЯ в initNavigation()
    }

}); // Конец DOMContentLoaded



function loadBlogPreview() {
    const container = document.getElementById('home-blog-preview');
    if (!container) return;
    const previewPosts = blogPosts.slice(0, 2);
    container.innerHTML = previewPosts.map(post => `<div class="blog-card" data-id="${post.id}"><img src="${post.imageUrl}" alt="${post.title[currentLang]}" class="blog-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='"><div class="blog-content"><h3 class="blog-title">${post.title[currentLang]}</h3><p class="blog-summary">${post.summary[currentLang]}</p><div class="blog-meta"><span>${post.date}</span><span>${post.readTime}</span></div></div></div>`).join('');
    container.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function() { openBlogModal(this.getAttribute('data-id')); });
    });
}

function loadFullBlog() {
    const container = document.getElementById('blog-grid');
    if (!container) return;
    container.innerHTML = blogPosts.map(post => `<div class="blog-card" data-id="${post.id}"><img src="${post.imageUrl}" alt="${post.title[currentLang]}" class="blog-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='"><div class="blog-content"><h3 class="blog-title">${post.title[currentLang]}</h3><p class="blog-summary">${post.summary[currentLang]}</p><div class="blog-meta"><span>${post.date}</span><span>${post.readTime}</span></div></div></div>`).join('');
    container.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function() { openBlogModal(this.getAttribute('data-id')); });
    });
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (!searchInput || !searchResults) return;

    function highlight(text, query) {
        if (!query) return text;
        const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        const rawQuery = this.value.trim();

        if (query.length === 0) {
            searchResults.classList.remove('active');
            return;
        }

        const results = functionsData.filter(func => {
            const descText = translations[currentLang][func.descKey]
                             ? translations[currentLang][func.descKey].replace(/<[^>]*>?/gm, '')
                             : '';
            return func.name.toLowerCase().includes(query) || descText.toLowerCase().includes(query);
        });

        if (results.length > 0) {
            searchResults.innerHTML = results.map(func => {
                const funcName = func.name;
                const funcDesc = translations[currentLang][func.descKey].replace(/<[^>]*>?/gm, '');

                const highlightedName = highlight(funcName, rawQuery);
                const highlightedDesc = highlight(funcDesc, rawQuery);

                return `<div class="search-result-item" data-id="${func.id}">
                            <div class="search-result-name">${highlightedName}</div>
                            <div class="search-result-desc">${highlightedDesc}</div>
                        </div>`;
            }).join('');

            searchResults.classList.add('active');

            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function () {
                    navigateToFunction(this.getAttribute('data-id'));
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                });
            });
        } else {
            searchResults.innerHTML = `<div class="search-result-item">${currentLang === 'ru' ? 'Ничего не найдено' : 'No results found'}</div>`;
            searchResults.classList.add('active');
        }
    });

    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}


function navigateToFunction(funcId) {
    switchPage('documentation');
    const funcElement = document.getElementById(funcId);
    if (funcElement) {
        funcElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        funcElement.classList.add('highlight-animation');
        funcElement.addEventListener('animationend', () => {
            funcElement.classList.remove('highlight-animation');
        }, { once: true });
    }
}

// ================================================
// ИЗМЕНЕНИЕ: Обновлена функция initNavigation
// ================================================
function initNavigation() {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            switchPage('home');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[data-page="home"]').classList.add('active');
        });
    }

    // Это только для ДЕСКТОПНЫХ ссылок в шапке
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Этот слушатель теперь обрабатывает ОБА сайдбара (десктопный и мобильный)
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const funcId = this.getAttribute('data-function');
            navigateToFunction(funcId);
            
            // Активируем *все* ссылки (мобильную и десктопную) с этим data-function
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.sidebar-link[data-function="${funcId}"]`).forEach(l => l.classList.add('active'));
            
            // Закрываем мобильное меню (если оно было открыто)
            // 'closeMobileMenu' определяется в 'initMobileMenu'
            if (typeof closeMobileMenu === 'function') {
                closeMobileMenu(); 
            }
        });
    });

    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector(`.nav-link[data-page="${page}"]`).classList.add('active');
        });
    });
}

// ================================================
// ИЗМЕНЕНИЕ: Обновлена функция switchPage
// ================================================
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        const sidebar = document.getElementById('sidebar');
        if (pageId === 'documentation') {
            if (window.innerWidth > 1024) { sidebar.classList.add('active'); }
        } else {
            sidebar.classList.remove('active');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });

        localStorage.setItem('activePage', pageId);
    }
    
    // Добавлено: закрываем мобильную навигацию (header) при смене страницы
    if (typeof closeMobileMenu === 'function') {
        closeMobileMenu();
    }
}

function initDocsCopy() {
    const copyBtn = document.getElementById('copyDocsBtn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
        if (copyBtn.classList.contains('copied')) return;

        let fullDocsText = 'GoreBox Modding API Documentation\n\n';
        const sectionTitles = {};
        document.querySelectorAll('#documentation-page .section-title').forEach(el => {
            const section = el.closest('.section');
            if (section) {
                const titleKey = el.getAttribute('data-translate');
                sectionTitles[section.id] = translations['en'][titleKey] || el.textContent.trim();
            }
        });

        const sectionsOrder = Array.from(document.querySelectorAll('#documentation-page .section')).map(s => s.id);
        const groupedFunctions = functionsData.reduce((acc, func) => {
            const card = document.getElementById(func.id);
            if (card) {
                const sectionId = card.closest('.section').id;
                if (!acc[sectionId]) acc[sectionId] = [];
                const enCommentKey = func.code.match(/--\[\[comment:(.+)\]\]/);
                let finalCode = func.code;
                 
                 // ================================================
                 // ИСПРАВЛЕНИЕ ОШИБКИ
                 // ================================================
                 if (enCommentKey && translations['en']['comment_' + enCommentKey[1]]) {
                    // Я УБРАЛ ЛИШНИЙ 'G' + ИЗ СТРОКИ НИЖЕ
                    finalCode = finalCode.replace(enCommentKey[0], translations['en']['comment_' + enCommentKey[1]]);
                }

                acc[sectionId].push({
                    ...func,
                    code: finalCode
                });
            }
            return acc;
        }, {});

        sectionsOrder.forEach(sectionId => {
            if (groupedFunctions[sectionId] && sectionTitles[sectionId]) {
                fullDocsText += `==============================\n${sectionTitles[sectionId]}\n==============================\n\n`;
                groupedFunctions[sectionId].forEach(func => {
                    fullDocsText += `Function: ${func.name}\n`;
                    fullDocsText += `Description: ${translations['en'][func.descKey].replace(/<[^>]*>?/gm, '')}\n`;
                    fullDocsText += `Example:\n${func.code}\n\n------------------------------\n\n`;
                });
            }
        });

        navigator.clipboard.writeText(fullDocsText).then(() => {
            const textSpan = copyBtn.querySelector('span');
            copyBtn.classList.add('copied');
            textSpan.setAttribute('data-translate', 'docs_copied');
            textSpan.textContent = translations[currentLang]['docs_copied'];

            setTimeout(() => {
                copyBtn.classList.remove('copied');
                textSpan.setAttribute('data-translate', 'copy_documentation');
                textSpan.textContent = translations[currentLang]['copy_documentation'];
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy documentation: ', err);
            showNotification('Could not copy documentation');
        });
    });
}


function initCodeCopy() {
    document.querySelectorAll('.function-copy').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('copied')) return;
            const textToCopy = this.nextElementSibling.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification('Code copied to clipboard!');
                this.classList.add('copied');
                setTimeout(() => { this.classList.remove('copied'); }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                showNotification('Could not copy code');
            });
        });
    });
}

function initBlogModal() {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.getElementById('blogModalClose');
    if (!modal || !closeBtn) return;
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) { modal.classList.remove('active'); } });
}

function openBlogModal(postId) {
    const modal = document.getElementById('blogModal');
    const modalContent = document.getElementById('blogModalContent');
    if (!modal || !modalContent) return;
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    modalContent.innerHTML = `<img src="${post.imageUrl}" alt="${post.title[currentLang]}" class="blog-modal-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='"><h1 class="blog-modal-title">${post.title[currentLang]}</h1><div class="blog-modal-body">${post.content[currentLang]}</div>`;
    modal.classList.add('active');
}

// ================================================
// ВСЕ ФУНКЦИИ МУЗЫКИ УДАЛЕНЫ
// ================================================


function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    notification.querySelector('span').textContent = message;
    notification.classList.add('show');
    setTimeout(() => { notification.classList.remove('show'); }, 3000);
}

function initSettings() {
    const settingsBtnDesktop = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsClose = document.getElementById('settingsClose');

    const themeOptions = document.querySelectorAll('.theme-option');
    const fontOptions = document.querySelectorAll('.font-option');
    const languageOptions = document.querySelectorAll('.language-option');

    // Музыкальные контролы удалены

    const settingsTabs = document.querySelectorAll('.settings-tab-btn');
    const settingsTabPanels = document.querySelectorAll('.settings-tab-panel');

    const columnToggle = document.getElementById('columnToggle');
    const docPage = document.getElementById('documentation-page');
    const effectsToggle = document.getElementById('effectsToggle');

    if (settingsBtnDesktop) settingsBtnDesktop.addEventListener('click', () => settingsPanel.classList.add('active'));
    // (Слушатель для settingsBtnMobile уже находится в initMobileMenu)
    
    if (settingsClose) settingsClose.addEventListener('click', () => settingsPanel.classList.remove('active'));

    if (settingsPanel) {
        settingsPanel.addEventListener('click', (e) => {
            if (e.target === settingsPanel) {
                settingsPanel.classList.remove('active');
            }
        });
    }

    settingsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            settingsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            settingsTabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `settings-tab-${targetTab}`) {
                    panel.classList.add('active');
                }
            });
        });
    });

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.getAttribute('data-theme');
            changeTheme(theme);
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    fontOptions.forEach(option => {
        option.addEventListener('click', () => {
            const font = option.getAttribute('data-font');
            changeFont(font);
            fontOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    languageOptions.forEach(option => {
        option.addEventListener('click', () => changeLanguage(option.getAttribute('data-lang')));
    });

    if (columnToggle && docPage) {
        columnToggle.addEventListener('change', () => {
            const twoColumnsEnabled = columnToggle.checked;
            docPage.classList.toggle('two-column-layout', twoColumnsEnabled);
            localStorage.setItem('layoutColumns', twoColumnsEnabled ? 'two' : 'one');
        });
    }
    
    if (effectsToggle) {
        effectsToggle.addEventListener('change', () => {
            toggleVisualEffects(effectsToggle.checked);
        });
    }

    // Вся логика музыки удалена
}


function changeTheme(theme) {
    document.body.classList.add('theme-changing');
    setTimeout(() => {
        document.body.classList.remove('frutiger-aero', 'programmer-theme', 'gorebox-theme');

        if (theme === 'frutiger-aero') {
            document.body.classList.add('frutiger-aero');
        } else if (theme === 'programmer') {
            document.body.classList.add('programmer-theme');
        } else if (theme === 'gorebox') {
            document.body.classList.add('gorebox-theme');
        }

        setTimeout(() => document.body.classList.remove('theme-changing'), 800);
        localStorage.setItem('theme', theme);
    }, 300);
}

// Новая функция для смены шрифта
function changeFont(font) {
    if (font === 'wes_fy_black') {
        document.body.classList.add('font-wes-fy-black');
    } else {
        document.body.classList.remove('font-wes-fy-black');
    }
    localStorage.setItem('font', font);
}

// ИЗМЕНЕНИЕ: Новая функция для очистки всех эффектов
function clearAllEffectElements() {
    // 1. Останавливаем интервал создания комет
    if (cometInterval) {
        clearInterval(cometInterval);
        cometInterval = null;
    }

    // 2. Удаляем все DOM-элементы эффектов
    document.querySelectorAll('.star, .comet-head, .comet-trail, .blood-pentagon').forEach(el => el.remove());
    
    // 3. Удаляем все динамически добавленные стили комет
    document.querySelectorAll('style[data-comet-style="true"]').forEach(el => el.remove());

    // 4. Уничтожаем инстанс particles.js
    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }
}


// ИЗМЕНЕНИЕ: Полностью переписанная функция для исправления бага
function toggleVisualEffects(enabled) {
    if (enabled) {
        document.body.classList.remove('effects-disabled');
        // Повторно инициализируем эффекты
        // (Проверки внутри функций не дадут им запуститься, если они уже запущены)
        createStars();
        createComets();
        createBubbles(); // (эта функция у вас все равно пустая, но оставляем)
        createBloodEffect();
        initParticles(); // (эта функция имеет проверку на 'effects-disabled')
    } else {
        document.body.classList.add('effects-disabled');
        // Вызываем новую функцию очистки
        clearAllEffectElements();
    }
    localStorage.setItem('visualEffects', enabled.toString());
}


function loadSettings() {
    const savedTheme = localStorage.getItem('theme') || 'gorebox';
    changeTheme(savedTheme);
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-theme') === savedTheme);
    });

    const savedFont = localStorage.getItem('font') || 'wes_fy_black'; // Изменено
    changeFont(savedFont);
    document.querySelectorAll('.font-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-font') === savedFont);
    });

    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);

    // Логика музыки удалена

    const savedLayout = localStorage.getItem('layoutColumns') || 'one';
    const columnToggle = document.getElementById('columnToggle');
    const docPage = document.getElementById('documentation-page');
    if (columnToggle && docPage) {
        const isTwoColumns = savedLayout === 'two';
        columnToggle.checked = isTwoColumns;
        docPage.classList.toggle('two-column-layout', isTwoColumns);
    }
    
    // ИЗМЕНЕНИЕ: Загрузка настройки эффектов
    const savedEffects = localStorage.getItem('visualEffects') !== 'false'; // По умолчанию true
    const effectsToggle = document.getElementById('effectsToggle');
    if (effectsToggle) {
        effectsToggle.checked = savedEffects;
    }
    // Применяем настройку эффектов при загрузке
    toggleVisualEffects(savedEffects);
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Добавлена проверка на отключенные эффекты
        if (entry.isIntersecting && !document.body.classList.contains('effects-disabled')) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section, .clickable-card-wrapper').forEach(el => {
    observer.observe(el);
});

// window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady; // Удалено