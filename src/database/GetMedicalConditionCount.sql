DELIMITER $$
DROP PROCEDURE IF EXISTS GetMedicalConditionCount $$
CREATE PROCEDURE GetMedicalConditionCount(
    IN serviceProvider_id INT
)
BEGIN
    SELECT
		PMCC.`name`,
        MCC.condition_value
    FROM
        MEDICAL_CONDITION_COUNT MCC
	JOIN 
		PATIENT_MEDICAL_CONDITION_CODE PMCC ON 	MCC.condition_code = PMCC.condition_code;
END$$

DELIMITER ;

