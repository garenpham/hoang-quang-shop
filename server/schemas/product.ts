export default {
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    {name: 'name', title: 'Tên mặt hàng', type: 'string'},
    {
      name: 'generalType',
      title: 'Phân loại chung',
      type: 'reference',
      to: {type: 'generalType'},
    },
    {
      name: 'specificType',
      title: 'Phân loại riêng',
      type: 'reference',
      to: {type: 'specificType'},
    },
    {name: 'image', title: 'Hình ảnh', type: 'image', options: {hotspot: true}},
    {name: 'price', title: 'Giá cả', type: 'number'},
    {
      name: 'description',
      title: 'Thông tin chi tiết',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}
