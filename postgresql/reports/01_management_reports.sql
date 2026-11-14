
-- BAKERY POS SYSTEM
-- MANAGEMENT REPORTS AND ANALYTICS

-- 1. TOTAL SALES AND NUMBER OF ORDERS
SELECT
    COUNT(*) AS total_orders,
    SUM(total_amount) AS total_sales,
    AVG(total_amount) AS average_order_value
FROM orders
WHERE status = 'Completed';


-- 2. BEST SELLING PRODUCTS
SELECT
    m.name AS product_name,
    SUM(oi.quantity) AS quantity_sold,
    SUM(oi.subtotal) AS total_revenue
FROM order_items oi
JOIN menu m ON oi.menu_item_id = m.menu_item_id
JOIN orders o ON oi.order_id = o.order_id
WHERE o.status = 'Completed'
GROUP BY m.name
ORDER BY quantity_sold DESC;


-- 3. CUSTOMER PURCHASE REPORT
SELECT
    c.first_name || ' ' || c.last_name AS customer_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.status = 'Completed'
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY total_spent DESC;


-- 4. INGREDIENT STOCK REPORT
SELECT
    ingredient_id,
    name,
    stock_quantity,
    reorder_level,
    unit,
    CASE
        WHEN stock_quantity <= reorder_level THEN 'REORDER REQUIRED'
        ELSE 'STOCK SUFFICIENT'
    END AS stock_status
FROM ingredients
ORDER BY stock_quantity ASC;


-- 5. SUPPLIER PURCHASE REPORT
SELECT
    s.name AS supplier_name,
    COUNT(p.purchase_id) AS number_of_purchases,
    SUM(p.total_amount) AS total_purchase_value
FROM suppliers s
JOIN purchases p ON s.supplier_id = p.supplier_id
GROUP BY s.supplier_id, s.name
ORDER BY total_purchase_value DESC;


-- 6. PAYMENT METHOD REPORT
SELECT
    payment_method,
    COUNT(payment_code) AS number_of_payments,
    SUM(amount) AS total_amount
FROM payments
WHERE status = 'Paid'
GROUP BY payment_method
ORDER BY total_amount DESC;
