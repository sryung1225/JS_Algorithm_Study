SELECT ANIMAL_TYPE,
    CASE
        WHEN NAME IS NULL 
        THEN "No name" 
        else NAME 
        END
    NAME, 
    SEX_UPON_INTAKE
FROM ANIMAL_INS