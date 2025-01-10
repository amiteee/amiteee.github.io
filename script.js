const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContents=> tabContents.classList.remove)
        tabs.forEach(tab=> tab.classList.remove)
        tab.classList.add('active')
        target.classList.add('active')
    })
})