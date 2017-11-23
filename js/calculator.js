export class Calc {
  constructor() {
 }

  AgeToSeconds(age) {
    return age * 31556952;
  }

  DateToSeconds(date) {
    return this.EarthAge(date) * 31556952;
  }

  DatesDifference(dateOne, dateTwo) {
    return (this.DateToSeconds(dateTwo)) - (this.DateToSeconds(dateOne)) / 1000;
  }

  EarthAge(date) {
    let currentdate = new Date();
    let birthdate = new Date(date);
    const age = new Date(currentdate - birthdate).getFullYear()-1970;
    return age;
  }

  MercuryAge(date) {
    return Math.round(this.EarthAge(date) / .24)
  }

  VenusAge(date) {
    return Math.round(this.EarthAge(date) / .62);
  }

  MarsAge(date) {
    return Math.round(this.EarthAge(date) / 1.88);
  }

  JupiterAge(date) {
    return Math.round(this.EarthAge(date) / 11.86);
  }

  LifeExpectancy(gender) {
    let averageEarthLife = 70;
    if (gender == "male") {
      return averageEarthLife -= 10;
    } else if
      (gender !== "male") {
      return averageEarthLife += 10;
    }
  }

  LifeMercury() {
    return Math.round(this.LifeExpectancy(gender) / 0.24);
  }

  LifeVenus() {
    return Math.round(this.LifeExpectancy(gender) / 0.62);
  }

  LifeMars() {
    return Math.round(this.LifeExpectancy(gender) / 1.88);
  }

  LifeJupiter() {
    return Math.round(this.LifeExpectancy(gender) / 11.86);
  }
}
