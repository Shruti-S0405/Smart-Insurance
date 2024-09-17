DELIMITER //
DROP PROCEDURE IF EXISTS GetAllClaims //
CREATE PROCEDURE GetAllClaims(
    IN serviceProvider_id INT
)
BEGIN
    SELECT
        c.claim_id,
        c.ai_check,
        c.`status`,
        GROUP_CONCAT(cs.service_name ORDER BY cs.service_name SEPARATOR ' + ') AS service_names
    FROM
        claims c
    JOIN
        claim_services cs ON c.claim_id = cs.claim_id 
    WHERE
        c.id = serviceProvider_id
    GROUP BY
        c.claim_id, c.ai_check, c.`status`
	ORDER BY 
		c.claim_id;
END //
DELIMITER ;
