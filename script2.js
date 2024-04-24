//Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender, email, phone) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.email = email;
      this.phone = phone;
    }
  
    // Getter methods
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getEmail() {
      return this.email;
    }
  
    getPhone() {
      return this.phone;
    }
  
    // Setter methods
    setName(name) {
      this.name = name;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setGender(gender) {
      this.gender = gender;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setPhone(phone) {
      this.phone = phone;
    }
  
    // Method to display details
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Email: ${this.email}`);
      console.log(`Phone: ${this.phone}`);
    }
  }
  
  // Example usage:
  const person = new Person("John Doe", 30, "Male", "john.doe@example.com", "123-456-7890");
  person.displayDetails();
  