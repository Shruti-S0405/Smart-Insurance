DELIMITER //
DROP PROCEDURE IF EXISTS UpdateClaimStatus //
CREATE PROCEDURE UpdateClaimStatus(
    IN p_claim_id INT,
    IN p_status VARCHAR(30)
)
BEGIN
    UPDATE CLAIMS
    SET `status` = p_status
    WHERE claim_id = p_claim_id;
END //

DELIMITER ;
