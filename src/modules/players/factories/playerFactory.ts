import faker from '@shared/infra/faker/Faker';
function playerFactory(): Player {
  const data = {
   name:faker.name(),
  position:faker.pickone(["attack","goalpeecker","midfielder","defender"]),
  height:faker.floating(),
  wheight:faker.floating()
  };
  return data;
}
export default playerFactory;
