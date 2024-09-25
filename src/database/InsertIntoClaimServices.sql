DELIMITER //
DROP PROCEDURE IF EXISTS InsertIntoClaimServices //
CREATE PROCEDURE InsertIntoClaimServices(
    IN p_claim_id INT,
    IN p_service_name VARCHAR(255)
)
BEGIN
    INSERT INTO CLAIM_SERVICES (claim_id, service_name)
    VALUES (p_claim_id, p_service_name);
END //

DELIMITER ; 