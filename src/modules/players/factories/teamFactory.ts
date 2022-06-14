import faker from '@shared/infra/faker/Faker';
function teamFactory(): Team {
  const data = {
   name:faker.name(),
   birthday:faker.birthday(),
   state:faker.state(),
  };
  return data;
}
export default teamFactory;
