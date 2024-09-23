/* didnt execute it yet*/

CREATE PROCEDURE GetAllServiceProviders()
BEGIN
    SELECT 
		SP.provider_id,
        SP.`name`,
        SP.provider_type,
        SP.region_id,
        SP.`status`,
        COUNT(*) AS no_of_claims
    FROM 
		SERVICEPROVIDER SP
    JOIN 
		CLAIMS C ON SP.provider_id=C.id
	GROUP BY SP.provider_id;
END$$

DELIMITER ;
