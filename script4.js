//Convert the UML diagram to Typescript class. - use number for double
class Circle {
    private radius: number;
    private color: string;
  
    constructor(radius: number = 1.0, color: string = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    // Getter and setter for radius
    getRadius(): number {
      return this.radius;
    }
  
    setRadius(radius: number): void {
      this.radius = radius;
    }
  
    // Getter and setter for color
    getColor(): string {
      return this.color;
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  
    // Method to calculate area
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    // Method to calculate circumference
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
  
    // Method to convert circle to string
    toString(): string {
      return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
    }
  }
  
  // Example usage:
  const circle1 = new Circle(); 
  console.log(circle1.toString()); 
  console.log("Area:", circle1.getArea()); 
  console.log("Circumference:", circle1.getCircumference()); 
  
  const circle2 = new Circle(2.5, "blue"); 
  console.log(circle2.toString()); 
  console.log("Area:", circle2.getArea()); 
  console.log("Circumference:", circle2.getCircumference()); 
  