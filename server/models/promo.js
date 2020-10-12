module.exports = [
  {
    id: "1",
    code: "RRD4D32",
    description: "10% discount for orders above $1000 (pre-discount)",
    type: "productRelated",
    purchaseAmount: 1000,
    percentage: 10,
    productID : "All"
  },
  {
    id: "1",
    code: "44F4T11",
    description: "15% discount for orders above $1500 (pre-discount)",
    type: "percentage",
    purchaseAmount: 1500,
    percentage: 15,
    productID : "All"
  },
  {
    id: "1",
    code: "44F4T11",
    description: "Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased",
    type: "productRelated",
    minItem: 10,
    itemPrice: 8.99,
    productID: "docgen",
  },
  {
    id: "1",
    code: "44F4T11",
    description: "Reduces the form price to $89.99 a unit when at least 1 wf is purchased",
    type: "productRelated",
    minItem: 1,
    itemPrice: 89.99,
    productID: "wf",
  },
];
