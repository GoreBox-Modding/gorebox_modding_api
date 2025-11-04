const translations = {
    ru: {
        home: "Главная",
        documentation: "Документация",
        blog: "Блог",
        settings: "Настройки",
        tab_appearance: "Оформление",
        theme: "Тема оформления",
        theme_default: "Космическая",
        theme_gorebox: "GoreBox",
        theme_programmer: "Cozy",
        language: "Язык",
        font: "Шрифт",
        font_default: "Segoe UI",
        font_wes_fy_black: "Wes FY Black",
        layout: "Расположение функций",
        two_columns: "Две колонки",
        visual_effects: "Визуальные эффекты",
        effects_note: "Отключение может улучшить производительность.",
        effects_off: "Выкл.",
        effects_static: "Статика",
        effects_full: "Полные",
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

        // --- Ключи для комментариев из functions.json ---
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
        theme: "Theme",
        theme_default: "Cosmic",
        theme_gorebox: "GoreBox",
        theme_programmer: "Cozy",
        language: "Language",
        font: "Font",
        font_default: "Segoe UI",
        font_wes_fy_black: "Wes FY Black",
        layout: "Function Layout",
        two_columns: "Two Columns",
        visual_effects: "Visual Effects",
        effects_note: "Disabling may improve performance.",
        effects_off: "Off",
        effects_static: "Static",
        effects_full: "Full",
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

        // --- Ключи для комментариев из functions.json ---
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


let currentLang = 'en';
const typingTimers = new Map();
let cometInterval;

// Глобальные переменные для хранения данных
let blogPosts = [];
let functionsData = [];
let closeMobileMenu = () => { };
let currentEffectsLevel = 2; // 0 = off, 1 = static, 2 = full

/**
 * Генерирует HTML для карточек функций и ссылок в боковом меню
 * на основе данных из functions.json
 */
function buildDocumentation(functions) {
    const sections = {
        'lifecycle': document.querySelector('#lifecycle .function-grid'),
        'global-functions': document.querySelector('#global-functions .function-grid'),
        'lua-gui': document.querySelector('#lua-gui .function-grid'),
        'resources': document.querySelector('#resources .function-grid'),
        'gameobject': document.querySelector('#gameobject .function-grid'),
        'transform': document.querySelector('#transform .function-grid'),
        'physics': document.querySelector('#physics .function-grid'),
        'audio': document.querySelector('#audio .function-grid'),
        'camera': document.querySelector('#camera .function-grid'),
        'input': document.querySelector('#input .function-grid')
    };
    
    // Контейнеры для ссылок в боковом меню (основном и мобильном)
    const sidebarLinkContainers = {
        'lifecycle': document.querySelectorAll('.sidebar-links[data-links-for="lifecycle"]'),
        'global-functions': document.querySelectorAll('.sidebar-links[data-links-for="global-functions"]'),
        'lua-gui': document.querySelectorAll('.sidebar-links[data-links-for="lua-gui"]'),
        'resources': document.querySelectorAll('.sidebar-links[data-links-for="resources"]'),
        'gameobject': document.querySelectorAll('.sidebar-links[data-links-for="gameobject"]'),
        'transform': document.querySelectorAll('.sidebar-links[data-links-for="transform"]'),
        'physics': document.querySelectorAll('.sidebar-links[data-links-for="physics"]'),
        'audio': document.querySelectorAll('.sidebar-links[data-links-for="audio"]'),
        'camera': document.querySelectorAll('.sidebar-links[data-links-for="camera"]'),
        'input': document.querySelectorAll('.sidebar-links[data-links-for="input"]')
    };

    // Очистка
    Object.values(sections).forEach(s => { if (s) s.innerHTML = ''; });
    Object.values(sidebarLinkContainers).forEach(list => list.forEach(s => { if (s) s.innerHTML = ''; }));

    functions.forEach(func => {
        const container = sections[func.section];
        if (!container) {
            console.warn(`No container found for section: ${func.section}`);
            return;
        }

        // 1. Сборка карточки функции
        const cardHTML = `
        <div class="function-card" id="${func.id}">
            <div class="function-header">
                <h3 class="function-name">${func.name}</h3>
            </div>
            <p class="function-description" data-translate-desc="${func.id}">${func.desc[currentLang] || func.desc['en']}</p>
            <div class="code-block">
                <button class="function-copy" title="Copy Example"><i class="far fa-copy"></i><i class="fas fa-check"></i></button>
                <pre>${func.code}</pre>
            </div>
        </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);

        // 2. Сборка ссылок для бокового меню
        const linkName = func.name.replace(/<[^>]*>?/gm, '').replace(/\(.*\)/, '').trim();
        const linkIconMatch = func.name.match(/<i class="([^"]+)"><\/i>/);
        const linkIcon = linkIconMatch ? linkIconMatch[0] : '<i class="fas fa-code"></i>'; // Иконка по умолчанию

        const sidebarLinkHTML = `
        <li><a href="#${func.id}" class="sidebar-link" data-function="${func.id}">${linkIcon} ${linkName}</a></li>
        `;
        
        const linkContainers = sidebarLinkContainers[func.section];
        if (linkContainers) {
            linkContainers.forEach(list => list.insertAdjacentHTML('beforeend', sidebarLinkHTML));
        }

        // 3. Поиск комментария для перевода
        if (func.commentKey) {
            const commentEl = container.querySelector(`#${func.id} .comment`);
            if (commentEl) {
                // Убираем старый мусор, если он есть
                const cleanCode = func.code.match(/--\[\[comment:.*\]\]/);
                if(cleanCode) {
                    commentEl.textContent = cleanCode[0];
                }
                
                commentEl.setAttribute('data-translate-comment', `comment_${func.commentKey}`);
                const originalText = commentEl.textContent;
                const indentMatch = originalText.match(/^(\s*)/);
                const indent = indentMatch ? indentMatch[1] : '';
                commentEl.setAttribute('data-indent', indent);
                const trailingMatch = originalText.match(/(\s*)$/);
                const trailing = trailingMatch ? trailingMatch[1] : '';
                commentEl.setAttribute('data-trailing', trailing);
            }
        }
    });

    // Повторная инициализация слушателей для новых элементов
    initCodeCopy();
    initNavigationSidebarLinks();
}

/**
 * Обновляет тексты описаний функций при смене языка
 */
function updateFunctionTranslations(lang) {
    if (!functionsData) return;
    functionsData.forEach(func => {
        const el = document.querySelector(`[data-translate-desc="${func.id}"]`);
        if (el) {
            el.innerHTML = func.desc[lang] || func.desc['en'];
        }
    });
}


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
    if (lang === currentLang && document.querySelector('[data-translate]').textContent !== 'Главная') return;
    currentLang = lang;

    typingTimers.forEach((timer, element) => {
        clearTimeout(timer);
        element.classList.remove('typing-effect');
    });
    typingTimers.clear();

    // 1. Перевод UI
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

    // 2. Перевод плейсхолдеров
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // 3. Перевод комментариев в коде
    document.querySelectorAll('[data-translate-comment]').forEach(element => {
        const key = element.getAttribute('data-translate-comment');
        if (translations[lang] && translations[lang][key]) {
            const indent = element.getAttribute('data-indent') || '';
            const trailing = element.getAttribute('data-trailing') || '';
            element.textContent = indent + translations[lang][key] + trailing;
        }
    });

    // 4. Перевод описаний функций (новая функция)
    updateFunctionTranslations(lang);

    // 5. Обновление кнопок языка
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    localStorage.setItem('language', lang);

    if (blogPosts.length > 0) {
        loadBlogPreview();
        loadFullBlog();
    }
}

function createStars() {
    const spaceBg = document.getElementById('spaceBackground');
    if (!spaceBg || currentEffectsLevel === 0) return;

    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3;
        const starType = size < 1 ? 'small' : size < 2 ? 'medium' : 'large';

        star.classList.add('star', starType);
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Если 'static', не добавляем анимацию
        if (currentEffectsLevel === 2) {
             star.style.animationDelay = `${Math.random() * 6}s`;
             star.style.animationName = 'twinkle';
        }

        spaceBg.appendChild(star);
    }
}

function createComets() {
    const spaceBg = document.getElementById('spaceBackground');
    // Не запускаем, если выключено или статика
    if (!spaceBg || currentEffectsLevel < 2) return;

    cometInterval = setInterval(() => {
        if (Math.random() < 0.4 && currentEffectsLevel === 2) {
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


function createBloodEffect() {
    const container = document.getElementById('goreboxBackground');
    
    // --- ИЗМЕНЕНО ---
    // Эффект пентагонов запускается ТОЛЬКО на 'full' (level 2)
    // Раньше было (currentEffectsLevel === 0)
    if (!container || currentEffectsLevel < 2) return;
    // --- КОНЕЦ ИЗМЕНЕНИЯ ---

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
        pentagon.style.setProperty('--r-start', `${startRotate}deg`);
        
        // 'static' (level 1) сюда больше не попадет,
        // поэтому эта проверка всегда будет 'true' (level 2)
        if (currentEffectsLevel === 2) {
            const endRotate = startRotate + (Math.random() * 60 - 30);
            pentagon.style.setProperty('--r-end', `${endRotate}deg`);

            const duration = Math.random() * 20 + 25;
            const delay = Math.random() * -45;
            const driftType = `bloodDrift${Math.ceil(Math.random() * 3)}`;

            pentagon.style.animation = `
                ${driftType} ${duration}s ${delay}s infinite alternate ease-in-out,
                bloodFade ${duration * 0.7}s ${delay + (duration * 0.1)}s infinite alternate ease-in-out
            `;
        }

        container.appendChild(pentagon);
    }
}


function initParticles() {
    // Не запускаем, если выключено
    if (typeof particlesJS === 'undefined' || currentEffectsLevel === 0) return;

    const isStatic = currentEffectsLevel === 1;

    particlesJS('particles-js', {
        particles: {
            number: { value: 20, density: { enable: true, value_area: 800 } },
            color: { value: "#6366f1" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            line_linked: { enable: true, distance: 150, color: "#6366f1", opacity: 0.2, width: 1 },
            // Отключаем движение для 'static'
            move: {
                enable: !isStatic, 
                speed: 1, 
                direction: "none", 
                random: true, 
                out_mode: "out", 
                bounce: false 
            }
        },
        interactivity: {
            detect_on: "canvas",
            // Отключаем интерактивность для 'static'
            events: {
                onhover: { enable: !isStatic, mode: "repulse" },
                onclick: { enable: !isStatic, mode: "push" },
                resize: true
            }
        }
    });
}

function loadBlogPreview() {
    const container = document.getElementById('home-blog-preview');
    if (!container) return;
    const previewPosts = blogPosts.slice(0, 2);
    container.innerHTML = previewPosts.map(post => `<div class="blog-card" data-id="${post.id}"><img src="${post.imageUrl}" alt="${post.title[currentLang]}" class="blog-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='"><div class="blog-content"><h3 class="blog-title">${post.title[currentLang]}</h3><p class="blog-summary">${post.summary[currentLang]}</p><div class="blog-meta"><span>${post.date}</span><span>${post.readTime}</span></div></div></div>`).join('');
    container.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function () { openBlogModal(this.getAttribute('data-id')); });
    });
}

function loadFullBlog() {
    const container = document.getElementById('blog-grid');
    if (!container) return;
    container.innerHTML = blogPosts.map(post => `<div class="blog-card" data-id="${post.id}"><img src="${post.imageUrl}" alt="${post.title[currentLang]}" class="blog-image" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='"><div class="blog-content"><h3 class="blog-title">${post.title[currentLang]}</h3><p class="blog-summary">${post.summary[currentLang]}</p><div class="blog-meta"><span>${post.date}</span><span>${post.readTime}</span></div></div></div>`).join('');
    container.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', function () { openBlogModal(this.getAttribute('data-id')); });
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
            const descText = func.desc[currentLang] ? func.desc[currentLang].replace(/<[^>]*>?/gm, '') : '';
            const nameText = func.name.replace(/<[^>]*>?/gm, ''); // Очищаем имя от HTML
            return nameText.toLowerCase().includes(query) || descText.toLowerCase().includes(query);
        });

        if (results.length > 0) {
            searchResults.innerHTML = results.map(func => {
                const funcName = func.name.replace(/<[^>]*>?/gm, ''); // Очищаем имя
                const funcDesc = func.desc[currentLang].replace(/<[^>]*>?/gm, '');

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
        
        // Отключаем анимацию подсветки если эффекты не на 'full'
        if (currentEffectsLevel === 2) {
            funcElement.classList.add('highlight-animation');
            funcElement.addEventListener('animationend', () => {
                funcElement.classList.remove('highlight-animation');
            }, { once: true });
        } else {
             // Просто быстрая подсветка без CSS анимации
            funcElement.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.7)';
            setTimeout(() => {
                funcElement.style.boxShadow = '';
            }, 1000);
        }
    }
}

// Инициализация основных ссылок (шапка, лого, кнопки)
function initNavigation() {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', function (e) {
            e.preventDefault();
            switchPage('home');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[data-page="home"]').classList.add('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelector(`.nav-link[data-page="${page}"]`).classList.add('active');
        });
    });
}

// Инициализация ссылок бокового меню (вызывается после buildDocumentation)
function initNavigationSidebarLinks() {
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const funcId = this.getAttribute('data-function');
            navigateToFunction(funcId);

            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.sidebar-link[data-function="${funcId}"]`).forEach(l => l.classList.add('active'));

            if (typeof closeMobileMenu === 'function') {
                closeMobileMenu();
            }
        });
    });
}


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

    if (typeof closeMobileMenu === 'function') {
        closeMobileMenu();
    }
}

function initDocsCopy() {
    const copyBtn = document.getElementById('copyDocsBtn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
        if (copyBtn.classList.contains('copied') || functionsData.length === 0) return;

        let fullDocsText = 'GoreBox Modding API v1.1\n\n'; // ВЕРСИЯ
        const sectionTitles = {};
        document.querySelectorAll('#documentation-page .section-title').forEach(el => {
            const section = el.closest('.section');
            if (section) {
                const titleKey = el.getAttribute('data-translate');
                sectionTitles[section.id] = translations['en'][titleKey] || el.textContent.trim();
            }
        });

        const sectionsOrder = [
            'lifecycle', 'global-functions', 'lua-gui', 'resources',
            'gameobject', 'transform', 'physics', 'audio', 'camera', 'input'
        ];

        sectionsOrder.forEach(sectionId => {
            const sectionFuncs = functionsData.filter(f => f.section === sectionId);
            if (sectionFuncs.length > 0 && sectionTitles[sectionId]) {
                fullDocsText += `==============================\n${sectionTitles[sectionId]}\n==============================\n\n`;

                sectionFuncs.forEach(func => {
                    let codeText = func.code.replace(/<[^>]*>?/gm, ''); // Убираем HTML из кода

                    if (func.commentKey && translations['en'][`comment_${func.commentKey}`]) {
                        const commentTag = `--[[comment:${func.commentKey}]]`;
                        codeText = codeText.replace(commentTag, translations['en'][`comment_${func.commentKey}`]);
                    }

                    fullDocsText += `Function: ${func.name.replace(/<[^>]*>?/gm, '')}\n`;
                    fullDocsText += `Description: ${func.desc['en'].replace(/<[^>]*>?/gm, '')}\n`;
                    fullDocsText += `Example:\n${codeText}\n\n------------------------------\n\n`;
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
        // Удаляем старый, если есть
        button.replaceWith(button.cloneNode(true));
    });

    document.querySelectorAll('.function-copy').forEach(button => {
        button.addEventListener('click', function () {
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


function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    notification.querySelector('span').textContent = message;
    notification.classList.add('show');
    setTimeout(() => { notification.classList.remove('show'); }, 3000);
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const panel = document.getElementById('mobileMenuPanel');
    const overlay = document.getElementById('mobileMenuOverlay');
    const closeBtn = document.getElementById('mobileMenuClose');
    const mobileSettingsBtn = document.getElementById('mobileSettingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');

    const docItem = document.querySelector('#mobileMenuPanel .mobile-nav-item.has-submenu');
    const docLink = document.querySelector('#mobileMenuPanel .mobile-nav-link[data-page="documentation"]');
    const docToggle = document.querySelector('#mobileMenuPanel .mobile-submenu-toggle');
    const docSubmenu = document.getElementById('mobileSubmenuContent');

    if (!menuBtn || !panel || !overlay || !closeBtn) return;

    closeMobileMenu = function () {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        if (docItem) {
            if (docSubmenu) docSubmenu.style.maxHeight = '0px';
        }
    }

    menuBtn.addEventListener('click', () => {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (localStorage.getItem('docSubmenuOpen') === 'true') {
            docItem.classList.add('active');
            docSubmenu.style.maxHeight = docSubmenu.scrollHeight + 'px';
        } else {
            docItem.classList.remove('active');
            docSubmenu.style.maxHeight = '0px';
        }
    });

    closeBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);

    if (mobileSettingsBtn && settingsPanel) {
        mobileSettingsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeMobileMenu();
            setTimeout(() => {
                settingsPanel.classList.add('active');
            }, 300);
        });
    }

    if (docToggle && docItem && docSubmenu) {
        docToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isActive = docItem.classList.toggle('active');
            if (isActive) {
                docSubmenu.style.maxHeight = docSubmenu.scrollHeight + "px";
                localStorage.setItem('docSubmenuOpen', 'true');
            } else {
                docSubmenu.style.maxHeight = "0px";
                localStorage.setItem('docSubmenuOpen', 'false');
            }
        });
    }

    if (docLink) {
        docLink.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('documentation');
            closeMobileMenu();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const desktopLink = document.querySelector('.nav-link[data-page="documentation"]');
            if (desktopLink) desktopLink.classList.add('active');
        });
    }

    panel.querySelectorAll('.mobile-nav-link[data-page]').forEach(link => {
        if (link.getAttribute('data-page') !== 'documentation') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                switchPage(page);
                closeMobileMenu();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                const desktopLink = document.querySelector(`.nav-link[data-page="${page}"]`);
                if (desktopLink) desktopLink.classList.add('active');
            });
        }
    });
}

function initSettings() {
    const settingsBtnDesktop = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsClose = document.getElementById('settingsClose');

    const themeOptions = document.querySelectorAll('.theme-option');
    const fontOptions = document.querySelectorAll('.font-option');
    const languageOptions = document.querySelectorAll('.language-option');

    const settingsTabs = document.querySelectorAll('.settings-tab-btn');
    const settingsTabPanels = document.querySelectorAll('.settings-tab-panel');

    const columnToggle = document.getElementById('columnToggle');
    const docPage = document.getElementById('documentation-page');
    const effectsSlider = document.getElementById('effectsSlider'); 

    if (settingsBtnDesktop) settingsBtnDesktop.addEventListener('click', () => settingsPanel.classList.add('active'));
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

    if (effectsSlider) {
        effectsSlider.addEventListener('input', () => {
            const level = parseInt(effectsSlider.value, 10);
            toggleVisualEffects(level);
        });
    }

}


function changeTheme(theme) {
    document.body.classList.add('theme-changing');
    setTimeout(() => {
        document.body.classList.remove('programmer-theme', 'gorebox-theme');

        if (theme === 'programmer') {
            document.body.classList.add('programmer-theme');
        } else if (theme === 'gorebox') {
            document.body.classList.add('gorebox-theme');
        }

        // Анимация смены темы должна быть статичной, если эффекты не 'full'
        if(currentEffectsLevel < 2) {
             document.body.classList.remove('theme-changing');
        }
        
        setTimeout(() => document.body.classList.remove('theme-changing'), 800);
        localStorage.setItem('theme', theme);
    }, 300);
}

function changeFont(font) {
    if (font === 'wes_fy_black') {
        document.body.classList.add('font-wes-fy-black');
    } else {
        document.body.classList.remove('font-wes-fy-black');
    }
    localStorage.setItem('font', font);
}

function clearAllEffectElements() {
    if (cometInterval) {
        clearInterval(cometInterval);
        cometInterval = null;
    }

    document.querySelectorAll('.star, .comet-head, .comet-trail, .blood-pentagon').forEach(el => el.remove());
    document.querySelectorAll('style[data-comet-style="true"]').forEach(el => el.remove());

    if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
    }
    
    // Удаляем классы режимов
    document.body.classList.remove('effects-disabled', 'effects-static');
}


function toggleVisualEffects(level) {
    currentEffectsLevel = level; // 0, 1, 2
    
    // 1. Очищаем все старые эффекты
    clearAllEffectElements();

    // 2. Устанавливаем классы на body
    if (level === 0) {
        document.body.classList.add('effects-disabled');
    } else if (level === 1) {
        document.body.classList.add('effects-static');
    }
    // level === 2 не требует класса, это по умолчанию

    // 3. (Пере)создаем эффекты в соответствии с новым уровнем
    createStars();
    createComets();
    createBloodEffect();
    initParticles();
    
    // 4. Сохраняем
    localStorage.setItem('visualEffectsLevel', level.toString());
}


function loadSettings() {
    const savedTheme = localStorage.getItem('theme') || 'gorebox';
    changeTheme(savedTheme);
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-theme') === savedTheme);
    });

    const savedFont = localStorage.getItem('font') || 'default';
    changeFont(savedFont);
    document.querySelectorAll('.font-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-font') === savedFont);
    });

    // ИЗМЕНЕНО: Загрузка уровня эффектов
    // Загружаем ДО языка, чтобы changeLanguage() знал, как рендерить
    const savedEffectsLevel = parseInt(localStorage.getItem('visualEffectsLevel') || '2', 10);
    const effectsSlider = document.getElementById('effectsSlider');
    if (effectsSlider) {
        effectsSlider.value = savedEffectsLevel;
    }
    // Применяем эффекты
    toggleVisualEffects(savedEffectsLevel);


    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage); // Это загрузит блоги и т.д.


    const savedLayout = localStorage.getItem('layoutColumns') || 'one';
    const columnToggle = document.getElementById('columnToggle');
    const docPage = document.getElementById('documentation-page');
    if (columnToggle && docPage) {
        const isTwoColumns = savedLayout === 'two';
        columnToggle.checked = isTwoColumns;
        docPage.classList.toggle('two-column-layout', isTwoColumns);
    }
}


document.addEventListener('DOMContentLoaded', function () {

    // Инициализация функций, которые не зависят от данных
    initNavigation(); // Навигация по шапке
    initBlogModal();
    initMobileMenu();
    initSettings(); // Слушатели для панели настроек

    // Загрузка данных
    Promise.all([
        fetch('blog.json').then(res => {
            if (!res.ok) throw new Error('Failed to load blog.json');
            return res.json();
        }),
        fetch('functions.json').then(res => {
            if (!res.ok) throw new Error('Failed to load functions.json');
            return res.json();
        })
    ])
    .then(([blogData, funcData]) => {
        blogPosts = blogData;
        functionsData = funcData;

        // 1. Строим HTML на основе functions.json
        buildDocumentation(functionsData);
        
        // 2. Загружаем настройки (тема, язык и т.д.)
        // Это вызовет changeLanguage(), который переведет UI и функции
        loadSettings();

        // 3. Инициализируем функции, зависящие от данных
        initSearch();
        initDocsCopy();

        // 4. Восстанавливаем активную страницу
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
    })
    .catch(error => {
        console.error('Error loading essential data:', error);
        document.body.innerHTML = '<h1>Failed to load site data. Please check console.</h1>';
    });


    // Слушатель изменения размера окна
    window.addEventListener('resize', () => {
        const sidebar = document.getElementById('sidebar');
        const docPage = document.getElementById('documentation-page');

        if (window.innerWidth > 1024) {
            if (typeof closeMobileMenu === 'function') {
                closeMobileMenu();
            }
            if (docPage && docPage.classList.contains('active')) {
                sidebar.classList.add('active');
            }
        } else {
            sidebar.classList.remove('active');
        }
    });

    // Intersection Observer для анимаций
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Анимация появления блоков работает только на 'full'
            if (entry.isIntersecting && currentEffectsLevel === 2) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            } else if (currentEffectsLevel < 2) {
                // Если эффекты выключены или статичны, просто показываем блок
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section, .clickable-card-wrapper').forEach(el => {
        if (currentEffectsLevel < 2) {
            // Если эффекты не 'full', сразу показываем, не ждем observer
            el.style.opacity = '1';
            el.style.transform = 'none';
        } else {
            observer.observe(el);
        }
    });

});