import faker from '@shared/infra/faker/Faker';
function teamFactory(): Team {
  const data = {
   name:faker.name(),
   position:faker.pickone(["attack","goalpeecker","midfielder","defender"]),
   height:faker.floating(),
   weight:faker.floating()
  };
  return data;
}
export default teamFactory;
