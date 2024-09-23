DELIMITER $$

CREATE PROCEDURE GetAllServiceProviders()
BEGIN
    SELECT
        SP.provider_id,
        SP.`name`,
        SP.provider_type,
        SP.region_id,
        SP.`status`,
        SP.no_of_claims
    FROM
        serviceprovider;
END$$

DELIMITER ;
