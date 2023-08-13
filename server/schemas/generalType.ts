export default {
  name: 'generalType',
  title: 'Phân loại chung',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {
      name: 'specificTypes',
      title: 'Danh sách riêng',
      type: 'array',
      of: [{type: 'reference', to: {type: 'specificType'}}],
    },
    {
      name: 'products',
      title: 'Danh sách sản phẩm thuộc nhóm này',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    },
  ],
}
