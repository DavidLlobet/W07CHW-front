import { image } from "faker";
import { lorem } from "faker/locale/en";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  id: sequence,
  name: lorem.sentence(10),
  username: lorem.sentence(10),
  password: lorem.sentence(10),
  image: image.abstract(),
  bio: lorem.sentence(100),
  friends: lorem.sentence(10),
  enemies: lorem.sentence(10),
}));

export const getRandomUser = () => factory.build();
export const getRandomUsers = (count = 5) => factory.buildList(count);
