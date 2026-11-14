
const bakery = db.getSiblingDB("bakerypos");

// ==========================================
// 1. MENU INGREDIENT RELATIONSHIPS
// ==========================================

bakery.menu_ingredients.insertMany([
  {
    menu_item_id: "MENU001",
    ingredient_id: "ING002",
    qty_required: 0.2,
    unit: "kg"
  },
  {
    menu_item_id: "MENU001",
    ingredient_id: "ING003",
    qty_required: 0.1,
    unit: "kg"
  },
  {
    menu_item_id: "MENU001",
    ingredient_id: "ING004",
    qty_required: 2,
    unit: "pieces"
  },
  {
    menu_item_id: "MENU001",
    ingredient_id: "ING006",
    qty_required: 0.15,
    unit: "kg"
  },
  {
    menu_item_id: "MENU002",
    ingredient_id: "ING001",
    qty_required: 0.2,
    unit: "kg"
  },
  {
    menu_item_id: "MENU002",
    ingredient_id: "ING003",
    qty_required: 0.08,
    unit: "kg"
  },
  {
    menu_item_id: "MENU003",
    ingredient_id: "ING001",
    qty_required: 0.1,
    unit: "kg"
  },
  {
    menu_item_id: "MENU003",
    ingredient_id: "ING002",
    qty_required: 0.05,
    unit: "kg"
  }
]);

// ==========================================
// 2. CUSTOMER ORDERS
// ==========================================

bakery.orders.insertMany([
  {
    order_id: "ORD001",
    customer_id: "CUST001",
    employee_id: "EMP002",
    order_date: new Date("2026-11-10"),
    status: "Completed",
    total_amount: 800
  },
  {
    order_id: "ORD002",
    customer_id: "CUST002",
    employee_id: "EMP002",
    order_date: new Date("2026-11-11"),
    status: "Completed",
    total_amount: 460
  },
  {
    order_id: "ORD003",
    customer_id: "CUST003",
    employee_id: "EMP001",
    order_date: new Date("2026-11-12"),
    status: "Pending",
    total_amount: 660
  }
]);

// ==========================================
// 3. ORDER ITEMS
// ==========================================

bakery.order_items.insertMany([
  {
    item_id: "ITEM001",
    order_id: "ORD001",
    menu_item_id: "MENU001",
    quantity: 1,
    unit_price: 500,
    subtotal: 500
  },
  {
    item_id: "ITEM002",
    order_id: "ORD001",
    menu_item_id: "MENU002",
    quantity: 2,
    unit_price: 150,
    subtotal: 300
  },
  {
    item_id: "ITEM003",
    order_id: "ORD002",
    menu_item_id: "MENU003",
    quantity: 3,
    unit_price: 100,
    subtotal: 300
  },
  {
    item_id: "ITEM004",
    order_id: "ORD002",
    menu_item_id: "MENU005",
    quantity: 2,
    unit_price: 80,
    subtotal: 160
  },
  {
    item_id: "ITEM005",
    order_id: "ORD003",
    menu_item_id: "MENU004",
    quantity: 4,
    unit_price: 120,
    subtotal: 480
  },
  {
    item_id: "ITEM006",
    order_id: "ORD003",
    menu_item_id: "MENU006",
    quantity: 1,
    unit_price: 180,
    subtotal: 180
  }
]);

// ==========================================
// 4. PAYMENTS
// ==========================================

bakery.payments.insertMany([
  {
    payment_id: "PAY001",
    order_id: "ORD001",
    payment_date: new Date("2026-11-10"),
    method: "M-Pesa",
    amount: 800,
    status: "Paid"
  },
  {
    payment_id: "PAY002",
    order_id: "ORD002",
    payment_date: new Date("2026-11-11"),
    method: "Cash",
    amount: 460,
    status: "Paid"
  },
  {
    payment_id: "PAY003",
    order_id: "ORD003",
    payment_date: new Date("2026-11-12"),
    method: "Card",
    amount: 660,
    status: "Pending"
  }
]);

// ==========================================
// 5. PURCHASES
// ==========================================

bakery.purchases.insertMany([
  {
    purchase_id: "PUR001",
    supplier_id: "SUP001",
    purchase_date: new Date("2026-11-08"),
    total_cost: 1800,
    status: "Received"
  },
  {
    purchase_id: "PUR002",
    supplier_id: "SUP002",
    purchase_date: new Date("2026-11-09"),
    total_cost: 1200,
    status: "Received"
  }
]);

// ==========================================
// 6. PURCHASE ITEMS
// ==========================================

bakery.purchase_items.insertMany([
  {
    purchase_item_id: "PI001",
    purchase_id: "PUR001",
    ingredient_id: "ING001",
    quantity: 20,
    unit_cost: 60,
    subtotal: 1200
  },
  {
    purchase_item_id: "PI002",
    purchase_id: "PUR001",
    ingredient_id: "ING002",
    quantity: 10,
    unit_cost: 60,
    subtotal: 600
  },
  {
    purchase_item_id: "PI003",
    purchase_id: "PUR002",
    ingredient_id: "ING003",
    quantity: 10,
    unit_cost: 80,
    subtotal: 800
  },
  {
    purchase_item_id: "PI004",
    purchase_id: "PUR002",
    ingredient_id: "ING005",
    quantity: 10,
    unit_cost: 40,
    subtotal: 400
  }
]);

print("Bakery relationship data inserted successfully.");
