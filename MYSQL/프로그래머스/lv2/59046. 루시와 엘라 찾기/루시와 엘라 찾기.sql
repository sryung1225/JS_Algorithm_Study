SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
WHERE "Lucy, Ella, Pickle, ROGAN, Sabrina, Mitty" LIKE CONCAT("%", NAME, "%")
ORDER BY ANIMAL_ID ASC