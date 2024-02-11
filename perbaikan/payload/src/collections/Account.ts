import { CollectionConfig } from 'payload/types'

const Account: CollectionConfig = {
  slug: 'account',
  auth: {
    cookies: {
      sameSite: "strict",
      secure: true,
    }
  },
  admin: {
    useAsTitle: 'username',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      minLength: 4,
      maxLength: 20,
      required: true
    }
  ],
}

export default Account
