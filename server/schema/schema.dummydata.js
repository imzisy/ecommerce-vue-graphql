const graphql = require("graphql");
// dumy data it can be retrive from database as well
const products = require("../models/product");
const promos = require("../models/promo");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat
} = graphql;

const PromoType = new GraphQLObjectType({
  name: "Promo",
  fields: () => ({
    id: { type: GraphQLID },
    code: { type: GraphQLString },
    description: { type: GraphQLString },
    type: { type: GraphQLString },
    minItem: { type: GraphQLInt },
    purchaseAmount: { type: GraphQLInt },
    itemPrice: { type: GraphQLFloat },
    productID: { type: GraphQLString },
    product: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return products.filter(x => x.productID === parent.productID);
      }
    }
  })
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    productID: { type: GraphQLString },
    promos: {
      type: new GraphQLList(PromoType),
      resolve(parent, args) {
        return promos.filter(x => x.productID === parent.productID | x.productID === "All");
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      product: {
        type: ProductType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return products.find(x => x.id === args.id);
        }
      },
      promo: {
        type: PromoType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return promos.find(x => x.id === args.id);
        }
      },
      products: {
        type: new GraphQLList(ProductType),
        resolve(parent, args) {
          return products;
        }
      },
      promos: {
        type: new GraphQLList(PromoType),
        resolve(parent, args) {
          return promos;
        }
      }
    }
  })
});
