import { createModule } from "@composabase/sdk"

const website = () => {
  const module = createModule('website')

  module.type('site_Page', {
    featuredProducts: {
      definition: {
        selectionSet: `{
          isFeaturedShown
        }`,
        type: module.list(module.scalar('commerce_Product')),
      },
      resolver: 'featured-products'
    }
  })

  return module
}

export default website()
