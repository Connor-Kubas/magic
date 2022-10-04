names = ['mountain', 'kenrith,_the_returned_king'];

for (let i = 0; i < names.length; i++) {

    dragElement(document.getElementById(names[i]));

        function dragElement(card) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            
            card.onmousedown = dragMouseDown;
            
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                card.style.top = (card.offsetTop - pos2) + "px";
                card.style.left = (card.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                /* stop moving when mouse button is released:*/
                document.onmouseup = null;
                document.onmousemove = null;
            }
    }

    // Card tapping
    const card = document.getElementById(names[i]);
    let clicked = 0;
    let tapped = false;
    const degrees = 45;

    // Check if the user has clicked, and if they have start timer
    card.addEventListener('click', function handleClick() {
        clicked += 1;
        if (clicked == 1) {
            setTimeout(tapCard, 400);
        }
    });

    // If they have clicked >= 2 times within the time limit the card is tapped
    function tapCard() {
        if (clicked >= 2) {
            tapped = !tapped;
            clicked = 0;
            tapCardGraphic();
            return;
        }
        clicked = 0;
    }

    // If the element is tapped then rotate else reset
    async function tapCardGraphic() {
        if (tapped) {
            for (let i = 0; i < degrees; i++) {
                card.style.transform = 'rotate(' + i + 'deg)';
                await sleep(1);
            }
            return;
        }
        for (let i = degrees; i >= 0; i--) {
            card.style.transform = 'rotate(' + i + 'deg)';
            await sleep(1);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 





