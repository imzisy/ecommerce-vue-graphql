import gql from 'graphql-tag';

export const GET_ALL_PRODUCTS_QUERY = gql`
    {
        products {
            id
            name
            productID
            price
        }
    }
`;

export const GET_PRODUCT_QUERY = gql`
    query product($id: ID!) {
        product(id: $id) {
            id
            name
            productID
            price
            promos {
                code
                description
            }
        }
    }
`;