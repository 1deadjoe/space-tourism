const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

let currentIndex = 0;

tabList.addEventListener('keydown',changeTabFocus);


tabs.forEach((tab)=>{
    tab.addEventListener('click',changeTabPanel)
})

function changeTabFocus(e){
    const keyDownLeft = 37;
    const keyDownRight = 39;

    if (e.keyCode===keyDownLeft || e.keyCode===keyDownRight){
        // change the tabindex of the all tabs to -1
        tabs.tabIndex=-1;

        if(e.keyCode===keyDownRight){
            currentIndex++;
                if (currentIndex >= tabs.length){
                    currentIndex=0
                }
        }else{
            currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = tabs.length - 1;
                }
        }
    }
    // change the tabindex of the current tab to 0
    tabs[currentIndex].tabIndex = 0;
    tabs[currentIndex].focus(); //applies focus styles
}


function changeTabPanel(e){
    targetTab = e.target;
    targetPanel = targetTab.getAttribute('aria-controls');
    targetPicture = targetTab.getAttribute('data-image');

    tabContainer = targetTab.parentNode;
    mainContainer = tabContainer.parentNode;

    // 1. Highlighting the active tab
    tabContainer.querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected',false);
    targetTab.setAttribute('aria-selected', true);
   
    // 2. display corresponding content for each tab
    hideContent(mainContainer,'[role="tabpanel"]');
    showContent(mainContainer,`#${targetPanel}`);

    // 3. display corresponding pictures for each tab
    hideContent(mainContainer,'picture');
    showContent(mainContainer,`#${targetPicture}`)
}

function hideContent(parent,content){
    parent
        .querySelectorAll(content)
            .forEach((item)=> item.setAttribute('hidden',true));
}
function showContent(parent,content){
    parent
        .querySelector(content)
            .removeAttribute('hidden');
}