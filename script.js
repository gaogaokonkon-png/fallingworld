document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('parallax-bg');
    if (!container) return;

    const NUM_OBJECTS = 50;

    // ▼▼▼ スクリプトの種類を大幅に増やしました ▼▼▼
    const scriptSnippets = [
        'Hello, World!', 'console.log("debug");',
        'const data = fetch(url);', 'return true;',
        'function gemini()', 'Array.map(n => n * 2)',
        'let count = 0;', 'const PI = 3.14;',
        'import { Gemini } from "gemini.js"', 'npm install gemini',
        '<div></div>', '<p>Gemini</p>',
        'color: #FFFFFF;', 'font-size: 16px;'
    ];
    
    // ▼▼▼ 顔文字のリストを新しく追加しました ▼▼▼
    const kaomoji = [
        '(´・ω・`)', '(^_^)', '(>_<)',
        'm(_ _)m', '(*^_^*)', '(^_^)v',
        'orz', '(;_;)', '(-_-)zzz'
    ];

    const blockShapes = [
        [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2}],
        [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:1,y:1}],
        [{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],
        [{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3}],
        [{x:0,y:0},{x:1,y:0},{x:1,y:1},{x:2,y:1}]
    ];

    for (let i = 0; i < NUM_OBJECTS; i++) {
        const object = document.createElement('div');
        object.classList.add('bg-object');

        // ▼▼▼ 顔文字を追加したので、ランダムの種類を4つに変更 ▼▼▼
        const type = Math.floor(Math.random() * 4);
        
        let randomLeft = Math.random() * 100;

        if (type === 0) { // 数字
            object.classList.add('bg-number');
            object.textContent = Math.round(Math.random());
        } else if (type === 1) { // スクリプト
            object.classList.add('bg-script');
            object.textContent = scriptSnippets[Math.floor(Math.random() * scriptSnippets.length)];
            if (randomLeft > 70) randomLeft = Math.random() * 70;
        } else if (type === 2) { // ブロック
            object.classList.add('bg-block');
            const shape = blockShapes[Math.floor(Math.random() * blockShapes.length)];
            const blockSize = 10;
            shape.forEach(pos => {
                const subBlock = document.createElement('div');
                subBlock.style.position = 'absolute';
                subBlock.style.width = `${blockSize}px`;
                subBlock.style.height = `${blockSize}px`;
                subBlock.style.backgroundColor = '#000000';
                subBlock.style.left = `${pos.x * blockSize}px`;
                subBlock.style.top = `${pos.y * blockSize}px`;
                object.appendChild(subBlock);
            });
        } else { // ▼▼▼ 顔文字の処理を新しく追加 ▼▼▼
            object.classList.add('bg-kaomoji');
            object.textContent = kaomoji[Math.floor(Math.random() * kaomoji.length)];
        }
        
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