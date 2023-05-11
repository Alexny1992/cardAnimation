let activeIndex = 0;

const groups = document.getElementById("card-group");

const handleLoveClick = () => {

    const nextIndex = activeIndex + 1 <= groups.length ? activeIndex + 1 :0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[dota-index="${nextIndex}"]`);


    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";    
    
    setTimeout(() => {
        nextGroup.dataset.status = "active"; 
        activeIndex = nextIndex;
    })

    activeIndex = nextIndex;
}