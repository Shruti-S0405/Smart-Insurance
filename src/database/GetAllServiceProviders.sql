DELIMITER $$

CREATE PROCEDURE GetAllServiceProviders()
BEGIN
    SELECT * FROM serviceprovider;
END$$

DELIMITER ;
