var form = document.getElementById('add-tab');
var textArea = document.getElementById('tabText');
var tabs = document.querySelector('.tabs');
var box = document.getElementById('box');

function addTab(event) {
    event.preventDefault();
    var newTabNumber = tabs.childElementCount + 1;
    var newTab = document.createElement('li');
    newTab.textContent = 'ТАБ ' + newTabNumber;
    newTab.className = 'tab';
    newTab.setAttribute('data-tab', newTabNumber);
    tabs.appendChild(newTab);
    var tabContent = document.createElement('div');
    tabContent.className = 'text';
    tabContent.setAttribute('data-text', newTabNumber);
    tabContent.textContent = textArea.value;
    box.appendChild(tabContent);
    textArea.value = '';
}

form.addEventListener('submit', addTab, false);

function selectTab (event) {
    if(event.target.hasAttribute('data-tab')) {
        var activeTab = document.querySelector('.active.tab');
        var activeText = document.querySelector('.text.active');
        if(activeTab) {
            activeTab.classList.remove('active');
        }
        if (activeText) {
            activeText.classList.remove('active');
        }
        event.target.classList.add('active');
        var tabNumber = event.target.getAttribute('data-tab');
        activeText = document.querySelector('div[data-text="'+tabNumber+'"]');
        activeText.classList.add('active');
    }
}

window.addEventListener('click', selectTab, false );



