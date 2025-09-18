document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('parallax-bg');
    if (!container) return;

    const NUM_OBJECTS = 50;

    // ▼▼▼ スクリプトの種類を大幅に増やしました ▼▼▼
    const scriptSnippets = [
        'Hello, World!', 'console.log("debug");', 'const data = fetch(url);',
        'return true;', 'function gemini()', 'Array.map(n => n * 2)',
        'let count = 0;', 'const PI = 3.14;', 'import { Gemini } from "gemini.js"',
        'npm install gemini', '<div></div>', '<p>Gemini</p>', 'color: #FFFFFF;',
        'font-size: 16px;', 'git commit -m "update"', 'SELECT * FROM users;',
        'public static void main()', 'opacity: 1;', 'font-family: "Space Mono";'
    ];
    
    // ▼▼▼ 顔文字のリストを大幅に増やしました ▼▼▼
    const kaomoji = [
        '(´・ω・`)', '(^_^)', '(>_<)', 'm(_ _)m', '(*^_^*)', '(^_^)v',
        'orz', '(;_;)', '(-_-)zzz', '(*`ω´*)', '(・∀・)', 'Σ(ﾟДﾟ)',
        '|дﾟ)', '(=^・^=)', 'm9(^Д^)'
    ];

    // blockShapesの配列は完全に削除しました

    for (let i = 0; i < NUM_OBJECTS; i++) {
        const object = document.createElement('div');
        object.classList.add('bg-object');

        // ▼▼▼ ブロックをなくし、3種類（数字、スクリプト、顔文字）からランダムに選択 ▼▼▼
        const type = Math.floor(Math.random() * 3);
        
        let randomLeft = Math.random() * 100;

        if (type === 0) { // 数字
            object.classList.add('bg-number');
            object.textContent = Math.round(Math.random());
        } else if (type === 1) { // スクリプト
            object.classList.add('bg-script');
            object.textContent = scriptSnippets[Math.floor(Math.random() * scriptSnippets.length)];
        } else { // 顔文字
            object.classList.add('bg-kaomoji');
            object.textContent = kaomoji[Math.floor(Math.random() * kaomoji.length)];
        }
        
        // 右端調整のif文は、CSS側で根本的に解決するため不要になりました

        const randomScale = Math.random() * 0.6 + 0.2;
        const randomDuration = Math.random() * 25 + 20;
        const randomDelay = Math.random() * -40;

        object.style.setProperty('--scale', randomScale);
        object.style.left = `${randomLeft}%`;
        object.style.top = '110vh';
        object.style.opacity = randomScale * 0.8 + 0.1;
        object.style.zIndex = Math.floor(randomScale * 10) - 5;
        object.style.animation = `float-up ${randomDuration}s ${randomDelay}s linear infinite`;

        container.appendChild(object);
    }
});
