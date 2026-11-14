
use("bakerypos");

// MENU VALIDATION
db.runCommand({
  collMod: "menu",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["menu_item_id", "name", "price"],
      properties: {
        menu_item_id: {bsonType: "string"},
        name: {bsonType: "string"},
        price: {
          bsonType: ["int", "double", "decimal"],
          minimum: 0
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// INGREDIENT VALIDATION
db.runCommand({
  collMod: "ingredients",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ingredient_id", "stock_quantity"],
      properties: {
        ingredient_id: {bsonType: "string"},
        stock_quantity: {
          bsonType: ["int", "long", "double", "decimal"],
          minimum: 0
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// ORDER VALIDATION
db.runCommand({
  collMod: "orders",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "order_id", "customer_id", "employee_id",
        "order_date", "status", "total_amount"
      ],
      properties: {
        order_id: {bsonType: "string"},
        customer_id: {bsonType: "string"},
        employee_id: {bsonType: "string"},
        order_date: {bsonType: "string"},
        status: {
          enum: ["Completed", "Pending", "Cancelled"]
        },
        total_amount: {
          bsonType: ["int", "long", "double", "decimal"],
          minimum: 0
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

print("Bakery data validation rules configured.");
