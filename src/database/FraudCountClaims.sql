DELIMITER //
DROP PROCEDURE IF EXISTS AICheckCountClaimsById //
CREATE PROCEDURE AICheckCountClaimsById()
BEGIN
    -- Select counts for each provider (id)
    SELECT 
        id AS ProviderID,
        SUM(CASE WHEN ai_check = 'fraudulent' THEN 1 ELSE 0 END) AS FraudulentCount,
        SUM(CASE WHEN ai_check = 'legitimate' THEN 1 ELSE 0 END) AS LegitimateCount
    FROM 
        CLAIMS
    GROUP BY 
        id;
END //
DELIMITER ;