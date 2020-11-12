
const circle = {
    radius: 10,
    circumference: function () {
        return (2 * Math.PI * this.radius);
    },
    diameter() {
        return (this.radius * 2);
    },
    area: () => {
        return (Math.PI * Math.PI * this.radius);
    }
}
console.log(circle.area()); //
console.log(circle.diameter()); // 
console.log(circle.circumference()); // 