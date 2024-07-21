document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault()
    const hamburger = document.querySelector('[data-opcao]')
    const tabs = document.querySelectorAll('[data-tab-button]')
    
    hamburger.addEventListener('click', abreFechaAba)

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(botao) {
            const alvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${alvo}]`)
            removeCursos()
            aba.classList.add('cursos__list--is-active')
            removeBotao()
            botao.target.classList.add('cursos__tabs__button--is-active')
        })
    }       
})

function abreFechaAba() {
    const opcao = document.getElementById('opcao')
    opcao.classList.toggle('active')
}

function removeCursos() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('cursos__list--is-active')
    }
}

function removeBotao() {
    const tabs = document.querySelectorAll('[data-tab-button]')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('cursos__tabs__button--is-active')
    }
}