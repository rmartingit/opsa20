// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu button to the DOM if it doesn't exist
    const nav = document.querySelector('nav');
    if (!document.querySelector('.mobile-menu-btn')) {
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        nav.parentNode.insertBefore(mobileMenuBtn, nav);
        
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
            nav.classList.remove('active');
            document.querySelector('.mobile-menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Search functionality
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            if (searchTerm.length < 2) return;
            
            // Redirect to search results page with query parameter
            window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
        });
    }
    
    // Handle search results if on search page
    if (window.location.pathname.includes('search.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('q');
        if (searchTerm) {
            document.getElementById('search-term').textContent = searchTerm;
            performSearch(searchTerm);
        }
    }
    
    // Table of contents generation
    const contentContainer = document.querySelector('.page-content');
    const tocContainer = document.querySelector('.toc');
    
    if (contentContainer && tocContainer) {
        const headings = contentContainer.querySelectorAll('h2, h3');
        if (headings.length > 0) {
            const tocList = document.createElement('ul');
            tocContainer.appendChild(tocList);
            
            headings.forEach((heading, index) => {
                // Add ID to the heading if it doesn't have one
                if (!heading.id) {
                    heading.id = `section-${index}`;
                }
                
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${heading.id}`;
                link.textContent = heading.textContent;
                listItem.appendChild(link);
                
                if (heading.tagName === 'H2') {
                    tocList.appendChild(listItem);
                    listItem.classList.add('toc-h2');
                } else if (heading.tagName === 'H3') {
                    // Find the previous H2 item
                    const prevH2Item = [...tocList.children].reverse().find(item => item.classList.contains('toc-h2'));
                    
                    if (prevH2Item) {
                        let subList = prevH2Item.querySelector('ul');
                        if (!subList) {
                            subList = document.createElement('ul');
                            prevH2Item.appendChild(subList);
                        }
                        subList.appendChild(listItem);
                    } else {
                        tocList.appendChild(listItem);
                    }
                }
                
                // Add click event for smooth scrolling
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        } else {
            tocContainer.style.display = 'none';
        }
    }
});

// Search functionality
function performSearch(searchTerm) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // Pages to search in
    const pagesToSearch = [
        { title: 'Pedido de Cotação', url: 'rfq.html' },
        { title: 'Introdução e Visão Geral', url: 'especificacoes/introducao.html' },
        { title: 'Requisitos Técnicos', url: 'especificacoes/requisitos.html' },
        { title: 'Modelo de Dados', url: 'especificacoes/modelo.html' },
        { title: 'Interface e Visualização', url: 'especificacoes/interface.html' },
        { title: 'Implementação', url: 'especificacoes/implementacao.html' }
    ];
    
    // Simulate search results (in a real implementation, this would fetch content from pages)
    let resultsFound = false;
    
    pagesToSearch.forEach(page => {
        // In a real implementation, we would fetch and search the actual content
        // For this demo, we'll just check if the search term is in the title
        if (page.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            const resultTitle = document.createElement('h3');
            const resultLink = document.createElement('a');
            resultLink.href = page.url;
            resultLink.textContent = page.title;
            resultTitle.appendChild(resultLink);
            
            const resultExcerpt = document.createElement('p');
            resultExcerpt.textContent = `Página contendo informações sobre ${page.title.toLowerCase()}. Clique para visualizar o conteúdo completo.`;
            
            resultItem.appendChild(resultTitle);
            resultItem.appendChild(resultExcerpt);
            resultsContainer.appendChild(resultItem);
            
            resultsFound = true;
        }
    });
    
    if (!resultsFound) {
        const noResults = document.createElement('p');
        noResults.textContent = 'Nenhum resultado encontrado para a sua pesquisa.';
        resultsContainer.appendChild(noResults);
    }
}

// Print functionality
function printPage() {
    window.print();
}

// Copy URL functionality
function copyPageUrl() {
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    
    const tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = 'URL copiado!';
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        document.body.removeChild(tooltip);
    }, 2000);
}
