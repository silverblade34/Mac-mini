const speedPanel = document.getElementById('feature-panel-speed');
const activeClass2 = 'is-active';

const options = {
    threshold: 0.8,
    rootMargin: '64px',
}

const callBackForObserve = (entries) =>{
    const panelInformation = entries[0];
    const panelElement= panelInformation.target;
    if(
        !panelElement ||
         panelElement.classList.contains(activeClass2) ||
         panelInformation.isIntersecting === false
    ) return
     panelElement.classList.add(activeClass2);
   
}

const PanelObserver = new IntersectionObserver(callBackForObserve, options);

const activePanel = () =>{
    PanelObserver.observe(speedPanel);
}

activePanel();