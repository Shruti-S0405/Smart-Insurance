DELIMITER //
DROP PROCEDURE IF EXISTS InsertIntoClaims //
CREATE PROCEDURE InsertIntoClaims(
    IN p_provider_id INT,
    IN p_claim_id INT,
    IN ai_check VARCHAR(255),
    IN p_status VARCHAR(255)
)
BEGIN
    INSERT INTO CLAIMS (id, claim_id, ai_check, `status`)
    VALUES (p_provider_id, p_claim_id, ai_check, p_status);
END //
DELIMITER ;
