import {Session} from "next-auth";

export const dummySession: Session = {
  user: {
    userId: 'dummy_id',
    name: 'dummy',
    email: 'dummy-email@dummy.com',
    image: 'https://picsum.photos/240'
  },
  expires: '2099-03-25T12:00:00.000'
}
