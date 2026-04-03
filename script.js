const lessonsData = [
    // Spark Level 1 (Khối 3)
    {
        title: "Chủ đề 1",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 1,
        icon: "💡"
    },
    {
        title: "Chủ đề 2",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 1,
        icon: "💡"
    },
    {
        title: "Chủ đề 3",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 1,
        icon: "💡"
    },
    {
        title: "Chủ đề 4",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 1,
        icon: "💡"
    },
    {
        title: "Chủ đề 5",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 1,
        icon: "💡"
    },
    {
        title: "Chủ đề 6",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 1,
        icon: "💡"
    },
    // Spark Level 2 (Khối 4)
    {
        title: "Chủ đề 1",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 2,
        icon: "🚀"
    },
    {
        title: "Chủ đề 2",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 2,
        icon: "🚀"
    },
    {
        title: "Chủ đề 3",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 2,
        icon: "🚀"
    },
    {
        title: "Chủ đề 4",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 2,
        icon: "🚀"
    },
    {
        title: "Chủ đề 5",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 2,
        icon: "🚀"
    },
    {
        title: "Chủ đề 6",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 2,
        icon: "🚀"
    },
    // Spark Level 3 (Khối 5)
    {
        title: "Chủ đề 1",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 3,
        icon: "🌟"
    },
    {
        title: "Chủ đề 2",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 3,
        icon: "🌟"
    },
    {
        title: "Chủ đề 3",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 3,
        icon: "🌟"
    },
    {
        title: "Chủ đề 4",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 3,
        icon: "🌟"
    },
    {
        title: "Chủ đề 5",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 3,
        icon: "🌟"
    },
    {
        title: "Chủ đề 6",
        description: "Start Playing - Wayground (Formerly Quizizz)",
        url: "https://wayground.com/",
        level: 3,
        icon: "🌟"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const renderLessons = () => {
        lessonsData.forEach(lesson => {
            const lessonCard = document.createElement('div');
            lessonCard.classList.add('lesson-card');

            const titleElement = document.createElement('h3');
            titleElement.innerHTML = `${lesson.icon} ${lesson.title}`;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = lesson.description;

            const startButton = document.createElement('button');
            startButton.textContent = "Bắt đầu";
            startButton.onclick = () => {
                window.open(lesson.url, '_blank');
            };

            lessonCard.appendChild(titleElement);
            lessonCard.appendChild(descriptionElement);
            lessonCard.appendChild(startButton);

            let targetContainer;
            if (lesson.level === 1) {
                targetContainer = document.querySelector('#level-3 .lesson-container');
            } else if (lesson.level === 2) {
                targetContainer = document.querySelector('#level-4 .lesson-container');
            } else if (lesson.level === 3) {
                targetContainer = document.querySelector('#level-5 .lesson-container');
            }

            if (targetContainer) {
                targetContainer.appendChild(lessonCard);
            }
        });
    };

    renderLessons();

    const levelHeaders = document.querySelectorAll('.level-header');

    levelHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parentSection = header.closest('.level-section');
            const content = parentSection.querySelector('.level-content');
            const icon = header.querySelector('.accordion-icon');

            // Close all other open sections
            document.querySelectorAll('.level-section.active').forEach(openSection => {
                if (openSection !== parentSection) {
                    openSection.classList.remove('active');
                    openSection.querySelector('.level-content').style.maxHeight = null;
                    openSection.querySelector('.accordion-icon').classList.remove('active');
                }
            });

            // Toggle the clicked section
            parentSection.classList.toggle('active');
            icon.classList.toggle('active');

            if (parentSection.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Open the first section by default
    if (levelHeaders.length > 0) {
        levelHeaders[0].click();
    }
});
