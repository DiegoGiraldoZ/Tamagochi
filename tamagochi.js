let healthElement = document.getElementById('health')
let happinessElement = document.getElementById('happiness')
let staminaElement = document.getElementById('stamina')
let stateElement = document.getElementById('state')

let health = 100
let happiness = 100
let stamina = 100

healthElement.textContent = health
happinessElement.textContent = happiness
staminaElement.textContent = stamina

function updateState (){
    if (health > 50 && happiness > 50 && stamina > 50){
        stateElement.src = "./img/state1.png"
    }
    if (health <= 50 || happiness <= 50 || stamina <= 50){
        stateElement.src = "./img/state2.png"
    }
    if (health <= 0 || happiness <= 0 || stamina <= 0) {
        stateElement.src = "./img/state3.png"
        setTimeout(() => {
            alert('Tu mascota ha muerto!!')
            location.reload()
        }, 1000)
    }
}

let healthInterval = setInterval(() => {
    health = health - 5
    healthElement.textContent = health 
    if (health < 1) {
        clearInterval(healthInterval)
    }
}, 4000);

let happinessInterval = setInterval(() => {
    happiness = happiness - 10
    happinessElement.textContent = happiness
        if (happiness < 1) {
        clearInterval(happinessInterval)
    }
}, 4000);

let staminaInterval = setInterval(() => {
    stamina = stamina - 10
    staminaElement.textContent = stamina
    updateState()
    if (stamina < 1) {
        clearInterval(staminaInterval)
    }
}, 4000);

function addHealth() {
    health = health + 10
    healthElement.textContent = health
    updateState()
}

function addHappiness() {
    happiness = happiness + 10
    happinessElement.textContent = happiness
    updateState()
}

function addStamina() {
    stamina = stamina + 10
    staminaElement.textContent = stamina
    updateState()
}