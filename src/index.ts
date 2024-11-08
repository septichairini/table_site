import { console } from "inspector/promises";
import { BaseResponse } from "./models/base_response";
import { Person, Gender, Zodiac } from "./models/person";

function main() {
  const person: Person = new Person();
  person.name = "Yoyo";
  person.age = 25;
  person.weight = 78;
  person.height = 168;
  person.gender = Gender.Male;
  person.zodiac = Zodiac.Aries;
  person.isMarried = false;
  person.isDating = true;

  console.log("BMI:", person.calculateBMI());
  console.log(Geometry.calculateArea(10));
  const baseResponse = new BaseResponse<Person>(200, "Success", person);
  console.log(baseResponse.data.name);
}

main();
