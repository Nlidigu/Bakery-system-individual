
use("bakerypos");

// 1. Total bakery sales and total orders
print("\n--- TOTAL SALES REPORT ---");
db.orders.aggregate([
  {
    $group: {
      _id: null,
      total_sales: {$sum: "$total_amount"},
      total_orders: {$sum: 1}
    }
  }
]).forEach(printjson);

// 2. Sales grouped by order status
print("\n--- SALES BY STATUS ---");
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      number_of_orders: {$sum: 1},
      total_sales: {$sum: "$total_amount"}
    }
  }
]).forEach(printjson);

// 3. Best-selling products
print("\n--- BEST-SELLING PRODUCTS ---");
db.order_items.aggregate([
  {
    $group: {
      _id: "$menu_item_id",
      total_quantity_sold: {$sum: "$quantity"},
      total_revenue: {$sum: "$subtotal"}
    }
  },
  {
    $sort: {total_quantity_sold: -1}
  }
]).forEach(printjson);

// 4. Daily sales
print("\n--- DAILY SALES REPORT ---");
db.orders.aggregate([
  {
    $group: {
      _id: "$order_date",
      daily_orders: {$sum: 1},
      daily_sales: {$sum: "$total_amount"}
    }
  },
  {
    $sort: {_id: 1}
  }
]).forEach(printjson);

// 5. Product sales with product names
print("\n--- PRODUCT SALES WITH NAMES ---");
db.order_items.aggregate([
  {
    $group: {
      _id: "$menu_item_id",
      total_quantity_sold: {$sum: "$quantity"},
      total_revenue: {$sum: "$subtotal"}
    }
  },
  {
    $lookup: {
      from: "menu",
      localField: "_id",
      foreignField: "menu_item_id",
      as: "product_details"
    }
  },
  {$unwind: "$product_details"},
  {
    $project: {
      _id: 0,
      product_name: "$product_details.name",
      total_quantity_sold: 1,
      total_revenue: 1
    }
  },
  {$sort: {total_quantity_sold: -1}}
]).forEach(printjson);

// 6. Payment method report
print("\n--- PAYMENT METHOD REPORT ---");
db.payments.aggregate([
  {
    $group: {
      _id: "$payment_method",
      number_of_payments: {$sum: 1},
      total_collected: {$sum: "$amount"}
    }
  },
  {$sort: {total_collected: -1}}
]).forEach(printjson);

print("\nAll aggregation reports completed.");
