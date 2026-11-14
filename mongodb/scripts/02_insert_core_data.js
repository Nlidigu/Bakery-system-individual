
// ==========================================
// BAKERY POS SYSTEM
// STEP 7: INSERT CORE SAMPLE DATA
// Database: bakerypos
// ==========================================

const bakery = db.getSiblingDB("bakerypos");

// 1. CUSTOMERS
bakery.customers.insertMany([
  {
    customer_id: "CUST001",
    full_name: "John Kamau",
    phone: "0712345678",
    email: "john@example.com",
    address: "Nairobi",
    customer_type: "Regular"
  },
  {
    customer_id: "CUST002",
    full_name: "Mary Wanjiku",
    phone: "0723456789",
    email: "mary@example.com",
    address: "Kawangware",
    customer_type: "Regular"
  },
  {
    customer_id: "CUST003",
    full_name: "Peter Otieno",
    phone: "0734567890",
    email: "peter@example.com",
    address: "Westlands",
    customer_type: "Walk-in"
  },
  {
    customer_id: "CUST004",
    full_name: "Grace Njeri",
    phone: "0745678901",
    email: "grace@example.com",
    address: "Kilimani",
    customer_type: "Regular"
  },
  {
    customer_id: "CUST005",
    full_name: "David Mwangi",
    phone: "0756789012",
    email: "david@example.com",
    address: "Rongai",
    customer_type: "Wholesale"
  }
]);

// 2. EMPLOYEES
bakery.employees.insertMany([
  {
    employee_id: "EMP001",
    name: "James Maina",
    role: "Manager",
    phone: "0700111222",
    email: "james@bakery.com"
  },
  {
    employee_id: "EMP002",
    name: "Sarah Achieng",
    role: "Cashier",
    phone: "0700222333",
    email: "sarah@bakery.com"
  },
  {
    employee_id: "EMP003",
    name: "Brian Kiptoo",
    role: "Baker",
    phone: "0700333444",
    email: "brian@bakery.com"
  }
]);

// 3. MENU
bakery.menu.insertMany([
  {
    menu_item_id: "MENU001",
    name: "Chocolate Cake",
    description: "Chocolate flavoured cake",
    price: 500,
    is_active: true
  },
  {
    menu_item_id: "MENU002",
    name: "Croissant",
    description: "Fresh butter croissant",
    price: 150,
    is_active: true
  },
  {
    menu_item_id: "MENU003",
    name: "Doughnut",
    description: "Glazed doughnut",
    price: 100,
    is_active: true
  },
  {
    menu_item_id: "MENU004",
    name: "Vanilla Cupcake",
    description: "Vanilla flavoured cupcake",
    price: 120,
    is_active: true
  },
  {
    menu_item_id: "MENU005",
    name: "Bread",
    description: "Fresh white bread",
    price: 80,
    is_active: true
  },
  {
    menu_item_id: "MENU006",
    name: "Meat Pie",
    description: "Freshly baked meat pie",
    price: 180,
    is_active: true
  }
]);

// 4. INGREDIENTS
bakery.ingredients.insertMany([
  {
    ingredient_id: "ING001",
    name: "Wheat Flour",
    stock_quantity: 100,
    unit: "kg",
    reorder_level: 20
  },
  {
    ingredient_id: "ING002",
    name: "Sugar",
    stock_quantity: 50,
    unit: "kg",
    reorder_level: 10
  },
  {
    ingredient_id: "ING003",
    name: "Butter",
    stock_quantity: 30,
    unit: "kg",
    reorder_level: 5
  },
  {
    ingredient_id: "ING004",
    name: "Eggs",
    stock_quantity: 200,
    unit: "pieces",
    reorder_level: 40
  },
  {
    ingredient_id: "ING005",
    name: "Milk",
    stock_quantity: 40,
    unit: "litres",
    reorder_level: 10
  },
  {
    ingredient_id: "ING006",
    name: "Chocolate",
    stock_quantity: 25,
    unit: "kg",
    reorder_level: 5
  },
  {
    ingredient_id: "ING007",
    name: "Cooking Oil",
    stock_quantity: 35,
    unit: "litres",
    reorder_level: 8
  },
  {
    ingredient_id: "ING008",
    name: "Yeast",
    stock_quantity: 15,
    unit: "kg",
    reorder_level: 3
  }
]);

// 5. SUPPLIERS
bakery.suppliers.insertMany([
  {
    supplier_id: "SUP001",
    name: "Nairobi Flour Suppliers",
    email: "flour@example.com",
    phone: "0711000001",
    address: "Industrial Area, Nairobi"
  },
  {
    supplier_id: "SUP002",
    name: "Fresh Dairy Distributors",
    email: "dairy@example.com",
    phone: "0711000002",
    address: "Kiambu, Kenya"
  },
  {
    supplier_id: "SUP003",
    name: "Bakers Choice Supplies",
    email: "bakers@example.com",
    phone: "0711000003",
    address: "Nairobi, Kenya"
  }
]);

print("Core bakery sample data inserted successfully.");
