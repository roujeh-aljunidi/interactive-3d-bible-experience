const game = document.getElementById("game");

function setbackground(image) {
    document.body.style.backgroundImage = `url(images/${image})`;
}

function startStory() {
    setbackground("road.jpg");

    game.innerHTML = `
        <div class ="scene">
        scene 1 of 10
    </div>
        <p>imagine you are traveling along the road.
        until you suddenly discover someone laying down besides the path.
    </p> 

        <button onclick="injuredman()">countinue</button>
    `;
}
function injuredman() {
        setbackground("old-ruins.jpg");
    game.innerHTML = `
        <div class ="scene">
        scene 2 of 10
    </div>
        <p>the man  has been robbed and injured, he is unable to help himself.
        </p>
        <button onclick="helpChoice()">what would u do?
        </button>
    `;
}
    function helpChoice() {
            setbackground("bible.jpg");
        game.innerHTML = `
            <div class ="scene">
        scene 3 of 10
    </div>
            <p>you must decide how to respond.</p>
            <button onclick="helpMan()">stop and help</button>
            <button onclick="walkAway()">keep walking</button>
        `;
    }

   function helpMan() {
     setbackground("helping-hand.jpg");
        game.innerHTML = `
            <div class ="scene">
        scene 4 of 10
    </div>
            <p>
            you stop to help to help the injured man.
            it takes time but you know u did the right thing to do.
            </p>
            <button onclick="priestScene()">
            countinue
            </button>
        `;
    }
    function walkAway() {
            setbackground("walkaway.jpg");
        game.innerHTML = `
            <div class ="scene">
        scene 5 of 10
    </div>
            <p>
            you countinue your journey.
            as you walk,you wonder if you should have stopped to help.
            </p>
            <button onclick="priestScene()">
            countinue
            </button>
        `;
    }
    function priestScene() {
        game.innerHTML = `
            <div class ="scene">
        scene 6 of 10
    </div>
            <p>
          in jesus,parble, a priest also saw the injured man.
            </p>
            <button onclick=priestresult()>
            countinue
            </button>
        `;
    }
    function priestresult() {
        game.innerHTML = `
            <div class ="scene">
        scene 7 of 10
    </div>
            <p>
            the priest passed by without helping.
            </p>
            <button onclick=leviteScene()>
            countinue
            </button>
        `;
    }
    function leviteScene() {
        game.innerHTML = `
           <div class ="scene">
        scene 8 of 10
    </div>
            <p>
            later, a levite came along the same road.
            </p>
            <button onclick=leviteresult()>
            countinue
            </button>
        `;
    }

    function leviteresult() {
        game.innerHTML = `
           <div class ="scene">
        scene 9 of 10
    </div>
            <p>
            the levite also passed chose not to help.
            </p>
            <button onclick=samaritanScene()>
            countinue
            </button>
        `;
    }

    function samaritanScene() {
        game.innerHTML = `
            <div class ="scene">
        scene 10 of 10
    </div>
            <p>
            finally, a samaritan came along the road.
            </p>
            <button onclick=samaritanresult()>
            countinue
            </button>
        `;
    }

    function samaritanresult() {
        game.innerHTML = `
            <p>
            finally a samirtan arrived and saw the injured man.
            </p>
            <button onclick=lessonscreen()>
            what happened next?
            </button>
        `;
    }

    function lessonscreen() {
          setbackground("the-samaritans-choice.jpg");
        game.innerHTML = `
            <p>
            the samaritan stopped and cared for the injured man.
            he bandaged his wounds and he paid for his care.
            </p>

            <p>
            "love your neighbor as yourself"
            <br>
            matthew 22:39
            </p>
            <button onclick=ending()>
            countinue
            </button>
        `;
    }
    function ending() {
                  setbackground("lesson.jpg");
        game.innerHTML = `
       <div class ="scene">
       journey complete
    </div>
    <h2>lesson learned</h2>
    <div class="lesson">
    <p> the good samritan teaches us that kindness,compassion and mercy should be shown to everyone.
    </p>
    <p>
    love your neighbor as yourself.
    <br>
    matthew 22:39
    </p>
    </div>
    
    <h3>reflection</h3>

    <p>
    can you think of a time when somene helped you?
    </p>

    <p>
    how might you show kindess to someone this week?
    </p>
    <button onclick=location.reload()>
    restart journey
    </button>
        `; 
    }