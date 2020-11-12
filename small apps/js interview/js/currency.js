html, body {
  box-sizing: border-box;
}

body {
  background: #000;
  color: #fff;
  font-family: 'Oswald', sans-serif;
}

a {
text-align: center;
color: #fff;
text-decoration: none;
display: block;
text-transform: uppercase;
}

nav ul li {
  display: inline-block;
  padding: 10px 40px 10px 0;
  cursor: pointer;
}

.container {
  max-width: 1200px;
  margin: 50px auto;
}

.box {
  border-radius: 4px;
  box-shadow: 6px 7px 28px 0 rgba(16, 16, 16, 0.7);
  min-height: 140px;
  min-width: calc(22% - 28px);
  padding: 0 10px;
  margin: 15px;
  border-width: 3px;
  float: left;
}

.box.alizarin{
border: 3px solid #e74c3c;
}
.box.wisteria{
border: 3px solid #8e44ad;
}
.box.emerland{
border: 3px