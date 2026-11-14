
-- BAKERY POS SYSTEM
-- ORDER AUDIT LOGGING

-- 1. CREATE AUDIT TABLE
CREATE TABLE IF NOT EXISTS audit_logs (
    audit_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    table_name VARCHAR(50) NOT NULL,
    operation VARCHAR(10) NOT NULL,
    record_id VARCHAR(50),
    old_data JSONB,
    new_data JSONB,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    changed_by VARCHAR(100) DEFAULT CURRENT_USER
);

-- 2. CREATE AUDIT FUNCTION
CREATE OR REPLACE FUNCTION log_order_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_logs
        (table_name, operation, record_id, new_data)
        VALUES
        ('orders', 'INSERT', NEW.order_id, to_jsonb(NEW));

        RETURN NEW;

    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_logs
        (table_name, operation, record_id, old_data, new_data)
        VALUES
        ('orders', 'UPDATE', NEW.order_id, to_jsonb(OLD), to_jsonb(NEW));

        RETURN NEW;

    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_logs
        (table_name, operation, record_id, old_data)
        VALUES
        ('orders', 'DELETE', OLD.order_id, to_jsonb(OLD));

        RETURN OLD;
    END IF;

    RETURN NULL;
END;
$$;

-- 3. CREATE AUDIT TRIGGER
DROP TRIGGER IF EXISTS trg_order_audit ON orders;

CREATE TRIGGER trg_order_audit
AFTER INSERT OR UPDATE OR DELETE ON orders
FOR EACH ROW
EXECUTE FUNCTION log_order_changes();
