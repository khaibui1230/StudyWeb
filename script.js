const lessonsData = [
    // Spark Level 1 (Khối 3)
    { title: "Chủ đề 1 - Test 1", description: "Căn Bản Về Công Nghệ", url: "https://wayground.com/join/quiz/69a666192862e7d395b31437/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD1-T1%20%28Published%29/index.html", password: "25103011", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 1 - Test 2", description: "Căn Bản Về Công Nghệ", url: "https://wayground.com/join/quiz/69a666192862e7d395b31437/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD1-T2%20(Published)/index.html", password: "25103010", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 2 - Test 1", description: "Công Dân Số", url: "https://wayground.com/join/quiz/69a5ad461e3967ac09d111c3/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD2-T1%20(Published)/index.html", password: "25103009", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 3 - Test 1", description: "Quản Lí Thông Tin", url: "https://wayground.com/join/quiz/69a5b7e4cd20db6b47756bcd/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD3-T1%20(Published)/index.html", password: "25103008", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 3 - Test 2", description: "Quản Lí Thông Tin", url: "https://wayground.com/join/quiz/69a6463aa4d08de0f68df02b/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD3-T2%20(Published)/index.html", password: "25103007", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 4 - Test 1", description: "Sáng Tạo Nội Dung", url: "https://wayground.com/join/quiz/69a6463aa4d08de0f68df02b/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD4-T1%20(Published)/index.html", password: "25103006", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 5 - Test 1", description: "Truyền Thông", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD5-T1%20(Published)/index.html", password: "31025005", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 5 - Test 2", description: "Truyền Thông", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD5-T2%20(Published)/index.html", password: "31025004", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 6 - Test 1", description: "An Toàn Và Bảo Mật", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD6-T1%20(Published)/index.html", password: "31025003", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề 6 - Test 2", description: "An Toàn Và Bảo Mật", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CD6-T2%20(Published)/index.html", password: "31025002", points: "100", level: 1, icon: "💡" },
    { title: "Chủ đề Mở Rộng", description: "Ôn tập tổng hợp", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL1/GS6SparkL1-CDMR%20(Published)/index.html", password: "31025001", points: "100", level: 1, icon: "💡" },
    { title: "Bảo bối Spark 1", description: "Công cụ hỗ trợ học tập", url: "https://wayground.com/", level: 1, icon: "💎", type: "baoboi" },

    // Spark Level 2 (Khối 4)
    { title: "CD1 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/699c63dc9058bf7d27811eaf/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD1-T1%20(Published)/index.html", password: "41025013", points: "100", level: 2, icon: "🚀" },
    { title: "CD1 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69a0057bc9321eaa2825e8ee/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD1-T2%20(Published)/index.html", password: "41025012", points: "100", level: 2, icon: "🚀" },
    { title: "CD2 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/699cf78970669402d79ca2ab/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD2-T1%20(Published)/index.html", password: "41025011", points: "100", level: 2, icon: "🚀" },
    { title: "CD3 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69b8cd44b64783e7ac7791a5/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD3-T1%20(Published)/index.html", password: "41025010", points: "100", level: 2, icon: "🚀" },
    { title: "CD3 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69b966fde942e5dcfec63a98/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD3-T2%20(Published)/index.html", password: "41025009", points: "100", level: 2, icon: "🚀" },
    { title: "CD4 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69af881039fbcff4f38647bb/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD4-T1%20(Published)/index.html", password: "41025008", points: "100", level: 2, icon: "🚀" },
    { title: "CD4 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69b975e6546575919f8be1a5/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD4-T2%20(Published)/index.html", password: "41025007", points: "100", level: 2, icon: "🚀" },
    { title: "CD4 - Test 3", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/699c666b7699644c83fba5de/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD4-T3%20(Published)/index.html", password: "41025006", points: "100", level: 2, icon: "🚀" },
    { title: "CD5 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD5-T1%20(Published)/index.html", password: "41025005", points: "100", level: 2, icon: "🚀" },
    { title: "CD5 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD5-T2%20(Published)/index.html", password: "41025004", points: "100", level: 2, icon: "🚀" },
    { title: "CD6 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD6-T1%20(Published)/index.html", password: "41025003", points: "100", level: 2, icon: "🚀" },
    { title: "CD7 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD7-T1%20(Published)/index.html", password: "41025002", points: "100", level: 2, icon: "🚀" },
    { title: "CD7 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL2/GS6SparkL2-CD7-T2%20(Published)/index.html", password: "41025001", points: "100", level: 2, icon: "🚀" },
    { title: "Bảo bối Spark 2", description: "Công cụ hỗ trợ học tập", url: "https://wayground.com/", level: 2, icon: "💎", type: "baoboi" },

    // Spark Level 3 (Khối 5)
    { title: "CD1 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69cfb160dcf075db42f5a4b7/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD1-T1%20(Published)/index.html", password: "68759341", points: "100", level: 3, icon: "🌟" },
    { title: "CD1 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69a906522a224d430cba8852/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD1-T2%20(Published)/index.html", password: "68759342", points: "100", level: 3, icon: "🌟" },
    { title: "CD2 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69b22da0cc40041db1e2a1e4/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD2-T1%20(Published)/index.html", password: "68759343", points: "100", level: 3, icon: "🌟" },
    { title: "CD2 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/6983fdbeb98788693ef466cb/start?preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD2-T2%20(Published)/index.html", password: "68759344", points: "100", level: 3, icon: "🌟" },
    { title: "CD3 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69b977f2a019ee714d0dafc6/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD3-T1%20(Published)/index.html", password: "68759345", points: "100", level: 3, icon: "🌟" },
    { title: "CD4 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69b97be280a23b7c5711654a/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD4-T1%20(Published)/index.html", password: "68759346", points: "100", level: 3, icon: "🌟" },
    { title: "CD5 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/join/quiz/69bb683c834492a5a289105e/start?from=admin&preview=true", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD5-T1%20(Published)/index.html", password: "68759347", points: "100", level: 3, icon: "🌟" },
    { title: "CD5 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD5-T2%20(Published)/index.html", password: "51025004", points: "100", level: 3, icon: "🌟" },
    { title: "CD6 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD6-T1%20(Published)/index.html", password: "51025003", points: "100", level: 3, icon: "🌟" },
    { title: "CD7 - Test 1", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD7-T1%20(Published)/index.html", password: "51025002", points: "100", level: 3, icon: "🌟" },
    { title: "CD7 - Test 2", description: "Wayground & IC3 Review", url: "https://wayground.com/", ic3Url: "https://ic3review.iigvietnam.edu.vn/newdata/GS6SparkL3/GS6SparkL3-CD7-T2%20(Published)/index.html", password: "51025001", points: "100", level: 3, icon: "🌟" },
    { title: "Bảo bối Spark 3", description: "Công cụ hỗ trợ học tập", url: "https://wayground.com/", level: 3, icon: "💎", type: "baoboi" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // 2. Tab Navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const categoryContents = document.querySelectorAll('.category-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            tabBtns.forEach(b => b.classList.remove('active'));
            categoryContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // 3. Render Lessons
    const renderLessons = () => {
        lessonsData.forEach(lesson => {
            const lessonCard = document.createElement('div');
            lessonCard.classList.add('lesson-card');
            if (lesson.type === 'baoboi') lessonCard.classList.add('card-baoboi');

            const titleElement = document.createElement('h3');
            titleElement.innerHTML = `${lesson.icon} ${lesson.title}`;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = lesson.description;

            lessonCard.appendChild(titleElement);
            lessonCard.appendChild(descriptionElement);

            if (lesson.type !== 'baoboi') {
                const infoRow = document.createElement('div');
                infoRow.classList.add('info-row');
                infoRow.innerHTML = `
                    <div class="password-box">
                        <span>Mật khẩu:</span>
                        <strong>${lesson.password}</strong>
                        <button class="btn-copy-sm" onclick="copyToClipboard('${lesson.password}', this)" title="Copy Password">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </button>
                    </div>
                    <div class="points-box">
                        <span>🎯 ${lesson.points} pts</span>
                    </div>
                `;
                lessonCard.appendChild(infoRow);
            }

            const buttonGroup = document.createElement('div');
            buttonGroup.classList.add('button-group');

            const waygroundButton = document.createElement('button');
            waygroundButton.textContent = lesson.type === 'baoboi' ? "Play" : "Play Wayground";
            waygroundButton.classList.add('btn-wayground');
            waygroundButton.onclick = () => window.open(lesson.url, '_blank');
            buttonGroup.appendChild(waygroundButton);

            if (lesson.type !== 'baoboi') {
                const ic3Button = document.createElement('button');
                ic3Button.textContent = "IC3 Review";
                ic3Button.classList.add('btn-ic3');
                ic3Button.onclick = () => window.open(lesson.ic3Url, '_blank');
                buttonGroup.appendChild(ic3Button);
            }

            lessonCard.appendChild(buttonGroup);

            const targetContainer = document.querySelector(`#level-${lesson.level + 2} .lesson-container`);
            if (targetContainer) {
                targetContainer.appendChild(lessonCard);
            }
        });
    };

    // 4. Copy Function
    window.copyToClipboard = (text, btn) => {
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span style="font-size: 10px; color: #10b981; font-weight: bold;">Copied!</span>';
            setTimeout(() => { btn.innerHTML = originalHTML; }, 1500);
        });
    };

    renderLessons();

    // 5. Accordion Logic
    const levelHeaders = document.querySelectorAll('.level-header');
    levelHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parentSection = header.closest('.level-section');
            const content = parentSection.querySelector('.level-content');
            const isActive = parentSection.classList.contains('active');
            
            document.querySelectorAll('.level-section').forEach(s => {
                s.classList.remove('active');
                s.querySelector('.level-content').style.maxHeight = null;
            });

            if (!isActive) {
                parentSection.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    if (levelHeaders.length > 0) levelHeaders[0].click();
});