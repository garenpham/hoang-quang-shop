export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: 'Phở',
      options: {
        list: [
          {title: 'Phở', value: 'pho'},
          {title: 'Bún', value: 'bun'},
          {title: 'Drink', value: 'drink'},
        ],
      },
    },
    {
      name: 'isGallery',
      title: 'Put in Gallery?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isSpecial',
      title: 'Put in Specials?',
      type: 'boolean',
      initialValue: false,
    },
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'price', title: 'Price', type: 'number'},
    {name: 'description', title: 'Description', type: 'text'},
  ],
}
