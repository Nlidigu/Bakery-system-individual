-- BAKERY POS SYSTEM
-- POSTGRESQL DATABASE VIEWS

-- 1. ORDER DETAILS
CREATE OR REPLACE VIEW order_details_view AS
SELECT
    o.order_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    e.first_name || ' ' || e.last_name AS employee_name,
    o.order_date,
    o.status,
    o.total_amount
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN employees e ON o.employee_id = e.employee_id;

-- 2. DAILY SALES
CREATE OR REPLACE VIEW daily_sales_view AS
SELECT
    order_date,
    COUNT(*) AS total_orders,
    SUM(total_amount) AS total_sales
FROM orders
WHERE status = 'Completed'
GROUP BY order_date;

-- 3. LOW STOCK
CREATE OR REPLACE VIEW low_stock_view AS
SELECT
    ingredient_id,
    name,
    stock_quantity,
    reorder_level,
    unit
FROM ingredients
WHERE stock_quantity <= reorder_level;

-- 4. PURCHASE DETAILS
CREATE OR REPLACE VIEW purchase_details_view AS
SELECT
    p.purchase_id,
    s.name AS supplier_name,
    p.purchase_date,
    p.total_amount,
    p.status
FROM purchases p
JOIN suppliers s ON p.supplier_id = s.supplier_id;