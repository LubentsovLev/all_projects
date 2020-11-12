@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
p{
  margin: 0;
}
html {
  font-family: poppins;
  box-sizing: border-box;
}

.widget {
  min-height: 200px;
  width: auto;
  margin: 0 auto;
  border: 2px solid rgb(0, 250, 208);
  border-radius: 20px;
  padding: 10px;
  margin: 10px 0;
}
.widget__inner {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rating img {
  max-width: 100%;
  width: 50px;
  height: 50px;
  border-radius: 20px;
}
.star__active {
  background-color: gold;
}
.rating .widget__inner {
}
.stars__inner {
  display: block;
}
.js__photo-container img {
  max-width: 100%;
  border-radius: 20px;
}
.widget input,
.widget button {
  max-width: 200px;
  width: 100%;
  border-radius: 5px;
  padding: 10px 5px;
  border: 1px solid rgb(0, 250, 208);
  background-color: #fff;
  margin: 10px 0;
  transition: all 0.3s;
}
.widget button{
  border-radius:50px;
  text-transform: uppercase;
  border: 1px solid rgb(163, 255, 240);
  background-color: rgb(105, 94, 253);
  color: rgb(255, 255, 255);
  cursor: pointer;

}
.widget button:hover{
  background-color: rgb(188, 255, 111);
  border: 1px solid rgb(174, 197, 193);
  transition: all 0.3s;
  color: #000;

}
.g{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.brendI{
  flex-direction: column;
}
.select {
  position: relative;
  display: block;
  min-width: 220px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.select__head {
  width: 100%;
  max-width: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 14px 15px;
  font-size: 14px;
  line-height: 18px;
  color: rgba(66, 67, 72, 0.8);
  cursor: pointer;
}

.select__head::after {
  width: 10px;
  height: 6px;
  background: #FFF url("data:image/svg+xml,%3C