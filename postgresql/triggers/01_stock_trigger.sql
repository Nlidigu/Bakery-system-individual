
-- BAKERY POS SYSTEM
-- AUTOMATIC INGREDIENT STOCK UPDATE TRIGGER

-- 1. CREATE THE TRIGGER FUNCTION
CREATE OR REPLACE FUNCTION increase_ingredient_stock()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE ingredients
    SET stock_quantity = stock_quantity + NEW.quantity
    WHERE ingredient_id = NEW.ingredient_id;

    RETURN NEW;
END;
$$;

-- 2. CREATE THE TRIGGER
DROP TRIGGER IF EXISTS trg_increase_ingredient_stock
ON purchase_items;

CREATE TRIGGER trg_increase_ingredient_stock
AFTER INSERT ON purchase_items
FOR EACH ROW
EXECUTE FUNCTION increase_ingredient_stock();
