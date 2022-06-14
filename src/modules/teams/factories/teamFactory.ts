import faker from '@shared/infra/faker/Faker';
function teamFactory(): Team {
  const data = {
   name:faker.name(),
    state:faker.string({length:2}),
    birthday:faker.birthday()
  };
  return data;
}
export default teamFactory;
