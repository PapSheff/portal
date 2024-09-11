// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    loadMenu();
    loadNews();
    loadLandingPages();

    document.getElementById('add-news-btn').addEventListener('click', addNews);
    document.getElementById('add-landing-page-btn').addEventListener('click', createLandingPage);
});

function loadMenu() {
    const menu = document.getElementById('menu');
    let menuLinks = JSON.parse(localStorage.getItem('menuLinks')) || ["Home", "About Us", "Contact"];
    
    menu.innerHTML = '';
    menuLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = '#';
        a.innerText = link;
        a.classList.add('hover:underline');
        menu.appendChild(a);
    });
    
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit Menu';
    editBtn.classList.add('ml-4', 'px-2', 'py-1', 'bg-yellow-500', 'text-white', 'rounded');
    editBtn.addEventListener('click', editMenu);
    menu.appendChild(editBtn);
}

function editMenu() {
    let menuLinks = JSON.parse(localStorage.getItem('menuLinks')) || ["Home", "About Us", "Contact"];
    const newLinks = prompt('Edit menu links (comma separated)', menuLinks.join(', '));
    if (newLinks) {
        localStorage.setItem('menuLinks', JSON.stringify(newLinks.split(',').map(link => link.trim())));
        loadMenu();
    }
}

function loadNews() {
    const newsContainer = document.getElementById('news-container');
    let news = JSON.parse(localStorage.getItem('news')) || [];
    
    newsContainer.innerHTML = '';
    news.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('border-b', 'pb-4', 'mb-4');
        
        const title = document.createElement('h3');
        title.classList.add('text-xl', 'font-bold');
        title.innerText = article.title;
        
        const content = document.createElement('p');
        content.innerText = article.content;
        
        articleDiv.appendChild(title);
        articleDiv.appendChild(content);
        newsContainer.appendChild(articleDiv);
    });
}

function addNews() {
    const title = prompt('Enter news title');
    const content = prompt('Enter news content');
    
    if (title && content) {
        let news = JSON.parse(localStorage.getItem('news')) || [];
        news.push({ title, content });
        localStorage.setItem('news', JSON.stringify(news));
        loadNews();
    }
}

function loadLandingPages() {
    const landingPagesContainer = document.getElementById('landing-pages-container');
    let pages = JSON.parse(localStorage.getItem('landingPages')) || [];

    landingPagesContainer.innerHTML = '';
    pages.forEach(page => {
        const pageDiv = document.createElement('div');
        pageDiv.classList.add('border-b', 'pb-4', 'mb-4');

        const title = document.createElement('h3');
        title.classList.add('text-xl', 'font-bold');
        title.innerText = page.title;

        pageDiv.appendChild(title);
        landingPagesContainer.appendChild(pageDiv);
    });
}

function createLandingPage() {
    const title = prompt('Enter landing page title');
    if (title) {
        let pages = JSON.parse(localStorage.getItem('landingPages')) || [];
        pages.push({ title });
        localStorage.setItem('landingPages', JSON.stringify(pages));
        loadLandingPages();
    }
}
