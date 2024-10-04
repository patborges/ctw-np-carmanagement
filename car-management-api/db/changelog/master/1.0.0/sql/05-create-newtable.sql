
-- FOR FUTURE IMPLEMENTATION
-- eventually login so there's a different menu according to permissions (if it's a regular user or admin)

set search_path to car_management;

CREATE TABLE USER 
(
    ID          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    NAME        VARCHAR(50)     NOT NULL,
    EMAIL       VARCHAR(100)    NOT NULL,
    PASSWORD    VARCHAR(255)    NOT NULL,
    PERMISSION  BOOLEAN         NOT NULL 
    -- 0 - USER / 1 - ADMIN
)