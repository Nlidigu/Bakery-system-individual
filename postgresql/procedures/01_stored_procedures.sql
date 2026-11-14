
-- BAKERY POS SYSTEM
-- POSTGRESQL STORED PROCEDURES

-- 1. PROCEDURE TO RECORD A NEW ORDER
CREATE OR REPLACE PROCEDURE add_new_order(
    p_order_id VARCHAR(20),
    p_customer_id VARCHAR(20),
    p_employee_id VARCHAR(20),
    p_order_date DATE,
    p_status VARCHAR(30),
    p_total_amount NUMERIC(10,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO orders (
        order_id,
        customer_id,
        employee_id,
        order_date,
        status,
        total_amount
    )
    VALUES (
        p_order_id,
        p_customer_id,
        p_employee_id,
        p_order_date,
        p_status,
        p_total_amount
    );
END;
$$;


-- 2. PROCEDURE TO UPDATE INGREDIENT STOCK
CREATE OR REPLACE PROCEDURE update_ingredient_stock(
    p_ingredient_id VARCHAR(20),
    p_quantity NUMERIC(10,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF p_quantity <= 0 THEN
        RAISE EXCEPTION 'Quantity must be greater than zero';
    END IF;

    UPDATE ingredients
    SET stock_quantity = stock_quantity + p_quantity
    WHERE ingredient_id = p_ingredient_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Ingredient ID does not exist';
    END IF;
END;
$$;
