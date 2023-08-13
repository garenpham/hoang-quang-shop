export default {
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    {name: 'name', title: 'Tên mặt hàng', type: 'string'},
    {name: 'manufacturer', title: 'Hãng sản xuất', type: 'string'},
    {name: 'isAvailable', title: 'Còn hàng?', type: 'boolean', initialValue: true},
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
    {
      name: 'images',
      title: 'Hình ảnh',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {name: 'price', title: 'Giá cả', type: 'string'},
    {
      name: 'description',
      title: 'Thông tin chi tiết',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}
