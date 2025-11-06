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

        tutorials: "Уроки",
        api_reference: "API Справочник",
        tutorials_header: "Начало работы: Ваш первый мод",
        tutorials_intro: "Добро пожаловать в мир моддинга GoreBox! Это пошаговое руководство проведет вас от создания пустого файла до полностью рабочего мода \"Bouncing DVD Logo\". К концу этого урока вы поймете структуру мода, жизненный цикл и как использовать GUI.",
        tutorials_step1_title: "Шаг 1: Где должны находиться моды?",
        tutorials_step1_desc: "Игра ищет моды в специальной папке в вашем компьютере. Прежде чем что-либо создавать, вам нужно найти или создать эту папку.",
        tutorials_step1_desc2: "Нажмите <kbd>Win + R</kbd>, вставьте этот путь и нажмите Enter:",
        tutorials_step1_desc3: "Если папки `Mods` не существует, просто создайте ее. Каждый мод, который вы создаете, будет отдельной папкой внутри этой папки `Mods`.",
        tutorials_step2_title: "Шаг 2: Структура папки мода",
        tutorials_step2_desc: "Каждый мод — это папка. Давайте создадим наш мод. Внутри папки `Mods` создайте новую папку с именем `MyMod`. Внутри нее должны лежать 4 обязательных элемента:",
        tutorials_file_main: "— Это \"мозг\" вашего мода. Весь ваш Lua-код будет здесь.",
        tutorials_file_info: "— Информация о вашем моде, которую игра показывает в меню.",
        tutorials_file_icon: "— Иконка 256x256, которую игра показывает в меню.",
        tutorials_file_icons: "— (Необязательно) Папка для наших собственных изображений, которые мы будем использовать в моде.",
        tutorials_step3_title: "Шаг 3: Файл info.txt",
        tutorials_step3_desc: "Это простой текстовый файл. Создайте `info.txt` внутри папки `MyMod` и вставьте в него следующее:",
        tutorials_info_name: ": Название мода.",
        tutorials_info_desc: ": Описание в меню.",
        tutorials_info_ver: ": Ваша версия мода.",
        tutorials_info_active: ": `true` или `false`. Определяет, включен ли мод при запуске.",
        tutorials_step4_title: "Шаг 4: Иконки",
        tutorials_step4_desc: "Вам понадобятся изображения. Вы можете использовать свои собственные или скачать готовый набор, который мы будем использовать в этом уроке.",
        tutorials_step4_desc2: "1. Скачайте `icon.jpg` (иконка мода) и `vabish.jpg` (лого DVD) по ссылкам ниже.<br>2. Поместите `icon.jpg` в корень папки `MyMod`.<br>3. Создайте папку `icons` внутри `MyMod`.<br>4. Поместите `vabish.jpg` внутрь папки `icons`.",
        tutorials_step5_title: "Шаг 5: Код (main.lua)",
        tutorials_step5_desc: "Настало время для \"мозга\". Создайте `main.lua` и вставьте в него этот код. Не волнуйтесь, мы разберем каждую часть.",
        tutorials_step6_title: "Шаг 6: Разбор кода",
        tutorials_step6_1: "<b>Локальная таблица (M):</b> Каждый мод в Lua - это таблица. Мы называем ее `M` (сокращение от Module). Все наши функции (`M.start`, `M.update`) принадлежат этой таблице.",
        tutorials_step6_2: "<b>Переменные:</b> Мы объявляем переменные вверху, чтобы хранить текстуру, позицию и скорость нашего логотипа.",
        tutorials_step6_3: "<b>M.start():</b> Срабатывает один раз при запуске игры. Идеальное место для загрузки ресурсов (как `texture.load`) и установки начальных значений (как случайная позиция).",
        tutorials_step6_4: "<b>M.update():</b> Срабатывает постоянно, много раз в секунду. Здесь мы обновляем позицию логотипа (`dvdPos.x = dvdPos.x + dvdSpeed.x`) и проверяем, не ударился ли он о стену.",
        tutorials_step6_5: "<b>M.gui_update():</b> Тоже срабатывает постоянно. Используется *только* для рисования. Мы используем `gui.beginArea` и `gui.box`, чтобы нарисовать нашу текстуру в позиции, которую мы рассчитали в `M.update`.",
        tutorials_step6_6: "<b>return M:</b> В конце файла мы всегда должны возвращать нашу главную таблицу `M`, чтобы игра могла ее использовать.",
        tutorials_step7_title: "Шаг 7: Запуск!",
        tutorials_step7_desc: "Сохраните все файлы. Убедитесь, что `active:true` в вашем `info.txt`. Запустите GoreBox. Если вы все сделали правильно, вы увидите логотип Vabish, отскакивающий от краев экрана!",
        tutorials_step7_desc2: "Поздравляем! Вы только что создали свой первый мод, изучив файловую структуру, жизненный цикл и основы GUI. Теперь вы готовы к более сложным задачам.",

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
        comment_show_cursor: "-- Показать курсор (для меню)",

        tut_code_1: "-- 1. Таблица, в которой будет храниться наш мод",
        tut_code_2: "-- 2. Переменные для нашего мода",
        tut_code_3: "-- 3. Жизненный цикл: Start()",
        tut_code_4: "-- Вызывается ОДИН РАЗ при загрузке мода",
        tut_code_5: "-- Загружаем наше изображение из папки 'icons'",
        tut_code_6: "-- Устанавливаем случайную начальную позицию",
        tut_code_7: "-- 4. Жизненный цикл: Update()",
        tut_code_8: "-- Вызывается КАЖДЫЙ КАДР. Здесь живет вся логика.",
        tut_code_9: "-- Двигаем логотип",
        tut_code_10: "-- Проверка столкновений с краями экрана",
        tut_code_11: "-- Меняем направление",
        tut_code_12: "-- 5. Жизненный цикл: Gui_Update()",
        tut_code_13: "-- Вызывается каждый кадр (после Update). Здесь мы РИСУЕМ.",
        tut_code_14: "-- Если текстура еще не загрузилась, ничего не делаем",
        tut_code_15: "-- Рисуем наше изображение в его текущей позиции",
        tut_code_16: "-- 6. Обязательно возвращаем таблицу мода"
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

        tutorials: "Tutorials",
        api_reference: "API Reference",
        tutorials_header: "Getting Started: Your First Mod",
        tutorials_intro: "Welcome to the world of GoreBox modding! This step-by-step guide will take you from an empty file to a fully working \"Bouncing DVD Logo\" mod. By the end, you'll understand mod structure, lifecycles, and how to use the GUI.",
        tutorials_step1_title: "Step 1: Where do mods live?",
        tutorials_step1_desc: "The game looks for mods in a special folder on your computer. Before creating anything, you need to find or create this folder.",
        tutorials_step1_desc2: "Press <kbd>Win + R</kbd>, paste in this path, and hit Enter:",
        tutorials_step1_desc3: "If the `Mods` folder doesn't exist, go ahead and create it. Every mod you make will be a separate folder inside this `Mods` folder.",
        tutorials_step2_title: "Step 2: Mod Folder Structure",
        tutorials_step2_desc: "Every mod is a folder. Let's create ours. Inside the `Mods` folder, create a new folder named `MyMod`. Inside it, you need 4 essential items:",
        tutorials_file_main: "— This is the \"brain\" of your mod. All your Lua code goes here.",
        tutorials_file_info: "— Information about your mod that the game shows in the menu.",
        tutorials_file_icon: "— A 256x256 icon the game shows in the menu.",
        tutorials_file_icons: "— (Optional) A folder for our own images to use in the mod.",
        tutorials_step3_title: "Step 3: The info.txt file",
        tutorials_step3_desc: "This is a simple text file. Create `info.txt` inside your `MyMod` folder and paste this in:",
        tutorials_info_name: ": The name of your mod.",
        tutorials_info_desc: ": The description in the menu.",
        tutorials_info_ver: ": Your mod's version.",
        tutorials_info_active: ": `true` or `false`. Toggles if the mod is on by default.",
        tutorials_step4_title: "Step 4: The Icons",
        tutorials_step4_desc: "You'll need images. You can use your own, or download the pre-made pack we'll use for this tutorial.",
        tutorials_step4_desc2: "1. Download `icon.jpg` (the mod icon) and `vabish.jpg` (the DVD logo) from the links below.<br>2. Place `icon.jpg` in the root of your `MyMod` folder.<br>3. Create a new folder inside `MyMod` called `icons`.<br>4. Place `vabish.jpg` inside the `icons` folder.",
        tutorials_step5_title: "Step 5: The Code (main.lua)",
        tutorials_step5_desc: "Time for the \"brain\". Create `main.lua` and paste in this code. Don't worry, we'll break down every part.",
        tutorials_step6_title: "Step 6: Code Breakdown",
        tutorials_step6_1: "<b>Local Table (M):</b> Every mod in Lua is a table. We call it `M` (for Module). All our functions (`M.start`, `M.update`) belong to this table.",
        tutorials_step6_2: "<b>Variables:</b> We declare variables at the top to store our logo's texture, position, and speed.",
        tutorials_step6_3: "<b>M.start():</b> Runs once when the mod loads. This is the perfect place to load assets (like `texture.load`) and set up initial values (like a random position).",
        tutorials_step6_4: "<b>M.update():</b> Runs constantly, many times per second. This is where we update the logo's position (`dvdPos.x = dvdPos.x + dvdSpeed.x`) and check if it hit a wall.",
        tutorials_step6_5: "<b>M.gui_update():</b> Also runs constantly. This is used *only* for drawing. We use `gui.beginArea` and `gui.box` to draw our texture at the position we calculated in `M.update`.",
        tutorials_step6_6: "<b>return M:</b> At the end of the file, we must always return our main table `M` so the game can use it.",
        tutorials_step7_title: "Step 7: Run it!",
        tutorials_step7_desc: "Save all your files. Make sure `active:true` is in your `info.txt`. Launch GoreBox. If you did everything right, you should see the Vabish logo bouncing off the screen edges!",
        tutorials_step7_desc2: "Congratulations! You've just made your first mod, learned the file structure, the lifecycle, and GUI basics. You're ready for more complex challenges.",

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
        comment_show_cursor: "-- Show cursor (for menu)",

        tut_code_1: "-- 1. A table to hold our mod",
        tut_code_2: "-- 2. Variables for our mod",
        tut_code_3: "-- 3. Lifecycle: Start()",
        tut_code_4: "-- Called ONCE when the mod loads",
        tut_code_5: "-- Load our image from the 'icons' folder",
        tut_code_6: "-- Set a random starting position",
        tut_code_7: "-- 4. Lifecycle: Update()",
        tut_code_8: "-- Called EVERY FRAME. All logic lives here.",
        tut_code_9: "-- Move the logo",
        tut_code_10: "-- Check for screen edge collision",
        tut_code_11: "-- Flip direction",
        tut_code_12: "-- 5. Lifecycle: Gui_Update()",
        tut_code_13: "-- Called every frame (after Update). We DRAW here.",
        tut_code_14: "-- If the texture hasn't loaded yet, do nothing",
        tut_code_15: "-- Draw our image at its current position",
        tut_code_16: "-- 6. Must return the mod table"
    }
};


let currentLang = 'en';
const typingTimers = new Map();
let cometInterval;

let blogPosts = [];
let functionsData = [];
let closeMobileMenu = () => { };
let currentEffectsLevel = 2;

const SECTION_ORDER = [
    'lifecycle', 'global-functions', 'lua-gui', 'resources',
    'gameobject', 'transform', 'physics', 'audio', 'camera', 'input'
];

const SECTION_ICONS = {
    'lifecycle': 'fas fa-sync-alt',
    'global-functions': 'fas fa-globe',
    'lua-gui': 'fas fa-desktop',
    'resources': 'fas fa-paint-brush',
    'gameobject': 'fas fa-gamepad',
    'transform': 'fas fa-compass',
    'physics': 'fas fa-bowling-ball',
    'audio': 'fas fa-headphones',
    'camera': 'fas fa-camera',
    'input': 'fas fa-keyboard'
};

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

    Object.values(sections).forEach(s => { if (s) s.innerHTML = ''; });

    const groupedFunctions = {};

    functions.forEach(func => {
        const container = sections[func.section];
        if (!container) {
            console.warn(`No container found for section: ${func.section}`);
            return;
        }

        const descHtml = func.desc[currentLang] || func.desc['en'];
        const parts = descHtml.split(/<br\s*\/?>/);

        let mainDesc = parts[0];
        const params = [];
        let returns = null;
        let returnsPrefix = currentLang === 'ru' ? 'Возвращает:' : 'Returns:';

        for (let i = 1; i < parts.length; i++) {
            const part = parts[i].trim();
            if (part.startsWith('-')) {
                params.push(part.substring(1).trim());
            } else if (part.includes(returnsPrefix)) {
                returns = part.replace(/<b>.*?<\/b>/i, '').replace(returnsPrefix, '').trim();
            } else if (part) {
                mainDesc += ' ' + part;
            }
        }

        const cardHTML = `
        <div class="function-card" id="${func.id}">
            <div class="function-header">
                <h3 class="function-name">${func.name}</h3>
            </div>
            <p class="function-description" data-translate-desc="${func.id}">${mainDesc}</p>
            
            ${(params.length > 0 || returns) ? `
            <div class="function-details-toggle" role="button" tabindex="0" aria-expanded="false" aria-controls="details-${func.id}">
                <span><i class="fas fa-list-ul"></i> Parameters & Details</span>
                <i class="fas fa-chevron-down toggle-arrow"></i>
            </div>
            <div class="function-details-content" id="details-${func.id}">
                ${params.length > 0 ? `
                    <h4 class="details-title">Parameters</h4>
                    <ul class="param-list">
                        ${params.map(p => `<li>${p.replace(/`- (.*?)`/, '<code>$1</code>')}</li>`).join('')}
                    </ul>
                ` : ''}
                ${returns ? `
                    <h4 class="details-title">Returns</h4>
                    <p class="return-value">${returns}</p>
                ` : ''}
            </div>
            ` : ''}

            <div class="code-block">
                <button class="function-copy" title="Copy Example"><i class="far fa-copy"></i><i class="fas fa-check"></i></button>
                <pre>${func.code}</pre>
            </div>
        </div>
        `;

        container.insertAdjacentHTML('beforeend', cardHTML);

        if (!groupedFunctions[func.section]) {
            groupedFunctions[func.section] = {};
        }
        if (!groupedFunctions[func.section][func.category]) {
            groupedFunctions[func.section][func.category] = [];
        }
        groupedFunctions[func.section][func.category].push(func);


        if (func.commentKey) {
            const commentEl = container.querySelector(`#${func.id} .comment`);
            if (commentEl) {
                const cleanCode = func.code.match(/--\[\[comment:.*\]\]/);
                if (cleanCode) {
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

    buildSidebars(groupedFunctions);

    initCodeCopy();
    initNavigationSidebarLinks();
}

function buildSidebars(groupedFunctions) {
    const sidebarContainer = document.getElementById('sidebar');
    const mobileSidebarContainer = document.getElementById('mobile-sidebar-container');

    if (!sidebarContainer || !mobileSidebarContainer) return;

    let sidebarHTML = '';

    SECTION_ORDER.forEach(sectionId => {
        const sectionData = groupedFunctions[sectionId];
        if (!sectionData) return;

        const sectionIcon = SECTION_ICONS[sectionId] || 'fas fa-code-branch';
        const sectionTitleKey = sectionId.replace(/-/g, '_');

        sidebarHTML += `
            <div class="sidebar-section">
                <h3 class="sidebar-title">
                    <i class="${sectionIcon}"></i> 
                    <span data-translate="${sectionTitleKey}">${translations[currentLang][sectionTitleKey] || sectionId}</span>
                </h3>
        `;

        const categories = Object.keys(sectionData).sort();

        categories.forEach(categoryName => {
            if (categoryName !== "General") {
                sidebarHTML += `<h4 class="sidebar-category-title">${categoryName}</h4>`;
            }

            sidebarHTML += `<ul class="sidebar-links">`;

            const functions = sectionData[categoryName];
            functions.forEach(func => {
                const linkName = func.name.replace(/<[^>]*>?/gm, '').replace(/\(.*\)/, '').trim();
                const linkIconMatch = func.name.match(/<i class="([^"]+)"><\/i>/);
                const linkIcon = linkIconMatch ? linkIconMatch[0] : '<i class="fas fa-code"></i>';

                sidebarHTML += `
                    <li><a href="#${func.id}" class="sidebar-link" data-function="${func.id}">${linkIcon} ${linkName}</a></li>
                `;
            });

            sidebarHTML += `</ul>`;
        });

        sidebarHTML += `</div>`;
    });

    sidebarContainer.innerHTML = sidebarHTML;
    mobileSidebarContainer.innerHTML = sidebarHTML;
}


function updateFunctionTranslations(lang) {
    if (!functionsData) return;
    functionsData.forEach(func => {
        const descHtml = func.desc[lang] || func.desc['en'];
        const parts = descHtml.split(/<br\s*\/?>/);

        let mainDesc = parts[0];
        const params = [];
        let returns = null;
        let returnsPrefix = lang === 'ru' ? 'Возвращает:' : 'Returns:';

        for (let i = 1; i < parts.length; i++) {
            const part = parts[i].trim();
            if (part.startsWith('-')) {
                params.push(part.substring(1).trim());
            } else if (part.includes(returnsPrefix)) {
                returns = part.replace(/<b>.*?<\/b>/i, '').replace(returnsPrefix, '').trim();
            } else if (part) {
                mainDesc += ' ' + part;
            }
        }

        const card = document.getElementById(func.id);
        if (!card) return;

        const descEl = card.querySelector('.function-description');
        if (descEl) {
            descEl.innerHTML = mainDesc;
        }

        const paramListEl = card.querySelector('.param-list');
        if (paramListEl) {
            paramListEl.innerHTML = params.map(p => `<li>${p.replace(/`- (.*?)`/, '<code>$1</code>')}</li>`).join('');
        }

        const returnEl = card.querySelector('.return-value');
        if (returnEl) {
            if (returns) {
                returnEl.innerHTML = returns;
                const titleEl = returnEl.previousElementSibling;
                if (titleEl && titleEl.classList.contains('details-title')) {
                    titleEl.style.display = '';
                }
            } else {
                returnEl.innerHTML = '';
                const titleEl = returnEl.previousElementSibling;
                if (titleEl && titleEl.classList.contains('details-title')) {
                    titleEl.style.display = 'none';
                }
            }
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

    updateFunctionTranslations(lang);

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

        if (currentEffectsLevel === 2) {
            star.style.animationDelay = `${Math.random() * 6}s`;
            star.style.animationName = 'twinkle';
        }

        spaceBg.appendChild(star);
    }
}

function createComets() {
    const spaceBg = document.getElementById('spaceBackground');
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

    if (!container || currentEffectsLevel < 2) return;

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
            const nameText = func.name.replace(/<[^>]*>?/gm, '');
            return nameText.toLowerCase().includes(query) || descText.toLowerCase().includes(query);
        });

        if (results.length > 0) {
            searchResults.innerHTML = results.map(func => {
                const funcName = func.name.replace(/<[^>]*>?/gm, '');
                const funcDesc = func.desc[currentLang].split(/<br\s*\/?>/)[0].replace(/<[^>]*>?/gm, '');

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

        if (currentEffectsLevel === 2) {
            funcElement.classList.add('highlight-animation');
            funcElement.addEventListener('animationend', () => {
                funcElement.classList.remove('highlight-animation');
            }, { once: true });
        } else {
            funcElement.style.boxShadow = '0 0 25px rgba(99, 102, 241, 0.7)';
            setTimeout(() => {
                funcElement.style.boxShadow = '';
            }, 1000);
        }
    }
}

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

    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);

            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const parentDropdown = this.closest('.has-dropdown');
            if (parentDropdown) {
                parentDropdown.querySelector('.nav-link.no-click').classList.add('active');
            }
        });
    });

    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            switchPage(page);

            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const targetLink = document.querySelector(`.nav-link[data-page="${page}"]`);
            if (targetLink) {
                const parentDropdown = targetLink.closest('.has-dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('.nav-link.no-click').classList.add('active');
                    targetLink.classList.add('active');
                } else {
                    targetLink.classList.add('active');
                }
            }
        });
    });
}

function initNavigationSidebarLinks() {
    ['sidebar', 'mobile-sidebar-container'].forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.addEventListener('click', function (e) {
            const link = e.target.closest('.sidebar-link');
            if (!link) return;

            e.preventDefault();
            const funcId = link.getAttribute('data-function');
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
        if (sidebar) {
            if (pageId === 'documentation') {
                if (window.innerWidth > 1024) { sidebar.classList.add('active'); }
            } else {
                sidebar.classList.remove('active');
            }
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

        let fullDocsText = 'GoreBox Modding API v1.1\n\n';
        const sectionTitles = {};
        document.querySelectorAll('#documentation-page .section-title').forEach(el => {
            const section = el.closest('.section');
            if (section) {
                const titleKey = el.getAttribute('data-translate');
                sectionTitles[section.id] = translations['en'][titleKey] || el.textContent.trim();
            }
        });

        SECTION_ORDER.forEach(sectionId => {
            const sectionFuncs = functionsData.filter(f => f.section === sectionId);
            if (sectionFuncs.length > 0 && sectionTitles[sectionId]) {
                fullDocsText += `==============================\n${sectionTitles[sectionId]}\n==============================\n\n`;

                sectionFuncs.forEach(func => {
                    let codeText = func.code.replace(/<[^>]*>?/gm, '');

                    if (func.commentKey && translations['en'][`comment_${func.commentKey}`]) {
                        const commentTag = `--[[comment:${func.commentKey}]]`;
                        codeText = codeText.replace(commentTag, translations['en'][`comment_${func.commentKey}`]);
                    }

                    const descHtml = func.desc['en'];
                    const parts = descHtml.split(/<br\s*\/?>/);
                    let mainDesc = parts[0].replace(/<[^>]*>?/gm, '');
                    const params = [];
                    let returns = null;
                    let returnsPrefix = 'Returns:';

                    for (let i = 1; i < parts.length; i++) {
                        const part = parts[i].trim().replace(/<[^>]*>?/gm, '');
                        if (part.startsWith('-')) {
                            params.push(part);
                        } else if (part.includes(returnsPrefix)) {
                            returns = part.replace(returnsPrefix, '').trim();
                        } else if (part) {
                            mainDesc += ' ' + part;
                        }
                    }


                    fullDocsText += `Function: ${func.name.replace(/<[^>]*>?/gm, '')}\n`;
                    fullDocsText += `Description: ${mainDesc}\n`;

                    if (params.length > 0) {
                        fullDocsText += `Parameters:\n${params.join('\n')}\n`;
                    }
                    if (returns) {
                        fullDocsText += `Returns: ${returns}\n`;
                    }

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

    document.body.addEventListener('click', function (e) {
        const target = e.target.closest('.function-copy');
        if (!target) return;

        if (target.classList.contains('copied')) return;

        const codeBlock = target.closest('.code-block');
        if (!codeBlock) return;

        const pre = codeBlock.querySelector('pre');
        if (!pre) {
            console.error('Could not find <pre> block to copy.');
            return;
        }

        const textToCopy = pre.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showNotification('Code copied to clipboard!');
            target.classList.add('copied');
            setTimeout(() => { target.classList.remove('copied'); }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            showNotification('Could not copy code');
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

    if (!menuBtn || !panel || !overlay || !closeBtn) return;

    closeMobileMenu = function () {
        panel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        panel.querySelectorAll('.mobile-nav-item.active').forEach(item => {
            item.classList.remove('active');
            const content = item.querySelector(':scope > .mobile-submenu-content');
            if (content) {
                content.style.maxHeight = '0px';
            }
        });
    }

    menuBtn.addEventListener('click', () => {
        panel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        panel.querySelectorAll('.mobile-nav-item.active').forEach(item => {
            item.classList.remove('active');
            const content = item.querySelector(':scope > .mobile-submenu-content');
            if (content) {
                content.style.maxHeight = '0px';
            }
        });
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

    panel.querySelectorAll('.mobile-submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parentItem = e.target.closest('.mobile-nav-item');
            const content = parentItem.querySelector(':scope > .mobile-submenu-content');
            if (!content) return;

            const isOpening = !parentItem.classList.contains('active');

            parentItem.classList.toggle('active');

            if (isOpening) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
            }


            let currentParentContent = parentItem.closest('.mobile-submenu-content');
            while (currentParentContent) {

                let newParentHeight = 0;


                Array.from(currentParentContent.children).forEach(child => {

                    newParentHeight += child.offsetHeight;


                    if (child.classList.contains('mobile-nav-item') && child.classList.contains('active')) {
                        const childContent = child.querySelector(':scope > .mobile-submenu-content');
                        if (childContent) {
                            newParentHeight += childContent.scrollHeight;
                        }
                    }
                });

                currentParentContent.style.maxHeight = newParentHeight + "px";


                const parentOfCurrentContent = currentParentContent.closest('.mobile-nav-item');
                if (parentOfCurrentContent) {
                    currentParentContent = parentOfCurrentContent.closest('.mobile-submenu-content');
                } else {
                    currentParentContent = null;
                }
            }

        });
    });


    panel.querySelectorAll('.mobile-nav-link[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            switchPage(page);
            closeMobileMenu();


            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const desktopLink = document.querySelector(`.nav-link[data-page="${page}"]`);
            if (desktopLink) {
                const parentDropdown = desktopLink.closest('.has-dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('.nav-link.no-click').classList.add('active');
                } else {
                    desktopLink.classList.add('active');
                }
            }
        });
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


    document.documentElement.classList.remove('programmer-theme', 'gorebox-theme');
    if (theme === 'programmer') {
        document.documentElement.classList.add('programmer-theme');
    } else if (theme === 'gorebox') {
        document.documentElement.classList.add('gorebox-theme');
    }

    setTimeout(() => {

        document.body.classList.remove('programmer-theme', 'gorebox-theme');
        if (theme === 'programmer') {
            document.body.classList.add('programmer-theme');
        } else if (theme === 'gorebox') {
            document.body.classList.add('gorebox-theme');
        }


        if (currentEffectsLevel < 2) {
            document.body.classList.remove('theme-changing');
        }

        setTimeout(() => document.body.classList.remove('theme-changing'), 800);
        localStorage.setItem('theme', theme);
    }, 300);
}

function changeFont(font) {

    if (font === 'wes_fy_black') {
        document.documentElement.classList.add('font-wes-fy-black');
    } else {
        document.documentElement.classList.remove('font-wes-fy-black');
    }


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


    document.body.classList.remove('effects-disabled', 'effects-static');
}


function toggleVisualEffects(level) {
    currentEffectsLevel = level;


    clearAllEffectElements();


    if (level === 0) {
        document.body.classList.add('effects-disabled');
    } else if (level === 1) {
        document.body.classList.add('effects-static');
    }

    createStars();
    createComets();
    createBloodEffect();
    initParticles();


    localStorage.setItem('visualEffectsLevel', level.toString());
}


function loadSettings() {

    const savedTheme = localStorage.getItem('theme') || 'gorebox';
    const savedFont = localStorage.getItem('font') || 'wes_fy_black';
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedLayout = localStorage.getItem('layoutColumns') || 'two';
    const savedEffectsLevel = parseInt(localStorage.getItem('visualEffectsLevel') || '1', 10);


    changeTheme(savedTheme);
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-theme') === savedTheme);
    });


    changeFont(savedFont);
    document.querySelectorAll('.font-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-font') === savedFont);
    });


    const effectsSlider = document.getElementById('effectsSlider');
    if (effectsSlider) {
        effectsSlider.value = savedEffectsLevel;
    }
    toggleVisualEffects(savedEffectsLevel);


    changeLanguage(savedLanguage);
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === savedLanguage);
    });


    const columnToggle = document.getElementById('columnToggle');
    const docPage = document.getElementById('documentation-page');
    if (columnToggle && docPage) {
        const isTwoColumns = savedLayout === 'two';
        columnToggle.checked = isTwoColumns;
        docPage.classList.toggle('two-column-layout', isTwoColumns);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {

        initNavigation();
        initBlogModal();
        initMobileMenu();
        initSettings();
        initCodeCopy();


        document.body.addEventListener('click', function (e) {
            const toggle = e.target.closest('.function-details-toggle');
            if (!toggle) return;

            const content = toggle.nextElementSibling;
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            toggle.setAttribute('aria-expanded', !isExpanded);
            content.style.maxHeight = isExpanded ? '0px' : content.scrollHeight + 'px';
            toggle.classList.toggle('active', !isExpanded);
        });




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


                buildDocumentation(functionsData);


                loadSettings();


                initSearch();
                initDocsCopy();


                const savedPage = localStorage.getItem('activePage') || 'home';
                if (savedPage !== 'home') {
                    switchPage(savedPage);
                }


                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    const linkPage = link.getAttribute('data-page');

                    if (linkPage === savedPage) {
                        const parentDropdown = link.closest('.has-dropdown');
                        if (parentDropdown) {
                            parentDropdown.querySelector('.nav-link.no-click').classList.add('active');
                        } else {
                            link.classList.add('active');
                        }
                    }
                });
            })
            .catch(error => {
                console.error('Error loading essential data:', error);
                document.body.innerHTML = '<h1>Failed to load site data. Please check console.</h1>';
            });



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


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting && currentEffectsLevel === 2) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                } else if (currentEffectsLevel < 2) {

                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.section, .clickable-card-wrapper').forEach(el => {

            if (currentEffectsLevel < 2) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            } else {

                observer.observe(el);
            }
        });
    }, 0);
});