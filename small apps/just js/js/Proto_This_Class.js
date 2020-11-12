@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

* {
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    margin: 0;
    min-height: 100vh;
}

button {
    background-color: rebeccapurple;
    color: white;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    font-family: inherit;
}

.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);

    display: none;
    align-items: center;
    justify-content: center;
}

.popup-container.active {
    display: flex;
}

.popup {
    background-color: #fff;
    border-radi