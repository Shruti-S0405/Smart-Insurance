DELIMITER //

DROP PROCEDURE IF EXISTS GetAllClaimss //

CREATE PROCEDURE GetAllClaimss(
    IN serviceProvider_id INT
)
BEGIN
    SELECT
        c.claim_id,
        c.ai_check,
        c.`status`,
        GROUP_CONCAT(cs.service_name ORDER BY cs.service_name SEPARATOR ' + ') AS service_names
    FROM
        CLAIMS c
    JOIN
        CLAIM_SERVICES cs ON c.claim_id = cs.claim_id 
    WHERE
        c.id = serviceProvider_id
    GROUP BY
        c.claim_id, c.ai_check, c.`status`
    ORDER BY 
        c.claim_id;
END //

DELIMITER ;